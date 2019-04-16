import { InjectionToken } from '@angular/core';
import { CmsStructureModel } from '../../model/page.model';
import { Converter } from '../../../util/converter.service';

export const CMS_PAGE_NORMALIZE = new InjectionToken<
  Converter<any, CmsStructureModel>
>('CmsPageNormalize');
