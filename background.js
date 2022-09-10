chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})

function buttonClicked(tab) {
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg)
}