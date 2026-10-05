/* ELUCENIA per-tool fixed module bundle. Preserve all original and method-code notices. */
(function(){"use strict";const factories={"tool-code/lente-intraocular-srk-ii/calculator.js":function(module,exports,require){
'use strict';
// Own versioned method. Arithmetic evidence is not clinical approval.
const methods=require('../../restored-methods.cjs');
const definition=methods.definitions["lente-intraocular-srk-ii"];
const metadata=Object.freeze({id:definition.id,title:definition.title,fields:definition.fields,methodVersion:definition.version,reviewStatus:'needs-review',clinicalValidation:'not-performed'});
module.exports=Object.freeze({metadata,calculate:input=>methods.calculate("lente-intraocular-srk-ii",input)});

},
"restored-methods.cjs":function(module,exports,require){
'use strict';
// Own implementations of explicitly versioned methods. Scientific and language
// review remain unsigned. No treatment, referral or diagnostic verdict is emitted.
// This archived, read-only source inventory is independent of generated public
// metadata. Re-running the content migration must never duplicate input fields.
const original=require('./restoration-original-tools.json');
const definitions={};
const num=(id,label,min,max,unit,extra={})=>[id,label,'num',{min,max,unit,...extra}];
const select=(id,label,opts)=>[id,label,'sel',{opts}];
const yesno=(id,label)=>select(id,label,{'0':'Não','1':'Sim'});
const adult=num('idade','Idade',18,110,'anos');
const context=label=>yesno('contexto',label);
const ok=(a)=>{if(a.contexto!=='1')throw new DomainError('contexto','Confirme a população e as condições de aplicação da versão selecionada.');};
class DomainError extends Error{constructor(field,message){super(message);this.field=field;}}
const f=(value,places=2)=>value.toLocaleString('pt-BR',{minimumFractionDigits:places,maximumFractionDigits:places});
const out=(value,unit,label,raw,places=2)=>({main:[typeof value==='number'?f(value,places):value,unit],label,raw});
function define(id,version,fields,formula,limits,calculate,additionalSources=[]){
 const source=original.find(t=>t.id===id);if(!source)throw Error('Unknown method '+id);
 definitions[id]={id,title:source.title,fields,version,formula,limits,sources:[...source.sources,...additionalSources],calculate};
}
const fields=id=>structuredClone(original.find(t=>t.id===id).fields);
const omit=(id,names)=>fields(id).filter(field=>!names.includes(field[0]));
const cite=(title,url)=>[title,url];

const waterFields=id=>omit(id,['meta']).map(row=>row[0]==='peso'?[...row.slice(0,3),{...row[3],min:30}]:row[0]==='grupo'?[row[0],'Fração estimada de água corporal total','sel',{opts:{'0.6':'0,60','0.5':'0,50','0.45':'0,45'}}]:row);

define('lente-intraocular-srk-ii','SRK II 1988; implementação histórica didática',
 [...fields('lente-intraocular-srk-ii'),context('Uso histórico/didático da fórmula SRK II, sem selecionar um implante para cirurgia?')],
 'P = A ajustado − 2,5 L − 0,9 K. Ajuste A: +3 se L < 20; +2 se L < 21; +1 se L < 22; 0 se L < 24,5; −0,5 nos demais. Refração-alvo: subtrair R × 1,25 se P > 14, ou R se P ≤ 14.',
 'Modelo histórico com precisão limitada, especialmente em olhos curtos e longos. Não integra biometria ou constantes otimizadas modernas e não seleciona uma lente para cirurgia.',
 a=>{ok(a);const adj=a.al<20?3:a.al<21?2:a.al<22?1:a.al<24.5?0:-0.5,pe=a.a+adj-2.5*a.al-0.9*a.k,factor=pe>14?1.25:1,p=pe-factor*(a.alvo??0);return out(p,'D','SRK II 1988 · modelo histórico',{pe,p,adj,factor});},
 [cite('Echo-Son · manual PIROP PAB33 rev.9 · 2020 · seção 10.2','https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf')]);

function calculate(id,input){
 const method=definitions[id];if(!method)return {error:'Método inexistente.',code:'TOOL_NOT_FOUND'};
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe os campos.',code:'INVALID_INPUT'};
 const values={};
 for(const [name,,kind,options={}] of method.fields){const value=input[name];
  if(kind==='chk'){if(typeof value!=='boolean')return {error:'Responda sim ou não.',code:'MISSING_BOOLEAN',field:name};values[name]=value;continue;}
  if(value==null||value===''){if(!options.opt)return {error:'Preencha o campo obrigatório.',code:'REQUIRED_FIELD',field:name};values[name]=null;continue;}
  if(kind==='num'){if(typeof value!=='number'||!Number.isFinite(value))return {error:'Número inválido.',code:'INVALID_INPUT',field:name};if(value<options.min||value>options.max)return {error:'Valor fora do intervalo.',code:'OUT_OF_RANGE',field:name};if(options.integer&&!Number.isInteger(value))return {error:'Informe um número inteiro.',code:'INTEGER_REQUIRED',field:name};}
  else if(typeof value!=='string'||!Object.hasOwn(options.opts||{},value))return {error:'Opção inválida.',code:'INVALID_OPTION',field:name};
  values[name]=value;
 }
 try{const result=method.calculate(values);if(Object.values(result.raw).some(v=>typeof v==='number'&&!Number.isFinite(v)))throw new DomainError('', 'Resultado fora do domínio.');return {id,...result,methodVersion:method.version,clinicalValidation:'not-performed'};}
 catch(error){return {error:error instanceof DomainError?error.message:'Confira o domínio do método.',code:'METHOD_SCOPE',...(error.field?{field:error.field}:{})};}
}
module.exports={definitions,calculate};
},
"restoration-original-tools.json":function(module,exports,require){
module.exports=[{"id":"lente-intraocular-srk-ii","title":"Fórmula SRK II (lente intraocular)","fields":[["a","Constante A da lente","num",{"min":110,"max":125,"step":0.1,"ph":"118,4"}],["al","Comprimento axial","num",{"min":15,"max":40,"step":0.01,"unit":"mm","ph":"23,5"}],["k","Ceratometria média (K)","num",{"min":30,"max":60,"step":0.01,"unit":"D","ph":"44"}],["alvo","Refração pós-operatória desejada","num",{"min":-6,"max":3,"step":0.25,"unit":"D","ph":"0","opt":true}]],"sources":[["Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.","https://doi.org/10.1016/S0886-3350(88)80087-7"]]}];
}},deps={"tool-code/lente-intraocular-srk-ii/calculator.js":{"../../restored-methods.cjs":"restored-methods.cjs"},"restored-methods.cjs":{"./restoration-original-tools.json":"restoration-original-tools.json"},"restoration-original-tools.json":{}},cache={};function load(id){if(cache[id])return cache[id].exports;if(!Object.hasOwn(factories,id))throw Error("Unknown fixed module");const m={exports:{}};cache[id]=m;factories[id](m,m.exports,r=>{const target=deps[id]?.[r];if(!target)throw Error("Unsupported fixed import "+r);return load(target);});return m.exports;}globalThis.EluceniaTool=load("tool-code/lente-intraocular-srk-ii/calculator.js");})();
