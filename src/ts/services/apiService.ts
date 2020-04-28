import axios from 'axios'
import backgroundLog from 'utils/backgroundLog'
export const postAccountSignin = async ({ email, password }) => {
  const data = {
    account: { email, password },
  }

  backgroundLog('here...')

  return axios.post('https://app.karmacrm.com/accounts/sign_in.json', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
