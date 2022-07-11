import { SELECT_TAB } from "./tabAction"
import { constants } from "../../constants"
const initialstate = {
    selectedtab: constants.screens.home
}

export const TabReducer = (state = initialstate, action) => {
    const { payload, type } = action

    switch (type) {
        case SELECT_TAB:
            return {
                ...state,
                selectedtab: payload.selectedTab
            }
        default: return state
    }
}