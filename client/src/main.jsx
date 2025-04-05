
// function App() {
  //   return (
    //     <Routes>
    //       <Route path="/audits" element={<AuditLogs />} />
    //     </Routes>
    //   )
    // }
    
    // export default App
    // // App.jsx

import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

