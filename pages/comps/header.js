import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActiveService, setIsActiveSer] = useState(false);
    const [showPopup, setshowPopup] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    const handleClickServices = event => {
        // 👇️ toggle isActive state on click
        setIsActiveSer(current => !current);
    };

    function toggle() {
        setshowPopup(!showPopup);
    }



    return (
        <>
            <div
                className="popup popup-layout popup-default ys-container formpopup"
                style={{
                    display: showPopup ? "none " : "block"
                }}
                id="ys-container"
            >
                <div className="ys-box">
                    <a className="popup-close ys-popup-close ys-exit" href="#" onClick={toggle}>
                        X
                    </a>
                    <div className="popup-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="popup-head">
                                    <h4>Activate this offer</h4>
                                    <h5>
                                        Last<strong> 3</strong> coupons left
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <form
                                    className="ordernow-form telsubmit form_submission"
                                    method="POST"
                                    action="https://formsubmit.co/harrydev96@gmail.com"
                                >
                                    <input
                                        type="hidden"
                                        name="url"
                                        defaultValue="https://www.authorseverest.com/"
                                    />
                                    <input
                                        type="hidden"
                                        name="domain"
                                        defaultValue="www.authorseverest.com"
                                    />
                                    <input
                                        type="hidden"
                                        name="subject"
                                        defaultValue="Popup Form (www.authorseverest.com)"
                                    />
                                    <div className="col-sm-12 form-group form-icon">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div
                                                    className="alert alert-danger error"
                                                    style={{ display: "none" }}
                                                />
                                                <input
                                                    required=""
                                                    type="text"
                                                    name="Name"
                                                    className="popup-field"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <input
                                                    required=""
                                                    type="email"
                                                    name="Email"
                                                    placeholder="Email Address"
                                                    className="popup-field"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <input
                                                    required=""
                                                    type="text"
                                                    name="Phone"
                                                    className="number phone-country popup-field masking contact"
                                                    placeholder="Enter Phone Here"
                                                />
                                                <span
                                                    className="bg-danger col-lg-offset-3 contact_error "
                                                    style={{ display: "none" }}
                                                >
                                                    Contact No Incorrect
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <input
                                                    required=""
                                                    type="text"
                                                    name="Description"
                                                    placeholder="Description"
                                                    className="popup-field brief-mt3"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                {/* <input type="submit" onclick="free_cons_form_validate1()" value="Order Now" class="primary-btn green-btn"> */}
                                                <button
                                                    type="submit"
                                                    value="Order Now"
                                                    className="btn-style-2 formbtn"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                            <div className="col-md-12 col-xs-12">
                                                <div
                                                    className="error mt-3 alert alert-danger text-left mb-0"
                                                    style={{ display: "none" }}
                                                />
                                                <div
                                                    className="success mt-3 alert alert-success text-center mb-0 p-2"
                                                    style={{ display: "none" }}
                                                />
                                                <div className="loader" style={{ display: "none" }}>
                                                    <img alt="loader" src="images/loader.gif" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img class="element element-22" src="images/8.jpg" /> */}
                {/* <img class="element element-23" src="assets/images/element-14.png" />
  <img class="element element-24" src="assets/images/element-11.png" /> */}
            </div>

            <main className={isActive ? 'app-container active' : 'app-container'}>
                <div className={isActive ? 'mobile-nav-btn active' : 'mobile-nav-btn'} onClick={handleClick}>
                    <span className="lines" />
                </div>
                <div className={isActive ? 'mobile-nav active' : 'mobile-nav'}>

                    <Link href='/'>
                        <Image
                            src="/images/logo.png" alt="Strugle" width={280} height={100} priority />
                    </Link>
                    <nav>
                        <ul className="unstyled mainnav pbpx-15">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a href="javascript:;" className={isActiveService ? 'active' : ''} onClick={handleClickServices}>
                                    Services
                                </a>
                                <ul className={isActiveService ? 'firstlevel unstyled active' : 'firstlevel unstyled'}>
                                    <li>
                                        <Link href="ghost-writing">Ghost Writing</Link>
                                    </li>
                                    <li>
                                        <Link href="editing">Editing</Link>
                                    </li>
                                    <li>
                                        <Link href="publishing">Publishing</Link>
                                    </li>
                                    <li>
                                        <Link href="proofreading">Proofreading</Link>
                                    </li>
                                    <li>
                                        <Link href="audio-book">Audio Book</Link>
                                    </li>
                                    <li>
                                        <Link href="book-cover">Book Cover</Link>
                                    </li>
                                    <li>
                                        <Link href="book-marketing">Book Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="formatting">Formatting</Link>
                                    </li>
                                    <li>
                                        <Link href="e-book-writing">E-Book Writing</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-writing">Blog Writing</Link>
                                    </li>
                                    <li>
                                        <Link href="website-content-writing">Website Content Writing</Link>
                                    </li>
                                    <li>
                                        <Link href="article-writing">Article Writing</Link>
                                    </li>
                                    <li>
                                        <Link href="book-video-trailer">Book Video Trailer</Link>
                                    </li>
                                    <li>
                                        <Link href="author-website">Author Website</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="case-studies">Case Studies</Link>
                            </li>
                            <li>
                                <Link href="testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link href="faq">Faq's</Link>
                            </li>
                            <li>
                                <Link href="contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <header className="header-main">
                    <div className="nav-area-full">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 logo-area">
                                    <div className="logo">

                                        <Link href='/'>
                                            <Image
                                                src="/images/logo.png" alt="Strugle" width={500} height={335} priority />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-flex hiddenmob nopad_left nopad_right">
                                    <div className="main-menu align-self-center">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="inract active">
                                                <a>
                                                    Services <i className="xicon icon-angle-down" />
                                                </a>
                                                <div className="dropdown">
                                                    <ul>
                                                        <li>
                                                            <Link href="ghost-writing">Ghost Writing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="editing">Editing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="publishing">Publishing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="proofreading">Proofreading</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="audio-book">Audio Book</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="book-cover">Book Cover</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="book-marketing">Book Marketing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="formatting">Formatting</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="e-book-writing">E-Book Writing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="blog-writing">Blog Writing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="website-content-writing">Website Content Writing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="article-writing">Article Writing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="book-video-trailer">Book Video Trailer</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="author-website">Author Website</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="case-studies">Case Studies</Link>
                                            </li>
                                            <li>
                                                <Link href="testimonials">Testimonials</Link>
                                            </li>
                                            <li>
                                                <Link href="faq">Faq's</Link>
                                            </li>
                                            <li>
                                                <Link href="contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 hiddenmob ">
                                    <div className="main-side-menu">
                                        <div className="inrsde">
                                            <ul className="ctop">
                                                <li className="num">
                                                    <a href="tel:+(818) 304-9259"> (818) 304-9259</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;" className="btn-main callusnow" onClick={toggle}>
                                                        Book a Call
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="get-a-quote" className="btn-main">Get a Quote</Link>
                                                </li>

                                                <li className="chat num">
                                                    <a href="javascript:;">Live Chat</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </main >
        </>
    );
}

export default Header;
