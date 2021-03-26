import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Container from './components/Container';
import StarWarsView from './components/StarWarsView';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Container>
        <StarWarsView />
      </Container>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
