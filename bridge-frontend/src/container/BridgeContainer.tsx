import React from "react";
import styles from "../styles/container/BridgeContainer.module.scss";
import Dropdown from "../components/Dropdown";
import { binance, ethereum } from "../assets/index";

const BridgeContainer: React.FC = () => {
  const [currValue, setCurrValue] = React.useState<{
    left: "ETH" | "BSC";
    right: "ETH" | "BSC";
  }>({
    left: "ETH",
    right: "BSC",
  });
  const [dropdownOpen, setDropdownOpen] = React.useState<{
    left: boolean;
    right: boolean;
  }>({
    left: false,
    right: false,
  });

  const handleSwapper = (value: "ETH" | "BSC", side: "left" | "right") => {
    if (side === "left") {
      setCurrValue((prev) => ({
        ...prev,
        left: value,
        right: value === "BSC" ? "ETH" : "BSC",
      }));
    } else {
      setCurrValue((prev) => ({
        ...prev,
        right: value,
        left: value === "ETH" ? "BSC" : "ETH",
      }));
    }
    toggleDropdown();
  };

  const toggleDropdown = (side: "left" | "right" | "" = "") => {
    setDropdownOpen((prev) => ({
      left: side === "left" ? !prev.left : false,
      right: side === "right" ? !prev.right : false,
    }));
  };

  return (
    <div className={styles.BridgeContainer}>
      <section className={styles.SwapSection}>
        <Dropdown
          img={currValue.left === "ETH" ? ethereum : binance}
          open={dropdownOpen.left}
          side="left"
          value={currValue.left}
          valueChanger={handleSwapper}
          toggleDropdown={toggleDropdown}
        />
        <Dropdown
          img={currValue.right === "ETH" ? ethereum : binance}
          open={dropdownOpen.right}
          side="right"
          value={currValue.right}
          valueChanger={handleSwapper}
          toggleDropdown={toggleDropdown}
        />
      </section>
      <section className={styles.InputSection}></section>
    </div>
  );
};

export default BridgeContainer;
