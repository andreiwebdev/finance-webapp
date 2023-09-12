import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../common/Navbar";

type Props = {
    children: JSX.Element;
    currentScreen: string;
    changeAppScreen: Function;
};

const ScreenWrapper = (props: Props) => {
    return (
        <div className="container-fluid py-xl-3">
            <Row>
                <Col xxl={2}>
                    <Navbar
                        currentScreen={props.currentScreen}
                        setCurrentScreen={props.changeAppScreen}
                    />
                </Col>
                {props.children}
            </Row>
        </div>
    );
};

export default ScreenWrapper;
