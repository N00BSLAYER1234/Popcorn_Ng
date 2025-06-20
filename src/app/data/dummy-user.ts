export const DUMMY_USER = {
  avatar: {
    gravatar: {
      hash: '96c1c5dfd656cb32f6b436fa9cabe352',
    },
    tmdb: {
      avatar_path: null,
    },
  },
  id: 22046382,
  iso_639_1: 'it',
  iso_3166_1: 'IT',
  name: '',
  include_adult: false,
  username: 'ITS-Web',
};

export const DUMMY_USER_LISTS = {
  page: 1,
  results: [
    {
      description: 'Una lista dei miei film preferiti',
      favorite_count: 0,
      id: 8534933,
      item_count: 4,
      iso_639_1: 'it',
      list_type: 'movie',
      name: 'I miei film preferiti',
      poster_path: null,
    },
  ],
  total_pages: 1,
  total_results: 1,
};

export const USER_WATCH_LIST = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg',
      genre_ids: [10751, 35, 12, 14],
      id: 950387,
      original_language: 'en',
      original_title: 'A Minecraft Movie',
      overview:
        "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
      popularity: 399.9711,
      poster_path: '/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg',
      release_date: '2025-03-31',
      title: 'A Minecraft Movie',
      video: false,
      vote_average: 6.485,
      vote_count: 1627,
    },
    {
      adult: false,
      backdrop_path: '/4MNRH73XmwBK2ycv3qvLpa07O5F.jpg',
      genre_ids: [28, 18],
      id: 1257960,
      original_language: 'hi',
      original_title: 'सिकंदर',
      overview:
        'A tragic accident pushes the powerful Sikandar to protect the less fortunate by standing up to corruption and greed — using any means necessary.',
      popularity: 383.9789,
      poster_path: '/t48miSSfe7COqgbgMyRIyPVTBoM.jpg',
      release_date: '2025-03-29',
      title: 'Sikandar',
      video: false,
      vote_average: 5.3,
      vote_count: 40,
    },
  ],
  total_pages: 1,
  total_results: 2,
};

export const DUMMY_USER_RATED_MOVIES = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/uQ4lG7E7mlyKsGvbASftQ6Hu2IX.jpg',
      genre_ids: [18],
      id: 100088,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Last of Us',
      overview:
        'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.',
      popularity: 256.8655,
      poster_path: '/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg',
      first_air_date: '2023-01-15',
      name: 'The Last of Us',
      vote_average: 8.5,
      vote_count: 6141,
      rating: 8,
    },
  ],
  total_pages: 1,
  total_results: 1,
};
