import React, { useState, useEffect } from "react";
import axios from "axios";

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
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xdadd397c13b5a74566E939754CAaFd6E8aF7eCd0&order_direction=asc"
      );

      setPunkListData(openSeaData.data.assets);
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
    </div>
  );
}

export default App;
