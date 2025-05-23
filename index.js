window.CADI_PREFIX = 'ccs_' // CADI Conversion Support
window.CADI_PARAM_KEYS_TO_STORE_WITHOUT_PREFIX = ['gclid', 'affiliate']
window.CADI_PARAM_KEYS_TO_STORE =
  window.CADI_PARAM_KEYS_TO_STORE_WITHOUT_PREFIX.map(
    key => window.CADI_PREFIX + key
  )
window.CADI_DURATION_DAYS = 7

try {
  window.addEventListener('DOMContentLoaded', storeParams)
} catch (error) {
  console.error(error)
}

function storeParams () {
  const params = new URLSearchParams(window.location.search)
  window.CADI_PARAM_KEYS_TO_STORE_WITHOUT_PREFIX.forEach(key => {
    if (!params.has(key)) return
    const paramValue = params.get(key)
    if (!paramValue) return
    storeParamValue(key, paramValue)
  })
}

function storeParamValue (key, value) {
  setCookie(window.CADI_PREFIX + key, value, window.CADI_DURATION_DAYS)
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

function loadCadiTrackingParams () {
  const params = {}
  for (const key of window.CADI_PARAM_KEYS_TO_STORE) {
    const cookieValue = getCookie(key)
    if (!cookieValue) continue
    const paramName = key.replace(window.CADI_PREFIX, '')
    params[paramName] = cookieValue
  }
  if (Object.keys(params).length === 0) return null
  return params
}

function getCookie (cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1)
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
  }
  return ''
}

try {
  window.loadCadiTrackingParams = loadCadiTrackingParams
} catch (error) {}
