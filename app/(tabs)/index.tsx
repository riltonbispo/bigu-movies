import { Text } from 'react-native';
import { Button, YStack, H1, Input } from 'tamagui'
import { Airplay } from '@tamagui/lucide-icons'
import React from 'react';

export default function TabOneScreen() {
  return (
    <YStack px="$4">
      <Input size="$4" borderWidth={2} placeholder='Search'/>
    </YStack>
  );
}

