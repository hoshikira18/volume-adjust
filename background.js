// click icon => option page extension
chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    // Apply previous settings
    chrome.tabs.sendMessage(
      tabId,
      {
        message: "restore_volume",
      }
    );
  }
);