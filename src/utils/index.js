import toast from "react-hot-toast";
import Web3 from "web3";

export const fromWei = (amount) => Web3.utils.fromWei(amount || "0");
export const toWei = (amount) => Web3.utils.toWei(amount || "0");

export const formatAddress = (address) =>
  `${address.substr(0, 6)}...${address.substr(address.length - 4, address.length)}`;

export const validateEmail = (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const postData = async (url = "", data = {}) => {
  // Default options are marked with *
  let response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  response = await response.json(); // parses JSON response into native JavaScript objects
  if (response.status !== 200) {
    toast.error(response.message);
  }
  return response;
};

export const getData = async (url = "") => {
  let response = await fetch(url);
  response = await response.json(); // parses JSON response into native JavaScript objects
  if (response.status !== 200) {
    toast.error(response.message);
  }
  return response;
};
