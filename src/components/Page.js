import Presentation from './Presentation';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


export default function Page() {
    return (
        <Container className="my-sm-5 pt-sm-3  container-fluid ">
            <Row className="justify-content-center">
                <Col className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-12 bg-dark text-center rounded">
                    <Presentation />
                </Col>
                <Col className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-12 bg-white border rounded">
                    <Login />
                </Col>
            </Row>
        </Container>
    );
}