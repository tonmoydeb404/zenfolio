import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type PathType = "portfolio" | "page";

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get("secret");
    const tag = request.nextUrl.searchParams.get("tag");
    const path = request.nextUrl.searchParams.get("path");

    // block from unwanted api request
    if (secret !== process.env.SECRET_TOKEN) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // make sure tag or path is valid
    if (!tag && !path) {
      throw new Error(
        "tag & path not provided. you have to provide at least one value!"
      );
    }

    // revalidate tag
    if (tag) {
      revalidateTag(tag);
    }

    // revalidate path
    if (path) {
      // read request body
      const body = await request.json();

      // make sure body is valid
      if (!body) throw new Error("Invalid request body");

      // restrict unwanted path validation
      switch (path as PathType) {
        case "portfolio": {
          // check slug
          if (!body.data?.slug) throw new Error("Project slug not provided");
          // revalidate page slug
          revalidatePath(`/portfolio/${body.data.slug}`);
          revalidateTag("projects");
          break;
        }
        case "page": {
          // check slug
          if (!body.data?.slug) throw new Error("Page slug not provided");
          // revalidate page slug
          revalidatePath(`/${body.data.slug}`);
          break;
        }
        default: {
          throw new Error("Invalid path!");
          break;
        }
      }
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Something went to wrong" },
      { status: 400 }
    );
  }
}
