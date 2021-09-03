/*Resize Navbar on Scroll*/
var navBar = document.querySelector(".navbar");
//when the scroll is higher than 20 vport height, add the sticky class to the tag width class name
window.onscroll = ()=>{
    this.scrollY>20?navBar.classList.add("sticky"):navBar.classList.remove("sticky");
}

//navtoggle
const navMenu = document.querySelector(".menu");
navToggle = document.querySelector(".toggle");
if(navToggle)
{
    navToggle.addEventListener("click", () =>
    {
        navMenu.classList.toggle("active");
    })
}
// closing menu when link is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction()
{
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))




//skill

const skills_wrap = document.querySelector(".about-progress"),
      skills_bar = document.querySelectorAll(".inner-bar");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      // every time we scroll checking, we exceeded the about-skills or not
      function checkScroll(el)
      {
          //getting the top position of about-skills relative to view port, in other words we need to get
          // amount of pixels between about-skills and the top edge of the window.
          let rect = el.getBoundingClientRect();
          // after knowing the amount of pixels between the top edge of about skills and the top edge of window
          // now we will check we exceeded the bottom edge of about skills or not
          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false;
      }
      function skillsEffect()
      {
          if(!checkScroll(skills_wrap)) return;
          skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
      }



