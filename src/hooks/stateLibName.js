import { computed, reactive } from "vue";
import { useStore } from "vuex";

const mapStateLib = module => {
	const store = useStore();
	return Object.fromEntries(
		Object.keys(store.state[module]).map(key =>
			module !== undefined
				? [key, computed(() => store.state[module][key])]
				: [key, computed(() => store.state[key])]
		)
	);
};

const mapGettersLib = module => {
	const store = useStore();
	return Object.fromEntries(
		Object.keys(store.getters).map(getter =>
			module !== undefined && getter.startsWith(module)
				? [
						getter.substr(module.length + 1),
						computed(() => store.getters[getter]),
				  ]
				: [getter, computed(() => store.getters[getter])]
		)
	);
};

const mapMutationsLib = module => {
	const store = useStore();
	return Object.fromEntries(
		Object.keys(store._mutations[module]).map(mutation =>
			module !== undefined && mutation.startsWith(module)
				? [
						mutation.substr(module.length + 1),
						value => store.commit(mutation, value),
				  ]
				: [mutation, value => store.commit(mutation, value)]
		)
	);
};

const mapActionsLib = module => {
	const store = useStore();
	return Object.fromEntries(
		Object.keys(store._actions).map(action =>
			module !== undefined && action.startsWith(module)
				? [
						action.substr(module.length + 1),
						value => store.dispatch(action, value),
				  ]
				: [action, value => store.dispatch(action, value)]
		)
	);
};

export { mapStateLib, mapGettersLib, mapMutationsLib, mapActionsLib };
