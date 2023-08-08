export const textContainerVariants = {
    visible: {
        transition: {
            staggerChildren: .3,
            delayChildren: .6
          }
    }
}

export const fadeIn =  {

    hidden: {
        y: "100%",
        opacity: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
      },
    visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
}