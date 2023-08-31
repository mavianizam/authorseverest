import BannerForm from "./comps/banner-form";
import Cta from "./comps/cta";
import ThemeBtn from "./comps/theme-btns";

const Audio = () => {
    return (
        <>
            <div
                className="slider-wrapper"
                style={{
                    background: "url(images/audio-book.jpg)",
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
                                            <p className="subtitle">Audiobook Production Services</p>
                                            <h1 style={{ color: "#fff" }}>
                                                Best Audiobook Services to Breathe Life into your Book{" "}
                                            </h1>
                                            <span>
                                                Looking for an audiobook service that's both easy on the
                                                ears and light on the wallet? You've come to the right
                                                place! Our services are the talk of the town when it comes
                                                to delivering top-notch audio books at prices that won't
                                                make you cringe. We have a team of talented narrators and
                                                audio wizards that will make you feel like you're right
                                                there in the story with their expertly crafted performances
                                                and impeccable sound quality. So why wait? Hire us today and
                                                start exploring the wonderful world of cheap audio books
                                                with the best audiobook service out there!
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
                                    Professional Audiobook Production Company in the USA
                                </h2>
                                <p className="main-para">
                                    With a track record of hundreds of successful audiobook
                                    productions under our belt, we're confident in proclaiming
                                    ourselves as one of the top audiobook production companies around.{" "}
                                    <br /> But don't just take our word for it - our reputation
                                    precedes us. As a go-to agency for the creation and distribution
                                    of the best business audiobooks, we've established ourselves as a
                                    trusted partner for authors looking to elevate their written works
                                    into immersive, engaging listening experiences. From iTunes to
                                    Audible and everywhere in between, we've got the expertise and
                                    know-how to get your audiobook heard by audiences worldwide.{" "}
                                </p>
                                <ul>
                                    <li>• Impeccable Audio Quality</li>
                                    <li>• Captivating Narration</li>
                                    <li>• Wide Range of Genres</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <div className="cmplte-img">
                                <img src="images/audio-book.png" alt="" />
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
                                <h6>
                                    Why Settle For Second-Best When You Can Work With The Top One?
                                </h6>
                                <h3>
                                    Choose Authors Everest for Your Next Audiobook Project and See the
                                    Difference for Yourself
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
                                    Experience the Joy of Storytelling Like Never Before With Our Best
                                    Audio Book Service
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
                                        <h4>Professional Audiobook Creators</h4>
                                        <p>
                                            We're not just any team. We're a group of passionate audiobook
                                            creators. With years of experience under our belts, we know
                                            how to produce captivating and engaging audio recordings that
                                            leave listeners spellbound. Our commitment to excellence never
                                            wavers, ensuring that each project we tackle is a masterpiece.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/getyourorder.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Affordable <br /> Prices
                                        </h4>
                                        <p>
                                            We hold our work in high regard on being able to offer you the
                                            best bang for your buck when it comes to audiobooks. Our
                                            audiobook creation packages are custom-tailored to suit your
                                            budget, ensuring that you get the most value for your money.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <img className="lazy" src="images/sendusback.png" />
                                    </figure>
                                    <div className="txt-wrap">
                                        <h4>
                                            Quality <br /> Guaranteed
                                        </h4>
                                        <p>
                                            At our core, we're committed to excellence and take immense
                                            pride in our work. With our quality guarantee, you can trust
                                            that we'll produce the most exceptional audiobooks for you.
                                            Plus, our services are affordable, making us the perfect
                                            choice for those in search of the <b>cheapest audiobooks</b>{" "}
                                            without compromising on quality.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edit-new-sec mb-5">
                <div className="container">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <h3>Our Experts Don’t Just Create the Best Fantasy Audiobooks!</h3>
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
                                            Whether you are looking for the{" "}
                                            <a href="ghost-writing/"> best ghostwriting services</a> or
                                            need <a href="e-book-writing"> eBook writing services</a>, we
                                            have you covered.
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
                                        <h3>Publishing </h3>
                                        <p>
                                            As a <a href="publishing/"> top self publishing company</a>,
                                            we publish your book and provide you{" "}
                                            <a href="book-marketing/"> self publish book marketing</a>{" "}
                                            services.
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
                                            Need to perfect your <a href="formatting/"> book format</a>?
                                            Our book formatting services are at your disposal to transform
                                            your book into the perfect one.
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
                                        <h3>Proofreading</h3>
                                        <p>
                                            Our <a href="proofreading/"> best proofreading services</a>{" "}
                                            make your documents flawless by ensuring they are free from
                                            errors, typos, and grammar mistakes.
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
                                        <h3>Book Cover </h3>
                                        <p>
                                            Suppose you need an attractive book cover that can attract
                                            buyers. In that case, our menu of{" "}
                                            <a href="book-cover/"> professional book cover design</a>{" "}
                                            services are your best choice.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <div className="packages-sec leftinner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="text-left main-heading">
                                Ready to Start Your Audiobook Journey?
                            </h2>
                            <p className="text-left main-para">
                                We strive to make audiobooks engaging and inspiring, allowing
                                listeners to connect with your journey and experiences. Our
                                professional narrators work tirelessly to capture the author's voice
                                and bring their story to life, making it a truly captivating and
                                unforgettable listening experience. With our professional audiobook
                                assistance, you can get:{" "}
                            </p>
                            <ul>
                                <li>• Selection from a broad range of genres.</li>
                                <li>• Guidance on your voice and tone.</li>
                                <li>• Formatting of the text for audio.</li>
                                <li>• High-quality audio by top narrators.</li>
                                <li>• Feedback on your narration.</li>
                                <li>• And much more!</li>
                            </ul>
                            <p className="text-left main-para">
                                Ready to create an audiobook of your own? Refuse to settle for
                                lackluster storytelling that falls flat. Hire us now and let your
                                stories come alive through solid voices.
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
            <section className="approach-module module sec-padding">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="approach-items">
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Consultation </span>
                                <div className="approach-content">
                                    We start by meeting with our clients to discuss their vision for
                                    their audiobooks. We take the time to understand the genre, style,
                                    and audience of the audiobook.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Script Review </span>
                                <div className="approach-content">
                                    Once we understand the project scope, we review the script to
                                    ensure that it is suitable for audio production. We can offer
                                    suggestions for improvements to make the audiobook more engaging
                                    and effective.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Casting </span>
                                <div className="approach-content">
                                    We work with a pool of professional voice actors to find the right
                                    voice for the project. We take into consideration the author's
                                    preferences, the genre of the audiobook, and the intended
                                    audience.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Recording </span>
                                <div className="approach-content">
                                    state-of-the-art recording studio is equipped with the latest
                                    technology to ensure the highest quality sound. Our experienced
                                    audio engineers work closely with the voice actors to capture the
                                    best performance possible.
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
                                <span className="approach-title">Quality Assurance </span>
                                <div className="approach-content">
                                    {" "}
                                    We review the audiobook in its entirety to ensure that it meets
                                    our high standards for quality. We work with the client to make
                                    any necessary revisions.
                                </div>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-inner">
                                <span className="approach-title">Distribution </span>
                                <div className="approach-content">
                                    Once the audiobook is complete, we can distribute it through our
                                    network of online retailers and audiobook platforms, or the client
                                    can choose to distribute it themselves.
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
                                {/* <span class="urach">Why Choose Us?</span> */}
                                <h2 className="main-heading">
                                    What Sorts Of Audiobooks Do We Produce?
                                </h2>
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
                                        <h4>
                                            {" "}
                                            <br /> Self-Help
                                        </h4>
                                        <p>
                                            Our best self-help audio books cover a broad range of topics,
                                            from personal growth and development to mindfulness and stress
                                            management. Our team works closely with you to ensure that the
                                            audiobook version of your work is engaging, informative, and
                                            inspirational.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/getyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Business
                                        </h4>
                                        <p>
                                            We produce a wide range of best business audiobooks covering
                                            topics such as leadership, entrepreneurship, management, and
                                            finance. Our team of professional narrators and producers work
                                            to bring these books to life, making them informative and
                                            engaging for business professionals and entrepreneurs alike.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/sendusback.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Comedy
                                        </h4>
                                        <p>
                                            Laughter is the best medicine, and the best comedy audiobooks
                                            are the perfect prescription. From witty memoirs to satirical
                                            essays, our team produces hilarious audiobooks that are sure
                                            to put a smile on your audience's face.
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
                                    {/* <figure>
                        <img class="lazy" src="images/placeyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Science Fiction{" "}
                                        </h4>
                                        <p>
                                            One of our specialties is the best science fiction audiobooks.
                                            We work with the creators of some of the best sci-fi
                                            audiobooks to produce immersive and engaging audiobooks that
                                            transport listeners to other worlds and galaxies.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/getyourorder.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Graphic
                                        </h4>
                                        <p>
                                            Our best graphic audio books are a unique experience,
                                            combining the best of both worlds - graphic novels and
                                            audiobooks. Our team of producers and sound designers works
                                            with talented artists to create an immersive audio experience
                                            that brings the story to life.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    {/* <figure>
                        <img class="lazy" src="images/sendusback.png">
                     </figure> */}
                                    <div className="txt-wrap bg-area">
                                        <h4>
                                            {" "}
                                            <br /> Autobiographies
                                        </h4>
                                        <p>
                                            At our audiobook production company, we help authors bring
                                            their life stories to listeners through our autobiography
                                            audiobooks. Our team works closely with the authors to ensure
                                            that their unique voices and personality shine through in the
                                            audiobook version of their life stories.
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

export default Audio;