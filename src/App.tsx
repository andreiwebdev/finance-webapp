import "./assets/sass/style.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// screens
import Dashboard from "./components/screens/Dashboard";

// components
import Navbar from "./components/common/Navbar";

function App() {
    return (
        <>
            <div className="container-fluid py-xl-3">
                <Row>
                    <Col xxl={3}>
                        <Navbar />
                    </Col>
                    <Dashboard />
                </Row>
            </div>
        </>
    );
}

export default App;
