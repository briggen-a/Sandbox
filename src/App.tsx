import { useState } from 'react'
import { Layout } from './components/Layout'
import { SummaryScreen } from './components/SummaryScreen'
import { EntryScreen } from './components/EntryScreen'
import { ConfigScreen } from './components/ConfigScreen'

function App() {
  const [activeScreen, setActiveScreen] = useState<'SUMMARY' | 'ENTRY' | 'CONFIG'>('SUMMARY')

  return (
    <Layout activeScreen={activeScreen} onScreenChange={setActiveScreen}>
      {activeScreen === 'SUMMARY' && <SummaryScreen />}
      {activeScreen === 'ENTRY' && <EntryScreen />}
      {activeScreen === 'CONFIG' && <ConfigScreen />}
    </Layout>
  )
}

export default App
