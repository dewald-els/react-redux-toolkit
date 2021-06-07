export const counterMiddleware = () => next => action => {
    console.log('Im always running');

    next(action);

    if (action.type === 'Counter/increment') {
        console.log('ADDING TO COUNTER');
    }

    if (action.type === 'Counter/decrement') {
        console.log('REMOVING TO COUNTER');
    }


}
