import { useState } from "react";

const Contact = () => {

    const [Domain, setDomain] = useState('www.authorseverest.com');
    const [Page, setPage] = useState('Contact Form ');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Comments, setComments] = useState('');

    function ContactSubmit() {

        const loaderc = document.getElementById('loaderc');
        loaderc.style.display = 'block';

        fetch("https://formsubmit.co/ajax/info@authorseverest.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Domain: Domain,
                Page: Page,
                Name: Name,
                Email: Email,
                Phone: Phone,
                Comments: Comments,
            })
        })
            .then(function (response) {
                loaderc.style.display = 'none';
                const elementc = document.getElementById('yourElementIdc');

                if (elementc) {
                    // Change the display property to "block"
                    elementc.style.display = 'block';
                    setName('');
                    setEmail('');
                    setPhone('');
                    setComments('');
                }
                setTimeout(() => {
                    elementc.style.display = 'none';
                }, 2000);

            })
            .then(data => console.log(data))
            .catch(error => console.log(error));


    }
    return (
        <section className="sec-padding mtpx-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 inner-content">
                        <h2 className="main-heading">Contact Us</h2>
                        <p className="main-para">
                            Feel free to talk to us, write to us,or finish the contact form at the
                            bottom of this page. Call (Toll-Free): (818) 304-9259 Email:
                            <a href="tel:+(818) 304-9259">
                                <span>info@authorseverest.com</span>
                            </a>
                        </p>
                        <div className="form-box-main clearfix">
                            <h2>We would like to hear from you</h2>
                            <form className="form_submission telsubmit">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="field-txt">
                                            Name <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={Name}
                                            onChange={e => { setName(e.currentTarget.value); }}
                                            className="form-control"
                                            placeholder="Enter Your Name *"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="field-txt">
                                            Email <span>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={Email}
                                            onChange={e => { setEmail(e.currentTarget.value); }}
                                            className="form-control"
                                            placeholder="Enter email here *"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="field-txt">
                                            Phone Number<span>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={Phone}
                                            onChange={e => { setPhone(e.currentTarget.value); }}
                                            className="form-control"
                                            placeholder="Enter number here *"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="field-txt">
                                            Additional Comments <span>*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            value={Comments}
                                            onChange={e => { setComments(e.currentTarget.value); }}
                                            placeholder="Enter message here"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button id="contact-page-btn" name="submit" type="button" onClick={ContactSubmit}>Submit</button>
                                    </div>
                                    <div className="col-md-12 col-xs-12">
                                        <div
                                            className="error mt-3 alert alert-danger text-left mb-0"
                                            style={{ display: "none" }}
                                        />
                                        <div
                                            className="success mt-3 alert alert-success text-center mb-0 p-2" id="yourElementIdc"
                                            style={{ display: "none" }}>
                                            <p>Thank you for filling out your information!</p>
                                        </div>

                                        <div className="loader" style={{ display: "none" }} id="loaderc">
                                            <img alt="loader" src="images/loader.gif" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}



export default Contact;

