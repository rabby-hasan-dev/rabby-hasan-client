'use client'

import { TypeAnimation } from "react-type-animation";
const TypeAnimationWrapper = () => {
    return (
        <TypeAnimation
            sequence={[
                "Full Stack Developer.",
                500,
                "MERN Stack Developer.",
                500,
                "Front End Developer.",
                500,
                "Back End Developer.",
                500,
            ]}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
        />


    );
};

export default TypeAnimationWrapper;