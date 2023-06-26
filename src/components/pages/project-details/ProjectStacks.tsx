type Props = {
  stacks?: string[];
  className?: string;
};

const ProjectStacks = ({ stacks = [], className = "" }: Props) => {
  return (
    <section className={`${className}`}>
      <h2 className="text-2xl font-semibold mb-4">Project Stacks</h2>
      {stacks ? (
        <ul className="flex items-center flex-wrap gap-1">
          {stacks.map((stack, index) => (
            <li
              className={`px-3 py-1 bg-white dark:bg-accent font-medium border`}
              key={stack + index}
            >
              {stack}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default ProjectStacks;
