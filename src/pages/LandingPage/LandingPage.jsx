import React from "react";
import {motion} from "framer-motion";
import Navbar from "../../components/Navbar";
export default function LandingPage() {
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    const main_div = {
        height: "100vh",
        width: "100vw",
        background: `radial-gradient(circle farthest-side at ${mousePosition.x}px ${mousePosition.y}px, #00007e 0%, transparent 60%`,
        position: "relative",
    }
    React.useEffect(() => {
        window.addEventListener("mousemove", (ev) => {
           setMousePosition({x: ev.clientX, y: ev.clientY});
        })
    }, [])
    return <React.Fragment>
        <Navbar />
        <main style={main_div} >
            <motion.h1 animate={{opacity: 1}} initial={{opacity: 0}} transition={{opacity: {duration: 1, delay: 0.3, ease: [0.65, 0, 0.35, 1]}}} style={main_heading}>
               POWER CMS
            </motion.h1>
            <motion.h1 animate={{opacity: 1}} initial={{opacity: 0}} transition={{opacity: {duration: 1, delay: 0.3, ease: [0.65, 0, 0.35, 1]}}}  style={secondary_heading}>
               A powerful content management system.
            </motion.h1>
        </main>
    </React.Fragment>
}

const main_heading = {
    fontSize: "8rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: "100vw",
    position: "absolute",
    top: "40%",
    transform: "translate(0, -70%)",
}

const secondary_heading = {
   fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: "100vw",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
}