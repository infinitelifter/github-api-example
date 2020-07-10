import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import axiosBase from "../../utils/axios/axiosConfig";
import Input from "../../Components/Input/Input";
import "./repoList.scss";
import { isOdd } from "../../utils/helpers";
import Arrow from "../../Components/Arrow/Arrow";
const classNames = require("classnames/bind");

export default function RepoList(props) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filteringInput, setFilteringInput] = useState("");

  const [sortedDescending, setSortedDescending] = useState(true);

  const [isLoaderActive, setIsLoaderActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaderActive(true);

      try {
        const result = await axiosBase.get(
          `/users/${props.match.params.userName}/repos`
        );

        setData(result.data);
        setFiltered(result.data);
        setIsLoaderActive(false);
      } catch (err) {
        setIsLoaderActive(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.userName]);

  useEffect(() => {
    const results = filtered.filter((res) =>
      res.name.toLowerCase().includes(filteringInput)
    );

    setData(results);
  }, [filteringInput, filtered]);

  const handleChange = (event) => {
    setFilteringInput(event.target.value);
  };

  // const handleSort = () => {
  //   setFilteringInput(event.target.value);
  // };

  return (
    <React.Fragment>
      <div className="input-container">
        <Input
          placeholder="Search for repository"
          handleChange={handleChange}
          name="name"
        />
      </div>

      <div className="container">
        {isLoaderActive ? (
          <Loader />
        ) : (
          <div className="table">
            <div
              className="table__header"
              onClick={(e) => {
                e.preventDefault();
                console.log(sortedDescending);
                setSortedDescending(!sortedDescending);
              }}
            >
              <span>Repository name</span>
              <Arrow isDescending={sortedDescending} />
            </div>
            {data.length > 0 ? (
              data
                .sort(function (a, b) {
                  return sortedDescending
                    ? b.stargazers_count - a.stargazers_count
                    : a.stargazers_count - b.stargazers_count;
                })
                .map((repo, index) => (
                  <div
                    className={classNames({
                      table__row: true,
                      table__row__odd: isOdd(index),
                    })}
                  >
                    {repo.name}
                  </div>
                ))
            ) : (
              <div className="table__row">
                User doesnt have any repositories
              </div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
