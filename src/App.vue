<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// import youtubeResult from '../data/youtubeResult.json';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      // videos: youtubeResult,
      selectedVideo: null,
    };
  },
  methods: {
    onVideoSelect(video) {
      console.log('app', video);
      this.selectedVideo = video;
    },

    async onTermChange(searchTerm) {
      const config = {
        params: {
          part: 'snippet',
          type: 'video',
          q: searchTerm,
        },
      };
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_API_KEY}`,
        config
      );
      this.videos = await data.items;
      // console.log(searchTerm);
    },
  },
};
</script>
