import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Line from "./Line";

// icons
import { FiMenu } from "react-icons/fi";
import { AiFillHome, AiFillCreditCard } from "react-icons/ai";
import { BsGraphUpArrow, BsFillRocketTakeoffFill } from "react-icons/bs";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidKey, BiSolidHelpCircle } from "react-icons/bi";

type Props = {
    currentScreen: string;
    setCurrentScreen: Function;
};

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const menuItems = [
        {
            name: "Dashboard",
            icon: <AiFillHome />,
        },
        {
            name: "Tables",
            icon: <BsGraphUpArrow />,
        },
        {
            name: "Billing",
            icon: <AiFillCreditCard />,
        },
        {
            name: "RTL",
            icon: <HiMiniWrenchScrewdriver />,
        },
        {
            name: "Profile",
            icon: <FaUserAlt />,
        },
        {
            name: "Sign In",
            icon: <BiSolidKey />,
        },
        {
            name: "Sign Up",
            icon: <BsFillRocketTakeoffFill />,
        },
    ];

    return (
        <div ref={navRef}>
            <div className="navbar-mobile d-xxl-none">
                <Container className="d-flex align-items-center justify-content-between">
                    <h1>FINANCE WEBAPP</h1>
                    <span onClick={toggleNavbar}>
                        <FiMenu className="menu-icon" />
                    </span>
                </Container>
            </div>
            <nav className={isOpen ? "slide-in" : "slide-out"}>
                <Container className="h-100 d-flex flex-column justify-content-between">
                    <div>
                        <div className="logo">
                            <h1>FINANCE WEBAPP</h1>
                            <Line />
                        </div>
                        <div className="menu">
                            {menuItems.map((menuItem) => (
                                <div
                                    onClick={() =>
                                        props.setCurrentScreen(menuItem.name)
                                    }
                                    className={
                                        props.currentScreen == menuItem.name
                                            ? "menu-item active"
                                            : "menu-item"
                                    }
                                >
                                    <div className="icon-box">
                                        {menuItem.icon}
                                    </div>
                                    <h3>{menuItem.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="help-box">
                        <div className="icon-box">
                            <BiSolidHelpCircle />
                        </div>
                        <h3>Need help?</h3>
                        <p>Please check our docs</p>
                        <button className="btn btn--1">DOCUMENTATION</button>
                    </div>
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
