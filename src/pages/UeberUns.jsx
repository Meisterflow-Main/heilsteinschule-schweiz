import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, BookOpen, Mountain, Heart, Brain, Hand, Footprints } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const INTERVIEW = [
  {
    q: "Wie entstand die Idee, die Heilsteinschule Schweiz zu gründen?",
    a: "2007 gründete ich meine erste Firma, WoherWohin. Es war eine Beratungspraxis mit verschiedenen spirituellen Heilbehandlungen unter Einbezug von Heilsteinen. So entstand die Praxis für Steinheilkunde. Mit zunehmender Seminartätigkeit und weil die Menschen sich immer mehr dafür interessierten, wuchs in mir das Bedürfnis, mehr Frontunterricht anzubieten. So beschloss ich, die Heilsteinschule Schweiz zu gründen.",
  },
  {
    q: "Was sind die zentralen Werte und Prinzipien der Heilsteinschule Schweiz?",
    a: "In unserer Schule soll mit Kopf, Herz, Hand und Fuss gelehrt und gelernt werden. So schreiben wir das auch auf der Homepage ganz am Anfang. Die Schüler sollen Gelerntes erfahren und erspüren, nur Erlerntes bleibt nicht lange. So wird sich das Wissen durch die Schüler verbreiten. In dieser Ausbildung werden Heilsteine zu Lebensbegleitern und die Schüler werden feststellen, dass diese Ausbildung sie verändern wird.",
  },
  {
    q: "Wie vermittelt die Schule ihren Schülern das Wissen über die Heilsteine?",
    a: "«Gelerntes erfahren» lautet unser Motto. Alles, was du mit den Mineralien an deinem Körper selber erfahren hast, das brauchst du nicht mehr zu erlernen. Es ist in dir, als eigene Erfahrung überzeugend eingefahren, sprich eingeprägt. Nicht wir lehren dich. Der Stein lehrt dich!",
  },
  {
    q: "Welche Methoden erlernen die Schüler, um Heilsteine bei Klienten einzusetzen?",
    a: "In der Heilsteinschule lernen die Schüler über Kristallstrukturen und ihre Verbindung zu individuellen Lebensstilen. Sie lernen, Heilsteine auf verschiedene Weisen einzusetzen, wie beispielsweise auf den Körper auflegen, in Wasser einlegen und für Meditation verwenden. Zudem vermitteln wir ihnen Geologische Reise über 4 Tage auf den Azoren. Respekt vor den Steinen und ihrer jahrtausendalten Geschichte. Diese Kenntnisse helfen ihnen, sich und anderen in Lebenssituationen wie Stress und Druck besser zu unterstützen.",
    img: "https://heilsteinschule.swiss/media/Reise/Geologische_Reise_Azoren.png",
    imgAlt: "Geologische Reise auf den Azoren",
  },
  {
    q: "Warum ist es wichtig, die Wirkungen der Heilsteine am eigenen Körper zu erfahren?",
    a: "Immer ist das, was dir selber «widerfahren» ist, unauslöschlich in dir gespeichert. Du erkennst umgehend, «gut oder unnötig».",
  },
  {
    q: "Wie können die Schüler das erlernte Wissen nach Abschluss der Ausbildung anwenden?",
    a: "Ich sage immer, die Schule machst du in erster Linie für dich. Wenn du durch die Heilsteine, deine Lebensmitte, deine Gesundheit usw. gefunden hast, dann bist du bereit, dein Wissen, deine erfolgreichen Erfahrungen Dritten helfend zukommen zu lassen. Der Spruch «nur wer heil ist, darf heilen» gewinnt hier in seiner Bedeutung.",
  },
  {
    q: "Was ist das Besondere an der analytischen Steinheilkunde, die an der Heilsteinschule Schweiz gelehrt wird?",
    a: "Das Besondere bei uns ist das analytische, wissenschaftliche Grundwissen, das wir vermitteln. Über 90 % des Wissens, welches im Internet über Steine zu finden ist, entzieht sich der analytischen Steinheilkunde. Entstehung, Chemismus, Kristallstruktur, die Farbe wie auch die Form bestimmen verlässlich, was ein Stein zu leisten vermag. Michael Gienger hat daran 30 Jahre geforscht und es in über 20 Büchern niedergeschrieben. Vor 12 Jahren kaufte ich von ihm die Lizenz, dieses Wissen der Steinheilkunde unverfälscht lehren zu dürfen.",
  },
  {
    q: "Wie können Heilsteine als Lebensbegleiter dienen?",
    a: "Präventiv sind Steine sehr verlässliche Begleiter, wenn man ihnen vertraut. Dasselbe gilt, wenn eine Situation akut ist, sprich in der Form einer Krankheit sich bemerkbar macht. Hier können wir hilfreich sein. Aber der Mensch muss wollen. Die Schüler erkennen, dass ein Stein auch in seelischer oder psychischer Hinsicht ein Unterstützer sein kann, indem er tägliche Schritte auf dem individuellen Lebensweg begleitet. Er kann die Stimmung erhellen und aber auch Mut geben, Unangenehmes anzugehen und anzuschauen. Er hilft, Spannungen zu lösen und Blockaden aufzulösen.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1cb2b69f3_ChatGPTImageSep30202602_08_20AM.png",
    imgAlt: "Trockener Steg, Zermatt, 3000 m ü. M., 3-tägige Georeise 2022",
  },
  {
    q: "Warum ist es wichtig, die Wirkungen der Heilsteine am eigenen Körper zu erfahren?",
    a: "Immer ist das, was dir selber «widerfahren» ist, unauslöschlich in dir gespeichert. Du erkennst umgehend, «gut oder unnötig».",
  },
  {
    q: "Wie können die Schüler das erlernte Wissen nach Abschluss der Ausbildung anwenden?",
    a: "Ich sage immer, die Schule machst du in erster Linie für dich. Wenn du durch die Heilsteine, deine Lebensmitte, deine Gesundheit usw. gefunden hast, dann bist du bereit, dein Wissen, deine erfolgreichen Erfahrungen Dritten helfend zukommen zu lassen. Der Spruch «nur wer heil ist, darf heilen» gewinnt hier in seiner Bedeutung.",
  },
  {
    q: "Was ist das Besondere an der analytischen Steinheilkunde, die an der Heilsteinschule Schweiz gelehrt wird?",
    a: "Das Besondere bei uns ist das analytische, wissenschaftliche Grundwissen, das wir vermitteln. Über 90 % des Wissens, welches im Internet über Steine zu finden ist, entzieht sich der analytischen Steinheilkunde. Entstehung, Chemismus, Kristallstruktur, die Farbe wie auch die Form bestimmen verlässlich, was ein Stein zu leisten vermag. Michael Gienger hat daran 30 Jahre geforscht und es in über 20 Büchern niedergeschrieben. Vor 12 Jahren kaufte ich von ihm die Lizenz, dieses Wissen der Steinheilkunde unverfälscht lehren zu dürfen.",
  },
  {
    q: "Wie können Heilsteine als Lebensbegleiter dienen?",
    a: "Präventiv sind Steine sehr verlässliche Begleiter, wenn man ihnen vertraut. Dasselbe gilt, wenn eine Situation akut ist, sprich in der Form einer Krankheit sich bemerkbar macht. Hier können wir hilfreich sein. Aber der Mensch muss wollen. Die Schüler erkennen, dass ein Stein auch in seelischer oder psychischer Hinsicht ein Unterstützer sein kann, indem er tägliche Schritte auf dem individuellen Lebensweg begleitet. Er kann die Stimmung erhellen und aber auch Mut geben, Unangenehmes anzugehen und anzuschauen. Er hilft, Spannungen zu lösen und Blockaden aufzulösen.",
  },
  {
    q: "Wie können Heilsteine dazu beitragen, dass Menschen in Kontakt mit ihrer inneren Berufung kommen?",
    a: "Hier verweise ich auf die Kristallstrukturen, siehe oben. Sie zeigen dir deinen Lebensstil auf, deine Berufung. Hier in der Schule lehren wir die Schüler, die eigene Struktur zu erkennen und bei Klienten sie ebenfalls zu finden. Und dann gibt es verschiedene Steine, die dem Menschen helfen, Erkenntnisse zu erlangen, wenn er bereit ist, sich seinen Lebensthemen zu stellen.",
  },
  {
    q: "Wie hat sich die Arbeit mit Heilsteinen in den letzten Jahren verändert?",
    a: "Wir passen den Lehrplan basierend auf den Bedürfnissen unserer Schüler an und korrigieren so weit verbreitete Fehlinformationen über Steine im Internet durch fundiertes Wissen.",
  },
  {
    q: "Was sind die wichtigsten Schwerpunkte Ihrer Arbeit als Naturheiler und Heilstein-Therapeut?",
    a: "Mein Hauptziel ist das Wachstum der Schule und die Entwicklung eines qualifizierten Teams. Wir legen Wert auf analytisches Lernen, unterstützt durch medizinisches Verständnis. Dabei steht immer im Vordergrund: Heilung kommt von innen, wir und die Steine können nur dabei helfen.",
  },
];

