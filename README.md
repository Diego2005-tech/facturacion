# Catálogo de clientes para facturación

Formulario web que guarda los datos fiscales de clientes directo en una base
de datos (Supabase) y permite descargar todo como Excel cuando quieras.
Se abre desde cualquier PC con internet, no depende de que una máquina
específica esté prendida.

## Archivos

- `index.html` — el formulario (HTML + JS plano, sin build).
- `catalogos-sat.js` — catálogos del SAT: Régimen Fiscal y Uso de CFDI.
- `supabase-schema.sql` — script para crear la tabla en Supabase.
- `vercel.json` — configuración mínima de Vercel.

## 1. Crear el proyecto en Supabase (gratis)

1. Entra a https://supabase.com → **Start your project** → crea cuenta (con
   GitHub o email).
2. **New project** → ponle un nombre, elige una contraseña para la base de
   datos (guárdala, no la necesitas para el formulario) y la región más
   cercana (p. ej. `us-east-1`).
3. Cuando el proyecto termine de crearse, ve a **SQL Editor** (menú
   izquierdo) → **New query**.
4. Copia y pega todo el contenido de `supabase-schema.sql` → **Run**.
   Esto crea la tabla `clientes_facturacion` con los mismos campos que
   tenías en tu Apps Script (RFC, razón social, CP, estado, régimen,
   CFDI, email, celular).
5. Ve a **Settings → API**. Copia dos valores:
   - **Project URL**
   - **anon public** key (la clave pública, NO la `service_role`)

## 2. Configurar el formulario con esos valores

Abre `index.html` y busca estas líneas (casi al final del archivo):

```js
const SUPABASE_URL = "TU_SUPABASE_URL_AQUI";
const SUPABASE_ANON_KEY = "TU_SUPABASE_ANON_KEY_AQUI";
```

Reemplázalas con los valores que copiaste del paso anterior. Guarda el
archivo.

> La "anon public key" está hecha para usarse en el navegador (del lado del
> cliente), así que no hay riesgo en que quede visible en el código del
> formulario. Lo que protege tus datos son las políticas de RLS que ya
> quedaron creadas en el script SQL.

## 3. Publicar en Vercel (gratis)

**Opción A — sin usar terminal (recomendado):**

1. Sube esta carpeta a un repositorio nuevo en tu GitHub (puedes arrastrar
   los archivos directo en github.com → New repository → "uploading an
   existing file").
2. Entra a https://vercel.com → crea cuenta con tu GitHub.
3. **Add New → Project** → selecciona el repositorio que acabas de subir.
4. Como es HTML plano, Vercel lo detecta solo (Framework: *Other*) — dale
   **Deploy**.
5. En 30-60 segundos te da una URL tipo `tu-proyecto.vercel.app`. Esa es
   la que abres desde cualquier PC.

**Opción B — con Vercel CLI, si prefieres terminal:**

```bash
npm i -g vercel
cd facturacion-app
vercel login
vercel --prod
```

## 4. Probarlo

Abre la URL que te dio Vercel desde dos computadoras distintas (o tu
celular). Llena el formulario en una, dale **Guardar cliente**, y actualiza
la otra — deberías ver el registro ahí también. El botón **Descargar
Excel** genera un `.xlsx` con todo lo que haya en la base de datos hasta
ese momento.

## Notas

- Los catálogos de Régimen Fiscal y Uso de CFDI están vigentes para CFDI
  4.0 al momento de escribir esto, pero el SAT los actualiza de vez en
  cuando — si usas esto en producción real, vale la pena verificarlos
  contra el catálogo oficial cada cierto tiempo.
- Si más adelante quieres que solo tú veas los datos (no cualquiera con el
  link), avísame: se ajusta quitando la política de `SELECT` público y
  agregando un login simple.
- Cualquier cambio futuro a `index.html` o `catalogos-sat.js`: lo subes a
  tu repo de GitHub y Vercel vuelve a publicar solo, automáticamente.
