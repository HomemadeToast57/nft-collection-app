import React from "react";
import "./CollectionCard.css";
import weth from "../assets/weth.png";

const CollectionCard = ({
  id,
  name,
  traits,
  image,
  handleSelectPunk,
  owner,
}) => {
  return (
    <div
      className={`collectionCard ${id === "0" ? "first" : ""}`}
      onClick={() => handleSelectPunk(id)}
    >
      <img src={image} alt="" />
      <div className="details">
        <div className="cardName">
          {name} <div className="id">•#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt="" className="wethImage" />
          <div className="price">{traits[0]?.value}</div>
        </div>
        <div className="ownerContainer">
            <img
              src={owner.profile_img_url}
              alt="Owner"
              className="cardOwnerImage"
            />
          <div className="cardOwnerNameAndHandle">
            <div className="cardOwnerName">{owner.address}</div>
            <div className="cardOwnerHandle">@{owner.user.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
