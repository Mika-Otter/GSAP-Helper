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

    useGSAP(() => {
        let sectionArr = gsap.utils.toArray(".overlaySection");
        sectionArr.pop(); // skip the last one.
        sectionArr.forEach((panel, i) => {
            let config = panel.firstChild.scrollTriggerConfig || {
                id: i,
                start: () => (panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom"),
                end: "max",
                pin: true,
                pinSpacing: false,
            };
            config.trigger = panel;
            ScrollTrigger.create(config);
        });
    });

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
