import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section className='bg-[#1c2437] py-16 lg:py-32 h-full' id="contact">
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex lg:flex-row flex-col justify-between items-center space-y-10'>
                <div className='lg:w-[27rem] w-full text-[#dccfb0] leading-10 text-xl'>
                    <h1 className='text-2xl font-medium'>Let’s Talk</h1>
                    <p>Ready to discuss your marketing goals in detail? Schedule a consultation with our experts.</p>
                </div>
                <div className='text-[#dccfb0] lg:w-[28rem] w-full leading-10 text-xl'>
                    <h1>Contact Us</h1>
                    <p>+959 40978 0022</p>
                    <p className=''>E 1-12, The Secretariat Yangon,Thein Phyu Road, Botahtaung Township, Yangon</p>
                </div>
            </div>
            {/* Contact Form */}
            <div className='text-[#dccfb0] leading-10 text-xl my-14 lg:w-1/2 lg:mx-auto w-full'>
                <h1 className='text-center'>Contact</h1>
                <ContactForm/>
            </div>
            {/* Contact Form */}

        </div>
    </section>
  )
}

export default Contact