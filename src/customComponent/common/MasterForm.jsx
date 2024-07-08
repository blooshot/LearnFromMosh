import React, { Component } from "react";
import Joi from "joi-browser";
import InputField from "./inputFields";
import InputSelect from "./inputOptions";

class MasterForm extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateForm = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // console.log(error);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // call the server, redirect to another page etc. action can be taken now
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    // console.log(name, value);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    console.log("VP", obj, "==", this.schema);
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    // console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const newData = { ...this.state.data };
    newData[input.name] = input.value;
    this.setState({ data: newData, errors });
  };

  handleChangeSelect = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const newData = { ...this.state.data };
    newData[input.name] = input.value;

    console.log("CS", newData, input.name, input.value);
    this.setState({ errors });
    /* console.log("CS", input.name, input.value);
    console.log("CSE", errorMessage); */
  };

  renderButton(label) {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.validateForm()}
      >
        {label}
      </button>
    );
  }

  renderInputField(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <InputField
        type={type}
        lable={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInputSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <InputSelect
        lable={label}
        name={name}
        options={options}
        values={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default MasterForm;
