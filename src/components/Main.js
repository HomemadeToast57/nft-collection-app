import React from "react";
import "./Main.css";
import twitterIcon from "../assets/owner/twitter.png";
import instagramIcon from "../assets/owner/instagram.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ activePunk }) => {
  if (activePunk) {
    return (
      <div className="main">
        <div className="mainContent">
          <div className="punkHighlight">
            <div className="punkImageContainer">
              <img
                src={activePunk.image_original_url}
                alt={"image of " + activePunk.name + "."}
                className="punkImage"
              />
            </div>
          </div>
          <div className="mid">
            <div className="punkDetails">
              <div className="title">{activePunk.name}</div>
              <span className="itemNumber">•#{activePunk.token_id}</span>
            </div>

            <div className="ownerDetails">
              <div className="ownerImageContainer">
                <img
                  src={activePunk.owner.profile_img_url}
                  alt="Owner"
                  className="ownerImage"
                />
              </div>
              <div className="ownerNameAndHandle">
                <div className="name">{activePunk.owner.address}</div>
                <div className="handle">@{activePunk.owner.user.username}</div>
              </div>
            </div>
          </div>

          <div className="socialMedia">
            <div className="ownerLink">
              <img src={instagramIcon} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterIcon} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Main;
