let btn = document.querySelector('.btn')

btn.onclick = () => {
  console.log(chrome.tabs)
  console.log(chrome)
  chrome.tabs.sendMessage(
    tab.id,
    {
      message: "hello"
    }
  )
}
