import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RoutesWrapper from './utils/Routes'
import { store } from './utils/Store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

