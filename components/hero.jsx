import { MoveRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* <Spotlight className="left-[-2rem] lg:left-[24rem] -top-[9.25rem]" /> */}
      <main className="relative">
        <div className="relative -mt-[65px]">
          <div className="sm:py-18 h-screen container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-20 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
            <div className="relative">
              <div className="mx-auto">
                <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
                  <div className="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                    <div className="flex flex-col items-center">
                      <div className="z-40 w-full flex justify-center -mt-4 lg:-mt-12 mb-8">
                        <div className="relative w-fit max-w-xl flex justify-center">
                          <a
                            target="_self"
                            className="announcement-link group/announcement relative flex flex-row items-center p-1 pr-3 text-sm w-auto gap-2 text-left rounded-full bg-opacity-20 border border-secondary-border/50 shadow-md overflow-hidden focus-visible:outline-none focus-visible:ring-brand-600 focus-visible:ring-2 focus-visible:rounded-full"
                            href="/launch-week"
                          >
                            <div className="text-primary-text inline-flex items-center bg-opacity-10 bg-accent-bg text-accent-text border border-secondary-strongerborder/60 group-hover/announcement:border-secondary-border/50 px-3 rounded-full text-sm py-1 announcement-badge">
                              Stunning Discounts
                            </div>
                            <span className="text-primary-text announcement-text">
                              Contact now
                            </span>
                            <MoveRight
                              strokeWidth={1}
                              className="text-primary-text ml-2 -translate-x-1 transition-transform group-hover/announcement:translate-x-0"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-70 group-hover/announcement:opacity-100 transition-opacity overflow-hidden rounded-full from-background-surface-100 to-background-surface-300 backdrop-blur-md " />
                          </a>
                        </div>
                      </div>
                      <h1
                        className={`bricolage text-foreground font-extrabold text-herosize text-3xl lg:text-6xl tracking-tight select-none`}
                      >
                        <span className="block cursor-pointer bg-gradient-to-r from-[#ac3fab] via-[#bc76bb] to-[#c30dc0] bg-clip-text text-transparent lg:mb-2">
                          End-to-End Electrical & Lighting Solutions
                        </span>
                      </h1>
                      <p className="pt-2  text-secondary-text my-3 text-sx sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
                        From supply to execution, we bring efficiency,
                        innovation, and brilliance to every project. Whether
                        it's residential, commercial, or industrial, we light up
                        your world with excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
