import Link from 'next/link'
import React from 'react'

const NavLink = ({ navs }) => {
    return (
        <>
            {navs.map((nav) => {
                return (
                    <Link key={nav} href="/">
                        <a
                            style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '28px',
                                letterSpacing: '0.01em',
                            }}
                            className="cursor-pointer border-b border-transparent text-white transition-all hover:border-blue-500"
                        >
                            {nav}
                        </a>
                    </Link>
                )
            })}
        </>
    )
}

export default NavLink
