import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListAsync, setUser } from "./features/repo/repoSlice";

import NavbarComponent from "./components/NavbarComponent";
import FormComponent from "./components/FormComponent";
import CardComponent from "./components/CardComponent";

function App() {
  // const [username, setUsername] = useState("alimkinpark");
  // const [loading, setLoading] = useState(false);
  // const [git, setGit] = useState([]);

  const repo = useSelector((state) => state.repo.data);
  const username = useSelector((state) => state.repo.user);
  const loading = useSelector((state) => state.repo.loading);
  const dispatch = useDispatch();

  // const clickHandler = async (event) => {
  //   setLoading(true);

  //   if (username) {
  //     const url = `https://api.github.com/users/${username}/repos`;
  //     const response = await fetch(url);
  //     let commits = await response.json();
  //     setGit(commits?.length ? commits : []);
  //   } else {
  //     setGit([]);
  //   }

  //   setLoading(false);
  // };

  return (
    <div>
      <NavbarComponent />
      <div className="container pt-3">
        <div className="row bg-light">
          <div className="col-4"></div>
          <div className="col-4">
            <FormComponent
              loading={loading}
              username={username}
              // onChange={(e) => console.log(e)}
              onChange={(e) => dispatch(setUser(e.target.value))}
              // onClick={() => clickHandler()}
              onClick={() => dispatch(getListAsync(username))}
            />
            {/* <FormComponent /> */}
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mt-3">
          {repo.length ? (
            repo.map((repo) => {
              return (
                <div className="col-4 mb-2 text-center" key={repo.id}>
                  <CardComponent data={repo} />
                </div>
              );
            })
          ) : (
            <p className="text-center">Repository Tidak ditemukan</p>
          )}
        </div>
      </div>
      <footer className="my-5 text-center">
        Developed by <a target="_blank" href="https://www.instagram.com/alimkinpark/">Mohamad Nuralim</a> in September 2022. Powered
        by{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          ReactJS
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
