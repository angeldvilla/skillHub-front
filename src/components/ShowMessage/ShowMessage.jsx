import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const ShowMessage = (message, type = 'success') => {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: type === 'success' ? '#27a149' : '#992b2b'
    }
  }).showToast()
}
