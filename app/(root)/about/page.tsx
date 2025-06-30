import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id='about' className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden !rounded-none grad-to-right dark:grad-to-right-dark lg:h-screen lg:-mt-20 -z-10">   
        <div className="flex flex-col gap-7 items-center text-center p-4 pt-12 max-w-[360px] md:max-w-[800px] mx-auto text-muted text-sm relative">
          <h1 className="pointer-events-none z-10 bg-gradient-to-b from-[#21A94E] to-[#21A94E] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            About Us
          </h1>
          <h2 className="hidden text-2xl leading-relaxed md:block text-primary">
            Innovating Across Real Estate, Education, and Digital Solutions
          </h2>
          <p className="font-[449] md:hidden text-primary">
           A multi-sector company pioneering change across real estate, digital transformation, and education. We build sustainable communities, empower entrepreneurs, and prepare youth for the future through innovation, integrity, and value creation.
          </p>
          <p className="hidden text-xl leading-relaxed md:block text-primary">
          A multi-sector company pioneering change across real estate, digital transformation, and education. We build sustainable communities, empower entrepreneurs, and prepare youth for the future through innovation, integrity, and value creation.
          </p>
          <Link href={'/contact'}>
              <RainbowButton>
                Reach Out
              </RainbowButton>
            </Link>
          {/* <div className="flex items-center gap-1.5">
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

          </div> */}
          
        </div>
      </div>
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Welcome to Dordorian Concept Ltd.
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl">
          A multi-sector company pioneering change across real estate, digital transformation,
          and education. We build sustainable communities, empower entrepreneurs, and prepare
          youth for the future through innovation, integrity, and value creation.
        </p> */}

        {/* Real Estate Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">🏘️ Real Estate Solutions</h2>
          <p className="mb-4 max-w-xl">
            We are committed to promoting integrated housing solutions that meet the needs of individuals, families, and forward-thinking businesses. Our services include:
            <ul className="list-disc ml-6 mt-2">
              <li>Sale of plots of land</li>
              <li>Building development</li>
              <li>Strategic real estate investments</li>
            </ul>
          </p>
          <p className="mb-2">
            <strong>Current Locations:</strong> Bayelsa and Port Harcourt (Expanding nationwide)
          </p>
          <p className="mb-4">
            <strong>Flagship Project:</strong> <span className="font-semibold">Yenreach City</span> —
            a fast-developing estate redefining comfort, accessibility, and value appreciation.
          </p>
          <p>
            We invite visionary investors and business owners to partner with us in shaping the future.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">📊 Consultancy - Professional Development & Certifications</h2>
          <p className="mb-4">
            We offer consulting services for both local and international professional institutes. Our goal is to bridge the gap between professional organizations and individuals who seek growth, development, and recognition in their careers.
          </p>

          <p className="mb-4">
            As part of our consulting services, we facilitate membership certifications and training programs for interested members of the public. These programs are designed to equip participants with industry-relevant knowledge, improve their professional standing, and open up new career opportunities.
          </p>

          <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-md mb-6">
            <h4 className="text-xl font-semibold mb-2">🎓 Partner Institutions</h4>
            <p className="mb-2">
              We collaborate with a wide range of reputable institutions to deliver value-driven professional development:
            </p>
            <ul className="list-disc ml-6">
              <li>Chartered Institute of Strategic Management</li>
              <li>Chartered Institute of Administration</li>
              <li>Chartered Institute of Customer Relationship Management</li>
              <li>Mapemond Business Academy (UK)</li>
              <li>Chartered Institute of Human Resources Management of Nigeria</li>
              <li>Institute of Chartered Economists of Nigeria</li>
              <li>Management Specialist (UK)</li>
            </ul>
          </div>

          <p>
            Through these collaborations, we help individuals gain globally recognized certifications while supporting institutions in expanding their reach and impact.
          </p>
        </div>


        {/* Digital Systems Section */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">💻 Digital Systems & Record Management</h2>
          <p className="mb-4">
            Empowering schools and SMEs with automated, cloud-based solutions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="font-semibold">For Schools:</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Automated billing portals</li>
                <li>Expense/income tracking</li>
                <li>Secure cloud storage</li>
                <li>Staff onboarding/training</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">For SMEs:</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Custom billing systems</li>
                <li>Inventory and cost control</li>
                <li>Profit dashboards</li>
                <li>Collaborative cloud workspaces</li>
              </ul>
            </div>
          </div>
          <p className="mb-6">
            Solve operational inefficiencies and unlock growth with smart, transparent, digital systems.
          </p>
          <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-md">
            <h4 className="text-xl font-semibold mb-2">🚀 Why This Matters</h4>
            <p className="mb-2">
              This department solves critical challenges faced by schools and SMEs, such as:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Manual errors and inefficiencies in paper-based operations</li>
              <li>Limited financial transparency</li>
              <li>Delays in reporting and invoicing</li>
              <li>Data loss due to lack of digital backup</li>
            </ul>
            <p>
              By choosing Dordorian Concept, clients gain access to smart systems that not only simplify their operations but also enable sustainable growth and improved decision-making.
            </p>
          </div>
        </div> */}

        {/* Education Section */}
        <div className="mb-20" id="busitech">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">🎓 BusiTech Model College</h2>
          <p className="mb-4">
            A specialized secondary school offering affordable, hands-on business and technical education.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Grooming student entrepreneurs through experiential learning</li>
            <li>Focus on technical creativity and real-world skills</li>
            <li>Serene environment with modern learning facilities</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
              <span className="bg-black/5 p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                🎯
              </span>
                <h4 className="text-xl font-semibold">Vision</h4>
                <p className="mt-2 text-sm md:text-base text-[#42526E] max-w-sm">
                  To become Africa&apos;s foremost breeding ground for business and technical education.
                </p>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
              <span className="bg-black/5 p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                🚀
              </span>
              <h4 className="text-xl font-semibold">Mission</h4>
              <p className="mt-2 text-sm md:text-base text-[#42526E] max-w-sm">
              Deliver capacity-building programs through a well-crafted curriculum focused on entrepreneurship.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start md:text-left shadow-md shadow-[#20248A0A] bg-white rounded-2xl p-8 text-center w-full max-w-[270px] md:bg-[#FAFAFC] md:max-w-none mx-auto">
              <span className="bg-black/5 p-2.5 w-10 h-10 rounded-full flex items-center justify-center">
                🎓
              </span>
              <h4 className="text-xl font-semibold">Goals</h4>
              <p className="mt-2 text-sm md:text-base text-[#42526E] max-w-sm">
                <ul className="list-disc ml-6">
                  <li>Create student innovators</li>
                  <li>Prepare students for the world of work</li>
                  <li>Provide affordable vocational education</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gray-100 p-8 rounded-lg shadow mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🤝 Why Partner With Dordorian Concept Ltd.?</h2>
          <p className="mb-4">
          Dordorian Concept Ltd. is a visionary company driving impact across real estate, digital marketing, and education. As the parent company of Yenreach.com, Yenreach City, Business and Technology University, and Business and Technology College, we offer integrated solutions that support business growth, property investment, and skills development.
            {/* Whether you&apos;re investing in land, automating your business, or advancing education—
            you&apos;re joining a mission built on innovation, integrity, and empowerment. */}
          </p>
          <p className="mb-4">
            Partnering with us means gaining access to a diverse ecosystem built on innovation, integrity, and value creation. Whether you&apos;re investing in land, promoting your business, or advancing education, you&apos;re joining a mission to build sustainable communities and empower the next generation.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
          >
            Partner With Us
          </Link>
        </div>
      </section>

    </main>
  );
}
