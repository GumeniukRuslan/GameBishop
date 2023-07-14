import axios from 'axios';

const KEY = '4f4ec2d61b11468090b9b486f06ef6bf';
const BASE_URL = 'https://api.rawg.io/api';
const TRENDING = '/games';
const SEARCH = '/search/movie';

export async function getTrendGames(page = 1) {
  const searchParams = new URLSearchParams({
    key: KEY,
    page: page,
    page_size: 40,
  });
  const response = await axios.get(`${BASE_URL}${TRENDING}?${searchParams}`);
  return response.data;
}

export async function getMovies(query, page = 1) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
    query: query,
    page: page,
  });
  const response = await axios.get(`${BASE_URL}${SEARCH}?${searchParams}`);
  return response.data;
}

export async function getOneMovie(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}?${searchParams}`);
  return response.data;
}

export async function getCast(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?${searchParams}`
  );
  return response.data;
}

export async function getReviews(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?${searchParams}`
  );
  return response.data;
}
export async function getTrailer(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/videos?${searchParams}`
  );
  return response.data;
}
