interface ApiResult<T> {
  code: number;
  data: T;
  message?: string;
}

interface ApiListResult<T> {
  code: number;
  data: T[];
  message?: string;
  hasNext: boolean;
  totalCount: number;
  nextUrl?: string;
}
