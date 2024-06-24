import ProjectCard from "../components/ProjectCard";
import { useProjectsContext } from "../pages/Browse";

const ProjectsContainer = () => {
    const {filteredProjects} = useProjectsContext();
  return (
    <div>
        {filteredProjects.map((project, index)=>{
            const {title,
              days,
              verified,
              avg_bid,
              num_bid,
              text,
              tags,} = project;
              return <ProjectCard title={title} days={days} verified={verified} avg_bid={avg_bid} num_bid={num_bid} text={text} tags={tags} key={index}></ProjectCard>
          })}
    </div>
  )
}
export default ProjectsContainer