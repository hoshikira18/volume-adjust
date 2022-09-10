chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})

function buttonClicked(tab) {
  let msg = {
    txt: "adjust-volume"
  }
  chrome.tabs.sendMessage(tab.id, msg)
}