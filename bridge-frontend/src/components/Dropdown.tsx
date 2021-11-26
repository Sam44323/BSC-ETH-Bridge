import React from "react";
import styles from "../styles/components/Dropdown.module.scss";

interface SwapContainerProps {
  img: string;
  open: boolean;
  value: "ETH" | "BSC";
  side: "left" | "right";
  valueChanger: (value: "ETH" | "BSC", side: "left" | "right") => void;
}

const SwapContainer: React.FC<SwapContainerProps> = () => {
  return <div className={styles.SwapContainer}></div>;
};

export default SwapContainer;
