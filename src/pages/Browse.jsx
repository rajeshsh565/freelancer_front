import PageBtnContainer from "../components/PageBtnContainer";
import FilterContainer from "../components/FilterContainer";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import ProjectsContainer from "../components/ProjectsContainer";
import projects from "../utils/projects";
import { createContext, useContext } from "react";


export const loader = ({request}) => {
  const queryParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const data = [...projects];
  const totalProjects = data.length;
  const totalPages = Math.ceil(totalProjects/5);
  const currentPage = queryParams.page || 1;
  if(queryParams.sort_options == "newest"){
    data.reverse();
  }
  if(queryParams.sort_options == "lowest_budget"){
    data.sort((a,b)=>a.avg_bid-b.avg_bid)
  }
  if(queryParams.sort_options == "highest_budget"){
    data.sort((a,b)=>b.avg_bid-a.avg_bid)
  }
  if(queryParams.sort_options == "lowest_bid"){
    data.sort((a,b)=>a.num_bid-b.num_bid)
  }
  if(queryParams.sort_options == "highest_bid"){
    data.sort((a,b)=>b.num_bid-a.num_bid)
  }
  let filteredProjects = [];
  
  if((!queryParams.page) || queryParams.page==1){
    filteredProjects = data.slice(0,5)
  }
  if(queryParams.page>1){
    filteredProjects = data.slice(queryParams.page*5-5, queryParams.page*5);
  }
  return {filteredProjects, queryParams, totalProjects, totalPages, currentPage};
}

const ProjectsContext = createContext();

const Browse = () => {
  const submit = useSubmit();
  const {filteredProjects, queryParams, totalPages, totalProjects, currentPage} = useLoaderData();
  return (
    <ProjectsContext.Provider value={{filteredProjects, queryParams, totalPages, totalProjects, currentPage}}>
    <div className="container py-4">
      <div className="row">
        <div className="col-3">
          <FilterContainer></FilterContainer>
        </div>
        <div className="col-9">
          <div className="d-flex justify-content-between align-items-center" style={{ height: "4rem" }}>
            <div>
              <Form>
              <select name="sort_options" id="sort_options" className="mb-3" onChange={(e)=>submit(e.currentTarget.form)}>
                <option value="newest">Newest First</option>
                <option value="lowest_budget">Lowest Budget First</option>
                <option value="highest_budget">Highest Budget First</option>
                <option value="lowest_bid">Lowest Bids/Entries</option>
                <option value="highest_bid">Highest Bids/Entries</option>
              </select>
              <span className="ms-2">{totalProjects} Projects jobs found, pricing in INR</span>
              </Form>
            </div>
            <div>
            <PageBtnContainer></PageBtnContainer>
            </div>
          </div>
          <div className="bg-secondary my-3" style={{ height: "1px" }}></div>
          <ProjectsContainer></ProjectsContainer>
        </div>
      </div>
    </div>
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = ()=>{
  return useContext(ProjectsContext);
}

export default Browse;
