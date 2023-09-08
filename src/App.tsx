import "./assets/sass/style.scss";
import Navbar from "./components/common/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { IoMdWallet } from "react-icons/io";
import { BsGlobe, BsFillCartFill } from "react-icons/bs";
import { PiUsersFourFill } from "react-icons/pi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegSmileBeam } from "react-icons/fa";

import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="container-fluid container-md">
                {/* Analytics Cards */}
                <Row>
                    <Col xs={12} className="mb-3">
                        <div className="card card--1">
                            <div>
                                <h4>Today's Money</h4>
                                <h3>
                                    $53,000 <span className="green">+55%</span>
                                </h3>
                            </div>
                            <div className="icon-box">
                                <IoMdWallet />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className="mb-3">
                        <div className="card card--1">
                            <div>
                                <h4>Today's Users</h4>
                                <h3>
                                    1,200 <span className="green">+5%</span>
                                </h3>
                            </div>
                            <div className="icon-box">
                                <BsGlobe />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className="mb-3">
                        <div className="card card--1">
                            <div>
                                <h4>New Clients</h4>
                                <h3>
                                    +3,052 <span className="red">-14%</span>
                                </h3>
                            </div>
                            <div className="icon-box">
                                <PiUsersFourFill />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className="mb-3">
                        <div className="card card--1">
                            <div>
                                <h4>Total Sales</h4>
                                <h3>
                                    $173,000 <span className="green">+8%</span>
                                </h3>
                            </div>
                            <div className="icon-box">
                                <BsFillCartFill />
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Other Cards */}
                <Row>
                    <Col className="mb-3" xs={12}>
                        <div className="card card-welcome">
                            <div>
                                <h4>Welcome back,</h4>
                                <h3>Andrei Dragomir</h3>
                                <p>
                                    Glad to see you again! <br /> Ask me
                                    anything.
                                </p>
                            </div>
                            <button className="btn btn--2">
                                Tap to record <AiOutlineArrowRight />
                            </button>
                        </div>
                    </Col>
                    <Col className="mb-3" xs={12}>
                        <div className="card card-satisfaction-rate">
                            <h3>Satisfaction Rate</h3>
                            <h4>From all projects</h4>
                            <div className="progress-ctn">
                                <CircularProgressbarWithChildren
                                    className="progressbar"
                                    value={66}
                                    styles={buildStyles({
                                        rotation: 0.6,
                                        strokeLinecap: "round",
                                        textSize: "16px",
                                        pathTransitionDuration: 0.5,
                                        pathColor: "#0075FF",
                                        textColor: "#fff",
                                        trailColor: "#22234B",
                                    })}
                                >
                                    <div className="icon-box">
                                        <FaRegSmileBeam />
                                    </div>
                                    <div className="percentage-box">
                                        <span className="left">0%</span>
                                        <span className="right">100%</span>
                                        <div className="center">
                                            <h3>95%</h3>
                                            <h4>Based on likes</h4>
                                        </div>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default App;
