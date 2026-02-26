import React, {useState} from 'react'

export default function VoiceCard(){
  const [playing, setPlaying] = useState(false)
  const audioRef = React.useRef<HTMLAudioElement|null>(null)

  const handlePlay = async ()=>{
    if(!audioRef.current){
      audioRef.current = new Audio('/welcome.mp3')
      audioRef.current.onended = ()=> setPlaying(false)
    }
    if(playing){
      audioRef.current.pause();
      setPlaying(false)
    } else {
      try{
        await audioRef.current.play()
        setPlaying(true)
      }catch(e){
        console.error(e)
      }
    }
  }

  return (
    <div className="bg-[rgba(20,20,20,0.6)] border border-[rgba(72,200,120,0.12)] p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium">Hallo, Jessy</h2>
          <p className="text-gray-300 mt-1">Dein personalisierter Voice Agent spricht dich beim Vornamen an.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePlay} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-md">{playing ? 'Pause' : 'Play'}</button>
          <a href="https://elevenlabs.io" target="_blank" rel="noreferrer" className="text-sm text-green-300 underline">ElevenLabs</a>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-24 bg-gradient-to-r from-green-600/20 to-transparent rounded-lg flex items-center justify-center text-green-200">Waveform Placeholder</div>
      </div>
    </div>
  )
}
