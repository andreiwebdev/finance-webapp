import { BiSearch, BiSolidUser } from "react-icons/bi";
import { BsGearFill, BsFillBellFill } from "react-icons/bs";

const TopPart = () => {
    return (
        <div className="top-part-ctn d-none d-xxl-flex">
            <h4>Dashboard</h4>
            <div className="d-flex align-items-center">
                <form>
                    <button type="submit">
                        <BiSearch />
                    </button>
                    <input type="search" placeholder="Type here..." />
                </form>
                <div className="sign-in">
                    <BiSolidUser />
                    <h3>Sign In</h3>
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
