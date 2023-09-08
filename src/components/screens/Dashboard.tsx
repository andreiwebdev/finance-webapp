// progressbar
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

// charts
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { IoMdWallet } from "react-icons/io";
import { BsGlobe, BsFillCartFill, BsCheckCircleFill } from "react-icons/bs";
import { PiUsersFourFill } from "react-icons/pi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegSmileBeam } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

// images
import AdobeXDLogo from "../../assets/images/companies-logos/xd.png";
import SpotifyLogo from "../../assets/images/companies-logos/spotify.png";
import SlackLogo from "../../assets/images/companies-logos/slack.png";
import AmzonLogo from "../../assets/images/companies-logos/logo.png";
import FbLogo from "../../assets/images/companies-logos/facebook.png";

import Member1 from "../../assets/images/members/member.png";
import Member2 from "../../assets/images/members/member-2.png";
import Member3 from "../../assets/images/members/member-3.png";
import Member4 from "../../assets/images/members/member-4.png";
import Member5 from "../../assets/images/members/member-5.png";

// components
import TopPart from "../common/TopPart";

const Dashboard = () => {
    return (
        <Col className="dashboard" xs={12} xxl={9}>
            <TopPart />
            {/* Analytics Cards */}
            <Row>
                <Col xs={12} sm={6} xxl={3} className="mb-3">
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
                <Col xs={12} sm={6} xxl={3} className="mb-3">
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
                <Col xs={12} sm={6} xxl={3} className="mb-3">
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
                <Col xs={12} sm={6} xxl={3} className="mb-3">
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
                <Col className="mb-3" xs={12} md={6} lg={8} xl={8} xxl={4}>
                    <div className="card card-welcome">
                        <div>
                            <h4>Welcome back,</h4>
                            <h3>Andrei Dragomir</h3>
                            <p>
                                Glad to see you again! <br /> Ask me anything.
                            </p>
                        </div>
                        <button className="btn btn--2">
                            Tap to record <AiOutlineArrowRight />
                        </button>
                    </div>
                </Col>
                <Col
                    className="mb-3"
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    xxl={3}
                >
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
                <Col className="mb-3" xs={12} sm={6} md={12} lg={12} xxl={5}>
                    <div className="card card-referral-tracking">
                        <div className="icon-box">
                            <BiDotsHorizontalRounded />
                        </div>
                        <h3>Referral Tracking</h3>
                        <Row className="align-items-md-center">
                            <Col xs={12} md={6} lg={8} xxl={5}>
                                <div className="box">
                                    <h4>Invited</h4>
                                    <h3>145 people</h3>
                                </div>
                                <div className="box">
                                    <h4>Bonus</h4>
                                    <h3>1,465</h3>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} xxl={7}>
                                <CircularProgressbarWithChildren
                                    className="progressbar"
                                    value={66}
                                    styles={buildStyles({
                                        rotation: 0.6,
                                        strokeLinecap: "round",
                                        textSize: "16px",
                                        pathTransitionDuration: 0.5,
                                        pathColor: "#05CD99",
                                        textColor: "#fff",
                                        trailColor: "#22234B",
                                    })}
                                >
                                    <div className="progress-bar">
                                        <h4>Safety</h4>
                                        <h2>9.3</h2>
                                        <h4>Total Score</h4>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            {/* Graphs */}
            <Row>
                <Col className="mb-3" xs={12} lg={6}>
                    <div className="card card-sales-chart">
                        <h3>Sales overview</h3>
                        <p>
                            <span className="green">(+5) more</span> in 2021
                        </p>
                        <LineChart />
                    </div>
                </Col>
                <Col className="mb-3" xs={12} lg={6}>
                    <div className="card card-active-users">
                        <div className="chart-ctn">
                            <BarChart />
                        </div>
                        <h3>Active Users</h3>
                        <p>
                            <span className="green">(+23)</span> than last week
                        </p>
                    </div>
                </Col>
            </Row>
            {/* Tables Overview */}
            <Row>
                <Col xs={12} lg={8}>
                    <div className="card card-projects">
                        <h3>Projects</h3>
                        <p>
                            <span className="green">
                                <BsCheckCircleFill />
                            </span>{" "}
                            30 done this month
                        </p>
                        <table className="table table--1">
                            <tr>
                                <th>Companies</th>
                                <th>Members</th>
                                <th>Budget</th>
                                <th>Complete</th>
                            </tr>
                            <tr>
                                <td className="company">
                                    <img src={AdobeXDLogo} alt="adobexd" />
                                    <span>Chakra Soft UI Version</span>
                                </td>
                                <td className="members">
                                    <img src={Member1} alt="member" />
                                    <img src={Member2} alt="member" />
                                    <img src={Member3} alt="member" />
                                    <img src={Member4} alt="member" />
                                    <img src={Member5} alt="member" />
                                </td>
                                <td className="fw-bold">$14,000</td>
                                <td className="fw-bold">60%</td>
                            </tr>
                            <tr>
                                <td className="company">
                                    <img src={SpotifyLogo} alt="adobexd" />
                                    <span>Fix Platform Errors</span>
                                </td>
                                <td className="members">
                                    <img src={Member1} alt="member" />
                                    <img src={Member5} alt="member" />
                                </td>
                                <td className="fw-bold">$25,000</td>
                                <td className="fw-bold">80%</td>
                            </tr>
                            <tr>
                                <td className="company">
                                    <img src={SlackLogo} alt="adobexd" />
                                    <span>Chakra Soft UI Version</span>
                                </td>
                                <td className="members">
                                    <img src={Member3} alt="member" />
                                    <img src={Member4} alt="member" />
                                    <img src={Member5} alt="member" />
                                </td>
                                <td className="fw-bold">$4,000</td>
                                <td className="fw-bold">90%</td>
                            </tr>
                            <tr>
                                <td className="company">
                                    <img src={FbLogo} alt="adobexd" />
                                    <span>Chakra Soft UI Version</span>
                                </td>
                                <td className="members">
                                    <img src={Member5} alt="member" />
                                    <img src={Member1} alt="member" />
                                    <img src={Member2} alt="member" />
                                </td>
                                <td className="fw-bold">$7,000</td>
                                <td className="fw-bold">0%</td>
                            </tr>
                            <tr>
                                <td className="company">
                                    <img src={AmzonLogo} alt="adobexd" />
                                    <span>Chakra Soft UI Version</span>
                                </td>
                                <td className="members">
                                    <img src={Member1} alt="member" />
                                    <img src={Member2} alt="member" />
                                    <img src={Member4} alt="member" />
                                    <img src={Member5} alt="member" />
                                </td>
                                <td className="fw-bold">$200,000</td>
                                <td className="fw-bold">100%</td>
                            </tr>
                        </table>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default Dashboard;
