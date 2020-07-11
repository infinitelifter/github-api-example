import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import axiosBase from "../../utils/axios/axiosConfig";
import Input from "../../Components/Input/Input";
import { useUserDataContext } from "../../utils/Context/ContextManager";
import axios from "axios";
import "./userSearch.scss";

const UserSearchForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        placeholder="Search for github nickname"
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && (
        <div id="feedback" className="error-message">
          {errors.name}
        </div>
      )}
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

const UserSearchEnhancedForm = (props) => {
  const { setIsLoaderActive, setUserNotFound } = props;
  const context = useUserDataContext();

  const CreateForm = withFormik({
    mapPropsToValues: () => ({ name: "" }),

    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
    }),

    handleSubmit: (values, { setSubmitting }) => {
      setIsLoaderActive(true);
      // setUserNotFound(true);
      const fetchUser = axiosBase.get(`/users/${values.name}`);
      const fetchUserRepos = axiosBase.get(`/users/${values.name}/repos`);

      axios
        .all([fetchUser, fetchUserRepos])
        .then(
          axios.spread((...responses) => {
            setIsLoaderActive(false);
            setUserNotFound(false);
            const userWithRepos = {
              ...responses[0].data,
              repos: responses[1].data,
            };

            context.updateValue("userDetail", userWithRepos);
            context.updateValue("userName", values.name);
          })
        )
        .catch((err) => {
          setIsLoaderActive(false);
          setUserNotFound(true);
          context.updateValue("userName", null);
        });
    },

    displayName: "BasicForm",
    validateOnBlur: true,
  })(UserSearchForm);

  return <CreateForm />;
};

export default UserSearchEnhancedForm;
