import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/header.svg'

function LoginHeader() {
    return (
        <div className="login-header">
            <div className="header-common-inner-before-login">
                <div className="header-logo">
                    <Link href='/'>
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <Image src={logo} alt="Blue Navbar Logo" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default LoginHeader