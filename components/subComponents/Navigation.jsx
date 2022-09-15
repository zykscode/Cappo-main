import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import styles from './styles.module.css'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const variant = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

export const Navigation = ({ isOpen }) => (
    <div className="mx-auto flex flex-col justify-center gap-8">
        <motion.ul
            variants={variants}
            className={`flex flex-col justify-center gap-8 to-blue-600 ${styles.ul}`}
        >
            {itemIds.slice(0, 4).map((i) => (
                <MenuItem i={i} key={i} />
            ))}
            <motion.div
                variants={variant}
                className="mx-auto mt-4  flex items-center justify-evenly gap-3 p-4 "
            >
                <div className="my-auto">
                    <motion.a
                        variants={variant}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className=" my-auto cursor-pointer text-2xl capitalize text-white"
                    >
                        login
                    </motion.a>
                </div>
                <div className="my-auto">
                    <span className="text-4xl text-white/20"> | </span>
                </div>
                <div className="my-auto mr-0">
                    <motion.button
                        variants={variant}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="my-auto  rounded-3xl  bg-blue-500 p-2  text-2xl capitalize text-white"
                    >
                        register
                    </motion.button>
                </div>
            </motion.div>
        </motion.ul>
    </div>
)

const itemIds = ['Products', 'Features', 'About', 'Contact', 'Login', 'Register']
