import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon, 
  AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefits from "./Benefits";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 ww-6" />,
    title: "State of the art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis, quam vel posuere dictum, velit risus scelerisque purus, eu dictum lorem metus quis dui."
  },
  {
    icon: <UserGroupIcon className="h-6 ww-6" />,
    title: "100's of Divers Classes",
    description: "Nunc commodo urna vitae elit venenatis tempus. Sed ut ligula varius, mattis ex a, blandit ipsum. Duis lacus urna, feugiat a scelerisque vitae, rutrum in odio"
  },
  {
    icon: <AcademicCapIcon className="h-6 ww-6" />,
    title: "World Class Trainers",
    description: "Aliquam non nulla tempus, scelerisque turpis ut, faucibus massa. In et orci augue. Quisque urna augue, laoreet ultricies mauris nec, porta cursus orci"
  }
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({setSelectedPage}: Props) => {
  return <section 
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      > 
        {/* HEADER */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x:-50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes
            to get you to your ultimate fitness goal with ease. We also provide 
            true care into each and every members.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefits 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
            
          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLION OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
              
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x:50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
              Aliquam non nulla tempus, scelerisque turpis ut, faucibus massa. 
              In et orci augue. Quisque urna augue, laoreet ultricies mauris nec, porta cursus orci.
              </p>
              <p className="mb-5">
              Nulla at sapien auctor, semper erat vitae, consequat neque. 
              Suspendisse sagittis felis a risus porta viverra. Nulla facilisi. 
              Praesent eu congue ante, consectetur dictum elit. 
              Suspendisse congue quam diam, viverra tempor nibh faucibus eget. 
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN US NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div> 

    </section>
}

export default Benefit