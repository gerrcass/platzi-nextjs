export const SERVER_URL = process.env.NODE_ENV !== 'production'
    ?
    'http://localhost:3000'
    :
    'https://platzi-avocado-nextjs-tau.vercel.app/' //👈 Domain assigned by Vercel to your Production Deployment