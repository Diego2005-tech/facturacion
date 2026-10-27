// ============================================================
//  CATÁLOGOS SAT — Régimen Fiscal y Uso de CFDI (CFDI 4.0)
//  Fuente: catálogos públicos del SAT. Revísalos cada cierto
//  tiempo en: https://www.sat.gob.mx/ (pueden agregar/quitar
//  claves con el tiempo).
// ============================================================

const REGIMENES_FISCALES = [
  { clave: "601", desc: "General de Ley Personas Morales" },
  { clave: "603", desc: "Personas Morales con Fines no Lucrativos" },
  { clave: "605", desc: "Sueldos y Salarios e Ingresos Asimilados a Salarios" },
  { clave: "606", desc: "Arrendamiento" },
  { clave: "607", desc: "Régimen de Enajenación o Adquisición de Bienes" },
  { clave: "608", desc: "Demás ingresos" },
  { clave: "610", desc: "Residentes en el Extranjero sin Establecimiento Permanente en México" },
  { clave: "611", desc: "Ingresos por Dividendos (socios y accionistas)" },
  { clave: "612", desc: "Personas Físicas con Actividades Empresariales y Profesionales" },
  { clave: "614", desc: "Ingresos por intereses" },
  { clave: "615", desc: "Régimen de los ingresos por obtención de premios" },
  { clave: "616", desc: "Sin obligaciones fiscales" },
  { clave: "620", desc: "Sociedades Cooperativas de Producción que optan por diferir sus ingresos" },
  { clave: "621", desc: "Incorporación Fiscal" },
  { clave: "622", desc: "Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras" },
  { clave: "623", desc: "Opcional para Grupos de Sociedades" },
  { clave: "624", desc: "Coordinados" },
  { clave: "625", desc: "Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas" },
  { clave: "626", desc: "Régimen Simplificado de Confianza (RESICO)" },
  { clave: "628", desc: "Hidrocarburos" },
  { clave: "629", desc: "De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales" },
  { clave: "630", desc: "Enajenación de acciones en bolsa de valores" },
];

const USOS_CFDI = [
  { clave: "G01", desc: "Adquisición de mercancías" },
  { clave: "G02", desc: "Devoluciones, descuentos o bonificaciones" },
  { clave: "G03", desc: "Gastos en general" },
  { clave: "I01", desc: "Construcciones" },
  { clave: "I02", desc: "Mobiliario y equipo de oficina por inversiones" },
  { clave: "I03", desc: "Equipo de transporte" },
  { clave: "I04", desc: "Equipo de cómputo y accesorios" },
  { clave: "I05", desc: "Dados, troqueles, moldes, matrices y otros activos" },
  { clave: "I06", desc: "Comunicaciones telefónicas" },
  { clave: "I07", desc: "Comunicaciones satelitales" },
  { clave: "I08", desc: "Otra maquinaria y equipo" },
  { clave: "D01", desc: "Honorarios médicos, dentales y gastos hospitalarios" },
  { clave: "D02", desc: "Gastos médicos por incapacidad o discapacidad" },
  { clave: "D03", desc: "Gastos funerales" },
  { clave: "D04", desc: "Donativos" },
  { clave: "D05", desc: "Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)" },
  { clave: "D06", desc: "Aportaciones voluntarias al SAR" },
  { clave: "D07", desc: "Primas por seguros de gastos médicos" },
  { clave: "D08", desc: "Gastos de transportación escolar obligatoria" },
  { clave: "D09", desc: "Depósitos en cuentas para el ahorro, pensiones" },
  { clave: "D10", desc: "Pagos por servicios educativos (colegiaturas)" },
  { clave: "S01", desc: "Sin efectos fiscales" },
  { clave: "CP01", desc: "Pagos" },
  { clave: "CN01", desc: "Nómina" },
];
