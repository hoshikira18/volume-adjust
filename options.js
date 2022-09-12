let listtabs = document.querySelector('.tabs')

function app(tabs) {
  logTabs(tabs)
  initiaizeInput(tabs)
}

function logTabs(tabs) {
  for (let i = 0; i < tabs.length; i++) {
    let div = document.createElement('div')
    let subDiv = document.createElement('div')
    let p = document.createElement('p')
    let tabTitle = document.createTextNode(`${tabs[i].title}`)
    let titleIcon = document.createElement('img')
    titleIcon.src = tabs[i].favIconUrl
    titleIcon.className = 'title-icon'
    div.className = 'tab'
    subDiv.className = 'sub-div'
    p.className = 'title'
    // <div className = "slider-container" >
    //   <div className = "progress-bar" > < /div>
    // <input className="slider" type="range" min="0" max="100" value="50">
    //   <div className="thumb">
    //     <div className="thumbBtn"></div>
    //     <div className="volume-value"></div>
    //   </div>
    // </div>
    let sliderContainer = document.createElement('div')
    let progressBar = document.createElement('div')
    let sliderInput = document.createElement('input')
    let thumb = document.createElement('div')
    let thumbBtn = document.createElement('div')
    let volumeValue = document.createElement('div')
    sliderContainer.className = 'slider-container'
    progressBar.className = 'progress-bar'
    sliderInput.className = 'slider'
    thumb.className = 'thumb'
    thumbBtn.className = 'thumbBtn'
    volumeValue.className = 'volume-value'
    sliderInput.type = 'range'
    sliderInput.min = '0'
    sliderInput.max = '100'
    sliderInput.value = '50'
    thumb.appendChild(thumbBtn)
    thumb.appendChild(volumeValue)
    sliderContainer.appendChild(progressBar)
    sliderContainer.appendChild(sliderInput)
    sliderContainer.appendChild(thumb)
    // INPUT SLIDER
    subDiv.appendChild(sliderContainer)
    p.appendChild(tabTitle)
    div.appendChild(titleIcon)
    div.appendChild(p)
    div.appendChild(subDiv)
    listtabs.appendChild(div)
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}


function adjustVolume(listtabs, inputs) {
  for (let i = 0; i < inputs.length; i++) {
    let volume = inputs[i].value
    chrome.tabs.sendMessage(listtabs[i].id, {
      message: "adjust-volume", volume: volume
    })
  }
}

function initiaizeInput(listtabs) {
  let slider = document.querySelectorAll('.slider')
  let thumb = document.querySelectorAll('.thumb')
  let volumeValue = document.querySelectorAll('.volume-value')
  let progressBar = document.querySelectorAll('.progress-bar')

  for (let i = 0; i < slider.length; i++) {
    volumeValue[i].innerHTML = slider[i].value
    slider[i].oninput = function () {
      thumb[i].style.left = this.value + "%"
      volumeValue[i].innerHTML = this.value
      progressBar[i].style.width = this.value + "%"
      let volume = this.value
      chrome.storage.sync.set({key: volume}, function () {
        console.log('Value is set to ' + volume);
      });
      adjustVolume(listtabs, slider)
    }
  }
}


chrome.tabs.query({active: false}).then(app, onError);


