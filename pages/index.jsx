import CryptoCard from '../components/subComponents/CryptoCard'
import styles from '../components/pageStyles.module.css'
import Image from 'next/image'
import ribbon2 from '../public/static/images/hero-ribbon-2.png'
import Me from '../public/static/images/img.png'
import Why from '../public/static/images/whyimg.png'
import Feature from '../public/static/images/feature-3-img.png'
import { Table } from 'flowbite-react'
import { useEffect } from 'react'
import { FcGlobe } from '@react-icons/all-files/fc/FcGlobe'

export default function Home() {
    return (
        <>
            <section data-aos="fade-up" className=" relative mx-auto max-w-[1220px]">
                <div className="mx-auto mt-[0px] hidden w-[355.17px] lg:absolute  lg:ml-[1070px]  lg:block   lg:h-[355.17px] ">
                    <div
                        className="overflow-hidden rounded-b-full lg:overflow-visible"
                        style={{
                            height: '130px',
                            width: '260px',
                            marginTop: '130px',
                            marginRight: '105.7px',
                            rotate: '330deg',

                            background:
                                'linear-gradient(120deg, rgba(255, 255, 255, 0.08) 24.01%, rgba(53, 6, 140, 0.01) 71.35%)',
                        }}
                    ></div>
                </div>
                <div className="my-4  flex flex-col items-center justify-between gap-y-8 align-middle md:flex-row lg:my-[100px]  lg:gap-[99px]">
                    <div className="flex h-[92px] w-[334px] ">
                        <div className="flex h-[80px] w-[80px] justify-center rounded-full bg-slate-900 align-middle">
                            <svg
                                width="40px"
                                className=" my-auto mx-auto fill-[#3671E9]"
                                height="40px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" />
                                <path d="M192,432H80V208H192Z" />
                                <path d="M336,432H224V160H336Z" />
                                <path d="M479.64,432h-112V96h112Z" />
                            </svg>
                        </div>
                        <div className="h-[92px] text-white">
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '40px',
                                    fontWeight: '700',
                                    lineHeight: '60px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                }}
                            >
                                $30B
                            </h3>
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                    letter: '1%',
                                    color: '#E0E0E0',
                                }}
                            >
                                Digital Currency Exchanged
                            </h3>
                        </div>
                    </div>
                    <div className="flex h-[92px] w-[334px] gap-6">
                        <div className="flex h-[80px] w-[80px] justify-center rounded-full bg-slate-900 align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" my-auto mx-auto"
                                height="40px"
                                width="40px"
                                viewBox="2 1 16 21"
                            >
                                <path
                                    d="M2 22a8 8 0 1116 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                    stroke=""
                                    strokeWidth=""
                                    fill="#3671E9"
                                />
                            </svg>
                        </div>
                        <div className="h-[92px] text-white">
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '40px',
                                    fontWeight: '700',
                                    lineHeight: '60px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                }}
                            >
                                10M+
                            </h3>
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                    letter: '1%',
                                    color: '#E0E0E0',
                                }}
                            >
                                Trusted Wallets Investor
                            </h3>
                        </div>
                    </div>
                    <div className="flex h-[92px] w-[334px] gap-6">
                        <div className="flex h-[80px] w-[80px] justify-center rounded-full bg-slate-900 align-middle hover:animate-spin">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                version="1"
                                viewBox="0 0 48 48"
                                enableBackground="new 0 0 48 48"
                                className=" my-auto mx-auto"
                                height="40px"
                                width="40px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#7CB342"
                                    d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                                ></path>
                                <path
                                    fill="#0277BD"
                                    d="M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex h-[92px] flex-col text-white">
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '40px',
                                    fontWeight: '700',
                                    lineHeight: '60px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                }}
                            >
                                195
                            </h3>
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                    letter: '1%',
                                    color: '#E0E0E0',
                                }}
                            >
                                Countries Supported
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" my-4 text-white lg:my-[100px]">
                <div className="container mx-auto max-w-[1220px] overflow-clip">
                    <div
                        data-aos="zoom-in"
                        data-aos-offset="240"
                        className="container absolute -ml-[402.86px] mt-[125.8px]"
                    >
                        <Image alt="alt" src={ribbon2} />
                    </div>
                    <div className="flex flex-col items-center gap-x-8 lg:flex-row">
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="240"
                            className="  top-0 order-2   min-h-[473px] max-w-[650px]  lg:order-1"
                        >
                            <Image alt="alt" src={Why} />
                        </div>

                        <div
                            data-aos="fade-left"
                            data-aos-offset="200"
                            className=" right-0 top-[76.97px]  order-1 h-[318.89px] max-w-[480px]   lg:order-2"
                        >
                            <h2
                                className=" h-[119.95px]"
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '40px',
                                    fontWeight: '700',
                                    lineHeight: '60px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                }}
                            >
                                Why you should choose CRAPPO
                            </h2>
                            <h2
                                className="mt-[24px] max-w-[408px]"
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    color: '#E0E0E0',
                                }}
                            >
                                Experience the next generation cryptocurrency platform. No financial
                                borders, extra fees, and fake reviews.{' '}
                            </h2>

                            <button className="mt-[32px]  flex h-[59px] w-[146px] items-center justify-center gap-[24px] rounded-[32px] bg-[#3671E9]   text-white">
                                <h3
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontStyle: 'normal',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        lineHeight: '27px',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                    }}
                                >
                                    Learn More
                                </h3>
                            </button>
                        </div>
                    </div>
                    <div className=" -mt-[233px]  -mr-0 h-[240px]  w-[240px]   lg:ml-[1116px] ">
                        <div
                            className="hidden overflow-hidden  rounded rounded-b-full bg-green-300 lg:flex lg:overflow-visible"
                            style={{
                                height: '120px',
                                width: '240px',
                                marginTop: '120px',
                                marginRight: '105.7px',
                                background: '../public/static/images/why-model-2.png',
                            }}
                        ></div>
                    </div>
                </div>
                <section
                    data-aos="zoom-in"
                    data-aos-offset="240"
                    className="mx-auto min-h-[457px] max-w-[1220px] lg:mt-[100px]"
                >
                    <div className="">
                        <h2 className={`${styles.largeH2}  text-center text-white`}>
                            Check how much you can earn
                        </h2>
                        <h3
                            className={`${styles.normalTextGrey} mx-auto mt-[24px] max-w-[622px] text-center text-white`}
                        >
                            Let’s check your hash rate to see how much you will earn today,
                            Exercitation veniam consequat sunt nostrud amet.
                        </h3>
                    </div>
                </section>
            </section>
            <section className="mx-auto flex  max-w-[1440px] flex-col bg-white lg:-mt-[155px]">
                <section
                    data-aos="zoom-in"
                    data-aos-offset="240"
                    className="-mt-[155px] flex min-h-[371px] max-w-[942px] flex-col items-center lg:mx-[249px]"
                >
                    <div
                        className={` flex  w-full flex-col   rounded-t-2xl bg-[#fbfcfe] p-12 lg:h-[155px]`}
                    >
                        <form
                            action=""
                            className=" flex   flex-col items-center justify-between gap-4 lg:flex-row lg:gap-12"
                        >
                            <input
                                type="text"
                                className="outline-none"
                                placeholder="Enter your hash rate"
                            />
                            <select>
                                <option value="">TH/s</option>
                                <option value="">H/s</option>
                                <option value="">KH/s</option>
                                <option value="">MH/s</option>
                                <option value="">GH/s</option>
                            </select>

                            <button className="  flex h-[59px] w-[147px] items-center justify-center rounded-[32px] bg-[#3671E9] text-white   lg:gap-[24px]">
                                <h3
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontStyle: 'normal',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        lineHeight: '27px',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                    }}
                                >
                                    Calculate
                                </h3>
                            </button>
                        </form>{' '}
                    </div>

                    <div className="ml-12 flex min-h-[216px] w-full flex-col rounded-br-2xl px-4 lg:px-0">
                        <h3 className={` mt-[48px] text-[#3671E9]`}>ESTIMATED 24 HOUR REVENUE:</h3>
                        <div className="mt-[16px] flex  flex-col">
                            <h3 className={`${styles.textBig}`}>
                                0.055 130 59 ETH <span className="text-[#3671E9]">($1275)</span>
                            </h3>
                            <p className={`${styles.normalTextGrey}   mt-1 text-[#828282]`}>
                                Revenue will change based on mining difficulty and Ethereum price.
                            </p>
                        </div>
                    </div>
                </section>{' '}
                <h2
                    data-aos="fade-up"
                    data-offset-aos="300"
                    className={`${styles.largeH2} text-[0D0D2B] mx-auto mb-2 mt-[100px] min-h-[120px] max-w-[741px] text-center lg:mb-[64px] `}
                >
                    Trade securely and market the high growth cryptocurrencies.
                </h2>
                <CryptoCard />
            </section>
            <div className="relative min-h-[1847px] overflow-clip bg-[#2B076E]">
                <div
                    className="absolute -top-[457px] ml-[151px] h-[686px]   w-[686px] flex-1 rotate-[90deg] rounded-full"
                    style={{
                        background:
                            'conic-gradient(from 180deg at 50% 50%, rgba(255, 255, 255, 0.16) 0deg, rgba(255, 255, 255, 0) 360deg)',
                    }}
                ></div>
                <section
                    data-aos="fade-up"
                    data-offset-aos="300"
                    className=" mx-auto flex  flex-col  items-center "
                >
                    <span
                        className={`min-h-[120px] max-w-[780px] text-center text-white lg:mt-[100px] ${styles.largeH2}`}
                    >
                        Market sentiments, portfolio, and run the infrastructure of your choice
                    </span>
                    <section className="container bg-[#2B076E] p-2">
                        <div className="mx-auto flex max-w-[1220px] flex-col justify-between lg:mt-[100px] lg:flex-row">
                            <div className="wax-w-[454px] left-0 order-2  mt-[24px] min-h-[219px]  flex-1 lg:order-1">
                                <h3
                                    className=" min-h-[48px]"
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        lineHeight: '48px',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: 'white',
                                    }}
                                >
                                    Invest Smart
                                </h3>
                                <h3
                                    className=" max-w-[408px]"
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '28px',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#E0E0E0',
                                    }}
                                >
                                    Get full statistic information about the behaviour of buyers and
                                    sellers will help you to make the decision.{' '}
                                </h3>

                                <button className="mt-[32px]  flex h-[59px] w-[146px] items-center justify-center gap-[24px] rounded-[32px] bg-[#3671E9]   text-white">
                                    <h3
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            lineHeight: '27px',
                                            color: '#FFFFFF',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Learn More
                                    </h3>
                                </button>
                            </div>
                            <div className="relative right-0   order-1 flex min-h-[427px] max-w-[580px] flex-1 flex-col flex-wrap lg:order-2">
                                <div className="min-h-[298px] max-w-[580px]   rounded-2xl bg-[#35068C] ">
                                    <div className="mx-auto mt-[40px] flex min-h-[50px] max-w-[500px] ">
                                        <div className="flex w-full  justify-between ">
                                            <div className="flex">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className="h-[40px] w-[40px] rounded-full bg-white fill-[#F9AA4B]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"></path>
                                                </svg>
                                                <div className="ml-[16px] flex flex-col">
                                                    {' '}
                                                    <div className="flex  items-center text-white">
                                                        <h3 className="text-[24px] font-bold capitalize">
                                                            bitcoin
                                                        </h3>
                                                        <div className="font-[600px]  mx-[8px] text-[16px] uppercase text-[#CFCFCF]">
                                                            Btc
                                                        </div>
                                                    </div>
                                                    <h3
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontStyle: 'Semi Bold',
                                                            fontSize: '14px',
                                                            fontWeight: 400,
                                                            lineHeight: '17px',
                                                            color: '#F2F2F2',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        0.00080 BTC
                                                    </h3>
                                                </div>
                                            </div>
                                            <div
                                                className="mt-[12px] text-[#42FFFF]"
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                +125%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-24px  mx-auto min-h-[136px] max-w-[500px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="161.917 298.498 666.6 96.52"
                                            className=""
                                        >
                                            {' '}
                                            <defs>
                                                <linearGradient
                                                    id="gradient"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                ></linearGradient>
                                            </defs>
                                            <path
                                                d="M166.5 394.7C165.5 394.7 164.7 395.1 163.3 395 161.8 394.9 161.5 394.6 162.5 394.2 161.2 392 165.9 388.7 181.3 381 202.6 370.4 213.1 369.9 233.8 378.5 242.8 382.2 244.9 382.6 254.1 382.1 267 381.3 274.4 377.9 290.6 364.9 311.1 348.6 329.7 342.1 347.6 345 358.2 346.7 364.7 350.5 376.5 361.8 382.2 367.2 389.1 372.6 391.7 373.7 399.3 376.8 410.2 376.2 424.2 371.7 441.3 366.2 449.5 366.4 468.9 372.4 488.2 378.5 498.1 379.1 505.1 374.3 507.8 372.5 514.6 365.1 520.2 357.9 526.9 349.4 532.5 343.6 536.5 341.3 542.5 337.7 543.1 337.7 572.6 337 601.6 336.3 602.9 336.2 610.2 332.7 621.7 327.3 632.7 324 642.8 323.1 658.5 321.7 660.3 321.1 667.3 315.5 677.2 307.7 681.3 306.5 701 305.1 713.5 304.3 720.7 303.1 725.7 301.2 734.4 297.7 742.7 297.6 748 300.9 750.2 302.2 757.9 309.1 765.2 316.2 781.5 332 787 335 798.4 334 802.9 333.7 811.1 331.8 816.6 330 823.1 327.8 827.1 327 828 327.9 828.8 328.7 828.6 329.6 827.3 330.4 823 333.2 807.5 337.3 798.6 338 790.3 338.6 788.4 338.3 782.4 335.2 778.5 333.3 768.8 325.4 760.1 317.1 745.7 303.5 744.2 302.4 739.3 302.4 736.4 302.4 730.9 303.6 727 305.1 722.2 307 713.8 308.5 700.6 309.6 680.4 311.4 677.6 312.2 670.1 318.7 663.6 324.3 658.6 326.1 646.5 327.1 633.1 328.2 624.5 330.5 610.3 337.1L598.9 342.4C549.5 342.4 542.3 342.8 539.5 344.3 535.3 346.4 528.2 354 519 366 515.5 370.6 510.2 375.9 507.1 378 499.3 383.2 487.5 382.9 470 377.1 450.8 370.8 441.6 370.5 425.8 375.6 409.9 380.7 397.8 381.1 389 376.9 385.9 375.4 378.9 369.9 373.6 364.7 368 359.2 361 354 356.8 352 350.5 349.1 348.4 348.8 336.8 349.3 320.5 349.9 312.1 353.6 291.9 369 273.7 382.9 268.5 385.2 253.9 386 243.1 386.6 241.9 386.4 232.5 382.2 223.6 378.2 221.4 377.7 210 377.7 197.8 377.7 196.9 377.9 186 383.2 179.7 386.3 172.1 390.4 169.1 392.3 165.2 394.7 163.2 395.3 162.5 394.2"
                                                stroke=""
                                                strokeWidth=""
                                                fill="#6EDCB5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="-mt-[55px] flex max-w-[580px] justify-between">
                                    <div className="flex min-h-[184px] max-w-[178px] flex-col rounded-2xl  bg-[#491F98] p-2 align-middle lg:ml-[64px]">
                                        <h3
                                            className="ml-[14px] mt-[24px] min-h-[58px]  max-w-[146px]"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'Semi Bold',
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                lineHeight: '28px',
                                                color: '#FFFFFF',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Increase in Trade
                                        </h3>
                                        <h3
                                            className="ml-[14px] mt-[16px] min-h-[29px]  max-w-[67px]"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'Bold',
                                                fontSize: '24px',
                                                fontWeight: 700,
                                                lineHeight: '29px',
                                                color: '#FFFFFF',
                                                textAlign: 'left',
                                                letterSpacing: '1%',
                                            }}
                                        >
                                            +75%
                                        </h3>{' '}
                                        <h3
                                            className="ml-[14px] mt-[16px] min-h-[19px] w-full  text-[16px]"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'Regular',

                                                fontWeight: 400,
                                                lineHeight: '19px',
                                                color: '#F2F2F2',
                                                textAlign: 'left',
                                                letterSpacing: '1%',
                                            }}
                                        >
                                            Sell option
                                        </h3>
                                    </div>
                                    <div className="i mb-[88px] mt-[12px] flex min-h-[84px] flex-col rounded-2xl bg-[#491F98] px-1 lg:mr-[56px] lg:w-[169px]">
                                        <h3
                                            className="mx-auto mt-[16px] min-h-[29px]  max-w-[82px]"
                                            style={{
                                                fontFamily: 'Inter',

                                                fontSize: '24px',
                                                fontWeight: 700,
                                                lineHeight: '29.05px',
                                                color: '#FFFFFF',
                                                textAlign: 'center',
                                            }}
                                        >
                                            $15.32
                                        </h3>
                                        <p
                                            className="mt-[4px] mb-[16px]  min-h-[19px]  w-full p-0"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: '16px',
                                                fontStyle: 'regular',
                                                fontWeight: 400,
                                                lineHeight: '19.39px',
                                                color: '#F2F2F2',
                                                textAlign: 'center',
                                                letter: '1%',
                                            }}
                                        >
                                            Price in dollar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <div className=" mt-[120px] min-h-[453px] max-w-[1255px]">
                    <div className="flex flex-col lg:flex-row">
                        <Image src={Me} alt="Detailed statistics" />
                        <div className="wax-w-[456px] ml-[89px]  mt-[105px] min-h-[247px]  flex-1 ">
                            <h3
                                className=" min-h-[48px]"
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '32px',
                                    fontWeight: '700',
                                    lineHeight: '48px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    color: 'white',
                                }}
                            >
                                Detailed Statistics
                            </h3>
                            <h3
                                className=" mt-[24px] max-w-[408px]"
                                style={{
                                    fontFamily: 'Rubik',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    color: '#E0E0E0',
                                }}
                            >
                                View all mining related information in realtime, at any point at any
                                location and decide which polls you want to mine in.{' '}
                            </h3>

                            <button className="mt-[32px]  flex h-[59px] w-[162px] items-center justify-center gap-[24px] rounded-[32px] bg-[#3671E9]   text-white">
                                <h3
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontStyle: 'normal',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        lineHeight: '27px',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                    }}
                                >
                                    Learn More
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex min-h-[334px] max-w-[1220px] flex-col items-center  justify-between gap-x-4 lg:mt-[120px] lg:mb-[100px] lg:flex-row">
                    <div className="wax-w-[454px] mx-auto mb-[29px] h-[295px] flex-1 items-center gap-x-4 lg:text-left ">
                        <h3
                            className=" mt-[10px]  min-h-[96px]"
                            style={{
                                fontFamily: 'Rubik',
                                fontSize: '32px',
                                fontWeight: '700',
                                lineHeight: '48px',
                                letterSpacing: '0em',

                                color: 'white',
                                fontStyle: 'bold',
                            }}
                        >
                            Grow your profit and track your investments
                        </h3>
                        <h3
                            className=" mt-[24px] min-h-[84px] max-w-[408px]"
                            style={{
                                fontFamily: 'Rubik',
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '28px',
                                letterSpacing: '0em',

                                color: '#E0E0E0',
                            }}
                        >
                            Use advanced analytical tools. Clear TradingView charts let you track
                            current and historical profit investments.
                        </h3>
                        <button className="mt-[32px]   flex h-[59px] w-[162px] items-center justify-center gap-[24px] rounded-[32px] bg-[#3671E9]   text-white">
                            <h3
                                style={{
                                    fontFamily: 'Rubik',
                                    fontStyle: 'normal',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    lineHeight: '27px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                }}
                            >
                                Learn More
                            </h3>
                        </button>
                    </div>
                    <div className=" z-20 h-[334px] max-w-[682px] flex-1 rounded-[16px] bg-[#35068C]  opacity-100 backdrop-blur-sm ">
                        <div>
                            <Image alt="alt" src={Feature} />
                        </div>
                    </div>
                </div>
                <div
                    className=" absolute right-0 bottom-0 -mr-[363px]  h-[343px] w-[686px] flex-1 rounded-t-full"
                    style={{
                        background:
                            'conic-gradient(from 180deg at 50% 50%, rgba(255, 255, 255, 0.1) 0deg, rgba(255, 255, 255, 0) 360deg)',
                    }}
                ></div>
            </div>
            <div className="flex min-h-[392px] max-w-[1440px]   flex-col justify-center bg-[url('../public/static/images/newsletter-bg.png')] bg-no-repeat ">
                <div className="container mx-auto flex min-h-[216px] max-w-[1220px] bg-[url('../public/static/images/newsletter-box(1).png')] bg-cover bg-no-repeat">
                    <div className="mx-auto mb-2 flex flex-col items-center justify-between rounded-r-2xl align-middle lg:flex-row">
                        <div className="m-12  flex min-h-[120px] max-w-[501px] flex-col ">
                            <h3 className={`${styles.textBig} text-white`}>Start mining now</h3>
                            <h3
                                className={`${styles.normalTextwhite} mt-4 max-w-[385px] text-white`}
                            >
                                Join now with CRAPPO to get the latest news and start mining now
                            </h3>
                        </div>
                        <div className=" flex min-h-[55px] flex-col items-center justify-center gap-2 align-middle lg:max-w-[566px]  lg:flex-row lg:gap-10">
                            <input
                                type="email"
                                className="input  h-[35px] w-full  border-0 border-b-2 border-white bg-[#3671E9] text-base text-white placeholder:text-base placeholder:text-white focus:border-0 focus:border-b-2 focus:border-white lg:w-[357px]"
                                placeholder="Enter your email"
                            />
                            <button className="  flex h-[55px] w-[152px] items-center justify-center gap-[24px] rounded-[32px] bg-[#ffffff]   text-black">
                                <h3
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontStyle: 'normal',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        lineHeight: '27px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Subscribe
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div
                    style={{
                        background:
                            'linear-gradient(120deg, rgba(255, 255, 255, 0.08) 24.01%, rgba(53, 6, 140, 0.01) 71.35%)',
                        transform: 'rotate(-30deg)',
                    }}
                    className=" top-[183px]  right-[0px] left-[1190px] mt-[55px] h-[130px] w-[260px] absolute rounded-b-full bg-white"
                ></div></div>
                <div className="wax-w-[610px] min-h-full flex-1 rounded-2xl bg-[#3506BC]">

                    </div>
                <div
                    style={{
                        background:
                            'linear-gradient(120deg, rgba(255, 255, 255, 0.08) 26.97%, rgba(255, 255, 255, 0) 71.35%)',
                    }}
                    className="  top-[558px] left-[1286px] mb-[67px]  h-[240px] w-[240px] rounded-b-full"
                ></div>
                <div className="  top-[417.8px] left-[402px] h-[602.86px] w-[949.93px] bg-pink-400 ">
                    
                    <div
                        style={{
                            position: '',
                            width: '120px',
                            height: ' 997.88px',
                            left: '461.33px',
                            top: '417.8px',
                            background:
                                'linear-gradient(180deg, rgba(255, 255, 255, 0) 34.75%, rgba(255, 255, 255, 0.1) 100%)',
                            transform: 'rotate(60deg)',
                        }}
                    ></div>
                </div> */}
            {/* </section>
        
            {/* <section className="mb-3 flex flex-col gap-8 bg-[#0D0D2B] lg:mx-[120px]  lg:h-[855px]   ">
               
                
            <section className=" bg-[#0D0D2B]"></section>
            

            <section className=" items-center bg-[#2B076E] flex flex-col lg:mx-[120px]">
            <h2
                    style={{
                        fontSize: '40px',
                        fontWeight: 700,
                        lineHeight: '60px',
                        letterSpacing: '0em',

                    }}
                    className="max-w-[758px] text-[#ffffff] text-center lg:pt-[100px]"
                >
                    Market sentiments, portfolio, and run the infrastructure of your choice         </h2>
                    <div className="container ">
                    <div className="flex flex-col items-center gap-x-8 lg:flex-row">
                           <div className="aos-init aos-animate right-0 pt-[10px] h-[219px] max-w-[454px] ">
                                <h3
                                    className=" h-[48px] text-white"
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        lineHeight: '48px',
                                        letterSpacing: '0em',
                                       
                                    }}
                                >
                                   Invest Smart
                                </h3>
                                <h3
                                    className="mt-[24px] w-[408px]"
                                    style={{
                                        fontFamily: 'Rubik',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '28px',
                                        letterSpacing: '0em',
                                       
                                        color: '#E0E0E0',
                                    }}
                                >
                                   Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.        </h3>

                                <button className="px-[16px] mt-[32px] py-[32px] flex h-[59px] w-[162px] items-center justify-center gap-[24px] rounded-[32px] bg-[#3671E9]   text-white">
                                    <h3
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            lineHeight: '27px',
                                            color: '#FFFFFF',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Learn More
                                    </h3>
                                </button>
                            </div> 
                            <div className=" aos-init aos-animate top-0 h-full w-[580px]  bg-black ">
                                ererefvfdbnfvjdfdjjrfvsjsvfsjsjfkfjjsjfjs fdsnjfsjfjjsnfbsvjfhsgfs
                                sf rfshfsfsfhsf fsj fshfs fsdifnirfr fr mjnrij fejfd
                            </div>

                            
                        </div>

                   

                    </div>
                    <div className="mt-[120px] bg-pink-400"></div>
            </section> */}{' '}
            */}
        </>
    )
}
