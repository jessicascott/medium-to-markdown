const TurndownService = require('turndown').default
const td = new TurndownService()

const mediumArticle = document.querySelector('.section-inner')
const articleSection = mediumArticle.cloneNode(true)

// Tweak some things for code snippets
const preBlocks = articleSection.querySelectorAll(
  '.graf--pre',
  '.graf-after--p'
)
for (let block of preBlocks) {
  if (block.previousSibling.localName !== 'pre') {
    block.innerHTML = `\`\`\`<br/>${block.innerHTML}`
  }

  if (block.nextSibling.localName !== 'pre') {
    block.innerHTML = `${block.innerHTML}<br/>\`\`\``
  }
}

// Replace and decode all medium links
const anchorTags = articleSection.querySelectorAll('.markup--anchor')
for (let tag of anchorTags) {
  const linkString = decodeURIComponent(tag.href).replace(
    'https://medium.com/r/?url=',
    ''
  )
  tag.href = linkString
}

// Switch all <code><a>..</code> to be <a><code>..</a>
const codeBlocks = articleSection.querySelectorAll('.markup--code')
for (let block of codeBlocks) {
  if (block.firstChild.localName === 'a') {
    block.firstChild.innerHTML = `<code>${block.firstChild.innerHTML}</code>`
    block.outerHTML = block.innerHTML
  }
}

const articleAsMarkdown = td.turndown(articleSection.innerHTML)

chrome.storage.local.set({ mediumToMarkdown: articleAsMarkdown })
