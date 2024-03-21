import clsx from 'clsx'
import styles from './carousel.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Carousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 2.5, 1])

  const position = useTransform(
    scrollYProgress,
    [0.3, 0.66, 0.66],
    ['absolute', 'absolute', 'relative']
  )

  return (
    <div className="region col-fullbleed bg-dark text-light">
      <div className="relative mt-[-100vh] h-[300vh]" ref={carouselWrapperRef}>
        <div className="sticky top-0 grid h-screen items-center">
          <div className={styles.root}>
            {/* <div className={styles.controls}>
              <span className={clsx(styles.control, styles.previous)}>prev</span>
              <span className={clsx(styles.control, styles.next)}>next</span>
            </div> */}
            <div className={clsx(styles.scroller, 'col-xsmall')}>
              <div className={styles.snap}>
                <motion.div style={{ scale, position }}>
                  <img src="posters/laboratory.webp" alt="" />
                </motion.div>
              </div>
              <div className={styles.snap}>Carousel 1</div>
              <div className={styles.snap}>Carousel 2</div>
              <div className={styles.snap}>Carousel 4</div>
              <div className={styles.snap}>Carousel 5</div>
            </div>
          </div>
        </div>
      </div>

      <div>Small Carousel 2</div>
      <div>Small Carousel 3</div>
    </div>
  )
}
