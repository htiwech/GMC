import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Homepage = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/")
      .then((res) => setusers(res.data));
  }, []);

  const deleteuser = (id) => {
    axios.delete("http://localhost:8000/api/users/" + id).then(() => {
      alert("user deleted");
      window.location.reload();
    });
  };

  return (
    <>
      <Header />
      <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <a href="/add-user" className="border-shadow">
              <span className="text-gradient">
                New User <i className="fas fa-user"></i>
              </span>
            </a>
          </div>

          <form action="/" method="POST">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>@Email</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((el, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.gender}</td>
                    <td>{el.status}</td>
                    <td>
                      <a
                        href={`/update-user/${el._id}`}
                        className="btn border-shadow update"
                      >
                        <span className="text-gradient">
                          <i className="fas fa-pencil-alt"></i>
                        </span>
                      </a>
                      <a
                        className="btn border-shadow delete"
                        onClick={() => deleteuser(el._id)}
                      >
                        <span className="text-gradient">
                          <i className="fas fa-times"></i>
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </main>
    </>
  );
};

export default Homepage;
