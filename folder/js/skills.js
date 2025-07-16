// Animate skill bars when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-progress")

  const animateSkillBars = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBar = entry.target
        const width = skillBar.getAttribute("data-width")

        setTimeout(() => {
          skillBar.style.width = width + "%"
        }, 200)

        observer.unobserve(skillBar)
      }
    })
  }

  const skillObserver = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5,
  })

  skillBars.forEach((bar) => {
    skillObserver.observe(bar)
  })
})
