import Container from "react-bootstrap/Container";
import Line from "./Line";

// icons
import { FiMenu } from "react-icons/fi";
import { AiFillHome, AiFillCreditCard } from "react-icons/ai";
import { BsGraphUpArrow, BsFillRocketTakeoffFill } from "react-icons/bs";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidKey, BiSolidHelpCircle } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
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
                            <div className="menu-item active">
                                <div className="icon-box">
                                    <AiFillHome />
                                </div>
                                <h3>Dashboard</h3>
                            </div>
                            <div className="menu-item">
                                <div className="icon-box">
                                    <BsGraphUpArrow />
                                </div>
                                <h3>Tables</h3>
                            </div>
                            <div className="menu-item">
                                <div className="icon-box">
                                    <AiFillCreditCard />
                                </div>
                                <h3>Billing</h3>
                            </div>
                            <div className="menu-item">
                                <div className="icon-box">
                                    <HiMiniWrenchScrewdriver />
                                </div>
                                <h3>RTL</h3>
                            </div>
                            <div className="menu-item">
                                <div className="icon-box">
                                    <FaUserAlt />
                                </div>
                                <h3>Profile</h3>
                            </div>
                            <div className="menu-item">
                                <div className="icon-box">
                                    <BiSolidKey />
                                </div>
                                <h3>Sign In</h3>
                            </div>
                            <div className="menu-item">
                                <div className="icon-box">
                                    <BsFillRocketTakeoffFill />
                                </div>
                                <h3>Sign Up</h3>
                            </div>
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
        </>
    );
};

export default Navbar;
