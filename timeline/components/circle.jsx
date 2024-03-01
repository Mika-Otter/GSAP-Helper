import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from "../global.module.scss";
import { useGSAP } from "@gsap/react";

export default function Circle({ children, timeline, index, rotation }) {
    const el = useRef();

    useGSAP(() => {
        // add 'right 100px, rotate 360deg' animation to timeline
        timeline &&
            timeline.to(
                el.current,
                {
                    rotation: rotation,
                    x: 100,
                },
                index * 0.1
            );
    }, [timeline, rotation, index]);

    return (
        <div className="circle gradient-blue" ref={el}>
            {children}
        </div>
    );
}
