const InputSelect = ({ lable, name, error, options, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {lable}
      </label>
      <select id={name} name={name} {...rest} className="form-select">
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* {console.log("OP", error)} */}
    </div>
  );
};

export default InputSelect;
