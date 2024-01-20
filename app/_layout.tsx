import '@tamagui/core/reset.css'

import { TamaguiProvider, createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v2'

import { Stack } from 'expo-router';

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}


export default function LayoutApp() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </TamaguiProvider>
  );
}


