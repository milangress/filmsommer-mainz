import env from '$env/static/private';

// const VERCEL_ENV = 'development'

// get vercel env from process.env
const VERCEL_ENV = process.env.VERCEL_ENV


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
  console.log('load layout', env, VERCEL_ENV)
  return {
    env: env,
    VERCEL_ENV: VERCEL_ENV,
    noIndexOnVercel: noIndexOnVercel()
  }
}
