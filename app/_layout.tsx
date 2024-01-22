import React from 'react'
import { Stack } from 'expo-router'
import { Film, MonitorPlay } from '@tamagui/lucide-icons'
import { queryClient } from '@/utils/clients'
import { QueryClientProvider } from '@tanstack/react-query'

export default function LayoutStack() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name='movie/[id]'
          options={{
            title: 'Movie',
            headerLeft: () => <Film color={'black'} />,
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name='tv/[id]'
          options={{
            title: 'Movie',
            headerLeft: () => <MonitorPlay color={'black'} />,
            headerBackVisible: true
          }}
        />
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </QueryClientProvider>
  )
}