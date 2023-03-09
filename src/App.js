// Import Swiper React components
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import data from "./offers.json";
import VerticalSwiper from "./VerticalSwiper";
import { useCookies } from 'react-cookie';

export default function App() {
    const form = useRef();
    const [email, setEmail] = useState("test");
    const [bag, setBag] = useState([]);
    const [i, setI] = useState(0);
    const [cookies, setCookie] = useCookies();
    const [cookieExists, setCookieExists] = useCookies(false);
    
    useEffect(() => {
        localStorage.setItem('bag', JSON.stringify(bag));
    }, [bag]);

    const handleCookies = () => {
        let cookieValue=cookies.Counter;
        cookieValue++;
        setCookie('Counter', cookieValue);
        setCookieExists('cookieExists',true);
    };
    var templateParams = {
        mail: email,
        fromName: "Digital Incentives",
        bag: bag.join("")
    };

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
        setCookie('Email', email);
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

    const initializeCookies = () => {
        var prevCookie = cookieExists.cookieExists ? cookies.Counter : 0;
        setCookie('Counter', prevCookie);
        setCookieExists('cookieExists',true);
    }

    return (
        <>
            <button type="button" onClick={initializeCookies}>Click me</button>
            <VerticalSwiper data={data} setBag={setBag} i={i} setI={setI} handleCookies={handleCookies} cookies={cookies}/>
            <br></br>
            <form ref={form} onSubmit={sendEmail}>
                <center>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={handleEmailChange}
                    ></input>
                    <button type="submit">Submit</button>
                </center>
            </form>
        </>
    );
}
