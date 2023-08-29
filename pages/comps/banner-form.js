import { useRouter } from "next/router";

const BannerForm = () => {

    const { asPath } = useRouter();

    return (
        <form
            className="form_submission telsubmit"
            method="POST"
            action="https://formsubmit.co/harrydev96@gmail.com"
        >
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
                defaultValue="Banner Form (authorseverest.com)"
            />
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
                            className="form-control"
                            placeholder="Enter Your Name *"
                            name="Name"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email here *"
                            name="Email"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <input
                            type="number"
                            className="form-control number phone-country"
                            minLength={10}
                            maxLength={12}
                            placeholder="Phone Number *"
                            name="Phone"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <textarea
                            className="form-control"
                            placeholder="Enter a brief description"
                            name="Message"
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="fldset">
                        <input
                            name="submit"
                            type="submit"
                            placeholder="Connect With Us"
                        />
                        <div
                            className="error mt-3 alert alert-danger text-left mb-0"
                            style={{ display: "none" }}
                        />
                        <div
                            className="success mt-3 alert alert-success text-left mb-0"
                            style={{ display: "none" }}
                        />
                        <div
                            className="loader"
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