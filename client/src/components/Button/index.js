import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")} style={{ fontsize: 10, padding:  10, borderradius: 5, borderWidth: 1, margin: 5, backgroundColor: 'grey', }}>
      {children}
    </button>
  );
}

export default Button;
