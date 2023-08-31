import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";
import ThemeBtn from "./comps/theme-btns";

const WebsiteContent = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/website-content-writing-banner.jpeg.jpg)",
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
                                                Leave Your Competition in the Dust with Our Unique Content
                                                Writing Services
                                            </h1>
                                            <span>
                                                In a world where digital presence is everything, standing
                                                out from the competition is no easy feat. That's why Authors
                                                Everest is proud to offer unique content writing services,
                                                with a focus on delivering unique content that captures the
                                                essence of your brand. Our proficient writers are dedicated
                                                to crafting website copy that speaks directly to your target
                                                audience while showcasing your brand's values and voice.
                                                With our professional content writing services, your website
                                                will have the power to engage and convert visitors into
                                                loyal customers. We have the expertise to deliver
                                                exceptional results that exceed your expectations. And best
                                                of all, our affordable rates make it easy for businesses of
                                                all sizes to access the best content writing services in the
                                                USA.
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
                                    Transform Your Website with Words: Hire Content Writers Who
                                    Captivate and Convert!
                                </h2>
                                <p className="main-para">
                                    As a top content writing services company, we help you establish a
                                    formidable online presence that stands out from the competition.
                                    Our expert web content writers specialize in crafting engaging and
                                    informative copy optimized for search engines. We understand the
                                    importance of having quality content on your website to engage
                                    your audience and increase your online presence. We offer a range
                                    of services dedicated to writing copy for websites that resonate
                                    with your audience. Whether you need product descriptions, blog
                                    articles, or landing pages, our professional website content
                                    writers can create tailored content that captures your brand's
                                    essence and speaks directly to your target audience. Trust us to
                                    elevate your online presence with our exceptional content writing
                                    service.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/website-content-writing.png" alt="" />
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
                                <h6>Want to Dominate the Online World?</h6>
                                <h3>
                                    Unleash The Power Of Words And Convert Your Prospects Into
                                    Customers With The Help Of Our Web Content Writers!
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
                                    We Satisfy Your Cravings For Exceptional Quality And Effectiveness
                                    In Engaging Your Target Audience.{" "}
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
                                            Provide Unique <span> Content </span>
                                        </h4>
                                        <p>
                                            Our web content writers understand the importance of unique
                                            content, and we never resort to duplicating or copying content
                                            from other sources. Our content writing service ensures that
                                            your website's copy is original, engaging, and tailored to
                                            your brand's unique needs.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Deliver <span> Results </span>
                                        </h4>
                                        <p>
                                            Our copywriting service is designed to help your website
                                            achieve its goals. We drive more traffic, increase engagement,
                                            and boost your search engine rankings. Our expert content
                                            writers have the skills and knowledge to deliver the desired
                                            results.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            We Offer <span>Flexibility</span>
                                        </h4>
                                        <p>
                                            Our content writing services packages are designed to meet
                                            your specific needs. Whether you need website copywriting
                                            services for a single page or an entire website, we can
                                            support you.
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
                                        <img className="lazy" src="images/turnaround.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Save You <span> Time</span>
                                        </h4>
                                        <p>
                                            Hiring a content writer can be a time-consuming process. With
                                            our services, you can skip the hiring process and start with a
                                            professional writer immediately. We handle all the details,
                                            from research to writing to editing, so you can focus on
                                            running your business.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sucess.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Prioritize Customer <span> Satisfaction </span>
                                        </h4>
                                        <p>
                                            Our website content writer team is committed to delivering
                                            content that meets or exceeds your expectations. We value open
                                            communication with our clients and take the time to understand
                                            your specific needs and goals. We offer revisions and edits
                                            until you're completely satisfied with the final product.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-inscription-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Professional <span> Writers</span>
                                        </h4>
                                        <p>
                                            Our writers are skilled and experienced in writing web content
                                            and providing copy writing services. They are knowledgeable
                                            about different industries and can write content that
                                            resonates with your audience.
                                        </p>
                                    </div>
                                </li>
                            </ul>
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
                                <span className="approach-title">
                                    Understanding Your Business and Audience{" "}
                                </span>
                                <div className="approach-content">
                                    We start by getting to know your business and your target
                                    audience. It includes understanding your brand values, tone of
                                    voice, and the key messages you want to convey. We also research
                                    your target audience to identify their needs, preferences, and
                                    pain points.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Developing a Strategy </span>
                                <div className="approach-content">
                                    Based on our research, we develop a content strategy that outlines
                                    your website copy's key themes, messaging, and structure. It
                                    includes creating a content plan outlining each page's topics,
                                    keywords, and tone.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Writing and Editing</span>
                                <div className="approach-content">
                                    Once we have a clear strategy in place, we begin writing the
                                    website copy. Our expert content writers will craft compelling,
                                    engaging copy that reflects your brand and resonates with your
                                    target audience. We then edit and refine the copy to ensure it is
                                    polished and error-free.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Review and Approval </span>
                                <div className="approach-content">
                                    Once the website copy is complete, we will share it with you for
                                    review and approval. We welcome feedback and will make any
                                    necessary revisions to ensure the copy meets your expectations.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Implementation</span>
                                <div className="approach-content">
                                    Once you are happy with the website copy, we can work with your
                                    web development team to implement the copy onto your website. We
                                    can also guide how to structure and format the copy to optimize
                                    its impact.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>We Do Not Just Provide Website Content Writing Services!</h3>
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
                                        <h3>Ghostwriting </h3>
                                        <p>
                                            Our company specializes in providing you with the{" "}
                                            <a href="ghost-writing/"> best ghostwriting services</a> and{" "}
                                            <a href="e-book-writing/"> eBook writing services</a> to help
                                            you transform your ideas into reality.
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
                                        <h3>Self-Publishing </h3>
                                        <p>
                                            As a <a href="publishing/"> top self publishing company</a>,
                                            we have the solutions for all your publishing needs at
                                            affordable rates.
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
                                        <h3>Author Website</h3>
                                        <p>
                                            We provide cheap{" "}
                                            <a href="author-website/"> author website design services</a>{" "}
                                            to help authors establish a solid online presence and connect
                                            with their readers.
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
                                        <h3>Article Writing</h3>
                                        <p>
                                            Our team of experienced writers offers{" "}
                                            <a href="article-writing/">
                                                {" "}
                                                professional article writing services
                                            </a>{" "}
                                            and the{" "}
                                            <a href="proofreading/"> best proofreading services</a>. We
                                            ensure your content is engaging, informative, and tailored to
                                            your target audience.
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
                                        <h3>Book Trailer</h3>
                                        <p>
                                            We help you capture your readers' attention with our
                                            high-quality{" "}
                                            <a href="video-book-trailer/"> video book trailers</a>{" "}
                                            services, showcasing the essence of your story and building
                                            anticipation for your book.
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
                                Give Your Online Business A Boost With Our Website Copywriting
                                Services
                            </h2>
                            <p className="text-left main-para">
                                Our team of expert writers can help you create persuasive,
                                informative, and engaging copy that sets your business apart from
                                the competition. With our help, you can hire content writing that
                                captures your audience's attention and drives more traffic to your
                                website. We understand why unique content is important for your
                                online success. So, if you're looking to hire a content writer or
                                need copywriting services for websites, look no further than our
                                team. Contact us today to take your online presence to the next
                                level by writing website copy that produces results.
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

export default WebsiteContent;