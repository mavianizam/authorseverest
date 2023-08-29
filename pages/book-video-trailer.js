import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";

const BookVideo = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/book-video-trailer-banner.jpeg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <section className="">
                    <div className="item">
                        <div className="home-banner">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-7 col-sm-12 align-self-center">
                                        <div className="home-banner-content home-align">
                                            <p className="subtitle">
                                                Promote Your Book Via Video Trailer
                                            </p>
                                            <h1 style={{ color: "#fff" }}>
                                                {" "}
                                                Unmatched Video Book Trailers Services By Matchless Company
                                            </h1>
                                            <span>
                                                Looking to give your book the Hollywood treatment? Then, you
                                                have no choice other than our video book trailers service!
                                                Our team of top professionals has years of experience
                                                creating stunning, cinematic book trailers that showcase the
                                                heart and soul of your story. From production to
                                                post-production, we handle everything with precision and
                                                care. Our video book trailers are designed to capture the
                                                attention of your target audience and leave a lasting
                                                impression. With our trailer service, your book will be the
                                                talk of the town!
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
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-cont">
                                <h2 className="main-heading">
                                    Best Book Trailers Production in the USA
                                </h2>
                                <p className="main-para">
                                    As a top book trailers production company, we're passionate about
                                    bringing books to life through the power of video. Our expert
                                    filmmakers, writers, and editors work tirelessly to create
                                    high-quality book trailers that engage and excite viewers. From
                                    epic fantasy adventures to heartwarming romances, we know how to
                                    make video book trailers that capture the spirit of your story.
                                    Whether you're a first-time author or a seasoned pro, our trailer
                                    service will help showcase your book to the world.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/book-video-trailer.png" alt="" />
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
                                <h6>Looking For a Book Video Trailer Company?</h6>
                                <h3>
                                    Let Us Make You Aware of What Is Book Trailer Services Really!
                                </h3>
                                <div className="theme-btns">
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
                                    We Do Not Just Promote Your Video Books, We Satisfy You!{" "}
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
                                        <h4>Affordable Packages</h4>
                                        <p>
                                            We offer a range of video production packages at competitive
                                            prices tailored to your budget. Our packages are designed to
                                            give you the best value for your investment without
                                            compromising quality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Custom Menu</h4>
                                        <p>
                                            {" "}
                                            We offer a customizable menu of services to ensure your video
                                            trailer perfectly fits your book. From scriptwriting to
                                            editing and everything in between, we'll work with you to
                                            create a video that truly captures the essence of your book.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Great Reviews</h4>
                                        <p>
                                            We take pride in our work, and we're proud of the reviews
                                            we've received from our satisfied clients. Our testimonials
                                            speak for themselves and demonstrate our commitment to
                                            producing high-quality video trailers.
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
                                        <img className="lazy" src="images/Editing123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>No Cheap Shortcuts</h4>
                                        <p>
                                            While our prices are affordable, we never cut corners or
                                            compromise on the quality of our work. Our team of experienced
                                            professionals uses top-of-the-line equipment and the latest
                                            techniques to create stunning video trailers that capture your
                                            audience's attention.{" "}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-inscription-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Expertise</h4>
                                        <p>
                                            Our team of video production experts has years of experience
                                            creating stunning video trailers for books of all genres. We
                                            know how to tell compelling trailers that capture your
                                            audience's attention and leave them awaiting your book.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/content123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Customer Service </h4>
                                        <p>
                                            At Authors Everest, we understand that customer service is
                                            vital. Therefore, we commit to providing our clients with the
                                            best possible experience from start to finish. We ensure that
                                            we're meeting your expectations every step of the way.{" "}
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
                    <h2>Our video book trailer Process</h2>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Know your book</span>
                                <div className="approach-content">
                                    We start by getting to know you and your book. We schedule a
                                    consultation to discuss your goals, target audience, and vision
                                    for your book trailer. We also take the time to read your book and
                                    get a feel for its themes, characters, and overall tone.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Concept Development</span>
                                <div className="approach-content">
                                    Once we understand your book, we will begin developing concepts
                                    for your book trailer. We'll explore different styles, visuals,
                                    and storytelling techniques to create a unique and engaging
                                    trailer that captures the heart of your story.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Scriptwriting and Storyboarding
                                </span>
                                <div className="approach-content">
                                    Our expert writers will craft a script that brings your concept to
                                    life. We'll work with you to refine the script until it accurately
                                    reflects your vision. We'll also create a storyboard outlining
                                    each shot and visual element of the trailer, ensuring everyone is
                                    on the same page.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Production </span>
                                <div className="approach-content">
                                    Now it's time to bring your book trailer to life! We'll handle all
                                    aspects of production, including filming, editing, sound design,
                                    and visual effects. We'll update you throughout the process and
                                    ensure you're happy with the trailer's direction.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Delivery </span>
                                <div className="approach-content">
                                    Once the final touches are in place, we'll deliver your book
                                    trailer in the format of your choice. We'll also provide you with
                                    all of the raw footage and files so that you can use them for
                                    future marketing efforts.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>We Are Not Just an Ordinary Book Marketing Services Company</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="hlpwrap">
                                <li>
                                    <div className="lft">
                                        <figure>
                                            <img
                                                className="hvr-bob lazy loaded"
                                                src="images/researching.svg"
                                                data-was-processed="true"
                                                alt="abx"
                                            />
                                        </figure>
                                    </div>
                                    <div className="rht">
                                        <h3>Book Writing </h3>
                                        <p>
                                            We provide the{" "}
                                            <a href="ghost-writing/"> best ghostwriting services</a> to
                                            convert your ideas into a book and{" "}
                                            <a href="editing/"> professional book editing services</a> to
                                            make your book error-free.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="lft">
                                        <figure>
                                            <img
                                                className="hvr-bob genu lazy loaded"
                                                src="images/genuine.svg"
                                                data-was-processed="true"
                                                alt="abx"
                                            />
                                        </figure>
                                        <div className="rht">
                                            <h3>Book Publishing </h3>
                                            <p>
                                                If you are looking for a{" "}
                                                <a href="publishing/"> top self publishing company</a> for
                                                your book, Authors Everest is the right choice for you.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="lft">
                                        <figure>
                                            <img
                                                className="hvr-bob lazy loaded"
                                                src="images/critical.svg"
                                                data-was-processed="true"
                                                alt="abx"
                                            />
                                        </figure>
                                    </div>
                                    <div className="rht">
                                        <h3>Content Writing</h3>
                                        <p>
                                            We do not just provide{" "}
                                            <a href="website-content-writing/">
                                                {" "}
                                                unique content writing services
                                            </a>{" "}
                                            but also the{" "}
                                            <a href="proofreading/"> best proofreading services</a> to
                                            make your content flawless.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="lft">
                                        <figure>
                                            <img
                                                className="hvr-bob lazy loaded"
                                                src="images/formatting.svg"
                                                data-was-processed="true"
                                                alt="abx"
                                            />
                                        </figure>
                                    </div>
                                    <div className="rht">
                                        <h3>Blog Writing </h3>
                                        <p>
                                            Our writers are known as experts in providing{" "}
                                            <a href="blog-writing/">
                                                {" "}
                                                professional blog writing services
                                            </a>{" "}
                                            to various clients in the writing industry.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="lft">
                                        <figure>
                                            <img
                                                className="hvr-bob lazy loaded"
                                                src="images/branding.svg"
                                                data-was-processed="true"
                                                alt="abx"
                                            />
                                        </figure>
                                    </div>
                                    <div className="rht">
                                        <h3>Author Website</h3>
                                        <p>
                                            You can also acquire us for{" "}
                                            <a href="author-website/"> author website design services</a>{" "}
                                            for a great website to promote your literary work.
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
                                Don't Know How to Make a Book Trailer?
                            </h2>
                            <p className="text-left main-para">
                                Do not freak out, and get ready to create your video book trailer.
                                Our book trailers production has got you covered! We will walk you
                                through creating a video book trailer step-by-step, from choosing
                                the proper footage to crafting the perfect script. Our
                                professionals, with expert tips and tricks, will create a trailer
                                that captures the essence of your book and entices potential
                                readers. You can create a professional and captivating video book
                                trailer with our services. So what are you waiting for? Hire us for
                                your video book trailer now!
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
        </>

    );
}

export default BookVideo;