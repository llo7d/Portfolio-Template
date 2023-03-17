import React from 'react'

const Hero = () => {
    return (
        <>
            {/* <!-- Section One --> */}
            <section className="mx-auto h-auto px-3 pt-20 text-primary sm:max-w-4xl md:max-w-4xl md:px-6 lg:max-w-5xl lg:pt-3">
                <div className="flex flex-col items-center gap-6 font-poppins font-semibold sm:gap-3">
                    <div type="button" className="inline-flex flex-wrap justify-center gap-3 text-center text-5xl sm:text-6xl">
                        <div className="inline-flex after:text-secondary after:content-[',']">Hi</div>
                        I'm
                        <span className="before:text-secondary before:content-['.']">Peter</span>
                    </div>
                    <div className="inline-flex flex-wrap justify-center text-2xl sm:text-4xl">
                        A full stack
                        <div className="text-secondary">-</div>
                        Developer
                    </div>
                    <div className="relative flex-none">
                        {/* <!-- Hero Image --> */}
                        <div className="z-10 flex">
                            <img className="overflow-hidden object-cover object-top sm:h-[500px] sm:w-[500px]" src="./assets/img/hero/person.png" alt="Peter LIoyd" />
                            {/* <!-- Scroll Down Button --> */}

                            {/* <!-- Just remove the "hidden" show scroll button on other screen size --> */}
                            <div className="absolute bottom-12 left-[46%] z-20 hidden sm:bottom-8 sm:left-[45%] lg:block">
                                <button className="navMenuAbout inline-flex h-32 w-16 flex-col items-center justify-center gap-2 rounded-full border border-primary/5 bg-white/5 backdrop-blur-sm sm:h-40 sm:w-20">
                                    <svg className="h-5 w-5 fill-tertiary" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 19.575q-.2 0-.375-.063q-.175-.062-.325-.212l-6.6-6.6q-.3-.3-.3-.713q0-.412.3-.712t.7-.3q.4 0 .7.3l4.9 4.9v-11.2q0-.425.288-.7Q11.575 4 12 4t.713.287Q13 4.575 13 5v11.175l4.9-4.9q.3-.3.7-.3q.4 0 .7.3q.3.3.3.712q0 .413-.3.713l-6.6 6.6q-.15.15-.325.212q-.175.063-.375.063Z" />
                                    </svg>
                                    <span className="px-3 font-open-sans text-sm font-semibold text-senary">Scroll Down</span>
                                </button>
                            </div>
                            {/* <!-- End Scroll Down Button --> */}
                        </div>
                        {/* <!-- hero Image --> */}

                        {/* <!-- Filter Image --> */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141416]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-primary/30 blur-lg"></div>
                        {/* <!-- End Filter Image --> */}
                    </div>
                </div>
            </section>
            {/* <!-- End Section One --> */}
        </>
    )
}

export default Hero