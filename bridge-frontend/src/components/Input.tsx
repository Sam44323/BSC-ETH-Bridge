import React from "react";
import styles from "../styles/components/Input.module.scss";

interface InputProps {
  value: string;
  type: string;
  changeValue: (value: string) => void;
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.InputContainer}>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.changeValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
