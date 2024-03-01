import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./global.module.scss";
import Box from "./components/boxToggle";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
    const [clicked, setClicked] = useState(false);

    function handleClicked() {
        setClicked(!clicked);
        console.log(clicked);
    }

    return (
        <div className={s.app}>
            <button onClick={handleClicked}>Toggle</button>
            <Box toggle={clicked}>Box</Box>
        </div>
    );
}
