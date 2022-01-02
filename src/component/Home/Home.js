import React from "react";
import './Home.css';
import styled, { keyframes } from 'styled-components';
import { pulse, flash } from 'react-animations';
import img_1 from '../../images/1.png';
import img_2 from '../../images/2.png';
import img_3 from '../../images/3.png';
import img_4 from '../../images/4.png';

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

            <div className="section-1 box">
                <div className="text-start px-md-5 mx-md-5 banner-detail">
                    <PulseDiv>
                        <h1 className="mx-5 special1">Would you like a Cup of Delicious Coffee?</h1>
                    </PulseDiv>
                    <h1 className="mx-5 special2">Would you like a Cup of Delicious Coffee?</h1>
                    <h2 className="mt-4 mx-5">Coffee Time - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h2>
                    <br /><br />
                    <button className="mx-5 px-5 btn home-banner-btn">Learn More</button>
                </div>
            </div>

            <div className="section-2 box p-5">
                <div className="py-3 container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_1} alt="" />
                            </div>
                            <h2 className="mt-4">Awesome Aroma</h2>
                            <p>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_2} alt="" />
                            </div>
                            <h2 className="mt-4">High Quality</h2>
                            <p>The coffee is served to you maintaining the best quality for you</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_3} alt="" />
                            </div>
                            <h2 className="mt-4">Pure Grades</h2>
                            <p>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="d-flex justify-content-start">
                                <img src={img_4} alt="" />
                            </div>
                            <h2 className="mt-4">Proper Roasting</h2>
                            <p>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;