const scriptURL = 'https://script.google.com/macros/s/AKfycbzk-H_RIHz8xHlWvNM8fVHUqEDq-vXLEYEO17kOzUS0gQy4NjWMQEFxC8zP3Fm-PsV4ew/exec'
const form = document.forms['submit-to-google-sheet']
const btnSubmit = document.querySelector('.btn-submit')
const btnLoading = document.querySelector('.btn-loading')
const alert = document.querySelector('.alert')

form.addEventListener('submit', e => {
  e.preventDefault()
  btnSubmit.classList.toggle('hidden')
  btnLoading.classList.toggle('hidden')
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      btnSubmit.classList.toggle('hidden')
      btnLoading.classList.toggle('hidden')
      form.reset()
      alert.classList.toggle('hide-alert')
      setTimeout(() => {
        alert.classList.toggle('hide-alert')
      }, 3000);
    })
    .catch(error => console.error('Error!', error.message))
})