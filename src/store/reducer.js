const defaultStore = {
    inputValue: '',
    list: [
        'Meeting in 8 am',
        'wake up',
        'go sleep'
    ]
}



export default (state = defaultStore, action) => {
    console.log(action);
    //reducer cant change state value
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}