console.log('YO!....')
console.log('YO....')
console.log('in content script')

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if (msg.from === 'popup' && msg.subject === 'DOMInfo') {
    response({
      html: document.documentElement.innerHTML,
    })
  }
})

window.onload = () => {
  chrome.runtime.sendMessage({
    type: 'ContentMessage',
    url: window.location.href,
    html: document.documentElement.innerHTML,
  })
}
