import { useRouter } from "next/router";

const FooterForm = () => {

    const { asPath } = useRouter();

    return (
        <form className="form_submission telsubmit" method="POST" action="https://formsubmit.co/harrydev96@gmail.com">
            <input
                type="hidden"
                name="url"
                defaultValue={'https://authorseverest.com' + asPath}
            />
            <input
                type="hidden"
                name="domain"
                defaultValue="authorseverest.com"
            />
            <input
                type="hidden"
                name="subject"
                defaultValue="Footer Form (authorseverest.com)"
            />
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name *"
                            name="Name"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fldst">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email here *"
                            name="Email"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fldst">
                        <input
                            type="text"
                            className="form-control number phone-country"
                            minLength={10}
                            maxLength={12}
                            placeholder="Phone Number *"
                            name="Phone"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fldst btnattach">

                        <textarea
                            name="Message"
                            placeholder="Enter message here"
                            defaultValue={""}
                        />

                        <input
                            className="submit"
                            type="submit"
                            defaultValue="Submit"
                        />

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

                </div>
            </div>
        </form>
    );
}

export default FooterForm;