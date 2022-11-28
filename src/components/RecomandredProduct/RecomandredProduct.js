import React from 'react';
import Recomandred from '../Recomandred/Recomandred';

const RecomandredProduct = () => {
    return (
        <div>
            {/* <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-row lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img width={400} src="https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png" alt="female" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm">
                        <div>
                            <h1 class="text-5xl font-bold">Recommended Products</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="hero  bg-base-200">
                <div class="hero-content flex-col  lg:flex-row-reverse lg:gap-40">
                    <img src="https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png" class="" />
                    <div className='justify-end'>
                        <h1 class="text-5xl font-bold">Recommended Products</h1>
                    </div>
                </div>
            </div>
            ''
            <Recomandred></Recomandred>
        </div>
    );
};

export default RecomandredProduct;