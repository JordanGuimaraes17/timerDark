import modalButtons from './buttons.js'
import modalDisplay from './display.js'

modalButtons.buttonPlay.addEventListener('click', modalButtons.play)
modalButtons.buttonPause.addEventListener('click', modalButtons.pause)
modalButtons.buttonStop.addEventListener('click', modalButtons.stop)
modalButtons.buttonSet.addEventListener('click', modalButtons.setButtonAction)
modalButtons.moreDisplay.addEventListener('click', modalButtons.addMinutes)
modalButtons.lessDisplay.addEventListener('click', modalButtons.subtMinutes)

modalDisplay.buttonWhite.addEventListener('click', modalDisplay.dark)
modalDisplay.buttonDark.addEventListener('click', modalDisplay.white)
modalDisplay.buttonTreeOff.addEventListener('click', modalDisplay.treeOff)
modalDisplay.buttonTreeOn.addEventListener('click', modalDisplay.treeOn)
modalDisplay.buttonRainOff.addEventListener('click', modalDisplay.rainOff)
modalDisplay.buttonRainOn.addEventListener('click', modalDisplay.rainOn)
modalDisplay.buttonHouseOff.addEventListener('click', modalDisplay.houseOff)
modalDisplay.buttonHouseOn.addEventListener('click', modalDisplay.houseOn)
modalDisplay.buttonFireOff.addEventListener('click', modalDisplay.fireOff)
modalDisplay.buttonFireOn.addEventListener('click', modalDisplay.fireOn)
modalDisplay.buttonSoundOff.addEventListener(
  'click',
  modalDisplay.soundOffButtonAction
)
modalDisplay.buttonSoundOn.addEventListener(
  'click',
  modalDisplay.soundOnButtonAction
)
