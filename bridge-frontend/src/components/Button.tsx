import React from "react";
import styles from "../styles/components/Button.module.scss";

interface ButtonProps {
  clickHandler: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className={styles.ButtonContainer}>
      <button
        className={styles.Button}
        onClick={props.clickHandler}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
