// Configuración de Supabase para Musamí Store

const SUPABASE_URL = "https://tgfqgjnodjbmrmusgtwf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_crXFVrkudImZ73Qjvw2Z5A_GkfULcX_";

// Inicializa el cliente de Supabase. Si falla o no está cargado el CDN,
// se maneja de forma segura como nulo para usar el respaldo estático local.
let supabaseClient = null;

try {
    if (window.supabase && SUPABASE_URL.indexOf("reemplaza") === -1) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase inicializado correctamente.");
    } else {
        console.warn("Supabase no inicializado: Usando catálogo local como respaldo.");
    }
} catch (e) {
    console.error("Error al inicializar Supabase:", e);
}

window.supabaseClient = supabaseClient;
