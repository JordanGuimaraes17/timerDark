import modalDisplay from './display.js'
import Music from './music.js'
let timerTimeOut
const modalButtons = {
  buttonPlay: document.querySelector('.play'),
  buttonPause: document.querySelector('.pause'),
  buttonStop: document.querySelector('.stop'),
  buttonSet: document.querySelector('.set'),
  moreDisplay: document.querySelector('.more'),
  lessDisplay: document.querySelector('.less'),
  minutesDisplay: document.querySelector('.minutes'),
  secondsDisplay: document.querySelector('.seconds'),

  play() {
    modalButtons.buttonPlay.classList.add('hide')
    modalButtons.buttonPause.classList.remove('hide')
    modalButtons.buttonSet.classList.add('hide')
    modalButtons.buttonStop.classList.remove('hide')
    Music.buttonPressAudio.play()
    modalButtons.countdown()
  },
  pause() {
    modalButtons.buttonPause.classList.add('hide')
    modalButtons.buttonPlay.classList.remove('hide')
    Music.buttonPressAudio.play()
    clearTimeout(timerTimeOut)
  },
  stop() {
    modalButtons.buttonPlay.classList.remove('hide')
    modalButtons.buttonPause.classList.add('hide')
    modalButtons.buttonSet.classList.remove('hide')
    modalButtons.buttonStop.classList.add('hide')
    Music.buttonPressAudio.play()
    modalButtons.resetTimer()
  },
  setButtonAction() {
    const newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      modalButtons.resetTimer()
      return
    }
    const parsedMinutes = Number(newMinutes)
    if (!isNaN(parsedMinutes)) {
      minutes = parsedMinutes
      modalButtons.updateTimerDisplay(minutes, 0)
    } else {
      alert('Por favor, insira um valor válido para os minutos.')
    }
  },

  countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(modalButtons.minutesDisplay.textContent)
      let seconds = Number(modalButtons.secondsDisplay.textContent)
      modalButtons.updateTimerDisplay(minutes, 0)
      if (minutes + seconds <= 0) {
        modalButtons.stop()
        Music.kitchenTimer.play()
        Music.bgAudio.pause()
        modalDisplay.resetTimer()

        return
      }
      if (seconds <= 0) {
        seconds = 2
        --minutes
      }
      modalButtons.updateTimerDisplay(minutes, String(seconds - 1))
      modalButtons.countdown()
    }, 1000)
  },
  updateTimerDisplay(minutes, seconds) {
    modalButtons.minutesDisplay.textContent = String(minutes).padStart(2, '0')
    modalButtons.secondsDisplay.textContent = String(seconds).padStart(2, '0')
  },
  resetTimer() {
    modalButtons.updateTimerDisplay(minutes, 0)
    clearInterval(timerTimeOut)
  },

  resetSound() {
    modalButtons.buttonSoundOn.classList.remove('hide')
    modalButtons.buttonSoundOff.classList.add('hide')
  },

  addMinutes() {
    Music.buttonPressAudio.play()
    minutes += 5
    modalButtons.updateTimerDisplay(minutes, 0)
  },
  subtMinutes() {
    Music.buttonPressAudio.play()
    if (minutes >= 5) {
      minutes -= 5
      modalButtons.updateTimerDisplay(minutes, 0)
    }
  }
}
let minutes = Number(modalButtons.minutesDisplay.textContent)
export default modalButtons
