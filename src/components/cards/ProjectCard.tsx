import Image from "next/image";
import Link from "next/link";
import { BiBookOpen, BiGitBranch, BiLinkExternal } from "react-icons/bi";

type Props = {
  title: string;
  desc: string;
  thumbnail?: string;
  detailsLink?: string;
  previewLink?: string;
  sourceLink?: string;
  techs?: string[];
};

const ProjectCard = ({
  title,
  desc,
  thumbnail,
  detailsLink,
  previewLink,
  sourceLink,
  techs,
}: Props) => {
  return (
    <article className="project-card">
      {thumbnail ? (
        <div className="project-card_media">
          <Image src={thumbnail} alt={title} fill />
        </div>
      ) : null}

      <div className="project-card_body">
        <h2 className="project-card_title">
          {detailsLink ? (
            <Link href={detailsLink} className="hover:text-primary">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className="project-card_desc">{desc}</p>
        <div className="project-card_links">
          {detailsLink ? (
            <Link href={detailsLink} title="Learn More">
              <BiBookOpen />
            </Link>
          ) : null}
          {previewLink ? (
            <Link href={previewLink} className="ml-auto" title="Preview">
              <BiLinkExternal />
            </Link>
          ) : null}
          {sourceLink ? (
            <Link href={sourceLink} title="Source Code">
              <BiGitBranch />
            </Link>
          ) : null}
        </div>
        {techs ? (
          <div className="project-card_techs">
            {techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
