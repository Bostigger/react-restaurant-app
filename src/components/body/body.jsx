import React from 'react'
import Menu from "./menu/Menu";
import AllCommentsData from "./comments/comments";
import LoadComments from "./comments/loadComments";
import {Route, Routes} from "react-router-dom";
import Home from "./comments/pages/Home";
import About from "./comments/pages/AboutPage";
import Contact from "./comments/pages/Contact";

export default function Body() {
    return(
        <div>
            <Routes>
                <Route path="/menu" element={<Menu/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/about-us" element={<About/>} />
                <Route path="/contact-us" element={<Contact/>} />
            </Routes>
        </div>
    )

}