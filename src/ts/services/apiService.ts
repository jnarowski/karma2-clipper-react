import axios from 'axios'
import qs from 'qs'

const getApi = (options = {}) => {
  const params = {
    baseURL: 'https://app.karmacrm.com',
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'brackets', encode: false })
    },
  }

  const api = axios.create(params)

  return api
}

export const postAccountSignin = async ({ email, password }) => {
  const data = {
    account: { email, password },
  }

  return getApi().post('/accounts/sign_in.json', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const fetchContact = ({ email, url, type }) => {
  const apiToken = localStorage.getItem('apiToken')

  const params = {
    contact: {
      email,
      url,
      type,
    },
  }

  return getApi().get(
    `/api/v2/contacts/find_by_clipper.json?api_token=${apiToken}`,
    { params }
  )
}
