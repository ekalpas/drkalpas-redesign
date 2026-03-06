import"./style-BAaHFR07.js";/* empty css              */import{i as p,c as A}from"./calculator--zBFMLe6.js";p({title:"Anion Gap Calculator",description:"Calculate serum anion gap with albumin correction and delta-delta ratio.",category:"Acid-Base Disorders",keywords:"anion gap, metabolic acidosis, AGMA, delta ratio",datePublished:"2026-03-05",dateModified:"2026-03-05"});A({fields:[{name:"sodium",min:100,max:180},{name:"chloride",min:60,max:140},{name:"bicarb",min:1,max:50},{name:"albumin"}],calculate(e){const r=e.sodium-(e.chloride+e.bicarb),s=e.albumin||4,d=r+2.5*(4-s),c=s<4,a=c?d:r,u=a-12,m=24-e.bicarb,i=m>0?u/m:null;let t,o,n;a>20?(t="Significantly Elevated Anion Gap",o="severe",n="Markedly elevated anion gap suggests a significant anion gap metabolic acidosis (AGMA). Priority differential: lactic acidosis, DKA, toxic ingestion (methanol, ethylene glycol), or uremia. Check lactate, ketones, BUN/Cr, and consider osmol gap."):a>12?(t="Elevated Anion Gap",o="moderate",n="Elevated anion gap suggests an anion gap metabolic acidosis (AGMA). Consider the GOLDMARK differential: Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis."):a>=8?(t="Normal Anion Gap",o="normal",n="Normal anion gap (8-12 mEq/L). If metabolic acidosis is present with a normal AG, consider non-anion gap metabolic acidosis (NAGMA): diarrhea, RTA, normal saline infusion, ureteral diversion."):(t="Low Anion Gap",o="mild",n="Low anion gap (< 8 mEq/L). May be seen in hypoalbuminemia, bromide or lithium toxicity, IgG myeloma, or laboratory error. Verify with albumin-corrected AG.");let l="";return i!==null&&a>12&&(i<1?l="Delta-delta < 1: Suggests a concurrent non-anion gap metabolic acidosis (mixed AGMA + NAGMA).":i<=2?l="Delta-delta 1-2: Consistent with a pure anion gap metabolic acidosis.":l="Delta-delta > 2: Suggests a concurrent metabolic alkalosis or pre-existing elevated bicarbonate (e.g., chronic respiratory acidosis with compensation)."),{ag:r,correctedAG:d.toFixed(1),effectiveAG:a.toFixed(1),usesCorrected:c,category:t,severity:o,interpretation:n,deltaRatio:i!==null?i.toFixed(2):null,deltaInterpretation:l}},resultTemplate(e){return`
          <div class="result-value">${e.effectiveAG} mEq/L</div>
          <div class="result-label">${e.category}${e.usesCorrected?" (Albumin-Corrected)":""}</div>
          <div class="result-interpretation"><p>${e.interpretation}</p></div>
          ${e.deltaRatio?`
          <div class="result-details">
            <dl>
              <dt>Uncorrected Anion Gap</dt>
              <dd>${e.ag} mEq/L</dd>
              ${e.usesCorrected?`<dt>Albumin-Corrected AG</dt><dd>${e.correctedAG} mEq/L</dd>`:""}
              <dt>Delta-Delta Ratio</dt>
              <dd>${e.deltaRatio}</dd>
            </dl>
            <p style="margin-top:8px;font-size:var(--text-sm);color:var(--color-text-secondary)">${e.deltaInterpretation}</p>
          </div>`:""}
        `}});
