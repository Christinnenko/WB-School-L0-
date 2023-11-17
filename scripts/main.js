"use strict";

import { renderAppDelivery } from "./appDelivery.js";
import { renderAppForm } from "./appForm.js";
import { renderAppOrderResult } from "./appOrderResult.js";
import { renderAppPay } from "./appPay.js";
import { renderAppProduct } from "./appProduct.js";
import { renderAppProductOut } from "./appProductOut.js";

renderAppProduct();
renderAppForm();
renderAppProductOut();
renderAppPay();
renderAppDelivery();
renderAppOrderResult();
