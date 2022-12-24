export const SERVER_URL = process.env.NODE_ENV !== 'production'
    ?
    'http://localhost:3000'
    :
    'https://avocado-nextjs.gerardocastillo.me' //👈 Production Deployment Domain