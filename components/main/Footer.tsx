import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
  
  import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className="w-ful flex flex-col items-center justify center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex--round">
                <div className="min-w-[200px]h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        <FaYoutube/>
                        <span className='text-[15px] ml-[6px]'>Youtube</span>
                    </p>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        <RxGithubLogo/>
                        <span className='text-[15px] ml-[6px]'>GitHub</span>
                    </p>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        <RxDiscordLogo/>
                        <span className='text-[15px] ml-[6px]'>Discord</span>
                    </p>
                </div>
                <div className="min-w-[200px]h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        <RxInstagramLogo/>
                        <span className='text-[15px] ml-[6px]'>Instagram</span>
                    </p>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        <RxTwitterLogo/>
                        <span className='text-[15px] ml-[6px]'>Twitter</span>
                    </p>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        <RxLinkedinLogo/>
                        <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </p>
                </div>
                <div className="min-w-[200px]h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        
                        <span className='text-[15px] ml-[6px]'>Become Sponsor</span>
                    </p>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        
                        <span className='text-[15px] ml-[6px]'>Learning About Us</span>
                    </p>
                    <p className="flex flex-row items-center my-[16px] cursor-pointer">
                        
                        <span className='text-[15px] ml-[6px]'>ireakin10@gmail.com</span>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Net-Trix Solutions 2024 Inc. All rights reserved
            </div>
        </div>
        
    </div>
  )
}

export default Footer