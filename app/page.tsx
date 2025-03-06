'use client'

import { useState } from "react"
import { Header, TextInput, ResultsDisplay } from "@/components/SentimentAnalysis"

export default function Home() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [selectedSample, setSelectedSample] = useState<number | null>(null)

  const analyzeSentiment = async () => {
    if (!text.trim()) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language: 'fa', maxKeyPhrases: 5 })
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 min-h-screen relative font-yekan" dir="rtl">
     
     

      <div className="max-w-7xl mx-auto space-y-8 py-8">
        <Header />

  
        <div className="flex flex-col lg:flex-row gap-8">
       
          <div className="w-full lg:w-1/2">
            <TextInput 
              text={text}
              setText={setText}
              loading={loading}
              selectedSample={selectedSample}
              setSelectedSample={setSelectedSample}
              onAnalyze={analyzeSentiment}
            />
          </div>

  
          <div className="w-full lg:w-1/2">
            <ResultsDisplay result={result} />
          </div>
        </div>
      </div>
    </div>
  )
}
