import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ btnText, onClick }) => {
    return (
        <TouchableOpacity
            onPress={()=>onClick('helooo')}
            style={{
                backgroundColor: 'orange',
                padding: 8,
                borderRadius: 32,
                margin: 20,
                alignItems: 'center',
                marginBottom: 30
            }}>
            <Text style={{ color: 'white', fontSize: 24 }}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton