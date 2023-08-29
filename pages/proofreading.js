import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";

const Proofreading = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/proof-reading.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <section className="">
                    <div className="item">
                        <div className="home-banner">
                            <div className="container">
                                <div className="row align-self-center">
                                    <div className="col-lg-7 col-md-7 col-sm-12 align-self-center">
                                        <div className="home-banner-content home-align">
                                            {/* <p class="subtitle">Remodeling & Improving Your Draft</p> */}
                                            <h1 style={{ color: "#fff" }}>
                                                Perfect Your Writing with the Best Proofreading Services
                                                Available
                                            </h1>
                                            <span>
                                                Are you searching for the best proofreading services that
                                                guarantee accurate and error-free writing? Your searching
                                                stops right here. We have a team of certified proofreaders
                                                at our online proofreading academy! Our proofreading
                                                services are tailored to your needs, whether you need a
                                                quick check or a detailed analysis of your document. We know
                                                how critical it is to make a great first impression. Our
                                                proofreaders are dedicated to ensuring that your writing
                                                shines. Reach out to us ASAP and take the first step toward
                                                perfection.
                                            </span>
                                            <Cta />
                                        </div>
                                        <div className="badges-box">
                                            <ul>
                                                <li className="first">
                                                    <img src="images/clutch-badge.png" alt="clutch-badge" />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/top-markeintg-agencies.png"
                                                        alt="markeintg-agencies"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/best-content-marketing.png"
                                                        alt="content-marketing"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/design-rush-badge.png"
                                                        alt="rush-badge"
                                                    />
                                                </li>
                                                <li className="last">
                                                    <img src="images/top-seo-badge-home/" alt="seo-badge" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ratingBr">
                                            <p>
                                                Rated 9 out of 10
                                                <span>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>{" "}
                                                based on 3,543 satisfied customers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 offset-lg-1 col-md-4 offset-md-1 col-sm-12 align-self-center">
                                        <div className="banner-form">
                                            <section className="banform">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="">
                                                            <div className="ban-form">
                                                                <BannerForm />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>{" "}
                                        </div>
                                    </div>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="clintlogos">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="partnerslider">
                                <li>
                                    <img src="images/barnes.png" alt="" width={120} height={34} />
                                </li>
                                <li>
                                    <img src="images/amazon.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/esquire.svg" alt="" />
                                </li>
                                <li>
                                    <img
                                        src="images/wikipedia-logo.png"
                                        alt=""
                                        width={120}
                                        height={34}
                                    />
                                </li>
                                <li>
                                    <img src="images/forbes.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/google-book.svg" alt="" />
                                </li>
                                <li>
                                    <img loading="lazy" src="images/ingram.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/random-house.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/the-wall-street.svg" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="main-cmplete-sec">
                <div className="container">
                    <div className="row align-self-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-cont">
                                <h2 className="main-heading">
                                    Proofreaders for Hire - Get Professional Help for Your Writing
                                </h2>
                                <p className="main-para">
                                    If you cannot find a suitable proofreader for your book or
                                    document, then our team of expert proofreaders is here to end your
                                    hustle! Whether you need a proofreader for books or business
                                    documents, we have the right person for the job. Our proofreading
                                    rates are affordable, and our proofreaders are experienced in all
                                    types of writing. We understand the importance of getting your
                                    writing right and are committed to helping you achieve your goals.
                                    Hire a book proofreader today and advance your writing to the next
                                    level.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/proof-reading.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta2 lazy" src="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="wrap">
                                <h6>Stop Stressing Out And Trust Us</h6>
                                <h3>
                                    Our Certified Proofreader Will Ensure Your Writing Empresses
                                    Everyone
                                </h3>
                                <div className="theme-btns">
                                    <a className="lets-btn" href="get-a-quote">
                                        Get a Quote
                                    </a>
                                    <a className="nos-btn" href="javascript:;">
                                        Live Chat
                                    </a>
                                    <a className="nos-btn" href="tel:+(818) 304-9259">
                                        (818) 304-9259
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flexiblefeatures-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="orparch">
                                <span className="urach">Why Choose Us?</span>
                                <h2 className="main-heading">
                                    Acquire Our Services, And Get to Know "What is Proofreading?" and
                                    What It Does For You!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/placeyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Best Packages</h4>
                                        <p>
                                            We offer a number of packages to suit your proofreading needs.
                                            From basic to premium, we have something for everyone. Our
                                            options menu lets you choose the best package for your budget
                                            and requirements.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Professional Services</h4>
                                        <p>
                                            Our team consists of professional editors and native English
                                            speakers from the USA. We understand the importance of
                                            accuracy and attention to detail in written work and guarantee
                                            that your work will be reviewed to the highest standards.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Top-Rated Company </h4>
                                        <p>
                                            Our customers have consistently rated us as one of the top
                                            proofreading companies in the industry. We take pride in the
                                            positive reviews and testimonials we receive and strive to
                                            maintain our reputation as a reliable and trusted service
                                            provider.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 icons">
                            <ul>
                                <li>
                                    <figure>
                                        <img
                                            className="lazy"
                                            src="images/icons8-exclusive-sale-64.png"
                                        />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Affordable Prices</h4>
                                        <p>
                                            Our belief is that quality proofreading should not come at a
                                            high cost. So, we offer some of the market's most competitive
                                            and cheap rates. Our goal is to make our services accessible
                                            to everyone without compromising on quality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/turnaround.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Fast Turnaround Time</h4>
                                        <p>
                                            We are aware that time is of the essence when it comes to
                                            written work. Therefore, we provide a fast turnaround time for
                                            our proofreading services. We can provide you with a polished
                                            document within a short period, ensuring that you meet your
                                            deadlines without compromising on quality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            className="lazy"
                                            src="images/icons8-baggage-attention-64.png"
                                        />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Personalized Attention </h4>
                                        <p>
                                            Whether you need us to proofread a simple email or a complex
                                            manuscript, we will provide you with the same level of
                                            attention and care. We are devoted to ensuring that you are
                                            satisfied with our services and are always ready to go the
                                            extra mile to meet your expectations.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="approach-module module sec-padding">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Submit your Document </span>
                                <div className="approach-content">
                                    The first step is to submit your document through our website. You
                                    can upload your file in various formats, such as .doc, .docx,
                                    .pdf, or .txt.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Get a Quote</span>
                                <div className="approach-content">
                                    Once we receive your document, we will provide you with a quote
                                    based on the length and complexity of your paper. Our rates are
                                    competitive and transparent, with no extra or hidden fees.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Editing and Proofreading </span>
                                <div className="approach-content">
                                    Our expert editors will thoroughly review your document and
                                    correct any grammar, punctuation, spelling, and syntax errors.
                                    They will also provide suggestions for improving your document's
                                    clarity, flow, and overall readability.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Quality Assurance</span>
                                <div className="approach-content">
                                    Our quality assurance team will review your document to ensure
                                    that it meets high standards of quality and accuracy
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Receive your Document</span>
                                <div className="approach-content">
                                    Once we have completed the editing and proofreading process, we
                                    will send you the final document. You can download it from our
                                    website or receive it via email.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flexiblefeatures-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="orparch">
                                {/* <span class="urach">Why Choose Us?</span> */}
                                <h2 className="main-heading">
                                    Take a look at Our Other Top Services Apart From Proofreading!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/placeyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Ghostwriting{" "}
                                        </h4>
                                        <p>
                                            Looking to bring your unique voice and vision to life on the
                                            page? Our team of experienced ghostwriters offers the{" "}
                                            <a href="ghost-writing/"> best ghostwriting services</a>{" "}
                                            available, ensuring that your book is written to your exact
                                            specifications.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/getyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Book Cover{" "}
                                        </h4>
                                        <p>
                                            But excellent writing is only the beginning. To truly stand
                                            out on the shelves, you'll need a{" "}
                                            <a href="book-cover/"> professional book cover design</a> that
                                            captures the essence of your work. Our talented designers can
                                            create a cover that not only looks great but accurately
                                            reflects the content of your book.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/sendusback.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Self-Publishing
                                        </h4>
                                        <p>
                                            Ready to self-publish? Let us help you navigate the complex
                                            world of{" "}
                                            <a href="book-marketing/"> self-publish book marketing</a>.
                                            Our marketing experts will work with you to develop a
                                            customized marketing plan that ensures your book reaches the
                                            right audience and gets the attention it deserves.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/placeyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Formatting{" "}
                                        </h4>
                                        <p>
                                            The <a href="formatting/"> book format</a> is vital to your
                                            book's success, and our formatting services can ensure that
                                            your book looks its best. From font selection to chapter
                                            headings, we'll help you create a visually appealing and
                                            professional book.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/getyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br />
                                            E-Book Writing
                                        </h4>
                                        <p>
                                            And if you're looking to capitalize on the popularity of
                                            eBooks, our{" "}
                                            <a href="e-book-writing/"> eBook writing services</a> can
                                            help. Our expert writers will work with you to create engaging
                                            eBooks that keep your readers returning for more.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/sendusback.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Blog and Content Writing{" "}
                                        </h4>
                                        <p>
                                            But why stop at books? Our{" "}
                                            <a href="blog-writing/">
                                                {" "}
                                                professional blog writing services
                                            </a>{" "}
                                            can help you connect with your readers and build your brand
                                            through compelling content. And for those looking for a more
                                            tailored approach to content creation, our{" "}
                                            <a href="website-content-writing/">
                                                {" "}
                                                unique content writing services
                                            </a>{" "}
                                            are the perfect solution.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="packages-sec leftinner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="text-left main-heading">
                                Looking For the Affordable Proofreading Rates?
                            </h2>
                            <p className="text-left main-para">
                                At Authors Everest, we believe that everyone deserves access to the
                                best proofreading services at reasonable rates. We offer competitive
                                proofreading rates for all types of writing, including books,
                                business documents, and academic papers. Our proofreaders for hire
                                are experts in their field and have years of experience in
                                proofreading. We understand that every project isimportant and
                                unique, and we'll work with you to find the best solution for your
                                needs. Contact us right now and get the best value for your money
                                with our professional proofreading services.
                            </p>
                            <div className="mtpx-25 strugglbtns">
                                <a className="lets-btn" href="get-a-quote">
                                    Get a Quote
                                </a>
                                <a className="chat nos-btn" href="javascript:;">
                                    {" "}
                                    Live Chat
                                </a>
                                <a className="nos-btn" href="tel:+(818) 304-9259">
                                    (818) 304-9259
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="cant-img skng"
                                style={{ backgroundImage: "url(images/bookinner.png)" }}
                            >
                                <figure></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Proofreading;