import { BiSearch, BiSolidUser } from "react-icons/bi";
import { BsGearFill, BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
    screenName: string;
};

const TopPart = (props: Props) => {
    return (
        <div className="top-part-ctn d-none d-xxl-flex">
            <h4>{props.screenName}</h4>
            <div className="d-flex align-items-center">
                <form>
                    <button type="submit">
                        <BiSearch />
                    </button>
                    <input type="search" placeholder="Type here..." />
                </form>
                <div className="sign-in">
                    <BiSolidUser />
                    <Link to="/sign-in">
                        <h3>Sign In</h3>
                    </Link>
                </div>
                <div className="settings">
                    <BsGearFill />
                </div>
                <div className="notifications">
                    <BsFillBellFill />
                </div>
            </div>
        </div>
    );
};

export default TopPart;
