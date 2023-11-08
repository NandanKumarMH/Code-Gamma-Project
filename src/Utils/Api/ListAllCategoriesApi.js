import { executeGET } from "../ServiceMethods";

export const ListAllCategoriesApi = async (data) => {
  try {
    const ListAllCategoriesApi = await executeGET("/products/categories", data);
    const ListAllCategoriesApiData = ListAllCategoriesApi.data
      ? ListAllCategoriesApi.data
      : {};
    return ListAllCategoriesApiData;
  } catch (error) {
    return false;
  }
};
