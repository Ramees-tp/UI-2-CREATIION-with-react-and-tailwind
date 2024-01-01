import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Head from './Head'
import Content from './Content'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Head/>
    <Content/>
  </React.StrictMode>,
)
