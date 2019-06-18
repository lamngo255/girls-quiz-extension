<template>
  <div class="reward">
    <p class="success" v-if="correctAnswer">Baby, you nailed it!</p>
    <p class="failed" v-if="!correctAnswer">Sorry, you got it wrong!</p>
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
  props: ["correctAnswer"],
  watch: {
    correctAnswer: {
      immediate: true,
      handler() {
        this.setImage();
      }
    }
  },
  methods: {
    async getImageUrl(keyword) {
      let url = `https://api.giphy.com/v1/gifs/random?api_key=8SjEHXmvV6sTtVo3yJg72EIbLYu8C2UY&tag=${keyword}`;
      let result = await fetch(url);
      let jsonResult = await result.json();

      return jsonResult.data;
    },
    async setImage() {
      let keyword = "stupid";
      if (this.correctAnswer) {
        keyword = "boobs";
      }
      let imageData = await this.getImageUrl(keyword);
      this.imageSrc = imageData.fixed_height_small_url;
      this.imageUrl = imageData.url;
    }
  },
  mounted() {
    this.setImage();
  }
};
</script>

<style scoped>
.reward {
  font-style: italic;
  font-weight: bold;
}

.success {
  color: green;
}

.failed {
  color: red;
}
</style>
