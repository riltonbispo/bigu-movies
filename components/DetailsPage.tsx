import { getMovieDetails } from '@/services/api'
import { MediaType } from '@/types/resultApi'
import { useQuery } from '@tanstack/react-query';
import { ImageBackground, View } from 'react-native'
import { H2, Image, Paragraph, ScrollView, SizableText, XStack, YStack } from 'tamagui';

type props = {
  id: string,
  mediaType: MediaType
}

export default function DetailsPage({ id, mediaType }: props) {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, mediaType)
  })

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieQuery.data?.backdrop_path}`,
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <XStack ai='center'>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movieQuery.data?.poster_path}`,
                width: 150,
                height: 200,
              }}
              m='$4'
              borderRadius='$4'
            />
            <YStack width='90%'>
              <H2>{movieQuery.data?.title}</H2>
              <SizableText size="$3">
                {movieQuery.data?.release_date
                  ? new Date(movieQuery.data.release_date).getFullYear()
                  : 'Release Date Unavailable'}
              </SizableText>
            </YStack>
          </XStack>
        </View>
      </ImageBackground>

      <Paragraph color='black' m='$4'>{movieQuery.data?.overview}</Paragraph>
    </ScrollView >
  )
}