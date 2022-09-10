chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "adjust-volume") {
    let videoElements = document.querySelectorAll('video')
    let audioElements = document.querySelectorAll('audio')
    let mediaElements = [...audioElements, ...videoElements]
    console.log(mediaElements)
    for (let i = 0; i < mediaElements.length; i++) {
      let volume = parseFloat(message.volume) / 100
      mediaElements[i].volume = volume
      console.log(`Now volume: ${message.volume}`)
    }
  }
})


function gotMessage(message, sender, sendResponse) {
  console.log(message.message)
}