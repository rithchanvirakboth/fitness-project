import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  
  const {
    trigger,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
   const isValid = await trigger();
   if(!isValid){
    e.preventDefault();

   }
  }
  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* Header */}
        <motion.div 
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition = {{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
          Donec vulputate dapibus justo. Aliquam in auctor ante. 
          Aliquam ultrices posuere maximus. Praesent nibh turpis, vestibulum a mauris ut, pulvinar consequat ex. Suspendisse vitae lacus risus. 
          Donec luctus mauris vel mauris tempus sodales.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          {/* FORM */}
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition = {{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/14a3683f2f96e99315f22fc160ddffb7"
              method="POST"
            >
              {/* Name */}
              <input
                className={inputStyle} 
                type="text"
                placeholder="enter your name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}  
              />
              { errors.name && (
                <p className="mt-1 text-primary-500">
                 { errors.name.type === "required" && "Name is required!!" }
                 { errors.name.type === "maxLength" && "Max Length is only 100 characters!!" }
                </p>
              )}
              {/* EMAIL */}
              <input
                className={inputStyle} 
                type="email"
                placeholder="enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                })}  
              />
              { errors.email && (
                <p className="mt-1 text-primary-500">
                 { errors.email.type === "required" && "Email is required!!" }
                 { errors.email.type === "pattern" && "Invalid email address!!" }
                </p>
              )}
              {/* MESSAGE */}
              <textarea
                className={inputStyle} 
                rows={4}
                cols={50}
                placeholder="enter some message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}  
              />
              { errors.name && (
                <p className="mt-1 text-primary-500">
                 { errors.name.type === "required" && "MESSAGE is required!!" }
                 { errors.name.type === "maxLength" && "Max Length is only 2000 characters!!" }
                </p>
              )}

              <button 
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/* IMAGE */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition = {{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img className="w-full" src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs