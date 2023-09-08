import BannerForm from "./comps/banner-form";
import QouteBtn from "./comps/quotebtn";
import ChatBtn from "./comps/chatbtn";
import NumberBtn from "./comps/numberbtn";
import Head from "next/head";

const ArticleWriting = () => {
    return (
        <>
            <Head>
                <title>Article Writing</title>
                <meta name="description" content="Don't keep your story locked up, let it inspire the world!"></meta>
            </Head>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/article-writing-banner.jpeg.jpg)",
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
                                                Experience the Power of Exceptional Articles with Our
                                                Professional Article Writing Services
                                            </h1>
                                            <span>
                                                Looking for high-quality article writing services that can
                                                help you captivate your audience and drive engagement?
                                                Authors Everest is here for you. As one of the leading
                                                article writing companies, we specialize in crafting
                                                top-notch articles tailored to your specific needs. Our
                                                talented article writers are masters of the craft. They know
                                                how to create compelling articles that are both informative
                                                and engaging. From blog posts to product descriptions, our
                                                professional article-writing services are designed to help
                                                you stand out from the crowd and make a lasting impression.
                                                So if you're looking for top-quality writing articles that
                                                get results, contact us today to learn more about our
                                                exceptional services in the USA.
                                            </span>
                                            <ChatBtn />
                                            <QouteBtn />
                                            <NumberBtn />
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
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="main-cmplete-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-cont">
                                <h2 className="main-heading">
                                    Hire an Article Writer to Get the Quality Articles
                                </h2>
                                <p className="main-para">
                                    Our best article writers help you engage your audience and boost
                                    your website's search engine rankings by providing professional
                                    article writing services. Our article writing services offer the
                                    perfect solution if you want to hire an article writer for your
                                    specific needs. Get the expertly crafted content you need to stand
                                    out in your industry. Whether you need blog posts, feature
                                    articles, or other types of content, our article writers for hire
                                    can deliver compelling, informative, and engaging pieces to help
                                    your brand succeed. Trust us to help you in writing articles and
                                    take your efforts to the next level.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/article-writing.png" alt="" />
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
                                <h6>Ready to Upgrade Your Content Strategy?</h6>
                                <h3 className="mb-5">
                                    Pen to Perfection: Our Blog Writing Service Will Unleash the
                                    Hidden Potential of Your Business
                                </h3>
                                <QouteBtn />
                                <ChatBtn />
                                <NumberBtn />
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
                                <h2 className="main-heading">
                                    Our Mission Is To Maximize Value For Our Authors With Online Book
                                    Marketing
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
                                        <h4>Quality</h4>
                                        <p>
                                            We pride ourselves on delivering well-researched, insightful,
                                            and engaging articles tailored to your needs. Our team of
                                            expert writers has years of experience writing for a variety
                                            of industries and niches, and we always strive to provide the
                                            best article writing services possible.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Customization</h4>
                                        <p>
                                            Every client is unique, so we take the time to understand your
                                            specific needs and goals. Whether you need blog posts, SEO
                                            articles, or whitepapers, we can tailor our best content
                                            writing services to meet your needs. We deliver content that
                                            resonates with your audience.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Timeliness</h4>
                                        <p>
                                            We know that time is of the essence when it comes to content
                                            creation, so we always try to deliver your articles on time.
                                            We work closely with you to establish deadlines and ensure we
                                            meet them, so you can focus on running your business.
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
                                        <img className="lazy" src="images/effective.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Competitive Pricing</h4>
                                        <p>
                                            We offer affordable packages for our high-quality
                                            article-writing services, so you can get the content you need
                                            without breaking the bank. We also provide cheap article
                                            writing services for bulk orders and ongoing partnerships.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/your suce.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Professionalism</h4>
                                        <p>
                                            We take our work seriously and strive to provide a
                                            professional, polished product. Our team is dedicated to
                                            providing excellent customer service. We're always available
                                            to answer your questions and address any concerns you may
                                            have.
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
                                            Our team of professional article writers consists of
                                            professionals who have expertise in various fields and
                                            industries. They have years of experience writing for multiple
                                            businesses, from startups to established companies. Our
                                            writers stay up-to-date with the latest industry trends and
                                            best practices to ensure that the articles we write for you
                                            are relevant, informative, and engaging.
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
                                <span className="approach-title">Understanding Your Needs</span>
                                <div className="approach-content">
                                    Before we start writing, we take the time to understand your
                                    needs. We'll ask you about your target audience, brand voice, and
                                    content goals. We'll also review your existing content and perform
                                    industry and keyword research to ensure that our content aligns
                                    with your overall article writing online content strategy
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Assigning a Writer</span>
                                <div className="approach-content">
                                    Once we understand your needs, we'll assign a writer with
                                    experience in your industry or niche. Our writers are experts at
                                    crafting content that engages your audience and drives results.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Writing and Revising</span>
                                <div className="approach-content">
                                    With your needs in mind, our writer will craft an initial draft of
                                    your article. We'll then send it to you for review, and you'll
                                    have the opportunity to provide feedback and request revisions.
                                    We'll work closely with you until you're delighted with the final
                                    product.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Editing and Quality Assurance
                                </span>
                                <div className="approach-content">
                                    Once you've approved the final draft, our editing team will review
                                    the article to ensure it meets our high-quality standards. We'll
                                    check for grammar, spelling, and punctuation errors and ensure
                                    that the article is optimized for search engines and meets your
                                    brand guidelines.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Editing </span>
                                <div className="approach-content">
                                    After the recording, our team of audio editors goes to work to
                                    ensure that the audio is clean, consistent, and free of errors. We
                                    also add sound effects and music to enhance the listening
                                    experience.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Delivery </span>
                                <div className="approach-content">
                                    Once the article has been edited and quality-checked, we'll
                                    deliver it to you on time and in the format of your choice.
                                    Whether you need a Word document, PDF, or HTML file, we'll ensure
                                    that the final product meets your specifications.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>What We Provide Besides Review Article Writing Service!</h3>
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
                                            Turn your ideas into reality with our
                                            <a href="ghost-writing/"> best ghostwriting services</a>, in
                                            addition to the
                                            <a href="proofreading/"> best proofreading services</a>.
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
                                        <h3>Self-Publishing</h3>
                                        <p>
                                            Get ready to publish like a pro with the
                                            <a href="publishing/"> top self publishing company</a> in the
                                            industry.
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
                                        <h3>Content Writing</h3>
                                        <p>
                                            Elevate your content game with our
                                            <a href="website-content-writing/">

                                                unique content writing services
                                            </a>
                                            and
                                            <a href="blog-writing/">

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
                                        <h3>Author Website</h3>
                                        <p>
                                            Make your author's website shine with our expert
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
                                        <h3>Book Trailers</h3>
                                        <p>
                                            Bring your book to life with our captivating video book
                                            trailers and promote your book to a broad audience.
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
                                Need Professional Article Writers At Your Service?
                            </h2>
                            <p className="text-left main-para">
                                Our article writing service offers you access to an expert article
                                writer for hire from the best content writing companies. We're
                                passionate about crafting high-quality articles that capture your
                                unique voice and resonate with your target audience. We've got you
                                covered whether you need articles for your blog, website, or social
                                media platforms. With Authors Everest at your side, you can take
                                your online presence to the next level and achieve your digital
                                goals. Say goodbye to mediocre content and hire content writing
                                expert from us today for exceptional article writing online.
                            </p>
                            <div href="get-a-quote" className="mtpx-25 strugglbtns">
                                <QouteBtn />
                                <ChatBtn />
                                <NumberBtn />
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

export default ArticleWriting;