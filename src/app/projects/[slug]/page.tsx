import BreadCrumbs from "@/components/pages/common/BreadCrumbs";
import ProjectDetailsHeader from "@/components/pages/project-details/ProjectDetailsHeader";
import ProjectStacks from "@/components/pages/project-details/ProjectStacks";
import projectBreadCrumbs from "@/config/breadcrumbs/project-breadcrumb";

const ProjectDetails = () => {
  return (
    <>
      <BreadCrumbs links={projectBreadCrumbs} />
      <ProjectDetailsHeader
        title="Track Taka"
        desc="Track Taka is an expense tracker application to help you in daily life money management. It allows you to track your regular expenses & income. Built with React JS, TailwindCSS, IndexedDB, and Firebase"
        thumbnail="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FNqkgTyrRBWya4HluwDiU&w=1920&q=75"
        previewLink="#"
        sourceLink="#"
        className="mb-16"
      />
      <article className="prose dark:prose-invert">
        <p>
          <strong>Track Taka</strong> is an expense tracker application to help
          you in daily life money management. It allows you to track your
          regular expenses &amp; income. so at the end of the month, you can
          quickly get a summary of your monthly expense.&nbsp;
          <strong>Track Taka</strong> app builds with React JS &amp; IndexedDB
          database. also, there is a firebase integration for making backups of
          your data but this is optional. PWA - Progressive Web App feature also
          enabled so you can use this app in offline mode too and install this
          web application to your device like any other native app.
        </p>
        <h3>
          <strong>Features</strong>
        </h3>
        <ul>
          <li>
            <div>
              <p>Manage your daily transactions</p>
            </div>
          </li>
          <li>
            <div>
              <p>Transactions dashboard to get a quick overview.</p>
            </div>
          </li>
          <li>
            <div>
              <p>Install like any other app on any platform</p>
            </div>
          </li>
          <li>
            <div>
              <p>Offline support</p>
            </div>
          </li>
          <li>
            <div>
              <p>Backup or Import transactions&nbsp;</p>
            </div>
          </li>
        </ul>
        <p></p>
      </article>

      <ProjectStacks
        stacks={["firebase", "react js", "indexeddb", "tailwindcss", "pwa"]}
        className="mt-16"
      />
    </>
  );
};

export default ProjectDetails;
