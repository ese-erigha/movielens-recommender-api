import createError from 'npm:http-errors';

export class HTTPMessages {
  static readonly OK: string = 'OK';
  static readonly CREATED: string = 'Created';
  static readonly BAD_REQUEST: string = 'Bad Request';
  static readonly UNAUTHORIZED: string = 'Unauthorized';
  static readonly NOT_FOUND: string = 'Not Found';
  static readonly CONFLICT: string = 'Conflict';
  static readonly UNPROCESSABLE_ENTITY: string = 'Unprocessable Entity';
  static readonly TOO_MANY_REQUESTS: string = 'Too Many Requests';
  static readonly INTERNAL_SERVER_ERROR: string = 'Internal Server Error';
  static readonly BAD_GATEWAY: string = 'Bad Gateway';
}

export enum HTTPStatusCode {
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  PartialContent = 206,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  UnprocessableEntity = 422,
  TooManyRequests = 429,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTiemout = 504
}

export class NotFoundException {
  constructor(message = HTTPMessages.NOT_FOUND) {
    throw createError(HTTPStatusCode.NotFound, message);
  }
}