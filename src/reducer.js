export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDyyRgVl3NZfh1Urv9AnRk9JT03mQcl4RSXckVNBIMT-bJs-i…xC5QNCLqYRWGu8FYJCyJ-kQEmb7W8EHasTMZGXOxgQFJlOAyQ",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer;