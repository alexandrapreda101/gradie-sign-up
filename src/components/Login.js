import '../css/main.min.css';
import { Button, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <>
            <Form className='mx-lg-5 px-lg-2  mx-3 px-1'>
                <h1 className='mt-4 pt-4 roboto-font font-bold'>Login</h1>
                <Form.Group controlId="formEmail">
                    <Form.Label className="mt-3"><h5 className="dm-sans-font font-bold">Email</h5></Form.Label>
                    <Form.Control className="p-3 dm-sans-font" type="email" placeholder="john@example.com" required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className="mt-4" ><h5 className="dm-sans-font font-bold">Password</h5></Form.Label>
                    <Form.Control className="p-3 dm-sans-font" type="password" placeholder="At least 8 characters" required />
                </Form.Group>
                <Form.Group className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck" required />
                    <Form.Label className="form-check-label inter " for="defaultCheck">By creating an account, you agree to the <a className="text-primary font-bold" href='#'>Terms & Conditions.</a></Form.Label>
                </Form.Group>
                <Button className='btn-primary btn-md w-100 py-3 dm-sans-font font-bold my-xxl-3 my-lg-5 h5 my-4' type="submit">Create an Account</Button>
            </Form>
        </>
    )
}