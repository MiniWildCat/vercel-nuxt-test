const store = {
    state: () => {
        return {
              name: ''
        }
    },
    mutations: {
        setName(state,name){
            state.name = name;
        }
    },
    actions: {
    }
}
export default store;