import React from 'react';
import { Link } from 'react-router-dom';
import './Freatures.css'
const Features = () => {
    return (

        <div className='bg-base-200'>

            <div className='bg-base-200 flex justify-between px-5 my-10'>
                <h1 className='text-4xl font-bold'>Features Pictures</h1>
                <Link to={'/features'} className='text-primary bold underline text-xl lg:text-2xl'>See All</Link>
            </div>

            <Link to={'/features3456'}>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-base-200 gap-5'>

                    <div class="card border">
                        <figure class="px-10 pt-10 grow">
                            <img src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7 " alt="Shoes" class="rounded-xl" />
                        </figure>
                        <hr />
                        <div class="card-body bg-base-600">
                            <h2 class="text-xl font-extrabold">Burnikk</h2>
                            <p class="subtle italic">Sexbomb</p>
                        </div>
                    </div>

                    <div class="card border" >
                        <figure class="px-10 pt-10 grow">
                            <img src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <hr />
                        <div class="card-body bg-base-600">
                            <h2 class="text-xl font-extrabold">Kibal Batal</h2>
                            <p class="subtle italic">Kibal Black</p>
                        </div>
                    </div>

                    <div class="card border">
                        <figure class="px-10 pt-10 grow">
                            <img src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <hr />
                        <div class="card-body bg-base-600">
                            <h2 class="text-xl font-extrabold">Burnikk</h2>
                            <p class="subtle italic">Sexbomb</p>
                        </div>
                    </div>
                    <div class="card border">
                        <figure class="px-10 pt-10 grow">
                            <img src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7 " alt="Shoes" class="rounded-xl" />
                        </figure>
                        <hr />
                        <div class="card-body bg-base-600">
                            <h2 class="text-xl font-extrabold">Burnikk</h2>
                            <p class="subtle italic">Sexbomb</p>
                        </div>
                    </div>

                    <div class="card border" >
                        <figure class="px-10 pt-10 grow">
                            <img src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <hr />
                        <div class="card-body bg-base-600">
                            <h2 class="text-xl font-extrabold">Kibal Batal</h2>
                            <p class="subtle italic">Kibal Black</p>
                        </div>
                    </div>

                    <div class="card border">
                        <figure class="px-10 pt-10 grow">
                            <img src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <hr />
                        <div class="card-body bg-base-600">
                            <h2 class="text-xl font-extrabold">Burnikk</h2>
                            <p class="subtle italic">Sexbomb</p>
                        </div>
                    </div>



                </div>
            </Link>
        </div>
    );
};

export default Features;