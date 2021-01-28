import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const routeToShop = () => {
        // react router uses own version of history api
        // for example we could navigate to different places,
        // after checking the auth status (make sure that user has permissions to be on a page)
        // IMPERATIVE (vs DECLARATIVE style which we saw in the <Link /> component)
        history.push("/Pizza");
    };
    return (
        <StyledHome>
            <div className="home-wrapper">
                <h2>Pizza for DAYSSSS</h2>
                <img className="home-image" src="https://ewscripps.brightspotcdn.com/dims4/default/20988f6/2147483647/strip/true/crop/597x336+21+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsharing.abcactionnews.com%2Fsharewxyz%2Fphoto%2F2018%2F09%2F10%2FPepperoni%20Pizza_1536603247495.jpg_97038597_ver1.0_640_480.jpg" alt="pizza" />
                <button onClick={routeToShop} className="md-button shop-button">
                    Pizza
                </button>

            </div>
        </StyledHome>
    );
};

const StyledHome = styled.div`
.shop-button.md-button {
  margin-top: -16px;
  margin-left: 44%;
  width: 115px;
  
}
.home-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

h2{
   margin-left: 42%; 
}

.md-button {
  display: inline-block;
  box-sizing: border-box;
  margin: 0 8px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #CC5B3B;
  background-color: #ffd88c;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
`