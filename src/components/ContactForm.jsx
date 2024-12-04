import { useRef, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const text = "Sent successfully to mgmauktheinkha@gmail.com";
  const form = useRef();
  const [isLoading,setIsLoading] = useState(false);
  

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state before sending the email

    try {
      const result = await emailjs.sendForm(
        'service_j772jlp',
        'template_stdwn7k',
        form.current,
        'dPZZg7qCdXFTlCSGw'
      );
      toast.success(result.text=text);// Show success notification
      form.current.reset(); //form.reset()
    } catch (error) {
      toast.error("Failed to send email. Please try again."); // Show error notification
      console.error("Email send error:", error);
    } finally {
      setIsLoading(false); // Reset loading state after email send attempt
    }
  };
    return (
      <>
       <ToastContainer />
        <div className="min-h-full justify-center">        
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-[#dccfb0]">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="user_name" 
                    type="name"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#ea4227] sm:text-sm/6"
                  />
                </div>
            </div>

              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-[#dccfb0]">
                  Your Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#ea4227] sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm/6 font-medium text-[#dccfb0]">
                  Your Message
                </label>
                <div className="mt-2">
                  <input
                    id="message"
                    name="message"
                    type="message"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#ea4227] sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="subject" className="block text-sm/6 font-medium text-[#dccfb0]">
                    Subject
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="subject"
                   name="user_subject"
                    type="subject"
                    required
                    className="block w-full rounded-md bg-white px-3 py-4 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#ea4227] sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
  
              <div>
                <button
                  onClick={()=>toast()}
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-[#ea4227] px-3 py-3 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#8b2616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isLoading ? "cursor-not-allowed opacity-70" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? <ImSpinner2 className="animate-spin mx-auto w-5 h-5" /> : "Send Email"}
                </button>
              </div>
            </form>
          </div>
      </>
    )
  }
  