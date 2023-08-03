import React from 'react'
import ReactDOM from 'react-dom/client'
import Ping from "./components/Ping.tsx";
import './styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Ping />
  </React.StrictMode>,
)
