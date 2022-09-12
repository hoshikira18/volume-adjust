chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})

chrome.tabs.onUpdate.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(
      tabId,
      {
        message: 'adjust-volume'
      }
    )
  }
})