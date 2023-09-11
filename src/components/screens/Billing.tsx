import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopPart from "../common/TopPart";

// images
import BgCard from "../../assets/images/billing/bg-card.png";
import { BsThreeDots } from "react-icons/bs";
import {
    FaArrowDown,
    FaArrowUp,
    FaCalendar,
    FaExclamation,
    FaMoneyBill,
    FaPaperclip,
    FaPencilAlt,
} from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

const Billing = () => {
    return (
        <Col className="billing" xs={12} xxl={10}>
            <TopPart screenName="Billing" />
            <Row>
                <Col xs={12}>
                    <Row className="mb-xxl-4">
                        <Col xs={12} xxl={7}>
                            <Row className="mb-md-4">
                                <Col md={6}>
                                    {/* Virtual Card */}
                                    <div
                                        className="card virtual-card mb-3 mb-md-0"
                                        style={{
                                            backgroundImage: `url(${BgCard})`,
                                        }}
                                    >
                                        <h3>Virtual Card</h3>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="33"
                                            viewBox="0 0 50 33"
                                            fill="none"
                                        >
                                            <circle
                                                opacity="0.4"
                                                cx="16.9047"
                                                cy="16.4051"
                                                r="16.4047"
                                                fill="white"
                                            />
                                            <circle
                                                opacity="0.4"
                                                cx="33.3107"
                                                cy="16.4047"
                                                r="16.4047"
                                                fill="white"
                                            />
                                        </svg>
                                        <div>
                                            <h2>7812 2139 0823 XXXX</h2>
                                            <div className="card-details">
                                                <div>
                                                    <h5>VALID THRU</h5>
                                                    <h4>05/24</h4>
                                                </div>
                                                <div>
                                                    <h5>CVV</h5>
                                                    <h4>09X</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    {/* Credit Balance */}
                                    <div className="card card-balance mb-3 mb-md-0">
                                        <div className="balance">
                                            <h3>Credit Balance</h3>
                                            <h2>$25,215</h2>
                                            <BsThreeDots />
                                        </div>
                                        <div className="label">NEWEST</div>
                                        <div className="bill">
                                            <div className="ctn">
                                                <div className="icon-box">
                                                    <FaMoneyBill />
                                                </div>
                                                <div>
                                                    <h4>Bill & Taxes</h4>
                                                    <h5>Today, 16:36</h5>
                                                </div>
                                            </div>
                                            <h3>-$154.50</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* Change Payment Method */}
                            <div className="card pay-method mb-3 mb-xxl-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                                    <h2 className="mb-0">Payment Method</h2>
                                    <button className="btn btn--3">
                                        ADD A NEW CARD
                                    </button>
                                </div>
                                <div className="inputs">
                                    <div className="input-card">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="15"
                                                viewBox="0 0 21 15"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="6.63158"
                                                    cy="7.49999"
                                                    r="6.63158"
                                                    fill="#EB001B"
                                                />
                                                <circle
                                                    cx="14.3685"
                                                    cy="7.49999"
                                                    r="6.63158"
                                                    fill="#F79E1B"
                                                />
                                            </svg>
                                            <h3>7812 2139 0823 XXXX</h3>
                                        </div>
                                        <FaPencilAlt />
                                    </div>
                                    <div className="input-card">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="9"
                                                viewBox="0 0 25 9"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.9021 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <h3>7812 2139 0823 XXXX</h3>
                                        </div>
                                        <FaPencilAlt />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} xxl={5}>
                            {/* Invoices */}
                            <div className="card invoices-card mb-3 mb-xxl-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                                    <h2>Invoices</h2>
                                    <button className="btn btn--3">
                                        ADD A NEW CARD
                                    </button>
                                </div>
                                <div className="invoice d-flex align-items-center justify-content-between flex-wrap">
                                    <div>
                                        <h3>March, 01, 2020</h3>
                                        <p>#MS-415646</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <p>$180</p>
                                        <p>
                                            <FaPaperclip /> PDF
                                        </p>
                                    </div>
                                </div>
                                <div className="invoice d-flex align-items-center justify-content-between flex-wrap">
                                    <div>
                                        <h3>March, 01, 2020</h3>
                                        <p>#MS-415646</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <p>$180</p>
                                        <p>
                                            <FaPaperclip /> PDF
                                        </p>
                                    </div>
                                </div>
                                <div className="invoice d-flex align-items-center justify-content-between flex-wrap">
                                    <div>
                                        <h3>March, 01, 2020</h3>
                                        <p>#MS-415646</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <p>$180</p>
                                        <p>
                                            <FaPaperclip /> PDF
                                        </p>
                                    </div>
                                </div>
                                <div className="invoice d-flex align-items-center justify-content-between flex-wrap">
                                    <div>
                                        <h3>March, 01, 2020</h3>
                                        <p>#MS-415646</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <p>$180</p>
                                        <p>
                                            <FaPaperclip /> PDF
                                        </p>
                                    </div>
                                </div>
                                <div className="invoice d-flex align-items-center justify-content-between flex-wrap">
                                    <div>
                                        <h3>March, 01, 2020</h3>
                                        <p>#MS-415646</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <p>$180</p>
                                        <p>
                                            <FaPaperclip /> PDF
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xxl={7}>
                            {/* Billing Information */}
                            <div className="card billing-info mb-3 mb-xxl-0">
                                <h2>Billing Information</h2>
                                <div className="bill-card">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <h3>Oliver Liam</h3>
                                        <div className="d-flex">
                                            <button className="btn c--red">
                                                <BiTrash /> DELETE
                                            </button>
                                            <button className="btn c--gray">
                                                <FaPencilAlt /> EDIT
                                            </button>
                                        </div>
                                    </div>
                                    <p>Company Name: Viking Burrito Email</p>
                                    <p>Address: oliver@burrito.com </p>
                                    <p>VAT Number: FRB1235476</p>
                                </div>
                                <div className="bill-card">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <h3>Oliver Liam</h3>
                                        <div className="d-flex">
                                            <button className="btn c--red">
                                                <BiTrash /> DELETE
                                            </button>
                                            <button className="btn c--gray">
                                                <FaPencilAlt /> EDIT
                                            </button>
                                        </div>
                                    </div>
                                    <p>Company Name: Viking Burrito Email</p>
                                    <p>Address: oliver@burrito.com </p>
                                    <p>VAT Number: FRB1235476</p>
                                </div>
                                <div className="bill-card">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <h3>Oliver Liam</h3>
                                        <div className="d-flex">
                                            <button className="btn c--red">
                                                <BiTrash /> DELETE
                                            </button>
                                            <button className="btn c--gray">
                                                <FaPencilAlt /> EDIT
                                            </button>
                                        </div>
                                    </div>
                                    <p>Company Name: Viking Burrito Email</p>
                                    <p>Address: oliver@burrito.com </p>
                                    <p>VAT Number: FRB1235476</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} xxl={5}>
                            {/* Transactions */}
                            <div className="card transactions-card mb-3 mb-xxl-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                                    <h2>Your Transactions</h2>
                                    <p>
                                        <FaCalendar /> 23-30 March 2020
                                    </p>
                                </div>
                                <div className="label">NEWEST</div>
                                <div className="bill">
                                    <div className="ctn">
                                        <div className="icon-box red">
                                            <FaArrowDown />
                                        </div>
                                        <div>
                                            <h4>Netflix</h4>
                                            <h5>27 March 2020, at 12:30 PM</h5>
                                        </div>
                                    </div>
                                    <h3 className="c--gray">-$154.50</h3>
                                </div>
                                <div className="bill">
                                    <div className="ctn">
                                        <div className="icon-box green">
                                            <FaArrowUp />
                                        </div>
                                        <div>
                                            <h4>Netflix</h4>
                                            <h5>27 March 2020, at 12:30 PM</h5>
                                        </div>
                                    </div>
                                    <h3 className="c--green">-$154.50</h3>
                                </div>
                                <div className="label">YESTERDAY</div>
                                <div className="bill">
                                    <div className="ctn">
                                        <div className="icon-box green">
                                            <FaArrowUp />
                                        </div>
                                        <div>
                                            <h4>Netflix</h4>
                                            <h5>27 March 2020, at 12:30 PM</h5>
                                        </div>
                                    </div>
                                    <h3 className="c--green">-$154.50</h3>
                                </div>
                                <div className="bill">
                                    <div className="ctn">
                                        <div className="icon-box green">
                                            <FaArrowUp />
                                        </div>
                                        <div>
                                            <h4>Netflix</h4>
                                            <h5>27 March 2020, at 12:30 PM</h5>
                                        </div>
                                    </div>
                                    <h3 className="c--green">-$154.50</h3>
                                </div>
                                <div className="bill">
                                    <div className="ctn">
                                        <div className="icon-box gray">
                                            <FaExclamation />
                                        </div>
                                        <div>
                                            <h4>Netflix</h4>
                                            <h5>27 March 2020, at 12:30 PM</h5>
                                        </div>
                                    </div>
                                    <h3 className="c--gray">Pending</h3>
                                </div>
                                <div className="bill">
                                    <div className="ctn">
                                        <div className="icon-box red">
                                            <FaArrowDown />
                                        </div>
                                        <div>
                                            <h4>Netflix</h4>
                                            <h5>27 March 2020, at 12:30 PM</h5>
                                        </div>
                                    </div>
                                    <h3 className="c--gray">-$154.50</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
};

export default Billing;
