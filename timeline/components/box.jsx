import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from "../global.module.scss";
import { useGSAP } from "@gsap/react";

export default function Box({ children, timeline, index }) {
    const el = useRef();

    useGSAP(() => {
        // add 'left 100px' animation to timeline
        timeline &&
            timeline.to(
                el.current,
                {
                    x: -100,
                },
                index * 0.1
            );
    }, [timeline, index]);

    return (
        <div className={s.box} ref={el}>
            {children}
        </div>
    );
}
