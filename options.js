let listtabs = document.querySelector('.tabs')

function app(tabs) {
  logTabs(tabs)

}

function logTabs(tabs) {
  for (let i = 0; i < tabs.length; i++) {
    let div = document.createElement('div')
    let subDiv = document.createElement('div')
    let input = document.createElement('input')
    let btn = document.createElement('div')
    let p = document.createElement('p')
    let tabTitle = document.createTextNode(`${tabs[i].title}`)
    let btnIcon = document.createElement('i')
    let titleIcon = document.createElement('img')
    titleIcon.src = tabs[i].favIconUrl
    titleIcon.className = 'title-icon'
    btnIcon.className = 'fa-solid fa-floppy-disk icon'
    input.className = `input-volume-${i}`
    input.classList.add('input-volume')
    input.type = 'range'
    input.min = '0'
    input.max = '100'
    input.value = '80'
    btn.className = 'save-volume-btn'
    div.className = 'tab'
    subDiv.className = 'sub-div'
    p.className = 'title'
    btn.innerHTML = `save`
    subDiv.appendChild(input)
    subDiv.appendChild(btn)
    p.appendChild(tabTitle)
    div.appendChild(titleIcon)
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
      let volume = inputVolume[i].value
      console.log(listtabs)
      chrome.tabs.sendMessage(
        listtabs[i].id,
        {
          message: "adjust-volume",
          volume: volume
        })
    }
  }
}

chrome.tabs.query({active: false}).then(app, onError);

