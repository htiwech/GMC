import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("");
  let nav = useNavigate();
  const adduser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/", { name, email, gender, status })
      .then((res) => {
        alert("user added");
        nav("/");
      })
      .catch((e) => {
        alert("Something went wrong please try again");
      });
  };

  return (
    <>
      <Header />
      <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/">
                <i className="fas fa-angle-double-left"></i> All Users
              </a>
            </div>
          </div>
          <div className="form-title text-center">
            <h2 className="text-dark">New User</h2>
            <span className="text-light">
              Use the below form to create a new account
            </span>
          </div>

          <form id="add_user" onSubmit={adduser}>
            <div className="new_user">
              <div className="form-group">
                <label htmlFor="name" className="text-light">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Mark Stoenis"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email" className="text-light">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="text-light">
                  Gender
                </label>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-2"
                    name="gender"
                    value="Male"
                    onChange={(e) => setgender(e.target.value)}
                  />
                  <label htmlFor="radio-2" className="radio-label">
                    Male
                  </label>
                </div>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-3"
                    name="gender"
                    value="Female"
                    onChange={(e) => setgender(e.target.value)}
                  />
                  <label htmlFor="radio-3" className="radio-label">
                    Female
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="gender" className="text-light">
                  Status
                </label>
                <div className="radio inline">
                  <input
                    onChange={(e) => setstatus(e.target.value)}
                    type="radio"
                    id="radio-4"
                    name="status"
                    value="Active"
                  />
                  <label htmlFor="radio-4" className="radio-label">
                    Active
                  </label>
                </div>
                <div className="radio inline">
                  <input
                    onChange={(e) => setstatus(e.target.value)}
                    type="radio"
                    id="radio-5"
                    name="status"
                    value="Inactive"
                  />
                  <label htmlFor="radio-5" className="radio-label">
                    Inactive
                  </label>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn text-dark update">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Adduser;
