




export const Reducer = (state, action) => {
    switch (action.type) {
        case "PLUSSTEP":
            return {
                ...state,
                step: state.sliderArray.length !== state.step + 1 ? state.step + 1 : state.step
            };
        case "MINUSSTEP":
            return {
                ...state,
                step: state.step - 1 < 0 ? state.step : state.step - 1
            };
        default:
            return state;
    }
};