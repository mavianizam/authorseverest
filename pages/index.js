import BannerForm from "./comps/banner-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faPhoneSquareAlt, faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import ChatBtn from "./comps/chatbtn";
import NumberBtn from "./comps/numberbtn";
import QouteBtn from "./comps/quotebtn";
import Head from "next/head";




export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Don't keep your story locked up, let it inspire the world!"></meta>
      </Head>
      <div
        className="slider-wrapper lazy"
        data-src="/images/homebanner.webp"
        style={{ backgroundSize: "cover", backgroundPosition: "center center" }}
      >
        <section className="">
          <div className="item">
            <div className="home-banner">
              <div className="container">
                <div className="row align-self-center">
                  <div className="col-lg-7 col-md-7 col-sm-12 align-self-center">
                    <div className="home-banner-content home-align">
                      <p className="subtitle">
                        Don't keep your story locked up, let it inspire the world!
                      </p>
                      <h1 style={{ color: "#fff" }}>
                        Unlock Your Writing Potential with the Best Services for
                        Authors in the USA
                      </h1>
                      <span>
                        Our Services for Authors are designed to help you bring your
                        ideas to life with ease. Whether you're an aspiring writer, an
                        experienced author, or simply someone who loves to create,
                        From ebook writing prompts and exercises, to detailed outlines
                        and editing services, we have everything you need to turn your
                        imagination into a masterpiece. <br />
                        <br /> So why wait? Unleash your creativity and take your
                        writing to the next level today with Best Services for
                        Authors!
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

      <section className="strugglesec">
        <div className="container">
          <div className="row align-self-center">
            <div className="col-lg-7 col-md-7 col-sm-12 align-self-center">
              <h2 className="main-heading">
                Discover the Secret of Writing with USA’s best Authors Services!
              </h2>
              <p className="main-para">
                Our team of experienced professionals has helped countless aspiring
                authors turn their passion for writing into successful careers. With
                our comprehensive approach to author development, you'll have access
                to the tools and resources you need to hone your craft and build a
                strong platform for your writing. From writing workshops and
                publishing support, to marketing and promotion services, we have
                everything you need to reach your goal of becoming a top selling
                author. Whether you're a seasoned writer or just starting out, trust
                USA's Best Services for Authors to guide you on your journey to
                literary success.
              </p>
              <div className="">
                <ul>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Comprehensive Approach</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Experienced Professionals</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Tailored Solutions </li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Marketing and Promotion </li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Success Guaranteed</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />24/7 Support</li>
                </ul>
                <div className="mtpx-25 strugglbtns">
                  <QouteBtn />
                  <ChatBtn />
                  <NumberBtn />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 align-self-center">
              <div className="strgle-img">
                <figure>
                  <img
                    className="myLazy loaded"
                    src="images/strugle.webp"
                    alt="strugle"
                    width={784}
                    height={600}
                    data-was-processed="true"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="helpsec mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hwc-img">
                <figure>
                  <img
                    className="lazy loaded"
                    src="images/how-we-can-img.webp"
                    alt="how-we-can-image"
                    data-was-processed="true"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3 className="main-heading">
                Get the Support You Need to Succeed as an Author
              </h3>
              <p className="main-para">
                Our team of experts has years of experience in the ebook writing
                industry, and they know what it takes to write a top-selling ebook.
                With our ebook writing services, you can trust that you're getting the
                best support and guidance from the industry's top authors. Our
                Services for the Best Ebook Writing and Services for Authors
              </p>
              <div className="helpseclist">
                <ul>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Affordable Ebook Writing Services</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Professional Ebook Editing and Proofreading</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Author House Solutions for Top Selling Authors</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Top Author Marketing and Promotion</li>
                  <li><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Personalized Author Coaching</li>
                </ul>
              </div>
            </div>
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
                        width={40}
                        height={40}
                        data-was-processed="true"
                        alt="abx"
                      />
                    </figure>
                  </div>
                  <div className="rht">
                    <h3>
                      Examining And Drafting The <br /> Outline
                    </h3>
                    <p>
                      We try to understand your concept and demands and devise a plot
                      plan after really thorough research.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="lft">
                    <figure>
                      <img
                        className="hvr-bob genu lazy loaded"
                        src="images/genuine.svg"
                        width={40}
                        height={40}
                        data-was-processed="true"
                        alt="abx"
                      />
                    </figure>
                  </div>
                  <div className="rht">
                    <h3>Writing Authentic Content Based On Your Opinion</h3>
                    <p>
                      Once you accept the plot plan, the ghostwriter will commence
                      writing original content respective to your idea.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="lft">
                    <figure>
                      <img
                        className="hvr-bob lazy loaded"
                        src="images/critical.svg"
                        width={40}
                        height={40}
                        data-was-processed="true"
                        alt="abx"
                      />
                    </figure>
                  </div>
                  <div className="rht">
                    <h3>Analytical Review, Editing, and Proofreading</h3>
                    <p>
                      Our Ghostwriters keep editing the draft to keep up with your
                      requirement once our editors finalize the content.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="lft">
                    <figure>
                      <img
                        className="hvr-bob lazy loaded"
                        src="images/formatting.svg"
                        width={40}
                        height={40}
                        data-was-processed="true"
                        alt="abx"
                      />
                    </figure>
                  </div>
                  <div className="rht">
                    <h3>Comprehensive Designing, Formatting, and Typesetting</h3>
                    <p>
                      Just as the book is written, edited, and proofread, the
                      finalized print is delivered to the client for its approval.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="lft">
                    <figure>
                      <img
                        className="hvr-bob lazy loaded"
                        src="images/branding.svg"
                        width={40}
                        height={40}
                        data-was-processed="true"
                        alt="abx"
                      />
                    </figure>
                  </div>
                  <div className="rht">
                    <h3>Publishing, Branding, Promotions, and Marketing </h3>
                    <p>
                      Once the client has approved the final document for publishing,
                      we publish the eBook in your desired format.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="strugglesec main-cnt-wat-sec">
        <div className="container">
          <div className="row align-self-center">
            <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
              <h3 className="main-heading">
                Get the Recognition You Deserve - Join the Ranks of Top Authors Today!
              </h3>
              <p className="main-para">
                Unlock your potential as a top author with our comprehensive writing
                services. From ghostwriting to publishing, editing, proofreading,
                formatting, and book marketing, we have everything you need to bring
                your writing to life. Get started now and experience the thrill of
                seeing your book on the shelves! Let us help you become a top author
                with our Services.
              </p>
              <div className="">
                <ul>
                  <a href="publishing/"></a>
                  <li>
                    <a href="publishing/"></a>
                    <a href="e-book-writing/"> eBook Writing Services</a>
                  </li>
                  <a href="ghost-writing/"></a>
                  <li>
                    <a href="ghost-writing/"></a>
                    <a href="ghost-writing/"> Ghostwriting Services</a>
                  </li>
                  <a href="editing/"></a>
                  <li>
                    <a href="editing/"></a>
                    <a href="editing/"> Book Editing Services</a>
                  </li>
                  <a href="audio-book/"></a>
                  <li>
                    <a href="audio-book/"></a>
                    <a href="audio-book/"> Best Audiobook service</a>
                  </li>
                  <a href="book-video-trailer/"></a>
                  <li>
                    <a href="book-video-trailer/"></a>
                    <a href="book-video-trailer/"> Video Book Trailers</a>
                  </li>
                  <a href="book-marketing/"></a>
                  <li>
                    <a href="book-marketing/"></a>
                    <a href="book-marketing/"> Book Marketing Services</a>
                  </li>
                </ul>
                <div className="mtpx-25 strugglbtns">
                  <QouteBtn />
                  <ChatBtn />
                  <NumberBtn />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
              <img
                className="cant-img"
                style={{ objectFit: "cover" }}
                src="images/bookinner.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="listsec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slutin">
                {/* <span class="sbus">Solutions</span> */}
                <h3 className="main-heading" style={{ letterSpacing: "0.25rem" }}>
                  We Provide Remarkable Writing Services
                </h3>
                <p className="main-para main-para-width">
                  Whether you're a business looking to connect with clients or an
                  individual seeking to tell your story, our writing solutions cater
                  to every need. From B2B content that drives sales to captivating B2C
                  narratives, let us help bring your words to life. With a focus on
                  quality and a commitment to excellence, our Services for Authors are
                  here to help you achieve your writing goals. So why wait? Let us
                  take care of your writing needs today.
                </p>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="wrap">
                <ul>
                  <li className="bb br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Travel and Lifestyle</p>
                  </li>
                  <li className="bb br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Government and Non-Profits</p>
                  </li>
                  <li className="bb">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Medical and Healthcare</p>
                  </li>
                  <li className="bb  br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Legal and Attorney</p>
                  </li>
                  <li className="bb br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Gaming and Fitness</p>
                  </li>
                  <li className="bb">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Fashion and Entertainment</p>
                  </li>
                  <li className="bb br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Food and Beverage</p>
                  </li>
                  <li className="bb br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Business and Real Estate</p>
                  </li>
                  <li className="bb">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Sports and Music</p>
                  </li>
                  <li className=" br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Finance and HR</p>
                  </li>
                  <li className="br">
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Education and Day Care</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faRocket} style={{ fontSize: 16, color: "#505d89" }} />Startups and Consultants</p>
                  </li>
                </ul>
                <h6>Are You Looking To Get Industry Specific Content Services? </h6>
                <span>
                  Talk to us on a call
                  <a href="tel:+(818) 304-9259">(818) 304-9259</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="polaroid module">
        <div className="container">
          <div className="grid-construct polaroid__box">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div>
                  <h3 className="main-heading">
                    Learn the Insider Secrets of the Top Selling Authors of All Time
                    and Get Published
                  </h3>
                  <p className="main-para main-para-width">
                    Discover the hidden tricks of the most successful authors in
                    history with our exclusive guide. Unveil the insider secrets of
                    the top selling authors of all time and skyrocket your own writing
                    career. Get published now!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="grid-construct polaroid__box">
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/1.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/2.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/3.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/4.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/5.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/6.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/7.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/8.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/9.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/10.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/11.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/12.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/13.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/14.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/15.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
            <li className="polaroid__col">
              <a className="polaroid__link" href="case-studies">
                <div className="polaroid__img-box">
                  <img
                    className="polaroid__img lazy myLazy"
                    alt=""
                    src="images/16.webp"
                    data-was-processed="true"
                    width={244}
                    height={363}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-book">
        <div className="container">
          <div className="row align-self-center">
            <div className="col-md-5 align-self-center">
              <div className="gtyur-img">
                <img
                  className="lazy myLazy"
                  src="images/magazine-mockup-2.png"
                  alt=""
                  data-was-processed="true"
                />
              </div>
            </div>
            <div className="col-md-7 my-auto align-self-center">
              <h2>
                Get your best <br />
                seller at <span>50% Off</span>
              </h2>
              <p>
                We'll help you write the book that could be
                <span>the next best seller.</span>
              </p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} />
                  <span>Call us </span>
                  <a
                    href="tel:+(818) 304-9259"
                    style={{
                      display: "inline",
                      padding: 0,
                      background: "transparent"
                    }}
                  >
                    (818) 304-9259
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelopesBulk} />
                  <span>Discuss your ideas</span>
                  <a href="mailto:info@authorseverest.com">
                    <span>info@authorseverest.com</span>
                  </a>
                </li>
              </ul>
              <QouteBtn />
              <ChatBtn />
              <NumberBtn />
            </div>
          </div>
        </div>
      </section>

      <section className="main-ghst-wrtng-sec">
        <div className="container">
          <div className="row testboxes align-self-center">
            <div className="col-lg-6 col-md-6 col-sm-12  align-self-center">
              <div className="ghsot-wrting-dk">
                <h3 className="main-heading">Why Choose Authors Everest?</h3>
                <p className="main-para">

                  Our Services for Authors are committed to helping authors achieve
                  their dreams. Our team of experts is dedicated to providing
                  top-notch ebook writing services at an affordable price, and we're
                  always here to help you every step of the way. We have a proven
                  track record of helping top selling authors of all time, and we're
                  confident that we can help you too!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 order-md-first col-sm-12  align-self-center">
              <div className="ghstwrtng-img">
                <figure>
                  <img
                    className="lazy loaded"
                    src="images/ultimateicons.webp"
                    width={540}
                    height={329}
                    alt=""
                    data-was-processed="true"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta2 lazy" src="" data-was-processed="true">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="wrap">
                <h6>Striving to Sell More of your Books?</h6>
                <h3 className="mb-5">Why Not Hire Authors Everest to Promote Your Book!</h3>
                <QouteBtn />
                <ChatBtn />
                <NumberBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
