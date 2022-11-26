import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <img width={700} src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" alt="female" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm">
                    <div>
                        <h1 class="text-5xl font-bold">See everything with Clarity</h1>
                        <p class="py-6">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
                        <button class="btn btn-primary">Shop Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;