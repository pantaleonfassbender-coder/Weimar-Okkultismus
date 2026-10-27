/* Aber es geschah — Ein Protokollant bei den Séancen der Weimarer Republik, 1922–1933.
   Die Rolle ist erfunden; Personen, Orte, Daten und alle Zitate sind historisch.
   Zitate nur aus gemeinfreien Quellen, jedes am Seitenbild gelesen (Quellensichtung 1, Teile A–C, 27.10.2026).
   Stellen, die in den USA noch geschützt sein können (Price 1933, Presse 1933), sind nacherzählt, nicht zitiert.
   Die Werte der Entscheidungen sind Spielwerte, keine Befunde. */
(function () {
  "use strict";
  const MANN = s => ({ cite: `Thomas Mann, Okkulte Erlebnisse, in: Die Neue Rundschau 35 (1924), Bd. 1, S. ${s}`, url: `https://archive.org/details/die-neue-rundschau-35.-jg.-der-freien-buhne-35.1924-1/page/${s}/mode/1up` });
  const ZB = s => ({ cite: `Thomas Mann, Der Zauberberg, Kapitel „Fragwürdigstes“ (Berlin: S. Fischer 1930), S. ${s}`, url: `https://archive.org/details/derzauberberg0000roma/page/${s}/mode/1up` });
  const FR = (band, scan, cite) => ({ cite, url: `https://dl.ub.uni-freiburg.de/diglit/${band}/${scan}` });
  const IA = (id, n, cite) => ({ cite, url: `https://archive.org/details/${id}/page/n${n}/mode/1up` });
  const ZEFYS = (id, cite) => ({ cite, url: `https://resolver.staatsbibliothek-berlin.de/${id}` });
  const URTEIL = (s, scan) => FR("psychische_studien1925", scan, `Urteil des Schöffengerichts Berlin-Schöneberg vom 11. Juli 1925 in der Sache Rudloff gegen Moll, abgedruckt in: Psychische Studien 52 (1925), 9. Heft, S. ${s}`);

  window.SPIEL = {
    titel: "Aber es geschah",
    untertitel: "Ein Protokollant bei den Séancen der Weimarer Republik, 1922–1933",
    intro: "München, Weihnachten 1921. Sie sind Assistenzarzt, 29 Jahre alt, und haben eine ruhige Hand und eine leserliche Schrift. Der Nervenarzt Albert Freiherr von Schrenck-Notzing sucht jemanden, der bei seinen Sitzungen mitschreibt. Im Dunkeln, bei rotem Licht, sitzt ein junges Medium aus Braunau am Inn, und Professoren, Schriftsteller und Ärzte halten seine Hände. Was im Protokoll steht, wird gedruckt, zitiert, vor Gericht verlesen. Sie treffen zwölf Entscheidungen bis 1933. Nach jeder sehen Sie, was damals geschah, in den Worten der Quellen.",
    introRef: "Die Rolle des Protokollanten ist erfunden. Alle anderen Personen, die Orte, Daten und Zitate sind historisch. Die Zitate stammen aus gemeinfreien Quellen und sind am Seitenbild gelesen; die Links führen dorthin.",
    endBild: { src: "img/willy-1919-gesicht.jpg", cap: "„Primitives Gesicht mit Löchern, Rissen und Falten“, so die Bildunterschrift von 1920 (aus dem Englischen). Willy Schneider, 1919, aufgenommen von einem ungenannten Mitarbeiter Schrenck-Notzings. Aus: Phenomena of Materialisation (London 1920). Internet Archive, gemeinfrei.", url: "https://archive.org/details/phenomenaofmater00schr/page/n521/mode/1up" },
    startBild: { src: "img/schrenck-notzing.jpg", cap: "Albert Freiherr von Schrenck-Notzing (1862–1929), Nervenarzt in München. Bild aus einem Wiener Nachruf, Neue Illustrierte Zeitung, 25. Februar 1929. Wikimedia Commons, gemeinfrei.", url: "https://commons.wikimedia.org/wiki/File:Albert_von_Schrenck-Notzing_-_Foto.jpg" },
    werte: [
      { id: "sorg", name: "Sorgfalt", hint: "Halten Ihre Protokolle einer Prüfung stand?" },
      { id: "zug", name: "Zugang", hint: "Lädt man Sie noch ein?" },
      { id: "ruf", name: "Ansehen", hint: "Nehmen Fachwelt und Presse Sie ernst?" }
    ],
    stationen: [
      {
        jahr: "27. Januar 1922", ort: "München", titel: "Ton am Finger",
        bild: { src: "img/willy-1919-tafel.jpg", cap: "Willy Schneider, sechzehn Jahre alt, in einer Sitzung bei Schrenck-Notzing im Oktober 1919; auf Schulter und Kopf, was das Protokoll „teleplastische Substanz“ nennt. Aufnahmen Schrenck-Notzings, aus: Phenomena of Materialisation (London 1920). Internet Archive, gemeinfrei.", url: "https://archive.org/details/phenomenaofmater00schr/page/n520/mode/1up" },
        lage: "Das Medium ist Willy Schneider aus Braunau, 19 Jahre alt, Lehrling bei einem Zahntechniker. Auf dem Tischchen steht ein Block nasser Tonerde, der einen Abdruck aufnehmen soll. Nach der Sitzung zeigt der vorher glatte Ton sechs flache Eindrücke. Und im Nagelbett von Willys linkem kleinem Finger findet sich Tonerde, auch auf dem Rücken des vierten Fingers. Sie haben den Block vor sich.",
        optionen: [
          { text: "Die Spuren genau aufschreiben, ohne Deutung, und verlangen, dass Willys Hände künftig vor jeder Sitzung untersucht werden.", d: { sorg: 1, zug: -1, ruf: 1 }, folge: "Ein Satz, der dem Hausherrn nicht gefällt, und eine Regel, die künftig jede Sitzung schützt.", eintrag: "Nach Schluss Tonerde im Nagelbett des linken kleinen Fingers und auf dem Rücken des vierten Fingers. Hände vor Beginn nicht untersucht. Künftig Untersuchung vor jeder Sitzung." },
          { text: "Die Spuren aufschreiben und gleich die Erklärung dazusetzen: Willy hat den ganzen Tag im zahntechnischen Labor mit Ton gearbeitet.", d: { sorg: -1, zug: 1, ruf: 0 }, folge: "Der Befund steht im Protokoll, die Deutung gleich daneben. Wer es liest, liest beides zusammen.", eintrag: "Tonspuren an der linken Hand, wohl von der Arbeit im zahntechnischen Laboratorium.", wer: "So steht es bei Schrenck-Notzing" },
          { text: "Die Spuren weglassen: Die Kontrolle hat gehalten, der Rest ist Nebensache.", d: { sorg: -2, zug: 1, ruf: -1 }, folge: "Ein sauberes Protokoll, bis jemand die Spuren in einem anderen Bericht findet.", eintrag: "Kontrolle einwandfrei. Sechs Eindrücke in der Tonerde." }
        ],
        hist: 1,
        zitate: [
          Object.assign({ t: "Die Tonspuren fanden sich nach der Sitzung im Nagelbett des kleinen Fingers der linken Hand und auf dem Rücken des 4. Fingers in der Mitte. Willy hatte den ganzen Tag im zahntechnischen Laboratorium bei seinen Modellierarbeiten mit Tonerde und ähnlichen Stoffen hantiert, so daß diese Spuren mit Wahrscheinlichkeit von dieser Beschäftigung herrühren." }, FR("psychische_studien1925", "0314", "A. von Schrenck-Notzing, Der Okkultismus im Lichte gegnerischer Kritik, in: Psychische Studien 52 (1925), 6. Heft, S. 308 f.")),
          Object.assign({ t: "Wenn nicht alle Berichte zum Abdruck gelangten, so vergißt der Herr Landgerichtsdirektor wohl, daß dazu auch die Erlaubnis der betreffenden Teilnehmer gehört, die nicht in allen Fällen erteilt wurde." }, FR("psychische_studien1925", "0315", "Ebd., S. 309")),
          Object.assign({ t: "Ich frage Natur und Geist, ich frage die Vernunft, die thronende Logik: Wie, wann und wo war die Tonerde an Willis Finger gekommen? —" }, MANN(223))
        ],
        hinweis: "Die Sitzung erschien 1923 in der zweiten Auflage von Schrenck-Notzings „Materialisationsphänomene“. 1924 warf ihm der Jurist Albert Hellwig vor, er habe die Spuren verschwiegen; die Antwort von 1925 steht oben. Thomas Mann erzählte die Sitzung in seinem Vortrag nach, als Rätsel, obwohl er nicht dabei gewesen war.",
        frage: "Was gehört in ein Protokoll: nur der Befund oder auch die Erklärung, die Ihnen gerade einfällt?"
      },
      {
        jahr: "Dezember 1922", ort: "München", titel: "Der Gast als Kontrolleur",
        bild: { src: "img/sitzungszimmer-plan.jpg", cap: "Sitzordnung bei Schrenck-Notzing: 11 Platz des Mediums, 9 und 10 die Kontrolleure, 1 der Versuchsleiter; a, b, c Kameras, L Stehlampe, dazu Blitzlicht und Kabinett. Aus einer Besprechung in: Psychische Studien 50 (1923), 1. Heft, S. 8. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-psychische_studien_v50_1923/page/n7/mode/1up" },
        lage: "Kurz vor Weihnachten bringt ein Karikaturist den Schriftsteller Thomas Mann zu einer Sitzung, 47 Jahre alt, seit Jahren über einem Roman, der in einem Lungensanatorium spielt. Willy wird vor den Gästen umgekleidet: Trikot, ein Schlafrock mit Leuchtbändern, ein Blick in die Mundhöhle. Dann will der Hausherr dem Schriftsteller die Kontrolle übertragen. Mann hat noch nie eine Sitzung erlebt. Sie sitzen mit dem Block am Tisch.",
        optionen: [
          { text: "Einverstanden sein und genau aufschreiben, wer welche Glieder hält.", d: { sorg: 0, zug: 1, ruf: 1 }, folge: "Ein berühmter Zeuge und ein Protokoll, das jede Hand benennt.", eintrag: "Kontrolle: Th. Mann hält beide Hände und nimmt die Knie zwischen die seinen, Frau P. die Handgelenke. Leuchtnadeln an Schlafrock und Ärmeln.", wer: "So geschah es" },
          { text: "Widersprechen: Ein Neuling kontrolliert zu nachsichtig, die Kontrolle gehört einem Erfahrenen.", d: { sorg: 1, zug: -1, ruf: 0 }, folge: "Sie haben recht, und der Hausherr merkt sich, wer ihm vor Gästen widerspricht.", eintrag: "Einspruch gegen die Kontrolle durch einen ungeübten Gast. Nicht stattgegeben." },
          { text: "Einverstanden sein, aber vorher mehr Licht verlangen.", d: { sorg: 1, zug: -1, ruf: -1 }, folge: "Mehr Licht bekommt niemand. Ihr Antrag steht im Protokoll.", eintrag: "Antrag auf helleres Rotlicht. Abgelehnt." }
        ],
        hist: 0,
        zitate: [
          Object.assign({ t: "Aber da übertrug der Versuchsleiter mir ungebeten die Kontrolle des Mediums, mir und der Hauswirtin Willis, Frau P., und begann sogleich, mich in der praktischen Ausübung zu unterweisen. […] Dem jungen Mann gegenüber, hatte ich meinen Stuhl nahe an den seinen heranzurücken, hatte seine beiden Kniee zwischen die meinen zu nehmen und seine Hände zu fassen, während seine Handgelenke von der Assistentin gehalten wurden." }, MANN(204)),
          Object.assign({ t: "„Die Nadeln, Herr Baron!“ sagte er. Das war noch eine Vorsichts- und Kontrollmaßregel, an die der Ehrenmann da erinnerte. Der Baron steckte große Nadeln in den Sammetschlafrock, in die Ärmel und in die Schöße: Nadeln mit dicken, weißlichen, selbstleuchtenden Köpfen, […]" }, MANN(205)),
          Object.assign({ t: "„Ich kämpfe um jeden Strahl!“ sagte er; „aber dies ist alles, was ich bis jetzt erreichen konnte.“" }, MANN(205))
        ],
        hinweis: "„Er“ ist im zweiten Zitat Willy selbst: Das Medium erinnert an die Leuchtnadeln. Im dritten spricht Schrenck-Notzing über das Licht. Unter den Gästen waren der Zoologe Karl Gruber und der Schauspieler Emanuel Reicher; den Karikaturisten nennt Mann nicht.",
        frage: "Wem würden Sie die entscheidende Kontrolle anvertrauen: dem Erfahrenen oder dem Berühmten?"
      },
      {
        jahr: "Dezember 1922, später am Abend", ort: "München", titel: "Fünfzehn Schläge",
        bild: { src: "img/thomas-mann-1924.jpg", cap: "Thomas Mann im November 1924, Lithographie von Emil Stumpp (gest. 1941), in den Wochen, als „Der Zauberberg“ erschien. Wikimedia Commons, gemeinfrei.", url: "https://commons.wikimedia.org/wiki/File:Thomas_Mann_by_Emil_Stumpp,_1924.jpg" },
        lage: "Nach drei Vierteln einer Stunde ist nichts geschehen. Willy klopft fünfzehnmal mit dem Fuß: fünfzehn Minuten Pause. Mann glaubt, das Medium wolle einen anderen Kontrolleur, und bietet an, seinen Platz zu räumen. Der Hausherr lehnt ab. Nach der Pause steigt im roten Licht ein Taschentuch auf, eine Glocke läutet, die Schreibmaschine klappert. Am Ende will Mann wissen, was er bezeugen kann. Und Sie?",
        optionen: [
          { text: "Auf einem Wechsel der Kontrolle bestehen und ihn mit Uhrzeit ins Protokoll schreiben.", d: { sorg: 1, zug: -1, ruf: 0 }, folge: "Die Kontrolle wechselt nicht, aber Ihr Einspruch steht mit der Minute im Protokoll.", eintrag: "Pause von 15 Minuten auf Verlangen des Mediums. Wechsel der Kontrolle beantragt, nicht durchgeführt." },
          { text: "Dem Hausherrn folgen: Die Kontrolle bleibt, nur die Plätze rücken.", d: { sorg: -1, zug: 1, ruf: 1 }, folge: "Die Phänomene kommen, und ein berühmter Zeuge wird sie bezeugen.", eintrag: "Nach der Pause: Th. Mann an zweiter Stelle, Herr v. K. an den Knien. Taschentuch steigt bei Rotlicht, Glocke, Schreibmaschine.", wer: "So geschah es" },
          { text: "Die Sitzung als ergebnislos abbrechen.", d: { sorg: 1, zug: -2, ruf: 0 }, folge: "Kein Phänomen ohne Ihre Bedingungen, und keine Einladung mehr für die nächste Woche.", eintrag: "Sitzung abgebrochen: Medium verlangt Wechsel der Kontrolle." },
          { text: "Aufstehen und das weiße Licht einschalten.", d: { sorg: 0, zug: -3, ruf: -1 }, folge: "Das hat in München niemand getan. Im Roman schon.", eintrag: "Weißlicht eingeschaltet. Sitzung beendet.", zitat: Object.assign({ t: "Aber Hans Castorp war mit wenigen Schritten bei den Stufen der Eingangstür und schaltete mit knappem Handgriff das Weißlicht ein. Die Brand war in schwerem Chok zusammengefahren. Sie zuckte in den Armen der Kleefeld. Jener Sessel war leer." }, ZB(893)) }
        ],
        hist: 1,
        zitate: [
          Object.assign({ t: "Überzeugt, daß Willi die Pause vor allem in der Absicht erwirkt hatte, daß nachher die Kontrolle gewechselt werden möge, erbot ich mich dringlich zur Aufgabe meines Amtes. Doch wollte der Hausherr davon nichts wissen. Nein, nicht jeder Laune und Empfindlichkeit Minnas dürfe man nachgeben." }, MANN(210)),
          Object.assign({ t: "Das war nicht möglich, — aber es geschah. Der Blitz soll mich treffen, wenn ich lüge. […] Hier hielt ich Willis Handgelenke mit den Trikotärmeln darüber in meinen Händen, und unmittelbar neben mir sah ich seine Knie im Gewahrsam des Polen." }, MANN(213)),
          Object.assign({ t: "Nachdem ich gesehen, halte ich es für meine Pflicht, Zeugnis dafür abzulegen, daß bei den Experimenten, denen ich beiwohnte, jede Möglichkeit mechanischen Betruges, taschenspielerischer Illusionierung nach menschlichem Ermessen ausgeschlossen war." }, MANN(219))
        ],
        hinweis: "„Minna“ nannte man den Geist, der aus Willy sprach. Mann sprach über diese Abende 1923 in Wien, Prag und Berlin und druckte den Vortrag 1924. Im „Zauberberg“, erschienen im November 1924, endet die Séance anders: Hans Castorp schaltet das Licht ein.",
        frage: "Wann ist Abbrechen sorgfältiger als Weitermachen?"
      },
      {
        jahr: "11. April 1923", ort: "Berlin", titel: "Das Hausbuch",
        bild: { src: "img/psychische-studien-1923.jpg", cap: "Die „Psychischen Studien“, seit 1874 das Hausblatt des deutschen Spiritismus, im Januar 1923. Hier wurden Protokolle gedruckt, verteidigt und bestritten. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-psychische_studien_v50_1923/page/n0/mode/1up" },
        lage: "Berlin, eine Dunkelsitzung bei Frau Maria Rudloff, die als Medium „Vollhart“ heißt. Sie sitzen als Gast in der Runde. Die Ärzte Sünner und Bruck halten links und rechts ihre Hände. Nach etwa einer Viertelstunde wird es hell: Beide Ärzte tragen einen Holzreifen von etwa 28 Zentimetern am Oberarm. Das Medium ist vorher nicht untersucht worden. Noch am Abend soll ein Protokoll entstehen.",
        optionen: [
          { text: "Jeder schreibt sofort und für sich auf, was er erlebt hat, bevor überhaupt jemand darüber spricht.", d: { sorg: 2, zug: -1, ruf: 1 }, folge: "Acht Fassungen, die sich nicht ganz decken. Gerade das macht sie wertvoll.", eintrag: "Getrennte Niederschrift jedes Teilnehmers vor jeder Aussprache. Medium vorher nicht untersucht." },
          { text: "Erst gemeinsam besprechen, dann noch heute eine kurze Fassung ins Hausbuch des Mediums schreiben; die Reinschrift folgt.", d: { sorg: -1, zug: 1, ruf: -1 }, folge: "Ein Text, auf den sich alle einigen können, und der eine Satz, der fehlt.", eintrag: "Gemeinsame Fassung ins Hausbuch der Frau R. Reinschrift folgt.", wer: "So geschah es" },
          { text: "Nicht unterschreiben: Sie haben die Hände nicht selbst gehalten und das Medium nicht untersucht gesehen.", d: { sorg: 1, zug: -1, ruf: 0 }, folge: "Ihr Name steht nicht darunter. Zwei andere Namen schon.", eintrag: "Unterschrift verweigert: Hände nicht selbst kontrolliert, Medium nicht untersucht." }
        ],
        hist: 1,
        zitate: [
          Object.assign({ t: "Dr. Sünner bekundet, daß das Medium zwar nicht körperlich untersucht worden sei, jedoch das Neben- und das Versuchszimmer einer Durchsuchung unterzogen wurden. Der Tisch, um den herum dann alle Platz nahmen, sei allerdings erst kurz vor der Sitzung von einigen Herren in das Versuchszimmer getragen worden, Verdächtiges habe er an ihm nicht bemerkt. […] Eben dasselbe bekundet Dr. Bruck mit der Abänderung, daß er die Hände des Mediums erst eine minimal kurze Zeit nach Löschen des Lichtes ergriffen habe." }, URTEIL(553, "0561")),
          Object.assign({ t: "Er teilte ihm mit, daß die von Schwab veröffentlichte Fassung zur Veröffentlichung gar nicht bestimmt, sondern lediglich am Abend der Sitzung als vorläufiges Protokoll in das Hausbuch der Frau Rudloff eingetragen, auch nicht von allen Teilnehmern unterzeichnet worden sei. Wie aus dem vorgelegten Originalprotokoll ersichtlich, befanden sich darunter nur die Unterschriften von Bruck und Sünner." }, URTEIL(557, "0565")),
          Object.assign({ t: "Da es sich um eine Dunkelsitzung handelte, also gleichzeitige Aufzeichnungen während der Sitzung nicht möglich waren, würde das Prokoll zweckmäßigerweise so hergestellt worden sein, daß, ohne daß vorher darüber gesprochen worden war, jeder Teilnehmer unmittelbar nach der Sitzung seine Eindrücke möglichst ausführlich und genau niederschrieb. […] Man wählte den letzten Weg." }, IA("IAPSOP-zeitschrift_kritischen_okkultismus_v1_n1_1926", 62, "A. Hellwig, Psychologische Glossen zu dem Berliner Okkultistenprozeß, in: Zeitschrift für kritischen Okkultismus 1 (1926), H. 1, S. 58"))
        ],
        hinweis: "Ausgerechnet der Umstand, dass die Hände schon vor dem Löschen des Lichts gefasst waren, fehlte in der Fassung im Hausbuch. Ein Dr. Schwab druckte sie 1923 ohne Rückfrage in seinem Buch „Teleplasma und Telekinese“, und der Berliner Arzt Albert Moll erklärte das Reifenphänomen 1924 in seinem Buch „Der Spiritismus“ als Trick. „Prokoll“ ist ein Druckfehler des Originals.",
        frage: "Wer darf Ihr vorläufiges Protokoll lesen, und wer darf es drucken?"
      },
      {
        jahr: "Juli 1925", ort: "Berlin-Moabit", titel: "Das Protokoll vor Gericht",
        bild: { src: "img/zs-kritischer-okkultismus.jpg", cap: "Seit 1925 hatte auch die Gegenseite eine Zeitschrift: die „Zeitschrift für kritischen Okkultismus“, unter den Mitarbeitern der Jurist Albert Hellwig. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-zeitschrift_kritischen_okkultismus_v1_n1_1926/page/n1/mode/1up" },
        lage: "Der Ehemann des Mediums verklagt Geheimrat Albert Moll wegen übler Nachrede: Moll hatte die Reifensitzung in seinem Buch eine Farce genannt. Im Schwurgerichtssaal in Moabit sagen Ärzte, Professoren und ein Zauberkünstler aus, Max Dessoir ist Sachverständiger, sogar Max Planck ist geladen. Sie werden als Zeuge gerufen, weil Sie dabei waren. Der Richter will wissen, was Ihr Protokoll beweist.",
        optionen: [
          { text: "Nur bezeugen, was im Protokoll steht, und die Lücken offen zugeben.", d: { sorg: 1, zug: -2, ruf: 1 }, folge: "Die Okkultisten im Saal sehen Sie nicht mehr an. Der Richter schreibt mit.", eintrag: "Aussage 1925: nur das Protokoll. Medium nicht untersucht, Fassung nachträglich, Unterschriften unvollständig." },
          { text: "Aus der Erinnerung ergänzen, dass die Hände von Anfang an gehalten wurden.", d: { sorg: -2, zug: 2, ruf: 0 }, folge: "Unter Eid ist Ihre Erinnerung so viel wert wie das Protokoll, das sie ergänzt.", eintrag: "Aussage 1925: Hände von Beginn an gehalten (aus der Erinnerung).", wer: "So sagte Dr. Sünner aus" },
          { text: "Die Grenzen jeder Handkontrolle einräumen: Ein kurzes Loslassen kann im Dunkeln unbemerkt bleiben.", d: { sorg: 1, zug: -1, ruf: 1 }, folge: "Ein Satz, der nicht das Medium, sondern die Methode trifft.", eintrag: "Aussage 1925: Handkontrolle im Dunkeln nicht zwingend; kurzes Lösen kann unbemerkt bleiben.", wer: "So urteilte Max Dessoir" }
        ],
        hist: 1,
        zitate: [
          Object.assign({ t: "Auch der kleine Versuch, den der Angeklagte mit dem erkennenden Richter unternahm, war nicht von besonderer Beweiskraft, da nicht die Hände des Angeklagten festgehalten wurden, sondern die des Richters und da der Angeklagte unter geschickter Veränderung der Druckstärke unbemerkt seine eine Hand zeitweise fortnahm." }, URTEIL(554, "0562")),
          Object.assign({ t: "Professor Dr. Zimmer: Ich bin durch das Erleben von Phänomenen von ihrer Möglichkeit und Existenz überzeugt. Der Begriff „zwingende Bedingung“ ist nicht festlegbar. Das Wort Trick ist in der Literatur üblich. Das Protokoll über eine Sitzung soll in erster Linie als Gedächtnisstütze für später dienen." }, URTEIL(555, "0563")),
          Object.assign({ t: "Auf Grund des gesamten dem Gericht gebotenen Materials ist somit festzustellen, daß eine Täuschung in der Sitzung vom 11. April 1923 weder ersichtlich, noch erwiesen ist. Aber auch das Gegenteil steht nicht fest." }, URTEIL(555, "0563")),
          Object.assign({ t: "Vors.: „Von der Gegenseite wird Ihnen vorgeworfen, daß Sie nicht andere Protokolle herangezogen haben, die beweiskräftiger sind.“ — Geh. Rat Moll: „Andere sind noch oberflächlicher.“" }, ZEFYS("SNP28113159-19260127-1-3-0-0", "Deutsche Allgemeine Zeitung, 27. Januar 1926, S. 3 (Bericht aus der Berufungsverhandlung)"))
        ],
        hinweis: "Moll wurde am 11. Juli 1925 freigesprochen. Den Wahrheitsbeweis hatte er nicht erbracht, aber das Gericht billigte ihm die Wahrnehmung berechtigter Interessen zu (§ 193 StGB). Die Berufung scheiterte im Januar 1926. Den „kleinen Versuch“ machte Moll mit dem Richter im Saal vor: Er zog unbemerkt eine Hand fort.",
        frage: "Würden Sie unter Eid beschwören, was Sie im Dunkeln gesehen haben?"
      },
      {
        jahr: "Oktober 1925", ort: "Bernburg (Anhalt)", titel: "Der Hellseher und die Polizei",
        lage: "In Bernburg steht der Lehrer August Drost vor dem Schöffengericht, angeklagt wegen Betrugs in 44 Fällen. Er hat Medien in Hypnose versetzt und so Diebstähle „aufgeklärt“, auch für Beamte und Gutsbesitzer. Ein Kriminalkommissar aus der Gegend spricht Sie an: Ob Sie bei der nächsten Sitzung dieser Art als Arzt mitschreiben würden? Das Protokoll käme in die Ermittlungsakte.",
        optionen: [
          { text: "Zusagen und genau mitschreiben.", d: { sorg: -1, zug: 1, ruf: -1 }, folge: "Ihr Name steht in einer Akte, in der bald auch der Name eines Verdächtigen steht.", eintrag: "Kriminaltelepathische Sitzung auf Ersuchen der Polizei protokolliert.", wer: "So nutzten Beamte in Anhalt den Hellseher" },
          { text: "Nur unter Bedingungen: Das Medium erfährt vorher nichts vom Fall, und die Akte bekommt einen Vermerk über die Methode, keine Namen von Verdächtigen.", d: { sorg: 1, zug: -1, ruf: 1 }, folge: "Der Kommissar findet das umständlich. Ein Unschuldiger wird es Ihnen nie danken, weil er nichts davon erfährt.", eintrag: "Mitwirkung nur unter Bedingungen: Medium ohne Fallkenntnis, keine Namen in der Akte." },
          { text: "Ablehnen und schriftlich begründen: Ein Medium kann Unschuldige beschuldigen.", d: { sorg: 1, zug: -1, ruf: 0 }, folge: "Vier Jahre zu früh. Später wird ein Minister fast dasselbe schreiben.", eintrag: "Mitwirkung abgelehnt: Gefahr der Beschuldigung Unschuldiger." }
        ],
        hist: 0,
        zitate: [
          Object.assign({ t: "Regierungsrat Streuber, auf dessen Gut Getreidediebstähle vorgekommen waren, benutzte den Angeklagten, um die Diebe abzuschrecken. Die Erfolge Drost's mit seiner Hellseherei hatten damals die Wirkung, daß die Verbrecherwelt stark beunruhigt war und manche Straftat aus Angst vor der leichten Entdeckung unterblieb und dann schon mit der bloßen Androhung, den Hellseher zu holen, gute Erfolge erzielt wurden. […] Die Sachverständigen waren sich einig, daß Telepathie vorliege." }, ZEFYS("SNP2436020X-19251016-0-3-0-0", "Berliner Börsen-Zeitung, 16. Oktober 1925, S. 3: „Der Hellseherprozeß in Bernburg“")),
          Object.assign({ t: "Das Gericht hält sich nicht für zuständig, über die Frage zu entscheiden, ob ein Hellsehen bestehe oder nicht. Es wird vielmehr lediglich die Frage entschieden, ob der Angeklagte in gutem Glauben an die übernatürlichen Kräfte seines Mediums geglaubt hat. Dieser gute Glaube wird ihm zuerkannt, wenn auch das Gericht auf dem Standpunkt steht, daß Drost in einigen Fällen kritiklos, in anderen vielleicht leichtfertig gehandelt hat." }, ZEFYS("SNP2436020X-19251018-0-3-0-0", "Berliner Börsen-Zeitung, 18. Oktober 1925, S. 3: „Freispruch im Hellseherprozeß“ (aus der Urteilsbegründung)"))
        ],
        hinweis: "Drost wurde am 17. Oktober 1925 freigesprochen; die Staatsanwaltschaft legte Berufung ein. Der Fall gehört zu denen, die vier Jahre später zu einem preußischen Erlass führten (Station 9).",
        frage: "Was dürfte in eine Ermittlungsakte, das nicht nachprüfbar ist?"
      },
      {
        jahr: "Mai 1926", ort: "München", titel: "Lämpchen statt Hände",
        bild: { src: "img/elektrische-kontrolle.jpg", cap: "Elektrische Kontrolle von Händen und Füßen nach Schrenck-Notzing: Löst sich ein Kontakt, erlischt ein Lämpchen. Zeichnung aus: Harry Price, Rudi Schneider (London 1930), Plate I. Internet Archive, gemeinfrei.", url: "https://archive.org/details/bwb_T3-BNI-608/page/n30/mode/1up" },
        lage: "Der Elberfelder Forscher Karl Krall hat einen Apparat gebaut. Medium und Kontrolleure tragen Halbhandschuhe aus Metallgarn, die Füße stehen auf Blechplatten, und vier kleine Lämpchen leuchten, solange alle Kontakte geschlossen sind. Schrenck-Notzing will ihn bei Willy und Rudi Schneider einsetzen. Ihr Protokoll könnte nun die Lämpchen mitschreiben statt der Eindrücke der Kontrolleure.",
        optionen: [
          { text: "Den Apparat übernehmen und nur noch die Lämpchen protokollieren.", d: { sorg: -1, zug: 1, ruf: 0 }, folge: "Genaue Zeiten, klare Zeilen, und nichts über den Raum außerhalb der Kontakte.", eintrag: "Elektrische Kontrolle: alle vier Lampen brennend während der Phänomene." },
          { text: "Den Apparat übernehmen, aber weiter auch mit den Händen kontrollieren.", d: { sorg: 1, zug: 0, ruf: 1 }, folge: "Doppelt hält besser, sagt der Hausherr, und hat diesmal recht.", eintrag: "Elektrische und zusätzlich manuelle Kontrolle durch zwei Teilnehmer.", wer: "So hielt es Schrenck-Notzing" },
          { text: "Festhalten, dass der Apparat nur die Glieder des Mediums überwacht, nicht den Raum, also keinen Helfer.", d: { sorg: 1, zug: -1, ruf: 0 }, folge: "Ein Satz, den man Ihnen übelnimmt, und den ein Engländer im Herbst wiederholen wird.", eintrag: "Vermerk: Apparat überwacht nur Medium und Kontrolleure, nicht übrige Anwesende." }
        ],
        hist: 1,
        zitate: [
          Object.assign({ t: "Die neue von Karl Krall entdeckte und am 4. Mai 1926 zum erstenmal in seinem Institut mit Willy Schneider ausprobierte sowie weiter unten von einem technischen Sachverständigen beschriebene elektrische Fesselung macht den Superkontrolleur überflüssig. […] Ist alles in Ordnung, so brennen vier kleine Glühbirnen: rot, dunkelgelb, grün, hellgelb, deren Lichtstärke durch Heizwiderstände beliebig gedämpft werden kann." }, FR("zs_para1926", "0543", "A. von Schrenck-Notzing, Ein elektrischer Apparat für Medienkontrolle, in: Zeitschrift für Parapsychologie 1926, 9. Heft, S. 514")),
          Object.assign({ t: "Während des Verlaufs der sämtlichen seit 26. Mai 1926 mit den Medien Willy und Rudi Schneider abgehaltenen zahlreichen Sitzungen wurde dieser elektrische Kontrollapparat ohne irgendwelche Störung mit Erfolg benützt." }, FR("zs_para1926", "0544", "Ebd., S. 515")),
          Object.assign({ t: "In einigen Fällen gelang mir dies in wenigen Minuten bis zu 6- oder 10mal, während die Versuchsperson nach Beendigung des Versuchs steif und fest behauptete, beschwören zu können, daß bestimmt die Kette nicht ein einziges Mal unterbrochen sei." }, IA("IAPSOP-zeitschrift_kritischen_okkultismus_v1_n4_1926", 18, "R. W. Schulte, Experimentalpsychologische Untersuchungen zur Prüfung der Kontrollbedingungen bei okkultistischen Dunkelsitzungen, in: Zeitschrift für kritischen Okkultismus 1 (1926), H. 4, S. 259"))
        ],
        hinweis: "Das dritte Zitat kommt aus Berlin, aus dem Labor des Psychologen R. W. Schulte, im selben Jahr: Er löste im Dunkeln die Hand aus der Kette, und seine Versuchspersonen hätten geschworen, dass sie nie unterbrochen war. Krall starb noch 1926.",
        frage: "Was misst Ihr bestes Instrument, und was misst es nicht?"
      },
      {
        jahr: "1926", ort: "Braunau am Inn", titel: "Der Gast schreibt mit",
        bild: { src: "img/kontrolle-rudi-1927.jpg", cap: "„Kontrolle des Mediums Rudi Schneider durch W. J. Vinton“, daneben Helen Augur. Zeitschrift für Parapsychologie 2 (1927), Tafel bei S. 712. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-zeitschrift_fur_parapsychologie_1927/page/n732/mode/1up" },
        lage: "In der Wohnung der Familie Schneider in Braunau sitzt im Sommer ein Besucher aus dem Ausland, Warren Jay Vinton, in zehn Sitzungen mit dem jüngeren Bruder Rudi. Er schreibt im Dunkeln mit und kommt zu dem Schluss, ein Mitglied der Familie helfe nach. Ein Gazeschirm wird verschoben. Schrenck-Notzing will die Vorwürfe prüfen, und Sie sollen mitkommen.",
        optionen: [
          { text: "Wie der Besucher im Dunkeln mitschreiben, mit Uhrzeit, auch wenn man die Notizen später kaum lesen kann.", d: { sorg: 1, zug: -1, ruf: 0 }, folge: "Zeilen, die sich überschneiden, und doch jede Minute belegt.", eintrag: "Laufende Notizen im Dunkeln mit Uhrzeit.", wer: "So arbeitete Vinton" },
          { text: "Erst nach der Sitzung schreiben, solange die Erinnerung frisch ist.", d: { sorg: -1, zug: 1, ruf: 0 }, folge: "Ein schöner, geordneter Text, wie ihn die Erinnerung schreibt.", eintrag: "Niederschrift unmittelbar nach Schluss der Sitzung." },
          { text: "Eine eigene Kontrollsitzung verlangen: den Schirm an der Wand befestigt, die Familie fern vom Medium, ein fremder Kontrolleur.", d: { sorg: 1, zug: -1, ruf: 1 }, folge: "Die Familie fühlt sich verdächtigt, und sie hat recht damit.", eintrag: "Kontrollsitzung: Schirm befestigt, Bruder gefesselt, keine Angehörigen in der ersten Reihe.", wer: "So hielt es Schrenck-Notzing im Oktober 1926" }
        ],
        hist: 2,
        zitate: [
          Object.assign({ t: "[…] daß er während der ersten drei Sitzungen zu sehr in Anspruch genommen war, um ein Protokoll zu führen. Was er darüber berichtet, sind also nachträgliche Reminiszenzen, die nach seiner eigenen Auffassung für die kritische Würdigung der Vorgänge wenig Wert besitzen. Merkwürdigerweise macht er weiterhin seine Aufzeichnungen während des Verlaufes der Sitzungen selbst, und zwar bei der gerade zufällig vorhandenen Beleuchtung, die von ihm als durchaus ungenügend bezeichnet wird." }, FR("zs_para1927", "0725", "A. von Schrenck-Notzing, Vintons angebliche Entlarvung der Braunauer Medien, in: Zeitschrift für Parapsychologie 1927, 12. Heft, S. 705")),
          Object.assign({ t: "Der Vintonsche Schirm war von mir fest an der Wand befestigt, ein Begleiter von mir kontrollierte Rudi, und Karl saß ebenfalls gefesselt im Zirkel. In der ersten Reihe befanden sich sonst keine Angehörigen der Familie." }, FR("zs_para1927", "0728", "Ebd., S. 708"))
        ],
        hinweis: "Vinton veröffentlichte seine Vorwürfe im April 1927 in der Londoner Zeitschrift „Psyche“; seine Texte sind noch nicht gemeinfrei und werden hier nur nacherzählt. Schrenck-Notzing antwortete im Dezember 1927. Im ersten Zitat hält er dem Gast vor, ausgerechnet im Dunkeln mitgeschrieben zu haben.",
        frage: "Was ist mehr wert: die Notiz im Dunkeln oder der klare Bericht danach?"
      },
      {
        jahr: "April 1929", ort: "München und Berlin", titel: "Ein Attest",
        bild: { src: "img/schrenck-richet-1929.jpg", cap: "„Zwei Veteranen der Parapsychologie“: Albert von Schrenck-Notzing und der Physiologe Charles Richet. Gedruckt im Mai 1929, drei Monate nach Schrenck-Notzings Tod. Zeitschrift für Parapsychologie 4 (1929), Tafel 16. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-zeitschrift_fur_parapsychologie_1929/page/n296/mode/1up" },
        lage: "Am 19. Februar ist Schrenck-Notzing nach einer Blinddarmoperation gestorben. Seine Protokolle liegen in Ihrem Schrank. Eine Frau, die als Hellseherin auftritt, bittet Sie um ein ärztliches Attest über ihre „Begabung“, für ein Gastspiel. Am selben Tag steht in der Zeitung, der preußische Innenminister habe der Polizei verboten, Hellseher heranzuziehen.",
        optionen: [
          { text: "Ein Attest ausstellen, das nur Gesundheit und Trancefähigkeit bestätigt, nicht die Echtheit.", d: { sorg: -1, zug: 1, ruf: -1 }, folge: "Auf dem Plakat wird aus Ihrem Satz ein ärztlich beglaubigtes Wunder.", eintrag: "Attest für Frau X.: gesund, trancefähig. Keine Aussage über Hellsehen." },
          { text: "Ablehnen, mit Verweis auf die ärztliche Pflicht und den Erlass.", d: { sorg: 1, zug: -1, ruf: 1 }, folge: "Sie verlieren eine Bekanntschaft und behalten Ihren Namen.", eintrag: "Attest verweigert.", wer: "So entschied das Ministerium für seine Beamten" },
          { text: "Statt eines Attests ein kontrolliertes Experiment anbieten und nur dessen Protokoll herausgeben.", d: { sorg: 2, zug: -1, ruf: 0 }, folge: "Sie kommt nicht. Das sagt auch etwas.", eintrag: "Angebot eines kontrollierten Versuchs statt Attest. Nicht angenommen." }
        ],
        hist: 1,
        zitate: [
          Object.assign({ t: "Demgegenüber weist der Minister des Innern in seinem Erlaß darauf hin, daß von dem Ergebnis der polizeilichen Ermittlungen in Strafsachen Ruf, Ehre, wirtschaftliche Existenz und Freiheit der Staatsbürger abhängen können. Es sei daher selbstverständlich, daß bei der polizeilichen Aufklärungsarbeit nur Hilfsmittel benutzt werden dürfen, die sich einer Nachprüfung auf Grund sinnlich wahrnehmbarer Tatsachen und von Methoden, die auf dem gegenwärtigen Stande der Wissenschaft fußen, nicht entziehen. Das ist aber nach dem jetzigen Stande der Wissenschaft bei den sogenannten parapsychischen Fähigkeiten, zu denen auch das Hellsehen gehört, nicht der Fall." }, ZEFYS("SNP2436020X-19290410-1-3-0-0", "Berliner Börsen-Zeitung, 10. April 1929, S. 3: „Innenminister gegen Hellseher“"))
        ],
        hinweis: "Der Erlass verbot den preußischen Polizeibeamten, Hellseher und Telepathen zur Aufklärung heranzuziehen und ihnen Bescheinigungen über ihre „Erfolge“ auszustellen. Den Hinweisen solcher Leute mussten sie trotzdem selbst nachgehen. Die Frau mit dem Attest ist erfunden; Bescheinigungen dieser Art gab es.",
        frage: "Wofür wird Ihre Unterschrift benutzt, wenn Sie den Raum verlassen haben?"
      },
      {
        jahr: "Mai 1930", ort: "Leitmeritz (Tschechoslowakei)", titel: "Probevorstellung im Gerichtssaal",
        bild: { src: "img/leitmeritz-1911.jpg", cap: "Leitmeritz, das k. k. Bezirksgericht auf einer Postkarte von 1911 (Brück & Sohn, Meißen). Wikimedia Commons, gemeinfrei.", url: "https://commons.wikimedia.org/wiki/File:12930-Leitmeritz-1911-K._K._Bezirksgericht-Br%C3%BCck_%26_Sohn_Kunstverlag.jpg" },
        lage: "Vor dem Kreisgericht Leitmeritz steht Hermann Steinschneider, der als Hellseher „Erik Jan Hanussen“ auftritt, wegen Betrugs. Seine Verteidigung beantragt einen Versuch vor Gericht: Er soll einen versteckten Gegenstand finden, Schriftproben deuten und anderes mehr. Ein Sachverständiger hat die Berichte von Zeugen über frühere Versuche „Märchen für Kinder“ genannt. Hanussens Anwalt bittet Sie, die Probe als ärztlicher Beobachter mitzuschreiben.",
        optionen: [
          { text: "Annehmen und nur aufschreiben, was zu sehen ist, ohne Deutung.", d: { sorg: 0, zug: 1, ruf: -1 }, folge: "Ihr Protokoll ist genau. Ob die Aufgaben vorher bekannt waren, steht nicht darin.", eintrag: "Probe vor Gericht protokolliert: Aufgaben, Zeiten, Ergebnisse." },
          { text: "Annehmen, aber vorher schriftlich verlangen, dass niemand aus Hanussens Umfeld die Aufgaben kennt; wird das verweigert, kommt auch das ins Protokoll.", d: { sorg: 1, zug: -1, ruf: 1 }, folge: "Der Anwalt zögert. Ein Protokoll, das auch seine eigenen Bedingungen festhält.", eintrag: "Bedingungen für die Probe schriftlich vorgelegt; Antwort vermerkt." },
          { text: "Ablehnen: Eine Vorführung vor Publikum ist kein Experiment.", d: { sorg: 0, zug: -1, ruf: 0 }, folge: "Sie lesen am nächsten Tag in der Zeitung, wie es ausging.", eintrag: "Mitwirkung an der Probe abgelehnt." }
        ],
        hist: -1,
        zitate: [
          Object.assign({ t: "Er wollte also etwa sagen, daß Versuche solcher Art, die ebensowenig bescheinigt sind wie ein Märchen, keinen Anspruch auf Beachtung verdienen. […] Ich bin der Ansicht, daß diese Bemerkung Prof. Seracky nicht zutreffend ist. Es handelt sich nicht um Versuche, welche bestimmt waren, irgendwelchen Beweisen zu dienen, sondern sie dienten nur der Forschung und der Belehrung, es war daher eine Beurkundung nicht notwendig und man kann Vorgänge, welche von glaubwürdigen Zeugen bestätigt werden, daher nicht Märchen gleichsetzen, weil ihnen eine formale schriftliche Bescheinigung fehlt." }, { cite: "Erklärung des Vorsitzenden, Obergerichtsrat Schalek, nach: Sozialdemokrat (Prag), 27. Mai 1930, S. 2", url: "https://library.fes.de/ddb/st10124/st10124_02.jpg" }),
          Object.assign({ t: "Der Angeklagte Hanussen wird freigesprochen. Das Gericht ist nicht in der Lage, auszusprechen, daß Hanussen die Fähigkeit des Hellsehens nicht besitzt. Nach diesen Worten des Vorsitzenden bricht die Zuhörerschaft in einen etwa zehn Minuten dauernden Beifall aus. Zu der Begründung des Urteils erklärt dann der Vorsitzende: das Gericht sieht seine Aufgabe nicht darin, parapsychologische Probleme zu lösen. Wir dürfen nicht richten, wo die Wissenschaft noch nicht entschieden hat, um so weniger, als das Gericht sich durch Augenschein davon überzeugen konnte, daß Hanussen über rätselhafte Geisteskräfte verfügt." }, { cite: "Vorwärts (Berlin), 28. Mai 1930, S. 6: „Hanussen freigesprochen“", url: "https://library.fes.de/ddb/vw47246/VW47246_00000006.jpg" })
        ],
        hinweis: "Die Probevorstellung fand am Abend des 26. Mai 1930 im Gerichtssaal statt, das Urteil fiel am 27. Mai. Hanussen war 1889 in Wien als Sohn einer jüdischen Familie geboren. Der Anwalt, der Sie bittet, ist erfunden.",
        frage: "Wann wird aus einem Versuch eine Vorstellung?"
      },
      {
        jahr: "28. April 1932", ort: "London", titel: "Der Blitz um 10.50 Uhr",
        bild: { src: "img/price-kabinett-1929.jpg", cap: "Harry Price 1929 in seinem National Laboratory vor dem Kabinett, aus seinem Bericht über die ersten Londoner Sitzungen mit Rudi Schneider. Zeitschrift für Parapsychologie 4 (1929), S. 443. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-zeitschrift_fur_parapsychologie_1929/page/n520/mode/1up" },
        lage: "Sie sind als Gast in Harry Price' Laboratorium in London. Rudi Schneider sitzt, elektrisch kontrolliert. Ein Taschentuch liegt auf einem Kontakttisch: Bewegt es sich, zünden Blitzlampen, drei Kameras lösen aus. Eine Schreiberin hält jede Minute fest. Um 10.50 Uhr zündet der Blitz, eine zweite Birne eine Sekunde später. Die Platten sind noch nicht entwickelt. Was schreiben Sie in Ihr eigenes Protokoll?",
        optionen: [
          { text: "Den doppelten Blitz genau so aufschreiben, wie Sie ihn wahrgenommen haben, ohne Deutung.", d: { sorg: 1, zug: 0, ruf: 1 }, folge: "Eine Zeile, die später mehr Gewicht haben wird, als Sie ahnen.", eintrag: "10.50 Uhr: Blitz, zweite Lampe etwa eine Sekunde später. Keine eigene Wahrnehmung des Mediums im Moment des Blitzes.", wer: "So hielt es das Minutenprotokoll" },
          { text: "Mit dem Eintrag warten, bis die Platten entwickelt sind.", d: { sorg: -1, zug: 0, ruf: 0 }, folge: "Ihr Protokoll wird zu einem Kommentar zum Foto.", eintrag: "Eintrag zu 10.50 Uhr nachgetragen nach Entwicklung der Platten." },
          { text: "Rudi verteidigen: Bei so vielen Kontrollen ist ein Betrug ausgeschlossen.", d: { sorg: -2, zug: 2, ruf: -1 }, folge: "Die Familie dankt es Ihnen. Das Foto wird anders sprechen.", eintrag: "Kontrolle während der gesamten Sitzung lückenlos." }
        ],
        hist: 0,
        zitate: [
          Object.assign({ t: "Ich bin überzeugt, daß auch unser braver Willi, wenn man ihn frei ließe, zu mogeln versuchen und so seine Sache schwer kompromittieren würde; […]" }, MANN(219)),
          Object.assign({ t: "Es ist leicht zu sehen, daß ein minder guter Kenner, der nur die Außenseite beobachtet hätte, einen Wunderbericht geliefert haben würde, mit dem die Aussagepsychologie wenig anfangen könnte." }, { cite: "Max Dessoir, Vom Jenseits der Seele, 4./5. Aufl. (Stuttgart 1920), S. 185", url: "https://archive.org/details/vomjenseitsderse00dess/page/185/mode/1up" })
        ],
        hinweis: "Nacherzählt nach Price' Bericht von 1933 (der englische Text kann in den USA noch geschützt sein): Die Platte zeigte Rudis linken Arm frei hinter seinem Rücken. Price wertete das 1933 als ersten fotografischen Beweis, dass Rudi sich der Kontrolle entziehen konnte; andere bestritten die Deutung. Zuvor war Rudi in Paris bei Eugène Osty gewesen, wo ein Infrarotstrahl den Gegenstand bewachte, nicht das Medium. Die Zitate oben sind älter: Thomas Mann schrieb seinen Satz 1924 über den älteren Bruder.",
        hinweisUrl: "https://archive.org/details/accountofsomefur00pric/page/147/mode/1up",
        frage: "Wer darf Ihr Protokoll ergänzen, nachdem ein Foto etwas anderes zeigt?"
      },
      {
        jahr: "Februar 1933", ort: "Berlin", titel: "Eine Einladung",
        bild: { src: "img/rudi-schneider-1929.jpg", cap: "Rudi Schneider, 1929. Zeitschrift für Parapsychologie 4 (1929), S. 497. Internet Archive, gemeinfrei.", url: "https://archive.org/details/IAPSOP-zeitschrift_fur_parapsychologie_1929/page/n578/mode/1up" },
        lage: "Seit dem 30. Januar regiert Hitler. Hanussen, freigesprochen in Leitmeritz, ist in Berlin berühmt; er tritt in der Scala auf, gibt eine eigene Zeitung heraus, „Hanussens Berliner Wochenschau“, und man sagt ihm Verbindungen zur Berliner SA nach. Aus seinem Umfeld kommt eine Einladung zu einer Sitzung in seinen Räumen. Unter den Gästen sollen Herren aus der SA sein. Man wünscht sich ein „ärztliches Protokoll“ für die Wochenschau, unter Ihrem Namen.",
        optionen: [
          { text: "Hingehen und protokollieren; der Text erscheint unter Ihrem Namen.", d: { sorg: -1, zug: 2, ruf: -2 }, folge: "Ihr Name steht in einem Blatt, das bald niemand mehr kennen will.", eintrag: "Sitzung bei H. protokolliert; zur Veröffentlichung freigegeben." },
          { text: "Hingehen, aber nichts unterschreiben; nur eigene Notizen.", d: { sorg: 0, zug: 0, ruf: 0 }, folge: "Sie sehen, wer neben wem sitzt. Das steht in keiner Wochenschau.", eintrag: "Sitzung bei H. besucht. Nur private Notizen, keine Unterschrift." },
          { text: "Absagen.", d: { sorg: 0, zug: -1, ruf: 1 }, folge: "Ein Brief, zwei Zeilen, und eine Tür, die Sie nicht mehr aufmachen.", eintrag: "Einladung zu H. abgelehnt." }
        ],
        hist: -1,
        zitate: [
          Object.assign({ t: "Ein Medium, das wirklich echte Phänomene zeigt, wird überzeugender wirken, wenn es unter zwingenden Bedingungen den Beweis der Echtheit der Phänomene erbringt, als wenn es die Echtheit als Zeuge beschwört: Tagtäglich werden auch gutgläubig zahlreiche Falscheide geschworen." }, ZEFYS("SNP28113159-19250725-0-5-0-0", "Albert Hellwig, Medium kontra Moll. II. Okkultismus und Kritik, in: Deutsche Allgemeine Zeitung, 25. Juli 1925, S. 5"))
        ],
        hinweis: "Nacherzählt nach Pressemeldungen von 1933, die in den USA noch geschützt sein können: Hanussen trat bis zum 24. März 1933 in der Scala auf. Am 7. April fanden Straßenarbeiter seine Leiche mit mehreren Schusswunden in einer Schonung an der Landstraße von Baruth nach Neuhof südlich von Berlin. Im Juli wurde das Verfahren gegen Unbekannt eingestellt. Für die viel erzählte Sitzung vom 26. Februar 1933, in der er den Reichstagsbrand vorhergesagt haben soll, haben wir keinen zeitgenössischen Bericht gefunden; sie bleibt hier eine Legende. Das Zitat oben schrieb Hellwig 1925 über ein anderes Medium.",
        frage: "Wem leihen Sie Ihren Namen, wenn sich die Zeiten ändern?"
      }
    ],
    epilog: [
      "Hanussen wurde im April 1933 ermordet, die Täter nie ermittelt. Thomas Mann, Nobelpreisträger von 1929, kehrte im Februar 1933 von einer Vortragsreise nicht nach München zurück und ging ins Exil.",
      "Ab dem 1. Mai 1934 war das gewerbsmäßige Wahrsagen in Berlin verboten; bis 1936 folgten weitere Regierungsbezirke. Nach dem Flug von Rudolf Heß nach England ließ Reinhard Heydrich am 9. Juni 1941 reichsweit Astrologen, Okkultisten und Anthroposophen verhaften und ihre Bücher beschlagnahmen („Aktion gegen Geheimlehren und sogenannte Geheimwissenschaften“).",
      "Albert Moll starb 1939 in Berlin. Rudi Schneider gab die Sitzungen bald auf; er lebte später in Weyer in Oberösterreich und starb 1957.",
      "Ihr Protokollbuch liegt da längst im Schrank."
    ],
    epilogRef: "Referat: Hanussen nach Pressemeldungen vom April und Juli 1933 (Central-Volksblatt, Arnsberg, 10.4.1933; Deutsche Freiheit, Saarbrücken, 11.7.1933); Wahrsageverbote nach Polizeiverordnungen 1934–1936 (Presseberichte); die Aktion von 1941 nach U. Schellinger, A. Anton, M. Schetsche, Zeitschrift für Anomalistik 10 (2010), S. 287–321, mit Beleg im Bundesarchiv (R 58/1029).",
    enden: [
      { wenn: s => s.sorg >= 8 && s.zug <= 4, titel: "Der Kritiker", text: "Ihre Protokolle hielten jeder Prüfung stand, und man lud Sie immer seltener ein. Hellwig hätte Ihnen zugestimmt, Moll auch. Ob es in den dunklen Zimmern etwas gab, das sich Ihren Bedingungen entzog, haben Sie nicht erfahren." },
      { wenn: s => s.zug >= 8 && s.sorg <= 4, titel: "Der Freund der Phänomene", text: "Man lud Sie gern ein, man druckte Ihre Protokolle, und Ihr Name stand unter manchem Wunder. Als die Fotos kamen und die Prozesse, standen Ihre Sätze in Akten, die andere lasen." },
      { wenn: s => s.sorg >= 7 && s.zug >= 6, titel: "Der seltene Zeuge", text: "Sie haben geschafft, was in diesen Jahren kaum jemandem gelang: Man ließ Sie kontrollieren und glaubte Ihnen trotzdem. Ein Protokoll, das beides aushält, ist selten." },
      { wenn: s => true, titel: "Der Zeuge, der nicht weiß", text: "Wie Thomas Mann haben Sie gesehen, was nicht möglich war, und Sie wissen nicht, was es war. Sie haben es aufgeschrieben. Mehr kann ein Protokoll nicht." }
    ]
  };
})();
