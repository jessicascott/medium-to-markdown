chrome.browserAction.disable()

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (sender.tab.url.includes('https://medium.com/p/')) {
    chrome.browserAction.enable(sender.tab.id)
  }
})

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: 'main.js' }, () => {
    chrome.tabs.create({ url: chrome.extension.getURL('markdown.html') })
  })
})
