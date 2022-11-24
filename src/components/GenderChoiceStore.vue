<template>

<GenderCard title="phisiological" :arr="phisiologicalArr"/>
<GenderCard 
v-vpshow="showLook" title="feel" :arr="feelArr"/>
<transition name="scroll-fade">
<GenderCard v-if="showLook" title="look" :arr="lookArr"/>
</transition>
</template>

<script>
import GenderCard from "@/components/GenderCard.vue";
import {mapGetters} from 'vuex'
export default {
  name: "GenderChoiceStore",
  components: {
    GenderCard,
  },

  computed: {
    ...mapGetters({
      phisiologicalArr: 'gender/phisiologicalArr',
      feelArr: 'gender/feelArr',
      lookArr: 'gender/lookArr',
    }),
    showLook() {
      return this.$root.MY.gender.feel !== 'cisgender'
    }
  },

  methods: {
  },
};
</script>

<style scoped>

</style>