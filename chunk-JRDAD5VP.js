import{a as F,b as E}from"./chunk-3RETBU2J.js";import"./chunk-WZBX67VH.js";import{a as I}from"./chunk-PUFDDUVI.js";import"./chunk-WZCDW6UZ.js";import{a as w}from"./chunk-MHYODFT6.js";import"./chunk-F6ALSF6O.js";import{Bc as M,Hb as l,Ib as _,Pb as O,Rb as S,Ta as p,Ub as f,Vb as u,Ya as o,Za as s,ga as y,hb as g,jb as r,qa as h,qb as n,ra as x,rb as c,sb as m,uc as P,vc as k,wb as C,yb as b,zb as v}from"./chunk-KF4CC2I3.js";var U=t=>({active:t});function T(t,d){if(t&1){let e=C();n(0,"div",10),b("click",function(){let a=h(e).$implicit,j=v(2);return x(j.chooseCategory(a))}),m(1,"img",6),f(2,"baseUrl"),n(3,"h3",11),l(4),c()()}if(t&2){let e=d.$implicit,i=v(2);r("ngClass",S(6,U,i.activeChildren==e.id)),o(),r("src",u(2,4,e.icone),p)("alt",e.libelle),o(3),_(e.libelle)}}function B(t,d){if(t&1&&(n(0,"div",4)(1,"div",5),m(2,"img",6),f(3,"baseUrl"),n(4,"span",7),l(5),c()(),n(6,"div",8),g(7,T,5,8,"div",9),c()()),t&2){let e=d.$implicit;o(2),r("src",u(3,4,e.icone),p)("alt",e.libelle),o(3),_(e.libelle),o(2),r("ngForOf",e.child_categories)}}var J=(()=>{class t{category;activity;cookieService;categories=[];sous_category;activeChildren=-1;constructor(e,i,a){this.category=e,this.activity=i,this.cookieService=a}ngOnInit(){this.activeChildren=this.cookieService.get("activity")?JSON.parse(this.cookieService.get("activity"))?.category_id:-1,this.activity.step1.client_id=parseInt(this.cookieService.get("client_id"))??0,this.category.getAll().subscribe(e=>{this.categories=e})}chooseCategory(e){this.activeChildren=e.id,this.sous_category=e,this.activity.step1.category_id=e.id}static \u0275fac=function(i){return new(i||t)(s(E),s(I),s(w))};static \u0275cmp=y({type:t,selectors:[["app-presentation"]],standalone:!0,features:[O],decls:5,vars:1,consts:[[1,"text-center"],[1,"text-3xl","font-semibold"],[1,"grid","grid-cols-3","gap-4"],["class","mt-4",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"flex","items-center","px-1","py-1","align-middle","rounded-lg","bg-slate-100"],[1,"w-7",3,"src","alt"],[1,"text-xs","font-bold","uppercase","ms-2"],[1,"flex","flex-col"],["class","flex justify-start gap-4 py-4 border-b-2 cursor-pointer border-b-slate-100 sous_category",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"flex","justify-start","gap-4","py-4","border-b-2","cursor-pointer","border-b-slate-100","sous_category",3,"click","ngClass"],[1,"text-sm","text"]],template:function(i,a){i&1&&(n(0,"div",0)(1,"h1",1),l(2,"Laquelle de ces cat\xE9gories d\xE9crit le mieux votre activit\xE9 ?"),c(),n(3,"div",2),g(4,B,8,6,"div",3),c()()),i&2&&(o(4),r("ngForOf",a.categories))},dependencies:[M,P,k,F],styles:['.sous_category[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]:after{width:100%;background:#000}.sous_category[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{font-weight:500}.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:after{width:100%;background:#000}.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:500}.text[_ngcontent-%COMP%]{position:relative;display:inline-block}.text[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:0;width:0;height:5px;background:transparent;border-radius:50%;border-bottom:1px solid #000;transition:width .3s ease}']})}return t})();export{J as PresentationComponent};
