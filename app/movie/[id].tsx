import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailsPage from '@/components/DetailsPage'
import { MediaType } from '@/types/resultApi'

export default function Movie() {
  const { id } = useLocalSearchParams<{id: string}>();

  return (
    <DetailsPage id={id} mediaType={MediaType.Movie}/>
  )
}