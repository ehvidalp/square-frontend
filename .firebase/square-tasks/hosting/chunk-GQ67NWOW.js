import{A as a,B as le,C as V,D,E as ue,F as w,G as de,H as Fe,I as d,J as c,K as xe,L as k,M as g,N as m,O as $,P as W,Q as Se,R as Ie,S as Oe,T as ce,V as Pe,W as he,X as fe,Y as pe,Z as E,_ as F,a as o,b as l,c as De,d as be,da as Ne,f as Me,fa as ke,g as Ae,ga as Te,ha as f,ia as _,j as H,ja as ge,k as b,ka as je,l as N,m as ne,ma as Re,n as M,o as we,p as re,pa as x,q as A,qa as qe,r as se,s as h,t as L,u as y,ua as Ge,v as C,w as Ee,x as u,y as oe,z as ae}from"./chunk-KWE7BIMZ.js";var Ze=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(le),a(oe))},e.\u0275dir=h({type:e});let n=e;return n})(),ct=(()=>{let e=class e extends Ze{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=Ee(e)))(s||e)}})(),e.\u0275dir=h({type:e,features:[D]});let n=e;return n})(),ee=new M("");var ht={provide:ee,useExisting:b(()=>te),multi:!0};function ft(){let n=ge()?ge().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var pt=new M(""),te=(()=>{let e=class e extends Ze{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ft())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(le),a(oe),a(pt,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&g("input",function(v){return s._handleInput(v.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(v){return s._compositionEnd(v.target.value)})},features:[E([ht]),D]});let n=e;return n})();var Qe=new M(""),Xe=new M("");function Ye(n){return n!=null}function Ke(n){return Ne(n)?be(n):n}function Je(n){let e={};return n.forEach(i=>{e=i!=null?o(o({},e),i):e}),Object.keys(e).length===0?null:e}function et(n,e){return e.map(i=>i(n))}function gt(n){return!n.validate}function tt(n){return n.map(e=>gt(e)?e:i=>e.validate(i))}function mt(n){if(!n)return null;let e=n.filter(Ye);return e.length==0?null:function(i){return Je(et(i,e))}}function _e(n){return n!=null?mt(tt(n)):null}function _t(n){if(!n)return null;let e=n.filter(Ye);return e.length==0?null:function(i){let t=et(i,e).map(Ke);return Ae(t).pipe(Me(Je))}}function ve(n){return n!=null?_t(tt(n)):null}function Be(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function vt(n){return n._rawValidators}function yt(n){return n._rawAsyncValidators}function me(n){return n?Array.isArray(n)?n:[n]:[]}function Z(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ue(n,e){let i=me(e);return me(n).forEach(r=>{Z(i,r)||i.push(r)}),i}function He(n,e){return me(e).filter(i=>!Z(n,i))}var Q=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=_e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ve(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},O=class extends Q{get formDirective(){return null}get path(){return null}},B=class extends Q{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},X=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},fi=l(o({},Ct),{"[class.ng-submitted]":"isSubmitted"}),it=(()=>{let e=class e extends X{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(B,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[D]});let n=e;return n})(),pi=(()=>{let e=class e extends X{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(O,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[D]});let n=e;return n})();var T="VALID",z="INVALID",S="PENDING",j="DISABLED",P=class{},Y=class extends P{constructor(e,i){super(),this.value=e,this.source=i}},q=class extends P{constructor(e,i){super(),this.pristine=e,this.source=i}},G=class extends P{constructor(e,i){super(),this.touched=e,this.source=i}},I=class extends P{constructor(e,i){super(),this.status=e,this.source=i}};function nt(n){return(ie(n)?n.validators:n)||null}function Vt(n){return Array.isArray(n)?_e(n):n||null}function rt(n,e){return(ie(e)?e.asyncValidators:n)||null}function Dt(n){return Array.isArray(n)?ve(n):n||null}function ie(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function bt(n,e,i){let t=n.controls;if(!(e?Object.keys(t):t).length)throw new H(1e3,"");if(!t[i])throw new H(1001,"")}function Mt(n,e,i){n._forEachChild((t,r)=>{if(i[r]===void 0)throw new H(1002,"")})}var K=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=f(()=>this.statusReactive()),this.statusReactive=V(void 0),this._pristine=f(()=>this.pristineReactive()),this.pristineReactive=V(!0),this._touched=f(()=>this.touchedReactive()),this.touchedReactive=V(!1),this._events=new De,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return _(this.statusReactive)}set status(e){_(()=>this.statusReactive.set(e))}get valid(){return this.status===T}get invalid(){return this.status===z}get pending(){return this.status==S}get disabled(){return this.status===j}get enabled(){return this.status!==j}get pristine(){return _(this.pristineReactive)}set pristine(e){_(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return _(this.touchedReactive)}set touched(e){_(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return Z(this._rawValidators,e)}hasAsyncValidator(e){return Z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(o({},e),{sourceControl:t})),i&&e.emitEvent!==!1&&this._events.next(new G(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),i&&e.emitEvent!==!1&&this._events.next(new G(!1,t))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(o({},e),{sourceControl:t})),i&&e.emitEvent!==!1&&this._events.next(new q(!1,t))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),i&&e.emitEvent!==!1&&this._events.next(new q(!0,t))}markAsPending(e={}){this.status=S;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new I(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(o({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(r=>{r.disable(l(o({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,t)),this._events.next(new I(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(o({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(t=>{t.enable(l(o({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(o({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===S)&&this._runAsyncValidator(t,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,i)),this._events.next(new I(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(o({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=S,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let t=Ke(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((t,r)=>t&&t._find(r),this)}getError(e,i){let t=i?this.get(i):this;return t&&t.errors?t.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new I(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,t)}_initObservables(){this.valueChanges=new u,this.statusChanges=new u}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(S)?S:this._anyControlsHaveStatus(z)?z:T}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new q(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new G(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ie(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Vt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Dt(this._rawAsyncValidators)}},J=class extends K{constructor(e,i,t){super(nt(i),rt(t,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,t={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Mt(this,!0,e),Object.keys(e).forEach(t=>{bt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,t)=>(e[t]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,t)=>t._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let t=this.controls[i];t&&e(t,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,t]of Object.entries(this.controls))if(this.contains(i)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,t,r)=>((t.enabled||this.disabled)&&(i[r]=t.value),i))}_reduceChildren(e,i){let t=e;return this._forEachChild((r,s)=>{t=i(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ye=new M("CallSetDisabledState",{providedIn:"root",factory:()=>Ce}),Ce="always";function At(n,e){return[...e.path,n]}function st(n,e,i=Ce){ot(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Et(n,e),xt(n,e),Ft(n,e),wt(n,e)}function Le(n,e){n.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function wt(n,e){if(e.valueAccessor.setDisabledState){let i=t=>{e.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(i),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(i)})}}function ot(n,e){let i=vt(n);e.validator!==null?n.setValidators(Be(i,e.validator)):typeof i=="function"&&n.setValidators([i]);let t=yt(n);e.asyncValidator!==null?n.setAsyncValidators(Be(t,e.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Le(e._rawValidators,r),Le(e._rawAsyncValidators,r)}function Et(n,e){e.valueAccessor.registerOnChange(i=>{n._pendingValue=i,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&at(n,e)})}function Ft(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&at(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function at(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function xt(n,e){let i=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};n.registerOnChange(i),e._registerOnDestroy(()=>{n._unregisterOnChange(i)})}function St(n,e){n==null,ot(n,e)}function It(n,e){if(!n.hasOwnProperty("model"))return!1;let i=n.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Ot(n){return Object.getPrototypeOf(n.constructor)===ct}function Pt(n,e){n._syncPendingControls(),e.forEach(i=>{let t=i.control;t.updateOn==="submit"&&t._pendingChange&&(i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Nt(n,e){if(!e)return null;Array.isArray(e);let i,t,r;return e.forEach(s=>{s.constructor===te?i=s:Ot(s)?t=s:r=s}),r||t||i||null}var kt={provide:O,useExisting:b(()=>Tt)},R=Promise.resolve(),Tt=(()=>{let e=class e extends O{get submitted(){return _(this.submittedReactive)}constructor(t,r,s){super(),this.callSetDisabledState=s,this._submitted=f(()=>this.submittedReactive()),this.submittedReactive=V(!1),this._directives=new Set,this.ngSubmit=new u,this.form=new J({},_e(t),ve(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){R.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),st(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){R.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){R.then(()=>{let r=this._findContainer(t.path),s=new J({});St(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){R.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){R.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Pt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Qe,10),a(Xe,10),a(ye,8))},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&g("submit",function(v){return s.onSubmit(v)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[E([kt]),D]});let n=e;return n})();function $e(n,e){let i=n.indexOf(e);i>-1&&n.splice(i,1)}function We(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var jt=class extends K{constructor(e=null,i,t){super(nt(i),rt(t,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ie(i)&&(i.nonNullable||i.initialValueIsDefault)&&(We(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){We(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt={provide:B,useExisting:b(()=>Ve)},ze=Promise.resolve(),Ve=(()=>{let e=class e extends B{constructor(t,r,s,p,v,dt){super(),this._changeDetectorRef=v,this.callSetDisabledState=dt,this.control=new jt,this._registered=!1,this.name="",this.update=new u,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Nt(this,p)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),It(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){st(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ze.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,s=r!==0&&Te(r);ze.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?At(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(a(O,9),a(Qe,10),a(Xe,10),a(ee,10),a(ke,8),a(ye,8))},e.\u0275dir=h({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[E([Rt]),D,L]});let n=e;return n})(),mi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=se({type:e}),e.\u0275inj=ne({});let n=e;return n})();var lt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:ye,useValue:t.callSetDisabledState??Ce}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=se({type:e}),e.\u0275inj=ne({imports:[qt]});let n=e;return n})();var Vi=(()=>{class n{squareState=V({email:"",tasks:[]});router=re(Ge);squareStateData=f(()=>this.squareState());setEmail(i){this.squareState.update(t=>l(o({},t),{email:i}))}setTasks(i){this.squareState.update(t=>l(o({},t),{tasks:i}))}addTask(i){this.squareState.update(t=>l(o({},t),{tasks:[...t.tasks,i]}))}updateTask(i){this.squareState.update(t=>l(o({},t),{tasks:t.tasks.map(r=>r.title===i.title?i:r)}))}deleteTask(i){this.squareState.update(t=>l(o({},t),{tasks:t.tasks.filter(r=>r.title!==i.title)}))}resetSquareState(){this.squareState.update(()=>({email:"",tasks:[]})),this.router.navigate(["/login"])}static \u0275fac=function(t){return new(t||n)};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ut=["*"],xi=(()=>{class n{squareButton={style:"primary",size:"full",uppercase:!1};squaredButtonClasses=f(()=>[`square-btn__${this.squareButton.style}`,`square-btn__${this.squareButton.size}`,this.squareButton.uppercase?"text-uppercase":"text-lowercase"]);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=A({type:n,selectors:[["app-square-button"]],inputs:{squareButton:"squareButton"},standalone:!0,features:[F],ngContentSelectors:Ut,decls:2,vars:3,consts:[[3,"type","ngClass","disabled"]],template:function(t,r){t&1&&($(),d(0,"button",0),W(1),c()),t&2&&w("type",r.squareButton.type||"button")("ngClass",r.squaredButtonClasses())("disabled",r.squareButton.disabled)},dependencies:[x,je],styles:["[_nghost-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_clickAnimation{0%{transform:scale(1)}50%{transform:scale(.95)}to{transform:scale(1)}}button[_ngcontent-%COMP%]{cursor:pointer;border:1px solid transparent;padding:.5rem 1rem;font-family:Open Sans;font-weight:600;outline:none;box-shadow:2px 2px #000c}button[_ngcontent-%COMP%]:active{animation:_ngcontent-%COMP%_clickAnimation .3s}button[_ngcontent-%COMP%]:disabled{pointer-events:none;background:var(--gray-color);color:var(--dark-color)}.square-btn__primary[_ngcontent-%COMP%]{background:var(--primary-color)}.square-btn__minimal[_ngcontent-%COMP%]{font-family:Open Sans;font-weight:700;box-sizing:border-box;box-shadow:2px 2px #000c;font-size:var(--font-xs);background:var(--white);border:1px solid var(--dark-color);display:flex;justify-content:center;align-items:center;padding:.25rem .5rem}.square-btn__full[_ngcontent-%COMP%]{width:100%;height:3.75rem;font-size:var(--font-sm);border:1px solid var(--dark-color)}"],changeDetection:0})}return n})();var Ht=["dialog"],Lt=["*"],Ri=(()=>{class n{squareDialog;showDialog=!1;actionDialog=new u;ngOnChanges(i){i.showDialog&&this.onDialog(i.showDialog.currentValue)}onDialog(i){if(this.squareDialog){if(!i&&this.squareDialog&&this.squareDialog?.nativeElement){this.actionDialog.emit("close"),this.squareDialog.nativeElement.close();return}this.squareDialog.nativeElement.showModal()}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=A({type:n,selectors:[["app-square-dialog"]],viewQuery:function(t,r){if(t&1&&Se(Ht,5),t&2){let s;Ie(s=Oe())&&(r.squareDialog=s.first)}},inputs:{showDialog:"showDialog"},outputs:{actionDialog:"actionDialog"},standalone:!0,features:[L,F],ngContentSelectors:Lt,decls:6,vars:0,consts:[["dialog",""],[1,"square-dialog"],["type","button",1,"square-dialog__close",3,"click"],["src","/assets/svg/close.svg","alt","close"],[1,"square-dialog__container"]],template:function(t,r){if(t&1){let s=k();$(),d(0,"dialog",1,0)(2,"button",2),g("click",function(){return y(s),C(r.onDialog(!1))}),xe(3,"img",3),c(),d(4,"section",4),W(5),c()()}},dependencies:[x],styles:["[_nghost-%COMP%]{overflow:hidden}dialog[_ngcontent-%COMP%]{border:none;animation:_ngcontent-%COMP%_fade-out .7s ease-out;overflow-x:hidden;height:23rem;width:25rem}dialog[open][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in .7s ease-out}dialog[open][_ngcontent-%COMP%]::backdrop{animation:_ngcontent-%COMP%_backdrop-fade-in .7s ease-out forwards}.square-dialog__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0rem;cursor:pointer;outline:none;background-color:transparent;border:none}.square-dialog__container[_ngcontent-%COMP%]{box-sizing:border-box;padding:1rem;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}@media (max-width: 640px){dialog[_ngcontent-%COMP%]{width:100%;height:100%}dialog[open][_ngcontent-%COMP%]{animation:none}dialog[open][_ngcontent-%COMP%]::backdrop{animation:none}}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fade-out{0%{opacity:1}to{opacity:0}}@keyframes _ngcontent-%COMP%_backdrop-fade-in{0%{background-color:#0000}to{background-color:#000000b3}}"],changeDetection:0})}return n})();function $t(n,e){if(n&1&&(d(0,"span",3),ce(1),c()),n&2){let i=m(2);ae(),Pe(" ",i.errorValidation==="mail"?"Email is not valid":"Field is required",`
`)}}function Wt(n,e){if(n&1){let i=k();d(0,"input",1),pe("ngModelChange",function(r){y(i);let s=m();return fe(s.valueField,r)||(s.valueField=r),C(r)}),g("ngModelChange",function(r){y(i);let s=m();return C(s.onInputChange(r))}),c(),ue(1,$t,2,1,"span",2)}if(n&2){let i,t,r=m();he("ngModel",r.valueField),w("placeholder",(i=r.fieldOptions.placeholder)!==null&&i!==void 0?i:"")("type",(t=r.fieldOptions.type)!==null&&t!==void 0?t:"text"),ae(),w("ngIf",r.errorValidation)}}function zt(n,e){if(n&1){let i=k();d(0,"textarea",4),pe("ngModelChange",function(r){y(i);let s=m();return fe(s.valueField,r)||(s.valueField=r),C(r)}),g("ngModelChange",function(r){y(i);let s=m();return C(s.onInputChange(r))}),c()}if(n&2){let i,t=m();he("ngModel",t.valueField),w("placeholder",(i=t.fieldOptions.placeholder)!==null&&i!==void 0?i:"")}}function Zt(n,e){n&1&&(d(0,"p"),ce(1,"Set typeField "),c())}var zi=(()=>{class n{fieldOptions={typeField:"input"};valueField=null;valueFieldChange=new u;validationError=new u;errorValidation=null;onChange=()=>{};onTouched=()=>{};writeValue(i){this.valueField=i,this.validateField()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}onInputChange(i){this.valueField=i,this.onChange(this.valueField),this.valueFieldChange.emit(this.valueField),this.validateField()}validateField(){if(this.fieldOptions.validations?.includes("email")){let i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,t=!this.valueField||i.test(this.valueField);this.errorValidation=t?"":"mail",this.validationError.emit(!t);return}if(this.fieldOptions.validations?.includes("required")){let i=(this.valueField?.length??0)>0;this.errorValidation=i?"":"required",this.validationError.emit(!i);return}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=A({type:n,selectors:[["app-square-field"]],inputs:{fieldOptions:"fieldOptions",valueField:"valueField"},outputs:{valueFieldChange:"valueFieldChange",validationError:"validationError"},standalone:!0,features:[E([{provide:ee,useExisting:b(()=>n),multi:!0}]),F],decls:3,vars:1,consts:[[1,"square-field","square-field__textarea",3,"ngModel","placeholder"],[1,"square-field",3,"ngModelChange","ngModel","placeholder","type"],["class","square-field__msj-error",4,"ngIf"],[1,"square-field__msj-error"],[1,"square-field","square-field__textarea",3,"ngModelChange","ngModel","placeholder"]],template:function(t,r){if(t&1&&ue(0,Wt,2,4)(1,zt,1,2,"textarea",0)(2,Zt,2,0,"p"),t&2){let s;Fe((s=r.fieldOptions.typeField)==="input"?0:s==="textarea"?1:2)}},dependencies:[x,Re,lt,te,it,Ve],styles:[".square-field[_ngcontent-%COMP%]{width:100%;border:1px solid var(--gray-color);height:3.3rem;background:var(--secondary-color);color:var(--gray-color);padding:0 .5rem;font-family:Roboto Mono;font-size:var(--font-xs);box-sizing:border-box}.square-field[_ngcontent-%COMP%]::placeholder{color:var(--gray-color)}.square-field[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-color);color:var(--dark-color)}.square-field__msj-error[_ngcontent-%COMP%]{display:block;box-sizing:border-box;margin:.5rem 0;color:var(--primary-color);font-size:var(--font-xxs);font-family:Roboto Mono;font-weight:400}.square-field__textarea[_ngcontent-%COMP%]{height:7rem;padding-top:.5rem}"],changeDetection:0})}return n})();var ut={production:!0,squareApiUrl:"http://localhost:3002"};var Ki=(()=>{class n{http;squareApiUrl=ut.squareApiUrl;constructor(i){this.http=i}get(i){return this.http.get(`${this.squareApiUrl}/${i}`)}post(i,t){return this.http.post(`${this.squareApiUrl}/${i}`,t)}put(i,t){return this.http.put(`${this.squareApiUrl}/${i}`,t)}delete(i){return this.http.delete(`${this.squareApiUrl}/${i}`)}static \u0275fac=function(t){return new(t||n)(we(qe))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();export{it as a,pi as b,Tt as c,Ve as d,mi as e,lt as f,Ki as g,Vi as h,xi as i,Ri as j,zi as k};
