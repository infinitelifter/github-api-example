import React from "react";

export const AppContext = React.createContext({});
export const useUserDataContext = () => React.useContext(AppContext);

export class ContextManager extends React.Component {
  state = {
    userName: null,
    userDetail: {},
    userRepositories: [],
  };

  updateValue = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          updateValue: this.updateValue,
          userName: this.state.userName,
          userDetail: this.state.userDetail,
          userRepositories: this.state.userRepositories,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
