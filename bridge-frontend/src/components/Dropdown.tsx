import React from "react";
import styles from "../styles/components/Dropdown.module.scss";

interface SwapContainerProps {
  img: string;
  open: boolean;
  value: "ETH" | "BSC";
  valueChanger: (value: "ETH" | "BSC") => void;
  showDropdown: boolean;
}

const SwapContainer: React.FC<SwapContainerProps> = () => {
  return <div className={styles.SwapContainer}></div>;
};

export default SwapContainer;
