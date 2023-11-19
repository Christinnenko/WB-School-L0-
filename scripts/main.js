"use strict";

import { renderAppDelivery } from "./appDelivery.js";
import { renderAppForm } from "./appForm.js";
import { renderAppOrderResult } from "./appOrderResult.js";
import { renderAppPay } from "./appPay.js";
import { renderAppProduct } from "./appProduct.js";
import { renderAppProductOut } from "./appProductOut.js";
import { renderAppPopupPay } from "./appPopupPay.js";

document.addEventListener("DOMContentLoaded", function () {
  renderAppProduct();
  renderAppProductOut();
  renderAppPay();
  renderAppDelivery();
  renderAppOrderResult();
  renderAppForm();
  renderAppPopupPay();
});
