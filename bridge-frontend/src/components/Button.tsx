import React from "react";
import styles from "../styles/components/Button.module.scss";

interface ButtonProps {
  clickHandler: () => void;
  disabled?: boolean;
}

/**
 *
 * @param props clickHandler: function to be called when the button is clicked
 * @param props disabled: boolean to disable the button
 *
 * @returns a custom button configured with the given props
 */

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
