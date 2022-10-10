import { geolocation } from '@vercel/edge';


const BLOCKED_COUNTRY = 'ES';

export const config = {
    // Solo ejecute el middleware en la  ruta de inicio
    matcher: '/dragonKeeper',
};

export default function middleware(request) {
    const url = new URL(request.url);

    const { country } = geolocation(request);
    // También puede obtener el país usando la notación de puntos en la función
    //   const country = geolocation(request).country;
    

    if (country === BLOCKED_COUNTRY) {
        url.pathname = '/blocked';
    } else {
        url.pathname = '/dragonKeeper';
    }

    // Return a new redirect response
    return Response.redirect(url);
}
