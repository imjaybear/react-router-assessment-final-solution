import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

/*
  TODO: Change the link below to go to the user route, using the user's ID.
  /users/:userId
*/

export default function Card({ user = { posts: [] } }) {
  const { url } = useRouteMatch();
  return (
    <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="font-weight-lighter flex-fill">
          <Link to={`users/${user.id}`}>{user.name}</Link>
        </h2>
        <Link to={`users/${user.id}/posts`}>{user.posts.length} Posts »</Link>
      </div>
    </article>
  );
}

