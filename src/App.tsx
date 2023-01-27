import { Outlet } from "react-router-dom"
import { GlobalTheme } from "./themes/theme"
import { AuthContextProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthContextProvider>
        <Outlet />
        <GlobalTheme />
    </AuthContextProvider>
  )
}

export default App
