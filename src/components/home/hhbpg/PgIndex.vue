<template>
    <div class="gytback">
      <pg-header></pg-header>
      <pg-sm></pg-sm>
      <pg-text></pg-text>
    </div>
</template>

<script>
    import PgHeader from "./PgHeader";
    import PgSm from "./PgSm";
    import PgText from "./PgText";
    export default {
        name: "PgIndex",
      components: {PgText, PgSm, PgHeader}
    }
</script>

<style lang="stylus" scoped>
  .gytback

    height 100%
    width: 100%
    background-color rgb(245,245,245)
</style>
