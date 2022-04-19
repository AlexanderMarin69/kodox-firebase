<template>
  <!-- 
        primary
        secondary
        success
        danger
        warning
        info
        light
        dark  
  -->

   <div :class="[alertTypeClass]" role="alert">
    <p class="alert-heading">{{title}}</p>
    <p>
      {{text}}
    </p>
  </div>
</template>


<style scoped lang="scss">
.card {
  width: 100%;
  background-color: #313234;
  color: #f4f4f5;
  border-radius: 10px;
  -webkit-box-shadow: -2px 10px 38px -7px rgba(0, 0, 0, 0.9);
  box-shadow: -2px 10px 38px -7px rgba(0, 0, 0, 0.9);
}
</style>

<script>
export default {
  name: "card",
  props: ["type", "title", "text"],
  data: function () {
    return {
      alertTypeClass: 'alert alert-' + this.type,
     }
  },
};
</script>