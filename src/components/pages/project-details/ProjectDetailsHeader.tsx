import { buttonVariants } from "@/components/ui/button";
import projectIcons from "@/config/icons/project-icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  thumbnail?: string;
  title: string;
  desc: string;
  sourceLink?: string;
  previewLink?: string;
  className?: string;
};

const ProjectDetailsHeader = ({
  title,
  desc,
  thumbnail,
  previewLink,
  sourceLink,
  className = "",
}: Props) => {
  return (
    <header className={`flex flex-col gap-5 ${className}`}>
      {thumbnail ? (
        <div className="project-details-header_media aspect-video relative rounded overflow-hidden">
          <Image fill src={thumbnail} alt={title} />
        </div>
      ) : null}

      <section>
        <h1 className="project-details-header_title text-3xl font-semibold mb-2">
          {title}
        </h1>
        <p className="project-details-header_desc leading-relaxed text-[15px] sm:text-base opacity-90">
          {desc}
        </p>
      </section>

      <div className="flex items-center justify-end gap-1">
        {previewLink ? (
          <Link href={previewLink} className={buttonVariants()} target="_blank">
            PREVIEW <projectIcons.PREVIEW />
          </Link>
        ) : null}
        {sourceLink ? (
          <Link
            href={sourceLink}
            className={buttonVariants({ variant: "secondary" })}
            target="_blank"
          >
            SOURCE <projectIcons.PREVIEW />
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default ProjectDetailsHeader;
