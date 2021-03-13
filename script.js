
function initTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  if((tabMenu.length) && (tabContent.length)) {
    tabContent[0].classList.add('ativo')
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      }) 
    })
  }
}
initTab()


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativoClass = 'ativo'
  if(accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);
    function activeAccordion() {
      this.classList.toggle(ativoClass)
      this.nextElementSibling.classList.toggle(ativoClass)
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()

function initAnimacaoScroll() {
  function initScrollSuave () {
    const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]')
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href)
      let topo = section.offsetTop;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    linksInterno.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  }
  initScrollSuave()
  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.6
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isMetade = (sectionTop - windowMetade) < 0
      if(isMetade)
        section.classList.add('ativo')
      else
        section.classList.remove('ativo')
    })
  }
  animaScroll()
  addEventListener('scroll', animaScroll)
}
initAnimacaoScroll()