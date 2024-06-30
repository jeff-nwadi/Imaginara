"use client"

import Image from "next/image"
import Link from "next/link"
import Compass from "../icon/Compass"
import Home from "../icon/Home"
import Searchbar from "./Searchbar"
import { Button } from "../ui/button"
import Coffee from "../icon/Coffee"

import Notification from "../icon/Notification"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Message from "../icon/Message"
import Plus from "../icon/Plus"

function Topbar() {
    return(
        <>
          <nav className="bg-black w-full px-[4rem] py-[1rem] flex items-center justify-between">
            <div className="flex gap-10 items-center">   
                <Link href="/">
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
                        <Link href='/' className="flex gap-1 text-[#A1A19F] hover:text-[#fff] text-[15px] items-center">
                            <Home />
                            Home
                        </Link>
                    </SignedIn>
                   
                    <Link href='/Explore'className="flex gap-1 text-[#A1A19F] hover:text-[#fff] text-[15px] items-center">
                        <Compass  />
                        Explore
                    </Link>
                </div>
                
                <div className="search-bar">
                    <Searchbar />
                </div>

            </div>

           

            <div className="right-section flex items-center gap-10">
                <div className="buy-coffee">
                    <Link href='#' className="text-[#ebe8e8] flex gap-2">
                        <Coffee />
                        <SignedOut>
                            Buy imaginara a coffee
                        </SignedOut>
                        
                    </Link>
                </div>

                <SignedIn>
                    <div className="flex gap-10 items-center">
                        <Link href="" className="message text-[#000] flex items-center gap-1 bg-slate-200 rounded-[20px] px-5 py-2">
                            <Plus />
                            Post
                        </Link>
                        <Link href='#' className="message text-[#fff] flex items-center gap-1">
                            <Message />
                            Messages
                        </Link>
                       <Link href='#' className="notification text-[#fff] flex items-center gap-1">
                            <Notification />
                            Notification
                        </Link>
                    </div>
                </SignedIn>
                

                <SignedOut>

                <div>
                    <button className="text-black bg-slate-200 px-[25px] py-[5px] rounded-[20px]">
                        <Link href="/sign-in">
                            Log in
                        </Link>
                        
                    </button>
                </div>
               

                <div>
                    <button className="text-[#A1A19F] hover:text-[#edebeb]">
                        <Link href="/sign-out">
                            Sign up
                        </Link>
                    </button>
                </div>

                </SignedOut>
                
                <UserButton afterSignOutUrl="/Explore" /> 
              
            </div>
          </nav>
        </>
    )
}

export default Topbar