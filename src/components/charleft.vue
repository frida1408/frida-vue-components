<template>
  <i :style="{ color: textColor }">({{ charactersLeft }} characters left)</i>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    maxChars: {
      type: Number,
      required: true
    }
  },

  mounted() {
    this.fireLimitReachedEvent()
  },

  watch: {
    textTooLong() {
      this.fireLimitReachedEvent()
    }
  },

  computed: {
    charactersLeft() {
      return this.maxChars - this.text.length
    },
    textColor() {
      return this.textTooLong ? 'red' : 'green'
    },
    textTooLong() {
      return this.charactersLeft < 0
    }
  },

  methods: {
    fireLimitReachedEvent() {
      this.$emit('limit-reached', this.textTooLong)
    }
  }
}
</script>
