import BannerForm from "./comps/banner-form";
import ChatBtn from "./comps/chatbtn";
import NumberBtn from "./comps/numberbtn";
import QouteBtn from "./comps/quotebtn";

const Ghost = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/ghost-writing.jpg)",
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
                                            <p className="subtitle">Proficient Team of Ghost Writers</p>
                                            <h1 style={{ color: "#fff" }}>
                                                Find the Best Ghost Writing Services for Your Next Project
                                            </h1>
                                            <span>
                                                Are you looking for the best ghostwriting services? Look no
                                                further! Our ghostwriting agency has the expertise and
                                                experience to bring your ideas to life. With a team of
                                                talented writers, we are dedicated to providing you with the
                                                best ghostwriting services to help you achieve your writing
                                                goals.
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
                    <div className="row align-self-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-cont">
                                <h2 className="main-heading">
                                    Don't Let Writer's Block Hold You Back, Look for Ghost Writers for
                                    Hire
                                </h2>
                                <p className="main-para">
                                    If you're feeling stuck and uninspired, don't let writer's block
                                    hold you back from creating the content you need. Whether you're an
                                    author, blogger, or business owner, finding the right words can be
                                    challenging. That's why many people turn to hire a ghost writer.
                                    With their help, you can produce high-quality content that meets
                                    your needs and appeals to your target audience.
                                </p>
                                <p className="main-para">
                                    Our ghost writers for hire are experienced professionals who can
                                    craft compelling stories, articles, and other forms of content
                                    tailored to your specific needs. Whether you need a blog post,
                                    e-book, or white paper, ghost writers have the skills to get the job
                                    done. So don't let writer's block hold you back any longer. To find
                                    the best ghostwriters near me and take your content to the next
                                    level!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/ghost-writing.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="strugglesec">
                <div className="container mt-5">
                    <div className="row align-self-center">
                        <div className="col-lg-5 col-md-5 col-sm-12 align-self-center">
                            <div className="strgle-img">
                                <figure>
                                    <img
                                        className="myLazy loaded"
                                        src="images/ghostwriting-agentur.jpg"
                                        alt="strugle"
                                        width={784}
                                        height={500}
                                        data-was-processed="true"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 align-self-center">
                            <h2 className="main-heading">
                                Discover the Power of Professional Ghostwriting - Your Story, Our
                                Expertise providing Ghost Writing Services
                            </h2>
                            <p className="main-para">
                                Don't let your story go untold. Get your message heard loud and clear
                                with the help of professional ghostwriter company. Say goodbye to
                                mediocre writing forever! Let our team of expert and cheap
                                ghostwriters for hire bring your vision to life. Transform Your
                                Writing with the Help of the USA’s Best Ghostwriting Services Today!
                            </p>
                            <div className="">
                                <ul>
                                    {/* <li>Customized Ghostwriting Services for Non-Fiction and Fiction Books</li> */}
                                    <li className="mb-2 line-10 mb-0">Professional Ghostwriting</li>
                                    <li className="mb-2">

                                        <a href="e-book-writing"> eBook writing services</a>
                                    </li>
                                    <li>Expert Team</li>
                                    <li className="mb-2">Quality Work</li>
                                    <li>Top Services</li>
                                    <li className="mb-2">Affordable Rates</li>
                                </ul>
                                <div className="mtpx-25 strugglbtns">
                                    <QouteBtn />
                                    <ChatBtn />
                                    <NumberBtn />
                                </div>
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
                                <span className="urach" />
                                <h3 className="From Draft to Bestseller: Explore the Game-Changing Features of Our Top-Ranked Publishing Services!main-heading">
                                    Explore Our More Services Other Than Ghostwriting
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
                                        <h4>Article Writing </h4>
                                        <p>
                                            We offer the best
                                            <a href="article-writing/">article writing services</a> to help
                                            you write engaging articles that inform your potential audience
                                            about you.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/content123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Website Content Writing</h4>
                                        <p>
                                            Our
                                            <a href="website-content-writing/"> content writing services</a>
                                            not just only help you sell your products but also boost your
                                            website authority.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/Editing123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Editing</h4>
                                        <p>
                                            Get <a href="editing/"> professional book editing services</a>
                                            and ensure your book is error-free, polished, and ready to be
                                            published.
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
                                        <img className="lazy mb-2" src="images/Formatting123.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Formatting</h4>
                                        <p>
                                            Give your readers an engaging book by ensuring it is properly
                                            formatted with our professional
                                            <a href="formatting/"> book formatting</a> services.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy mb-2" src="images/Publishing.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Publishing </h4>
                                        <p>
                                            Stop looking for
                                            <a href="publishing/"> book publishing companies</a> when you
                                            have us at your service. We help you publish your book with
                                            ease.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy mb-3" src="images/icons8-increase-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Book Marketing </h4>
                                        <p>
                                            We provide result-driven
                                            <a href="book-marketing/"> book marketing services</a> and
                                            guarantee that you will sell more books than you expected.
                                        </p>
                                    </div>
                                </li>
                            </ul>
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
                                    Entrust Your Writing Tasks to Our Book Ghostwriting Services
                                    Geniuses and See the Difference!
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-protect-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Revisions Guarantee </h4>
                                        <p>
                                            We believe in delivering quality work to our clients. That's why
                                            we offer unlimited revisions until our clients are completely
                                            satisfied with our ghostwriting service.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-privacy-policy-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Confidentiality Policy</h4>
                                        <p>
                                            We understand the importance of confidentiality and privacy, so
                                            we have a strict confidentiality policy in place to protect our
                                            clients' information.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-in-transit-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>On-Time Delivery</h4>
                                        <p>
                                            We understand that time is a valuable commodity, so we guarantee
                                            on-time delivery for every project we undertake.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-headset-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>24/7 Support </h4>
                                        <p>
                                            Our Ghostwriters support team is available 24/7 to assist with
                                            any questions or concerns you may have.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-price-tag-usd-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Affordable Pricing </h4>
                                        <p>
                                            We strive to provide high-quality content at an affordable
                                            prices and packages, without compromising on quality.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            className="lazy"
                                            src="images/icons8-administrative-tools-64.png"
                                        />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Multiple Formatting Options </h4>
                                        <p>
                                            We offer multiple formatting options to meet the specific needs
                                            of our clients.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta2 lazy" src="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="wrap">
                                <h6>
                                    Are you looking for a way to make your writing more impactful and
                                    effective?
                                </h6>
                                <h3 className="mb-5">
                                    Say goodbye to boring writing and hello to impactful, effective
                                    content. Take your writing to the next level and hire the best
                                    ghostwriting services. Get started today!
                                </h3>
                                <QouteBtn />
                                <ChatBtn />
                                <NumberBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="approach-module module sec-padding">
                <div className="container">
                    <h2>Our Writing Process</h2>
                    <p className="main-para" style={{ textAlign: "center" }}>
                        Thorough Understanding of Your Needs We take the time to understand your
                        writing goals, target audience, and overall vision for your project.
                    </p>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Brainstorming and<span> Conceptualization</span>
                                </span>
                                <div className="approach-content">
                                    Our team of experts will brainstorm and conceptualize the best way
                                    to approach your project, taking into consideration your needs and
                                    requirements.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    In-Depth Research <span>and Analysis</span>
                                </span>
                                <div className="approach-content">
                                    The experienced ghostwriters at Authors Everest conduct extensive
                                    research to gather relevant information and data that will inform
                                    the writing process.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Draft Creation <span>and Initial Review</span>
                                </span>
                                <div className="approach-content">
                                    Our best ghostwriters will create a draft based on the research and
                                    analysis, and present it for your review and feedback.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Revisions and Editing</span>
                                <div className="approach-content">
                                    We welcome your feedback and make any necessary revisions to ensure
                                    the final product meets your expectations. Our editors then
                                    thoroughly review the document to ensure its accuracy and clarity.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Final Review <span>and Approval</span>
                                </span>
                                <div className="approach-content">
                                    Once you are satisfied with the final draft, we will proceed with
                                    the final review and approval process.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">
                                    Post-Production <span>and Promotion</span>
                                </span>
                                <div className="approach-content">
                                    After the final approval, we will handle the post-production
                                    process, including formatting, typesetting, and any other necessary
                                    steps. We will also assist with marketing and promoting your
                                    finished product.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="packages-sec leftinner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="text-left main-heading">
                                Discover the Secret to Flawless Writing with one of The Top
                                Ghostwriting Companies in The USA!
                            </h3>
                            <p className="text-left main-para">
                                Unleash Your Writing Potential and Turn Your Ideas into a Masterpiece!
                                Struggling to turn your ideas into words? Looking for best
                                ghostwriters near me to help you out? Let our ghostwriting experts do
                                the work for you. With years of experience and a proven track record,
                                we guarantee to deliver high-quality writing that will exceed your
                                expectations. Get in touch and take the first step towards writing
                                success!
                            </p>
                            <div className="mtpx-25 strugglbtns">
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

export default Ghost;