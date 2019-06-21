import {ADD_ARTICLE_LOCAL} from "../actions/ActionType";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            // do your stuff
            if (action.type === ADD_ARTICLE_LOCAL) {
                if (!action.payload.title) {
                    return dispatch({type: "FOUND_BAD_WORD"});
                }
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );
                if (foundWord.length) {
                    return dispatch({type: "FOUND_BAD_WORD"});
                }
            }
            return next(action);
        };
    };
}