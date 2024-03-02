import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import ScrollSection from "../components/ScrollSection";
import Footer from "../components/Footer";
import NormalPage from "../components/NormalPage";
import BiggerPage from "../components/BiggerPage";

import s from "../src/global.module.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
    let sections = document.querySelectorAll(".overlaySection");
    let tl = gsap.timeline();
    let win = {
        w: window.width,
        h: window.height,
    };

    useGSAP(() => {
        let sectionArr = gsap.utils.toArray(sections);
        sectionArr.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => (panel.offsetHeight < win.h ? "top top" : "bottom bottom"),
                pin: true,
                pinSpacing: false,
            });
        });
    }, [tl]);

    return (
        <>
            <div className="overlaySection">
                <header className={s.header}>
                    <h1>Demo</h1>
                    <h2>GSAP & React</h2>
                </header>
            </div>
            <div className="overlaySection">
                <NormalPage />
            </div>
            <div className="overlaySection">
                <BiggerPage />
            </div>
            <div className="overlaySection">
                <ScrollSection />
            </div>
            <div className="overlaySection">
                <Footer />
            </div>
        </>
    );
}
