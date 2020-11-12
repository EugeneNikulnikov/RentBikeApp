export const reducer = (state = {}, action) => {
    if (action.type === 'PENDING'){
        return {...state,
            loading: true,
        }
    }
    if (action.type === 'REJECT'){
        return {...state,
            [action.name]: action.error,
            loading: false
        }

    }
    if (action.type === 'RESOLVED'){
        if(action.name === 'bikes') {
            return {...state,
                [action.name]: action.payload,
                loading: false
            }
        }
        if(action.name === 'delete') {
            state.bikes = state.bikes.filter(bike => bike._id !== action.payload._id);
        }
        if(action.name === 'rent') {
            state.bikes = state.bikes.map(bike => {
                if(bike._id === action.payload._id){
                    bike.rented = action.payload.rented;
                }
                return bike;
            });
        }
        if(action.name === 'create') {
            const cloneBikes = Array.from(state.bikes);
            cloneBikes.push(action.payload);
            state.bikes = cloneBikes;
        }
        return{
            ...state,
            loading:false,
        }
    }
    return state;
};