import Head from "next/head";

const Thanks = () => {
    return (
        <>
            <Head>
                <title>Thank You/title</title>
                <meta name="description" content="Don't keep your story locked up, let it inspire the world!"></meta>
            </Head>
            <section className="sec-padding1 mtpx-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 inner-content text-center">
                            <h2 className="main-heading">Thanks For Contacting Us!</h2>
                            <p className="main-para">
                                We'will be in touch with you shortly...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}


export default Thanks;