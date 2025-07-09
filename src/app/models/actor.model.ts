import { Movie } from './movie.model';

export interface ActorMovie extends Movie {
  media_type: 'movie';
}

export interface ActorTvSerie {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: 'tv';
  adult: boolean;
  original_language: string;
  genre_ids?: number[];
  popularity: number;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
  origin_country?: string[];
}

export type ActorKnownFor = ActorMovie | ActorTvSerie;

export interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: ActorKnownFor[];
}

export interface ActorApiRes {
  page: number;
  results: Actor[];
  total_pages: number;
  total_results: number;
}