import React from "react";
import { Route } from "react-router-dom";
import UserSearch from "./Containers/UserSearch/UserSearch";
import RepoList from "./Containers/RepoList/RepoList";

const Main = (props) => {
  return (
    <main
      style={{
        width: "600px",
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Route exact path="/" component={UserSearch} />
      <Route path="/:userName" component={RepoList} />
      {props.children}
    </main>
  );
};

export default Main;
