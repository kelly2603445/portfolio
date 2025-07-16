// Portfolio filter functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")

      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category")

        if (filterValue === "all" || category === filterValue) {
          item.classList.remove("hidden")
          item.style.display = "block"
        } else {
          item.classList.add("hidden")
          setTimeout(() => {
            if (item.classList.contains("hidden")) {
              item.style.display = "none"
            }
          }, 300)
        }
      })
    })
  })
})
