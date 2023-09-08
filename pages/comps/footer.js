import Image from "next/image";
import { useRouter } from "next/router";
import FooterForm from "./footer-form";
import Link from "next/link";



const Footer = () => {

    const { asPath } = useRouter();



    return (
        <>
            <section
                className="downform lazy"
                src="images/bg-v2.png"
                data-was-processed="true"
                id={asPath}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dnform clearfix  text-left">
                                <FooterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-main">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 address-main">
                                <div className="flogo">
                                    <figure>

                                        <img
                                            className="lazy loaded"
                                            src="images/logo.png"
                                            data-was-processed="true"
                                            style={{ filter: "hue-rotate(45deg)" }}
                                        />

                                    </figure>
                                </div>
                                <p>
                                    We create content that converts. Every asset aligns with your
                                    commercial goals, speaks directly to your audience and builds a
                                    conversation around your brand.
                                </p>
                            </div>
                            <div className="col-lg-2 offset-lg-1">
                                <h4>Services</h4>
                                <ul className="footer-nav">

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
                                        <Link href="website-content-writing">Website Content Writing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <h4 className="hiddenmob">&nbsp;</h4>
                                <ul className="footer-nav">
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
                                        <Link href="book-video-trailer">Book Video Trailer</Link>
                                    </li>

                                    <li>
                                        <Link href="author-website">Author Website</Link>
                                    </li>

                                    <li>
                                        <Link href="article-writing">Article Writing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <h4>Company</h4>
                                <ul className="footer-nav">
                                    <li>
                                        <Link href="testimonials">Testimonials</Link>
                                    </li>
                                    <li>
                                        <Link href="contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="faq">Faq's</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-5 col-sm-12 my-auto">
                                <div>

                                    <img
                                        className="hiddenmob lazy loaded"
                                        src="images/seals-footer.png"
                                        data-was-processed="true"
                                    />

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-auto">

                                <div>

                                    <img
                                        className="paymentlogos lazy loaded"
                                        src="images/card-brands.svg"
                                        data-was-processed="true"
                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-self-center">

                            <div className="col-sm-4 align-self-center">

                                <p style={{ color: "#fff" }}>
                                    © Authors Everest <span id="year">2022</span>.
                                    <br /> All rights reserved.
                                    <br />
                                    355 S. Grand Ave. Suite 2450, Los Angeles, CA, 90071
                                </p>

                            </div>

                            <div className="col-sm-4 align-self-center" />

                            <div className="col-sm-4 align-self-center">

                                <ul className="footer-nav2">

                                    <li>
                                        <Link href="terms-and-conditions">Terms of Services</Link>

                                    </li>

                                    <li>
                                        <Link href="privacy-policy">Privacy Policy</Link>

                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="disclaimer-area">

                    <div className="container">

                        <div className="row">

                            <div className="col">

                                <p className="disclaimer">
                                    <strong>Disclaimer:</strong>
                                    <br /> The services provided by Authors Everest become clients'
                                    property once delivered. Authors Everest will not hold any ownership
                                    rights once your work is successfully accepted by a publishing
                                    house.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </footer>


        </>
    );
}

export default Footer;