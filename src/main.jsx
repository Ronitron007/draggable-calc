import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { enableMapSet } from 'immer'

enableMapSet()

ReactDOM.createRoot(document.getElementById('root1')).render(<App />)
