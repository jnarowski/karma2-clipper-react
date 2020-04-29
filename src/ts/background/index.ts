import { createStore, applyMiddleware, compose } from 'redux'
import { wrapStore } from 'webext-redux'
import { configureApp } from './AppConfig'
import reducers, { loadState } from './store'
import thunk from 'redux-thunk'
import { fetchContact } from 'services/apiService'

const preloadedState = loadState()
const store = createStore(reducers, preloadedState, applyMiddleware(thunk))

configureApp(store)
wrapStore(store)

console.log('backgrounds...')

let currentData = { name: 'Jones' }

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log('message:', message)

  switch (message.type) {
    case 'ContentMessage':
      // if API response is found...
      // chrome.browserAction.setIcon({
      //   path: {
      //     '16': 'synqy-q_on.png',
      //     '19': 'synqy-q_on.png',
      //     '64': 'synqy-q_on.png',
      //     '128': 'synqy-q_on.png',
      //   },
      // })
      // apiCall(key: localStorage.get('whatever...'))

      const resp = await fetchContact({
        email: message.email,
        type: 'linkedin',
        url: message.url,
      })

      currentData = resp.data
      break
    case 'MessageFromPopup':
      console.log('sending', currentData)
      sendResponse(currentData)
      break
    default:
      console.error('Unrecognised message: ', message)
  }
})
