(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"873N":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("ofXK"),n=i("fXoL");let o=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(e){return new(e||t)},imports:[[a.c]]}),t})()},BzWU:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("LvDl");let n=(()=>{class t{static JsNewGuid(){for(var t="",e=1;e<=32;e++)t+=Math.floor(16*Math.random()).toString(16),8!=e&&12!=e&&16!=e&&20!=e||(t+="-");return t}static setafterdelete(t,e){var i=e.findIndex(e=>e.id==t);return e.splice(i,1),i}static cloneobject(t){var e={};for(var i in t)e[i]=t[i];return e}static deepClone(e){var i={};if(e&&"object"==typeof e)for(var n in e)null!=e[n]&&e.hasOwnProperty(n)&&(i[n]=Object(a.isArray)(e[n])?t.deepcloneobjectarray(e[n]):e[n]&&"object"==typeof e[n]?t.deepClone(e[n]):e[n]);return i}static deepcloneobjectarray(e){for(var i=[],a=0;a<e.length;a++)i.push(t.deepClone(e[a]));return i}static cloneobjectarray(e){for(var i=[],a=0;a<e.length;a++)i.push(t.cloneobject(e[a]));return i}static GetRandomStr(t,e,i){var a="",n=e,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];t&&(n=Math.round(Math.random()*(i-e))+e);for(var s=0;s<n;s++)a+=o[Math.round(Math.random()*(o.length-1))];return a}static RndNum(t){for(var e="",i=0;i<t;i++)e+=Math.floor(10*Math.random());return e}}return t.num=t.RndNum(5),t})()},K7Nf:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("NtM8"),n=i("bRdP"),o=i("fXoL");let s=(()=>{class t extends n.a{constructor(t){super(t,{controller:{name:"inputproduct",servicetype:"businessprocess"}}),this.http=t}getproductbyid(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/getproductbyid",{productid:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}getproduct(){var t,e;return this.http.post((null===(t=this.option.controller)||void 0===t?void 0:t.name)+"/getproduct",{},null===(e=this.option.controller)||void 0===e?void 0:e.servicetype)}addproduct(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/addproduct",t,null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}deleteproduct(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/deleteproduct",{productid:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}updateproduct(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/updateproduct",t,null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}getqualificationbyproduct(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/getqualificationbyproduct",{id:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}getsearchproductlist(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/getsearchproductlist",{searchkey:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(a.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},M3sX:function(t,e,i){"use strict";i.d(e,"e",(function(){return s})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return d}));var a=i("bRdP"),n=i("NtM8"),o=i("fXoL");let s=(()=>{class t extends a.a{constructor(t){super(t,{controller:{name:"testprojects",servicetype:"businessprocess"}}),this.http=t}getprojectsbylevel(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/getprojectsbylevel",{level:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}getprojectsbypid(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/getprojectsbypid",{pid:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}getalltestProject(){var t,e;return this.http.post((null===(t=this.option.controller)||void 0===t?void 0:t.name)+"/getalltestProject",{},null===(e=this.option.controller)||void 0===e?void 0:e.servicetype)}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t extends a.a{constructor(t){super(t,{controller:{name:"qualifications",servicetype:"businessprocess"}}),this.http=t}getqualificationbysearchkey(t,e,i){var a,n;return this.http.post((null===(a=this.option.controller)||void 0===a?void 0:a.name)+"/getqualificationbysearchkey",{companyid:t,project:e,method:i},null===(n=this.option.controller)||void 0===n?void 0:n.servicetype)}addqualification(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/addqualification",t,null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}updatequalification(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/updatequalification",t,null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}deletequalification(t){var e,i;return this.http.post((null===(e=this.option.controller)||void 0===e?void 0:e.name)+"/deletequalification",{qualificationid:t},null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),r=(()=>{class t extends a.a{constructor(t){super(t,{controller:{name:"qualificationsid",servicetype:"businessprocess"}}),this.http=t}getqualifications(t){var e,i;return this.http.post(""+(null===(e=this.option.controller)||void 0===e?void 0:e.name),t,null===(i=this.option.controller)||void 0===i?void 0:i.servicetype)}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t extends a.a{constructor(t){super(t,{controller:{name:"qualificationcompanys",servicetype:"businessprocess"}}),this.http=t}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t extends a.a{constructor(t){super(t,{controller:{name:"domains",servicetype:"businessprocess"}}),this.http=t}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},MOn6:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("XNiG"),n=i("3pM9"),o=i("1G5W"),s=i("ofXK"),l=i("fXoL");let r=(()=>{class t{constructor(t,e,i){this.elementRef=t,this.renderer=e,this.doc=i,this.outerHeight=0,this._unSubject=new a.a}ngAfterViewInit(){this.setSubject()}ngOnDestroy(){var t;this._unSubject.next(),this._unSubject.unsubscribe(),null===(t=this._resizeObserver)||void 0===t||t.disconnect()}setSubject(){Object(n.A)(this.container,this.doc.documentElement).pipe(Object(o.a)(this._unSubject)).subscribe(t=>{this._resizeObserver=t.resizeObserver,this.setAdaptionHeight()})}setAdaptionHeight(){this.renderer.setStyle(this.elementRef.nativeElement,"height",this.doc.documentElement.clientHeight-this.outerHeight+"px")}}return t.\u0275fac=function(e){return new(e||t)(l.Ib(l.l),l.Ib(l.D),l.Ib(s.e))},t.\u0275dir=l.Db({type:t,selectors:[["","au-adaption",""]],inputs:{outerHeight:"outerHeight",container:"container"}}),t})()},OROO:function(t,e,i){"use strict";i.d(e,"a",(function(){return A}));var a=i("3Pt+"),n=i("BzWU"),o=i("K7Nf"),s=i("fXoL"),l=i("M3sX"),r=i("SfH5"),c=i("oJeN"),d=i("P0lq"),h=i("GvSL");let u=(()=>{class t{constructor(t,e){this.service=t,this.qualificationservice=e,this.projectname="",this.SaveQualification=new s.n,this.companyid=1,this.currentquali={},this.type="info",this.firstseldata=[],this.firstsel="0",this.oldfirstsel="0",this.price=0,this.categorydata=[],this.categorysel="0",this.methodname="",this.standardname=""}ngDoCheck(){null!=this.firstsel&&this.firstsel!=this.oldfirstsel&&this.getsceconddata()}ngOnInit(){this.getfirsdata()}getfirsdata(){this.service.getprojectsbylevel(1).subscribe(t=>{this.firstseldata=t,null!=this.firstseldata&&null!=this.firstseldata&&this.firstseldata.length>0&&(this.firstsel=this.firstseldata[0].id)})}getsceconddata(){this.service.getprojectsbypid(this.firstsel+"").subscribe(t=>{this.categorydata=t,null!=this.categorydata&&null!=this.categorydata&&this.categorydata.length>0&&(this.categorysel=this.categorydata[0].id,this.oldfirstsel=this.firstsel)})}get disabled(){return null==this.projectname||""==this.projectname||null==this.standardname||""==this.standardname||!!isNaN(this.price)}savedata(){"add"==this.type?this.qualificationservice.addqualification({qualifiedid:this.firstsel,parentprojectid:this.categorysel,TestProject:this.projectname,testprojectid:null,standardid:null,methodname:this.methodname,standardname:this.standardname,methodid:null,price:this.price,companyid:this.companyid}).subscribe(t=>{null!=this.SaveQualification&&this.SaveQualification.emit(t)}):"edit"==this.type&&this.qualificationservice.updatequalification({qualifiedid:this.firstsel,parentprojectid:this.categorysel,qualificationid:this.currentquali.id+"",standardid:this.currentquali.standardid+"",TestProject:this.projectname,testprojectid:this.currentquali.testprojectid+"",methodname:this.methodname,methodid:this.currentquali.methodid+"",price:this.price,companyid:this.companyid,standardname:this.standardname}).subscribe(t=>{null!=this.SaveQualification&&this.SaveQualification.emit(t)})}setqualificaiotndata(t,e){this.type=t,null!=e&&(this.currentquali=e,this.firstsel=e.firstid+"",this.categorysel=e.secondid+"",this.projectname=e.testproject,this.price=e.price,this.methodname=e.methodname,this.standardname=e.standardname)}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(l.e),s.Ib(l.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-addqualificaiton"]],outputs:{SaveQualification:"SaveQualification"},decls:22,vars:9,consts:[["span","20"],["label","\u8d44\u8d28",3,"data","ngModel","ngModelChange"],["label","\u7c7b\u522b",3,"data","ngModel","ngModelChange"],["label","\u9879\u76ee\u540d\u79f0","required","true",3,"ngModel","ngModelChange"],["label","\u6807\u51c6","required","true",3,"ngModel","ngModelChange"],["label","\u65b9\u6cd5",3,"ngModel","ngModelChange"],["span","15"],["label","\u62a5\u4ef7","required","true",3,"ngModel","ngModelChange"],["justify","center"],["icon","fto-save","type","primary","plain","",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ob(0,"x-row"),s.Ob(1,"x-col",0),s.Ob(2,"x-select",1),s.Vb("ngModelChange",(function(t){return e.firstsel=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(3,"x-row"),s.Ob(4,"x-col",0),s.Ob(5,"x-select",2),s.Vb("ngModelChange",(function(t){return e.categorysel=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"x-row"),s.Ob(7,"x-col",0),s.Ob(8,"x-input",3),s.Vb("ngModelChange",(function(t){return e.projectname=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(9,"x-row"),s.Ob(10,"x-col",0),s.Ob(11,"x-input",4),s.Vb("ngModelChange",(function(t){return e.standardname=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"x-row"),s.Ob(13,"x-col",0),s.Ob(14,"x-input",5),s.Vb("ngModelChange",(function(t){return e.methodname=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(15,"x-row"),s.Ob(16,"x-col",6),s.Ob(17,"x-input",7),s.Vb("ngModelChange",(function(t){return e.price=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(18,"x-row",8),s.Ob(19,"x-col",0),s.Ob(20,"x-button",9),s.Vb("click",(function(){return!e.disabled&&e.savedata()})),s.wc(21,"\u4fdd\u5b58"),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.yb(2),s.ec("data",e.firstseldata)("ngModel",e.firstsel),s.yb(3),s.ec("data",e.categorydata)("ngModel",e.categorysel),s.yb(3),s.ec("ngModel",e.projectname),s.yb(3),s.ec("ngModel",e.standardname),s.yb(3),s.ec("ngModel",e.methodname),s.yb(3),s.ec("ngModel",e.price),s.yb(3),s.ec("disabled",e.disabled))},directives:[r.c,r.a,c.a,a.q,a.t,d.a,a.B,h.a],styles:[""]}),t})();var b=i("x6Xy"),p=i("qMpK"),f=i("l5Yv"),v=i("Prn+"),g=i("/pOC"),m=i("MOn6"),y=i("yO6f"),x=i("ofXK"),q=i("kXfN");const O=["treeCom"],N=["producttreeCom"],w=["qualtable"],C=["addqualificaiton"],k=["rrow"];function M(t,e){if(1&t){const t=s.Pb();s.Ob(0,"x-row"),s.Ob(1,"x-col",28),s.wc(2),s.Nb(),s.Ob(3,"x-col",29),s.Ob(4,"div"),s.Ob(5,"x-input",17),s.Vb("ngModelChange",(function(i){return s.lc(t),e.$implicit.testcount=i})),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"x-col",30),s.Ob(7,"x-link",31),s.Vb("click",(function(){s.lc(t);const i=e.$implicit;return s.Yb().delsel(i)})),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=e.$implicit,i=s.Yb();s.yb(2),s.xc(t.testproject),s.yb(2),s.rc("display",i.inputtestcount),s.yb(1),s.ec("ngModel",t.testcount)}}function j(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div",32),s.Ob(1,"x-link",33),s.Vb("click",(function(){s.lc(t);const i=e.$row,a=s.Yb();return!a.disabled&&a.add("edit",i)})),s.Nb(),s.Ob(2,"x-link",34),s.Vb("click",(function(){s.lc(t);const i=e.$row,a=s.Yb();return!a.disabled&&a.add("delete",i)})),s.Nb(),s.Nb()}if(2&t){const t=s.Yb();s.yb(1),s.ec("disabled",t.disabled),s.yb(1),s.ec("disabled",t.disabled)}}const I=function(){return{label:"\u5168\u9009",value:!0}},S=function(t){return[t]};function V(t,e){if(1&t){const t=s.Pb();s.Ob(0,"x-checkbox",35),s.Vb("ngModelChange",(function(e){return s.lc(t),s.Yb().checkedAll=e}))("ngModelChange",(function(){return s.lc(t),s.Yb().checkedAllChange()})),s.Nb()}if(2&t){const t=s.Yb();s.ec("data",s.gc(3,S,s.fc(2,I)))("ngModel",t.checkedAll)}}const D=function(t){return{actions:t}},P=function(t){return{checkbox:t}};let A=(()=>{class t{constructor(t,e,i,n,o,s,l,r){this.service=t,this.qualservice=e,this.productService=i,this.cdr=n,this.comanyservice=o,this.Qualifis=s,this.msgBox=l,this.msg=r,this.projectsearchkey="",this.methodsearchkey="",this.productsearchkey="",this.addvisible=!1,this.checkedAll=!1,this.formGroup=new a.j({}),this.selquali=[],this.treeLoading=!0,this.tablespan=19,this.treespan=5,this.modify=0,this.tabledata=[],this.tablealldata=[],this.tableindex=1,this.tabletotal=0,this.tablesize=20,this.tablequery={},this.tablecolumns=[{id:"checkbox",type:"checkbox",label:"\u5168\u9009",width:80},{id:"index",label:"\u5e8f\u53f7",width:80,type:"index",flex:1},{id:"testproject",label:"\u9879\u76ee",width:150},{id:"standardname",label:"\u6807\u51c6",width:500},{id:"methodname",label:"\u65b9\u6cd5",width:300},{id:"price",label:"\u4ef7\u683c",width:100}],this.productdata=[],this.producthidden="none",this.qualitreeheight="600px",this.inputtestcount="inline",this.displayselquli="inline",this.companydata=[],this.company=1,this.oldcompany=1}productsearch(){""!=this.productsearchkey?this.productService.getsearchproductlist(this.productsearchkey).subscribe(t=>{this.productdata=t.list}):this.productService.getproduct().subscribe(t=>{this.productdata=t.list})}search(){this.checkedAll=!1,(""!=this.projectsearchkey||this.methodsearchkey)&&this.qualservice.getqualificationbysearchkey(this.company,this.projectsearchkey,this.methodsearchkey).subscribe(t=>{this.tablealldata=t,this.tableindex=1,this.tablequery={filter:[]},this.gettableData()})}add(t,e){this.type=t,"delete"!=t?(this.addvisible=!0,null!=this.addqualificaiton&&(this.addqualificaiton.companyid=this.company),"add"==t&&(e={firstid:616,secondid:617}),this.addqualificaiton.setqualificaiotndata(t,e)):this.msgBox.confirm({title:"\u63d0\u793a",content:`\u6b64\u64cd\u4f5c\u5c06\u6c38\u4e45\u5220\u9664\u6b64\u6761\u6570\u636e\uff1a${null==e?void 0:e.testproject}\uff0c\u662f\u5426\u7ee7\u7eed\uff1f`,type:"warning",callback:t=>{"confirm"===t&&null!=e&&this.qualservice.deletequalification(e.id+"").subscribe(t=>{var i=this.tablealldata.findIndex(t=>t.id==(null==e?void 0:e.id));-1!=i&&this.tablealldata.splice(i,1),-1!=(i=this.tabledata.findIndex(t=>t.id==(null==e?void 0:e.id)))&&(this.tabledata.splice(i,1),this.tabledata=[...this.tabledata])})}})}handleadd(){}delsel(t){var e=this.selquali.findIndex(e=>e.id==t.id);-1!=e&&(this.selquali.splice(e,1),this.gettableData())}refreshdata(){this.gettableData()}checkedAllChange(){this.checkedAll?null!=this.selquali&&this.tabledata.map(t=>{t.checkbox=!0,-1==this.selquali.findIndex(e=>e.id==t.id)&&this.selquali.push(t)}):null!=this.selquali&&this.tabledata.map(t=>{t.checkbox=!1;var e=this.selquali.findIndex(e=>e.id==t.id);-1!=e&&this.selquali.splice(e,1)}),this.tabledata=[...this.tabledata],this.selquali=[...this.selquali]}ngAfterContentInit(){this.getData(!1)}action(t){this.selected=t,this.tableindex=1,this.gettableallData(t.id),this.checkedAll=!1}productaction(t){this.productSelected=t,this.productService.getqualificationbyproduct(t.id).subscribe(t=>{this.tablealldata=t.list,this.tabletotal=t.total,this.tableindex=1,this.tablesize=20,this.tablequery={},this.gettableData(),this.checkedAll=!1})}ngDoCheck(){null!=this.company&&this.company!=this.oldcompany&&(this.tableindex=1,this.tablesize=1e3,this.oldcompany=this.company,null!=this.data&&this.data.length>0&&this.gettableallData(this.data[0].id))}checkproductaction(t){this.productSelected=t,this.productService.getqualificationbyproduct(t.id).subscribe(e=>{var i,a;this.tablealldata=e.list,this.tabletotal=e.total,this.tableindex=1,this.tablesize=20,this.tablequery={},this.gettableData(),t.checked?null===(i=t.testprojects)||void 0===i||i.map(t=>{-1==this.selquali.findIndex(e=>e.id==t.qualificationid)&&this.selquali.push({id:t.qualificationid,testproject:t.testprojectname,methodname:t.methodname,testcount:1})}):null===(a=t.testprojects)||void 0===a||a.map(t=>{var e=this.selquali.findIndex(e=>e.id==t.qualificationid);-1!=e&&this.selquali.splice(e,1)}),this.gettableData()})}ngAfterViewInit(){0==this.modify&&(this.tablecolumns=[{id:"actions",label:"\u64cd\u4f5c",width:80},{id:"testproject",label:"\u9879\u76ee",width:150},{id:"standardname",label:"\u6807\u51c6",width:600},{id:"methodname",label:"\u65b9\u6cd5",width:150},{id:"price",label:"\u4ef7\u683c",width:100}])}ngOnInit(){}get disabled(){return!1}getData(t){"none"!=this.producthidden&&this.productService.getproduct().subscribe(t=>{this.productdata=t.list}),this.service.getList(1,Number.MAX_SAFE_INTEGER).subscribe(e=>{if(this.data=e.list,t){var i=document.getElementById("selcompany"),a=this.tablecolumns.findIndex(t=>"projectsort"===t.id),n=!1;-1!=a&&(this.tablecolumns.splice(a,1),n=!0),-1!=(a=this.tablecolumns.findIndex(t=>"methodname"===t.id))&&(this.tablecolumns.splice(a,1),n=!0),-1!=(a=this.tablecolumns.findIndex(t=>"limitcomment"===t.id))&&(this.tablecolumns.splice(a,1),n=!0),-1!=(a=this.tablecolumns.findIndex(t=>"price"===t.id))&&(this.tablecolumns.splice(a,1),n=!0),n&&(this.tablecolumns=[...this.tablecolumns]),this.cdr.detectChanges(),null!=i&&(i.style.display="inline",this.comanyservice.getList(1,20,{}).subscribe(t=>{this.companydata=t.list,this.company=Number(this.companydata[0].id)}))}else this.gettableallData(this.data[0].id)})}gettableallData(t){this.tableindex=1,this.tablequery={filter:[{field:"id",value:t,operation:"="},{field:"companyid",value:this.company+"",operation:"="}]},this.qualservice.getList(this.tableindex,this.tablesize,this.tablequery).subscribe(t=>{this.tablealldata=t.list,console.log(t),this.tablequery={},this.gettableData()})}SaveQualification(t){if("add"==this.type)null!=this.selquali&&this.selquali.push(t),this.tabledata.push(t),this.tableindex=1,this.gettableallData(t.secondid);else if("edit"==this.type){var e=this.tablealldata.findIndex(e=>e.id==t.id);-1!=e&&(this.tablealldata[e]=n.a.deepClone(t)),-1!=(e=this.tabledata.findIndex(e=>e.id==t.id))&&(this.tabledata[e]=n.a.deepClone(t)),this.tabledata=[...this.tabledata]}this.addvisible=!1}tablerowchange(t){var e=this.selquali.findIndex(e=>e.testprojectid==t.testprojectid&&e.methodid==t.methodid);console.log(t),-1==e&&t.checkbox?this.selquali.push(n.a.cloneobject(t)):!t.checkbox&&e>=0&&this.selquali.splice(e,1),this.selquali=[...this.selquali]}gettableData(){this.selquali.length>0&&this.Qualifis.getqualifications(this.selquali).subscribe(t=>{t.map(t=>{var e=this.selquali.findIndex(e=>e.id==t.id);if(-1!=e){var i=this.selquali[e].testcount;this.selquali[e]=n.a.cloneobject(t),this.selquali[e].testcount=i}}),this.selquali=[...this.selquali]}),this.qualservice.gethandledata(this.tablealldata,this.tableindex,this.tablesize,this.tablequery).subscribe(t=>{this.tabletotal=Number(t.total),this.tabledata=[...t.list],null!=t.list&&t.list.map(t=>{var e=this.selquali.findIndex(e=>e.id==t.id);t.checkbox=-1!=e})})}indexChange(t){this.tablequery={},this.tableindex=t,this.gettableData(),this.checkedAll=!1}sortChange(t){this.tablequery={},this.tablequery.sort=t,this.gettableData()}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(l.e),s.Ib(l.a),s.Ib(o.a),s.Ib(s.h),s.Ib(l.c),s.Ib(l.b),s.Ib(b.c),s.Ib(p.c))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-qualification"]],viewQuery:function(t,e){var i;1&t&&(s.Bc(O,!0),s.Bc(N,!0),s.Bc(w,!0),s.Bc(C,!0),s.Bc(k,!0)),2&t&&(s.ic(i=s.Wb())&&(e.treeCom=i.first),s.ic(i=s.Wb())&&(e.producttreeCom=i.first),s.ic(i=s.Wb())&&(e.qualtable=i.first),s.ic(i=s.Wb())&&(e.addqualificaiton=i.first),s.ic(i=s.Wb())&&(e.rrow=i.first))},inputs:{tablespan:"tablespan",treespan:"treespan",modify:"modify",producthidden:"producthidden",qualitreeheight:"qualitreeheight",inputtestcount:"inputtestcount",displayselquli:"displayselquli"},decls:54,vars:40,consts:[["width","20%","height","30%","placement","top",3,"visible","showConfirm","showCancel","backdropClose","hasBackdrop","visibleChange"],["Seldialog",""],[2,"height","100%","width","100%",3,"SaveQualification"],["addqualificaiton",""],["span","10"],["id","selcompany",2,"display","none"],["label","\u516c\u53f8","direction","row",3,"data","ngModel","ngModelChange"],["span","5"],["label","\u9879\u76ee","direction","row",3,"ngModel","ngModelChange"],["label","\u6d4b\u8bd5\u6807\u51c6","direction","row",3,"ngModel","ngModelChange"],["span","4"],["title","\u67e5\u8be2","icon","ado-search","plain","",2,"color","blue",3,"click"],["icon","ado-plus","plain","",2,"color","blue",3,"click"],[3,"span"],[2,"overflow","scroll"],["au-adaption","","expandedLevel","0",3,"outerHeight","data","activatedId","nodeHeight","activatedChange"],["treeCom",""],[3,"ngModel","ngModelChange"],["title","\u67e5\u8be2\u4ea7\u54c1","icon","ado-search","plain","",2,"color","blue",3,"click"],[2,"overflow","scroll","height","200px"],["au-adaption","","expandedLevel","0",3,"outerHeight","data","activatedId","nodeHeight","activatedChange","checkboxChange"],["producttreeCom",""],["scrollYWidth","50","loading","","adaptionHeight","200",3,"columns","data","size","total","index","query","bodyColumnTpl","headColumnTpl","virtualScroll","sizeChange","indexChange","sortChange","activatedRowChange"],["qualtable",""],[2,"overflow","scroll","height","670px"],[4,"ngFor","ngForOf"],["actionsTpl",""],["headerTpl",""],["span","15"],["span","7"],["span","2"],["icon","ado-close","title","\u5220\u9664",2,"color","red",3,"click"],[1,"au-table-actions"],["icon","fto-edit","title","\u4fee\u6539",3,"disabled","click"],["icon","fto-trash-2","title","\u5220\u9664",3,"disabled","click"],[3,"data","ngModel","ngModelChange"]],template:function(t,e){if(1&t&&(s.Ob(0,"x-dialog",0,1),s.Vb("visibleChange",(function(t){return e.addvisible=t})),s.Ob(2,"app-addqualificaiton",2,3),s.Vb("SaveQualification",(function(t){return e.SaveQualification(t)})),s.Nb(),s.Nb(),s.Ob(4,"x-row"),s.Ob(5,"x-col",4),s.Ob(6,"div",5),s.Ob(7,"x-select",6),s.Vb("ngModelChange",(function(t){return e.company=t})),s.Nb(),s.Nb(),s.Nb(),s.Ob(8,"x-col",7),s.Ob(9,"x-input",8),s.Vb("ngModelChange",(function(t){return e.projectsearchkey=t})),s.Nb(),s.Nb(),s.Ob(10,"x-col",7),s.Ob(11,"x-input",9),s.Vb("ngModelChange",(function(t){return e.methodsearchkey=t})),s.Nb(),s.Nb(),s.Ob(12,"x-col",10),s.Ob(13,"x-button",11),s.Vb("click",(function(){return e.search()})),s.wc(14,"\u67e5\u8be2"),s.Nb(),s.Nb(),s.Ob(15,"x-col",10),s.Ob(16,"x-button",12),s.Vb("click",(function(){return e.add("add")})),s.wc(17,"\u6dfb\u52a0\u9879\u76ee"),s.Nb(),s.Nb(),s.Nb(),s.Ob(18,"x-row"),s.Ob(19,"x-col",13),s.Ob(20,"x-row"),s.Ob(21,"h4"),s.Ob(22,"span"),s.wc(23,"\u8d44\u8d28\u6811"),s.Nb(),s.Nb(),s.Ob(24,"div",14),s.Ob(25,"x-tree",15,16),s.Vb("activatedChange",(function(t){return e.action(t)})),s.Nb(),s.Nb(),s.Nb(),s.Ob(27,"x-row"),s.Ob(28,"div"),s.Ob(29,"x-row"),s.Ob(30,"h4"),s.Ob(31,"span"),s.wc(32,"\u4ea7\u54c1\u6811"),s.Nb(),s.Nb(),s.Nb(),s.Ob(33,"x-row"),s.Ob(34,"x-col",4),s.Ob(35,"x-input",17),s.Vb("ngModelChange",(function(t){return e.productsearchkey=t})),s.Nb(),s.Nb(),s.Ob(36,"x-col",10),s.Ob(37,"x-button",18),s.Vb("click",(function(){return e.productsearch()})),s.wc(38,"\u67e5\u8be2\u4ea7\u54c1"),s.Nb(),s.Nb(),s.Nb(),s.Ob(39,"x-row"),s.Ob(40,"div",19),s.Ob(41,"x-tree",20,21),s.Vb("activatedChange",(function(t){return e.productaction(t)}))("checkboxChange",(function(t){return e.checkproductaction(t)})),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(43,"x-col",13),s.Ob(44,"x-table",22,23),s.Vb("sizeChange",(function(t){return e.tablesize=t}))("indexChange",(function(t){return e.tableindex=t}))("indexChange",(function(t){return e.indexChange(t)}))("sortChange",(function(t){return e.sortChange(t)}))("activatedRowChange",(function(t){return e.tablerowchange(t)})),s.Nb(),s.Nb(),s.Ob(46,"x-col",10),s.Ob(47,"div"),s.Ob(48,"div",24),s.uc(49,M,8,4,"x-row",25),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.uc(50,j,3,2,"ng-template",null,26,s.vc),s.uc(52,V,1,5,"ng-template",null,27,s.vc)),2&t){const t=s.jc(51),i=s.jc(53);s.ec("visible",e.addvisible)("showConfirm",!1)("showCancel",!1)("backdropClose",!1)("hasBackdrop",!1),s.yb(7),s.ec("data",e.companydata)("ngModel",e.company),s.yb(2),s.ec("ngModel",e.projectsearchkey),s.yb(2),s.ec("ngModel",e.methodsearchkey),s.yb(8),s.ec("span",e.treespan),s.yb(5),s.rc("height",e.qualitreeheight),s.yb(1),s.ec("outerHeight",50)("data",e.data)("activatedId",e.activatedId)("nodeHeight",1.875),s.yb(3),s.rc("display",e.producthidden),s.yb(7),s.ec("ngModel",e.productsearchkey),s.yb(6),s.ec("outerHeight",50)("data",e.productdata)("activatedId",e.productactivatedId)("nodeHeight",1.875),s.yb(2),s.ec("span",e.tablespan),s.yb(1),s.ec("columns",e.tablecolumns)("data",e.tabledata)("size",e.tablesize)("total",e.tabletotal)("index",e.tableindex)("query",e.tablequery)("bodyColumnTpl",s.gc(36,D,t))("headColumnTpl",s.gc(38,P,i))("virtualScroll",!0),s.yb(3),s.rc("display",e.displayselquli),s.yb(2),s.ec("ngForOf",e.selquali)}},directives:[f.a,u,r.c,r.a,c.a,a.q,a.t,d.a,h.a,g.a,m.a,y.a,x.s,q.a,v.a],styles:["[_nghost-%COMP%]   .row[_ngcontent-%COMP%]:not(:first-child){margin-top:1rem}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   x-tag[_ngcontent-%COMP%]:not(:first-child){margin-left:1rem}"]}),t})()},aMyR:function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var a=i("ofXK"),n=i("gjGi"),o=i("GvSL"),s=i("oJeN"),l=i("/pOC"),r=i("l5Yv"),c=i("qN0K"),d=i("4h90"),h=i("P0lq"),u=i("Prn+"),b=i("hHlV"),p=i("873N"),f=i("iaau"),v=i("fXoL");let g=(()=>{class t{}return t.\u0275mod=v.Gb({type:t}),t.\u0275inj=v.Fb({factory:function(e){return new(e||t)},imports:[[a.c,n.a,o.b,b.a,p.a,f.a,s.b,l.b,r.b,c.b,d.b,h.b,u.b],a.c]}),t})()},iaau:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("fXoL");let n=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)}}),t})()}}]);