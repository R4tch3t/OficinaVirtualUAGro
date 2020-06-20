import {TITULACION_MOCK} from "./tituloTableMock";
import MockUtils from "./mock.utils";

export default function mockProducts(mock) {
  mock.onPost("api/products").reply(({ data }) => {
    const { product } = JSON.parse(data);
    const {
      model = "",
      manufacture = "",
      modelYear = 2000,
      mileage = 0,
      description = "",
      color = "Black",
      price = 1000,
      condition = 0,
      status = 0,
      VINCode = ""
    } = product;

    const id = generateProductId();
    const newProduct = {
      id,
      model,
      manufacture,
      modelYear,
      mileage,
      description,
      color,
      price,
      condition,
      status,
      VINCode
    };
    TITULACION_MOCK.push(newProduct);
    return [200, { product: newProduct }];
  });

  mock.onPost("api/products/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredProducts = mockUtils.baseFilter(TITULACION_MOCK, queryParams);
    return [200, filteredProducts];
  });

  mock.onPost("api/products/deleteProducts").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = TITULACION_MOCK.findIndex(el => el.id === id);
      if (index > -1) {
        TITULACION_MOCK.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/products/updateStatusForProducts").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    TITULACION_MOCK.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/products\/\d+/).reply(config => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    const product = TITULACION_MOCK.find(el => el.id === +id);
    if (!product) {
      return [400];
    }

    return [200, product];
  });

  mock.onPut(/api\/products\/\d+/).reply(config => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    const { product } = JSON.parse(config.data);
    const index = TITULACION_MOCK.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    TITULACION_MOCK[index] = { ...product };
    return [200];
  });

  mock.onDelete(/api\/products\/\d+/).reply(config => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    const index = TITULACION_MOCK.findIndex(el => el.id === +id);
    TITULACION_MOCK.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProductId() {
  const ids = TITULACION_MOCK.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}