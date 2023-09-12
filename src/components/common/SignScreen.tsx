// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
    children: JSX.Element;
};

const SignScreen = (props: Props) => {
    return (
        <div className="container-fluid">
            <Row>
                <Col xs={12} md={6} className="p-0 order-md-2">
                    {props.children}
                </Col>
                <Col className="d-none d-md-flex order-md-1 sign-bg" md={6}>
                    <div className="wrapper">
                        <h3>INSPIRED BY THE FUTURE:</h3>
                        <h2>FINANCE APP DASHBOARD</h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SignScreen;
