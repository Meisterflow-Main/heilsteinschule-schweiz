import React from "react";
import { Mountain } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const ALPENSEMINAR_TAGE = [
  {
    tag: "1. Tag — 25.06.2025",
    title: "Innertkirchen & Rosenlaui Gletscherschlucht",
    text: "Die Exkursion startet in Innertkirchen, am Gadmerwasser Fluss. Hier finden wir Gneis, Calcit und interessante Heilsteine wie zum Beispiel Amphibolit, ein metamorphes Gestein, das aus Hornblende (dunkel) und Plagioklas-Feldspat (hell) besteht. Dieses beliebte Gestein wird auch «Salz und Pfeffer» Stein genannt. Anschliessend besuchen wir auf 1370 m ü. M. die Rosenlaui Gletscherschlucht. Eine imposante Schlucht mit wuchtigen Wasserfällen und fantastischen Felsformationen, aus tosend, sprudelnd, schäumendem Gletscherwasser geformt. Wir erkunden begeistert, auf dem gut gesicherten, 573 Meter langen Weg mit 12 Tunneln und 215 Treppenstufen, diese Sehenswürdigkeit inmitten prächtiger Bergwelt. Danach Weiterfahrt Richtung Schwarzwaldalp.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/47c0266f3_ChatGPTImageSep29202609_42_30PM.png",
  },
  {
    tag: "2. Tag — 26.06.2025",
    title: "Grosse Scheidegg & Grindelwald",
    text: "Fahrt mit dem Bus über die Grosse Scheidegg nach Grindelwald. Am Ufer des Quellfluss Weisse Lütschine finden wir die unterschiedlichsten Variationen des Rosenlaui-Marmor, Handelsname für Kalkbrekzie. Vorbei an der Gletscherschlucht wandern wir zum Marmorsteinbruch. Beim Oberen Gletscher suchen und finden wir Pyrit in Tonschiefer. Ein kräftiger Donnerschlag gibt uns den Impuls, rechtzeitig dem Regenguss zu entkommen.",
  },
  {
    tag: "3. Tag — 27.06.2025",
    title: "Geologische Wanderung & Rhonegletscher",
    text: "Geologische Wanderung von der grossen Scheidegg zur Schwarzwaldalp. Finden von Konkretionen (harte, mineralische Gebilde, die in Sedimenten und Sedimentgesteinen entstehen). Besichtigung des Rhonegletschers, Granit sehen und spüren. Danach Weiterfahrt Richtung Göscheneralp.",
  },
  {
    tag: "4. Tag — 28.06.2025",
    title: "Oberalppass & Strahler Legende",
    text: "Geologische Exkursion: Wanderung zum Steinbruch oberhalb der Passhöhe des Oberalppass. Beim Aufstieg zum Steinbruch treffen wir auf eine verlassene Kluft. Daneben liegen vereinzelt kleine Bergkristalle für glückliche Finder. Wir finden Serpentinit, Talk, Schneequarz, Aktinolith und zu unserer grossen Freude: Magnetit Kristallin. Die Sonne strahlt, so auch unsere Augen. Am Nachmittag besuchen wir die Strahler Legende Peter Indergand, seine Schwester und seinen Sohn, in Ihrem Laden in Göschenen, den Sie für uns geöffnet haben.",
    imgs: [
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/763852b6f_ChatGPTImageSep29202609_42_37PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ab7de1fe6_ChatGPTImageSep29202609_43_38PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/25bc86843_ChatGPTImageSep29202609_44_50PM.png",
    ],
  },
  {
    tag: "5. Tag — 29.06.2025",
    title: "Zertifikatsübergabe",
    text: "Feierliche Übergabe der Zertifikate an die Schüler/-innen der Heilsteinschule, welche bereits abgeschlossen haben. Ein würdiger Abschluss des Seminars — siehe auch das Zitat von Pascal Bossard unten.",
    imgs: [
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/58499c23c_ChatGPTImageSep29202609_46_32PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/4f0020866_ChatGPTImageSep29202609_50_08PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1db3a3465_ChatGPTImageSep29202609_58_23PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/60d9c1562_ChatGPTImageSep29202609_57_12PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/5b9f237d2_ChatGPTImageSep29202609_53_17PM.png",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1acaf1b1f_ChatGPTImageSep29202609_51_55PM.png",
    ],
  },
];

const BACKVIEW_IMG = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/a891f19f9_WhatsAppImage2026-09-23at105952.jpeg";

export default function AlpenseminarReport() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="mb-3 flex items-center justify-center gap-2">
            <Mountain className="h-4 w-4 text-citrine-deep" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">Alpenseminar 2025</span>
          </div>
          <SectionHeading
            title="Exkursion zu den Heilsteinen der Schweizer Hochalpen"
            subtitle="Ein 5-tägiger Rückblick von Pascal Bossard, Leiter Alpenseminar."
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {ALPENSEMINAR_TAGE.map((t, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
                {t.img && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                )}
                {t.imgs && (
                  <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                    {t.imgs.map((src, j) => (
                      <div key={j} className="aspect-square overflow-hidden">
                        <img src={src} alt={`${t.title} ${j + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                      </div>
                    ))}
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amethyst text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="font-mono text-xs uppercase tracking-wider text-citrine-deep">{t.tag}</p>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-amethyst">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Zitat Pascal Bossard */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl bg-citrine/10 p-6 text-center">
            <p className="text-sm italic leading-relaxed text-amethyst">
              „Rückblickend wurde ich nach dem/den Highlights an diesem Alpenseminar gefragt. Es waren in
              meiner Betrachtung die Teilnehmer, mit Begeisterung für die Natur und die Steine. Des
              Weiteren durfte ich grosse Freude und eine harmonische Zusammenarbeit im Leiterteam
              erfahren. Wir freuen uns schon heute auf ein weiteres Alpenseminar 2026."
            </p>
            <p className="mt-3 text-sm font-semibold text-citrine-deep">— Pascal Bossard, Leiter Alpenseminar</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
            <img src={BACKVIEW_IMG} alt="Rückblick und Vorfreude auf das Alpenseminar 2026" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}