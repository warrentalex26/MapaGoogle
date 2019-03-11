# GoogleMaps

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Notas

- Proyecto de google Maps creado con angular material, angular-maps y angular 7.
- Agregar dinamicamente marcadores al mapa.
- Al recargar la pagina almacenamos los marcadores en el localStorage.
- Crear una API KEY de google maps y luego pegarla en el app.module.ts en la parte de 
`AgmCoreModule.forRoot({
       apiKey: 'API_KEY'
     }),
`

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
