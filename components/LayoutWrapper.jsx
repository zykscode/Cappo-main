import SectionContainer from './SectionContainer'
import Footer from './Footer'
import styles from './pageStyles.module.css'
import Hero from '../public/static/images/hero.png'
import ribbon1 from '../public/static/images/hero-ribbon-1.png'
import ribbon2 from '../public/static/images/hero-ribbon-2.png'

import Header from './Header'
import { FaChevronCircleRight } from '@react-icons/all-files/fa/FaChevronCircleRight'

import { motion, useCycle } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'

const LayoutWrapper = ({ children }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <SectionContainer>
            <div>
                <div className="min-h-[850px] max-w-[1440px] bg-[url('../public/static/images/hero-bg.png')] px-3">
                    <Header />
                    <section className="  text-white  ">
                        <div className="container mx-auto mt-[51px] max-w-[1220px]">
                            <div className="flex flex-col items-center justify-center lg:flex-row  lg:justify-between">
                                <div
                                    data-aos="fade-right"
                                    className="mx-auto max-w-[588px]  lg:left-0 lg:max-h-[468px]"
                                >
                                    <div className="flex min-h-[40px] max-w-[365px] items-center  rounded-3xl bg-[#ffffffa1]">
                                        <button className="top-[80px] flex  h-[32px] w-[113px] items-center justify-center rounded-[32px] bg-[#FFFFFF]  capitalize">
                                            <h3
                                                className="min-h-[24px] max-w-[81px] text-[#0D0D2B]"
                                                style={{
                                                    fontFamily: 'Rubik',
                                                    fontStyle: 'normal',
                                                    fontSize: '16px',
                                                    lineHeight: '150%',
                                                }}
                                            >
                                                75% SAVE
                                            </h3>
                                        </button>
                                        <span
                                            className="mr-[11px] h-[28px] w-[221px]"
                                            style={{
                                                fontFamily: 'Rubik',
                                                fontStyle: 'normal',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                                lineHeight: '148%',
                                            }}
                                        >
                                            For the Black Friday weekend
                                        </span>
                                    </div>
                                    <div className={`${styles.largeH1Left}   mt-[24px] `}>
                                        <h2>Fastest & secure platform to invest in crypto</h2>
                                    </div>
                                    <div
                                        className={`my-[24px]  max-h-[56px] max-w-[435px] ${styles.normalTextGrey}`}
                                    >
                                        {' '}
                                        <h3>
                                            Buy and sell cryptocurrencies, trusted by 10M wallets
                                            with over $30 billion in transactions.{' '}
                                        </h3>
                                    </div>

                                    <button
                                        className={`mt-[32px]  flex h-[64px] w-[202px] items-center justify-center gap-[24px] rounded-[32px] bg-[#3671E9]   text-white ${styles.mediumCenter}`}
                                    >
                                        <h3 className="min-h-[27px]">Try for FREE</h3>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            className="h-[32px] w-[32px]"
                                            stroke-width="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="  top-0 min-h-[585.15px] max-w-[604px] "
                                    data-aos="zoom-in"
                                >
                                    <Image alt="alt" src={Hero} />{' '}
                                </div>
                            </div>
                        </div>
                        <div className="absolute  top-[389px]">
                            <div className="ml-[131px] mt-[43.81px]" data-aos="fade-right">
                                <Image alt="alt" src={ribbon1} />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mx-auto  px-3">
                    {children}

                    <Footer />
                </div>
            </div>
        </SectionContainer>
    )
}

export default LayoutWrapper
