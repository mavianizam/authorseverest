import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";
import ThemeBtn from "./comps/theme-btns";

const BookMarketing = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/digital-marketing.webp)",
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
                                            <p className="subtitle">Self Publish Book Marketing</p>
                                            <h1 style={{ color: "#fff" }}>
                                                {" "}
                                                Get Noticed in the Crowded Book Market
                                            </h1>
                                            <span>
                                                Are you a wordsmith who has poured your soul into crafting a
                                                literary masterpiece only to find yourself lost in the vast
                                                expanse of the publishing world? Look no further than our
                                                self publish book marketing services. Our book marketing
                                                experts specialize in marketing self published books,
                                                providing the best book marketing services to help your book
                                                stand out. At Authors Everest, we can increase your book's
                                                visibility among your targeted audience and maximize your
                                                sales effectively.
                                            </span>
                                            <Cta />
                                        </div>
                                        <div className="badges-box">
                                            <ul>
                                                <li className="first">
                                                    <img
                                                        src="images/clutch-badge.png"
                                                        alt="clutch-badge"
                                                        width={65}
                                                        height={71}
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/top-markeintg-agencies.png"
                                                        alt="markeintg-agencies"
                                                        width={65}
                                                        height={71}
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/best-content-marketing.png"
                                                        alt="content-marketing"
                                                        width={65}
                                                        height={71}
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/design-rush-badge.png"
                                                        alt="rush-badge"
                                                        width={65}
                                                        height={71}
                                                    />
                                                </li>
                                                <li className="last">
                                                    <img
                                                        src="images/top-seo-badge-home/"
                                                        alt="seo-badge"
                                                        width={65}
                                                        height={71}
                                                    />
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
                                    <img src="images/ingram.svg" alt="" />
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
                                    Best Book Advertising Services: Reach Your Target Audience with
                                    Effective Book Advertisements
                                </h2>
                                <p className="main-para">
                                    In today's bustling world of books, catching readers' eye can feel
                                    like an impossible challenge. We help you overcome that challenge,
                                    offering expert book advertising services to elevate your book's
                                    visibility. Our skilled ad wizards can craft targeted book
                                    advertisements that speak directly to your intended audience,
                                    boosting sales and generating buzz. With Authors Everest, your
                                    book advertisement will soar above the competition and capture the
                                    attention it deserves.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img
                                    src="images/digital-marketing-sec.webp"
                                    alt=""
                                    width={773}
                                    height={580}
                                />
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
                                <h6>Looking To Boost Your Book Sales And Reach More Readers?</h6>
                                <h3>
                                    Acquire Our Services Of Book Marketing For Self Published Authors.
                                    Increase Your Book Sales In No Time.
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
                                    Get Your Book in Front of Your Target Audience
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
                                        <h4>
                                            Customized <span> Marketing Plans</span>
                                        </h4>
                                        <p>
                                            We create customized marketing packages for each author
                                            tailored to your book's genre, target audience, and budget.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Diverse <span> Services</span>
                                        </h4>
                                        <p>
                                            From social media advertising to email marketing to book
                                            reviews, we offer a wide menu of the best book promotion
                                            services to help you succeed.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Experienced <span>Professionals</span>
                                        </h4>
                                        <p>
                                            Our team of book marketing experts has years of experience
                                            promoting self-published books, and we are a{" "}
                                            <a href="publishing/"> top self publishing company</a> as
                                            well.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12 icons">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/advertise.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Targeted <span> Advertising</span>
                                        </h4>
                                        <p>
                                            We create book advertisements that are tailored to your book's
                                            genre and target audience, increasing the likelihood of
                                            generating sales.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/afford.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Affordable <span>Pricing </span>
                                        </h4>
                                        <p>
                                            Our self publishing marketing services are affordable and
                                            accessible to all authors, whether you're a new author or an
                                            established one.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/effective.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Effective <span>Strategies</span>
                                        </h4>
                                        <p>
                                            We utilize the best book advertising services and book
                                            promotion strategies to help you succeed.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="approach-module module sec-padding">
                    <div className="container">
                        <h2>Our Process</h2>
                        <div className="approach-items">
                            <div className="approach-item">
                                <div className="approach-inner">
                                    <span className="approach-title">Discovery</span>
                                    <div className="approach-content">
                                        Our process always starts with getting to know you and your
                                        book. We understand your goals, your target audience, and the
                                        message you want to convey. So, we can create a customized
                                        marketing plan that is tailored to your specific needs.
                                    </div>
                                </div>
                            </div>
                            <div className="approach-item">
                                <div className="approach-inner">
                                    <span className="approach-title">Strategy </span>
                                    <div className="approach-content">
                                        Once we know what your book is all about and your goals, we
                                        develop a comprehensive marketing strategy. It includes
                                        identifying the most effective channels to reach your target
                                        audience and creating compelling messaging &amp; branding. Also,
                                        we determine the best tactics to generate buzz and increase
                                        visibility.
                                    </div>
                                </div>
                            </div>
                            <div className="approach-item">
                                <div className="approach-inner">
                                    <span className="approach-title">Implementation</span>
                                    <div className="approach-content">
                                        With a solid strategy in place, it's time to implement it. Our
                                        team of experienced marketers and publicists will work
                                        tirelessly to execute your marketing plan, using a combination
                                        of digital and traditional marketing methods to reach your
                                        target audience and generate excitement about your book.
                                    </div>
                                </div>
                            </div>
                            <div className="approach-item">
                                <div className="approach-inner">
                                    <span className="approach-title">
                                        Analytics and Optimization{" "}
                                    </span>
                                    <div className="approach-content">
                                        We don't just stop at implementation. We also closely monitor
                                        and analyze the results of our marketing efforts, making
                                        adjustments and optimizations as needed to ensure that your book
                                        gets the attention it deserves. Our goal is always to help you
                                        achieve your marketing objectives and to deliver measurable
                                        results.
                                    </div>
                                </div>
                            </div>
                            <div className="approach-item">
                                <div className="approach-inner">
                                    <span className="approach-title">Ongoing Support</span>
                                    <div className="approach-content">
                                        Our process doesn't end when the marketing campaign is over. We
                                        offer ongoing support and guidance to our clients, helping them
                                        to continue to promote their books and grow their author
                                        platforms. Our team is always available to answer questions,
                                        provide advice, and offer new ideas to help you achieve
                                        long-term success.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="packages-sec leftinner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="text-left main-heading">
                                In Search Of The Best Book Promotion Services?
                            </h2>
                            <p className="text-left main-para">
                                Marketing a self published book is now easy with our help. With the
                                right strategy and support, we can reach your target audience and
                                achieve your goals. Take advantage of the cheap services offered by
                                one of the top book marketing agencies in the USA, Authors Everest,
                                and get your book:
                            </p>
                            <ul>
                                <li>• Self Publishing Promotion</li>
                                <li>• Standout from competitors</li>
                                <li>• Increased recognition</li>
                                <li>• More Sales</li>
                            </ul>
                            <p>
                                Our proven strategies and cutting-edge techniques will elevate your
                                book to new heights and help it stand out in the crowded
                                marketplace. Don't settle for mediocre sales. Let us help you
                                achieve the heights and success you deserve!
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
                                style={{ backgroundImage: "url(images/bookinner.webp)" }}
                            >
                                <figure></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="edit-sec-last">
                <div className="container">
                    <div className="col-lg-12">
                        <h3 className="mb-4" style={{ fontWeight: 700 }}>
                            Discover An Expanded Range Of Exceptional Services Waiting For You!
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Ghostwriting </h4>
                                <p>
                                    Our <a href="ghost-writing/"> best ghostwriting services</a> are
                                    ideal for those who want to publish a book but may not have the
                                    time or writing expertise to do so. Our team of ghostwriters is
                                    skilled in various genres and will work closely with you to bring
                                    your vision to life. You will have complete ownership of the book,
                                    and the final product will be a true reflection of your voice and
                                    ideas.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Author Website</h4>
                                <p>
                                    A professional author website can help you showcase your work and
                                    build a following. We offer{" "}
                                    <a href="author-website/"> author website design services</a> that
                                    are tailored to your individual needs. Our web designers will work
                                    with you to create a custom website showcasing your brand and your
                                    work.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Proofreading </h4>
                                <p>
                                    We understand that errors in your writing can be a significant
                                    setback. That's why we offer the{" "}
                                    <a href="proofreading/"> best proofreading services</a> to help
                                    you polish your work and ensure it's error-free. Our team of
                                    experienced proofreaders will meticulously review your work and
                                    provide you with detailed feedback to help you improve your
                                    writing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Formatting</h4>
                                <p>
                                    Formatting is an essential aspect of book publishing that can make
                                    a big difference in the final product. We offer{" "}
                                    <a href="formatting/"> book format</a> services to ensurethat your
                                    book looks professional and meets industry standards. Our
                                    professionals will work with you to ensure your book is formatted
                                    correctly and ready for publishing.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>EBook Writing </h4>
                                <p>
                                    In today's digital age, eBooks are becoming an increasingly
                                    popular way to publish and distribute books. We offer{" "}
                                    <a href="e-book-writing/"> eBook writing services</a> for those
                                    who want to publish an eBook. We also provide eBook marketing that
                                    efficiently drives sales for your book.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Blog Writing </h4>
                                <p>
                                    Blogs are a great way to connect with your audience and establish
                                    your brand. Our{" "}
                                    <a href="blog-writing/"> professional blog writing services</a>{" "}
                                    can help you create informative, engaging, and relevant content
                                    for your audience. We will work with you to understand your brand
                                    and create blog posts that reflect your values and messaging.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default BookMarketing;