import { Configuration, ConfigurationParameters, PetApi, StoreApi, UserApi } from './generated/petstore';

export interface PetstoreApis {
  petApi: PetApi;
  storeApi: StoreApi;
  userApi: UserApi;
}

export function createPetstoreApis(configParams?: ConfigurationParameters): PetstoreApis {
  const config = new Configuration(configParams);
  return {
    petApi: new PetApi(config),
    storeApi: new StoreApi(config),
    userApi: new UserApi(config),
  };
}
