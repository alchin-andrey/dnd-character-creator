import items from "./list_items.js"

export default {

    explorers: {
        name: "explorers_pack",
        details: "explorers_pack_details",
        items: [
            [items.backpack,1],
            [items.bedroll,1],
            [items.mess_kit,1],
            [items.tinderbox,1],
            [items.torch,10],
            [items.ration,10],
            [items.waterskin,1],
            [items.hempen_rope,1],
        ],
        cost: 100,
        weight: 29.5,
    },

    burglars: {
        name: "burglars_pack",
        details: "burglars_pack_details",
        items: [
            [items.backpack,1],
            [items.metal_ball_1000,1],
            [items.fishing_line,1],
            [items.bell,1],
            [items.candle,5],
            [items.crowbar,1],
            [items.item_hammer,1],
            [items.item_piton,10],
            [items.hooded_lantern,1],
            [items.oil_flask,2],
            [items.ration,5],
            [items.tinderbox,1],
            [items.waterskin,1],
            [items.hempen_rope,1]
        ],
        cost: 1600,
        weight: 17.5,
    },

    dungeoneers: {
        name: "dungeoneers_pack",
        details: "dungeoneers_pack_details",
        items: [
            [items.backpack,1],
            [items.crowbar,1],
            [items.item_hammer,1],
            [items.item_piton,10],
            [items.torch,10],
            [items.tinderbox,1],
            [items.ration,10],
            [items.waterskin,1],
            [items.hempen_rope,1],
        ]
    },

    thieves: {
        name: "thieves_pack",
        details: "thieves_pack_details",
        items: [
            [items.small_rasp,1],
            [items.lockpick_set,1],
            [items.small_mirror,1],
            [items.scissors,1],
            [items.tweezers,1]
        ]
    },

    priests: {
        name: "priests_pack",
        details: "priests_pack_details",
        items: [
            [items.backpack,1],
            [items.blanket,1],
            [items.candle,10],
            [items.tinderbox,1],
            [items.donation_box,1]
            [items.incense,2],
            [items.censer,1],
            [items.vestment,1]
            [items.ration,2],
            [items.waterskin,1],
        ]
    },
}