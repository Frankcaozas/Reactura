import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@unocss/reset/tailwind.css'
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main p='x-10 y-20' un-text="center gray-700 dark:gray-200 ma">
      <App />
    </main>
  </React.StrictMode>
)
