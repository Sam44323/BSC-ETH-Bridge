import React from "react";
import styles from "../styles/components/Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { binance, ethereum } from "../assets";

interface SwapContainerProps {
  img: string;
  open: boolean;
  value: "ETH" | "BSC";
  side: "left" | "right";
  valueChanger: (value: "ETH" | "BSC", side: "left" | "right") => void;
  toggleDropdown: (side: "left" | "right") => void;
}

/**
 *
 * @param props img: image of the swapper container to be displayed
 * @param props open: whether the dropdown is open or not
 * @param props value: value of the swapper container
 * @param props side: side of the swapper container (left or right)
 * @param props valueChanger: function to be called when the value of the swapper container is changed
 * @param props toggleDropdown: function to be called when the dropdown is toggled
 *
 * @returns a custom dropdown swapper component configured with the given props
 */

const SwapContainer: React.FC<SwapContainerProps> = (props) => {
  return (
    <div className={styles.SwapContainer}>
      <section
        className={styles.View}
        onClick={() => props.toggleDropdown(props.side)}
        style={{
          borderBottom: !props.open ? "3px solid #fff" : "",
        }}
      >
        <div>
          <img
            src={props.img}
            alt={props.value}
            style={{
              height: `${props.value === "BSC" && "35px"}`,
              padding: `${props.value === "BSC" && "-1rem 4px"}`,
            }}
          />
          <p>{props.value}</p>
        </div>
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{
            color: "#fff",
            transition: "0.4s ease-in-out",
            transform: props.open ? "rotate(-180deg)" : "",
          }}
        />
      </section>
      {props.open && (
        <section
          className={styles.Dropdown}
          onClick={() =>
            props.valueChanger(
              props.value === "BSC" ? "ETH" : "BSC",
              props.side
            )
          }
        >
          <hr />
          <div>
            <img
              src={props.value === "BSC" ? ethereum : binance}
              alt={props.value}
              style={{
                height: `${props.value === "BSC" && "25px"}`,
                padding: `${props.value === "BSC" && "0.1rem 2.8px"}`,
              }}
            />
            <p>{props.value === "BSC" ? "ETH" : "BSC"}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default SwapContainer;
