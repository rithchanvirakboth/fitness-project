import { ClassType, SelectedPage } from "@/shared/types";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Nullam leo dolor, varius id risus id, accumsan interdum libero. Morbi ut faucibus mi, non hendrerit mauris. Pellentesque consequat pretium finibus. Curabitur eu nibh commodo, facilisis tellus sit amet, tempus lorem.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Praesent placerat mi sed interdum semper. Praesent dictum cursus velit eu efficitur. Fusce dui nulla, iaculis in dolor vitae, efficitur lacinia mi. ",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Vivamus venenatis lorem bibendum velit efficitur, vitae hendrerit orci volutpat. ",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description: "Vestibulum sit amet neque pellentesque, blandit justo malesuada, lobortis neque. In efficitur nunc ac aliquet varius",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Morbi sem nisl, dictum vitae placerat sit amet, accumsan quis arcu. Cras posuere nunc nec augue suscipit, mattis egestas sem pretium",
    image: image5,
  },
  {
    name: "Training Classes",
    description: "Pellentesque non euismod ex. Proin ultrices bibendum dapibus. Mauris tortor odio, cursus vitae elit nec, pretium imperdiet nibh.",
    image: image6,
  }
];


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div 
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
            Nunc viverra imperdiet enim
            </p>
          </div>
        </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item, index) => (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                /> 
              ))}
            </ul>
          </div>
      </motion.div>
    </section>
  )
}

export default OurClasses