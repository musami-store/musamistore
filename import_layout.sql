-- ========================================================
-- MIGRACIÓN DE DISEÑO DE PAGINA PRINCIPAL
-- ========================================================

CREATE TABLE IF NOT EXISTS public.homepage_sections (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    title TEXT,
    product_ids JSONB,
    content JSONB,
    position INTEGER NOT NULL DEFAULT 0
);

ALTER TABLE public.homepage_sections ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read access" ON public.homepage_sections;
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.homepage_sections;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.homepage_sections;
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.homepage_sections;

CREATE POLICY "Allow public read access" ON public.homepage_sections FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert" ON public.homepage_sections FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON public.homepage_sections FOR UPDATE USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON public.homepage_sections FOR DELETE USING (auth.role() = 'authenticated');

TRUNCATE TABLE public.homepage_sections;

INSERT INTO public.homepage_sections (id, type, title, product_ids, content, position) VALUES (
    'slider-destacados', 'slider', 'Destacados', '["ojos-make-1.1","ojos-make-1.2","ojos-make-1.3","aros-p-2.1","aros-p-2.4","aros-p-2.6","argollas-3.14","argollas-3.18","argollas-3.19"]'::jsonb, NULL, 1
);

INSERT INTO public.homepage_sections (id, type, title, product_ids, content, position) VALUES (
    'main-grid', 'grid', 'Nuestro Catálogo', '["collares-p.1","aros-p.7","collares-p.2","collares-p.3","aros-p.1","collares-p.4","collares-p.5","aros-p-3.5","aros-p-3.6","collares-p.7","aros-p.2","aros-p.3","argollas-p.4","aros-p.5","aros-p.6","aros-p.8","aros-p.9","collares-p.6","aros-p.10","aros-p.11","argollas-p.12","argollas-p.14","aros-p.15","anillos-3.16","anillos-3.17","aros-p.16","aros-psummer.1","collares-psummer.4","aros-psummer.2","collares-psummer.3","collares-psummer.5","argollas-p-2.2","aros-p-2.3","aros-p-2.5","aros-p-2.9","argollas-p-3.1","argollas-p-3.2","aros-p-3.3","aros-p-3.4","aros-p-3.7","anillos-3.15","aros-p-3.8","herramientas-make-1.5","aros-p-3.9","aros-p-3.10","argollas-p-3.11","argollas-3.12","anillos-3.13","anillos-3.14","argollas-p.13","collares-3.18","aros-3.0","herramientas-make-1.4","herramientas-make-1.6","pinches-make-1.7","pinches-make-1.8","aros-p-2.7","aros-p-2.8","pinches-make-1.9","collares-5-3.8","collares-5-3.9","pinches-make-1.10","pinches-make-1.11","scrunchies-make-1.12","cinturon-make-1.13","pinches-make-1.11","pulseras-5-3.1","pulseras-5-3.2","anillos-5-3.3","anillos-5-3.4","aros-5-3.16","anillos-5-3.5","collares-5-3.6","aros-5-3.17","collares-5-3.7","collares-5-3.10","aros-5-3.11","aros-5-3.12","aros-5-3.13","argollas-5-3.14","aros-5-3.15","aros-5-3.18","argollas-5-3.19","aros-5-3.20"]'::jsonb, NULL, 2
);