import React, { Component } from "react";
import Joi from "joi-browser";
import MasterForm from "./common/MasterForm";

class RegistationForm extends MasterForm {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(3).required().label("Password"),
    name: Joi.string().min(5).required().label("Name"),
  };

  doSubmit = () => {
    //call the server
    console.log("Registration Completed");
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              {this.renderInputField("username", "UserName")}
              {this.renderInputField("password", "Password", "password")}
              {this.renderInputField("name", "Name")}
              {/*  <InputField
                    lable="Password"
                    name="password"
                    value={data.password}
                    onChange={this.handleChange}
                    error={errors.password}
                  /> */}
              {this.renderButton("Register Me !")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationForm;
