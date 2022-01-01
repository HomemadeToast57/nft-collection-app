import React from "react";
import CollectionCard from "./CollectionCard";

import "./PunkList.css";

const PunkList = ({punkListData, handleSelectPunk}) => {
    return (
        <div className="punkList">
            {punkListData.map((punk) => (
                <CollectionCard 
                key={punk.id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
                owner={punk.owner}
                handleSelectPunk={handleSelectPunk}
                />
            ))}
        </div>
    )
}

export default PunkList

