import React from 'react'
import Body from "./body/body";
import Footer from "./footer/footer";
import Header from "./header/header";
import AllCommentsData from "./body/comments/comments";

export default function MainComponent() {
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )

}