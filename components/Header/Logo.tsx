import Image from "next/image"
import Link from "next/link"
import LogoImg from "@/assets/dordorian.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-24 overflow-hidden md:w-32">
            <Image src={LogoImg} alt="Dordorian logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        {/* <span className="text-lg font-bold dark:font-semibold md:text-xl">Dordorian</span> */}
    </Link>
  )
}

export default Logo