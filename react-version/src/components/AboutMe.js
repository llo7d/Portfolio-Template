import React from 'react'

const AboutMe = () => {
    return (
        <div>
            {/* <!-- Section Two --> */}
            <section id="sectionAbout" className="mx-auto h-auto px-6 py-28 text-primary sm:max-w-4xl sm:py-40 md:max-w-4xl lg:max-w-6xl lg:px-12">
                <div className="flex flex-col">
                    <div className="mb-12 flex-1 md:mb-0">
                        {/* <!-- Section Title --> */}
                        <div className="inline-flex gap-2 font-open-sans text-xl font-bold">
                            <div className="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">About Me</div>
                        </div>
                        {/* <!-- End Section Title --> */}
                    </div>

                    {/* <!-- Profile Detail --> */}
                    <div className="flex-1 space-y-6 md:space-y-0 lg:space-y-12">
                        <div className="flex md:justify-end">
                            <div className="space-y-6 md:basis-7/12 lg:flex-none lg:basis-1/2 lg:space-y-6">
                                <h2 className="font-poppins text-5xl md:text-6xl">Me... at a PC</h2>
                                <p className="break-words font-open-sans text-xl leading-loose text-tertiary">It did not start like this, I wasn't always just glued to the computer. I used to play a lot of Basketball 🏀.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 basis-full">
                                <div className="flex flex-col-reverse items-center gap-12 md:flex-row lg:gap-16">
                                    <div className="flex-none space-y-16 font-open-sans md:w-5/12">
                                        <div className="space-y-4">
                                            <span className="rounded-md bg-quaternary py-2 px-6 font-bold text-secondary">From</span>
                                            <div className="font-bold">Berlin, Germany</div>
                                            <div className="text-tertiary">Currently living in Berlin, I moved here with my Family when I was 15.</div>
                                        </div>
                                        <div className="space-y-4">
                                            <span className="rounded-md bg-quaternary py-2 px-6 font-bold text-secondary">School</span>
                                            <div className="font-bold">Bachelors in Mechatronics</div>
                                            <div className="text-tertiary">Well.. not really as I kind of dropped out after 4 months, but that was the start to my coding curiosity.</div>
                                        </div>
                                        <div className="space-y-4">
                                            <span className="rounded-md bg-quaternary py-2 px-6 font-bold text-secondary">Coding</span>
                                            <div className="font-bold">4 Years of Experience</div>
                                            <div className="text-tertiary">I started with Electronics and Arduinos back in 2017... But now Im really into web dev.</div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex-1 md:mt-0">
                                        <div className="relative">
                                            <img className="absolute inset-0" src="./assets/img/about/person.png" alt="Peter LIoyd" />
                                            <img src="./assets/img/about/bg.png" alt="Linear Bg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Profile Detail --> */}
                </div>
            </section>
            {/* <!-- End Section Two --> */}
        </div>
    )
}

export default AboutMe