import React, { useState } from "react";
import UserSearchEnhancedForm from "./UserSearchForm";
import Loader from "../../Components/Loader/Loader";
import { useUserDataContext } from "../../utils/Context/ContextManager";
import "./userSearch.scss";
import Card from "../../Components/Card/Card";

export default function UserSearch() {
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const context = useUserDataContext();
  const user = context.userDetail;

  return (
    <React.Fragment>
      <UserSearchEnhancedForm
        setIsLoaderActive={setIsLoaderActive}
        setUserNotFound={setUserNotFound}
      />
      <div className="container">
        {isLoaderActive ? (
          <Loader />
        ) : (
          <React.Fragment>
            {userNotFound ? (
              <div className="error-message">
                User not found - please try a different user name
              </div>
            ) : (
              Object.keys(user).length !== 0 && (
                <Card
                  avatar={user.avatar_url}
                  name={user.name}
                  login={user.login}
                  bio={user.bio || "-"}
                  repos={user.repos || []}
                />
              )
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
