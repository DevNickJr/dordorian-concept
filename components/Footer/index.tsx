import React from 'react'
import LOGO from '@/assets/lock.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='relative section grad-to-right dark:grad-to-right-dark dark:bg-black'>
        <div className="container flex flex-col gap-8 md:flex-row">
        {/* Left Section - Logo and About */}
        <div className="flex flex-col flex-1 gap-3">
            <div className="flex items-center gap-2">
            <Image src={LOGO} alt="Dordorian Logo" className="w-12 h-12 scale-75" width={200} height={200} />
            <h2 className='text-2xl font-bold text-primary'>Dordorian Concept</h2>
            </div>
            <p className='text-base text-primary'>
            Dordorian Concept Ltd is an integrated marketing communication company offering a wide range of services including marketing, consultancy, real estate, human resource management, and more. We are committed to empowering businesses and individuals to achieve their full potential.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
            <Image className='w-10 h-10' src="/path-to-icon-facebook.svg" alt="Facebook" width={40} height={40} />
            <Image className='w-10 h-10' src="/path-to-icon-twitter.svg" alt="Twitter" width={40} height={40} />
            <Image className='w-10 h-10' src="/path-to-icon-linkedin.svg" alt="LinkedIn" width={40} height={40} />
            <Image className='w-10 h-10' src="/path-to-icon-instagram.svg" alt="Instagram" width={40} height={40} />
            </div>
        </div>
    
        {/* Right Section - Contact Information */}
        <div className="flex flex-col items-start justify-start flex-1 gap-3">
            <h2 className='text-lg font-bold text-primary'>Contact</h2>
    
            <div className="flex items-center justify-center gap-2">
            <Image src="/path-to-icon-phone.svg" alt="Phone Icon" width={24} height={24} className='w-6 h-6' />
            <p className="text-primary">(+234) 806 039 8968</p>
            </div>
    
            <div className="flex items-center justify-center gap-2">
            <Image src="/path-to-icon-email.svg" alt="Email Icon" width={24} height={24} className='w-6 h-6' />
            <p className="text-primary">info@dordorianconcept.com</p>
            </div>
    
            <div className="flex items-center justify-center gap-2">
            <Image src="/path-to-icon-location.svg" alt="Location Icon" width={24} height={24} className='w-6 h-6' />
            <p className="text-primary">
                First Floor, Promo Master Complex, Otiotio, Yenagoa, Bayelsa State, Nigeria
            </p>
            </div>
        </div>
    
        {/* Copyright */}
        <p className='absolute right-4 bottom-4 text-primary'>© 2024 Dordorian Concept Ltd. All rights reserved.</p>
        </div>
  </footer>
  
  )
}

export default Footer