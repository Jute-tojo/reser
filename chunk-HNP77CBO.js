import{e as T}from"./chunk-ZTW5YY55.js";import{a as z}from"./chunk-2A5SUI77.js";import{Bb as O,Gb as c,Hb as k,Ib as L,Ob as x,Qb as g,Sa as M,Xa as a,ga as h,gb as v,hb as C,ib as d,jb as I,pa as S,pb as e,qa as y,qb as i,ra as m,rb as l,sa as p,sc as F,tc as b,vb as E,xb as f,yb as _,yc as w}from"./chunk-WTZ3W42X.js";var P=t=>({hidden:t});function D(t,u){if(t&1){let n=E();e(0,"div",18)(1,"img",19),f("click",function(){let r=S(n).$implicit,s=_();return y(s.openImage("modalEl"+s.data.id,r))}),i()()}if(t&2){let n=u.$implicit,o=u.index,r=_();I("active",o===r.currentSlideIndex),a(),O("alt","Slide ",o+1,""),d("src",n,M)}}var j=(()=>{class t{data;currentSlideIndex=0;btnLeft=!1;btnRight=!0;ngOnInit(){this.check()}changeSlide(n){this.currentSlideIndex=n}nextSlide(){this.currentSlideIndex=(this.currentSlideIndex+1)%this.data.images.length,this.check()}prevSlide(){this.currentSlideIndex=(this.currentSlideIndex-1+this.data.images.length)%this.data.images.length,this.check()}check(){this.btnLeft=this.currentSlideIndex!=0,this.btnRight=this.currentSlideIndex!=this.data.images.length-1}modal;openImage(n,o){let r=document.getElementById(n),s=document.getElementById("modalContent"+n);s&&(s.innerHTML=`<img src="${o}" alt="Image" class="w-full h-auto" />`);let V={placement:"center",backdrop:"dynamic",backdropClasses:"bg-gray-900/80 fixed inset-0 z-40",closable:!0,onHide:()=>{},onShow:()=>{},onToggle:()=>{}},H={id:"modalEl",override:!0};this.modal=new z(r,V,H),this.modal.show()}closeImg(){this.modal&&this.modal.hide()}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["carousel"]],inputs:{data:"data"},standalone:!0,features:[x],decls:22,vars:9,consts:[["id","default-carousel","data-carousel","static",1,"relative","w-full","h-full"],[1,"relative","overflow-hidden","rounded-lg","h-60","md:h-80"],["class","hidden duration-700 ease-in-out h-100","data-carousel-item","",3,"active",4,"ngFor","ngForOf"],["type","button","data-carousel-prev","",1,"absolute","top-0","z-30","items-center","justify-center","hidden","h-full","px-4","cursor-pointer","start-0","hover:flex",3,"click","ngClass"],[1,"p-2","rounded-full",2,"background-color","rgba(255, 255, 255, 0.842)"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 32 32","aria-hidden","true","role","presentation","focusable","false",2,"display","block","fill","none","height","12px","width","12px","stroke","currentcolor","stroke-width","5.33333","overflow","visible"],["fill","none","d","M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"],["type","button","data-carousel-next","",1,"absolute","top-0","z-30","items-center","justify-center","hidden","h-full","px-4","cursor-pointer","end-0","group","focus:outline-none","hover:flex",3,"click","ngClass"],["fill","none","d","m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"],["tabindex","-1","aria-hidden","true",1,"fixed","left-0","right-0","top-0","hidden","h-[calc(100%-1rem)]","max-h-full","w-full","overflow-y-auto","overflow-x-hidden","p-4","md:inset-0",2,"z-index","100000"],[1,"relative","w-full","max-w-4xl","max-h-full"],[1,"relative","bg-white","rounded-lg","shadow"],[1,"absolute","z-10","flex","items-start","justify-between","w-full","p-5","rounded-t"],[1,"text-xl","font-semibold","text-gray-900","lg:text-2xl"],["type","button",1,"inline-flex","items-center","justify-center","w-8","h-8","text-sm","text-white","bg-transparent","rounded-lg","ms-auto","hover:bg-gray-200","hover:text-black",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"sr-only"],["data-carousel-item","",1,"hidden","duration-700","ease-in-out","h-100"],[1,"absolute","block","object-cover","w-full","h-full","transition-all","-translate-x-1/2","-translate-y-1/2","rounded-lg","hover:scale-110","sm:block","top-1/2","left-1/2",3,"click","src","alt"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"div",1),v(2,D,2,5,"div",2),i(),e(3,"button",3),f("click",function(){return r.prevSlide()}),e(4,"div",4),m(),e(5,"svg",5),l(6,"path",6),i()()(),p(),e(7,"button",7),f("click",function(){return r.nextSlide()}),e(8,"div",4),m(),e(9,"svg",5),l(10,"path",8),i()()()(),p(),e(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12),l(15,"h3",13),e(16,"button",14),f("click",function(){return r.closeImg()}),m(),e(17,"svg",15),l(18,"path",16),i(),p(),e(19,"span",17),c(20,"Close modal"),i()()(),l(21,"div"),i()()()),o&2&&(a(2),d("ngForOf",r.data.images),a(),d("ngClass",g(5,P,!r.btnLeft)),a(4),d("ngClass",g(7,P,!r.btnRight)),a(4),C("id","modalEl"+r.data.id),a(10),C("id","modalContentmodalEl"+r.data.id))},dependencies:[w,F,b],styles:[".active[_ngcontent-%COMP%]{display:block!important}.indicator[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:solid 1px #ffffff}.indicator[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%]{background-color:var(--primary-color)!important}"]})}return t})();var G=t=>[t];function R(t,u){if(t&1&&(e(0,"div",2)(1,"div",3),m(),e(2,"svg",4),l(3,"path",5),i()(),p(),e(4,"div",6)(5,"div",7)(6,"div",8),c(7,"20"),i(),e(8,"div"),l(9,"img",9),i()()(),e(10,"div",10),l(11,"carousel",11),i(),e(12,"a",12)(13,"div")(14,"h5",13),c(15),i()(),e(16,"p",14),c(17),i(),e(18,"p",15)(19,"b"),c(20),i(),c(21," par nuit"),i()()()),t&2){let n=u.$implicit,o=u.index;a(11),d("data",n),a(),d("routerLink",g(5,G,"/details/"+o)),a(3),k(n.title),a(2),k(n.subtitle),a(3),L("",n.price," Ar")}}var Q=(()=>{class t{data=[];constructor(){}ngOnInit(){}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["card-list"]],inputs:{data:"data"},standalone:!0,features:[x],decls:2,vars:1,consts:[[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-5","2xl:grid-cols-6","gap-7","justify-items-center"],["class","relative w-full bg-white rounded-lg prd",4,"ngFor","ngForOf"],[1,"relative","w-full","bg-white","rounded-lg","prd"],[1,"cursor-pointer","heart",2,"z-index","100","position","absolute","top","15px","left","15px","z-index","37","width","1.5rem"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 32 32","aria-hidden","true","role","presentation","focusable","false",2,"display","block","height","24px","width","24px","stroke-width","2","overflow","visible"],["d","M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"],[2,"z-index","100","position","absolute","top","15px","right","15px","z-index","37"],[1,"flex",2,"background","rgba(255, 255, 255, 0.562)","padding","2px 7px","border-radius","20px"],[1,"font-bold","text-black"],["src","icons/promo.png","alt","promotion",2,"width","1.5rem"],[1,"bg-white","h-100"],[3,"data"],["target","_blank",1,"block","px-2","py-5","bg-white",3,"routerLink"],[1,"overflow-hidden","font-bold","tracking-tight","text-gray-900","text-md","whitespace-nowrap","text-ellipsis"],[1,"overflow-hidden","text-sm","font-normal","text-gray-700","whitespace-nowrap","text-ellipsis"],[1,"text-sm","font-normal","text-gray-700"]],template:function(o,r){o&1&&(e(0,"div",0),v(1,R,22,7,"div",1),i()),o&2&&(a(),d("ngForOf",r.data))},dependencies:[w,b,j,T],styles:[".heart[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#d10404!important;stroke:#d1040467!important}.heart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ffffff8f;stroke:#fff}"]})}return t})();export{Q as a};
