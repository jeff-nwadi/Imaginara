"use client"

import Image from "next/image"
import {useState} from "react"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link"
import Coffee from "../icon/Coffee"
import Message from "../icon/Message"
import Notification from "../icon/Notification"
import Searchbar from "./Searchbar";
import { CiMenuFries } from "react-icons/ci";



const Menu = () => {
    const [open,setOpen] = useState(false)

    return(
        <div className="">
            <CiMenuFries onClick={() => setOpen((prev) => !prev)} className="text-[#fff] text-[25px] cursor-pointer"/>
                { open && (
                    
                    <div className="absolute gap-2 bg-[#17153B] h-[calc(100vh-80px)] w-[250px] right-[-1.5rem] top-[3rem] p-[1rem]">
                        <div className="flex flex-col items-start gap-4 mb-5">
                            <Searchbar />
                            
                             <Link href='#' className="text-[#ebe8e8] flex gap-2 items-center">
                                <Coffee className="text-[#EAB308]" />
                                    Buy imaginara a coffee    
                            </Link>
                        </div>

                     <hr className="pt-5 text-[#]"/>
                         
                    <SignedIn>
                        <div className="flex flex-col-reverse gap-5 items-start pt-4">
                            <Link href="" className="message text-[#000] flex items-center gap-1 bg-slate-200 rounded-[20px] px-5 py-2">
                                 <Image 
                                    src="/create.svg"
                                    alt="Post"
                                    width={18}
                                    height={18}
                                    /> 
                              
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
                    <div className="flex items-center gap-5">
                        <div>
                            <button className="text-black bg-slate-200 px-[25px] py-[5px] rounded-[20px] ">
                                <Link href="/sign-in">
                                    Log in
                                </Link>
                                
                            </button>
                        </div>
                        <div>
                            <button className="text-[#A1A19F] hover:text-[#edebeb]">
                                <Link href="/sign-up">
                                    Sign up
                                </Link>
                            </button>
                        </div>
                    </div>
                    
    
                    </SignedOut>
                    
                    {/* <UserButton afterSignOutUrl="/Explore" />  */}
                  
                </div>
                )
                }
        </div>
    )
}

export default Menu