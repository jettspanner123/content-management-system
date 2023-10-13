import React from "react";
import {motion} from "framer-motion"


const options = [
    {title: "Home", link: "/home"},
    {title: "Images", link: "/images"},
    {title: "Videos", link: "/videos"},
    {title: "Notes", link: "/notes"},
]

export default function Navbar() {

    const handlePageChange = (some_link) => {
        window.location.assign(some_link)
    }

    return <motion.nav animate={{opacity: 1}} initial={{opacity: 0}} transition={{opacity: {delay: 1, duration: 1, ease: [0.65, 0, 0.35, 1]}}} style={navbar_main}>
        <h1 style={navbar_main.main_heading}>PW CMS</h1>
        <ul style={navbar_main.unordered_list_styles}>
            {options.map((item, index) => {
                return <li style={navbar_main.link_tabs} onClick={() => {handlePageChange(item.link)}}>
                    {item.title}
                </li>
            })}
        </ul>
    </motion.nav>
}

const navbar_main = {
    position: "fixed",
    top: "2rem",
    width: "50%",
    borderRadius: "1rem",
    border: "0.5px solid white",
    backdropFilter: "blue(20px)",
    left: "50%",
    zIndex: "1000",
    transform: "translate(-50%, 0)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: "2rem",
    paddingBlock: "0.5rem",
    backgroundColor: "rgba(0,0,0,0.35)",
    main_heading : {
        color: "white",
        fontWeight: "bold",
    },
    unordered_list_styles : {
       display: "flex",
        color: "white",
        listStyle: "none",
        gap: "1rem",
    },
    link_tabs : {
        fontWeight: "500",
    }
}