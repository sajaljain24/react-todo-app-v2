export const addData = (data) => async (dispatch) => {
    dispatch({ type: "ADD_CONTACT", data: data })
}
export const fetchData = () => async (dispatch) => {
    dispatch({ type: "FETCH_CONTACT" })
}