import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ChatBtn from "./chatbtn";




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


    const { asPath } = useRouter();

    const [Domain, setDomain] = useState('www.authorseverest.com');
    const [Page, setPage] = useState('https://authorseverest.com' + asPath);
    const [Subject, setSubject] = useState('Popup Form');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Comments, setComments] = useState('');

    function ContactSubmit() {
        const loader = document.getElementById('loader');
        loader.style.display = 'block';



        fetch("https://formsubmit.co/ajax/harrydev96@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Domain: Domain,
                Page: Page,
                Subject: Subject,
                Name: Name,
                Email: Email,
                Phone: Phone,
                Comments: Comments,
            })
        })
            .then(function (response) {
                loader.style.display = 'none';
                const element = document.getElementById('yourElementId');
                const formpopup = document.getElementById('ys-container');

                if (element) {
                    // Change the display property to "block"
                    element.style.display = 'block';
                    setName('');
                    setEmail('');
                    setPhone('');
                    setComments('');
                }

                setTimeout(() => {
                    element.style.display = 'none';
                    ys_container.style.display = 'none';
                }, 2000);

            })
            .then(data => console.log(data))
            .catch(error => console.log(error));


    }

    const [showChat, setShowChat] = useState(false);
    return (
        <>
            <div
                className="popup popup-layout popup-default ys-container formpopup"
                style={{
                    display: showPopup ? "none " : "block"
                }}
                id="ys_container"
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
                                <form className="ordernow-form telsubmit form_submission">

                                    <div className="col-sm-12 form-group form-icon">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div
                                                    className="alert alert-danger error"
                                                    style={{ display: "none" }}
                                                />
                                                <input type="text"
                                                    value={Name}
                                                    onChange={e => { setName(e.currentTarget.value); }}
                                                    className="popup-field"
                                                    placeholder="Enter Your Name *"
                                                    required="" />
                                            </div>
                                            <div className="col-sm-12">
                                                <input type="email"
                                                    value={Email}
                                                    onChange={e => { setEmail(e.currentTarget.value); }}
                                                    className="popup-field"
                                                    placeholder="Enter email here *"
                                                    required="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <input
                                                    type="number"
                                                    value={Phone}
                                                    onChange={e => { setPhone(e.currentTarget.value); }}
                                                    className="popup-field"
                                                    placeholder="Enter number here *"
                                                    required="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <input
                                                    className="popup-field"
                                                    value={Comments}
                                                    onChange={e => { setComments(e.currentTarget.value); }}
                                                    placeholder="Enter message here"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                {/* <input type="submit" onclick="free_cons_form_validate1()" value="Order Now" class="primary-btn green-btn"> */}
                                                <button className="btn-style-2 formbtn" name="submit" type="button" onClick={ContactSubmit}>Submit</button>

                                            </div>
                                            <div className="col-md-12 col-xs-12">
                                                <div
                                                    className="error mt-3 alert alert-danger text-left mb-0"
                                                    style={{ display: "none" }}
                                                />
                                                <div
                                                    className="success mt-3 alert alert-success text-center mb-0 p-2" id="yourElementId"
                                                    style={{ display: "none" }}>
                                                    <p>Thank you for filling out your information!</p>
                                                </div>
                                                <div
                                                    className="loader" id="loader"
                                                    style={{ display: "none" }}
                                                >
                                                    <img
                                                        alt="loader"
                                                        src="images/loader.gif"
                                                        className="img-fluid"
                                                    />
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
            </div >

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
                                    Services <span className="arrow-down"> ⌄</span>
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
                                                    Services<i className="xicon icon-angle-down" />
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

                                                <li className="chat num" >
                                                    <ChatBtn />
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
