function mainReducer(state = { tasks: [] }, action) {
    switch (action.type) {
        case "ADD_CONTACT": {
            let tasks = [...state.tasks]
            tasks.push(action.data)

            return { ...state, tasks }
        }
        case "FETCH_CONTACT": {
            let tasks = [...state.tasks]
            // console.log(tasks);
            return { ...state, tasks: tasks }
        }
        default:
            return state;
    }
}
export default mainReducer;