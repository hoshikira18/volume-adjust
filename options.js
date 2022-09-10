let listtabs = document.querySelector('.tabs')

function app(tabs) {
  logTabs(tabs)

}

function logTabs(tabs) {
  for (let i = 0; i < tabs.length; i++) {
    let div = document.createElement('div')
    let subDiv = document.createElement('div')
    let input = document.createElement('input')
    let btn = document.createElement('button')
    let p = document.createElement('p')
    let tabTitle = document.createTextNode(`${tabs[i].title}`)
    let btnText = document.createTextNode('Save')
    input.className = `input-volume-${i}`
    input.classList.add('input-volume')
    btn.className = 'save-volume-btn'
    div.className = 'tab'
    subDiv.className = 'sub-div'
    p.className = 'title'
    btn.appendChild(btnText)
    subDiv.appendChild(input)
    subDiv.appendChild(btn)
    p.appendChild(tabTitle)
    div.appendChild(p)
    div.appendChild(subDiv)
    listtabs.appendChild(div)
  }
  adjustVolume(tabs)
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function adjustVolume(listtabs) {
  let btnSaveVolume = document.querySelectorAll('.save-volume-btn')
  let inputVolume = document.querySelectorAll('.input-volume')
  for (let i = 0; i < btnSaveVolume.length; i++) {
    btnSaveVolume[i].onclick = () => {
      let volume = parseFloat(inputVolume[i].value) / 100
      console.log(listtabs[i].id)
      chrome.tabs.sendMessage(
        listtabs[i].id,
        {
          message: "hello",
          volume: volume
        })
    }
  }
}


chrome.tabs.query({active: false}).then(app, onError);

