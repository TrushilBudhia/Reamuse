const CLOSE_MENU = 'CLOSE_MENU'
const HOVER_MAP_IMAGE = 'HOVER_MAP_IMAGE'
const SELECT_MAP_IMAGE = 'SELECT_MAP_IMAGE'
const SAVE_API_REGIONS = 'SAVE_API_REGIONS'

const initialState = {
    isMenuOpen: false,
    hoverMapImgSrc: '',
    selectMapImgSrc: '',
    emptyMapImgSrc: '/assets/images/World-Map.png',
    displayMapImgSrc: '/assets/images/World-Map.png',
    regionSelect: '',
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MENU:
            console.log(action)
            return {
                ...state,
                isMenuOpen: false
            }

        case HOVER_MAP_IMAGE:
            let selectedUrl = state.selectMapImgSrc === '' ? state.emptyMapImgSrc : state.selectMapImgSrc
            let displayResult = action.payload.mapImgSrc === '' ? selectedUrl : action.payload.mapImgSrc

            return {
                ...state,
                hoverMapImgSrc: action.payload.mapImgSrc,
                displayMapImgSrc: displayResult
            }

        case SELECT_MAP_IMAGE:
            return {
                ...state,
                selectMapImgSrc: action.payload.mapImgSrc,
                regionSelect: action.payload.label
            }

        case SAVE_API_REGIONS:
            return {
                ...state,
                regions: action.payload.regions
            }

        default:
            return state
    }
}
export default mapReducer;

// ACTIONS

export const hoverMapRegion = mapImgSrc => dispatch => {
    dispatch({
        type: HOVER_MAP_IMAGE,
        payload: {
            mapImgSrc: mapImgSrc,
        }
    })
}

export const selectMapRegion = (label, url) => dispatch => {
    dispatch({
        type: SELECT_MAP_IMAGE,
        payload: {
            mapImgSrc: url,
            label
        }
    })
}

export const saveApiRegions = (regions) => dispatch => {
    dispatch({
        type: SAVE_API_REGIONS,
        payload: {
            regions: regions,
        }
    })
}
