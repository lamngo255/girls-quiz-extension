<template>
  <div class="reward">
    <span>Baby, you nailed it!</span>
    <a :href="imageUrl">
      <img :src="imageSrc">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: null,
      imageUrl: null
    };
  },
  methods: {
    async getBoobsUrl() {
      let url =
        "https://api.giphy.com/v1/gifs/random?api_key=8SjEHXmvV6sTtVo3yJg72EIbLYu8C2UY&tag=boobs";
      let result = await fetch(url);
      let jsonResult = await result.json();

      return jsonResult.data;
    }
  },
  async mounted() {
    let imageData = await this.getBoobsUrl();
    this.imageSrc = imageData.fixed_height_small_url;
    this.imageUrl = imageData.url;
  }
};
</script>

<style scoped>
.reward span {
  font-style: italic;
  font-weight: bold;
}
</style>
