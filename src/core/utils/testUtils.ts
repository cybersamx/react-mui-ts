import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

function renderWithRouter(ui: ReactElement, { route = '/' } = {}) {
  window.history.pushState({}, 'Root page', route);

  return render(ui, { wrapper: BrowserRouter });
}

export { renderWithRouter };
