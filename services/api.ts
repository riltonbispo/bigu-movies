import axios from 'axios';
import { MediaType, ResultItem, TrendingResult } from '../types/resultApi';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}&page=1`
  );
  
  return result.data;
};

export const getSearchResult = async (query: string): Promise<TrendingResult> => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  return result.data;
};

export const getMovieDetails = async (id: number, mediatype: MediaType): Promise<ResultItem> => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/${mediatype}/${id}?language=en-US&api_key=${API_KEY}`
  );

  return result.data;
};