import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";

const AuthorWebsite = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/author-website-banner.jpeg.jpg)",
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
                                            <h1 style={{ color: "#fff" }}>
                                                Showcase Your Writing in Style with Our Professional Author
                                                Website Design Services
                                            </h1>
                                            <span>
                                                Are you a wordsmith searching for a way to build your online
                                                presence? Then, our<b> author website design</b> services
                                                are the perfect solution for you! In the digital age, having
                                                a professional and engaging website is essential for website
                                                authors. Our team of skilled designers and developers are
                                                experts in creating stunning <b>author websites</b> that
                                                capture the essence of your writing style and showcase your
                                                work to the world. We understand that designing a website
                                                can be intimidating. Still, with our tailored approach, we
                                                can create the<b> best website for authors</b> that reflects
                                                your unique personality and engages your readers. From
                                                eye-catching layouts to interactive features, we will help
                                                you bring your literary vision to life online. Let us take
                                                your writing to the next level with our expertly crafted
                                                <b> websites for writers.</b>
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
                                    Get Noticed as an Author with the Best Website for Authors
                                </h2>
                                <p className="main-para">
                                    As an author-focused web design company, Authors Everest
                                    specializes in creating the best website for authors with our
                                    expertly crafted author website designs. We understand that
                                    authors need more than just a simple website. They require a
                                    platform to showcase their literary talents, connect with their
                                    readers, and establish their brand. Keeping that in mind, we work
                                    closely with our clients to create stunning web designs that are
                                    both functional and visually appealing. We utilize the latest web
                                    design techniques to deliver a seamless user experience. Trust us
                                    to bring your unique style and voice to life on the web with our
                                    top-notch web design for authors services.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/author-website.png" alt="" />
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
                                <h6>Need an Author Website to Showcase Your Writing Skills?</h6>
                                <h3>
                                    {" "}
                                    Hire Us and Maximize Exposure of Your Writing Skills with Our
                                    Professional Author Website Designs Services!
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
                                    We Do Not Just Design Websites, We Take Care Of Authors!{" "}
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
                                            Top-Quality<span> Templates</span>
                                        </h4>
                                        <p>
                                            We offer a wide variety of<b> author websites templates</b> to
                                            choose from, ensuring that your website will look unique and
                                            professional. Our templates are also designed with the needs
                                            of authors in mind, so you can be sure that your website will
                                            be both aesthetically pleasing and functional.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Comprehensive <span> Packages </span>
                                        </h4>
                                        <p>
                                            Our website design packages include everything you need to get
                                            started, from domain registration to web hosting and
                                            everything in between. We take care of all the technical
                                            details so you can focus on what you do best: writing.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Easy-to-Use <span>Menu </span>
                                        </h4>
                                        <p>
                                            We understand that you're a writer, not a web designer.
                                            Therefore, we make it easy for you to manage your website with
                                            a simple and intuitive menu.{" "}
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
                                        <img className="lazy" src="images/afford.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Affordable <span> Pricing</span>
                                        </h4>
                                        <p>
                                            We believe that every author should be able to afford a
                                            professional website, which is why we offer some of the most
                                            competitive prices in the industry. You can have a beautiful,
                                            professional website without breaking the bank.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/Formatting123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Professional <span> Review </span>
                                        </h4>
                                        <p>
                                            Before launching your website, our team of experts will review
                                            it to ensure everything is working correctly and looks great.
                                            We take pride in delivering high-quality writers websites to
                                            our clients.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-magazine-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Cheap <span>Services </span>
                                        </h4>
                                        <p>
                                            Our website design services are not only affordable but also
                                            cheap. We offer some of the lowest prices in the market
                                            without sacrificing quality.
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
                    <h2>Onboard Process of Websites for Authors</h2>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Consultation</span>
                                <div className="approach-content">
                                    We start with a consultation to get to know you, your brand, and
                                    your goals. We'll discuss your website's purpose, target audience,
                                    and design preferences.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title"> Planning</span>
                                <div className="approach-content">
                                    Once we clearly understand your website's purpose and audience,
                                    we'll create a detailed plan outlining the website's structure,
                                    content, and design.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Design </span>
                                <div className="approach-content">
                                    Our team of designers will create a custom design that aligns with
                                    your brand and vision. We'll present the design for feedback and
                                    make revisions until you're delighted.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Development </span>
                                <div className="approach-content">
                                    Once the design is approved, we'll start the development phase.
                                    Our developers will use the latest coding techniques to build a
                                    responsive, user-friendly website.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Testing </span>
                                <div className="approach-content">
                                    Before launching the website, we'll conduct thorough testing to
                                    ensure everything works perfectly. We'll test the website on
                                    different devices and browsers to make sure it's accessible to
                                    everyone.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Launch </span>
                                <div className="approach-content">
                                    Finally, we will launch your author's website and make it live for
                                    the world to see. We'll also provide you with training on updating
                                    and maintaining your website, so you can keep it fresh and
                                    up-to-date.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>What We Provide Other than Our Author Website Design Services</h3>
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
                                        <h3>Book Publishing and Editing</h3>
                                        <p>
                                            We are the best option for those seeking{" "}
                                            <a href="book-editing/">
                                                {" "}
                                                professional book editing services
                                            </a>{" "}
                                            or looking for a{" "}
                                            <a href="publishing/"> top self publishing company</a> to
                                            publish their book.
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
                                            Our <a href="proofreading/"> best proofreading services</a>{" "}
                                            ensure that your written material is free from errors, typos,
                                            and grammatical mistakes.
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
                                        <h3>Blog Writing</h3>
                                        <p>
                                            Get high-quality, engaging, and SEO-optimized blog posts for
                                            your website or business with our{" "}
                                            <a href="blog-writing/">
                                                {" "}
                                                professional blog writing services
                                            </a>
                                            .
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
                                        <h3>Author Website </h3>
                                        <p>
                                            Showcase your work and engage readers by hiring our{" "}
                                            <a href="author-website/"> author website design services</a>.
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
                                        <h3>Content Writing</h3>
                                        <p>
                                            Get content that is original, creative, and tailored to your
                                            specific needs with our{" "}
                                            <a href="ghost-writing/"> best ghostwriting services</a> and{" "}
                                            <a href="website-content-writing/">
                                                {" "}
                                                unique content writing services
                                            </a>
                                            .
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
                                Searching for Author Website Design services in the USA?{" "}
                            </h2>
                            <p className="text-left main-para">
                                Our skilled designers will work with you to create a unique and
                                eye-catching writers website that showcases your brand and promotes
                                your books. With our expert knowledge of website designs for authors
                                and optimization, we will ensure that your authors websites are not
                                only visually stunning but also easy to navigate and optimized for
                                search engines. Don't settle for a generic author web page template.
                                Let us help you emerge in the crowded online marketplace and take
                                your author career to the next level with a custom-designed website
                                for writers. Contact us today to learn more, and hire our website
                                design services now!
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

export default AuthorWebsite;