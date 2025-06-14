import { Colors } from '@/components/colors'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function favorites() {
  return (
    <View className='flex-1 px-8 pt-8' style ={{backgroundColor: Colors.primary}}>
      <View className='h-[40px] flex flex-row'>
        <TouchableOpacity onPress={() => router.push('/(tabs)')} className='py-1'>
          <Ionicons name ="arrow-back" color ={Colors.inactiveTab} size ={28}/>
        </TouchableOpacity>
        <Text className='text-2xl text-white text-center font-bold py-1 ml-1'>Favorites</Text>
      </View>
      <View className='mt-5 h-[680px]'>
        <Text className='text-white text-[24px] text-center font-bold underline mb-32'>Project: Lyon</Text>
        <Image source={require('@/assets/images/cofee_cup.png')} style = {{width: 300, height: 300}}className='relative mb-32 mx-auto'/>
        <Text className='text-white text-[24px] text-center font-bold underline mb-5'>Work In Progress</Text>
        <Text className='text-[20px] text-center text-white'>By: Th3_D5_482</Text>
      </View>
    </View>
  )
}