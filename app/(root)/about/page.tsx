import Image from "next/image";
import Img from "@/assets/lock.png";
import Mag2 from "@/assets/mag2.png";
import Mag3 from "@/assets/mag3.png";
import Uni2 from "@/assets/uni2.png";
import Innov from "@/assets/innov.png";
import { User, Users } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id='about' className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background lg:h-screen lg:-mt-20 -z-10">   
        <div className="flex flex-col gap-7 items-center text-center p-4 pt-12 max-w-[360px] md:max-w-[800px] mx-auto text-muted text-sm relative">
          <h1 className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            About Us
          </h1>

          <h2 className="hidden text-2xl leading-relaxed md:block text-primary">
            Empowering Growth, Innovation & Success
          </h2>
          <p className="font-[449] md:hidden text-primary">
            At Dordorian Concept Ltd, we offer integrated solutions in marketing, consultancy, real estate, and education.
          </p>

          <p className="hidden text-xl leading-relaxed md:block text-primary">
            Discover limitless opportunities with Dordorian Concept Ltd. We provide integrated solutions in marketing, consultancy, real estate, and education, empowering individuals and businesses to thrive.
          </p>
          <div className="flex items-center gap-1.5">
            <Link href={'/get-started'}>
              <RainbowButton className="px-3">
                Innovation
              </RainbowButton>
            </Link>
            <Link href={'/get-started'}>
              <RainbowButton className="px-3">
                Innovation
              </RainbowButton>
            </Link>
            <Link href={'/get-started'}>
              <RainbowButton className="px-3">
                Innovation
              </RainbowButton>
            </Link>

          </div>
          
        </div>
    </div>
     <section id="about" className="section grad-to-right dark:grad-to-right-dark">
        <div data-aos="fade-in" className="flex flex-col items-center max-w-3xl mx-auto mb-6 text-center md:mb-12">
          <h3 className="text-2xl md:text-3xl font-[624] mb-2 md:mb-4 text-primary">About Us</h3>
          <p className="text-lg text-primary">
            Dordorian Concept Ltd is a forward-thinking, multidisciplinary firm committed to delivering innovative solutions across multiple sectors, including marketing, real estate, consultancy, and education.
          </p>
        </div>
        <div data-aos="slide in" className="container grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left side: About Us, Mission, Vision */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start">
              <h4 className="mb-2 text-xl font-semibold text-primary">Mission Statement</h4>
              <p className="text-base text-primary md:text-lg">
                Our mission is to offer creative, innovative, and sustainable solutions that drive business growth, human capacity development, and long-term success.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="mb-2 text-xl font-semibold text-primary">Our Vision</h4>
              <p className="text-base text-primary md:text-lg">
                To be the leading catalyst for business transformation in Nigeria and beyond, empowering individuals and organizations to realize their full potential.
              </p>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex items-center justify-center">
            <Image src={Innov} alt="About Dordorian Concept" className="w-full h-auto rounded-lg shadow-md" />
          </div>
    
        </div>
      </section>

     <section id="services" className="section">
        <div className="container">
          <div data-aos="fade-in" className="flex flex-col items-center max-w-[720px] text-center mx-auto mb-6 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-[624] mb-2 md:mb-4 text-primary">Our Services</h3>
            <p className="text-lg text-primary">
              At Dordorian Concept Ltd, we offer a wide range of services that drive growth, innovation, and success. From integrated marketing solutions to real estate and educational platforms, we are committed to empowering businesses and individuals across Nigeria.
            </p>
          </div>
          <div data-aos="slide-up" className="overflow-hidden">
            <div className="gap-4 sm:grid grid-cols-5 whitespace-nowrap flex min-[580px]:justify-center items-center overflow-auto">
              <div className="flex flex-col gap-4 items-center bg-[#FAFAFC] p-5 md:p-8 rounded-md">
                <Image src={Img} alt="Marketing" className="w-10 h-10 bg-gray-200" />
                <span className="text-xs font-[451] md:font-[430] md:text-base">Marketing</span>
              </div>
              <div className="flex flex-col gap-4 items-center bg-[#FAFAFC] p-5 md:p-8 rounded-md">
                <Image src={Img} alt="Consultancy" className="w-10 h-10 bg-gray-200" />
                <span className="text-xs font-[451] md:font-[430] md:text-base">Consultancy</span>
              </div>
              <div className="flex flex-col gap-4 items-center bg-[#FAFAFC] p-5 md:p-8 rounded-md">
                <Image src={Img} alt="Real Estate" className="w-10 h-10 bg-gray-200" />
                <span className="text-xs font-[451] md:font-[430] md:text-base">Real Estate</span>
              </div>
              <div className="flex flex-col gap-4 items-center bg-[#FAFAFC] p-5 md:p-8 rounded-md">
                <Image src={Img} alt="Education" className="w-10 h-10 bg-gray-200" />
                <span className="text-xs font-[451] md:font-[430] md:text-base">Education</span>
              </div>
              <div className="flex flex-col gap-4 items-center bg-[#FAFAFC] p-5 md:p-8 rounded-md">
                <Image src={Img} alt="Human Resources" className="w-10 h-10 bg-gray-200" />
                <span className="text-xs font-[451] md:font-[430] md:text-base">Human Resources</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col grid-cols-2 gap-10 mt-6 md:grid md:gap-12 md:mt-12">
            <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
              <span className="bg-primary p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                <User color="#fff" />
              </span>
              <h4 className="text-xl font-semibold">Marketing</h4>
              <p className="mt-2 text-sm text-[#42526E] max-w-sm">
                From marketing to real estate, our diverse services help individuals and businesses thrive with tailored, innovative solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
              <span className="bg-primary p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                <Users color="#fff" />
              </span>
              <h4 className="text-xl font-semibold">Consultancy</h4>
              <p className="mt-2 text-sm text-[#42526E] max-w-sm">
                Through our educational institutions, we are shaping the future by providing students and young entrepreneurs with the skills to build businesses and create lasting legacies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section grad-to-right dark:grad-to-right-dark">
        <div className="container flex flex-col items-center justify-center gap-4">
          <div data-aos="fade-in" className="flex flex-col items-center max-w-[720px] text-center mx-auto mb-6 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-[624] mb-2 md:mb-4 text-primary">Projects</h3>
            <p className="text-lg text-primary">
              Explore our portfolio to see how our innovative software solutions have made a positive impact for our clients
            </p>
          </div>
          <div className="flex flex-col gap-6 py-6 md:flex-row">
            <div className="flex relative overflow-hidden flex-1 h-[539px] rounded-3xl justify-center items-end w-fit">
              <Image className='absolute object-cover w-full h-full' src={Uni2} alt="" />
              <div className="z-10 flex flex-col items-start gap-4 px-12 py-4 pb-6 md:flex-row md:items-center">
                <div className="flex flex-col gap-4 md:w-2/3">
                  <h2 className='text-3xl font-bold text-primary-foreground'>UNIVERSITY OF BUSINESS AND TECHNOLOGY</h2>
                  <p className='text-primary-foreground'>Advance access to higher business education</p>
                </div>
                <RainbowButton className={'bg-primary text-primary-foreground px-6 py-[0.8rem]'}>Lets work</RainbowButton>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 gap-6">
              <div className="relative flex items-end justify-center flex-1 overflow-hidden rounded-3xl">
                <Image className='absolute object-cover w-full h-full' src={Mag2} alt="" />
                <div className="z-10 flex flex-col gap-3 p-6">
                  <h2 className='text-2xl font-bold text-primary-foreground'>BYS MAGAZINE</h2>
                  <p className='text-primary-foreground'>Spotlighting the rich tapestry of businesses operating within Bayelsa</p>
                </div>
              </div>
              <div className="relative flex items-end justify-center flex-1 overflow-hidden rounded-3xl w-fit">
                <Image className='absolute object-cover w-full h-full' src={Mag3} alt="" />
                <div className="z-10 flex flex-col gap-3 p-6">
                  <h2 className='text-2xl font-bold text-primary-foreground'>YENREACH</h2>
                  <p className='text-primary-foreground'>Innovative business and job listing platform supporting the growth and development of small and medium businesses across Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <RainbowButton>View Our Project</RainbowButton>
        </div>
      </section>
      
      <section id="portfolio" className="section">
        <div className="container lg:px-main">
            <div className="flex flex-col items-center justify-between w-full gap-4 p-6 md:flex-row bg-primary-foreground rounded-2xl md:p-12">
              <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-bold text-primary'>Work Together with Dordorian Concept</h2>
                <p className='w-4/5 text-primary'>
                  At Dordorian Concept, we offer expert solutions with a focus on professionalism, innovative services, and a commitment to helping businesses and individuals achieve success across various industries.
                </p>
              </div>
              <RainbowButton className={'border-none rounded-xl py-3 text-sm whitespace-nowrap'}>Contact Us</RainbowButton>
            </div>
          </div>
      </section>



    </main>
  );
}
