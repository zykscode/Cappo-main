import React from 'react'
import { FaBeer } from '@react-icons/all-files/fa/FaBeer'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { IoLogoWhatsapp } from '@react-icons/all-files/io/IoLogoWhatsapp'
import { RiWhatsappFill } from '@react-icons/all-files/ri/RiWhatsappFill'
import Link from 'next/link'
import { IconContext } from '@react-icons/all-files'

const FooterBase = () => {
    return (
        <div className="fle bg-clip-text text-white">
            <Link href="/">
                <a className=" hover:text-[#ff0000] ">
                    <FaYoutube />
                </a>
            </Link>
            <Link href="/">
                <a className=" hover:text-[#25D366]">
                    <FaWhatsapp />
                </a>
            </Link>
            <Link href="/">
                <a className="hover:text-[#ff0000]">
                    <FaInstagram />
                </a>
            </Link>
            <Link href="/">
                <a className=" hover:text-[#ff0000]">
                    <FaTwitter />
                </a>
            </Link>
            <Link href="/">
                <a className=" hover:text-[#0077b5]">
                    <FaLinkedin />
                </a>
            </Link>
        </div>
    )
}

export default FooterBase
