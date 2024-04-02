"use strict";

import { renderAppDelivery } from "./app_delivery.js";
import { renderAppForm } from "./app_form.js";
import { renderAppOrderResult } from "./app_order_result.js";
import { renderAppPay } from "./app_pay.js";
import { renderAppProduct } from "./app_product.js";
import { renderAppProductOut } from "./app_product_out.js";
import { renderAppPopupPay } from "./app_popup_pay.js";
import { renderAppPopupDelivery } from "./app_popup_delivery.js";

document.addEventListener("DOMContentLoaded", function () {
  renderAppProduct();
  renderAppProductOut();
  renderAppPay();
  renderAppDelivery();
  renderAppOrderResult();
  renderAppForm();
  renderAppPopupPay();
  renderAppPopupDelivery();
});
