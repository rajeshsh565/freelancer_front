import { Link } from "react-router-dom/dist"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-center">
        <div className="nav-items">
            <Link to="dashboard" style={{fontSize:"2rem"}} className="item">Dashboard</Link>
            <Link to="browse" style={{fontSize:"2rem", marginLeft:"2rem"}} className="item">Browse</Link>
        </div>
        </div>
    </div>
  )
}
export default Navbar