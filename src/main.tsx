import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createPetstoreApis } from './services/petstore.ts'
import { ServiceApisContext } from './services/context.ts'

const serviceApis = {
  petstore: createPetstoreApis({
    basePath: "http://petstore.swagger.io/v2"
  }),
  // other sets of apis that are generated together in ./src/services/generated
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServiceApisContext.Provider value={serviceApis}>
      <App />
    </ServiceApisContext.Provider>
  </React.StrictMode>,
)
