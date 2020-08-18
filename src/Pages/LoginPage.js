import React from "react";
import logo from '../Assets/logo.png'
import { Input } from "../Components/Objects";

export function LoginPage( {} ) {
    return <div className={'page login'}>
        <Header />
        <Body />
        <Footer />
    </div>
}

function Header() {
    return <div className={'header'}>
        <Input label={'Phone, email, or username'} />
        <div>
            <Input label={'Password'} type={'password'} />
            <button className={'tertiary'}>
                Forgot Password?
            </button>
        </div>
        <button className={'secondary'}>
            Log in
        </button>
    </div>
}

function Body() {
    return <div className={'content'}>
        <div className={'call-to-action'}>
            <div className={'logo-container'}>
                <img src={logo} alt={'logo'} />
            </div>
            <span className={'title'}>See what's happening in the world right now</span>
            <span className={'subtitle'}>Join Twitter today.</span>
            <button className={'primary'}>
                Sign up
            </button>
            <button className={'secondary'}>
                Log in
            </button>
        </div>
    </div>
}

function Footer() {
    return <div className={'footer'}>
        {
            footerItems.map(item => {
                return <a className={'item'} href={'/'} key={footerItems.indexOf(item)}>
                    {item.name}
                </a>
            })
        }
    </div>
}

const footerItems = [
    {
        name : 'About'
    },
    {
        name : 'Help Center'
    },
    {
        name : 'Terms'
    },
    {
        name : 'Privacy policy'
    },
    {
        name : 'Cookies'
    },
    {
        name : 'Ads info'
    },
    {
        name : 'Blog'
    },
    {
        name : 'Status'
    },
    {
        name : 'Jobs'
    },
    {
        name : 'Brand'
    },
    {
        name : 'Advertise'
    },
    {
        name : 'Marketing'
    },
    {
        name : 'Businesses'
    },
    {
        name : 'Developers'
    },
    {
        name : 'Directory'
    },
    {
        name : 'Settings'
    },
    {
        name : '© 2020 Not-Twitter, Inc.'
    },
]
