const screenHeight = window.innerHeight
const projectBtn = document.querySelector('#project-btn')
const skillsBtn = document.querySelector('#skills-btn')
const aboutBtn = document.querySelector('#about-btn')

aboutBtn.addEventListener('click', () =>
  window.scrollTo({ behavior: 'smooth', top: screenHeight - screenHeight / 3 })
)

projectBtn.addEventListener('click', () =>
  window.scrollTo({ behavior: 'smooth', top: screenHeight * 1.5 })
)

skillsBtn.addEventListener('click', () =>
  window.scrollTo({ behavior: 'smooth', top: screenHeight * 2.5 })
)
