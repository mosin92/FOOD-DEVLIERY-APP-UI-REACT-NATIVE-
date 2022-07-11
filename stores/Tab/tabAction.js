
export const SELECT_TAB = 'SET_SELECTED_TAB'

export const SetSelectedTab = (selectedTab) => dispatch => {

    dispatch({
        type: SELECT_TAB,
        payload: { selectedTab }
    })
}