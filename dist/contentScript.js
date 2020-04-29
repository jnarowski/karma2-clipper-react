console.log('YO!....')
console.log('YO....')
console.log('in content script')

chrome.runtime.onMessage.addListener(function(message, sender, response) {
  const { type } = message

  if (type === 'FetchDom') {
    response({
      url: window.location.href,
      html: document.documentElement.innerHTML,
    })
    return
  }
})

window.onload = () => {
  chrome.runtime.sendMessage({
    type: 'ContentMessage',
    url: window.location.href,
    html: document.documentElement.innerHTML,
  })
}
