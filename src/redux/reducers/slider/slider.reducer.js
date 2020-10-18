import types from './slider.types'


const initial_state = {
    categories: [],
    sliderItems: []
}


const categoryReducer = (state = initial_state, {type, payload}) => {
    switch (type) {
        case (types.HOME_CATEGORIES_START) :
            return {...state}

        case (types.HOME_CATEGORIES_SUCCESS) :
            return {...state, categories: payload}

        case (types.HOME_SLIDERS_ITEMS_START) :
            return {...state}


        case (types.HOME_SLIDERS_ITEMS_SUCCESS) :
            // console.log('payload',payload)
            return {...state, sliderItems: [...state.sliderItems, payload]}

        default :
            return state
    }
}
export default categoryReducer;