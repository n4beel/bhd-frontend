import { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import Card from "components/Card";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { toWei } from "utils";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { HKR_ADDRESS, HCR_ADDRESS, STAKING_ADDRESS } from "../../constants";
import { BlockHackerToken__factory } from "contracts/types/factories/BlockHackerToken__factory";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
  },
});

function Staking() {
  const [tether, setTether] = useState({});
  const [reward, setReward] = useState({});
  const [decentralBank, setDecentralBank] = useState({});
  const [tetherBalance, setTetherBalance] = useState(0);
  const [rewardBalance, setRewardBalance] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0);
  const [tetherInput, setTetherInput] = useState(0);
  const [loading, setLoading] = useState(false);
  const [walletError, setWalletError] = useState(false);

  const { data: account } = useAccount();
  const { data: ensName } = useEnsName({ address: account?.address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const loadBlockChainData = async () => {
    const hkr = BlockHackerToken__factory.connect(HKR_ADDRESS);
    const rawBalance = await hkr.balanceOf(account?.address);
    console.log(rawBalance);
    // if (tetherData) {
    //   const _tether = new web3.eth.Contract(Tether.abi, tetherData.address);
    //   const _tetherBalance = await _tether.methods.balance(accounts[0]).call();

    //   setTether(_tether);
    //   setTetherBalance(_tetherBalance.toString());
    // } else {
    //   setWalletError(true);
    // }
    // if (rewardData) {
    //   const _reward = new web3.eth.Contract(Reward.abi, rewardData.address);
    //   const _rewardBalance = await _reward.methods.balance(accounts[0]).call();

    //   setReward(_reward);
    //   setRewardBalance(_rewardBalance.toString());
    // } else {
    //   setWalletError(true);
    // }
    // if (decentralBankData) {
    //   const _decentralBank = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address);
    //   const _decentralBankBalance = await _decentralBank.methods.stakingBalance(accounts[0]).call();

    //   setDecentralBank(_decentralBank);
    //   setStakingBalance(_decentralBankBalance.toString());
    // } else {
    //   setWalletError(true);
    // }
    // setLoading(false);
  };

  const stakeTokens = async () => {
    setLoading(true);
    // console.log(decentralBank._address)
    await tether.methods
      .setAllowance(decentralBank._address, toWei(tetherInput))
      .send({ from: account })
      .on("transactionHash", async (hash) => {
        console.log("approved =>", hash);
        await decentralBank.methods
          .depositTokens(toWei(tetherInput))
          .send({ from: account })
          .on("transactionHash", (hash) => {
            console.log("deposited =>", hash);
            setLoading(false);
          });
      });
  };

  const unstakeTokens = async () => {
    setLoading(true);
    await decentralBank.methods
      .unstakeTokens()
      .send({ from: account })
      .on("transactionHash", (hash) => {
        console.log("unstaked =>", hash);
        setLoading(false);
      });
  };

  const navProps = {
    account: account?.address,
    ensName,
    walletError,
    rewardBalance,
    connectWallet: connect,
  };

  const cardProps = {
    tetherBalance,
    stakingBalance,
    tetherInput,
    setTetherInput,
    stakeTokens,
    unstakeTokens,
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar {...navProps} />
        <main>
          <Card {...cardProps} />
        </main>
        {loading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "#0008",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Staking;
