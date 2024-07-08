const InputField = ({ lable, name, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {lable}
      </label>
      {/* {console.log(rest)} */}
      <input
        {...rest}
        id={name}
        name={name}
        aria-describedby={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
      {/* <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div> */}
    </div>
  );
};

export default InputField;
