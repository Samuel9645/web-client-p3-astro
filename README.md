# Generación de sitios estáticos con Astro

Rehaz con Astro el catálogo de especies endémicas que construiste con Web
Components. En este caso desaparece el panel de detalle y cada especie
tendrá su propia página, con su propia URL (/especies/drago/,
/especies/til/ ...). Astro generará esas páginas automáticamente a partir
de los datos.

1. Crea un proyecto Astro vacío y añade los datos en src/data/especies.js.
2. Crea el layout base, BaseLayout. astro, con la cabecera, el pie y un
   <slot /> para el contenido de cada página. Cada página tendrá un
   título diferente: pásalo con una prop.
3. Crea el componente BadgeAmenaza.astro, que recibe el nivel de
   amenaza como prop y muestra su etiqueta con el color correspondiente.
4. En la página index, importa los datos en el frontmatter y muestra una
   lista con las especies recorriéndolas con map en la plantilla.
5. Crea un componente genérico Tarjeta.astro, que no sepa nada de
   especies. Usa slots con nombre (icono, título) con contenido por
   defecto, y un slot por defecto para el resto.
6. Crea el componente EspecieCard.astro, que usa Tarjeta y
   BadgeAmenaza para mostrar una especie. Sustituye la lista de index
   por una rejilla de tarjetas.
7. Crea una página por especie con la ruta dinámica `especies/[id].astro` y
   getStaticPaths. Enlaza cada tarjeta con
   su página.
8. Añade un camino de navegación ("Catálogo > nombre de la especie") en
   la cabecera de las fichas mediante un slot con nombre en el layout.
   Muestra los datos de la ficha (isla, habitat, altura) con un componente
   Chip.astro que use el slot por defecto.

