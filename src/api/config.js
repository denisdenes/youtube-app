import axios from 'axios';

export const youtubeAxios = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params:  {
    part: 'snippet',
    key:  process.env.REACT_APP_YOUTUBE_API_KEY
  },
  timeout: 10000
});
