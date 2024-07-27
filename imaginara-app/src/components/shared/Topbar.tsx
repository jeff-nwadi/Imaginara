"use client"

import Image from "next/image"
import Link from "next/link"
import Compass from "../icon/Compass"
import Home from "../icon/Home"
import Coffee from "../icon/Coffee"
import Message from "../icon/Message"
import Notification from "../icon/Notification"


import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Menu from "./menu"



function Topbar() {
    return(
        <>
          <nav className="bg-black 
          w-full 
          px-[1rem] 
           md:px-[2rem] 
           lg:px-[4rem] 
           py-[1rem] 
           flex 
           items-center
            justify-between ">
            {/* MOBILE SCREEN */}
            <div className="flex gap-5 items-center md:hidden">   
                <Link href="#">
                    <Image 
                        src="/logo.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className=""
                    />
                </Link>

                <div className="flex gap-7">
                    <SignedIn>
                        <Link href='/' className="flex
                         gap-1
                          text-[#A1A19F]
                           hover:text-[#fff] 
                           text-[15px] 
                           items-center">
                            <Home />
                            Home
                        </Link>
                    </SignedIn>
                   
                    <Link href='/Explore'className="flex 
                    gap-1 
                    text-[#A1A19F] 
                    hover:text-[#fff] 
                    text-[15px] 
                    items-center">
                        <Compass  />
                        Explore
                    </Link>
                </div>
            </div>

           
            <div className="right-section 
            flex 
            items-center 
            gap-5 
            relative
            md:hidden">
                 <UserButton afterSignOutUrl="/Explore" />
                  <Menu />
            </div>








            {/* BIGGER SCREEN */}

            <div className="
            hidden 
            md:flex 
            ">
                <div>
                    <Link href="#">
                        <Image 
                            src="/logo.svg"
                            alt="logo"
                            width={100}
                            height={100}
                            className=""
                        />
                    </Link>
                </div>
                
            </div>
          </nav>
        </>
    )
}

export default Topbar