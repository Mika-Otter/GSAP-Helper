import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import s from "./global.module.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

console.clear();

export default function App() {
    const [tl, setTl] = useState();

    const { contextSafe } = useGSAP(() => {
        const tl = gsap.timeline();
        setTl(tl);
    });

    const toggleTimeline = contextSafe(() => {
        tl.reversed(!tl.reversed());
    });

    return (
        <div className={s.app}>
            <button onClick={toggleTimeline}>Toggle</button>
            <Box timeline={tl} index={0}>
                Box
            </Box>
            <Circle timeline={tl} rotation={360} index={1}>
                Circle
            </Circle>
        </div>
    );
}
