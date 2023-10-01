import { Button } from "@/components/ui/button";
import icons from "@/config/icons";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <div className="flex items-center gap-1 text-7xl mb-1">
        <b>404</b>
        <icons.SAD />
      </div>

      <p className="text-base mb-5">Sorry, could not find requested resource</p>
      <Button variant={"link"} asChild>
        <Link href={"/"}>
          Back to Home <icons.RIGHT className="ml-1" />
        </Link>
      </Button>
    </div>
  );
}
