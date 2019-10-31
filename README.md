# Class Component Asynchronous State Best Practices

This is a demonstration of best practices for updating state in a class component when the state update relies on the previous state.

Since state updates are asynchronous, it is possible that our state updates after we perform a calculation that relied on the previous state, giving us an incorrect value.

To avoid this, any time state values are used inside a state update, we use a callback function to update the state instead of manipulating the state object directly. 

EX: this.setState((previousState, previousProps)=>{STATE UPDATE HAPPENS HERE}, ()=>{THIS HAPPENS NEXT})
