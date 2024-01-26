import { getAuth, signInWithEmailAndPassword } from '../firebase/Config'

const handleLogin = (email, password, setLogged, navigation) => {
  const auth = getAuth()

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user)
      setLogged(true)
      navigation.navigate('Main')
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        console.log('Invalid credentials')
      } else if (error.code === 'auth/too-many-requests') {
        console.log('Too many attempts to login')
      } else {
        console.log(error.code + ' ' + error.message)
      }
    })
}

const LoginComponent = {
  handleLogin,
}

export default LoginComponent
