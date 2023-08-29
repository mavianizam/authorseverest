const Contact = () => {

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
                            <form
                                className="form_submission telsubmit"
                                method="POST"
                                noValidate="novalidate"
                            >
                                <input
                                    type="hidden"
                                    name="domain"
                                    defaultValue="www.authorseverest.com"
                                />
                                <input
                                    type="hidden"
                                    name="subject"
                                    defaultValue="Banner Form (www.authorseverest.com)"
                                />
                                <input type="text" className="jun" name="gender" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="field-txt">
                                            Name <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your Name *"
                                            name="cn"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="field-txt">
                                            Email <span>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email here *"
                                            name="em"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="field-txt">
                                            Phone Number<span>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter number here *"
                                            name="num"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="field-txt">
                                            Additional Comments <span>*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Enter message here"
                                            name="msg"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input name="submit" type="submit" placeholder="Submit" />
                                    </div>
                                    <div className="col-md-12 col-xs-12">
                                        <div
                                            className="error mt-3 alert alert-danger text-left mb-0"
                                            style={{ display: "none" }}
                                        />
                                        <div
                                            className="success mt-3 alert alert-success text-center mb-0 p-2"
                                            style={{ display: "none" }}
                                        />
                                        <div className="loader" style={{ display: "none" }}>
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

