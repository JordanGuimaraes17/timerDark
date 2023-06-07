import Music from './music.js'
const modalDisplay = {
  buttonTreeOn: document.querySelector('.tree-on'),
  buttonTreeOff: document.querySelector('.tree-off'),
  buttonRainOn: document.querySelector('.rain-on'),
  buttonRainOff: document.querySelector('.rain-off'),
  buttonHouseOn: document.querySelector('.house-on'),
  buttonHouseOff: document.querySelector('.house-off'),
  buttonFireOn: document.querySelector('.fire-on'),
  buttonFireOff: document.querySelector('.fire-off'),
  buttonSoundOn: document.querySelector('.sound-on'),
  buttonSoundOff: document.querySelector('.sound-off'),
  buttonWhite: document.querySelector('.sun'),
  buttonDark: document.querySelector('.moon'),
  buttonBody: document.querySelector('.body'),

  treeOff() {
    modalDisplay.reset()
    Music.buttonPressFlorest.play()
    Music.bgAudio.pause()

    modalDisplay.buttonTreeOn.classList.remove('hide')
    modalDisplay.buttonTreeOff.classList.add('hide')
  },
  treeOn() {
    Music.buttonPressFlorest.pause()

    modalDisplay.buttonTreeOn.classList.add('hide')
    modalDisplay.buttonTreeOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  rainOff() {
    modalDisplay.reset()
    Music.buttonPressRain.play()
    Music.bgAudio.pause()
    modalDisplay.buttonRainOn.classList.remove('hide')
    modalDisplay.buttonRainOff.classList.add('hide')
  },
  rainOn() {
    Music.buttonPressRain.pause()
    modalDisplay.buttonRainOn.classList.add('hide')
    modalDisplay.buttonRainOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  houseOff() {
    modalDisplay.reset()
    Music.buttonPressHouse.play()
    Music.bgAudio.pause()
    modalDisplay.buttonHouseOn.classList.remove('hide')
    modalDisplay.buttonHouseOff.classList.add('hide')
  },
  houseOn() {
    Music.buttonPressHouse.pause()
    modalDisplay.buttonHouseOn.classList.add('hide')
    modalDisplay.buttonHouseOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  fireOff() {
    modalDisplay.reset()
    Music.buttonPressFire.play()
    Music.bgAudio.pause()
    modalDisplay.buttonFireOn.classList.remove('hide')
    modalDisplay.buttonFireOff.classList.add('hide')
  },
  fireOn() {
    Music.buttonPressFire.pause()
    modalDisplay.buttonFireOn.classList.add('hide')
    modalDisplay.buttonFireOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  soundOnButtonAction() {
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')

    Music.bgAudio.pause()
  },
  soundOffButtonAction() {
    modalDisplay.reset()
    modalDisplay.buttonSoundOn.classList.remove('hide')
    modalDisplay.buttonSoundOff.classList.add('hide')
    Music.bgAudio.play()
  },
  reset() {
    modalDisplay.treeOn()
    modalDisplay.rainOn()
    modalDisplay.houseOn()
    modalDisplay.fireOn()
  },
  resetTimer() {
    Music.buttonPressFire.pause()
    Music.bgAudio.pause()
    Music.buttonPressHouse.pause()
    Music.buttonPressRain.pause()
    Music.buttonPressFlorest.pause()
    modalDisplay.reset()

    modalDisplay.soundOnButtonAction()
  },
  dark() {
    modalDisplay.buttonDark.classList.remove('hide')
    modalDisplay.buttonWhite.classList.add('hide')
    modalDisplay.buttonBody.classList.add('dark')
  },
  white() {
    modalDisplay.buttonDark.classList.add('hide')
    modalDisplay.buttonWhite.classList.remove('hide')
    modalDisplay.buttonBody.classList.remove('dark')
  }
}
export default modalDisplay