const ARTICLE_IMG = "https://heilsteinschule.swiss/media/.news_img/nfz.webp";

const TEAM = [
  { name: "Bruno Vogler Pfeiffer", role: "Schul-Gründer und Schulleiter", img: "https://heilsteinschule.swiss/media/topics-pictures/bruno_vogler_pfeiffer.png" },
  { name: "Ruth Rios", role: "Hauptdozentin der Heilsteinschule", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/460e2670f_ChatGPTImageSep21202602_29_12PM.png" },
  { name: "Pascal Bossard", role: "Kreativ verantwortlich, Leiter Alpenseminar", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/057e4eb82_ChatGPTImageSep21202602_32_05PM.png" },
  { name: "Sarah Ziegenhagen", role: "Dozentin Uster ZH", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/744f004b6_ChatGPTImageSep21202602_35_44PM.png" },
  { name: "Joe Schnarwiler", role: "Dozent", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/8ed080c78_ChatGPTImageSep21202602_36_58PM.png" },
  { name: "Maja Pfeiffer", role: "StV Schulleitung und Leitung Heilsteinshop-Asp", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/d3b26ef85_ChatGPTImageSep21202602_40_48PM.png" },
  { name: "Judith von Rotz", role: "Buchhaltung und Rechnungswesen", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1a6cef69a_ChatGPTImageSep21202602_42_52PM.png" },
  { name: "René Schmid", role: "IT Support — gesamte IT-Infrastruktur", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/16619e80b_ChatGPTImageSep21202602_43_39PM.png" },
];

const PRINCIPLES = [
  { icon: Brain, label: "Kopf", text: "Analytisches Wissen, welches erklärt, warum und wie die Heilsteine wirken." },
  { icon: Hand, label: "Hand", text: "Die Kraft der Steine erleben und spüren, Methoden für Körper und Psyche erlernen." },
  { icon: Footprints, label: "Fuss", text: "Die Steine unterwegs in den Alpen erfahren und die Mineralien unmittelbar erleben." },
  { icon: Heart, label: "Herz", text: "Neugierde und Faszination als Startkapital — Liebe und Leidenschaft entstehen." },
];

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="https://heilsteinschule.swiss/media/.news_img/bruno-2016-grosse-scheidegg1.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              Über uns
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Mit Herz, Hand, Kopf und Fuss zum <span className="text-gradient-gold">Steinheilpraktiker</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Wie Heilsteine zum Lebensbegleiter werden — ein Interview mit dem Gründer der
              Heilsteinschule Schweiz. Erfahren Sie mehr über die zentralen Werte und Prinzipien der Schule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leitbild Prinzipien */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Unser Leitbild"
            title="Lehren und lernen mit Kopf, Hand, Fuss und Herz"
            subtitle="Die Schüler sollen Gelerntes erfahren und erspüren — nur Erlerntes bleibt nicht lange."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-citrine/15 text-citrine-deep">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">{p.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bruno Portrait */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-lift">
                  <img
                    src="https://heilsteinschule.swiss/media/wunderblock/Bruno.jpg"
                    alt="Bruno Vogler Pfeiffer"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 max-w-[16rem] rounded-2xl glass p-5 shadow-lift sm:-right-8">
                  <p className="font-heading text-lg font-semibold italic text-amethyst">
                    „Steine sind mein Leben, meine Berufung und meine Erfüllung.“
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— Bruno Vogler Pfeiffer</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading center={false} eyebrow="Der Gründer" title="Bruno Vogler Pfeiffer" />
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Es ist mein innigster Wunsch, mit der Heilsteinschule die Steinheilkunde den Menschen näher
                zu bringen. Die Zeit der Ausbildung ist ein Weg, den wir mit den Schülern gemeinsam gehen,
                sie erlernen analytisches Wissen über die Steine, und sie erfahren und erleben die
                vielfältigen Wirkungen der Heilsteine.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Als Heilsteinberater können sie dieses Wissen anwenden und auch weiter geben. Die
                Steinheilkunde ist unsere Leidenschaft und unsere Freude, dies geben wir während den
                Schultagen gerne an die Schüler weiter. Persönliche Beziehungen sind uns wichtig.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Seit 2008 beschäftige ich mich professionell mit Heilsteinen. Meine Ausbildung in
                analytischer Steinheilkunde durchlief ich in Deutschland bei Michael Gienger, Werner Kühni
                und Walter von Holst. Die Heilsteinschule Schweiz habe ich im Jahr 2011 gegründet. Sie ist
                zertifiziert vom SVNH, unser dazugehöriger Heilsteinshop-Asp ist GKS zertifiziert.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Wir arbeiten mit Heilsteinen / Edelsteinen nach der analytischen Steinheilkunde von{" "}
                <Link to="/michael-gienger" className="font-semibold text-citrine-deep underline underline-offset-4">
                  Michael Gienger
                </Link>
                , Werner Kühni und Walter von Holst.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Unser Team"
            title="Menschen mit Herz für Heilsteine"
            subtitle="Dozentinnen und Dozenten, die ihre Leidenschaft für die Steinheilkunde weitergeben."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading text-base font-semibold text-amethyst">{m.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Interview Q&A */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Interview"
            title="Die Heilsteinschule Schweiz stellt sich vor"
            subtitle="Ein Gespräch mit Bruno Vogler Pfeiffer über die Schule, ihre Werte und die Arbeit mit Heilsteinen."
          />
        </Reveal>
        <div className="mt-12 space-y-6">
          {INTERVIEW.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amethyst text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-base font-semibold text-amethyst">{item.q}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    {item.img && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-border">
                        <img src={item.img} alt={item.imgAlt || ""} loading="lazy" className="w-full object-cover" />
                        {item.imgAlt && <p className="px-3 py-2 text-xs text-muted-foreground">{item.imgAlt}</p>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Steinheiler Artikel */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src="https://heilsteinschule.swiss/media/Steinmandli.png"
                    alt="S'Steinmanndli von Asp"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-medium text-citrine-deep">
                    <Quote className="h-3.5 w-3.5" /> Zeitungsbericht
                  </div>
                  <img src={ARTICLE_IMG} alt="Neue Fricktaler Zeitung" className="mb-4 max-h-32 w-auto rounded-lg shadow-soft" />
                  <h3 className="font-heading text-xl font-semibold text-amethyst">Bruno Vogler ist Steinheiler</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Artikel in der Neuen Fricktaler Zeitung vom 19.1.2017 von Hildegard Siebold.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    S'Steinmanndli von Asp — Bruno Vogler Pfeiffer in der Werkstatt mit vielen gefundenen
                    Heilsteinen.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Vertrauen Sie auf die <span className="text-gradient-gold">Kräfte der Natur</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
              Begleiten Sie uns auf unserer Reise und lassen Sie sich von der Steinheilkunde begeistern.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/ausbildung"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
              >
                Ausbildung entdecken <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}