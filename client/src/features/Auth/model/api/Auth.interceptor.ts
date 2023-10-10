import {
  BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import {setIsAuth} from '../slices/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BASE_URL}/api/`,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const refreshResult: any = await baseQuery({
      url: '/auth/refresh',

    }, api, extraOptions);

    if (refreshResult.data) {
      localStorage.setItem('token', refreshResult.data.accessToken as string);
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setIsAuth(false));
    }
  }
  return result;
};
