import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import ExcursionHero from "@/components/site/ExcursionHero";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

export default function GlarnerlandEngadin() {
  return (
    <>
      <ExcursionHero
        eyebrow="19. – 22. August 2021"
        title="Vom Glarnerland ins Unterengadin"
        subtitle="Gemeinsam mit der Heilsteinschule Schweiz geologische Besonderheiten im Glarnerland und im Unterengadin entdecken — vom Schieferbergwerk Elm über das Eisenbergwerk Gonzen bis in den Schweizer Nationalpark."
        image="https://heilsteinschule.swiss/media/Glarnerland5.png"
        alt="Unterwegs vom Glarnerland bis ins Unterengadin"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal delay={0.05}>
          <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
            <OptimizedImage
              src="https://heilsteinschule.swiss/media/Glarnerland5.png"
              alt="Unterwegs vom Glarnerland bis ins Unterengadin"
              width={1280}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-center text-sm text-muted-foreground">
              Unterwegs vom Glarnerland bis ins Unterengadin
            </figcaption>
          </figure>
        </Reveal>

        <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Nach spannenden Besuchen des Schieferbergwerks in Elm und des Eisenbergwerks in Gonzen führt uns Dr. Andreas
          Stucki auf geologische Erkundungstour und Mineraliensuche durch das Gebiet beim Julierpass. Bei einem
          geführten Besuch des Nationalparkzentrums in Zernez erfahren wir alles über die Nationalparkregion, welche
          wir bei einer Wanderung über Margunet dann selbst zu Fuss entdecken. Spannende Workshops runden das
          Programm ab.
        </p>

        <div className="mt-14 space-y-12">
          {/* Tag 1 */}
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <Calendar className="h-3.5 w-3.5" /> Tag 1
                </div>
                <h2 className="font-heading text-2xl font-bold text-amethyst">Schieferbergwerk Elm & Eisenbergwerk Gonzen</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Individuelle Anreise und Besuch des Schieferbergwerks Elm. Während der rund 2.5-stündigen Führung
                  erwarten uns beeindruckende Momente und vielseitige visuelle Erlebnisse.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Nach dem Mittagessen besuchen wir das Eisenbergwerk Gonzen. Unter fachkundiger Führung tauchen wir
                  während rund 3 Stunden in die spannende Welt «Untertags» ein. Weiterreise nach Bivio ins Hotel Post
                  und gemeinsames Abendessen. Anschliessend lehrreicher Workshop mit Andreas Stucki, Doktor der
                  Mineralogie-Petrographie.
                </p>
              </div>
              <div className="grid gap-4">
                <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Glarnerland1.png" alt="Schieferbergwerk Elm" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">Schieferbergwerk Elm</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Glarnerland1a.png" alt="Eisenbergwerk Gonzen" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">Eisenbergwerk Gonzen</figcaption>
                </figure>
              </div>
            </div>
          </Reveal>

          {/* Tag 2 */}
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Glarnerland2.png" alt="Geologische Erkundungstour ab Bivio am Julierpass" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">Mit Bivio als Ausgangspunkt auf geologischer Erkundungstour und Mineraliensuche</figcaption>
                </figure>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <Calendar className="h-3.5 w-3.5" /> Tag 2
                </div>
                <h2 className="font-heading text-2xl font-bold text-amethyst">Geologische Erkundungstour am Julierpass</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Mit Bivio als Ausgangspunkt führt uns Dr. Andreas Stucki auf geologische Erkundungstour und
                  Mineraliensuche. Im Gebiet beim Julierpass begegnet uns eine grosse geologische Vielfalt:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Gut erhaltene Basalte vom Boden des ehemaligen Jura-Ozeans",
                    "Pillow-Strukturen, entstanden als Meerwasser auf flüssige Lava traf",
                    "Diallag-Gabbro von Marmorera",
                    "Weinroter Radiolarit, die Schweizer Version des roten Jaspis",
                    "Julier-Granit und -Diorit, Serpentin",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-citrine" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Nach dem Abendessen wird ein vielseitiger, therapeutischer Workshop mit Bruno Vogler Pfeiffer, Manuel
                  Litschi und Daniel Lüscher angeboten. Wir arbeiten gemeinsam analytisch und intuitiv mit den
                  gefundenen Mineralien. Übernachtung im Hotel Post in Bivio.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Tag 3 & 4 */}
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <Calendar className="h-3.5 w-3.5" /> Tag 3 & 4
                </div>
                <h2 className="font-heading text-2xl font-bold text-amethyst">Nationalparkzentrum & Margunet</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Geologische Erkundungstour auf dem Julier. Danach Weiterreise nach Zernez und Besuch des
                  Nationalparkzentrums mit fachkundiger Führung durch Andrea Millhäusler, Geografin und Ausbildnerin
                  Geologie / Landschaftsformen der Region. Fahrt ins Hotel Bär & Post.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Tagesexkursion über Margunet im Schweizer Nationalpark. Andrea Millhäusler gibt dabei lehrreiche
                  Einblicke in die Geologie sowie Flora und Fauna der Region. Reine Marschzeit 3 Stunden.
                </p>
              </div>
              <div className="grid gap-4">
                <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Glarnerland3.png" alt="Nationalparkzentrum Zernez" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">Nationalparkzentrum Zernez</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Glarnerland4.png" alt="Tagesexkursion über Margunet im Schweizer Nationalpark" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">Tagesexkursion über Margunet im Schweizer Nationalpark</figcaption>
                </figure>
              </div>
            </div>
          </Reveal>

          {/* Übernachtungsmöglichkeiten */}
          <Reveal>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h2 className="font-heading text-xl font-bold text-amethyst">Unsere Übernachtungsmöglichkeiten</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Hotel_Zernez.png" alt="Hotel Post in Zernez" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs font-semibold text-amethyst">Hotel Post in Zernez</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/Hotel_Bivio.png" alt="Hotel Post in Bivio" width={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs font-semibold text-amethyst">Hotel Post in Bivio</figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <Link to="/geologische-reisen" className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep">
            <ArrowLeft className="h-4 w-4" /> Zurück zu Exkursionen &amp; Alpenseminar
          </Link>
        </div>
      </section>
    </>
  );
}