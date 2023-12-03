import Button from 'react-bootstrap/Button';

export default function Statistics() {
    return (
        <>
        <div className='bttn'>
            <div className="row">
                <div className="col col-lg-4 col-md-4 col-sm-12">
                    <Button variant="secondary">5000 Users</Button>
                </div>

                <div className="col col-lg-4 col-md-4 col-sm-12">
                    <Button variant="secondary">10 Trusted Clients</Button>
                </div>

                <div className="col col-lg-4 col-md-4 col-sm-12">
                    <Button variant="secondary">10k+ Downloads</Button>
                </div>
            </div>
            </div>
        </>
    );
}