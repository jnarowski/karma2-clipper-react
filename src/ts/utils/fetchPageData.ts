export default async () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'FetchDom' }, (dom) => {
          resolve(dom)
        })
      }
    )
  })
}
