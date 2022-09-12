// click icon => option page extension
chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})

// If page reload => get volume from local store
chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    // get from storage
    chrome.storage.sync.get(['key'], function (result) {
      console.log('Value currently is ' + result.key);
      // send message to content script
      chrome.tabs.sendMessage(tabId, {
        message: "adjust-volume", volume: parseFloat(result.key)
      })
    });
  }
);