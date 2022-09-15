import { FaEthereum } from '@react-icons/all-files/fa/FaEthereum'
import { SiLitecoin } from '@react-icons/all-files/Si/SiLitecoin'
import React, { useEffect, useState } from 'react'
import styles from './cryptoCard.module.css'
import cs from 'classnames'
import { motion } from 'framer-motion'
const Crypto = [
    {
        name: 'bitcoin',
        abbr: 'BTC',
        bg: 'fffff',
        iconBg: '#ffff',
        active: true,
        content: 'Digital currency in which a record of transactions is maintained.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"></path>
            </svg>
        ),
    },
    {
        name: 'ethereum',
        abbr: 'ETH',
        bg: '#ffff',
        active: false,
        iconBg: '#1181E8',
        content: 'Blockchain technology to create and run decentralizeddigital applications.',
        icon: (
            <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>{' '}
            </svg>
        ),
    },
    {
        name: 'litecoin',
        abbr: 'LTC',
        bg: '#ffff',
        active: '',
        iconBg: false,
        content: 'Cryptocurrency that enables instant payments to anyone in the world.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z"></path>
            </svg>
        ),
    },
]

const CryptoCard = () => {
    const [active, setActive] = useState(null)

    // const handleClick = () => {
    //     useEffect(() => {
    //         function clickHandle() {}
    //         window.addEventListener('click', handleUserKeyPress)

    //         return () => {
    //             window.removeEventListener('keydown', handleUserKeyPress)
    //         }
    //     }, [])
    // }

    return (
        <div
            id="myDiv"
            className="mx-auto flex flex-col  justify-center gap-y-4 py-6  lg:flex-row lg:gap-x-[45px]  "
        >
            {Crypto.map((action, i) => {
                return (
                    <div
                        key={action.name}
                        className={`${
                            action.active ? 'bg-[#2B076E]' : ' '
                        }  cryptoCard mx-auto flex min-h-[433px] max-w-[370px]  cursor-pointer flex-col justify-evenly rounded-2xl sm:shadow-2xl lg:max-w-[370px]   lg:shadow-none `}
                    >
                        <a
                            className={cs(styles.action, styles[action.name])}
                            href="#~"
                            title={action.title}
                        >
                            <div className={styles.actionBg}>
                                <div className={styles.actionBgPane} />
                            </div>
                            <div className={styles.actionBg}>
                                <span
                                    className={`bg-{action.fill} h-[80px] w-[80px] rounded-full bg-[${action.iconBg}]`}
                                >
                                    {action.icon}
                                </span>
                            </div>
                        </a>

                        <div
                            className={`${
                                styles[action.name]
                            } mx-auto  flex flex-col items-center  px-2 `}
                        >
                            <div className="flex">
                                <h3
                                    className={`text-[32px] font-bold capitalize ${
                                        action.active ? 'text-[#FFFFFF]' : ''
                                    } `}
                                >
                                    {action.name}
                                </h3>
                                <div
                                    className={`text-lg font-medium  ${
                                        action.active
                                            ? 'text-[#FFFFFF] opacity-70'
                                            : 'text-[#BDBDBD] '
                                    }`}
                                >
                                    {action.abbr}
                                </div>
                            </div>
                            <p
                                className={` text-center  text-base  ${
                                    action.active ? 'text-[#FFFFFF]' : ' text-[#828282]'
                                } `}
                            >
                                {action.content}
                            </p>
                        </div>

                        <div className="">
                            {action.active ? (
                                <button
                                    className={`mx-auto flex  h-[64px] w-[205px] flex-row items-center justify-center rounded-[32px] bg-[#3671E9] text-white   lg:gap-[24px]`}
                                >
                                    <h3 className="min-h-[27px] w-[109px] ">Start mining</h3>
                                    <svg
                                        className="my-4 h-[32px]  w-[32px] rounded-full bg-white fill-[#3671E9]"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path>
                                    </svg>
                                </button>
                            ) : (
                                <div className="">
                                    <svg
                                        className="mx-auto my-4 h-[64px]  w-[64px] rounded-full bg-[#3671E9]  bg-clip-padding fill-white"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CryptoCard
