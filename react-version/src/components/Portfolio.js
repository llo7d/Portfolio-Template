import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <section id="sectionPortfolio" className="mx-auto h-auto px-6 py-28 text-primary sm:max-w-4xl sm:py-40 md:max-w-4xl lg:max-w-6xl lg:px-12">
                <div className="flex flex-col">
                    <div className="mb-10 flex-none">
                        {/* <!-- Section Title --> */}
                        <div className="inline-flex gap-2 font-open-sans text-xl font-bold">
                            <div className="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">Portfolio</div>
                        </div>
                        {/* <!-- End Section Title --> */}
                    </div>
                    <div className="mb-10 flex-1 font-open-sans leading-relaxed text-tertiary md:w-1/2 lg:w-2/5">This are some of the projects I have done from scrip tinging to web development I have tried a bunch of things.</div>
                    <div className="mb-10 flex-1 md:w-1/2 lg:w-2/5">
                        <div className="flex flex-wrap gap-3 font-poppins sm:gap-6">
                            <div className="inline-flex gap-2">
                                <div className="text-tertiary before:text-secondary before:content-['//']">Full-stack Website</div>
                            </div>
                            <div className="inline-flex gap-2">
                                <div className="text-tertiary before:text-secondary before:content-['//']">Blender Python Scripts</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Post Card --> */}
                <div className="space-y-16 sm:space-y-12">
                    <div className="flex flex-col gap-10 md:flex-row lg:gap-24">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-12 h-72 flex-1  sm:mt-0">
                            <img className="h-full w-full rounded-2xl object-cover object-center" src="./assets/img/portfolio/portfolio1.png" alt="Post" />
                        </a>
                        <div className="flex-none md:w-2/5 lg:w-2/6">
                            <div className="flex h-full items-end">
                                <div className="flex-1 space-y-8">
                                    <span className="rounded-md bg-quaternary py-2 px-6 font-open-sans font-bold text-secondary">Latest</span>
                                    <div className="space-y-8 font-poppins text-primary">
                                        <div className="text-3xl font-semibold">Portfolio</div>
                                        <div>Full stack Webs</div>
                                        <div>Built from scratch, using Next.js, Typescript, Tailwind and Firebase.</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-6 md:justify-start">
                                        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg bg-tertiary py-2 px-3 font-poppins text-sm before:content-['<'] after:content-['>'] hover:bg-quaternary hover:text-secondary">
                                            /
                                        </a>
                                        <div className="font-open-sans">
                                            <a href="https://example.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 hover:border-transparent hover:bg-senary hover:font-semibold hover:text-senary">
                                                SEE IT LIVE
                                                {/* <!-- Arrow top left --> */}
                                                <svg className="h-6 w-6 fill-primary group-hover:fill-tertiary" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z" />
                                                </svg>
                                                {/* <!-- End Arroe top left --> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 md:flex-row lg:gap-24">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-12 h-72 flex-1  sm:mt-0">
                            <img className="h-full w-full rounded-2xl border-transparent bg-secondary object-cover object-center hover:border hover:border-secondary/50" src="./assets/img/portfolio/portfolio1.png" alt="Post" />
                        </a>
                        <div className="flex-none md:w-2/5 lg:w-2/6">
                            <div className="flex h-full items-end">
                                <div className="flex-1 space-y-8">
                                    <div className="space-y-8 font-poppins text-primary">
                                        <div className="text-3xl font-semibold">360 Generator</div>
                                        <div>Blender Script</div>
                                        <div>Blender script that generates a 6.png images that generate a 360 render.</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-6 md:justify-start">
                                        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg bg-tertiary py-2 px-3 font-poppins text-sm before:content-['<'] after:content-['>'] hover:bg-quaternary hover:text-secondary">
                                            /
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Post Card --> */}
            </section></div>
    )
}

export default Portfolio