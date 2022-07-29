import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false)
<<<<<<< HEAD
  console.log(login, 'context')
=======
  console.log(login,"context")
>>>>>>> 60dd528bed585e034a8b397feb99ee6118f8b209
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
