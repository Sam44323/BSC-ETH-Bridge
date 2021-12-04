import React from "react";
import styles from "../styles/container/BridgeContainer.module.scss";
import Dropdown from "../components/Dropdown";
import { binance, ethereum as ethImg } from "../assets/index";
import Input from "../components/Input";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import useBurnETK from "../hooks/useBurnETK";
import { useEthers } from "@usedapp/core";
import useBurnBTK from "../hooks/useBurnBTK";
import Axios from "../utils/axios";
import { toast } from "react-toastify";

/**
 *
 * @returns the entire bridge container with embedded components and functionalities
 */

const BridgeContainer: React.FC = () => {
  // storing the state of the left and right card data
  const [currValue, setCurrValue] = React.useState<{
    left: "ETH" | "BSC";
    right: "ETH" | "BSC";
  }>({
    left: "ETH",
    right: "BSC",
  });

  const { chainId } = useEthers();
  const { ethereum } = window as any;

  // storing the data of the left and right card dropdowns
  const [dropdownOpen, setDropdownOpen] = React.useState<{
    left: boolean;
    right: boolean;
  }>({
    left: false,
    right: false,
  });

  // using the useBurnETK custom hook for transaction
  const { approveETKBurn } = useBurnETK();
  const { approveBTKBurn } = useBurnBTK();

  // storing the value for the input
  const [inputValue, setInputValue] = React.useState<string>("");

  // handling the card-swapping interface between the left and right card

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

  // handling the dropdown toggle for the left and right card

  const toggleDropdown = (side: "left" | "right" | "" = "") => {
    setDropdownOpen((prev) => ({
      left: side === "left" ? !prev.left : false,
      right: side === "right" ? !prev.right : false,
    }));
  };

  React.useEffect(() => {
    const switchChain = async () => {
      if (currValue.left === "ETH") {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${Number(4).toString(16)}` }],
        });
      } else {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${Number(97).toString(16)}` }],
        });
      }
    };
    switchChain();
  }, [currValue, ethereum]);

  // handling the toggle for the currValue state when the arrow is clicked

  const arrowSwapper = () =>
    setCurrValue((prev) => ({
      left: prev.left === "ETH" ? "BSC" : "ETH",
      right: prev.right === "ETH" ? "BSC" : "ETH",
    }));

  const ethBurnBscMint = async () => {
    try {
      const txHash = await approveETKBurn(inputValue);
      console.log(txHash);
      toast.success("Minting for BTK in progress!", {
        theme: "dark",
        autoClose: false,
        closeOnClick: true,
      });
      await Axios.post("/mint-bsc", {
        txHash: txHash.transactionHash,
      });
      toast.dismiss();
      toast.success(
        "Minted BTK successfully! Please check the BTK balance on binance testnet",
        {
          theme: "dark",
          autoClose: 1500,
          closeOnClick: true,
        }
      );
    } catch (err) {
      toast.error((err as any).message, {
        theme: "dark",
        autoClose: 1500,
        closeOnClick: true,
      });
    }
  };

  const bscBurnEthMint = async () => {
    try {
      const txHash = await approveBTKBurn(inputValue);
      console.log(txHash);
      toast.success("Minting for ETK in progress!", {
        theme: "dark",
        autoClose: false,
        closeOnClick: true,
      });
      await Axios.post("/mint-eth", {
        txHash: txHash.transactionHash,
      });
      toast.dismiss();
      toast.success(
        "Minted ETK successfully! Please check the BTK balance on rinkeby testnet",
        {
          theme: "dark",
          autoClose: 1500,
          closeOnClick: true,
        }
      );
    } catch (err) {
      toast.error((err as any).message, {
        theme: "dark",
        autoClose: 1500,
        closeOnClick: true,
      });
    }
  };

  // click handler for initializing the swapping
  const clickHandler = async () => {
    if (chainId === 4) ethBurnBscMint();
    else bscBurnEthMint();
    setInputValue("");
  };

  return (
    <div className={styles.BridgeContainer}>
      <section className={styles.SwapSection}>
        <Dropdown
          img={currValue.left === "ETH" ? ethImg : binance}
          open={dropdownOpen.left}
          side="left"
          value={currValue.left}
          valueChanger={handleSwapper}
          toggleDropdown={toggleDropdown}
        />
        <FontAwesomeIcon
          className={styles.SwapIcon}
          icon={faArrowsAltH}
          onClick={arrowSwapper}
          size="3x"
          style={{
            color: "#fff",
          }}
        />
        <Dropdown
          img={currValue.right === "ETH" ? ethImg : binance}
          open={dropdownOpen.right}
          side="right"
          value={currValue.right}
          valueChanger={handleSwapper}
          toggleDropdown={toggleDropdown}
        />
      </section>
      <section className={styles.InputSection}>
        <Input
          placeholder="0"
          label="Amount to swap"
          type="number"
          changeValue={setInputValue}
          value={inputValue}
        />
        <Button clickHandler={clickHandler} disabled={!inputValue}>
          SWAP
        </Button>
      </section>
    </div>
  );
};

export default BridgeContainer;
