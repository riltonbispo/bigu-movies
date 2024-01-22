import { YStack, Input, XStack, ScrollView, H4, Spinner, Button } from 'tamagui'
import React, { useState } from 'react';
import CardMovie from '@/components/CardMovie';
import { useQuery } from '@tanstack/react-query';
import { getSearchResult, getTrending } from '@/services/api';

export default function Home() {
  const [searchInput, setSearchInput] = useState('')

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending
  })

  const searchQuery = useQuery({
    queryKey: ['search', searchInput],
    queryFn: () => getSearchResult(searchInput),
  })

  return (
    <YStack px="$4" mt='$10'>
      <Input
        my='$4'
        size="$4"
        borderWidth={2}
        placeholder='Search'
        value={searchInput}
        backgroundColor={'$colorTransparent'}
        color={'black'}
        onChangeText={e => setSearchInput(e)}
      />
      <H4 color={'black'}>Trending</H4>
      {(trendingQuery.isLoading || searchQuery.isLoading) ? <Spinner /> : (
        <ScrollView>
          <XStack flexWrap='wrap' mb='$15' mt='$5' rowGap='$6'>
            {searchInput.length > 0 ? (
              <>
                {searchQuery.data?.results.map(item => (
                  <CardMovie movie={item} key={item.id} />
                ))}

              </>
            ) : (

              <>
                {trendingQuery.data?.results.map(item => (
                  <CardMovie movie={item} key={item.id} />
                ))}
              </>
            )}
          </XStack>
        </ScrollView>
      )}
    </YStack>
  );
}

