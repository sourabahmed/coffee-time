import React from "react";
import './Home.css';
import styled, { keyframes } from 'styled-components';
import { pulse, flash } from 'react-animations';

const flashAnimation = keyframes`${flash}`;
const FlashDiv = styled.div`
  animation: infinite 3s ${flashAnimation};
`;

const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 5s ${PulseAnimation};
`;

const Home = () => {
    return (
        <div>
            <div className="section-1 box d-flex justify-content-end align-items-center">
                <div className="front-bg text-start w-50 px-5 mx-5">
                    <PulseDiv>
                        <h1 className="mx-5">Would you like a Cup of Delicious Coffee?</h1>
                    </PulseDiv>
                    <h2 className="mt-4 mx-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
                    <br /><br />
                    <button className="mx-5 px-5 btn home-banner-btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Home;