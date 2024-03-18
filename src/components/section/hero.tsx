import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <div className="col-fullbleed bg-dark text-light">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          src="posters/napoleon.webp"
          alt=""
          className="sticky top-0 h-screen w-full object-cover"
        />
      </motion.div>

      <div className="constrain  relative -top-[--header-height]  z-10 h-svh place-content-stretch">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
          className="grid content-center"
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </div>
    </div>
  )
}
