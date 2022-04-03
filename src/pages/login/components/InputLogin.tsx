import { forwardRef } from "react";

type InputLoginProps = {
  label: string;
  name?: string;
  type: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
};

export const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  (props, ref) => {
    return (
      <label htmlFor="email">
        <span>{props.label}</span>
        <input
          ref={ref}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
          // onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ?? (props.onPressEnter && props.onPressEnter())
          }
        />
      </label>
    );
  }
);
