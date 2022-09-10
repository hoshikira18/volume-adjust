chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "hello") {
    let mediaElements = document.querySelectorAll('video, audio')
    for (let i = 0; i < mediaElements.length; i++) {
      let volume = parseFloat(message.volume) / 100
      mediaElements[i].volume = volume
    }
  }
})

function gotMessage(message, sender, sendResponse) {
  console.log(message.message)
}