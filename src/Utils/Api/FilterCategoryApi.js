import { executeGET } from "../ServiceMethods";

export const FilterCategoryApi = async () => {
  try {
    const FilterCategoryApi = await executeGET("/products/categories/jewelery");
    const FilterCategoryApiData = FilterCategoryApi.data
      ? FilterCategoryApi.data
      : {};
    return FilterCategoryApiData;
  } catch (error) {
    return false;
  }
};
