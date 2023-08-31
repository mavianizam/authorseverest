import { useRouter } from "next/router";
import { useState } from "react";


const FooterForm = () => {

    const { asPath } = useRouter();

    const [Domain, setDomain] = useState('www.authorseverest.com');
    const [Page, setPage] = useState('https://authorseverest.com' + asPath);
    const [Subject, setSubject] = useState('Footer Form');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Comments, setComments] = useState('');

    function ContactSubmit() {
        const loaderf = document.getElementById('loaderf');
        loaderf.style.display = 'block';



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
                loaderf.style.display = 'none';
                const elementf = document.getElementById('yourElementIdf');

                if (elementf) {
                    // Change the display property to "block"
                    elementf.style.display = 'block';
                    setName('');
                    setEmail('');
                    setPhone('');
                    setComments('');
                }

                setTimeout(() => {
                    elementf.style.display = 'none';
                }, 2000);

            })
            .then(data => console.log(data))
            .catch(error => console.log(error));


    }

    return (
        <form className="form_submission telsubmit footer-form" >

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="text-center">
                        <h2 className="main-heading">Let’s Get Started</h2>
                        <p className="main-para">
                            Call (Toll Free)
                            <a href="tel:+(818) 304-9259"> (818) 304-9259</a> or use the
                            form below to start a conversation and show you how we can
                            help!
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fldst">
                        <input type="text" value={Name} onChange={e => { setName(e.currentTarget.value); }} className="form-control" placeholder="Enter Your Name *" required="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fldst">
                        <input type="email" value={Email} onChange={e => { setEmail(e.currentTarget.value); }} className="form-control" placeholder="Enter email here *" required="" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fldst">
                        <input type="number" value={Phone}
                            onChange={e => { setPhone(e.currentTarget.value); }}
                            className="form-control"
                            placeholder="Enter number here *"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fldst btnattach">

                        <textarea className="form-control" value={Comments} onChange={e => { setComments(e.currentTarget.value); }} placeholder="Enter message here" />
                    </div>
                </div>
                <div className="col-md-12 col-xs-12">
                    <button id="contact-page-btn" name="submit" type="button" onClick={ContactSubmit}>Submit</button>

                    <div className="error mt-3 alert alert-danger text-left mb-0" style={{ display: "none" }} />

                    <div
                        className="success mt-3 alert alert-success text-center mb-0 p-2" id="yourElementIdf"
                        style={{ display: "none" }}>
                        <p>Thank you for filling out your information!</p>
                    </div>
                    <div
                        className="loader" id="loaderf"
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
        </form >
    );
}

export default FooterForm;