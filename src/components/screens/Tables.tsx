import Col from "react-bootstrap/Col";

// icons
import { BsCheckCircleFill } from "react-icons/bs";

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

import Author1 from "../../assets/images/authors/author-01.png";
import Author2 from "../../assets/images/authors/author-02.png";
import Author3 from "../../assets/images/authors/author-03.png";
import Author4 from "../../assets/images/authors/author-04.png";
import Author5 from "../../assets/images/authors/author-05.png";
import Author6 from "../../assets/images/authors/author-06.png";

// Components
import TopPart from "../common/TopPart";

const Tables = () => {
    const authors = [
        {
            image: Author1,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            role: "Manager",
            org: "Organization",
            status: "online",
            employed: "15/06/21",
        },
        {
            image: Author2,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            role: "Programmer",
            org: "Organization",
            status: "offline",
            employed: "15/06/21",
        },
        {
            image: Author3,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            role: "Manager",
            org: "Organization",
            status: "offline",
            employed: "15/06/21",
        },
        {
            image: Author4,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            role: "Manager",
            org: "Organization",
            status: "online",
            employed: "15/06/21",
        },
        {
            image: Author5,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            role: "Manager",
            org: "Organization",
            status: "online",
            employed: "15/06/21",
        },
        {
            image: Author6,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            role: "Programmer",
            org: "Organization",
            status: "offline",
            employed: "15/06/21",
        },
    ];

    return (
        <Col className="tables" xs={12} xxl={9}>
            <TopPart screenName="Tables" />
            <div className="card card-table mb-3 mb-md-4">
                <h3>Authors Table</h3>
                <table className="table table--1">
                    <tr>
                        <th>Author</th>
                        <th>Function</th>
                        <th>Status</th>
                        <th>Employed</th>
                    </tr>
                    {authors.map((author, key) => (
                        <tr key={key}>
                            <td className="author">
                                <img src={author.image} alt={author.name} />
                                <div>
                                    <span>{author.name}</span>
                                    <p>{author.email}</p>
                                </div>
                            </td>
                            <td>
                                <span className="pb-0">{author.role}</span>
                                <p className="pt-0">{author.org}</p>
                            </td>
                            <td>
                                {author.status == "online" ? (
                                    <div className="status online">Online</div>
                                ) : (
                                    <div className="status offline">
                                        Offline
                                    </div>
                                )}
                            </td>
                            <td className="fw-bold">{author.employed}</td>
                            <td className="c--gray cursor-pointer">Edit</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="card card-table mb-3 mb-md-4">
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
    );
};

export default Tables;
