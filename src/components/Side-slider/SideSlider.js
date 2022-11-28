import React from 'react';

const SideSlider = ({ setDemo }) => {
    return (
        <div>
            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                </div>
                <div class="drawer-side">
                    <label onClick={() => setDemo(0)} for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideSlider;