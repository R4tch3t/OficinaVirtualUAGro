import MockAdapter from "axios-mock-adapter";
import mockAuth from "../../app/modules/Auth/__mocks__/mockAuth";
import mockCustomers from "../../app/modules/Tramites/__mocks__/mockCustomer";
import mockProducts from "../../app/modules/Tramites/__mocks__/mockProduct";
import mockRemarks from "../../app/modules/Tramites/__mocks__/mockRemark";
import mockSpecifications from "../../app/modules/Tramites/__mocks__/mockSpecification";

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });

  mockAuth(mock);
  mockCustomers(mock);
  mockProducts(mock);
  mockRemarks(mock);
  mockSpecifications(mock);

  return mock;
}
