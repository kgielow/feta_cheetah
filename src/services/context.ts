import { createContext, useContext } from "react";
import { PetstoreApis } from "./petstore";

interface ServiceApis {
    petstore: PetstoreApis;
}

export const ServiceApisContext = createContext<ServiceApis>(null!);

export function usePetstoreApis() {
    return useContext(ServiceApisContext).petstore;
}
