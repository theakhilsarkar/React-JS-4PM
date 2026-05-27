import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// component - Individual block/part of UI
// component is one type of function which return UI/Element.
// Functional Component --->

// component can return only one UI element at a time.