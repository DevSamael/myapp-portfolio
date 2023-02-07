import React from 'react'

const Landing = () => {
  return (
    <>
        <section id='Landing' className='w-full h-screen flex flex-col items-center justify-center'>
          <img className='lg:hidden md:hidden' src="/LandingLogo.svg" alt="" />
          <img className='hidden sm:hidden md:flex md:h-full lg:flex lg:h-full' src="/BigLandingLogo.svg" alt="" />
        </section>
        <div id='Spacer1'></div>
        <section id='About Me' className='w-full flex flex-col items-center bg-black'>
          <img className=' mt-16' src="/AboutLogo.svg" alt="" />
          <img className='mt-10' src="/NoirMe.svg" alt="" />
          <p className='font-light font-Montserrat tracking-wide text-sm text-white px-14 mt-6'>
            My name is Samael Musgrove. Designer, Self-Taught Developer and a life-long student of Art.  
          </p>
          <p className='font-light font-Montserrat tracking-wide text-sm text-white px-14 mt-4'>
            I specialize in Full-Stack Web & Mobile Development, with proficiency in most popular frameworks and libraries!
          </p>
        </section>
        <div id='Spacer2'></div>
        <section id='Work' className='w-full flex flex-col items-center bg-white'>
            <img className='mt-10' src="/WorkLogo.svg" alt="" />
            <h1 className='text-5xl text-black font-Montserrat font-bold mt-10'>2023</h1>
            <img className='mt-10' src="/Beaux.svg" alt="" />
            <p className='text-sm text-black font-Montserrat mt-4'>©BeauxDessin Web Designs</p>
            <p className='text-sm text-black font-Montserrat mt-1'>Founded in 2023</p>
            <p className='text-sm text-black font-Montserrat mt-1'>*IN PROGRESS*</p>
            <img className='mt-10' src="/UpWork.svg" alt="" />
            <p className='text-sm text-black font-Montserrat mt-4'>Freelance Web Development 2023 - Present</p>
        </section>
        <div id='Spacer3'></div>
        <section id='Contact' className='w-full flex flex-col items-center bg-black border-b-2 border-white'>
          <img className='mt-24' src="/ContactLogo.svg" alt="" />
          <a href='mailto:developersamaelmusgrove@gmail.com'><img className='mt-16' src="/Email.svg" alt="" /></a>
          <img className='mt-10' src="/Phone.svg" alt="" />
          <p className='mt-14'>..</p>
        </section>
        <section id='footer' className='w-full flex flex-col items-center bg-black'>
          <h1 className='font-light font-Montserrat text-base text-white'>©Samael Musgrove 2023</h1>
        </section>
    </>
  )
}

export default Landing