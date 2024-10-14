import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout