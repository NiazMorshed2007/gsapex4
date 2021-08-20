var tl = new TimelineLite();

tl.fromTo(
  ".circle",
  2,
  {
    top: 100 + "%",
    ease: Power1.easeOut,
    opacity: 0,
  },
  {
    top: 34 + "%",
    opacity: 1,
    stagger: 0.5,
  }
)
  .to(".layer", 1, {
    y: -100 + "%",
    ease: Power2.easeOut,
  })
  .to(".circle", 1, {
    left: 65 + "%",
    ease: Power2.easeOut,
    stagger: 0.2,
  })
  .fromTo(
    ".main",
    1,
    {
      opacity: 0,
      ease: Power1.ease,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    "span",
    0.2,
    {
      opacity: 0,
      rotate: 45 + "deg",
      ease: Power1.ease,
    },
    {
      opacity: 1,
      rotate: 0 + "deg",
      stagger: 0.045,
    }
  );
