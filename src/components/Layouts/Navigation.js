import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import tw from "tailwind-styled-components"

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    const navItems = [
        {
            name: 'Deale',
            href: '/deale',
        },
        {
            name: 'Poczta',
            href: '/post',
        },
        {
            name: 'Historia',
            href: '/history',
        },
        {
            name: 'Statystyki',
            href: '/statistics',
        },
    ]

    return (
        <>
            {console.log(router)}
            <header className="bg-white border-b border-gray-100 py-[18px]">
                {/* Primary Navigation Menu */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/deale">
                                    <ApplicationLogo className="hover:cursor-pointer" />
                                </Link>
                            </div>

                            {/* Navigation Links */}
                            {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href="/"
                                    active={router.pathname === '/'}>
                                    Home
                                </NavLink>
                                <NavLink
                                    href="/deale"
                                    active={router.pathname === '/deale'}>
                                    deale
                                </NavLink>
                            </div> */}
                        </div>

                        {/* Settings Dropdown */}
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="mr-[12px]">
                                <Image src="/user-img.png" width="50px" height="50px"></Image>
                            </div>
                            <Dropdown
                                align="right"
                                width="48"
                                trigger={
                                    <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                        {/* <div>{user?.name}</div> */}

                                        <div className="ml-1">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                }>

                                {/* Authentication */}
                                <DropdownButton onClick={logout}>
                                    Logout
                                </DropdownButton>
                            </Dropdown>
                        </div>

                        {/* Hamburger */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setOpen(open => !open)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    {open ? (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Responsive Navigation Menu */}
                {open && (
                    <div className="block sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href="/deale"
                                active={router.pathname === '/deale'}>
                                deale
                            </ResponsiveNavLink>
                        </div>

                        {/* Responsive Settings Options */}
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-10 w-10 fill-current text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>

                                <div className="ml-3">
                                    <div className="font-medium text-base text-gray-800">
                                        {user?.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500">
                                        {user?.email}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                {/* Authentication */}
                                <ResponsiveNavButton onClick={logout}>
                                    Logout
                                </ResponsiveNavButton>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <Nav>
                <NavWrapper>
                    { navItems.map(item => (
                        <Link href={item.href} key={item.name}>
                            <NavItem $active={router.pathname === `${item.href}`}>{item.name}</NavItem>
                        </Link>
                    ))}
                </NavWrapper>
            </Nav>
        </>
    )
}

export default Navigation

const Nav = tw.nav`
    pt-[25px] pb-[21px]
`

const NavWrapper = tw.div`
    flex max-w-7xl mx-auto sm:px-6 lg:px-8
`

const NavItem = tw.div`
    mr-[50px] font-[600] border-b-2 pb-[9px] transition ease-in-out
    hover:text-[#4E2583] hover:cursor-pointer hover:border-[#4E2583]

    ${(p) => (p.$active ? "text-[#4E2583] border-[#4E2583]" : "text-[#5B5B5B] border-transparent")}
`