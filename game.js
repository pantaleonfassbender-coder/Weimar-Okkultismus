/* Aber es geschah — Ablauf. Keine Speicherung, keine Anfragen nach außen. */
(function () {
  "use strict";
  const S = window.SPIEL;
  const buehne = document.getElementById("buehne");
  const werteEl = document.getElementById("werte");
  const START = 5, MIN = 0, MAX = 10;
  let st;

  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clamp = v => Math.max(MIN, Math.min(MAX, v));
  const BUCHST = ["A", "B", "C", "D"];

  function neu() {
    st = { i: 0, werte: {}, buch: [], treffer: 0, gezaehlt: 0 };
    S.werte.forEach(w => (st.werte[w.id] = START));
  }

  function zeigeWerte(d) {
    werteEl.hidden = false;
    werteEl.innerHTML = S.werte.map(w => {
      const v = st.werte[w.id], dz = d && d[w.id];
      const dzs = dz ? `<span class="dz ${dz > 0 ? "p" : "m"}">${dz > 0 ? "+" : "−"}${Math.abs(dz)}</span>` : "";
      return `<div class="wert" title="${esc(w.hint)}"><b>${esc(w.name)}</b> ${v}/10${dzs}<div class="bar" role="img" aria-label="${esc(w.name)} ${v} von 10"><i style="width:${v * 10}%"></i></div></div>`;
    }).join("");
  }

  function figur(b) {
    if (!b) return "";
    return `<figure><img src="${esc(b.src)}" alt="${esc(b.cap.split(".")[0])}"><figcaption>${esc(b.cap)} <a href="${esc(b.url)}" target="_blank" rel="noopener">Quelle</a></figcaption></figure>`;
  }

  function zitat(z) {
    return `<blockquote><p>„${esc(z.t)}“</p><cite>${esc(z.cite)}. <a href="${esc(z.url)}" target="_blank" rel="noopener">Seitenbild</a></cite></blockquote>`;
  }

  function oben() { window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" }); }

  function start() {
    werteEl.hidden = true;
    buehne.innerHTML = `
      <section class="start titel">
        <h1>${esc(S.titel)}</h1>
        <p class="unter">${esc(S.untertitel)}</p>
        <div class="bild">${figur(S.startBild)}</div>
        <p>${esc(S.intro)}</p>
        <p>Drei Werte begleiten Sie: <strong>Sorgfalt</strong> (halten Ihre Protokolle einer Prüfung stand?), <strong>Zugang</strong> (lädt man Sie noch ein?) und <strong>Ansehen</strong> (nehmen Fachwelt und Presse Sie ernst?). Sie beginnen jeweils bei 5 von 10. Was Sie wählen, schreiben Sie ins Protokollbuch; am Ende liegt es vor Ihnen.</p>
        <p class="fein">${esc(S.introRef)} Eine Partie dauert etwa 25 Minuten. Das Spiel speichert nichts; wer die Seite neu lädt, beginnt von vorn.</p>
        <p><button class="btn" id="los">Das Protokollbuch aufschlagen</button></p>
      </section>`;
    document.getElementById("los").onclick = () => { neu(); station(); };
    oben();
  }

  function station() {
    const s = S.stationen[st.i];
    zeigeWerte();
    buehne.innerHTML = `
      <article class="papier">
        <div class="kopf"><span>Station ${st.i + 1} von ${S.stationen.length}</span><span>${esc(s.ort)} · ${esc(s.jahr)}</span></div>
        <h2>${esc(s.titel)}</h2>
        ${figur(s.bild)}
        <p class="lage">${esc(s.lage)}</p>
        <div class="optionen" role="group" aria-label="Ihre Entscheidung">
          ${s.optionen.map((o, k) => `<button class="opt" data-k="${k}"><span class="nr">${BUCHST[k]}</span>${esc(o.text)}</button>`).join("")}
        </div>
        <div id="ausgang"></div>
      </article>`;
    buehne.querySelectorAll(".opt").forEach(b => (b.onclick = () => waehle(+b.dataset.k)));
    oben();
  }

  function waehle(k) {
    const s = S.stationen[st.i], o = s.optionen[k];
    if (st.buch.length > st.i) return;
    S.werte.forEach(w => (st.werte[w.id] = clamp(st.werte[w.id] + (o.d[w.id] || 0))));
    const histOk = s.hist >= 0 && s.hist === k;
    if (s.hist >= 0) { st.gezaehlt++; if (histOk) st.treffer++; }
    st.buch.push({ datum: `${s.ort}, ${s.jahr}`, text: o.eintrag, hist: histOk, wahl: BUCHST[k] });
    zeigeWerte(o.d);

    buehne.querySelectorAll(".opt").forEach((b, j) => {
      b.disabled = true;
      if (j === k) b.classList.add("gewaehlt");
      const oj = s.optionen[j];
      if (j === s.hist || oj.wer) {
        const sp = document.createElement("span");
        sp.className = "hist";
        sp.textContent = oj.wer ? oj.wer + "." : "So geschah es.";
        b.appendChild(sp);
      }
    });

    const deltas = S.werte.filter(w => o.d[w.id]).map(w => `${w.name} ${o.d[w.id] > 0 ? "+" : "−"}${Math.abs(o.d[w.id])}`).join(" · ");
    let histSatz;
    if (s.hist < 0) histSatz = "Für diese Lage ist keine Entscheidung überliefert: Der Protokollant ist erfunden, und wer damals in seiner Lage war, hat keine Spur hinterlassen, die wir gefunden haben.";
    else if (histOk) histSatz = `Sie haben gewählt wie damals: Weg ${BUCHST[s.hist]}.`;
    else histSatz = `Damals ging man Weg ${BUCHST[s.hist]}: ${s.optionen[s.hist].text}`;

    const letzte = st.i === S.stationen.length - 1;
    document.getElementById("ausgang").innerHTML = `
      <div class="eintrag"><span class="label">Ihr Eintrag im Protokollbuch</span>${esc(o.eintrag)}</div>
      <p class="folge">${esc(o.folge)}</p>
      <p class="deltas">${esc(deltas || "Keine Veränderung.")}</p>
      ${o.zitat ? zitat(o.zitat) : ""}
      <section class="geschah">
        <h3>Was geschah</h3>
        <p class="histwahl">${esc(histSatz)}</p>
        ${s.zitate.map(zitat).join("")}
        <p class="hinweis">${esc(s.hinweis)}${s.hinweisUrl ? ` <a href="${esc(s.hinweisUrl)}" target="_blank" rel="noopener">Price 1933, S. 147</a>` : ""}</p>
        <p class="frage">${esc(s.frage)}</p>
      </section>
      <div class="weiter"><button class="btn" id="weiter">${letzte ? "Zum Ende" : "Weiter"}</button></div>`;
    const w = document.getElementById("weiter");
    w.onclick = () => { st.i++; if (st.i < S.stationen.length) station(); else ende(); };
    document.getElementById("ausgang").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function ende() {
    zeigeWerte();
    const typ = S.enden.find(e => e.wenn(st.werte));
    buehne.innerHTML = `
      <article class="papier ende">
        <div class="kopf"><span>Berlin, 1933 und danach</span><span>Sorgfalt ${st.werte.sorg} · Zugang ${st.werte.zug} · Ansehen ${st.werte.ruf}</span></div>
        <h2>Ihr Protokollbuch</h2>
        <p class="typ">${esc(typ.titel)}</p>
        <p>${esc(typ.text)}</p>
        <p>In ${st.treffer} von ${st.gezaehlt} Lagen, für die eine Entscheidung überliefert ist, haben Sie gewählt wie damals.</p>
        <ol class="buch">${st.buch.map(b => `<li><span class="d">${esc(b.datum)} · Weg ${b.wahl}${b.hist ? ' <span class="h">· wie damals</span>' : ""}</span>${esc(b.text)}</li>`).join("")}</ol>
      </article>
      <article class="papier epilog" style="margin-top:18px">
        <h2>Danach</h2>
        ${figur(S.endBild)}
        ${S.epilog.map(p => `<p>${esc(p)}</p>`).join("")}
        <p class="fein">${esc(S.epilogRef)}</p>
        <div class="weiter nodruck">
          <a class="btn leise" href="quellen.html">Alle Quellen</a>
          <button class="btn leise" id="drucken">Protokollbuch drucken</button>
          <button class="btn" id="nochmal">Noch einmal</button>
        </div>
      </article>`;
    document.getElementById("nochmal").onclick = () => { neu(); station(); };
    document.getElementById("drucken").onclick = () => window.print();
    oben();
  }

  document.addEventListener("keydown", e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const n = "1234abcd".indexOf(e.key.toLowerCase());
    if (n < 0) return;
    const b = buehne.querySelector(`.opt[data-k="${n % 4}"]:not([disabled])`);
    if (b) b.click();
  });

  start();
})();
