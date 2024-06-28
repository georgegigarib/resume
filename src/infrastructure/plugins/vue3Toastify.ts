import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

export { Vue3Toastify }
export const toastifyOptions: ToastContainerOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  hideProgressBar: false,
  icon: true,
  rtl: false,
  limit: 2,
  newestOnTop: true
}

//DOC:https://vue3-toastify.js-bridge.com/get-started/introduction.html
