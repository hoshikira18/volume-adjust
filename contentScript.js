// get message
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "adjust-volume") {
    let videoElements = document.querySelectorAll('video')
    let audioElements = document.querySelectorAll('audio')
    let mediaElements = [...audioElements, ...videoElements]
    for (let i = 0; i < mediaElements.length; i++) {
      let volume = parseFloat(message.volume) / 100
      mediaElements[i].volume = volume
      console.log(`Now volume: ${message.volume}`)
    }
  }
})
