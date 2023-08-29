import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";

const Book = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/book-covers.jpg)",
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
                                            <p className="subtitle">Embellish Your Books</p>
                                            <h1 style={{ color: "#fff" }}>
                                                Transform Your Book into a Masterpiece with Our Professional
                                                Book Cover Maker Services
                                            </h1>
                                            <span>
                                                Are you tired of scrolling through endless templates for
                                                your book cover design, hoping to find one that fits your
                                                unique vision? Look no further than our custom book covers
                                                service, where our masterful book cover designers will work
                                                with you to bring your book to life. We understand that your
                                                book is your baby, and we want to help you make it stand out
                                                from the crowd. Whether you have a specific idea in mind or
                                                need guidance from our designers, we will ensure that your
                                                book cover is tailored to your book and your audience. So
                                                stop searching for book cover designers near me. Instead,
                                                employ us to have a one-of-a-kind masterpiece. We will
                                                create a book cover that will make readers stop in their
                                                tracks and pick up your book.
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
                                    Unlock Your Book’s Potential with Professional Book Cover Design
                                    Services
                                </h2>
                                <p className="main-para">
                                    We understand that as a self-published author, self-publishing
                                    book covers are just as important as those from traditional
                                    publishers, which is why we have a team of skilled{" "}
                                    <b> book cover designers for self-publishers</b>. With their
                                    expertise in typography, color theory, and composition, they will
                                    work with you to create a stunning book cover that captures the
                                    essence of your story and draws in potential readers. Don’t let
                                    your book blend in with the menu of the rest - stand out with a
                                    professionally designed book cover from our team!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/book-covers.png" alt="" />
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
                                <h6>Struggling To Sell More Books?</h6>
                                <h3>
                                    Why Not Hire Expert Book Marketing Professionals To Promote Your
                                    Book!
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
                                    Make Your Book Visually So Appealing with Book Cover Page Design
                                    Services That People Have to Read It
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
                                            Custom Book <span> Covers</span>
                                        </h4>
                                        <p>
                                            We work directly with you to manage the entire process of your
                                            cover design. With us, you will get the perk of creating book
                                            covers the way you want. Our designers give you the power to
                                            control every element and aspect of the design.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Experience and <span> Creativity </span>
                                        </h4>
                                        <p>
                                            In almost every genre, our creative team has years of
                                            expertise in designing book covers. We know how to make sure
                                            your book finds the ideal spot in the market because we
                                            comprehend your target. We have designed thousands of book
                                            covers for a variety of categories.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Guaranteed <span>Results</span>
                                        </h4>
                                        <p>
                                            Our designed covers help you sell more books. If not, then we
                                            will return your money back. We have satisfied our clients by
                                            providing them with cheap book covers without lowering the
                                            quality of our work. Our results are our quality.
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
                                Prepared to elevate the visibility and appeal of your book?
                            </h2>
                            <p className="text-left main-para">
                                No matter what type of book you’re writing, our book cover makers
                                and graphic designers can turn your ordinary book into a
                                best-selling one. Acquire our online book cover maker services today
                                to fetch:
                            </p>
                            <ul>
                                <li>• Book cover design ideas.</li>
                                <li>• Creative book covers.</li>
                                <li>• Book cover graphic design.</li>
                                <li>• And whatever you ask.</li>
                            </ul>
                            <p className="text-left main-para">
                                Stop digging out search engines with “book covers near me.” Instead,
                                let us create a stunning cover that will capture your reader’s
                                attention and leave a lasting impression! Get in touch with us today
                                to upgrade your book’s visual impact and take it to new heights in
                                affordable rates and packages.
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
            <section className="flexiblefeatures-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="orparch">
                                {/* <span class="urach">Why Choose Us?</span> */}
                                <h2 className="main-heading">Types of Our Book Cover Designs</h2>
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
                                        <h4>Creative</h4>
                                        <p>
                                            Our team of experienced designers specializes in creating
                                            unique, eye-catching creative book cover designs that stand
                                            out from the crowd. We use a range of creative techniques,
                                            from hand-drawn illustrations to bold typographic designs, to
                                            create covers that capture the essence of your book.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                     <img class="lazy" src="images/getyourorder.png">
                  </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>Fantasy </h4>
                                        <p>
                                            For authors of fantasy and science fiction novels, we offer a
                                            range of imaginative book cover design options. From epic
                                            landscapes to mythical creatures, our fantasy book cover
                                            designs will transport your readers to new worlds.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                     <img class="lazy" src="images/sendusback.png">
                  </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>Typographic</h4>
                                        <p>
                                            Sometimes less is more. Our typographic book covers use bold
                                            fonts and striking color schemes to create covers that are
                                            simple yet impactful. These covers are perfect for non-fiction
                                            books or novels that focus on themes like identity, love, or
                                            self-discovery.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    {/* <figure>
                     <img class="lazy" src="images/placeyourorder.png">
                  </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>Notebook</h4>
                                        <p>
                                            We also offer custom notebook cover design services. Whether
                                            you need a cover for a school notebook or a journal, our
                                            designers can create a design that reflects your unique style
                                            and personality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                     <img class="lazy" src="images/getyourorder.png">
                  </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>EBook </h4>
                                        <p>
                                            With the rise of digital publishing, it’s essential to have a
                                            professional-looking ebook cover. Our online eBook cover maker
                                            makes it easy to create a custom cover that looks great on any
                                            device.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                     <img class="lazy" src="images/sendusback.png">
                  </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>3D Cover</h4>
                                        <p>
                                            Our 3D bookcover maker creates stunning, three-dimensional
                                            book covers that make your book stand out from the
                                            competition. With our advanced rendering software, we can
                                            create lifelike 3D images of your book cover, complete with
                                            shadows, reflections, and other realistic details.{" "}
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
                                <span className="approach-title">Initial Consultation </span>
                                <div className="approach-content">
                                    We begin the book cover design process with a thorough
                                    consultation to understand your requirements, preferences, and
                                    vision for your book cover. We listen to your ideas and offer
                                    expert advice to ensure that the final product meets your
                                    expectations and reflects the essence of your book.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Research and Concept Development
                                </span>
                                <div className="approach-content">
                                    Once we understand your needs, we conduct extensive research to
                                    identify design trends, color schemes, and typography that align
                                    with your genre and target audience. We then develop multiple
                                    design concepts and present them to you for review.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Refinement and Feedback</span>
                                <div className="approach-content">
                                    We work closely with you to refine the selected design concept
                                    until it meets your exact specifications. We encourage your
                                    feedback and incorporate it into the design to ensure that you are
                                    completely satisfied with the final product.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Finalization </span>
                                <div className="approach-content">
                                    Once the design is complete, we provide you with all the necessary
                                    files in various formats and resolutions suitable for print and
                                    digital platforms. We also offer guidance on printing and
                                    publishing options, as well as any other post-design services you
                                    may require.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Post-Project Support</span>
                                <div className="approach-content">
                                    We believe that our relationship with you doesn’t end with the
                                    delivery of your book cover. We are always available to answer any
                                    questions you may have or provide any support you may require. We
                                    value your satisfaction, and we are committed to ensuring that you
                                    are completely happy with our services.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flexiblefeatures-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-bookmark-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Ghostwriting</h4>
                                        <p>
                                            If you are looking for the{" "}
                                            <a href="ghost-writing/"> best ghostwriting services</a> to
                                            bring your book idea to life, our team of experienced
                                            ghostwriters can help. We can assist you with writing your
                                            book from start to finish, capturing your unique voice and
                                            vision along the way.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/Editing123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Self-Publishing</h4>
                                        <p>
                                            We do not just provide novel cover design services. If you
                                            want to self-publish your book, we can be your top
                                            self-publishing company. We can also help you with
                                            self-publish book marketing to ensure your book reaches the
                                            right audience and receives the attention it deserves.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-proofreading-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Proofreading</h4>
                                        <p>
                                            Our <a href="proofreading/"> best proofreading services</a>{" "}
                                            can help you ensure that your book is error-free and polished
                                            before it hits the shelves. Our team of expert proofreaders
                                            can help you catch all those typos, grammar mistakes, and
                                            punctuation errors that can detract from your book’s
                                            credibility.
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
                                        <img className="lazy mb-2" src="images/icons8-book-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Formatting</h4>
                                        <p>
                                            The <a href="formatting/"> book format</a> is crucial for the
                                            success of your book. Our formatting services can help you
                                            ensure that your book looks professional and visually
                                            appealing, making it stand out from the competition.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy mb-2" src="images/content.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>EBook Writing</h4>
                                        <p>
                                            EBooks have become increasingly popular in recent years, and
                                            we can help you capitalize on this trend with our{" "}
                                            <a href="e-book-writing/"> eBook writing services</a>. Our
                                            team of expert writers can help you create high-quality eBooks
                                            that will engage your readers and drive sales.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy mb-2" src="images/Formatting.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Blog Writing</h4>
                                        <p>
                                            Blogging is a great way to connect with your readers and build
                                            your brand. Our{" "}
                                            <a href="blog-writing/">
                                                {" "}
                                                professional blog writing services
                                            </a>{" "}
                                            can help you create compelling content that will keep your
                                            readers engaged and coming back for more.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Book;