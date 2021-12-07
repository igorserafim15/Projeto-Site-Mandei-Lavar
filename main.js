// Dropdown Faq
const dtFaq = document.querySelectorAll('.faq-accordion dt')

function toggleAccordionFaq() {
  dtFaq.forEach(i => {
    i.classList.remove('show')
    i.nextElementSibling.classList.remove('show')
  })
  this.classList.toggle('show')
  this.nextElementSibling.classList.toggle('show')
}

dtFaq.forEach(dt => dt.addEventListener('click', toggleAccordionFaq))