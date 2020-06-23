// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select, Checkbox } from "../../../../../../_metronic/_partials/controls";
import {
  AVAILABLE_COLORS,
  AVAILABLE_ESTADOS,
  ProductStatusTitles,
  ProductConditionTitles,
} from "../ProductsUIHelpers";

// Validation schema
const ProductEditSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(10, "Mínimo 10 simbolos")
    .max(50, "Máximo 60 simbolos")
    .required("El nombre es requerido"),
  niveles_educativos: Yup.string()
    .min(1, "Mínimo 1 simbolos")
    .max(50, "Máximo 50 simbolos")
    .required("Nivel educativo es requerido"),
  cve_formato_ns: Yup.string()
    .min(4, "Mínimo 4 simbolos")
    .max(50, "Máximo 50 simbolos")
    .required("Formato NS es requerido"),
  cve_formato_nms: Yup.string()
    .min(4, "Mínimo 4 simbolos")
    .max(50, "Máximo 50 simbolos")
    .required("Formato NMS es requerido"),
    /*
  modelYear: Yup.number()
    .min(1950, "1950 is minimum")
    .max(2020, "2020 is maximum")
    .required("Model year is required"),
  mileage: Yup.number()
    .min(0, "0 is minimum")
    .max(1000000, "1000000 is maximum")
    .required("Mileage is required"),
  color: Yup.string().required("Color is required"),
  price: Yup.number()
    .min(1, "$1 is minimum")
    .max(1000000, "$1000000 is maximum")
    .required("Price is required"),
  VINCode: Yup.string().required("VINCode is required"),*/
});

export function ProductEditForm({
  product,
  btnRef,
  saveProduct,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={product}
        validationSchema={ProductEditSchema}
        onSubmit={(values) => {
          saveProduct(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    type='text'
                    name="nombre"
                    component={Input}
                    placeholder="Nombre"
                    label="Nombre"
                  />
                </div>
                <div className="col-lg-4">
                  <Select name="activo" label="Estado activo">
                    {AVAILABLE_ESTADOS.map((activo) => (
                      <option key={activo} value={activo}>
                        {activo===0 ? "No" : "Si"}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="col-lg-4">
                  <Field
                   // type="number"
                    name="niveles_educativos"
                    component={Input}
                    placeholder="Nivel educativo"
                    label="Nivel educativo"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                   // type="number"
                    name="cve_formato_ns"
                    component={Input}
                    placeholder="Formato NS"
                    label="Formato NS"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                   // type="number"
                    name="cve_formato_nms"
                    component={Input}
                    placeholder="Formato NMS"
                    label="Formato NMS"
                  />
                </div>
               
              </div>
              
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
