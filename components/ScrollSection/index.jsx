import React, { useRef } from "react";
import s from "./scrollSection.module.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollSection() {
    const rootRef = useRef();
    const sectionRef = useRef(null);

    useGSAP(() => {
        let tween = gsap.fromTo(sectionRef.current, {
                x: 0,
            }, {
                x: "-300vw",
                ease: "none",
                paused: true
            }
        );
        rootRef.current.scrollTriggerConfig = {
            animation: tween,
            start: "top top",
            end: "+=2000",
            scrub: 0.6,
            pin: true
        }
    });

    return (
        <section className={s.scroll__section_box} ref={rootRef}>
            <div ref={sectionRef}>
                <div className={s.scroll__section_ctn}>
                    <div className={s.scroll__ctn}>
                        <h3>Section 1</h3>
                    </div>
                    <div className={s.scroll__ctn}>
                        <h3>Section 2</h3>
                    </div>
                    <div className={s.scroll__ctn}>
                        <h3>Section 3</h3>
                    </div>
                    <div className={s.scroll__ctn}>
                        <h3>Section 4</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
