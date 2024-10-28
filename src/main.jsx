import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import r2wc from "@r2wc/react-to-web-component"

const WebGreeting = r2wc(App)

customElements.define("web-greeting", WebGreeting);
