import { useState } from "react";
import Router from "next/router";
import Head from "next/head";



const GetAQuote = () => {


    const [Domain, setDomain] = useState('www.authorseverest.com');
    const [Subject, setSubject] = useState('Get A Qoute Form');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Comments, setComments] = useState('');

    const nameerror = 'enter your name'
    const emailerror = 'enter your Email'
    const phoneerror = 'enter your Phone'

    const [showMe, setShowMe] = useState(false);

    function ContactSubmit() {


        if (!Name) {
            console.log(nameerror)
            setShowMe(!showMe);

            // document.getElementById(styles["error"]).classList.add(styles["display-block"]);
            return (false);
        }
        if (!Email) {
            console.log(emailerror)
            setShowMe(!showMe);
            return (false);
        }
        if (!Phone) {
            console.log(phoneerror)
            setShowMe(!showMe);
            return (false);
        }



        const loaderq = document.getElementById('loaderq');
        loaderq.style.display = 'block';



        fetch("api/email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Domain: Domain,
                Subject: Subject,
                Name: Name,
                Email: Email,
                Phone: Phone,
                Comments: Comments,
            })
        })
            .then(function (response) {
                loaderq.style.display = 'none';
                const Elementq = document.getElementById('Elementq');

                if (Elementq) {
                    // Change the display property to "block"
                    Elementq.style.display = 'block';
                    setName('');
                    setEmail('');
                    setPhone('');
                    setComments('');
                }
                setTimeout(() => {
                    Elementq.style.display = 'none';
                }, 2000);

                Router.replace("/thankyou");

            })
            .then(data => console.log(data))
            .catch(error => console.log(error));


    }
    return (
        <>
            <Head>
                <title>Get A Quote</title>
                <meta name="description" content="Don't keep your story locked up, let it inspire the world!"></meta>
            </Head>
            <div className="slider-wrapper black">
                <section className="">
                    <div className="item">
                        <div className="home-banner " style={{ background: "#f7f9fc" }}>
                            <div className="container ">
                                <div className="row">
                                    <div className=" col-lg-12 col-xl-12 text-center">
                                        <div className="home-banner-content">
                                            <div className="col-lg-8 offset-lg-2   inner-content mtpx-100 text-left">
                                                <div className="form-box-main clearfix">
                                                    <h2>We would like to hear from you</h2>
                                                    <form className="form_submission telsubmit get-a-quote-form">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label className="field-txt">
                                                                    Name <span>*</span>
                                                                </label>
                                                                <input type="text" value={Name} onChange={e => { setName(e.currentTarget.value); }} className="form-control" placeholder="Enter Your Name *" required="" />
                                                                <p className="error" style={{
                                                                    display: showMe ? "block" : "none"
                                                                }}>{nameerror}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="field-txt">
                                                                    Email <span>*</span>
                                                                </label>
                                                                <input type="email" value={Email} onChange={e => { setEmail(e.currentTarget.value); }} className="form-control" placeholder="Enter email here *" required="" />
                                                                <p className="error" style={{
                                                                    display: showMe ? "block" : "none"
                                                                }}>{emailerror}</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label className="field-txt">
                                                                    Phone Number<span>*</span>
                                                                </label>
                                                                <input type="number" value={Phone}
                                                                    onChange={e => { setPhone(e.currentTarget.value); }}
                                                                    className="form-control"
                                                                    placeholder="Enter number here *"
                                                                    required=""
                                                                />
                                                                <p className="error" style={{
                                                                    display: showMe ? "block" : "none"
                                                                }}>{phoneerror}</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label className="field-txt">
                                                                    Additional Comments <span>*</span>
                                                                </label>
                                                                <textarea className="form-control" value={Comments} onChange={e => { setComments(e.currentTarget.value); }} placeholder="Enter message here" />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button id="contact-page-btn" name="submit" type="button" onClick={ContactSubmit}>Submit</button>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="error mt-3 alert alert-danger text-left mb-0" style={{ display: "none" }} />

                                                                <div
                                                                    className="success mt-3 alert alert-success text-center mb-0 p-2" id="Elementq"
                                                                    style={{ display: "none" }}>
                                                                    <p>Thank you for filling out your information!</p>
                                                                </div>
                                                                <div
                                                                    className="loader" id="loaderq"
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
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default GetAQuote;