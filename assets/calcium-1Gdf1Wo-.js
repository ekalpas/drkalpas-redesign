import"./style-BAaHFR07.js";/* empty css              */import{i as o,c as d}from"./calculator--zBFMLe6.js";o({title:"Corrected Calcium Calculator",description:"Adjust serum calcium for albumin levels using the Payne formula.",category:"Electrolyte Disorders",keywords:"corrected calcium, albumin, hypocalcemia, calcium correction",datePublished:"2026-03-05",dateModified:"2026-03-05"});d({fields:[{name:"calcium",min:1,max:20},{name:"albumin",min:.5,max:6}],calculate(e){const i=e.calcium+.8*(4-e.albumin);let a,r,c;i<8.5?(a="Hypocalcemia",r=i<7?"critical":"severe",c=i<7?"Severe hypocalcemia (corrected Ca < 7.0 mg/dL). Risk of cardiac arrhythmias, seizures, and tetany. Consider IV calcium gluconate urgently. Check ionized calcium, magnesium, phosphorus, PTH, and vitamin D.":"Corrected calcium below normal range. Evaluate for vitamin D deficiency, hypoparathyroidism, chronic kidney disease, or magnesium depletion. Obtain ionized calcium for confirmation."):i<=10.5?(a="Normal",r="normal",c="Corrected calcium is within the normal range (8.5-10.5 mg/dL). No calcium abnormality detected after albumin correction."):(a="Hypercalcemia",r=i>14?"critical":i>12?"severe":"moderate",c=i>14?"Severe hypercalcemia (corrected Ca > 14.0 mg/dL). Hypercalcemic crisis. Requires aggressive IV fluid resuscitation, calcitonin, and consider bisphosphonate or denosumab. Evaluate for malignancy or severe primary hyperparathyroidism.":i>12?"Moderate-severe hypercalcemia. Evaluate for primary hyperparathyroidism, malignancy (PTHrP, bone mets), granulomatous disease, or medication effects. Consider IV hydration.":"Mild hypercalcemia (10.5-12.0 mg/dL). Most commonly due to primary hyperparathyroidism. Check PTH, phosphorus, vitamin D, and 24-hour urine calcium.");const t=(.8*(4-e.albumin)).toFixed(1);return{corrected:i.toFixed(1),category:a,severity:r,interpretation:c,measured:e.calcium,albumin:e.albumin,correction:t}},resultTemplate(e){return`
          <div class="result-value">${e.corrected} mg/dL</div>
          <div class="result-label">${e.category}</div>
          <div class="result-interpretation"><p>${e.interpretation}</p></div>
          <div class="result-details">
            <dl>
              <dt>Measured Calcium</dt>
              <dd>${e.measured} mg/dL</dd>
              <dt>Albumin</dt>
              <dd>${e.albumin} g/dL</dd>
              <dt>Correction Applied</dt>
              <dd>${e.correction>0?"+":""}${e.correction} mg/dL</dd>
            </dl>
          </div>
        `}});
