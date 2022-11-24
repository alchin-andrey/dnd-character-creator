import emojiRegex from "emoji-regex";

import dataEmo from "emoji-mart-vue-fast/data/all.json";
import { Emoji, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";

let emojiIndex = new EmojiIndex(dataEmo);
const unicodeEmojiRegex = emojiRegex();
export default {
	install(Vue) {
		Vue.mixin({
			components: {
				Emoji,
			},
			data() {
				return {
					emojiIndex: emojiIndex,
					unicodeEmojiRegex: unicodeEmojiRegex,
					set_emoji: "apple", // apple  twitter  google  facebook
				};
			},
			methods: {
				updEmoji(str) {
					if (str) {
						for (const match of str.matchAll(unicodeEmojiRegex)) {
							const emoji = match[0];
							return emoji;
						}
					}
				},

				beforeEmoji(str) {
					let reg = this.unicodeEmojiRegex;
					if (str) {
						str = str.split(reg)[0];
						return str;
					} else {
						return null;
					}
				},

				afterEmoji(str) {
					let reg = this.unicodeEmojiRegex;
					if (str) {
						str = str.split(reg)[1];
						return str;
					} else {
						return null;
					}
				},

        cutEmoji(str, numb) {
					let reg = this.unicodeEmojiRegex;
					if (str) {
						str = str.split(reg)[numb].trim();
						return str;
					} else {
						return null;
					}
				},

				cutEmoji_1(str) {
					// let reg = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
					let reg = this.unicodeEmojiRegex;
					if (str) {
            str = str.replace(reg, "").trim();
						return str;
					} else {
						return null;
					}
				},

				wrapEmoji(str) {
					if (str) {
						return str.replace(
							this.unicodeEmojiRegex,
							function (match, offset) {
								let emoji = emojiIndex.nativeEmoji(match);
								if (!emoji) {
									return match;
								}
								return emoji.native;
							}
						);
					} else {
						return null;
					}
				},
			},
			// mounted() {},
			// ...
		});
	},
};
