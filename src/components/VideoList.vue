<template>
  <ul class="list-group col-md-4">
    <VideoListItem
      v-for="(video, index) in videos"
      :key="index"
      :video="video"
      @videoSelect="onVideoSelect"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  //   props: ['videos'],
  props: {
    videos: Array,
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video);
    },
  },
};
</script>

<style></style>
