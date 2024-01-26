import { getAuth, createUserWithEmailAndPassword } from '../firebase/Config'

const handleRegister = (email, password, confirmPassword, navigation, setLogged) => {
  if (password !== confirmPassword) {
    console.log('Passwords do not match')
    return
  }

  const auth = getAuth()

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User registered successfully:', userCredential.user)
      setLogged(true)
      navigation.navigate('Main')
    })
    .catch((error) => {
      if (error.code === 'auth/weak-password') {
        console.log('Weak password')
      } else if (error.code === 'auth/email-already-in-use') {
        console.log('Email is already in use')
      } else {
        console.log(error.code + ' ' + error.message)
      }
    })
}

const RegisterComponent = {
  handleRegister,
}

export default RegisterComponent
