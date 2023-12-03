import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import lstpic from "../assets/images/lastpic.png";
import { useState } from "react";


function Contact() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: ''
    })


    function submitInfo() {
        console.log(userInfo)
    }

    return (
        <>
            <div className='pinpt'>
                <h1>About Pinpoint</h1><br></br>
            </div>

            <div className='d-flex justify-content-center pict'>
                <br></br><img src={lstpic}></img><br></br>
            </div>

            <div className='d-flex justify-content-center'>
                <p>Pinpoint is the fastest tracking and reservation software<br></br>solution for personal and enterprise vehicles for institutes,<br></br>offices and companies with live tracking, history recording,<br></br>estimated arrival time and usage report generation and much<br></br>more features.</p>
            </div>

            <div className='d-flex justify-content-center'>
                <p>Pinpoint is the fastest tracking and reservation software<br></br>solution for personal and enterprise vehicles for institutes,<br></br>offices and companies with live tracking, history recording,<br></br>estimated arrival time and usage report generation and much<br></br>more features.</p>
            </div>

            <div>
                <h2>Feedback Form</h2>
            </div>

            <div style={{ backgroundColor: '#e5e5e5' }}>
                <div className={"container p-4"}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control value={userInfo.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} type="text" placeholder="e.g John" />
                        <Form.Text className="text-muted">
                            Enter Name Here for Contact
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <div className='lastbtn'>
                    <Button onClick={submitInfo} variant="secondary">
                        Submit
                    </Button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;