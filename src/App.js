import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [activePunkIndex, setActivePunkIndex] = useState(0);

  const handleSelectPunk = (index) => {
    setActivePunkIndex(index);
  };

  useEffect(() => {
    const getMyNfts = async () => {

      //use fetch to get the data from the API
      const response = await fetch("https://testnets-api.opensea.io/assets?asset_contract_address=0xdadd397c13b5a74566E939754CAaFd6E8aF7eCd0&order_direction=asc").then(res => res.json());

      //set the data to the state
      setPunkListData(response.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main activePunk={punkListData[activePunkIndex]} />
      <PunkList
        punkListData={punkListData}
        handleSelectPunk={handleSelectPunk}
      />
      <h1 style={
        {
          color: "red",
      }}>Test</h1>
    </div>
  );
}

export default App;
