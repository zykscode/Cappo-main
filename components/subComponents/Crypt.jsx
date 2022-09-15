import React, { useState } from 'react'
import cs from 'classnames'
import { motion } from 'framer-motion'

const Crypt = ({ styles, action }) => {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen((isOpen) => !isOpen)
    }

    let toggleClassCheck = isOpen ? ' active' : ''

    return (
        <div
            key={action.name}
            className={`${toggleClassCheck} cryptoCard mx-auto flex min-h-[433px]  max-w-[370px] flex-col justify-evenly rounded-2xl bg-white  shadow-2xl   lg:max-w-[370px] `}
        >
            <a className={cs(styles.action, styles[action.name])} href="#~" title={action.title}>
                <div className={styles.actionBg}>
                    <div className={styles.actionBgPane} />
                </div>
                <div className={styles.actionBg}>
                    <span className={`h-[80px] w-[80px]  rounded-full bg-[${action.iconBg}]`}>
                        {action.icon}
                    </span>
                </div>
            </a>

            <div className={`${styles[action.name]} mx-auto  flex flex-col items-center  px-2 `}>
                <div className="flex">
                    <h3 className="text-[32px] font-bold capitalize">{action.name}</h3>
                    <div className="active:text-[#fffff] text-lg font-medium text-[#BDBDBD] active:opacity-0">
                        {action.abbr}
                    </div>
                </div>
                <p className="mb-6 text-center  text-base text-[#828282] active:text-[#ffffff]">
                    {action.content}
                </p>

                <div className="">
                    <motion.div
                        layout
                        data-isOpen={isOpen}
                        initial={{ borderRadius: 50 }}
                        className={`${styles.parent}`}
                        onClick={handleClick}
                    >
                        <motion.div layout className={`${styles.child}`} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Crypt
