import { render } from 'react-dom';
import { testValue } from 'myModule/testValue';
import { WithoutState } from 'myModule/WithoutState';
import { WithState } from 'myModule/WithState';

const renderApp = () => {
  const rootElem = document.getElementById('root');

  if (!rootElem) {
    console.warn('Missing mouting point!');

    return;
  }

  console.log({ WithState, WithoutState });

  render(
    <div>
      <div>example content</div>
      <WithoutState />
      <WithState />
    </div>,
    rootElem
  );
};

console.log('testValue in main thread', testValue);

const worker = new Worker(new URL('./worker', import.meta.url), { type: 'module' });

renderApp();
