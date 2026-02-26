import React from 'react'
import VoiceCard from './components/VoiceCard'

export default function App(){
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-semibold">The Most Realistic Voice AI Platform</h1>
          <p className="mt-2 text-green-400">Personalized voice agent demo — dark theme</p>
        </header>
        <VoiceCard />
        <footer className="mt-8 text-center text-sm text-gray-400">Built with ❤️ — ElevenLabs link: <a className="text-green-400" href="https://elevenlabs.io" target="_blank" rel="noreferrer">ElevenLabs</a></footer>
      </div>
    </div>
  )
}
