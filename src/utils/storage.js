const INFO_KEY = 'hm_shopping_info'
const SEARCH_HISTORY_KEY = 'search_history_info'

export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getHistoryInfo = () => {
  const result = localStorage.getItem(SEARCH_HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

export const setHistoryInfo = (arr) => {
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(arr))
}
