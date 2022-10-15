import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const prokelly = ({ respData, repo }) => {
  console.log(respData);
  console.log(repo);

  return (
    <>
      <Head>
        <title>Kindle | {respData.name}</title>
      </Head>
      <div className="gitUsers">
        <main id="main">
          <div className="card">
            <div>
              <img
                className="avatar"
                src={respData.avatar_url}
                alt={respData.name}
              />
            </div>
            <div className="user-info">
              <h2>{respData.name}</h2>
              <p>{respData.bio}</p>
              <ul className="info">
                <li>
                  {respData.followers}
                  <strong>Followers</strong>
                </li>
                <li>
                  {respData.following}
                  <strong>Following</strong>
                </li>
                <li>
                  {respData.public_repos}
                  <strong>Repositories</strong>
                </li>
              </ul>
              <div className="userlinks">
                <span>Username:</span>
                <a className="user" href={respData.html_url} target="_blank">
                  {respData.login}
                </a>
                <Link href={respData.blog}>Website</Link>
              </div>
              <div>
                <ul>
                  <div>
                    {repo
                      .sort(
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
};

export default prokelly;

export const getServerSideProps = async (username) => {
  const resp = await fetch(`https://api.github.com/users/prokelly`);
  const respData = await resp.json();

  const repos = await fetch("https://api.github.com/users/prokelly/repos");
  const repo = await repos.json();

  return {
    props: { respData, repo },
  };
};
