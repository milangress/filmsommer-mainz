export const prerender = true;

import { VERCEL_ENV } from '$env/static/private';

function noIndexOnVercel() {
  if (
    VERCEL_ENV === 'preview' || VERCEL_ENV === 'development'
  ) {
    return 'noindex'
  } else {
    return  'index, follow'
  }
}

export function load() {
  return {
    noIndexOnVercel: noIndexOnVercel()
  }
}
