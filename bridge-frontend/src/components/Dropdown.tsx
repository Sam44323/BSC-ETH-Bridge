import React from "react";
import styles from "../styles/components/Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface SwapContainerProps {
  img: string;
  open: boolean;
  value: "ETH" | "BSC";
  side: "left" | "right";
  valueChanger: (value: "ETH" | "BSC", side: "left" | "right") => void;
}

const SwapContainer: React.FC<SwapContainerProps> = (props) => {
  return (
    <div className={styles.SwapContainer}>
      <section className={styles.View}>
        <div>
          <img src={props.img} alt={props.value} />
          <p>{props.value}</p>
        </div>
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{
            color: "#fff",
          }}
        />
      </section>
      <section className={styles.Dropdown}></section>
    </div>
  );
};

export default SwapContainer;
