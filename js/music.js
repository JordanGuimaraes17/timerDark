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
  buttonPressFire: new Audio('../music/Lareira.wav'),
  sliderOne: document.querySelector('.sliderOne'),
  sliderTwo: document.querySelector('.sliderTwo'),
  sliderTree: document.querySelector('.sliderTree'),
  sliderFour: document.querySelector('.sliderFour'),

  initialize() {
    Music.buttonPressFlorest.loop = true
    Music.buttonPressRain.loop = true
    Music.buttonPressHouse.loop = true
    Music.buttonPressFire.loop = true
    Music.bgAudio.loop = true
    Music.sliderOne.addEventListener('input', Music.updateVolume)
    Music.sliderTwo.addEventListener('input', Music.updateVolume)
    Music.sliderTree.addEventListener('input', Music.updateVolume)
    Music.sliderFour.addEventListener('input', Music.updateVolume)
  },

  updateVolume() {
    const volOne = Music.sliderOne.value / 100
    const volTwo = Music.sliderTwo.value / 100
    const volTree = Music.sliderTree.value / 100
    const volFour = Music.sliderFour.value / 100
    Music.buttonPressFlorest.volume = volOne
    Music.buttonPressRain.volume = volTwo
    Music.buttonPressHouse.volume = volTree
    Music.buttonPressFire.volume = volFour
  }
}
Music.initialize()
export default Music
