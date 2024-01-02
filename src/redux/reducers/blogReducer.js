const initialState = {
    articles: [],
    selectedArticle: null,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ARTICLES':
            return {
                ...state,
                articles: action.payload,
            };
        case 'SET_SELECTED_ARTICLE':
            return {
                ...state,
                selectedArticle: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
