import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function TitulacionPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/tramites/titulacion/nuevo");
    },
    openEditProductPage: (id) => {
      history.push(`/tramites/titulacion/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/tramites/titulacion/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/tramites/titulacion/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/tramites/titulacion/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/tramites/titulacion/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/tramites/titulacion/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/tramites/titulacion/lista");
            }}
          />
        )}
      </Route>
      <Route path="/tramites/titulacion/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/tramites/titulacion/lista");
            }}
          />
        )}
      </Route>
      <Route path="/tramites/titulacion/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/tramites/titulacion/lista");
            }}
          />
        )}
      </Route>
      <Route path="/tramites/titulacion/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/tramites/titulacion/lista");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
