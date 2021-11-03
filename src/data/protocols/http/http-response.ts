export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  notModified = 304,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  internalServerError = 500,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
