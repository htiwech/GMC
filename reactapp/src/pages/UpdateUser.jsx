import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/" + id).then((res) => {
      setname(res.data.name);
      setemail(res.data.email);
      setgender(res.data.gender);
      setstatus(res.data.status);
    });
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/users/" + id, {
        name,
        email,
        gender,
        status,
      })
      .then((res) => {
        alert("user updated");
        nav("/");
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

          <form id="add_user" onSubmit={update}>
            <div className="new_user">
              <div className="form-group">
                <label htmlFor="name" className="text-light">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
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
                  defaultValue={email}
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
                    checked={gender === "Male"}
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
                    checked={gender === "Female"}
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
                    checked={status === "Active"}
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
                    checked={status === "Inactive"}
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

export default UpdateUser;
