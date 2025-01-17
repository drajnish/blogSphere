import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1" htmlFor="{id}">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

/**
 *
 * if you want to use arraow function instead of function declaration
 * you need to explicitly define the function name
 * when you create a component using React.forwardRef, 
 * the component's displayName is automatically set to "ForwardRef". 
 * This can make debugging more difficult because the name of the component
 *  in error messages, stack traces, and React Developer Tools might be generic, 
 * making it harder to identify the component.
 *
 * 
 *  not strictly required, but it's a best practice for better development experience and maintainability.
 
*/

/**
 * 
const Input = React.forwardRef(() => {
  return <div>Input</div>
});
Input.displayName = "Input";
 */

export default Input;
