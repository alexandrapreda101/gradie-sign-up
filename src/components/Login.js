export default function Presentation() {
    return (<>
        <h1>Login</h1>
        <p>Email</p>
        <input type="text" placeholder="john@example.com"></input>
        <p>Password</p>
        <input type="text" placeholder="At least 8 characters"></input>
        <br></br>
        <input type="checkbox" value="terms"></input>
        <label for="terms">By creating an account, you agree to the Terms & Conditions.</label>
        <br></br>
        <button>Create an account</button>
    </>
    )
}