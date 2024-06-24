import { MdOutlineVerifiedUser } from "react-icons/md";
const ProjectCard = ({
  title,
  days,
  verified,
  avg_bid,
  num_bid,
  text,
  tags,
}) => {
  return (
    <div className="p-3">
      <div className="row mx-2">
        <div className="col-9">
            <div className="d-flex">
          <h5>{title}</h5>
          <span className="ms-2">{days} days left</span>
          <span className="ms-2">{verified && <span className="text-primary"><MdOutlineVerifiedUser/>verified</span>}</span>
            </div>
            <p className="mt-2">{text}</p>
            {tags.map((tag, index)=>{
                return <a href="#" className="me-3" key={index}>{tag}</a>
            })}
        </div>
        <div className="col-3">
            <p ><span className="fw-bold">&#8377;{avg_bid} </span>(Avg Bid)</p>
            {num_bid} bids
        </div>
        <div
              className="bg-secondary mt-3"
              style={{ height: "1px" }}
            ></div>
      </div>
    </div>
  );
};
export default ProjectCard;
