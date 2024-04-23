// // document.addEventListener("DOMContentLoaded", function() {
// //     const slider = document.querySelector(".slider");
// //     const images = document.querySelectorAll(".slider img");
// //     let counter = 0;
  
// //     setInterval(() => {
// //       counter++;
// //       if (counter >= images.length) {
// //         counter = 0;
// //       }
// //       updateSlider();
// //     }, 2000);
  
// //     function updateSlider() {
// //       const offset = -100 * counter;
// //       slider.style.transform = `translateX(${offset}%)`;
// //     }
// //   });

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    let counter = 0;
  
    setInterval(() => {
      counter++;
      if (counter >= images.length) {
        counter = 0;
      }
      updateSlider();
    }, 2000);
  
    function updateSlider() {
      // Apply blur to all images except the one currently in focus
      images.forEach((image, index) => {
        if (index !== counter) {
          image.classList.add("blur");
        } else {
          image.classList.remove("blur");
        }
      });
  
      const offset = -100 * counter;
      slider.style.transform = `translateX(${offset}%)`;
    }
  });
  