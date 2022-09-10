chrome.action.onClicked.addListener(function (tab) {
  console.log(tab)
  chrome.tabs.sendMessage(
    tab.id,
    {
      message: "hello"
    }
  )
})

function buttonClicked(tab) {
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg)
}