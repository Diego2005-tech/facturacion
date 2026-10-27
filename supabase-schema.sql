-- ============================================================
--  ESQUEMA SUPABASE — Catálogo de clientes para facturación
--  Cópialo y pégalo en: Supabase → SQL Editor → New query → Run
--
--  Si ya habías corrido una versión anterior de este script (la
--  que dejaba lectura pública), vuelve a correr este archivo
--  completo: borra esa política vieja y deja todo bien cerrado.
-- ============================================================

create table if not exists public.clientes_facturacion (
  id          bigint generated always as identity primary key,
  rfc         text not null,
  razon       text not null,
  cp          text,
  estado      text,
  regimen     text,
  cfdi        text,
  email       text,
  celular     text,
  created_at  timestamptz not null default now()
);

alter table public.clientes_facturacion enable row level security;

-- Quita políticas previas (por si ya habías corrido una versión anterior)
drop policy if exists "Cualquiera puede insertar" on public.clientes_facturacion;
drop policy if exists "Cualquiera puede leer" on public.clientes_facturacion;
drop policy if exists "Solo admin puede leer" on public.clientes_facturacion;
drop policy if exists "Solo admin puede actualizar" on public.clientes_facturacion;
drop policy if exists "Solo admin puede eliminar" on public.clientes_facturacion;

-- INSERT: público — así el formulario de cliente (sin login) puede
-- registrar datos.
create policy "Cualquiera puede insertar"
  on public.clientes_facturacion
  for insert
  to anon, authenticated
  with check (true);

-- SELECT: solo usuarios autenticados (el admin que inicia sesión en
-- admin.html). Nadie puede leer los datos sin loguearse.
create policy "Solo admin puede leer"
  on public.clientes_facturacion
  for select
  to authenticated
  using (true);

-- UPDATE: solo admin autenticado (para poder editar desde admin.html).
create policy "Solo admin puede actualizar"
  on public.clientes_facturacion
  for update
  to authenticated
  using (true)
  with check (true);

-- DELETE: solo admin autenticado.
create policy "Solo admin puede eliminar"
  on public.clientes_facturacion
  for delete
  to authenticated
  using (true);
