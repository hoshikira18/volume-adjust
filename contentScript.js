const VOLUME_KEY = "volume_key"
const DEFAULT_VOLUME_PERCENTAGE = 100;
let currentVolume;


initializeCurrentVolume()
initializeRequestListeners()

function initializeCurrentVolume() {
  currentVolume = sessionStorage.getItem(VOLUME_KEY)
  console.log("Saved volume: " + currentVolume)

  if (currentVolume == null) {
    currentVolume = DEFAULT_VOLUME_PERCENTAGE
    sessionStorage.setItem(VOLUME_KEY, String(currentVolume))
  }

  currentVolume = Number(currentVolume)

  console.log("Updated volume: " + currentVolume)

}

function initializeRequestListeners() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "adjust_volume") {
      adjustVolume(message.volume)
    }
    if (message.message === "restore_volume") {
      setTimeout(() => {
        currentVolume = sessionStorage.getItem(VOLUME_KEY)
        adjustVolume(currentVolume)
        console.log("restore-volume: " + currentVolume)
      }, 15)
    }
  })
}

function adjustVolume(volume) {
  currentVolume = volume
  sessionStorage.setItem(VOLUME_KEY, String(currentVolume))
  let videoElements = document.querySelectorAll('video')
  let audioElements = document.querySelectorAll('audio')
  let mediaElements = [...audioElements, ...videoElements]

  for (let i = 0; i < mediaElements.length; i++) {
    mediaElements[i].volume = parseFloat(currentVolume) / 100
    console.log(`Now volume: ${currentVolume}`)
  }
}