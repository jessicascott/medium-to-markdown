chrome.storage.local.get(['mediumToMarkdown'], result => {
  const content = document.querySelector('.content')
  content.innerText = result.mediumToMarkdown
})
