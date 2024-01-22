import { Card, CardProps, Image, SizableText, YStack, Paragraph } from 'tamagui'
import React from 'react'
import { Link } from 'expo-router'
import { ResultItem } from '@/types/resultApi'

type props = CardProps & {
  movie: ResultItem
}

export default function CardMovie({ movie, ...props }: props) {
  return (
    <Link href={`/${movie.media_type === 'movie' ? 'movie' : 'tv'}/${movie.id}`} asChild>
      <Card bordered {...props} width='50%' borderRadius='$6' pressStyle={{ scale: 0.95 }} overflow='hidden'>
        <Image
          borderRadius='$6'
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          }}
          style={{ height: 200, width: '100%' }}
        />
        <Card.Footer>
          <YStack ml='$2'>
            <Paragraph size="$2" fontWeight="800">
              {movie.title || 'name'}
            </Paragraph>
            <SizableText theme="alt2" size="$3">
              {new Date(movie.release_date).getFullYear()}
            </SizableText>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  )
}