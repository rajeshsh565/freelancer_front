import placeholderImage from "../assets/images/avatar-placeholder.svg";
import { Form } from "react-router-dom";
const Dashboard = () => {
  const user = {}
  return (
    <div className="container">
      <div className="row my-lg-5 justify-content-evenly mx-1">
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center border border-1">
          <div className="fs-5 fw-bolder">Welcome User</div>
          <div
            className="d-flex rounded-circle"
            style={{
              width: "17.5rem",
              height: "17.5rem",
              zIndex: 999,
            }}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                className="w-100 rounded-circle"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <img src={placeholderImage} className="w-100" />
            )}
          </div>
        </div>
        <div
          className="col-lg-8 text-center rounded-5 text-black ms-lg-5 profile mb-5"
          style={{
            maxWidth: "25rem",
            boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.4)",
          }}
        >
          <div className="px-5 py-3">
            <h2 className="mb-5 text-decoration-underline">Update Profile</h2>
            <Form method="post" encType="multipart/form-data">
              <div className="flex mb-3">
                <input type="text" name="name" placeholder="Name goes here!" className="rounded-2"/>
              </div>
              <div className="flex mb-3">
                <input type="tel" name="phone" placeholder={"Phone goes here!"} className="rounded-2"/>
              </div>
              <textarea
                rows="5"
                cols="30"
                name="address"
                placeholder={"Address goes here!"}
                className="rounded-2"
              />
              <div className="w-100" style={{ height: "5rem" }}>
                <label
                  htmlFor="avatar"
                  className="text-black text-capitalize fs-5 mb-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Select an Image (Max. 5MB)
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="images/*"
                  className="w-50"
                  style={{
                    height: "2.5rem",
                  }}
                ></input>
              </div>
              <button className="btn btn-secondary btn-outline-dark mt-3 mb-3" type="button" onClick={()=>{
                alert("submit simulation")
              }}>
                {"Submit"}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard