import { Link } from "react-router-dom";
import SignScreen from "../common/SignScreen";
import SwitchButton from "../common/SwitchButton";

type Props = {
    changeAppScreen: Function;
};

const SignIn = (props: Props) => {
    return (
        <SignScreen changeAppScreen={props.changeAppScreen}>
            <div className="card card-sign-in">
                <div className="wrapper">
                    <h2>Nice to see you!</h2>
                    <p>Enter your email and password to sign in</p>
                    <form>
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
                            SIGN IN
                        </button>
                    </form>
                    <p className="signup">
                        Don't have an account?{" "}
                        <Link to="/sign-up">Sign Up</Link>
                    </p>
                </div>
            </div>
        </SignScreen>
    );
};

export default SignIn;
