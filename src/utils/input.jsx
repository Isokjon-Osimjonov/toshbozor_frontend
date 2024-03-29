/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
export const Input = ({ style, ...props }) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name}>{props.label}</label>
      <input style={style} {...props} autoComplete="off" />
    </div>
  );
};

export const TextAreaInput = ({ style, ...props }) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        {...props}
        style={style}
        id="message"
        cols="30"
        rows="10"
        autoComplete="off"
      />
    </div>
  );
};
