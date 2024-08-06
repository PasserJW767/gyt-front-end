<template>
    <div class="gytback">
      <body-header></body-header>
      <body-ys></body-ys>
      <body-people></body-people>
      <body-pg></body-pg>
      <body-end></body-end>
    </div>
</template>

<script>
    import BodyHeader from './BodyHeader.vue';
    import BodyYs from "./BodyYs.vue";
    import BodyPeople from "./BodyPeople";
    import BodyPg from "./BodyPg";
    import BodyEnd from "./BodyEnd";
    export default {
        name: "BodyIndex",
      data () {
        return {

        }
      },
      components: {
        BodyEnd,
        BodyPg,
        BodyPeople,
        BodyYs,
        BodyHeader,
      }
    }

</script>

<style lang="stylus" scoped>
.gytback
  position fixed
  height 100%
  width: 100%
  background-color rgb(245,245,245)
</style>
