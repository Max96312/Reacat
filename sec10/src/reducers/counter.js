// counter를 위한 reducer 함수
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1; // => store state update ==> react component rerendering
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counter;