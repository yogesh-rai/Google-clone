export const initialState = {
    term: null,
};

export const actionType = {
    set_search_term: "set_search_term",
};

export const reducer = (state,action) => {
    console.log(action);
    
   switch (action.type)
   {
       case actionType.set_search_term:
           return{
               ...state,
               term: action.term,
           };

        default:
            return state;
   }
}
