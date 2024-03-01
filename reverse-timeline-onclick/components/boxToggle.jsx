import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from "../global.module.scss";
import { useGSAP } from "@gsap/react";

export default function Box({ children, toggle }) {
    const tl = useRef();
    const el = useRef();

    useGSAP(() => {
        tl.current = gsap.timeline({
            paused: true,
        });
        tl.current.to(el.current, {
            y: 200,
            duration: 5,
        });
    }, []);

    useEffect(() => {
        toggle ? tl.current.play() : tl.current.reverse();
    }, [toggle]);

    return (
        <div className={s.box} ref={el}>
            {children}
        </div>
    );
}
