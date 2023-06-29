import env from '$env/static/private';

const VERCEL_ENV = 'development'
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
  console.log('load layout', env)
  return {
    env: env,
    noIndexOnVercel: noIndexOnVercel()
  }
}
