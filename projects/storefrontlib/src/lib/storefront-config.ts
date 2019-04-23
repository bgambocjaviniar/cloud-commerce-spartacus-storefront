import {
  AuthConfig,
  OccConfig,
  StateConfig,
  ConfigurableRoutesConfig,
  CmsConfig,
  SiteContextConfig,
  I18nConfig,
} from '@spartacus/core';
import { PWAModuleConfig } from './pwa/pwa.module-config';
import { LayoutConfig } from './ui/layout/config/layout-config';
import { CheckoutConfig } from './checkout/config/checkout-config';

export interface StorefrontModuleConfig
  extends AuthConfig,
    CmsConfig,
    OccConfig,
    StateConfig,
    PWAModuleConfig,
    SiteContextConfig,
    LayoutConfig,
    ConfigurableRoutesConfig,
    I18nConfig,
    CheckoutConfig {}
