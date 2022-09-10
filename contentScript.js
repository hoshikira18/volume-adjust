chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "hello") {
    alert('done')
  }
})

function gotMessage(message, sender, sendResponse) {
  console.log(message.message)
}