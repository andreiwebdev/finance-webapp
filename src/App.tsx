import { useState } from "react";
import "./assets/sass/style.scss";

// screens
import Dashboard from "./components/screens/Dashboard";
import Tables from "./components/screens/Tables";
import Billing from "./components/screens/Billing";
import Profile from "./components/screens/Profile";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";

// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScreenWrapper from "./components/common/ScreenWrapper";

function App() {
    const [currentScreen, setCurrentScreen] = useState("Dashboard");

    const changeAppScreen = (screen: string) => {
        setCurrentScreen(screen);
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        Component={() => (
                            <ScreenWrapper
                                currentScreen={currentScreen}
                                changeAppScreen={changeAppScreen}
                            >
                                <Dashboard />
                            </ScreenWrapper>
                        )}
                    />
                    <Route
                        path="/tables"
                        Component={() => (
                            <ScreenWrapper
                                currentScreen={currentScreen}
                                changeAppScreen={changeAppScreen}
                            >
                                <Tables />
                            </ScreenWrapper>
                        )}
                    />
                    <Route
                        path="/billing"
                        Component={() => (
                            <ScreenWrapper
                                currentScreen={currentScreen}
                                changeAppScreen={changeAppScreen}
                            >
                                <Billing />
                            </ScreenWrapper>
                        )}
                    />
                    <Route
                        path="/profile"
                        Component={() => (
                            <ScreenWrapper
                                currentScreen={currentScreen}
                                changeAppScreen={changeAppScreen}
                            >
                                <Profile />
                            </ScreenWrapper>
                        )}
                    />
                    <Route
                        path="/sign-in"
                        Component={() => (
                            <SignIn changeAppScreen={changeAppScreen} />
                        )}
                    />
                    <Route
                        path="/sign-up"
                        Component={() => (
                            <SignUp changeAppScreen={changeAppScreen} />
                        )}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
