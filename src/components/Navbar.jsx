 import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/firebase";
import {AuthContext} from "../context/AuthContext"
import logo from "../images/logo.png"

const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  const navigate=useNavigate()
  // const currentUser = { displayName: "Mehmet Çakır" };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid bg-primary logo">
          <Link to="/" className="navbar-brand  text-white">
            <img src={logo} alt="" />
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize fs-6 ">
                  {currentUser.displayName}
                </h5>
                <button onClick={()=>logout()}className="ms-2 btn btn-outline-light">Logout</button>
              </>
            ) : (
              <>
                <button className="ms-2 btn btn-outline-light" onClick={()=>navigate("/login")}>Login</button>
                <button className="ms-2 btn btn-outline-light" onClick={()=>navigate("/register")}>Register</button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
