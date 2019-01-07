export const mangaUpdate = (state = { mangaList: [], mangaTop: [] }, action) => {
    switch (action.type) {
        case 'PAGE_LOADED':
        return {
            ...state,
            mangaTop: action.data.mangaTop,
            mangaList: action.data.mangaList,
        };
        case 'SUBMIT_MANGA':
        return {
            ...state,
            mangaList: ([action.data.mangaList]).concat(state.mangaList),
        };
        case 'DELETE_MANGA':
        return {
            ...state,
            mangaList: state.mangaList.filter((mangaList) => mangaList._id !== action.id),
        };
        case 'SET_EDIT':
        return {
            ...state,
            mangaToEdit: action.mangaList,
        };
        case 'EDIT_MANGA':
        return {
            ...state,
            mangaList: state.mangaList.map((mangaList) => {
            if (mangaList._id === action.data.mangaList._id) {
                return {
                ...action.data.mangaList,
                }
            }
            return mangaList;
            }),
            mangaToEdit: undefined,
        }
        default:
            return state;
    }
};

export const user = (state = { user: [], isSignedIn : false } , action) => {
    switch(action.type) {
        case 'USER_LOGIN' :
        return {
            ...state,
            user: action.data,
            isSignedIn: true,
        };
        case 'USER_LOGOUT' :
        return {
            ...state,
            user: action.data,
            isSignedIn: false,
        };
        default:
            return state
    }
}
// export const mangaTop = (state = { topMangas: []} , action) => {
//     switch (action.type) {
//         case 'PAGE_LOADED': 
//         return {
//             ...state,
//             mangaList: action.data.mangaList,
//         }
//         default:
//             return state
//     }
// }
