import Hero from "@/components/Hero";
import Image from "next/image";
import Img from "@/assets/lock.png";
import { User, Users } from "lucide-react";

export default function Home() {
  return (
    <main>
     <Hero />
     <section id="about" className="section">
        <div className="flex flex-col items-center text-center mx-auto mb-6 md:mb-12 max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-[624] mb-2 md:mb-4 text-[#263A5D]">About Us</h3>
          <p className="text-[#626F86] text-lg">
            Dordorian Concept Ltd is a forward-thinking, multidisciplinary firm committed to delivering innovative solutions across multiple sectors, including marketing, real estate, consultancy, and education.
          </p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side: About Us, Mission, Vision */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-semibold mb-2 text-[#263A5D]">Mission Statement</h4>
              <p className="text-[#626F86] text-base md:text-lg">
                Our mission is to offer creative, innovative, and sustainable solutions that drive business growth, human capacity development, and long-term success.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-xl font-semibold mb-2 text-[#263A5D]">Our Vision</h4>
              <p className="text-[#626F86] text-base md:text-lg">
                To be the leading catalyst for business transformation in Nigeria and beyond, empowering individuals and organizations to realize their full potential.
              </p>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex items-center justify-center">
            <Image src={Img} alt="About Dordorian Concept" className="w-full h-auto rounded-lg shadow-md" />
          </div>
    
        </div>
      </section>

     <section id="services" className="section">
        <div className="container">
        <div className="flex flex-col items-center max-w-[720px] text-center mx-auto mb-6 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-[624] mb-2 md:mb-4 text-[#263A5D]">Our Services</h3>
          <p className="text-[#626F86] text-lg">
            At Dordorian Concept Ltd, we offer a wide range of services that drive growth, innovation, and success. From integrated marketing solutions to real estate and educational platforms, we are committed to empowering businesses and individuals across Nigeria.
          </p>
        </div>
            <div className="overflow-hidden">
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
            <div className="flex flex-col grid-cols-2 gap-10 md:grid md:gap-12 mt-6 md:mt-12">
              <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
                <span className="bg-primary p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                  <User color="#fff" />
                </span>
                <h4 className="text-xl font-semibold">Innovative Solutions</h4>
                <p className="mt-2 text-sm text-[#42526E] max-w-sm">
                  From marketing to real estate, our diverse services help individuals and businesses thrive with tailored, innovative solutions.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
                <span className="bg-primary p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                  <Users color="#fff" />
                </span>
                <h4 className="text-xl font-semibold">Empowering Entrepreneurs</h4>
                <p className="mt-2 text-sm text-[#42526E] max-w-sm">
                  Through our educational institutions, we are shaping the future by providing students and young entrepreneurs with the skills to build businesses and create lasting legacies.
                </p>
              </div>
            </div>
          </div>
      </section>


    </main>
  );
}
