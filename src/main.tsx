import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { MyPage } from './pages/MyPage/MyPage'
import { CreateUser } from './pages/CreateUser/CreateUser'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/lucasezidro" element={<MyPage />} />
        <Route path="//create-user" element={<CreateUser />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
