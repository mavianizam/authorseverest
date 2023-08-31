import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";
import ThemeBtn from "./comps/theme-btns";

const EBook = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/ebook-banner.jpg)",
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
                                            <p className="subtitle">
                                                Professional eBook Writers at Your Service
                                            </p>
                                            <h1 style={{ color: "#fff" }}>
                                                Unleash Your Story's Potential with Expert EBook Writing
                                                Services in the USA
                                            </h1>
                                            <span>
                                                Get set to transform your ideas into a compelling eBook that
                                                readers will love. Our professional writers and editors are
                                                ready to assist you. We provide unmatched{" "}
                                                <b>eBook writing services,</b> giving life to your ideas
                                                through everything from professionally researched
                                                non-fiction to gripping fictional stories.
                                                <b> EBook ghostwriting</b> or a joint venture, we can do it
                                                all and do it well. Let us help you share your story with
                                                the world and create an eBook that will set you apart from
                                                the crowd.
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
                                    Hire EBook Writer - Transform Your Ideas into Reality
                                </h2>
                                <p className="main-para">
                                    Our exceptional book writing services offer a range of specialized
                                    options, including eBook authoring, eBook ghostwriting, and eBook
                                    writing services, to bring your creative vision to life. Our team
                                    of skilled eBook writers has years of experience writing eBooks on
                                    diverse topics. We take immense pride in delivering high-quality
                                    and valuable content that exceeds our client's expectations. We
                                    believe that writing is an art form, and our services are tailored
                                    to ensure that every eBook we produce is a masterpiece. Whether
                                    you need help with eBook authoring or eBook ghostwriting, our
                                    eBook services are designed to provide you with an unforgettable
                                    experience, resulting in a captivating and professional eBook that
                                    readers won't be able to put down.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/ebook-writing.png" alt="" />
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
                                <h6>Are You Ready To Take Your EBook To The Next Level?</h6>
                                <h3>
                                    Our EBook Editing Service Will Help You Polish Your Book And
                                    Ensure That It Is Error-Free And Ready For Publication.
                                </h3>
                                <ThemeBtn />
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
                                    Reasons to Hire Us for Your EBook without Thinking for a Second
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
                                        <h4>Experience and Commitment</h4>
                                        <p>
                                            Our team of expert eBook writers has years of experience, and
                                            they are dedicated to providing you with the best results in
                                            cheap rates. With our commitment to excellence, you can trust
                                            that your eBook will be of the highest quality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Customizable Services</h4>
                                        <p>
                                            We understand that each client has unique needs and budgets.
                                            That's why we offer menu of affordable customizable eBook
                                            writing services that can be tailored to your specific
                                            requirements. We work closely with you to ensure that your
                                            eBook meets your expectations.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Collaborative Process</h4>
                                        <p>
                                            We value your input and vision. We work closely with you
                                            throughout the writing process to ensure your eBook reflects
                                            your style, voice, and vision. Our collaborative approach
                                            guarantees that you get the eBook you want.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12 icons">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-inscription-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Audience-Oriented Writing</h4>
                                        <p>
                                            Our <a href="ghost-writing/"> best ghostwriting services</a>{" "}
                                            ensure that your eBook resonates with your target audience. We
                                            focus on creating content that engages, informs, and
                                            entertains your readers.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-magazine-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Self-Publishing Support</h4>
                                        <p>
                                            As a <a href="publishing/"> top self publishing company</a>,
                                            we help you publish and promote your eBook. Our team can guide
                                            you through the publishing process and help you reach your
                                            target audience.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            className="lazy"
                                            src="images/icons8-video-editing-64.png"
                                        />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Proofreading and Editing Services</h4>
                                        <p>
                                            We provide the{" "}
                                            <a href="proofreading/"> best proofreading services</a> to
                                            ensure your eBook is error-free and polished. Our editors will
                                            review your content thoroughly to ensure it is ready for
                                            publication.
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
                                Ready to Convert Your Thoughts into an EBook?
                            </h2>
                            <p className="text-left main-para">
                                At Authors Everest, we are passionate about helping our clients
                                create eBooks that stand out from the competition in cheap rates.
                                Our team of skilled and experienced eBook writers can help you
                                achieve your goals. By hiring us, you can expect the following:
                            </p>
                            <ul>
                                <li>• Professionally written eBook</li>
                                <li>• Qualified and experienced eBook writers.</li>
                                <li>
                                    •{" "}
                                    <a href="website-content-writing/">
                                        {" "}
                                        Unique content writing services
                                    </a>
                                    .
                                </li>
                                <li>
                                    • <a href="blog-writing/"> Professional blog writing services</a>.{" "}
                                </li>
                                <li>
                                    • <a href="author-website/"> Author website design services</a>.
                                </li>
                                <li>
                                    •{" "}
                                    <a href="article-writing/">
                                        {" "}
                                        Professional article writing services
                                    </a>
                                    .
                                </li>
                            </ul>
                            <p className="text-left main-para">
                                Don't settle for anything less than the best regarding your eBook
                                writing services. Hire our team of skilled and experienced eBook
                                writers today and take the first step towards creating an eBook that
                                will engage, inspire, and leave a lasting impression on your
                                readers!
                            </p>
                            <div className="mtpx-25 strugglbtns">
                                <a className="lets-btn" href="get-a-quote">
                                    Get a Quote
                                </a>
                                <a className="chat nos-btn" href="javascript:;">
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
            <section className="approach-module module sec-padding">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Initial Consultation</span>
                                <div className="approach-content">
                                    Our process begins with an initial consultation with you. During
                                    this consultation, we will discuss your eBook writing project in
                                    detail. We will ask you questions about the book's purpose,
                                    intended audience, tone, voice, style, and any other necessary
                                    information.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Research and Planning </span>
                                <div className="approach-content">
                                    Once we have gathered all the necessary information, our
                                    experienced writers will extensively research your topic. This
                                    research aims to ensure that our content is accurate, reliable,
                                    and informative. We will also plan the structure and flow of your
                                    eBook to ensure that it is easy to read and understand.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Writing and Editing </span>
                                <div className="approach-content">
                                    After the research and planning phase, our writers will begin the
                                    actual writing process. We will write high-quality, original,
                                    engaging content that meets your requirements. Once the writing is
                                    complete, our editors will review and edit the content to ensure
                                    that it is error-free, grammatically correct, and meets our
                                    high-quality standards.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Design and Formatting </span>
                                <div className="approach-content">
                                    We understand that the design and formatting of your eBook are
                                    critical. Therefore, we will work closely with you to develop a
                                    design that aligns with your brand, style, and target audience. We
                                    will also format the eBook to optimize it for different devices
                                    and platforms.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Review and Revisions</span>
                                <div className="approach-content">
                                    We value your feedback and will provide you with a draft of the
                                    eBook for your review. You will have the opportunity to suggest
                                    revisions and changes to the content. We will work closely with
                                    you to ensure you are satisfied with the final product.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Final Delivery</span>
                                <div className="approach-content">
                                    After incorporating your feedback and revisions, we will deliver
                                    the final product. You will receive a high-quality eBook that
                                    meets your requirements on time and within your budget.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default EBook;