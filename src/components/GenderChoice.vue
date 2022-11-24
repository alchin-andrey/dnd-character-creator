<template>
  <my-selection-card passive>
    <div class="gender_card_title jbm-300">{{ t_Phisiological }}</div>
    <div class="gender__flex">
      <div class="gender__flex-3">
        <my-button-gender
          v-for="item in phisiological_kay.slice(0, 3)"
          :key="item"
          @click="getPhisiologicalName(item)"
          :img="item"
          :active_link="item"
          :select_link="$root.MY.gender.phisiological"
        >
        </my-button-gender>
      </div>

      <div class="gender__flex-2">
        <my-button-gender
          v-for="item in phisiological_kay.slice(3, 5)"
          :key="item"
          @click="getPhisiologicalName(item)"
          :img="item"
          :active_link="item"
          :select_link="$root.MY.gender.phisiological"
        >
        </my-button-gender>
      </div>

      <div class="gender__flex-3">

          <my-button-gender
            v-for="item in phisiological_kay.slice(5, 8)"
          :key="item"
            @click="getPhisiologicalName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.phisiological"
          >
          </my-button-gender>
      </div>
    </div>
    <my-card-text
      :title="$root.MY.gender.phisiological"
      :text="`${$root.MY.gender.phisiological}_details`"
    >
    </my-card-text>
  </my-selection-card>
  <my-selection-card passive v-vpshow="$root.MY.gender.feel !== $root.genders.feel.cisgender">
    <div class="gender_card_title jbm-300">{{ t_Feel }}</div>
    <div class="gender__flex">
      <div class="gender__flex-3">
          <my-button-gender
            v-for="item in feel_kay.slice(0, 3)"
          :key="item"
            @click="getFeelName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.feel"
          >
          </my-button-gender>
      </div>

      <div class="gender__flex-2">
          <my-button-gender
            v-for="item in feel_kay.slice(3, 5)"
          :key="item"
            @click="getFeelName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.feel"
          >
          </my-button-gender>
      </div>

      <div class="gender__flex-3">
          <my-button-gender
            v-for="item in feel_kay.slice(5, 8)"
          :key="item"
            @click="getFeelName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.feel"
          >
          </my-button-gender>
      </div>

      <div class="gender__flex-2">
          <my-button-gender
            v-for="item in feel_kay.slice(8, 10)"
          :key="item"
            @click="getFeelName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.feel"
          >
          </my-button-gender>
      </div>

      <div class="gender__flex-3">
          <my-button-gender
            v-for="item in feel_kay.slice(10, 13)"
          :key="item"
            @click="getFeelName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.feel"
          >
          </my-button-gender>
      </div>
    </div>
    <my-card-text
      :title="$root.MY.gender.feel"
      :text="`${$root.MY.gender.feel}_details`"
    >
    </my-card-text>
  </my-selection-card>
  <transition name="scroll-fade">
  <my-selection-card
    v-if="$root.MY.gender.feel !== $root.genders.feel.cisgender"
    passive
  >
    <div class="gender_card_title jbm-300">{{ t_Look }}</div>
    <div class="gender__flex">
      <div class="gender__flex-3">
          <my-button-gender
          v-for="item in $root.genders.look"
          :key="item"
            @click="getLookName(item)"
            :img="item"
            :active_link="item"
            :select_link="$root.MY.gender.look"
          >
          </my-button-gender>
      </div>
    </div>
    <my-card-text
      :title="$root.MY.gender.look"
      :text="`${$root.MY.gender.look}_details`"
    >
    </my-card-text>
  </my-selection-card>
  </transition>
</template>

<script>
export default {
  name: "GenderChoice",

  computed: {
    phisiological_kay() {
      return Object.values(this.$root.genders.phisiological);
    },

    feel_kay() {
      return Object.values(this.$root.genders.feel);
    },

    t_Phisiological() {
      return this.t("phisiological");
    },

    t_Feel() {
      return this.t("feel");
    },

    t_Look() {
      return this.t("look");
    },
  },

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
.gender_card {
  padding: 16px;
  width: 394px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
}

.gender_card_title {
  color: rgba(255, 255, 255, 0.2);
}

.gender_item {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.gender__flex {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gender__flex-3 {
  display: flex;
  justify-content: space-between;
}

.gender__flex-2 {
  display: flex;
  justify-content: space-evenly;
}

.gender__flex-1 {
  display: flex;
  justify-content: center;
}
</style>