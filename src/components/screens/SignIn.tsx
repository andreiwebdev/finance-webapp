import SignScreen from "../common/SignScreen";
import SwitchButton from "../common/SwitchButton";

const SignIn = () => {
    return (
        <SignScreen>
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
                        Don't have an account? <a href="#">Sign Up</a>
                    </p>
                </div>
            </div>
        </SignScreen>
    );
};

export default SignIn;
