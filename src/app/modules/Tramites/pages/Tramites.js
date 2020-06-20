import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { TitulacionPage } from "./titulacion/TitulacionPage";
//import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./titulacion/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function Tramites() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/tramites"
            to="/tramites/titulacion/lista"
          />
        }
        
        <ContentRoute path="/tramites/titulacion/nuevo" component={ProductEdit} />
        <ContentRoute
          path="/tramites/titulacion/:id/edit"
          component={ProductEdit}
        />

        <ContentRoute path="/tramites/titulacion/lista" component={TitulacionPage} />
      </Switch>
    </Suspense>
  );
}
