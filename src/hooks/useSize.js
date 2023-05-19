import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DefaultSize } from '../theme/size'

const useSize = () => {

    const [size, setSize] = useState(DefaultSize);

    return { size }
}

export default useSize
