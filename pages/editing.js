import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";

const Edit = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/editing.jpg)",
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
                                            <p className="subtitle">Achieve Writing Perfection</p>
                                            <h1 style={{ color: "#fff" }}>
                                                Let Our Professional Book Editing Service Help Your Book
                                                Stand Out
                                            </h1>
                                            <span>
                                                Your search for reliable book editors near me ends here.
                                                With years of industry experience, our professional editor
                                                team knows exactly what it takes to make your book stand
                                                out. Authors Everest offers from copy editing services,
                                                editing manuscript, and proofreading to developmental
                                                editing to ensure that your manuscript is polished and ready
                                                for publication. Contact us today!{" "}
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
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center desktop-hide">
                            <div className="cmplte-img">
                                <img src="images/editing.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-cont">
                                <h2 className="main-heading">
                                    Our Top-Notch Copy Editor Services Ensure Trustworthy and
                                    Affordable Editorial Rates
                                </h2>
                                <p className="main-para">
                                    As a writer or content creator, it can be challenging to find a
                                    reliable copy editor who can enhance the quality of your work
                                    without breaking the bank. Fortunately, our team of experienced
                                    copy editors offers affordable editorial rates while ensuring a
                                    swift turnaround time for your project.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center mobile-hide">
                            <div className="cmplte-img">
                                <img src="images/editing.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-self-center mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/diary-bro-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-cont">
                                <h2 className="main-heading">Expertise in a Variety of Genres</h2>
                                <p className="main-para mb-4">
                                    If you're looking for book editors near me, you've come to the
                                    right place. We have expertise in editing books across a variety
                                    of genres, including fiction, non-fiction, memoirs, self-help, and
                                    more. Our substantive editing team is well-versed in each genre's
                                    nuances and can help you bring out the best in your book writing.
                                    We understand the importance of creating engaging characters,
                                    compelling storylines, and well-researched facts. We have the
                                    expertise to help you achieve your goals. Contact us today to
                                    learn more about our expertise in a variety of genres.
                                </p>
                                <a className="chat nos-btn blck-thm" href="javascript:;">
                                    Start Live Chat
                                </a>
                                <a
                                    className="lets-btn"
                                    href="get-a-quote"
                                    style={{ marginLeft: 20 }}
                                >
                                    Get a Quote
                                </a>
                                <a className="nos-btn blck-thm" href="tel:+(818) 304-9259">
                                    (818) 304-9259
                                </a>
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
                                <span className="urach">Our Approach</span>
                                <h3 className="main-heading">
                                    Unlock the Secrets to a Clear and Coherent Book with Professional
                                    Editing
                                </h3>
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
                                        <h4>Improved Quality</h4>
                                        <p>
                                            Professional editors are skilled at spotting errors,
                                            inconsistencies, and weaknesses in a manuscript. By working
                                            with a professional editor, authors can be confident that
                                            their book will be of the highest quality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Time-Saving</h4>
                                        <p>
                                            Manuscript editing is a time-consuming process. By hiring a
                                            professional manuscript editor, authors can save time and
                                            focus on other aspects of their book, such as marketing and
                                            promotion.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-increase-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Increased Sales</h4>
                                        <p>
                                            A well-edited book is more likely to attract readers and,
                                            therefore, more likely to sell. Hiring a book editor can help
                                            authors produce a book that is more appealing to readers and
                                            ultimately more profitable.
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
                                    <figure>
                                        <img
                                            className="lazy mb-2"
                                            src="images/icons8-mind-clarity-64.png"
                                        />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Clarity and Coherence</h4>
                                        <p>
                                            Our professional content editor team can help ensure that the
                                            book is organized logically and that the message is conveyed
                                            clearly and concisely. This can make the book more accessible
                                            to a wider audience.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy mb-2" src="images/icons8-wallet-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Affordability</h4>
                                        <p>
                                            our best book editing services offer affordable editorial
                                            rates, ensuring that authors can receive high-quality editing
                                            services without breaking the bank. So not only can authors
                                            reduce stress and anxiety, but they can also save money and
                                            still produce high-quality books.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy mb-3" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Increased Credibility</h4>
                                        <p>
                                            A well-edited book can help establish the author as a credible
                                            and professional writer. This can open up new opportunities
                                            for the author, such as speaking engagements and media
                                            appearances.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta2 lazy mt-3" src="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="wrap">
                                <h6>Struggling To Sell More Books?</h6>
                                <h3>
                                    Unlock Opportunities for Success with Credible, Well-Edited Books
                                    - Get Affordable Services Today!
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
            <section className="approach-module module sec-padding mb-4">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Initial Consultation</span>
                                <div className="approach-content">
                                    We start with an initial consultation with the author to
                                    understand their needs and requirements for the project. We
                                    discuss the types of editing services they require, the deadline
                                    for completion, and any specific concerns they have about their
                                    work.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Assigning an Editor</span>
                                <div className="approach-content">
                                    Once we have a clear understanding of the author's requirements,
                                    we assign a suitable editor who has expertise in the specific
                                    types of editing required.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Review of Manuscript</span>
                                <div className="approach-content">
                                    The editor reviews the manuscript, keeping in mind the specific
                                    requirements of the author. They analyze the manuscript for
                                    consistency, readability, flow, and other aspects that need
                                    improvement.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Editing Process</span>
                                <div className="approach-content">
                                    We offer a range of editing services including line editing,
                                    developmental editing, substantive editing, and proofreading. Our
                                    editing process includes an in-depth analysis of the manuscript,
                                    ensuring that it meets the highest standards of grammar,
                                    punctuation, and style.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Feedback and Revision</span>
                                <div className="approach-content">
                                    Our professional editor team provide feedback to the author on
                                    areas that require improvement. The author can then make revisions
                                    based on the feedback given.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Final Review</span>
                                <div className="approach-content">
                                    Once the author has made the necessary revisions, the editor
                                    conducts a final review of the manuscript editing to ensure that
                                    it meets all the requirements of the author.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Delivery of Final Manuscript</span>
                                <div className="approach-content">
                                    We deliver the final manuscript to the author after editing and
                                    proofreading within the stipulated deadline.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>Look At What We Do Besides Editing A Manuscript</h3>
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
                                        <h3>Ghostwriting</h3>
                                        <p>
                                            Our <a href="ghost-writing/"> best ghostwriting services</a>{" "}
                                            provide you with ghostwriters to help you write a book you
                                            have been trying to complete for a long time.{" "}
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
                                    </div>
                                    <div className="rht">
                                        <h3>Proofreading</h3>
                                        <p>
                                            Find and correct any mistakes found in your manuscript with
                                            our cheap yet{" "}
                                            <a href="proofreading/"> best proofreading services</a> and
                                            ensure your book is error-free.{" "}
                                        </p>
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
                                        <h3>Formatting</h3>
                                        <p>
                                            Make sure your book is readable and suitable for every book
                                            format with our menu of professional{" "}
                                            <a href="formatting/"> book formatting</a> packages.
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
                                        <h3>Blog Writing</h3>
                                        <p>
                                            Writing blogs is an excellent way to promote your book. You
                                            can do this effectively with our affordable{" "}
                                            <a href="blog-writing/"> blog writing services</a>.
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
                                        <h3>Book Marketing</h3>
                                        <p>
                                            When it comes to{" "}
                                            <a href="book-marketing"> book marketing services</a>, there
                                            is no one like us. We are the pioneers in advertising books in
                                            front of the right audience.
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
                            <h4 className="text-left main-heading">
                                Looking to Get Your Masterpiece Edited?
                            </h4>
                            <p className="text-left main-para">
                                Are you ready to take your book to the next level? Let our book
                                advertisement expert team help you increase the value of your book
                                and reach new readers. Contact us today to learn more about our
                                services and how we can help you achieve your book marketing goals.{" "}
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
            <section className="edit-sec-last">
                <div className="container">
                    <div className="col-lg-12">
                        <h3 className="mb-4" style={{ fontWeight: 700 }}>
                            Transform Your Writing From Meh to WOW! Personalized Editing Services
                            for Writers
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Developmental Editing Services</h4>
                                <p>
                                    Our professional developmental editing service helps improve the
                                    structure and content of your manuscript, ensuring that it's
                                    engaging and cohesive.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>substantive editing services</h4>
                                <p>
                                    Experts at substantive editing service focuses on refining your
                                    writing by addressing clarity, flow, and tone, ensuring that your
                                    manuscript is polished and professional.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>
                                    copy editing <br /> services
                                </h4>
                                <p>
                                    Top-Notch copy editing service provides a detailed line-by-line
                                    review, ensuring that your manuscript is free from errors in
                                    grammar, spelling, and punctuation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Edit;