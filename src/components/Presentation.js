import iphoneMockup from "../assets/iPhone_Mockup.png";
import '../css/main.min.css';
import { Image } from 'react-bootstrap';

export default function Presentation() {
    return (
        <>
            <h1 className="text-light mt-4 pt-4 roboto-font font-bold">Gradie</h1>
            <h6 className="text-secondary mt-2 roboto-font pt-1">Beautiful gradients in seconds.</h6>
            <div className="mt-md-5 pt-md-5 mx-md-4 px-md-4 mt-4 pt-5 mx-3 px-4">
                <Image src={iphoneMockup} width="100%" alt="iPhone Mockup" />
            </div>
        </>
    )
}