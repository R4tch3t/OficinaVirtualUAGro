import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./titulacion/CustomersPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function Tramites() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/Tramites"
            to="/Tramites/Titulacion"
          />
        }
        <ContentRoute path="/Tramites/Titulacion" component={CustomersPage} />
        <ContentRoute path="/e-commerce/products/new" component={ProductEdit} />
        <ContentRoute
          path="/e-commerce/products/:id/edit"
          component={ProductEdit}
        />

        <ContentRoute path="/e-commerce/products" component={ProductsPage} />
      </Switch>
    </Suspense>
  );
}
