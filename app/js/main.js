window.onload = () => {
   document.querySelector('.main__image>p').style.top = `${(document.querySelector('.main__image').offsetHeight - document.querySelector('.main__image>p').offsetHeight) / 2}px`
   document.querySelector('.serv__square').style.top = `${(document.querySelector('.serv__list').offsetHeight - document.querySelector('.serv__square').offsetHeight) / 2}px`
   document.querySelector('.serv__square').style.left = `${(document.querySelector('.serv__list').offsetWidth - document.querySelector('.serv__square').offsetWidth) / 2}px`

   for (let i of document.querySelectorAll('.feedback__itemQuotes')) {
      i.style.top = `${(i.closest('.feedback__itemAuthor').offsetHeight - i.offsetHeight) / 2}px`
   }
   for (let i of document.querySelectorAll('.benefits__itemIcon>p')) {
      i.style.top = `${(i.closest('.benefits__itemIcon').offsetHeight - i.offsetHeight) / 2}px`
      i.style.left = `${(i.closest('.benefits__itemIcon').offsetWidth - i.offsetWidth) / 2}px`
   }
}