export default {
    computed: {
        Char_Color() {
            if (
                this.$root.MY.color[this.body_part] === null &&
                this.$root.MY.ethnos.name === "common"
            ) {
                return this.$root.MY.race.settings.color[this.body_part][0];
            } else if (this.$root.MY.color[this.body_part] === null) {
                return this.$root.MY.ethnos.color[this.body_part][0];
            } else {
                return this.$root.MY.color[this.body_part];
            }
        },
    },
};
