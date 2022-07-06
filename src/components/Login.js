import '../css/main.min.css';
import { Button, Form } from 'react-bootstrap'
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        setIsChecked(!isChecked);
    }

    console.log(isChecked);

    return (
        <Form className='mx-lg-5 px-lg-2  mx-3 px-1'>
            <h1 className='mt-4 pt-4 roboto-font font-bold'>Login</h1>
            <Form.Group controlId="formEmail">
                <Form.Label className="mt-3">
                    <h5 className="dm-sans-font font-bold">Email</h5>
                </Form.Label>
                <Form.Control
                    className="p-3 dm-sans-font"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label className="mt-4" >
                    <h5 className="dm-sans-font font-bold">Password</h5>
                </Form.Label>
                <Form.Control
                    className="p-3 dm-sans-font"
                    type="password"
                    placeholder="At least 8 characters"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="form-check mt-4">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck"
                    required
                    checked={isChecked}
                    onChange={checkHandler}
                />
                <Form.Label
                    className="form-check-label inter-font "
                    for="defaultCheck">By creating an account, you agree to the
                    <a className="text-primary font-bold" href='#'>Terms & Conditions.</a>
                </Form.Label>
            </Form.Group>
            <Button className='btn-primary btn-md w-100 py-3 dm-sans-font font-bold my-xxl-3 my-lg-5 h5 my-4' type="submit">Create an Account</Button>
        </Form>
    )
}