// AuthHandler.js

import { useEffect, useState } from 'react'
import { auth, signOut } from '../firebase/Config'

export function useAuth(navigation) {

  const [logged, setLogged] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const [email, setEmail] = useState('')


  const handleLogout = async () => {
    try {
      await signOut(auth)

      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          setLogged(false) 
          navigation.navigate('Welcome')
          unsubscribe() // Unsubscribe to avoid memory leaks
        }
      })
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLogged(true)
        setEmail(user.email)
      } else {
        setLogged(false)
      }
      setInitializing(false)
    })

    return () => unsubscribe()
  }, [])

  return { logged, initializing, setLogged, handleLogout, email }
}
