import { Menu } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import NavLink from './NavLink'
import logo from '../public/static/images/logo1.svg'
import { MenuToggle } from './subComponents/MenuToggle'

import { useRef } from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'

import { Navigation } from './subComponents/Navigation'
import styles from './subComponents/styles.module.css'
import Image from 'next/image'

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        {...props}
    />
)

const sidebar = {
    open: (height = 1000, width) => ({
        clipPath: `circle(${height * 2 + 300}px at calc(100vw - 20px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: `circle(20px at calc(100vw - 40px) 40px)`,
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
}

const variants = {
    open: { opacity: 1, x: 0, width: '100vw' },
    closed: { opacity: 1, x: 0 },
}

const navs = ['Products', 'Features', 'About', 'Contact']

const Header = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const [navShow, setNavShow] = useState(false)

    const onToggleNav = () => {
        setNavShow((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden'
            }

            return !status
        })
    }

    return (
        <header className=" mx-auto mt-2   flex max-w-[1200px] items-center justify-between  p-2  text-white lg:flex-row">
            <div className="min-h-[40px] w-[135px]">
                <Image alt="logo" src={logo} />
            </div>
            <div className="my-auto hidden gap-4 lg:flex lg:gap-8  lg:text-base">
                <nav className="flex items-center gap-8">
                    <NavLink navs={navs} />
                </nav>
                <div className="my-auto ml-4 flex items-center lg:ml-[56px]">
                    <a
                        href="#"
                        style={{
                            fontFamily: 'Rubik',
                            fontStyle: 'normal',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '150%',
                        }}
                        className="cursor-pointer capitalize text-white"
                    >
                        login
                    </a>
                    <span className="mx-6 text-white/20"> | </span>
                    <button className="flex h-[52px] w-[130px] items-center justify-center rounded-[32px] bg-[#3671E9]  capitalize text-white">
                        <h3
                            style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontSize: '16px',
                                fontWeight: 500,
                                lineHeight: '150%',
                            }}
                        >
                            register
                        </h3>
                    </button>
                </div>
            </div>
            <div className="justify-end lg:hidden ">
                <motion.nav animate={isOpen ? 'open' : 'closed'} className="z-10 ">
                    <motion.div className={` z-10  ${styles.background}`} variants={sidebar}>
                        <Navigation />
                    </motion.div>

                    <MenuToggle
                        toggle={() => {
                            toggleOpen()
                            onToggleNav()
                        }}
                    />
                </motion.nav>
            </div>
        </header>
    )
}

export default Header
