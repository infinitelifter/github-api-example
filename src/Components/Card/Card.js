import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ name, avatar, login, bio, repos }) {
  return (
    <Link to={`/${login}`} style={{ textDecoration: "none", color: "white" }}>
      <div className="card">
        <div className="card__top" />
        <div className="card__avatar">
          <img src={avatar} alt="No Avatar" />
        </div>
        <div className="card__name">
          <Link to={`/${login}`} className="card__link">
            {name ? name : login}
          </Link>
        </div>
        <div className="card__bio">{bio}</div>
        <div className="card__repos">
          <h6>Repository list</h6>
          <p>
            {repos && repos[0]
              ? repos[0].full_name
              : "user doesnt have any repositories"}
          </p>
        </div>
      </div>
    </Link>
  );
}
