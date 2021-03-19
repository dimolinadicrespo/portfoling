import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";

export const FadeInWhenVisible = ({ children, variants }) => {
    
    const defaultVariant = {show: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 }};    
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.75 }}
        variants={variants ?? defaultVariant}
      >
        {children}
      </motion.div>
    );
}

