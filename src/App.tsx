import { useState } from "react";
import "./assets/sass/style.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// screens
import Dashboard from "./components/screens/Dashboard";

// components
import Navbar from "./components/common/Navbar";
import Tables from "./components/screens/Tables";
import Billing from "./components/screens/Billing";
import Profile from "./components/screens/Profile";

function App() {
    const [currentScreen, setCurrentScreen] = useState("Dashboard");

    const changeAppScreen = (screen: string) => {
        setCurrentScreen(screen);
    };

    return (
        <>
            <div className="container-fluid py-xl-3">
                <Row>
                    <Col xxl={2}>
                        <Navbar
                            currentScreen={currentScreen}
                            setCurrentScreen={changeAppScreen}
                        />
                    </Col>
                    {currentScreen === "Dashboard" && <Dashboard />}
                    {currentScreen === "Tables" && <Tables />}
                    {currentScreen === "Billing" && <Billing />}
                    {currentScreen === "Profile" && <Profile />}
                </Row>
            </div>
        </>
    );
}

export default App;
