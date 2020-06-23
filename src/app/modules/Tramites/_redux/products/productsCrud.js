import axios from "axios";
import ip from "../../../Auth/genVars/Ip"
export const PRODUCTS_URL = "api/products";

// CREATE =>  POST: add a new product to the server
/*export function createProduct(product) {
  console.log("products: ")
  console.log(product)

  // Alter defaults after instance has been created
  //instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  return axios.post("api/tramites", { product });
  //return axios.post("https://apitest.uagro.mx:3000/api/tramites/", { product });
}*/
export async function createProduct(tramite) {
  console.log("products: ")
  console.log(tramite)
  const sendUri = ip("3000", "api/tramites");
  //const sendUri = "https://apitest.uagro.mx:3000/api/tramites"
  /*const bodyJSON = {
    matricula: matricula,
    password: password
  };*/

  const response = await fetch(sendUri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tramite)
  });

  const responseJson = await response;
  return responseJson;
  //return axios.post("api/tramites", { product });
  //return axios.post("https://apitest.uagro.mx:3000/api/tramites/", { product });
}


// READ
export function getAllProducts() {
  return axios.get(PRODUCTS_URL);
}

export function getProductById(productId) {
  return axios.get(`${PRODUCTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams) {
  return axios.post(`${PRODUCTS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(product) {
  return axios.put(`${PRODUCTS_URL}/${product.id}`, { product });
}

// UPDATE Status
export function updateStatusForProducts(ids, status) {
  return axios.post(`${PRODUCTS_URL}/updateStatusForProducts`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProduct(productId) {
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, { ids });
}
