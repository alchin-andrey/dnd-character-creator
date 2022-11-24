<template>
  <div
    class="pasive_card"
    :class="{
      active_card: !passive && !basic,
      colors_card: colors_card,
      no_blur: no_blur,
      basic: basic,
      selection_card_active: get_Active,
      link: link,
    }"
  >
  <div v-if="copy" class="copy_icon">
    <transition name="mode-fade" mode="out-in">
      <svg
        v-if="!copied"
        key="off"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="white"
        fill-rule="evenodd"
        clip-rule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 8H8V12H12V8ZM7 7V13H13V7H7Z" />
        <path d="M6 6H10V7H11V5H5V11H7V10H6V6Z" />
      </svg>

      <img
        v-else
        key="on"
        src="@/assets/img/icon/check.svg"
      />
    </transition>
  </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MySelectionCard",
  props: {
    passive: {
      type: Boolean,
      default: false,
    },
    colors_card: {
      type: Boolean,
      default: false,
    },
    basic: {
      type: Boolean,
      default: false,
    },
    copy: {
      type: Boolean,
      default: false,
    },
    copied: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    active_link: {
      type: String,
      default: null,
    },
    select_link: {
      type: String,
      default: null,
    },
    active_boll_link: {
      type: Boolean,
      default: false,
    },
    no_blur: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    get_Active() {
      console;
      if (this.active_link !== null) {
        return this.active_link === this.select_link;
      } else if (this.active_boll_link) {
        return this.active_boll_link;
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.active_card {
  cursor: pointer;
  fill-opacity: 0.4;
}

.active_card:hover {
  background: rgba(255, 255, 255, 0.1);
  fill-opacity: 1;
}

.pasive_card {
  padding: 16px;
  /* width: 394px; */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 26px;

}

.no_blur {
  backdrop-filter: none;
}

.colors_card {
  height: 100%;
  background: #000000;
}

.basic {
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 14px !important;
}

.selection_card_active {
  border: 2px solid #ffffff;
  padding: 14px !important;
}

.link {
  padding: 0px;
}

.copy_icon {
  height: 18px;
  position: absolute;
  right: 16px;
  top: 50%;
  bottom: 50%;
  -webkit-transform: translate(0%, -50%);
  -ms-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity .2s ease
}

.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 0
}
</style>