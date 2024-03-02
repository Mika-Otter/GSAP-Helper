import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./global.module.scss";
import cn from "classnames";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const wrapperRef = useRef(null);
    const itemRef = useRef(null);

    useGSAP(() => {
        function getScrollAmount() {
            let itemWidth = itemRef.current.offsetWidth;
            console.log(itemWidth);
            return -(itemWidth - window.innerWidth);
        }

        const tl = gsap.timeline().to(itemRef.current, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top 20%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tl,
            scrub: 1,
            invalidateOnRefresh: true,
            markers: true,
        });
    }, []);

    return (
        <>
            <div className={s.page}></div>
            <div className={s.wrapper} ref={wrapperRef}>
                <div className={s.item} ref={itemRef}>
                    <h2>Monaco</h2>
                    <h2>Austria</h2>
                    <h2>Hungary</h2>
                    <h2>Netherlands</h2>
                    <h2>Japan</h2>
                </div>
            </div>
            <div className={s.page}></div>
        </>
    );
}
