export default (args) => {
  chrome.extension.getBackgroundPage().console.log(args)
}
