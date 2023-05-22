const h1 = document.querySelector('h1');
const happyButton = document.querySelector('#happyButton');
const sadButton = document.querySelector('#sadButton');
const angryButton = document.querySelector('#angryButton');
const confusedButton = document.querySelector('#confusedButton');

happyButton.addEventListener('click', function (e) {
    store.dispatch({ type: 'HAPPY' });
    const state = store.getState();
    h1.innerText = state.face;
})

sadButton.addEventListener('click', function (e) {
    store.dispatch({ type: 'SAD' });
    const state = store.getState();
    h1.innerText = state.face;
})

angryButton.addEventListener('click', function (e) {
    store.dispatch({ type: 'ANGRY' });
    const state = store.getState();
    h1.innerText = state.face;
})

confusedButton.addEventListener('click', function (e) {
    store.dispatch({ type: 'CONFUSED' });
    const state = store.getState();
    h1.innerText = state.face;
})

