<template>
  <div class="flex_options">
    <div class="slider_growth_back">
      <div class="slider_growth">
        <div class="slider_knob"></div>
        <div class="slider_value">100 см</div>
      </div>
    </div>
    
    <div class="size_growth">
      <div class="skale">
        <div class="skale_numb_top">210</div>
      </div>

      <div class="skale">
        <div class="skale_numb_top">180</div>
      </div>

      <div class="skale">
        <div class="skale_numb_top">150</div>
      </div>

      <div class="skale">
        <div class="skale_numb_top">120</div>
      </div>

      <div class="skale">
        <div class="skale_numb_top">90</div>
      </div>

      <div class="skale">
        <div class="skale_numb_top"></div>
      </div>

      <div class="skale">
        <div class="skale_numb_down">0</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Growth",
  methods: {
    getPhisiologicalName(name) {
      this.$root.MY.gender.phisiological = name;
    },

    changeLookName(name) {
      if (name === this.$root.genders.feel.cisgender) {
        return (this.$root.MY.gender.look =
          this.$root.genders.look.as_phisiological);
      } else {
        return (this.$root.MY.gender.look = this.$root.MY.gender.look);
      }
    },

    getFeelName(name) {
      this.changeLookName(name);
      this.$root.MY.gender.feel = name;
    },

    getLookName(name) {
      this.$root.MY.gender.look = name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>