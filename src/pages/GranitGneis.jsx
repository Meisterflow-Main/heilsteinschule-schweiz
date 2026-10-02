import React from "react";
import { Mountain } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

export default function GranitGneis() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <OptimizedImage
            src="https://heilsteinschule.swiss/media/Granit.png"
            alt=""
            width={1600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Mountain className="h-3.5 w-3.5" /> Berichte
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Granit &amp; Gneis</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Unterschiede und Gemeinsamkeiten von Granit und Gneis.
            </p>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            center={false}
            eyebrow="Gesteinskunde"
            title="Unterschiede von Granit und Gneis"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
            <OptimizedImage
              src="https://heilsteinschule.swiss/media/Granit.png"
              alt="Bild 1: links Granit, rechts Gneis"
              width={900}
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-2 text-xs text-muted-foreground">Bild 1: links: Granit, rechts: Gneis</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-amethyst">Entstehung</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-amethyst">Granit</strong> ist Gestein magmatischen Ursprungs,
                das als Tiefengestein (auch Plutonit genannt) aus flüssigen Gesteinsschmelzen hervorgeht,
                die unter der Erdoberfläche zu Gestein erstarren und gelangt durch Abtragung einst
                darüber liegender Gesteine an die Oberfläche.
              </p>
              <p>
                <strong className="text-amethyst">Gneis</strong> hingegen ist ein metamorphes Gestein,
                das aus der Umwandlung unter hohen Temperatur- und Druckverhältnissen bspw. im Zuge der
                Gebirgsbildung oder weiterer tektonischer Prozesse aus anderen Gesteinen –
                Sedimentgesteine, aber auch Magmatite wie Granit – hervorgeht.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
            <OptimizedImage
              src="https://heilsteinschule.swiss/media/Gneis.png"
              alt="Gneis Gefüge"
              width={900}
              className="w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-amethyst">Gefüge</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Die Ausrichtung der Haupt- und Nebengemengteile ist beim <strong className="text-amethyst">Granit</strong> richtungslos.
                Das bedeutet, dass die aufbauenden Minerale wahllos in der Grundmasse liegen.
              </p>
              <p>
                Im Gegensatz dazu ist bei <strong className="text-amethyst">Gneis</strong> eine Einregelung der
                aufbauenden Minerale zu erkennen, bei der sich helle und dunkle Lagen aus verschiedenen
                Mineralen streifenartig abwechseln. Die hellen Lagen im Gneis werden durch Quarz und
                Feldspat bestimmt, Biotit prägt die dunklen Lagen. Dabei kann das Parallelgefüge von Gneis
                sowohl linienhaft (linear) als auch flächenhaft-schiefrig (planar) sein. Im Vergleich mit
                „richtigem“ Schiefer ist die Schieferung im Gneis jedoch nicht derart ausgeprägt, dass eine
                einfache und perfekte Trennung an den Schieferungsflächen möglich ist.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
            <OptimizedImage
              src="https://heilsteinschule.swiss/media/Gneis1.png"
              alt="Bild 2: Granit, Bild 3: Gneis"
              width={900}
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-2 text-xs text-muted-foreground">Bild 2: Granit · Bild 3: Gneis</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-amethyst">
              Gemeinsamkeiten von Granit und Gneis
            </h2>
          </section>
        </Reveal>

        {[
          {
            t: "Farbe",
            body: (
              <>
                <p>
                  Granit ist ein kieselsäurereiches Gestein, reich an hellen Mineralen. Aufgrund dessen
                  wird Granit zu den Gesteinen mit <strong className="text-amethyst">heller Farbe</strong> gezählt.
                  Das Farbspektrum von Granit ist gross: weiss, rosa bis grau. Der Grund dafür sind die im
                  Granit vorhandenen Minerale der Feldspatgruppe, die in verschiedenen hellen Farben auftreten.
                  Dagegen ist Granit niemals schwarz, wie dem Verbraucher häufig anhand von Schwarzem Granit
                  versichert wird. Ebenso variabel ist die Grundfarbe von Gneis: rosa, gräulich, bräunlich
                  oder schwarz-weiss.
                </p>
              </>
            ),
          },
          {
            t: "Gefüge",
            body: (
              <p>
                Granit und Gneis sind kristalline Gesteine, so dass die einzelnen Haupt- und
                Nebengemengteile mit dem Auge zu erkennen sind. Ein weiteres Merkmal ist der kompakte
                Charakter beider Gesteine, weswegen Hohlräume weder im Granit noch im Gneis vorhanden sind.
                Gemeinsam ist auch die mittel- bis grobkörnige Korngrösse von Gneis und Granit.
              </p>
            ),
          },
          {
            t: "Fossilien",
            body: (
              <p>
                Versteinerte Reste wie Donnerkeile, Muscheln, Schnecken, Abdrücke von tierischen Skeletten
                oder Pflanzen sind sowohl in Granit als auch Gneis nicht vorhanden.
              </p>
            ),
          },
          {
            t: "Haupt- und Nebengemengteile",
            body: (
              <>
                <p>
                  Granit und Gneis sind <strong className="text-amethyst">polymineralische Gesteine</strong>:
                  Gesteine, die aus mehreren und verschiedenen Mineralen zusammengesetzt sind. Feldspat,
                  Quarz und Glimmer, die drei vergess’ ich nimmer – einprägsame Beschreibung der
                  Zusammensetzung von Granit. Der Quarzanteil im Granit variiert zwischen 20 und 60 %.
                  Feldspäte, unterteilt in Alkalifeldspäte und Plagioklase machen bis zu 90 % bzw. bis zu
                  zehn Prozent aus. Glimmer tritt im Granit in Form von schimmerndem Biotit oder Muskovit
                  auf. Die Nebengemengteile, also Minerale, die bis zu fünf Prozent an der Zusammensetzung
                  beteiligt sind, werden durch Hornblende, Andalusit, Sillimanit und Cordierit bestimmt.
                  In noch geringeren Anteilen, sogenannte Akzessorien, können Zirkon, Apatit, Titanit,
                  Monazit, Ilmenit, Topas, Turmalin, Pyrit und Magnetit erscheinen.
                </p>
                <p className="mt-4">
                  Ähnlich ist die Zusammensetzung von Gneis: Feldspäte, Quarze und Glimmerminerale. Allerdings
                  sind Dunkelglimmer wie Biotit weit häufiger existent als Hellglimmer wie Muskovit. Die
                  Begründung dafür ist der Metamorphosegrad von Gneis. Je intensiver die Druckverhältnisse
                  und je höher die Temperaturen bei der Bildung von Gneis waren, desto unwahrscheinlicher
                  ist das Vorhandensein von Muskovit im Gneis.
                </p>
                <p className="mt-4">
                  Nebengemengteile von Gneis sind Hornblende, Granat, Cordierit, Andalusit, Disthen, Diopsid,
                  Augit und Sillimanit. Als Akzessorien treten Pyrit, Apatit, Turmalin, Magnetit, Ilmenit,
                  Zirkon, Monazit, Titanit und Pyrrhotin auf.
                </p>
              </>
            ),
          },
        ].map((sec, i) => (
          <Reveal key={sec.t} delay={0.05 + i * 0.04}>
            <section className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-amethyst">{sec.t}</h3>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-muted-foreground">
                {sec.body}
              </div>
            </section>
          </Reveal>
        ))}
      </article>
    </>
  );
}