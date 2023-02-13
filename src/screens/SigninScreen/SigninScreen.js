import { View, Text } from 'react-native'
import React from 'react'

import Logo from '../../components/logo/Logo'
import LoginForm from '../../components/form/LoginForm'

const SigninScreen = () => {
  return (
    <View>
      <Logo />
      <LoginForm />
    </View>
  )
}

export default SigninScreen