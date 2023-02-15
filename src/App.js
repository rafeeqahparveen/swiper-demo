// Import Swiper React components
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import data from "./offers.json";
import VerticalSwiper from "./VerticalSwiper";

export default function App() {
    const form = useRef();
    const [email, setEmail] = useState("test");
    const [bag, setBag] = useState([]);

    var templateParams = {
        mail: email,
        fromName: "Digital Incentives",
        bag: bag,
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .send(
                "service_bune85x",
                "template_4kyr4sk",
                templateParams,
                "TahsYlQmnsczfcucA"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );

        e.target.reset();
    };

    return (
        <>
            <VerticalSwiper data={data} bag={bag} setBag={setBag} />
            <br></br>
            <form ref={form} onSubmit={sendEmail}>
                <center>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                    ></input>
                    <button type="submit">Submit</button>
                </center>
            </form>
        </>
    );
}
