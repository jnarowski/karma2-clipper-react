import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'webext-redux'
import fetchPageData from 'utils/fetchPageData'
import scrapeLinkedinContact from 'utils/scrapeLinkedinContact'
import scrapeTwitterContact from 'utils/scrapeTwitterContact'

// components
import PopupApp from './components/Popup'
// style
import 'antd/dist/antd.css'

const store = new Store()

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PopupApp />
    </Provider>,
    document.getElementById('popup-root')
  )
})

window.onload = async () => {
  const pageData = await fetchPageData()
  let contact = {}

  if (pageData.url.contains('linkedin')) {
    contact = await scrapeLinkedinContact(pageData.html)
  }
  if (pageData.url.contains('twitter')) {
    contact = await scrapeTwitterContact(pageData.html)
  }

  if (contact.first_name || contact.avatarUrl) {
    store.dispatch({ type: 'LOAD_FORM', payload: contact })
  }

  chrome.runtime.sendMessage({ type: 'MessageFromPopup' }, function (response) {
    store.dispatch({ type: 'LOAD_DATA', payload: response })
  })
}
