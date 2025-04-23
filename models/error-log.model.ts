export interface ApiErrorLog {
    path: string
    method: string
    statusCode: number
    message: string
    timestamp?: string
  }
  export interface PaginatedApiErrorLogs {
    count: number;
    next: string | null;
    previous: string | null;
    results: ApiErrorLog[];
  }

  export class ApiErrorLogModel implements ApiErrorLog {
    constructor(
      public path: string,
      public method: string,
      public statusCode: number,
      public message: string,
      public timestamp?: string
    ) {}

    static fromJson(json: any): ApiErrorLogModel {
      return new ApiErrorLogModel(
        json.path,
        json.method,
        json.statusCode,
        json.message,
        json.timestamp
      );
    }

    toJson(): any {
      return {
        path: this.path,
        method: this.method,
        statusCode: this.statusCode,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }

  export class PaginatedApiErrorLogsModel implements PaginatedApiErrorLogs {
    constructor(
      public count: number,
      public next: string | null,
      public previous: string | null,
      public results: ApiErrorLogModel[]
    ) {}

    static fromJson(json: any): PaginatedApiErrorLogsModel {
      return new PaginatedApiErrorLogsModel(
        json.count,
        json.next,
        json.previous,
        json.results.map((result: any) => ApiErrorLogModel.fromJson(result))
      );
    }

    toJson(): any {
      return {
        count: this.count,
        next: this.next,
        previous: this.previous,
        results: this.results.map((result) => result.toJson())
      };
    }
  }