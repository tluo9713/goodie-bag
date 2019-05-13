const initialState = {
  name: '',
  description: '',
  quantity: 0,
  imageUrl: '',
};

const ADD_CANDY = 'ADD_CANDY';
export const addCandy = () => ({
  type: ADD_CANDY,
});
const SUBTRACT_CANDY = 'SUBTRACT_CANDY';
export const subtractCandy = () => ({ type: SUBTRACT_CANDY });

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDY:
      return { ...state, quantity: state.quantity + 1 };
    case SUBTRACT_CANDY:
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};

export default rootReducer;
