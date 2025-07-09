import { HttpInterceptorFn } from '@angular/common/http';
import { env } from '../../envs/env';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = env.apiToken;

  const authReq = req.clone({
    setHeaders: {
      Authorization: token,
    },
  });

  return next(authReq);
};
