import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import bgImage from '@assets/posters/napoleon.webp'

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <>
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 z-10 col-fullbleed h-[230vh] w-full"
      >
        <img
          src={bgImage.src}
          alt=""
          className="sticky top-0 h-screen w-full object-cover"
          width={bgImage.width}
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
          },
        }}
        whileInView="visible"
        exit="hidden"
        animate="hidden"
        viewport={{ amount: 0.95 }}
        className="relative -top-[--header-height] z-10 col-medium  grid h-svh content-center"
      >
        <h1 className="mb-10 text-5xl font-bold">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </motion.div>
    </>
  )
}
