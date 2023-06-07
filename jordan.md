const Music = {
buttonPressAudio: new Audio(
'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
),
kitchenTimer: new Audio(
'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
),
bgAudio: new Audio(
'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
),
buttonPressFlorest: new Audio('../music/Floresta.wav'),
buttonPressRain: new Audio('../music/Chuva.wav'),
buttonPressHouse: new Audio('../music/Cafeteria.wav'),
buttonPressFire: new Audio('../music/Lareira.wav')
}

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
return
}
if (seconds <= 0) {
seconds = 10
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
}
}

let minutes = Number(modalButtons.minutesDisplay.textContent)
let timerTimeOut
modalButtons.buttonPlay.addEventListener('click', modalButtons.play)
modalButtons.buttonPause.addEventListener('click', modalButtons.pause)
modalButtons.buttonStop.addEventListener('click', modalButtons.stop)
modalButtons.buttonSet.addEventListener('click', modalButtons.setButtonAction)
modalButtons.moreDisplay.addEventListener('click', modalButtons.addMinutes)
modalButtons.lessDisplay.addEventListener('click', modalButtons.subtMinutes)

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
