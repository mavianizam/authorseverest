import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActiveService, setIsActiveSer] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    const handleClickServices = event => {
        // 👇️ toggle isActive state on click
        setIsActiveSer(current => !current);
    };

    return (
        <>

            <main className={isActive ? 'app-container active' : 'app-container'}>
                <div className={isActive ? 'mobile-nav-btn active' : 'mobile-nav-btn'} onClick={handleClick}>
                    <span className="lines" />
                </div>
                <div className={isActive ? 'mobile-nav active' : 'mobile-nav'}>
                    <a href="/" className="logo-main">
                        <img
                            src="images/logo.png"
                            alt="*"
                            style={{ filter: "hue-rotate(45deg)" }}
                        />
                    </a>
                    <nav>
                        <ul className="unstyled mainnav pbpx-15">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="about-us/">About Us</a>
                            </li>
                            <li>
                                <a href="javascript:;" className={isActiveService ? 'active' : ''} onClick={handleClickServices}>
                                    Services <i className="xicon icon-angle-down" />
                                </a>
                                <ul className={isActiveService ? 'firstlevel unstyled active' : 'firstlevel unstyled'}>
                                    <li>
                                        <a href="ghost-writing/">Ghost Writing</a>
                                    </li>
                                    <li>
                                        <a href="editing/">Editing</a>
                                    </li>
                                    <li>
                                        <a href="publishing/">Publishing</a>
                                    </li>
                                    <li>
                                        <a href="proofreading/">Proofreading</a>
                                    </li>
                                    <li>
                                        <a href="audio-book/">Audio Book</a>
                                    </li>
                                    {/* <li><a href="book-">Book </a></li> */}
                                    <li>
                                        <a href="book-cover/">Book Cover</a>
                                    </li>
                                    <li>
                                        <a href="book-marketing/">Book Marketing</a>
                                    </li>
                                    <li>
                                        <a href="formatting/">Formatting</a>
                                    </li>
                                    <li>
                                        <a href="e-book-writing/">e-Book Writing</a>
                                    </li>
                                    <li>
                                        <a href="blog-writing/">Blog Writing</a>
                                    </li>
                                    <li>
                                        <a href="website-content-writing/">Website Content Writing</a>
                                    </li>
                                    <li>
                                        <a href="article-writing/">Article Writing</a>
                                    </li>
                                    <li>
                                        <a href="book-video-trailer/">Book Video Trailer</a>
                                    </li>
                                    <li>
                                        <a href="author-website/">Author Website</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="case-studies.php">Case Studies</a>
                            </li>
                            {/* <li><a href="pricing/">Pricing</a></li> */}
                            <li>
                                <a href="testimonials.php">Testimonials</a>
                            </li>
                            <li>
                                <a href="contact-us.php">Contact Us</a>
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
                                                    <a href="javascript:;" className="btn-main callusnow">
                                                        Book a Call
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="get-a-quote" className="btn-main">
                                                        Get a Quote
                                                    </a>
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
