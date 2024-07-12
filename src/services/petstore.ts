import { createContext, useContext } from 'react';
import { Configuration, ConfigurationParameters, PetApi, StoreApi, UserApi } from './generated/petstore';

interface PetstoreService {
  petApi: PetApi;
  storeApi: StoreApi;
  userApi: UserApi;
}

export const PetstoreServiceContext = createContext<PetstoreService>(null!);

export function usePetstoreService() {
  return useContext(PetstoreServiceContext);
}

export function createPetstoreService(configParams?: ConfigurationParameters): PetstoreService {
  const config = new Configuration(configParams);
  return {
    petApi: new PetApi(config),
    storeApi: new StoreApi(config),
    userApi: new UserApi(config),
  };
}
