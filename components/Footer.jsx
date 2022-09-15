import React from 'react'
import { PageSocial } from './subComponents/PageSocial'
import CryptoLogos from './subComponents/CryptoLogos'
import logo from '../public/static/images/logo1.svg'
import Payment from './Payment'
import styles from './pageStyles.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer id="footer" className="   ">
            <div className="container mx-auto">
                <div className=" flex flex-col  gap-12 text-white lg:flex-row">
                    <div className="mx-auto mb-6 max-w-[285px] flex-1 lg:mx-0">
                        <Image alt="alt" src={logo} />
                    </div>
                    <div className="flex flex-1 flex-col gap-16 p-2 lg:flex-row">
                        <div className="w-full text-center lg:text-left">
                            <div className={`mb-6 text-base  ${styles.mediumWhite}`}>
                                Quick Links
                            </div>
                            <ul className={`text-[#f2f2f2] ${styles.smallText} space-y-4`}>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full text-center lg:text-left">
                            <div className={`mb-6 text-base  ${styles.mediumWhite}`}>
                                Resources Links
                            </div>
                            <ul className={`text-[#E0E0E0] ${styles.smallText} space-y-4`}>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Download Whitepapper
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Smart Token
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Blockchain Explore
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Crypto API
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue transition" href="#">
                                        Interest
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col text-center lg:text-left">
                        <div className="lg:ml-[104px]">
                            <h3 className={`h3 mb-10 ${styles.largeText}`}>
                                We accept following payment systems
                            </h3>
                            <div className="">
                                <Payment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-12">
                <div className="container mx-auto flex flex-col items-center gap-y-6 text-white lg:flex-row lg:justify-between lg:gap-y-0">
                    <div className={`min-h-[28px] max-w-[391px] ${styles.normalTextWhite}`}>
                        © 2022 CRAPPO. All rights reserved.
                    </div>
                    <div className=" flex justify-between ">
                        <PageSocial />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
