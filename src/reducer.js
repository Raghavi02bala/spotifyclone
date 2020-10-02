export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    // spotify page does not load on refresh, defualt logged in
    token: 'BQCBp_jftiz98nEUW1ZFZ35SIAR171pzu0IlxJGLqmP73Z2Wd-0lJWXL6hSQMPh2LzC_MeWFGflXA9y4kp4ihLLMy6vDYaAjbNNJIMbKI17_7ckiPQ2WUmL0BWdlv9An1PTO8IQdhBys1E2EKoWeT80TQ1QNfVBV9t-YVRj-ySbmRLv_T-Jv'
}

// state is hoe the data looks like, and the action is abt manipulaing the state.
const reducer = (state, action) =>{
console.log(action);

// action is dispatched, and we're writing a switch stmnt for catching and doing the req wrk

    switch (action.type) {
        case 'SET_USER':
            // ... 3dots, spread operator. the state is spread to set the user
            return{
                ...state,
                user: action.user
            }
            
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        default:
            return state;
    }

}

export default reducer;