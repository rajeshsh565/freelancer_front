import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useProjectsContext } from "../pages/Browse";

const PageBtnContainer = () => {
  const {totalPages, currentPage} = useProjectsContext();
  // const btns = Array.from({length:3});
  const btns = currentPage>3 ? [currentPage-2, currentPage-1, currentPage] : [1,2,3];
  const navigate = useNavigate();
  const {pathname, search} = useLocation();
  const handlePageChange = (pageNumber) =>{
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    return navigate(`${pathname}?${searchParams.toString()}`);
  }
  return (
      <div className="btn-container">
      <button className="btn btn-outline-primary" disabled={currentPage==1} onClick={()=>handlePageChange(currentPage-1)}><HiChevronLeft className="btn-icon"/></button>
      {btns.map((pageNo,index)=>{
        if(pageNo<=totalPages)
        return <button className={`btn btn-outline-primary btn-page ${pageNo == currentPage ? `active` : ``}`} key={index} onClick={()=>handlePageChange(pageNo)}>{pageNo}</button>
      })}
      <button className="btn btn-outline-primary" disabled={currentPage==totalPages} onClick={()=>handlePageChange(Number(currentPage)+1)}><HiChevronRight className="btn-icon"/></button>
      </div>
  );
};
export default PageBtnContainer;