const GetAQuote = () => {
    return (
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
                                                <form className="form_submission telsubmit get-a-quote-form" method="POST" action="https://formsubmit.co/harrydev96@gmail.com">
                                                    <input
                                                        type="hidden"
                                                        name="url"
                                                        defaultValue="https://www.authorseverest.com/get-a-quote.php"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="domain"
                                                        defaultValue="www.authorseverest.com"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="subject"
                                                        defaultValue="Get A Quote Form (www.authorseverest.com)"
                                                    />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label className="field-txt">
                                                                Name <span>*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Your Name *"
                                                                name="Name"
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
                                                                name="Email"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="field-txt">
                                                                Phone Number<span>*</span>
                                                            </label>
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
                                                        <div className="col-md-12">
                                                            <label className="field-txt">
                                                                Additional Comments <span>*</span>
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                name="Message"
                                                                placeholder="Enter message here"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input
                                                                className="submit"
                                                                type="submit"
                                                                defaultValue="Submit"
                                                            />
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

    );
}

export default GetAQuote;