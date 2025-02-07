const PARAM_KEYS_TO_STORE = ['gclid', 'cadi_source']
const DURATION_DAYS = 7
const PREFIX = 'ccs_' // CADI Conversion Source

window.addEventListener('load', storeParams)

function storeParams () {
  const params = new URLSearchParams(window.location.search)
  PARAM_KEYS_TO_STORE.forEach(key => {
    if (!params.has(key)) return
    const paramValue = params.get(key)
    if (!paramValue) return
    storeParamValue(key, paramValue)
  })
}

function storeParamValue (key, value) {
  setCookie(PREFIX + key, value, DURATION_DAYS)
}

function setCookie (name, value, days) {
  let expires = ''
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}
