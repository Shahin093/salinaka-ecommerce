import React from 'react';
import Features from '../Features/Features';

const FeatureProduct = () => {
    return (
        <div>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse  lg:gap-40">
                    <div class="text-center lg:text-left">
                        <img width={400} src="https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png" alt="female" />
                    </div>
                    <div class="card flex-shrink-0 max-w-sm">
                        <div>
                            <h1 class="text-5xl font-bold">Features Product</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Features></Features>
        </div>
    );
};

export default FeatureProduct;