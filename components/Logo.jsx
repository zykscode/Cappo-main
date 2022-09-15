import { FaEthereum } from '@react-icons/all-files/fa/FaEthereum'
import { AiOutlineCopyrightCircle } from '@react-icons/all-files/ai/AiOutlineCopyrightCircle'
import React from 'react'

const Logo = ({ bg, text }) => {
    return (
        <div className={`flex gap-4 bg-clip-content  text-${text}`}>
            <div className={`flex  rounded-full bg-[${bg}] h-[40px] w-[40px] `}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-390.869 -75.0002 336.9 673"
                    className="h-8 text-2xl "
                >
                    <path
                        d="M 0 523 M 0 0 A 75 75 0 1 0 -0.738 523 V 598 A 1 1 0 0 1 0 -75 Z"
                        stroke="#FFFFFF"
                        strokeWidth="6"
                        fill="currentColor"
                    />
                </svg>{' '}
                <div className=" my-auto flex flex-col gap-y-0">
                    <FaEthereum />
                </div>
            </div>

            <div
                style={{
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'semi Bold',
                    fontWeight: 600,
                    lineHeight: '21.78px',
                    letterSpacing: '0.04em',
                    textAlign: 'left',
                }}
                className="my-auto h-[22px] w-[79px] uppercase"
            >
                CRaPPO
            </div>
        </div>
    )
}

export default Logo
