chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    chrome.storage.sync.get(['key'], function (result) {
      console.log('Value currently is ' + result.key);
      chrome.tabs.sendMessage(tabId, {
        message: "adjust-volume", volume: parseFloat(result.key)
      })
    });
  }
);