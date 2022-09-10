chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "hello") {
    let mediaElements = document.querySelectorAll('video, audio')
    for (let i = 0; i < mediaElements.length; i++) {
      mediaElements[i].volume = message.volume
      console.log(`Now volume: ${mediaElements[i].volume}`)
    }
  }
})

function gotMessage(message, sender, sendResponse) {
  console.log(message.message)
}