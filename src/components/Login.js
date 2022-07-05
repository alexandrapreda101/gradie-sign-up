import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <>
            <Form className='mx-5 my-3 px-2'>
                <h2 className='mt-4 pt-3'>Login</h2>
                <Form.Group controlId="formEmail">
                    <Form.Label className="mt-3"><h5>Email</h5></Form.Label>
                    <Form.Control className="p-3" type="email" placeholder="john@example.com" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className="mt-4" ><h5>Password</h5></Form.Label>
                    <Form.Control className="p-3" type="password" placeholder="At least 8 characters" />
                </Form.Group>
                <Form.Group className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck" />
                    <Form.Label className="form-check-label inter " for="defaultCheck">By creating an account, you agree to the <a className="text-dark" href='#'>Terms & Conditions.</a></Form.Label>
                </Form.Group>
                <Button className='btn-dark btn-lg w-100 py-3 mt-2 h5'>Create an Account</Button>
            </Form>
        </>
    )
}