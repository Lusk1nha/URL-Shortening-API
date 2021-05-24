const api_key = '752edb1730264a8ebc4883024f543c5d'

export const ShortLink = async (user_URL, callback) => {
  const URL_base = 'https://api.rebrandly.com/v1/links/new'
  const URL_parameters = `?apikey=${api_key}&destination=${user_URL}`
  const URL_complete = `${URL_base}${URL_parameters}`

  const response = await fetch(URL_complete)
  const data = await response.json()
  return callback(user_URL, data.shortURL)
}