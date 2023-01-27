// Import Swiper React components
import React from "react";
import data from './offers.json';
import VerticalSwiper from "./VerticalSwiper";
export default function App() {
    return (
        <VerticalSwiper data={data} />
    );
}
