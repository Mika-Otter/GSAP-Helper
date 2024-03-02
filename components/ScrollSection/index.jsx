import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./scrollSection.module.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        const tween = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    markers: true,
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
    }, []);

    return (
        <section className={s.scroll__section_box}>
            <div ref={triggerRef}>
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
