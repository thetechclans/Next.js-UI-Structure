//http://180.188.227.104:8001/apiDCMetaDataRepoFilters?masterparentcode=85566&objecttypecode=2&iskeytag=false&objectname=DQMS&page=1

export type DQMSQueryParams = {
  page?: number
  masterparentcode?: number
  objecttypecode?: number
  iskeytag?: boolean
  objectname?: string
}

export type DQMSResponse = {
    count?: number
    page_count?: number
    next?: number
    previous?: string
    results?: DQMSModel[]
}

export class DQMSModel {
    code: number;
    objecttypecode: number;
    instancename: string;
    parentname: string;
    objecttype: string;
    objectname: string;
    MetaDataCode: number | null;
    CategoryCode: number | null;
    isclassified: number;

    constructor(data: Partial<DQMSModel>) {
        this.code = data.code || 0;
        this.objecttypecode = data.objecttypecode || 0;
        this.instancename = data.instancename || '';
        this.parentname = data.parentname || '';
        this.objecttype = data.objecttype || '';
        this.objectname = data.objectname || '';
        this.MetaDataCode = data.MetaDataCode || null;
        this.CategoryCode = data.CategoryCode || null;
        this.isclassified = data.isclassified || 0;
    }
}