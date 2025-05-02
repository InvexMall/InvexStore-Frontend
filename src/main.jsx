import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 사용하기 위해 추가

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)