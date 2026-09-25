/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"lente-intraocular-srk-ii","title":"Fórmula SRK II (lente intraocular)","fields":[["a","Constante A da lente","num",{"min":110,"max":125,"step":0.1,"ph":"118,4"}],["al","Comprimento axial","num",{"min":15,"max":40,"step":0.01,"unit":"mm","ph":"23,5"}],["k","Ceratometria média (K)","num",{"min":30,"max":60,"step":0.01,"unit":"D","ph":"44"}],["alvo","Refração pós-operatória desejada","num",{"min":-6,"max":3,"step":0.25,"unit":"D","ph":"0","opt":true}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
