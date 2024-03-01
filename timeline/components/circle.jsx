import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from "../global.module.scss";
import { useGSAP } from "@gsap/react";

export default function Circle({ children, timeline, index, rotation, label }) {
    const el = useRef();
    if (timeline && label) {
    }
    useGSAP(() => {
        // add 'right 100px, rotate 360deg' animation to timeline
        timeline &&
            timeline
                .to(
                    el.current,
                    {
                        rotation: rotation,
                        x: 100,
                    },
                    index * 0.1
                )
                .addLabel(label);
    }, [timeline, rotation, index]);

    return (
        <div className="circle gradient-blue" ref={el}>
            {children}
        </div>
    );
}
