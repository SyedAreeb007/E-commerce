import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/images/carousel1.png";
import pic from "../assets/images/carousel2.png";
import getstd from "../assets/images/getstarted.png";
import { Link } from 'react-router-dom';
import lft from '../assets/images/leftarrow.png';
import rgt from '../assets/images/rightarrow.png';
import Container from "react-bootstrap/esm/Container";

function HeroSection() {
    return (
        <>
            <Carousel
                fade
                prevIcon={<img src={lft} />}
                nextIcon={<img src={rgt} />}
            >
                <Carousel.Item className="container d-flex justify-content-center">
                    <img height={500} width={800} src={image} />
                </Carousel.Item>
                <Carousel.Item className="container d-flex justify-content-center">
                    <img height={500} width={800} src={pic} />
                </Carousel.Item>
            </Carousel>

            <div className="container hero-section">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <h1 className="title-section">THE FAST POINT</h1>
                        <h1 style={{ color: 'red' }} className="title-section">GET STARTED</h1>
                        <h1 className="title-section">TRACKING AND RESERVATION</h1>
                    </div>

                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <Link to={'/Contact'} style={{ textDecoration: 'none', color: 'dark' }}> <img src={getstd}></img> </Link>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <p>Pinpoint is the fastest tracking and reservation software<br></br>solution for personal and enterprise vehicles for institutes,<br></br>offices and companies with live tracking, history recording,<br></br>estimated arrival time and usage report generation and much<br></br>more features</p>
                </div>
            </div>
        </>
    );
}

export default HeroSection;

