import '../css/reset.css'
import '../css/styles.css'

const body = document.body
const button = document.querySelector('button')

button.addEventListener('click', e => {
  body.classList.toggle('offsite-is-open')
})

// hot reload
if (process.env.NODE_ENV) {
  module.hot.accept()
}
