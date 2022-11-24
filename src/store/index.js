import { createStore } from 'vuex';

import dic from './modules/dicMod';


// import genderStore from './gender';
import gender from './modules/genderMod';
import race from './modules/raceMod';
import color from './modules/colorMod';
import lang from './modules/langMod';

import pages from './pages/pages_Mod';

import MY from './modules/MyMod';


const store = createStore({
  modules: {
    // gender: genderStore,
    gender,
    race,
    color,
    lang,

    
    pages,
    MY,
    dic,
  },
});

export default store;
