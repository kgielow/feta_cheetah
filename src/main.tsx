import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createPetstoreService, PetstoreServiceContext } from './services/petstore.ts'

const petstoreService = createPetstoreService({
  basePath: "http://petstore.swagger.io/v2"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PetstoreServiceContext.Provider value={petstoreService}>
      <App />
    </PetstoreServiceContext.Provider>
  </React.StrictMode>,
)
