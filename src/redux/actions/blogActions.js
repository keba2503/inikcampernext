export const setArticles = (articles) => ({
    type: 'SET_ARTICLES',
    payload: articles,
});

export const setSelectedArticle = (article) => ({
    type: 'SET_SELECTED_ARTICLE',
    payload: article,
});
