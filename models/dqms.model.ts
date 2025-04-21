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
    results?: DQMSPayload[]
}

export class DQMSPayload {
    code: number;
    name: string;
    dbconnectioncode: DBConnectionCode;
    sourcetypecode: SourceTypeCode;
    technicalcontactemail: string;
    technicalcontactmobile: string;
    technicalcontactname: string;
    createdby: string;
    createddate: string;
    modifiedby: string | null;
    modifieddate: string | null;
    excelconnectioncode: ExcelConnectionCode;

    constructor(data: Partial<DQMSPayload>) {
        this.code = data.code || 0;
        this.name = data.name || '';
        this.dbconnectioncode = new DBConnectionCode(data.dbconnectioncode || {});
        this.sourcetypecode = new SourceTypeCode(data.sourcetypecode || {});
        this.technicalcontactemail = data.technicalcontactemail || '';
        this.technicalcontactmobile = data.technicalcontactmobile || '';
        this.technicalcontactname = data.technicalcontactname || '';
        this.createdby = data.createdby || '';
        this.createddate = data.createddate || '';
        this.modifiedby = data.modifiedby || null;
        this.modifieddate = data.modifieddate || null;
        this.excelconnectioncode = new ExcelConnectionCode(data.excelconnectioncode || {});
    }
}

export class DBConnectionCode {
    code: number;
    dbmscode: DBMSCode;
    name: string;
    connectionstring: string;
    servername: string;
    port: string;
    loginname: string;
    loginpwd: string;
    databasename: string;
    schemaname: string;
    validationflag: boolean;
    lastvalidationdate: string;
    errormessage: string | null;
    createdby: string;
    createddate: string;
    modifiedby: string | null;
    modifieddate: string | null;
    isdatacatelogue: boolean;
    issupportdb: boolean;

    constructor(data: Partial<DBConnectionCode>) {
        this.code = data.code || 0;
        this.dbmscode = new DBMSCode(data.dbmscode || {});
        this.name = data.name || '';
        this.connectionstring = data.connectionstring || '';
        this.servername = data.servername || '';
        this.port = data.port || '';
        this.loginname = data.loginname || '';
        this.loginpwd = data.loginpwd || '';
        this.databasename = data.databasename || '';
        this.schemaname = data.schemaname || '';
        this.validationflag = data.validationflag || false;
        this.lastvalidationdate = data.lastvalidationdate || '';
        this.errormessage = data.errormessage || null;
        this.createdby = data.createdby || '';
        this.createddate = data.createddate || '';
        this.modifiedby = data.modifiedby || null;
        this.modifieddate = data.modifieddate || null;
        this.isdatacatelogue = data.isdatacatelogue || false;
        this.issupportdb = data.issupportdb || false;
    }
}

export class DBMSCode {
    code: number;
    name: string;

    constructor(data: Partial<DBMSCode>) {
        this.code = data.code || 0;
        this.name = data.name || '';
    }
}

export class SourceTypeCode {
    code: number;
    name: string;

    constructor(data: Partial<SourceTypeCode>) {
        this.code = data.code || 0;
        this.name = data.name || '';
    }
}

export class ExcelConnectionCode {
    code: number;
    name: string;
    excelfilename: string;

    constructor(data: Partial<ExcelConnectionCode>) {
        this.code = data.code || 0;
        this.name = data.name || '';
        this.excelfilename = data.excelfilename || '';
    }
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