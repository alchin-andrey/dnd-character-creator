<template>
  <my-selection-card passive>
    <div class="gender_card_title jbm-300">{{ t_Title }}</div>
    <div class="gender__flex" >
      <div class="gender__flex-3">
        <my-button-gender
          v-for="item in arr.slice(0, 3)"
          :key="item.name"
          @mouseover="hover(item)"
          @mouseleave="hoverStop()"
          @click="getGeder(item.name)"
          :img="item.name"
          :active_link="genderSelect === item.name"
        >
        </my-button-gender>
      </div>

      <div v-if="notLook" class="gender__flex-2">
        <my-button-gender
          v-for="item in arr.slice(3, 5)"
          :key="item.name"
          @mouseover="hover(item)"
          @mouseleave="hoverStop()"
          @click="getGeder(item.name)"
          :img="item.name"
          :active_link="genderSelect === item.name"
        >
        </my-button-gender>
      </div>

      <div v-if="showFeel" class="gender__flex-3">
        <my-button-gender
          v-for="item in arr.slice(5, 8)"
          :key="item.name"
          @mouseover="hover(item)"
          @mouseleave="hoverStop()"
          @click="getGeder(item.name)"
          :img="item.name"
          :active_link="genderSelect === item.name"
        >
        </my-button-gender>
      </div>

      <div v-if="showFeel" class="gender__flex-2">
        <my-button-gender
          v-for="item in arr.slice(8, 10)"
          :key="item.name"
          @mouseover="hover(item)"
          @mouseleave="hoverStop()"
          @click="getGeder(item.name)"
          :img="item.name"
          :active_link="genderSelect === item.name"
        >
        </my-button-gender>
      </div>

      <div v-if="notLook" class="gender__flex-3">
        <my-button-gender
          v-for="item in getSlice"
          :key="item.name"
          @mouseover="hover(item)"
          @mouseleave="hoverStop()"
          @click="getGeder(item.name)"
          :img="item.name"
          :active_link="genderSelect === item.name"
        >
        </my-button-gender>
      </div>
    </div>
    <my-card-text
      :title="hower_link ? hower_link.name : $root.MY.gender[title]"
      :text="hower_link ? hower_link.details : `${$root.MY.gender[title]}_details`"
    >
    </my-card-text>
  </my-selection-card>
</template>

<script>
export default {
  name: "GenderCard",
  data() {
    return {
      hower_link: null,
    };
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    arr: {
      type: Array,
      default: [],
    },
  },

  computed: {

    t_Title() {
      return this.t(this.title);
    },

    notLook() {
      return this.title !== "look";
    },

    showFeel() {
      return this.title === "feel";
    },

    getSlice() {
      if (this.showFeel) {
        return this.arr.slice(10, 13);
      } else {
        return this.arr.slice(5, 8);
      }
    },

    genderSelect() {
      // console.log(this.$root.MY.gender[this.title]);
      return this.$root.MY.gender[this.title];
    }
  },

  methods: {
    getGeder(name) {
      if (this.title === "feel") {
        this.changeLookName(name);
        this.$root.MY.gender[this.title] = name;
      } else {
        this.$root.MY.gender[this.title] = name;
      }
    },

    changeLookName(name) {
      if (name === "cisgender") {
        return (this.$root.MY.gender.look = "as_phisiological");
      } else{
        return null
      }
    },
    hover(name) {
      this.hower_link = name
    },

    hoverStop() {
      this.hower_link = null;
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
