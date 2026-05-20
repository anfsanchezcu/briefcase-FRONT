import CardProject from "@/Components/UI/CardProject";
import { getProjects } from "@/Services/projectService";

type Project = {
  title: string;
  description: string;
  github: string;
  demo: string;
  imageUrl: string;
};

const data: Project[] = await getProjects();

export const MyBriefcase = () => {
  return (
    <div className="flex flex-row justify-center align-middle self-center h-full items-center gap-3 flex-wrap">
      {data.map((project: Project, index: number) => (
        <CardProject
          key={index}
          title={project.title}
          description={project.description}
          github={project.github}
          demo={project.demo}
          image={project.imageUrl}
        />
      ))}
    </div>
  );
};
