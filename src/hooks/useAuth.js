import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { AuthSliceSelectors } from '../redux/slice/AuthSlice'

const useAuth = () => {
    const user = useSelector(AuthSliceSelectors.selectUserInfo)
    return { user }
}

export default useAuth