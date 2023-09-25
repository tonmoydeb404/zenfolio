import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type PathType = "portfolio" | "page";

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");

  if (secret !== process.env.SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!tag && !path) {
    return NextResponse.json(
      { message: "Invalid tag & path" },
      { status: 400 }
    );
  }

  if (tag) {
    revalidateTag(tag);
  }

  if (path) {
    switch (path as PathType) {
      case "portfolio": {
        console.log(request);
        break;
      }
      case "page": {
        console.log(request);
        break;
      }

      default:
        break;
    }
    // revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
