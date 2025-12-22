import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItems'
import logo from "../public/assets/icons/logo.svg"
import UserDropdown from './UserDropdown'
import { searchStocks } from '@/lib/actions/finnhub.action'

const Header = async ({user}: {user: User }) => {
    const initialStocks = await searchStocks()
  return (
    <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
            <Link href="/">
                <Image src={logo} alt='signalist logo'  width={140} height={32} className='h-8 w-auto cursor-pointer'/>
            </Link>
            <nav className='hidden sm:block'>
               <NavItem initialStocks={initialStocks} />
            </nav>
                <UserDropdown user={user} initialStocks={initialStocks} />
        </div>
    </header>
  )
}

export default Header