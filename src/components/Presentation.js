import iphoneMockup from "../assets/iPhone_Mockup.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

export default function Presentation() {
    return (
        <>
            <h2 className="text-light mt-4 pt-4" >Gradie</h2>
            <h6 className="text-light mt-2 pt-1">Beautiful gradients in seconds.</h6>
            <div className="mt-5 pt-5 mx-4 px-4">
                <Image src={iphoneMockup} width="100%" alt="Iphone Mockup" />
            </div>
        </>
    )
}