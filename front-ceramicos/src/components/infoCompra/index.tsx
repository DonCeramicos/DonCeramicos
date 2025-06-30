export const InfoCompra = () => {
    return (
<section
  id="como-comprar"
  className="py-20 px-4 md:px-10 lg:px-20 text-white relative z-10 bg-gradient-to-b from-[#1a1a1acc] to-transparent"
>
  <h2 className="text-3xl md:text-4xl font-poiret-one text-center mb-12">
    ¿Cómo comprar?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {/* Paso 1 */}
    <article className="flex flex-col items-center gap-4">
      <img
        src="/catalogo.png"
        alt="Catálogo"
        className="h-20 w-20 hover:scale-[1.1] transition duration-300"
      />
      <h3 className="text-xl font-bold">Explorá nuestro catálogo</h3>
      <p className="text-sm color-font-2 max-w-xs">
        Elegí el producto que querés desde nuestras secciones.
      </p>
    </article>

    {/* Paso 2 */}
    <article className="flex flex-col items-center gap-4">
      <img
        src="/contacto.png"
        alt="Contacto"
        className="h-20 w-20 hover:scale-[1.1] transition duration-300"
      />
      <h3 className="text-xl font-bold">Contactanos</h3>
      <p className="text-sm color-font-2 max-w-xs">
        Consultanos stock y presupuestos por WhatsApp, mail o nuestras redes sociales.
      </p>
    </article>

    {/* Paso 3 */}
    <article className="flex flex-col items-center gap-4">
      <img
        src="/entrega.png"
        alt="Entrega o Retiro"
        className="h-20 w-20 hover:scale-[1.1] transition duration-300"
      />
      <h3 className="text-xl font-bold">Coordiná la entrega</h3>
      <p className="text-sm color-font-2 max-w-xs">
        Retirá por nuestro punto de entrega o coordiná envío.
      </p>
    </article>
  </div>
</section>

    )
}