<template>
  <div v-if="video" class="col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe :src="videoUrl" class="embed-responsive-item" />
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: ['video'],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id;
      return `https:/www.youtube.com/embed/${videoId}`;
    },
  },
  //// Weird for replace computed to methods (nesting view)
  //   methods: {
  //     videoUrl() {
  //       const id = this.video.id.videoId;
  //       return `https:/www.youtube.com/embed/${id}`;
  //     },
  //   },
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid#ddd;
  border-radius: 4px;
}
</style>
