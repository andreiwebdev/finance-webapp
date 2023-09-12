import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import SignScreen from "../common/SignScreen";
import SwitchButton from "../common/SwitchButton";
import { Link } from "react-router-dom";

type Props = {
    changeAppScreen: Function;
};

const SignUp = (props: Props) => {
    return (
        <SignScreen changeAppScreen={props.changeAppScreen}>
            <div className="card card-sign-up">
                <div className="text-wrapper">
                    <h2>Welcome!</h2>
                    <p>
                        Use these awesome forms to login or create new account
                        in your project for free.
                    </p>
                </div>
                <div className="wrapper">
                    <h2>Register with</h2>
                    <div className="register-options">
                        <div className="option">
                            <FaFacebook />
                        </div>
                        <div className="option">
                            <FaApple />
                        </div>
                        <div className="option">
                            <FaGoogle />
                        </div>
                    </div>
                    <p>or</p>
                    <form>
                        <label>Name</label>
                        <input
                            className="input--1"
                            type="text"
                            placeholder="Your full name"
                        />

                        <label>Email</label>
                        <input
                            className="input--1"
                            type="email"
                            placeholder="Your email address"
                        />

                        <label>Password</label>
                        <input
                            className="input--1"
                            type="password"
                            placeholder="Your password"
                        />

                        <SwitchButton label="Remember me" />

                        <button className="btn btn--3" type="submit">
                            SIGN UP
                        </button>
                    </form>
                    <p className="signin">
                        Already have an account?{" "}
                        <Link to="/sign-in">Sign In</Link>
                    </p>
                </div>
            </div>
        </SignScreen>
    );
};

export default SignUp;
