import './App.css';
import React, { useEffect, useState } from 'react'
//Array de objetos!!!
const audios = [
  {
    key: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    id: 'Audio 1',
    code: 81
  },
  {
    key: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    id: 'Audio 2',
    code: 87
  },
  {
    key: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    id: 'Audio 3',
    code: 69
  },
  {
    key: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    id: 'Audio 4',
    code: 65
  },
  {
    key: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 
    id: 'Audio 5',
    code: 83
  },
  {
    key: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 
    id: 'Audio 6',
    code: 68
  },
  {
    key: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', 
    id: 'Audio 7',
    code: 90
  },
  {
    key: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', 
    id: 'Audio 8',
    code: 88
  },
  {
    key: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    id: 'Audio 9',
    code: 67
  }
]

function Display(props) {
  return (
    <div id="display">
      {props.text}
    </div>
  )
}

//tengo que hacer funcionar con los botones, obtener el audio element mediante el id, dentro del componente App
function DrumPad(props) {
  function playAudio(event) {
      console.log(props.power)
    if (props.power) {
      props.setText(event.target.id)
      event.target.firstElementChild.play()
      event.target.className = 'pulsed'
      setTimeout(() => {
        event.target.className = 'drum-pad'
      }, 100)
    }
  }
  const pads = audios.map((audio) => {
    return (
      <div className="drum-pad" key={audio.key} id={audio.id} onClick={playAudio} >
        {audio.key}
        <audio src={audio.url} className="clip" id={audio.key} ></audio>
      </div>
      )
    }
  )
  return (pads)

}

function App() {
  const [displayText, setText] = useState('Play!')
  const [power, setPower] = useState(true)
  const [count, setCount] = useState(0)
  const handlePower = (event) => {
    if (power) {
      event.target.style.background = '#CC0000'
      setPower(false)
    } else {
      event.target.style.background = 'darkgreen'
      setPower(true)
    }
  }
  const handleKeyDown = ((event) => {
    const elmt = (document.getElementById(event.key.toUpperCase()))
      console.log(power)
    if (elmt && power) {
      setText(elmt.parentNode.id)
      elmt.play()
      elmt.parentNode.className = 'pulsed'
      setTimeout(() => {
        elmt.parentNode.className = 'drum-pad'
      }, 100)
    }
  })
/*la vuelta aqui fue que siempre hay que desmontar el eventListener,
 sino eso toma el valor de power que hay en un inicio siempre, tambien
 es importante el segundo argumento de useEffect para que se renderice otra vez
 */
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown) 
    setCount(count + 1)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [power])
  return (
    <div id="drum-machine" >
      <div id="sounds-panel">
        <DrumPad power={power} setText={setText}/> 
      </div>
      <div id="control-panel">
        <div id="power" onClick={handlePower}></div>
        <Display text={displayText}/>
      </div>
    </div>
  )
}
export default App
