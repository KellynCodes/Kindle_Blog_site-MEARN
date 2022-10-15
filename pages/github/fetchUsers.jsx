import Head from "next/head";
import React, { useEffect, useState } from "react";

const githubusers = ({}) => {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");
  const [Repos, setRepos] = useState(null);
  useEffect(() => {
    const APIURL = "https://api.github.com/users/";
    const getUsers = async (fetcheduser) => {
      try {
        const fetchUser = await fetch(APIURL + fetcheduser);
        const data = await fetchUser.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      const getRepos = async (users) => {
        const fetchRepos = await fetch(`${APIURL}${users}/repos`);
        const DeRespositories = await fetchRepos.json();
        console.log(DeRespositories);
        setRepos(DeRespositories);
      };
      getRepos(fetcheduser);
    };
    getUsers("bradtraversy");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const APIURL = "https://api.github.com/users/";
    const searchUsers = async (fetcheduser) => {
      try {
        const fetchUser = await fetch(APIURL + fetcheduser);
        const data = await fetchUser.json();

        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      getRepos(fetcheduser);
    };

    const getRepos = async (users) => {
      const fetchRepos = await fetch(`${APIURL}${users}/repos`);
      const DeRespositories = await fetchRepos.json();
      setRepos(DeRespositories);
      console.log(DeRespositories);
    };
    searchUsers(input);
  };

  console.log(user);
  console.log(Repos);

  if (user) {
    return (
      <>
        <form id="form" onSubmit={handleSubmit}>
          {" "}
          <input
            type="search"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            id="search"
            placeholder="Search a Github User"
          />
        </form>

        <Head>
          <title>Kindle | {user.name}</title>
        </Head>
        <div className="gitUsers">
          <main id="main">
            <div className="card">
              <div>
                <img className="avatar" src={user.avatar_url} alt={user.name} />
              </div>
              <div className="user-info">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <ul className="info">
                  <li>
                    {user.followers}
                    <strong>Followers</strong>
                  </li>
                  <li>
                    {user.following}
                    <strong>Following</strong>
                  </li>
                  <li>
                    {user.public_repos}
                    <strong>Repositories</strong>
                  </li>
                </ul>
                <div className="userlinks">
                  <span>Username:</span>
                  <a className="user" href={user.html_url} target="_blank">
                    {user.login}
                  </a>
                  <a href={user.blog}>Website</a>
                </div>
                <div>
                  <ul>
                    <div>
                      {Repos &&
                        Repos.sort(
                          (repo, reduceRepo) =>
                            reduceRepo.stargazers_count - repo.stargazers_count
                        )
                          .slice(0, 15)
                          .map((element) => (
                            <a
                              className="repo"
                              key={element.id}
                              href={`https://github.com/${element.full_name}`}
                            >
                              {element.name}
                            </a>
                          ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  } else {
    return (
      <>
        <center>
          <h2>Error Fetching users Check your internet connection</h2>
        </center>
      </>
    );
  }
};

export default githubusers;

// export const getServerSideProps = async (username) => {
//   const resp = await fetch(`https://api.github.com/users/prokelly`);
//   const user = await resp.json();

//   const repos = await fetch("https://api.github.com/users/prokelly/repos");
//   const repo = await repos.json();

//   return {
//     props: { user, repo },
//   };
// };
