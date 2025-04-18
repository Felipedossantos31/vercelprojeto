import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Card />
  </StrictMode>,
)