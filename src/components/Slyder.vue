<template lang="pug">
.d-flex.align-items-stretch.p-0(:class="claseTarjeta")
  .slyder__arrow.slyder__arrow--l.d-none.d-lg-flex(@click="selected = selected != 0 ? selected -1 : selected")
    img(src="@/assets/curso/tema_1/iconl.svg")
  .slyder.pt-4.pt-md-6
    .slyder__inner-container(:style="{width: computedData.containerWidth, transform: `translate(${scrollVal}px,0px)`, height:containerHeight+'px'}")
      slot
      
    .slyder__controls.my-4.my-md-5
      .slyder__arrow.slyder__arrow--l.d-lg-none(@click="selected = selected != 0 ? selected -1 : selected")
        img(src="@/assets/curso/tema_1/iconl.svg")
      .slyder__controls__dot(
        v-for="itemDot of computedData.numItems",
        :key="`dot-${itemDot}`",
        :class="{'slyder__controls--sel': itemDot-1 === selected }"
        @click="selected = itemDot-1"
      )
      .slyder__arrow.slyder__arrow--r.d-lg-none(@click="selected = selected != computedData.numItems -1 ? selected +1 : selected")
        img(src="@/assets/curso/tema_1/iconl.svg")

  .slyder__arrow.slyder__arrow--r.d-none.d-lg-flex(@click="selected = selected != computedData.numItems -1 ? selected +1 : selected")
    img(src="@/assets/curso/tema_1/iconl.svg")

</template>

<script>
export default {
  name: 'Slyder',
  props: {
    claseTarjeta: {
      type: String,
      default: 'tarjeta--blanca',
    },
  },
  data: () => ({
    scrollVal: 0,
    containerHeight: 0,
    selected: 0,
  }),
  computed: {
    computedData() {
      return {
        numItems: this.$slots.default ? this.$slots.default.length : 1,
        containerWidth: this.$slots.default
          ? this.$slots.default.length * 100 + '%'
          : '100%',
      }
    },
  },
  watch: {
    selected() {
      this.getScrollValue()
    },
  },
  mounted() {
    window.addEventListener('resize', this.getScrollValue)
    this.getScrollValue()
    setTimeout(() => {
      this.getScrollValue()
    }, 1000)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getScrollValue)
  },
  methods: {
    getScrollValue() {
      const selectedRef = this.$slots.default[this.selected].elm
      this.scrollVal = -selectedRef.offsetLeft
      this.containerHeight = selectedRef.scrollHeight
    },
  },
}
</script>

<style lang="sass" scoped>
.tarjeta--azul-b
  text-align: center
.tarjeta--gris
  text-align: left
  height: fit-content

.slyder
  overflow: hidden

  &__arrow
    display: flex
    align-items: center
    cursor: pointer
    img
      width: 300px

    &--l
      padding: 0 50px 0 30px
    &--r
      padding: 0 30px 0 50px
      img
        transform: rotate(180deg)

  &__inner-container
    display: flex
    align-items: flex-start
    transition: transform 0.5s ease-in-out, height 0.5s ease-in-out
    & > div
      flex: 1
      margin: 0
      height: auto
  &__item
    width: 100%
    transition: opacity 0.5s ease-in-out
  &__controls
    display: flex
    align-items: center
    justify-content: center
    &__dot
      cursor: pointer
      margin: 0 10px
      width: 15px
      height: 15px
      border-radius: 50%
      background-color: #93F5E5
    &--sel
      background-color: #111E61

  @media screen and (max-width: 576px)
    &__controls
      &__dot
        margin: 0 5px
        width: 10px
        height: 10px
</style>
