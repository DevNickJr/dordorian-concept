import React from 'react'
// import LOGO from '@/assets/lock.png'
import Image from 'next/image'
import LogoImg from "@/assets/dordorian.png"
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='relative border-none section grad-to-right dark:grad-to-right-dark '>
        <div className="container flex flex-col gap-8 md:flex-row">
        {/* Left Section - Logo and About */}
        <div className="flex flex-col flex-1 gap-3">
            <div className="flex items-center gap-2">
            <Image src={LogoImg} alt="Dordorian Logo" className="w-24 md:w-40 rounded-md dark:bg-light/80" width={200} height={200} />
            {/* <h2 className='text-2xl font-bold text-primary'>Dordorian Concept</h2> */}
            </div>
            <p className='text-base text-primary'>
            Dordorian Concept Ltd is an integrated marketing communication company offering a wide range of services including marketing, consultancy, real estate, human resource management, and more. We are committed to empowering businesses and individuals to achieve their full potential.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
                <a target='_blank' href={'https://www.facebook.com/yenreachng/'}>
                    <BsFacebook className='w-6 h-6 text-primary' />
                </a>
                <a target='_blank' href={'https://www.facebook.com/yenreachng/'}>
                    <BsTwitter className='w-6 h-6 text-primary' />
                </a>
                <a target='_blank' href={'https://ng.linkedin.com/company/yenreachng'}>
                    <BsLinkedin className='w-6 h-6 text-primary' />
                </a>
                <a target='_blank' href={'https://www.instagram.com/yenreach/'}>
                    <BsInstagram className='w-6 h-6 text-primary' />
                </a>
            </div>
        </div>
    
        {/* Right Section - Contact Information */}
        <div className="flex flex-col items-start justify-start flex-1 gap-3">
            <h2 className='text-lg font-bold text-primary'>Contact</h2>
    
            <div className="flex items-center justify-center gap-2">
                <MdPhone className='w-5 h-5 text-primary' />
                <p className="text-primary">(+234) 806 039 8968</p>
            </div>
    
            <a href="mailto:conceptdordorian@gmail.com" className="flex items-center justify-center gap-2">
                <MdMail className='w-5 h-5 text-primary' />
                <p className="text-primary">conceptdordorian@gmail.com</p>
            </a>
    
            <div className="flex items-center justify-center gap-2">
                <MdLocationOn className='w-6 h-6 text-primary' />
                <p className="text-primary">
                    First Floor, Promo Master Complex, Otiotio, Yenagoa, Bayelsa State, Nigeria
                </p>
            </div>
        </div>
    
        {/* Copyright */}
        <p className='md:absolute right-4 bottom-4 text-primary'>© 2024 Dordorian Concept Ltd. All rights reserved.</p>
        </div>
  </footer>
  
  )
}

export default Footer