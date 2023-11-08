import { executeGET } from "../ServiceMethods";

export const ListAllProductsApi = async (data) => {
  try {
    const ListAllProductsApi = await executeGET("/products", data);
    const ListAllProductsApiData = ListAllProductsApi.data
      ? ListAllProductsApi.data
      : {};
    return ListAllProductsApiData;
  } catch (error) {
    return false;
  }
};
