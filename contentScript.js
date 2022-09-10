chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "hello") {
    let videoElements = document.querySelectorAll('video, audio')
    for (let i = 0; i < videoElements.length; i++) {
      videoElements[i].volume = 0.1
      console.log(`Volume changed: ${videoElements[i].volume}`)
    }

  }
})

function gotMessage(message, sender, sendResponse) {
  console.log(message.message)
}