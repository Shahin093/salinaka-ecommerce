import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import NormalFeature from '../NormalFeature';
import Recomandred from '../Recomandred/Recomandred';

const HomePage = ({ demo, setDemo }) => {
    return (
        <div>
            <Banner demo={demo} setDemo={setDemo}></Banner>
            <Features></Features>
            <Recomandred></Recomandred>
        </div>
    );
};

export default HomePage;