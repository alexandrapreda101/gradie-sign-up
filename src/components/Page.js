import Presentation from './Presentation';
import Login from './Login';
import '../css/main.min.css';
import { Col, Container, Row } from 'react-bootstrap';


export default function Page() {
    return (
        <Container className="my-sm-5 pt-sm-3  container-fluid ">
            <Row className="justify-content-center">
                <Col className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-12 bg-primary text-center rounded-corners-1">
                    <Presentation />
                </Col>
                <Col className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-12 bg-white border rounded-corners-2">
                    <Login />
                </Col>
            </Row>
        </Container>
    );
}