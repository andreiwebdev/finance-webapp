import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopPart from "../common/TopPart";
import { FaBox, FaPaperclip, FaPencilAlt, FaScrewdriver } from "react-icons/fa";

// images
import Member1 from "../../assets/images/members/member.png";
import Member2 from "../../assets/images/members/member-2.png";
import Member3 from "../../assets/images/members/member-3.png";
import Member4 from "../../assets/images/members/member-4.png";
import Member5 from "../../assets/images/members/member-5.png";

import ProjectImage1 from "../../assets/images/profile/blog-1.png";
import ProjectImage2 from "../../assets/images/profile/blog-2.png";
import ProjectImage3 from "../../assets/images/profile/blog-3.png";

const Profile = () => {
    return (
        <Col className="profile" xs={12} xxl={10}>
            <TopPart screenName="Profile" />
            <Row>
                <Col xs={12}>
                    {/* Profile header */}
                    <div className="card profile-header mb-3 mb-md-4">
                        <Row className="align-items-md-center">
                            <Col className="mb-4 mb-md-0" xs={12} md={6}>
                                <div className="d-flex align-items-center flex-wrap">
                                    <div className="profile-picture">
                                        <div className="edit">
                                            <FaPencilAlt />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h3>Andrei Dragomir</h3>
                                        <h4>dandrei.web@gmail.com</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="d-flex align-items-center flex-wrap buttons-group justify-content-md-end">
                                    <button className="btn btn--3">
                                        <FaBox /> OVERVIEW
                                    </button>
                                    <button className="btn c--white">
                                        <FaPaperclip /> TEAMS
                                    </button>
                                    <button className="btn c--white">
                                        <FaScrewdriver /> PROJECTS
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="mb-sm-4">
                        {/* Welcome back card */}
                        <Col
                            xs={12}
                            sm={6}
                            lg={7}
                            xl={8}
                            className="mb-3 mb-sm-0"
                        >
                            <div className="card welcome-back">
                                <div>
                                    <h3>Welcome back!</h3>
                                    <h4>Nice to see you, Andrei Dragomir!</h4>
                                </div>
                                <button className="btn btn--2">
                                    Lorem ipsum dolor sit.
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                                    </svg>
                                </button>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            sm={6}
                            lg={5}
                            xl={4}
                            className="mb-3 mb-sm-0"
                        >
                            {/* Platform Settings */}
                            <div className="card platform-settings">
                                <h3>Platform Settings</h3>
                                <div className="label">ACCOUNT</div>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone follows me
                                </label>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone answers to...
                                </label>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone mentions me
                                </label>

                                <div className="mb-4"></div>

                                <div className="label">APPLICATION</div>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone answers to...
                                </label>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone answers to...
                                </label>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone follows me
                                </label>
                                <label className="form-switch">
                                    <input type="checkbox" />
                                    <i></i>
                                    Email me when someone mentions me
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <div className="card card-projects">
                        <h3>Projects</h3>
                        <p>Architects design houses</p>
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <div className="project-item">
                                    <div
                                        style={{
                                            backgroundImage: `url(${ProjectImage1})`,
                                        }}
                                        className="image"
                                    ></div>
                                    <h5>Project #1</h5>
                                    <h4>Modern</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Fugit enim assumenda
                                        ex suscipit inventore.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <button className="btn btn--4">
                                            VIEW ALL
                                        </button>
                                        <div className="members">
                                            <img src={Member1} alt="member" />
                                            <img src={Member2} alt="member" />
                                            <img src={Member3} alt="member" />
                                            <img src={Member4} alt="member" />
                                            <img src={Member5} alt="member" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <div className="project-item">
                                    <div
                                        style={{
                                            backgroundImage: `url(${ProjectImage2})`,
                                        }}
                                        className="image"
                                    ></div>
                                    <h5>Project #1</h5>
                                    <h4>Modern</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Fugit enim assumenda
                                        ex suscipit inventore.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <button className="btn btn--4">
                                            VIEW ALL
                                        </button>
                                        <div className="members">
                                            <img src={Member1} alt="member" />
                                            <img src={Member2} alt="member" />
                                            <img src={Member3} alt="member" />
                                            <img src={Member4} alt="member" />
                                            <img src={Member5} alt="member" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <div className="project-item">
                                    <div
                                        style={{
                                            backgroundImage: `url(${ProjectImage3})`,
                                        }}
                                        className="image"
                                    ></div>
                                    <h5>Project #1</h5>
                                    <h4>Modern</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Fugit enim assumenda
                                        ex suscipit inventore.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <button className="btn btn--4">
                                            VIEW ALL
                                        </button>
                                        <div className="members">
                                            <img src={Member1} alt="member" />
                                            <img src={Member2} alt="member" />
                                            <img src={Member3} alt="member" />
                                            <img src={Member4} alt="member" />
                                            <img src={Member5} alt="member" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default Profile;
