import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";

const BlodWriting = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/blog-writing-banner.jpeg.jpg)",
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
                                                Boost Your Online Presence Today With Our Professional Blog
                                                Writing Services
                                            </h1>
                                            <span>
                                                Need high-quality, SEO-optimized, and engaging blog content?
                                                As a top blog writing agency, Authors Everest provides
                                                professional blog writing services that always deliver
                                                top-quality content. We have the best blog content writers
                                                in the business who are experts in their respective niches
                                                and have a proven track record of delivering high-quality
                                                content on time and within budget. Whether you need a blog
                                                post writing service, a blog article writing service, or
                                                full-scale content blog writing services, we've got you
                                                covered.
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
                                                </span>
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
                                            </section>
                                        </div>
                                    </div>
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
                                    Revamp Your Content Strategy: Hire Blog Writing Services for
                                    Consistent Quality Posts
                                </h2>
                                <p className="main-para">
                                    Are you wondering what the benefits of writing a blog are for your
                                    business? Well, the answer is simple. Crafting excellent blog
                                    content is essential for connecting with your audience, building
                                    your brand, and driving traffic to your website. By publishing
                                    regular, high-quality blog content, you can establish yourself as
                                    an industry thought leader, share your unique insights and
                                    perspectives and create a sense of community around your brand.
                                    So, hire blog writing services from us and do all of this without
                                    breaking the bank.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/blog-writing.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta2 lazy">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="wrap">
                                <h6>Want to Rank Higher on the Search Engine?</h6>
                                <h3>
                                    Take The Number 1 Spot On The Search Engine With Our SEO Blog
                                    Writing Services!
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
                                    The Best Blog Writing Services You Can Get!
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
                                        <h4>Expertise and Experience</h4>
                                        <p>
                                            Our team of blog writing experts has years of experience
                                            creating high-quality, engaging, and SEO-optimized blog
                                            content across a range of industries. We deeply understand
                                            what it takes to create content that resonates with your
                                            target audience and drives traffic to your website.
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
                                            That's why we offer customizable blog writing services that
                                            can be tailored to your specific requirements. We work closely
                                            with you to ensure your blog content meets your expectations.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Collaborative Approach</h4>
                                        <p>
                                            We value your input and vision. We work closely with you
                                            throughout the writing process to ensure your blog content
                                            reflects your style, voice, and vision. Our collaborative
                                            approach guarantees that you get the blog content you want.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row text-cent">
                        <div className="col-lg-12 icons">
                            <ul>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/seo.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>SEO-Optimized Content</h4>
                                        <p>
                                            Our blog writing experts are skilled in creating SEO-optimized
                                            content that can help boost your website's search engine
                                            rankings. We use keyword research and on-page optimization
                                            techniques to ensure your blog content ranks high on search
                                            engines.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/icons8-inscription-64.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>Editing and Proofreading Services</h4>
                                        <p>
                                            We provide the best editing and proofreading services to
                                            ensure your blog content is error-free, grammatically correct,
                                            and polished. Our editors will review your content thoroughly
                                            to ensure it meets our high-quality standards and resonates
                                            with your target audience.
                                        </p>
                                    </div>
                                </li>
                                {/* <li>
                  <figure>
                     <img class="lazy" src="images/sendusback.png">
                  </figure>
                  <div class="txt-wrap">
                     <h4>Collaborative Approach</h4>
                     <p>We value your input and vision. We work closely with you throughout the writing process to ensure your blog content reflects your style, voice, and vision. Our collaborative approach guarantees that you get the blog content you want.</p>
                  </div>
               </li> */}
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
                                <span className="approach-title">Consultation</span>
                                <div className="approach-content">
                                    Our process begins with an initial consultation with you. During
                                    this consultation, we will discuss your blog writing project in
                                    detail. We will ask questions about your target audience, blog
                                    goals, content style, and other necessary information.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Topic and Keyword Research</span>
                                <div className="approach-content">
                                    Once we have gathered all the necessary info, our experienced
                                    writers will extensively research your topic and target keywords.
                                    This research aims to ensure that our content is accurate,
                                    reliable, and informative.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Writing and Editing</span>
                                <div className="approach-content">
                                    After the research phase, our writers will begin the actual
                                    writing process. We will write high-quality, original, engaging
                                    content that meets your requirements. Once the writing is
                                    complete, our editors will review and edit the content to ensure
                                    that it is error-free, grammatically correct, and meets our
                                    high-quality standards
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">SEO Optimization</span>
                                <div className="approach-content">
                                    We understand the importance of SEO in creating blog content that
                                    drives traffic to your website. Our blog writing experts use
                                    keyword research and on-page optimization techniques to ensure
                                    your content is evident and easy to find.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Review and Revisions</span>
                                <div className="approach-content">
                                    We value your feedback and will provide you with a draft of the
                                    blog content for your review. You can suggest revisions and
                                    changes so that the final product meets your expectations and
                                    aligns with your goals.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Final Delivery</span>
                                <div className="approach-content">
                                    Once the blog post is complete, we will deliver the final product
                                    to you. You will receive a high-quality blog post that meets your
                                    requirements on time and within your budget.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>Solutions for All Your Blog Writing Needs</h3>
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
                                        <h3>Guest Posts</h3>
                                        <p>
                                            We provide guest blog writing services to save time, bring
                                            expertise and diverse perspective, increase exposure, and
                                            improve SEO.
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
                                        <h3>Creative Blogs</h3>
                                        <p>
                                            Our creative blog writing improves consistency and provides
                                            professionally-written, SEO-optimized content for your blog.
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
                                        <h3>Technical Blogs</h3>
                                        <p>
                                            We have experienced technical writers having their technical
                                            writing blogs across all industries.
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
                                        <h3>SEO Blogs</h3>
                                        <p>
                                            Our SEO blog writing services with data-driven keyword
                                            research improve your search engine rankings.
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
                                        <h3>Article Writing</h3>
                                        <p>
                                            Our written articles amplify your professional efforts and
                                            make you more trustworthy and authentic in the business.
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
                                Get The Cheap Business Blog Writing Service in the USA
                            </h2>
                            <p className="text-left main-para">
                                Authors Everest is one of the leading blog writing companies
                                providing blog writing services USA. Our expert content writers for
                                blogs are dedicated to crafting high-quality, engaging content that
                                will help your business grow and succeed. With competitive blog
                                writing service pricing, we make it easy to get the professional
                                business blog writing service you need at affordable rates. So
                                whether you're a new small startup or a big corporation, let us take
                                your blog to the next level with our top-notch blog content writing
                                service. Contact us today to get started!
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
                            More Services That Help You In Your Writing Journey
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Ghostwriting</h4>
                                <p>
                                    Elevate your book with our
                                    <a href="ghost-writing/"> best ghostwriting services</a> that
                                    guarantee quality content and timely delivery, so you can focus on
                                    promoting your brand and expanding your readership.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Publishing </h4>
                                <p>
                                    Publish your book your way with the help of our
                                    <a href="publishing/"> top self publishing company</a> that offers
                                    flexible options, customizable packages, and expert guidance
                                    throughout the process.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Proofreading</h4>
                                <p>
                                    Ensure your written work is polished to perfection with our
                                    <a href="proofreading/"> best proofreading services</a>, where our
                                    eagle-eyed editors meticulously review and correct errors,
                                    inconsistencies, and formatting issues.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Author Website</h4>
                                <p>
                                    Captivate your readers with an author website that showcases your
                                    unique style and brand with our
                                    <a href="author-website/"> author website design services</a> that
                                    offer personalized templates, easy-to-use interfaces, and SEO
                                    optimization.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Content Writing</h4>
                                <p>
                                    Stand out from the competition with our
                                    <a href="website-content-writing/">

                                        unique content writing services
                                    </a>
                                    that produce original, creative, and engaging material tailored to
                                    your specific needs and target audience.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-area">
                                <h4>Article Writing</h4>
                                <p>
                                    Boost your online presence with our
                                    <a href="article-writing/">

                                        professional article writing services
                                    </a>
                                    and grab your audience's attention with our
                                    <a href="book-video-trailer"> video book trailers</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default BlodWriting;