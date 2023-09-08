import React from 'react';
import Accordion from './comps/accordion';


function AccordionPage() {
    return (
        <>
            <Head>
                <title>Faq</title>
                <meta name="description" content="Don't keep your story locked up, let it inspire the world!"></meta>
            </Head>
            <section className="sec-padding main-faq-sec mtpx-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="main-heading">
                                Frequently Asked <span>Questions</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="inner-div">
                            <Accordion
                                title="WHO IS A GHOSTWRITER & HOW TO DISCOVER A GHOSTWRITER FOR HIRING?"
                                content="A ghostwriter is an individual who composes for another person without including their name as the author; instead, the specific individual's name is utilized. This ghostwriting is typically connected with distributing a book. Ghostwriting is an inseparable part of advertising, corporate technologies, online networking, and various other fields driven by content."
                            />
                            <Accordion
                                title="HOW TO AVAIL THE ASSISTANCE OF A GHOSTWRITER?"
                                content="If you seek the assistance of a ghostwriter, we can help you out in this effort.

                                If you’re informed of common individuals or professionals who have utilized ghostwriters in the past, then ask them for guidance. Tell these individuals your specifications and parameters, as this preserves your time and prevents mental fatigue.
                                
                                Possessing liberty, you can search on online platforms for ghostwriters. By exploring distinct websites for specialist ghostwriters, you can guarantee yourself to avail yourself of the expertise and advice of a quality-driven ghostwriter who fulfills your expectations. This process helps you access ghostwriters experienced, have ample knowledge of the given field, and are skilled enough to translate excellence onto paper."
                            />
                            <Accordion
                                title="OUR PURPOSE IN THE GHOST WRITING JIGSAW"
                                content="Our primary purpose is to provide you with a ghostwriter that can satisfy your expectations, can follow your vision, and can blend their writing style with one required by you. There are still elements that you need to analyze before hiring a ghostwriter."
                            />
                            <Accordion
                                title="THE GENERAL EXPENSE OF HIRING A GHOSTWRITER"
                                content="Various components comprise the cost of a ghostwriter. They are inclusive of the project's complexity, varying elements enfolded within the project, the ghostwriter's experience, the skill demonstrated by the writer, and the time needed to complete the project."
                            />
                            <Accordion
                                title="DO YOU OFFER ANY GUARANTEES?"
                                content="Even though we don’t guarantee any top-rankings, our track record showcases our ability to provide result-oriented results consistently. Avail our assistance to see, understand and realize the potential we can unleash for your projects by simply harnessing our experience and expertise."
                            />
                            <Accordion
                                title="What is a Ghostwriter and How to Find a Ghostwriters for Hire?"
                                content="A ghostwriter is a writer who gets compensated to write for another person supporting that specific individual's name. Generally, this kind of ghostwriting or ghostwriters is linked with distributing a book. Now, ghostwriting is also broadly used as a part of corporate interchanges, advertising, online networking, and numerous activities and fields that deliver more noticeable and more noteworthy written content measures."
                            />
                            <Accordion
                                title="How to Hire a Ghostwriter?"
                                content="If you search for an answer, how to hire a ghostwriter, we can assist you with that!

                                If you know people who have employed ghostwriters or ghostwriting services, request them to recommend potential ghostwriters for your assignment. Tell them your obligations and desires, which can guide them to a perfect contender for you. It can help you with vitality, time, and even cash.
                                
                                You can search online freelance sites for ghostwriters if you like. Glancing through different websites for different ghostwriters and ghostwriting services can ensure that you get a quality ghostwriter who best meets your particular requirements. You can even consider securing a job posting for one of the ghostwriting services sites. Consolidate data, for example, your necessities and basics and your economic plan."
                            />
                            <Accordion
                                title="Ghostwriter for Hire- Completed work through Our Service"
                                content="Our primary thought is to give you a ghostwriter for hire and ghostwriting services that you can easily rely on to achieve amazing content. There are several things that you should consider when you hire a ghostwriter."
                            />
                            <Accordion
                                title="The Expenses of Hiring a Ghostwriter"
                                content="The expense of contracting a ghostwriter varies enormously, relying upon the project's circumstances, the skill of the writer, the many-sided tone of the topic, its complexity, and that's just the origin. When you hire a ghostwriter, you're spending their experience, ability, skill, and time."
                            />
                            <Accordion
                                title="Do you offer any guarantees?"
                                content="Google suggests staying away from organizations that promise you rankings. Authors Everest is a leading digital marketing agency that consistently provides our clients the highest level of service and results. While we cannot guarantee top rankings, we have a verified track record of delivering our clients' results. Check out our case studies to learn how we have been a valuable partner to many successful businesses."
                            />

                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default AccordionPage;