import { useRouter } from "next/router";
import { useState } from "react";

const BannerForm = () => {

    const { asPath } = useRouter();

    const [Domain, setDomain] = useState('www.authorseverest.com');
    const [Page, setPage] = useState('https://authorseverest.com' + asPath);
    const [Subject, setSubject] = useState('Banner Form');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Comments, setComments] = useState('');

    function ContactSubmit() {
        const loader = document.getElementById('loader');
        loader.style.display = 'block';



        fetch("https://formsubmit.co/ajax/harrydev96@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Domain: Domain,
                Page: Page,
                Subject: Subject,
                Name: Name,
                Email: Email,
                Phone: Phone,
                Comments: Comments,
            })
        })
            .then(function (response) {
                loader.style.display = 'none';
                const element = document.getElementById('yourElementId');

                if (element) {
                    // Change the display property to "block"
                    element.style.display = 'block';
                    setName('');
                    setEmail('');
                    setPhone('');
                    setComments('');
                }

            })
            .then(data => console.log(data))
            .catch(error => console.log(error));


    }

    return (
        <form className="form_submission telsubmit banner_form">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bannerform-heading">
                        <p>
                            <span>Signup</span> Now!
                        </p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <input
                            type="text"
                            value={Name}
                            onChange={e => { setName(e.currentTarget.value); }}
                            className="form-control"
                            placeholder="Enter Your Name *"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <input
                            type="email"
                            value={Email}
                            onChange={e => { setEmail(e.currentTarget.value); }}
                            className="form-control"
                            placeholder="Enter email here *"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <input
                            type="number"
                            value={Phone}
                            onChange={e => { setPhone(e.currentTarget.value); }}
                            className="form-control"
                            placeholder="Enter number here *"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <textarea
                            className="form-control"
                            value={Comments}
                            onChange={e => { setComments(e.currentTarget.value); }}
                            placeholder="Enter message here"
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <button id="contact-page-btn" name="submit" type="button" onClick={ContactSubmit}>Submit</button>
                        <div
                            className="error mt-3 alert alert-danger text-left mb-0"
                            style={{ display: "none" }}
                        />
                        <div
                            className="success mt-3 alert alert-success text-center mb-0 p-2" id="yourElementId"
                            style={{ display: "none" }}>
                            <p>Thank you for filling out your information!</p>
                        </div>
                        <div
                            className="loader" id="loader"
                            style={{ display: "none" }}
                        >
                            <img
                                alt="loader"
                                src="images/loader.gif"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BannerForm;