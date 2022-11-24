<template>
  <div class="marg">
    <Welcome />

    <div class="flex_col">
      <div class="story int-400" v-html="t_Html"></div>
<div class="flex_col title">
      <my-selection-card 
      @click="doCopy(uan_numb), copiedLink('uan_copied')" 
      copy 
      :copied="uan_copied">
        <div class="text">{{`UAN  ${uan_text}`}}</div>
      </my-selection-card>

      <my-selection-card 
      @click="doCopy(btc_numb), copiedLink('btc_copied')" 
      copy 
      :copied="btc_copied">
        <div class="text">{{`BTS  ${btc_numb}`}}</div>
      </my-selection-card>

      <my-selection-card link>
        <a class="link" target="_blank" href="https://www.patreon.com/dimalagoda">Patreon ↗</a>
      </my-selection-card>
    </div>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import { copyText } from "vue3-clipboard";

export default {
  components: { Welcome },
  name: "Description",
  data() {
    return {
      uan: 'UAH',
      uan_text: '5375 4141 0613 7382',
      uan_numb: 5375414106137382,
      uan_copied: false,
      btc_numb: '1LnEyvMisSyUvdbJQUmAyaiHEeALQd793F',
      btc_copied: false,
    };
  },

  setup() {
    const doCopy = (copied) => {
      copyText(copied, undefined, (error, event) => {
        if (error) {
          alert("Error");
          console.log(error);
        } else {
          console.log(event);
        }
      });
    };
    return { doCopy };
  },

  methods: {
    copiedLink(name) {
      this[name] = true
      console.log(this[name]);
      setTimeout(() => {
        this[name] = false
        }, 2000);
      console.log(this[name]);
    }
  },

  computed: {
    t_Card() {
      return this.t("donation_card");
    },
    t_Btc() {
      return this.t("donation_btc");
    },
    t_Html() {
      return this.t("authors");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursor {
  cursor: pointer;
}

.marg {
  margin-left: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex_col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.flex {
  display: flex;
}

.story {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
  margin-bottom: 22px;
}

.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.text {
  width: 300px;
  white-space: pre;
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis;
}

.title:first-letter {
  text-transform: uppercase;
}

.link {
  padding: 16px;
}
</style>