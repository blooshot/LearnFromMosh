import React, { Component } from "react";
import Joi from "joi-browser";
import MasterForm from "./common/MasterForm";

class LoginForm extends MasterForm {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  /* validateForm = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;

    //  const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is requried";
    // if (account.password.trim() === "")
    //   errors.password = "Password is requried";

    // return Object.keys(errors).length === 0 ? null : errors; 
  }; */

  /*  validateProperty = ({ name, value }) => {
    // console.log(name, value);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // if (name === "username") {
    //   if (value.trim() === "") return "Username is requried";
    //   //... so on
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Password is requried";
    //   //... so on
    // } 
  }; */

  /*  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    // console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const accout = { ...this.state.account };
    accout[input.name] = input.value;
    // accout[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account: accout, errors });
    // console.log(e.currentTarget.value);
  };
 */

  render() {
    // console.log(errors);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              {this.renderInputField("username", "UserName")}
              {this.renderInputField("password", "Password", "password")}
              {/*  <InputField
                lable="Password"
                name="password"
                value={data.password}
                onChange={this.handleChange}
                error={errors.password}
              /> */}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
