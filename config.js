export const PREFIX = 'ccs_' // CADI Conversion Support
export const PARAM_KEYS_TO_STORE_WITHOUT_PREFIX = ['gclid', 'affiliate']
export const PARAM_KEYS_TO_STORE = PARAM_KEYS_TO_STORE_WITHOUT_PREFIX.map(
  key => PREFIX + key
)
export const DURATION_DAYS = 7
