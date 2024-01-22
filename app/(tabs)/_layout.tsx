import '@tamagui/core/reset.css'

import React, { useEffect } from 'react'
import { SplashScreen, Tabs } from 'expo-router'
import { Clapperboard, Heart } from '@tamagui/lucide-icons'
import { config } from '@tamagui/config'
import { TamaguiProvider, createTamagui } from 'tamagui'
import { useFonts } from 'expo-font'
import { queryClient } from '@/utils/clients'
import { QueryClientProvider } from '@tanstack/react-query'


SplashScreen.preventAutoHideAsync()
const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}

export default function TabsRoutesLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <QueryClientProvider client={queryClient}>
        <Tabs screenOptions={{ headerShown: false }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Clapperboard color={color} />,
            }}
          />
          <Tabs.Screen
            name="favorites"
            options={{
              title: 'Favorites',
              tabBarIcon: ({ color }) => <Heart color={color} />,
            }}
          />
        </Tabs>
      </QueryClientProvider >
    </TamaguiProvider >
  )
}