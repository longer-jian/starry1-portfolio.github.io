import {
    animate,
    inView,
  } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";
  
  inView(".self-jingyan-1 ", ({ target }) => {
    animate(
      target.querySelector(".animotion-left1"),
      { opacity: 1, x: [50, 0] },
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

  inView(".self-jingyan-2", ({ target }) => {
    animate(
      target.querySelector(".animotion-left2"),
      { opacity: 1, x: [50, 0] },
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

  inView(".self-jingyan-3", ({ target }) => {
    animate(
      target.querySelector(".animotion-left3"),
      { opacity: 1, x: [50, 0] },
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

  inView(".self-about-title", ({ target }) => {
    animate(
      target.querySelector(".animotion-left"),
      { opacity: 1, x: [50, 0] },
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

  inView(".self-about-content1", ({ target }) => {
    animate(
      target.querySelector(".animotion-left"),
      { opacity: 1, x: [50, 0] },
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

  inView(".self-about-content2", ({ target }) => {
    animate(
      target.querySelector(".animotion-left"),
      { opacity: 1, x: [50, 0] },
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

  inView(".home-content-editor", ({ target }) => {
    animate(
      target.querySelector(".content-editor-picture"),
      { opacity: 1, x: [-50, 0] , y: [-10, 0]},
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });

// home图片右侧文案动画
//   inView(".home-content-editor", ({ target }) => {
//     animate(
//       target.querySelector(".content-editor-content"),
//       { opacity: 1, x: [50, 0] , y: [-10, 0] },
//       {
//         duration: 0.9,
//         easing: [0.17, 0.55, 0.55, 1],
//       }
//     );
//   });

inView(".home-content-editor", ({ target }) => {
    animate(
      target.querySelector(".content-Startpedaling-picture"),
      { opacity: 1, x: [50, 0] , y: [-10, 0]},
      {
        duration: 0.9,
        easing: [0.17, 0.55, 0.55, 1],
      }
    );
  });