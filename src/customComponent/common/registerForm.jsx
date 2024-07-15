import React, { Component } from "react";
import Joi from "joi-browser";
import MasterForm from "./MasterForm";
import * as userService from "@/services/userServices";
import { toast } from "react-toastify";
import auth from "@/services/authService";

class RegistationForm extends MasterForm {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(3).required().label("Password"),
    name: Joi.string().min(5).required().label("Name"),
  };

  doSubmit = async () => {
    //call the server
    try {
      const { headers } = await userService.register(this.state.data);
      auth.loginWithJWT(headers["x-auth-token"]);
      toast.success("User Created Successfully");
      window.location = "/";
      console.log(result);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("KUch to chud gya hai");
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
      console.log(ex);
    }

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
              {this.renderButton("Register Me !")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationForm;
