<template>
  <div style="width:100%;">
    <nav :show-cate="false" :show-border="showBorder"></nav>
    <slot v-bind:env-href="envHref" v-bind:current-user-identity="currentUserIdentity"></slot>
    <copyright></copyright>
  </div>
</template>

<script>
import Nav from 'component/nav';
import Copyright from 'component/copyright';
export default {
  components: {
    'nav': Nav,
    'copyright': Copyright
  },
  props: {
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    };
  },
  methods: {

  }
};

</script>

<style>

</style>
