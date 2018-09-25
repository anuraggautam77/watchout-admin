webpackJsonp([0],[/* 0 */
/***/
function(e,t,n){var r=n(4),a=n(35),i=n(23),o=n(24),s=n(31),u=function(e,t,n){var l,d,c,f,h=e&u.F,m=e&u.G,_=e&u.S,p=e&u.P,y=e&u.B,v=m?r:_?r[t]||(r[t]={}):(r[t]||{}).prototype,g=m?a:a[t]||(a[t]={}),M=g.prototype||(g.prototype={});m&&(n=t);for(l in n)
// contains in native
d=!h&&v&&void 0!==v[l],
// export native or passed
c=(d?v:n)[l],
// bind timers to global for call from export context
f=y&&d?s(c,r):p&&"function"==typeof c?s(Function.call,c):c,
// extend global
v&&o(v,l,c,e&u.U),
// export
g[l]!=c&&i(g,l,f),p&&M[l]!=c&&(M[l]=c)};r.core=a,
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library`
e.exports=u},/* 1 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){!function(t,n){e.exports=n()}(0,function(){"use strict";function t(){return Sr.apply(null,arguments)}function r(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function a(e){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function i(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}function o(e){return void 0===e}function s(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function u(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function l(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n in t)d(t,n)&&(e[n]=t[n]);return d(t,"toString")&&(e.toString=t.toString),d(t,"valueOf")&&(e.valueOf=t.valueOf),e}function f(e,t,n,r){return wt(e,t,n,r,!0).utc()}function h(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function m(e){return null==e._pf&&(e._pf=h()),e._pf}function _(e){if(null==e._isValid){var t=m(e),n=Tr.call(t.parsedDateParts,function(e){return null!=e}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return r;e._isValid=r}return e._isValid}function p(e){var t=f(NaN);return null!=e?c(m(t),e):m(t).userInvalidated=!0,t}function y(e,t){var n,r,a;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=m(t)),o(t._locale)||(e._locale=t._locale),Er.length>0)for(n=0;n<Er.length;n++)r=Er[n],a=t[r],o(a)||(e[r]=a);return e}
// Moment prototype object
function v(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
!1===jr&&(jr=!0,t.updateOffset(this),jr=!1)}function g(e){return e instanceof v||null!=e&&null!=e._isAMomentObject}function M(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function b(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=M(t)),n}
// compare two arrays, return the number of differences
function L(e,t,n){var r,a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0;for(r=0;r<a;r++)(n&&e[r]!==t[r]||!n&&b(e[r])!==b(t[r]))&&o++;return o+i}function k(e){!1===t.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function Y(e,n){var r=!0;return c(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),r){for(var a,i=[],o=0;o<arguments.length;o++){if(a="","object"==typeof arguments[o]){a+="\n["+o+"] ";for(var s in arguments[0])a+=s+": "+arguments[0][s]+", ";a=a.slice(0,-2)}else a=arguments[o];i.push(a)}k(e+"\nArguments: "+Array.prototype.slice.call(i).join("")+"\n"+(new Error).stack),r=!1}return n.apply(this,arguments)},n)}function w(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),Or[e]||(k(n),Or[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function D(e){var t,n;for(n in e)t=e[n],x(t)?this[n]=t:this["_"+n]=t;this._config=e,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
// TODO: Remove "ordinalParse" fallback in next major release.
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function S(e,t){var n,r=c({},e);for(n in t)d(t,n)&&(a(e[n])&&a(t[n])?(r[n]={},c(r[n],e[n]),c(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)d(e,n)&&!d(t,n)&&a(e[n])&&(
// make sure changes to properties don't modify parent config
r[n]=c({},r[n]));return r}function T(e){null!=e&&this.set(e)}function E(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return x(r)?r.call(t,n):r}function j(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function O(){return this._invalidDate}function P(e){return this._ordinal.replace("%d",e)}function H(e,t,n,r){var a=this._relativeTime[n];return x(a)?a(e,t,n,r):a.replace(/%d/i,e)}function A(e,t){var n=this._relativeTime[e>0?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)}function C(e,t){var n=e.toLowerCase();Nr[n]=Nr[n+"s"]=Nr[t]=e}function F(e){return"string"==typeof e?Nr[e]||Nr[e.toLowerCase()]:void 0}function N(e){var t,n,r={};for(n in e)d(e,n)&&(t=F(n))&&(r[t]=e[n]);return r}function I(e,t){Ir[e]=t}function W(e){var t=[];for(var n in e)t.push({unit:n,priority:Ir[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function z(e,t,n){var r=""+Math.abs(e),a=t-r.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function R(e,t,n,r){var a=r;"string"==typeof r&&(a=function(){return this[r]()}),e&&(Br[e]=a),t&&(Br[t[0]]=function(){return z(a.apply(this,arguments),t[1],t[2])}),n&&(Br[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function B(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function V(e){var t,n,r=e.match(Wr);for(t=0,n=r.length;t<n;t++)Br[r[t]]?r[t]=Br[r[t]]:r[t]=B(r[t]);return function(t){var a,i="";for(a=0;a<n;a++)i+=x(r[a])?r[a].call(t,e):r[a];return i}}
// format date using native date object
function U(e,t){return e.isValid()?(t=J(t,e.localeData()),Rr[t]=Rr[t]||V(t),Rr[t](e)):e.localeData().invalidDate()}function J(e,t){function n(e){return t.longDateFormat(e)||e}var r=5;for(zr.lastIndex=0;r>=0&&zr.test(e);)e=e.replace(zr,n),zr.lastIndex=0,r-=1;return e}function q(e,t,n){sa[e]=x(t)?t:function(e,r){return e&&n?n:t}}function G(e,t){return d(sa,e)?sa[e](t._strict,t._locale):new RegExp(K(e))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function K(e){return $(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,a){return t||n||r||a}))}function $(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),s(t)&&(r=function(e,n){n[t]=b(e)}),n=0;n<e.length;n++)ua[e[n]]=r}function Z(e,t){Q(e,function(e,n,r,a){r._w=r._w||{},t(e,r._w,r,a)})}function X(e,t,n){null!=t&&d(ua,e)&&ua[e](t,n._a,n,e)}
// HELPERS
function ee(e){return te(e)?366:365}function te(e){return e%4==0&&e%100!=0||e%400==0}function ne(){return te(this.year())}function re(e,n){return function(r){return null!=r?(ie(this,e,r),t.updateOffset(this,n),this):ae(this,e)}}function ae(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function ie(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&te(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),le(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}
// MOMENTS
function oe(e){return e=F(e),x(this[e])?this[e]():this}function se(e,t){if("object"==typeof e){e=N(e);for(var n=W(e),r=0;r<n.length;r++)this[n[r].unit](e[n[r].unit])}else if(e=F(e),x(this[e]))return this[e](t);return this}function ue(e,t){return(e%t+t)%t}function le(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=ue(t,12);return e+=(t-n)/12,1===n?te(e)?29:28:31-n%7%2}function de(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ma).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone}function ce(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ma.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function fe(e,t,n){var r,a,i,o=e.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)i=f([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(i,"").toLocaleLowerCase();return n?"MMM"===t?(a=va.call(this._shortMonthsParse,o),-1!==a?a:null):(a=va.call(this._longMonthsParse,o),-1!==a?a:null):"MMM"===t?-1!==(a=va.call(this._shortMonthsParse,o))?a:(a=va.call(this._longMonthsParse,o),-1!==a?a:null):-1!==(a=va.call(this._longMonthsParse,o))?a:(a=va.call(this._shortMonthsParse,o),-1!==a?a:null)}function he(e,t,n){var r,a,i;if(this._monthsParseExact)return fe.call(this,e,t,n);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){
// test the regex
if(
// make the regex if we don't have it already
a=f([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}
// MOMENTS
function me(e,t){var n;if(!e.isValid())
// No op
return e;if("string"==typeof t)if(/^\d+$/.test(t))t=b(t);else
// TODO: Another silent failure?
if(t=e.localeData().monthsParse(t),!s(t))return e;return n=Math.min(e.date(),le(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function _e(e){return null!=e?(me(this,e),t.updateOffset(this,!0),this):ae(this,"Month")}function pe(){return le(this.year(),this.month())}function ye(e){return this._monthsParseExact?(d(this,"_monthsRegex")||ge.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=ka),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ve(e){return this._monthsParseExact?(d(this,"_monthsRegex")||ge.call(this),e?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=Ya),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function ge(){function e(e,t){return t.length-e.length}var t,n,r=[],a=[],i=[];for(t=0;t<12;t++)
// make the regex if we don't have it already
n=f([2e3,t]),r.push(this.monthsShort(n,"")),a.push(this.months(n,"")),i.push(this.months(n,"")),i.push(this.monthsShort(n,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
r.sort(e),a.sort(e),i.sort(e),t=0;t<12;t++)r[t]=$(r[t]),a[t]=$(a[t]);for(t=0;t<24;t++)i[t]=$(i[t]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Me(e,t,n,r,a,i,o){
// can't just apply() to create a date:
// https://stackoverflow.com/q/181348
var s=new Date(e,t,n,r,a,i,o);
// the date constructor remaps years 0-99 to 1900-1999
return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),s}function be(e){var t=new Date(Date.UTC.apply(null,arguments));
// the Date.UTC function remaps years 0-99 to 1900-1999
return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}
// start-of-first-week - start-of-year
function Le(e,t,n){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
r=7+t-n;return-(7+be(e,0,r).getUTCDay()-t)%7+r-1}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ke(e,t,n,r,a){var i,o,s=(7+n-r)%7,u=Le(e,r,a),l=1+7*(t-1)+s+u;return l<=0?(i=e-1,o=ee(i)+l):l>ee(e)?(i=e+1,o=l-ee(e)):(i=e,o=l),{year:i,dayOfYear:o}}function Ye(e,t,n){var r,a,i=Le(e.year(),t,n),o=Math.floor((e.dayOfYear()-i-1)/7)+1;return o<1?(a=e.year()-1,r=o+we(a,t,n)):o>we(e.year(),t,n)?(r=o-we(e.year(),t,n),a=e.year()+1):(a=e.year(),r=o),{week:r,year:a}}function we(e,t,n){var r=Le(e,t,n),a=Le(e+1,t,n);return(ee(e)-r+a)/7}
// HELPERS
// LOCALES
function xe(e){return Ye(e,this._week.dow,this._week.doy).week}function De(){return this._week.dow}function Se(){return this._week.doy}
// MOMENTS
function Te(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Ee(e){var t=Ye(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}
// HELPERS
function je(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Oe(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Pe(e,t){return e?r(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:r(this._weekdays)?this._weekdays:this._weekdays.standalone}function He(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ae(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ce(e,t,n){var r,a,i,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)i=f([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(i,"").toLocaleLowerCase();return n?"dddd"===t?(a=va.call(this._weekdaysParse,o),-1!==a?a:null):"ddd"===t?(a=va.call(this._shortWeekdaysParse,o),-1!==a?a:null):(a=va.call(this._minWeekdaysParse,o),-1!==a?a:null):"dddd"===t?-1!==(a=va.call(this._weekdaysParse,o))?a:-1!==(a=va.call(this._shortWeekdaysParse,o))?a:(a=va.call(this._minWeekdaysParse,o),-1!==a?a:null):"ddd"===t?-1!==(a=va.call(this._shortWeekdaysParse,o))?a:-1!==(a=va.call(this._weekdaysParse,o))?a:(a=va.call(this._minWeekdaysParse,o),-1!==a?a:null):-1!==(a=va.call(this._minWeekdaysParse,o))?a:-1!==(a=va.call(this._weekdaysParse,o))?a:(a=va.call(this._shortWeekdaysParse,o),-1!==a?a:null)}function Fe(e,t,n){var r,a,i;if(this._weekdaysParseExact)return Ce.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){
// test the regex
if(
// make the regex if we don't have it already
a=f([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}
// MOMENTS
function Ne(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=je(e,this.localeData()),this.add(e-t,"d")):t}function Ie(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function We(e){if(!this.isValid())return null!=e?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=e){var t=Oe(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function ze(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ve.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=Ta),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Re(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ve.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ea),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Be(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ve.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ja),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ve(){function e(e,t){return t.length-e.length}var t,n,r,a,i,o=[],s=[],u=[],l=[];for(t=0;t<7;t++)
// make the regex if we don't have it already
n=f([2e3,1]).day(t),r=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),i=this.weekdays(n,""),o.push(r),s.push(a),u.push(i),l.push(r),l.push(a),l.push(i);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
o.sort(e),s.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)s[t]=$(s[t]),u[t]=$(u[t]),l[t]=$(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}
// FORMATTING
function Ue(){return this.hours()%12||12}function Je(){return this.hours()||24}function qe(e,t){R(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}
// PARSING
function Ge(e,t){return t._meridiemParse}
// LOCALES
function Ke(e){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(e+"").toLowerCase().charAt(0)}function $e(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Qe(e){return e?e.toLowerCase().replace("_","-"):e}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Ze(e){for(var t,n,r,a,i=0;i<e.length;){for(a=Qe(e[i]).split("-"),t=a.length,n=Qe(e[i+1]),n=n?n.split("-"):null;t>0;){if(r=Xe(a.slice(0,t).join("-")))return r;if(n&&n.length>=t&&L(a,n,!0)>=t-1)
//the next array item is better than a shallower substring of this one
break;t--}i++}return Oa}function Xe(t){var r=null;
// TODO: Find a better way to register and load all the locales in Node
if(!Ca[t]&&void 0!==e&&e&&e.exports)try{r=Oa._abbr;n(485)("./"+t),et(r)}catch(e){}return Ca[t]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function et(e,t){var n;
// moment.duration._locale = moment._locale = data;
//warn user if arguments are passed but the locale could not be set
return e&&(n=o(t)?rt(e):tt(e,t),n?Oa=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Oa._abbr}function tt(e,t){if(null!==t){var n,r=Aa;if(t.abbr=e,null!=Ca[e])w("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Ca[e]._config;else if(null!=t.parentLocale)if(null!=Ca[t.parentLocale])r=Ca[t.parentLocale]._config;else{if(null==(n=Xe(t.parentLocale)))return Fa[t.parentLocale]||(Fa[t.parentLocale]=[]),Fa[t.parentLocale].push({name:e,config:t}),null;r=n._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return Ca[e]=new T(S(r,t)),Fa[e]&&Fa[e].forEach(function(e){tt(e.name,e.config)}),et(e),Ca[e]}
// useful for testing
return delete Ca[e],null}function nt(e,t){if(null!=t){var n,r,a=Aa;
// MERGE
r=Xe(e),null!=r&&(a=r._config),t=S(a,t),n=new T(t),n.parentLocale=Ca[e],Ca[e]=n,
// backwards compat for now: also set the locale
et(e)}else
// pass null for config to unupdate, useful for tests
null!=Ca[e]&&(null!=Ca[e].parentLocale?Ca[e]=Ca[e].parentLocale:null!=Ca[e]&&delete Ca[e]);return Ca[e]}
// returns locale data
function rt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Oa;if(!r(e)){if(
//short-circuit everything else
t=Xe(e))return t;e=[e]}return Ze(e)}function at(){return Pr(Ca)}function it(e){var t,n=e._a;return n&&-2===m(e).overflow&&(t=n[da]<0||n[da]>11?da:n[ca]<1||n[ca]>le(n[la],n[da])?ca:n[fa]<0||n[fa]>24||24===n[fa]&&(0!==n[ha]||0!==n[ma]||0!==n[_a])?fa:n[ha]<0||n[ha]>59?ha:n[ma]<0||n[ma]>59?ma:n[_a]<0||n[_a]>999?_a:-1,m(e)._overflowDayOfYear&&(t<la||t>ca)&&(t=ca),m(e)._overflowWeeks&&-1===t&&(t=pa),m(e)._overflowWeekday&&-1===t&&(t=ya),m(e).overflow=t),e}
// Pick the first defined of two or three arguments.
function ot(e,t,n){return null!=e?e:null!=t?t:n}function st(e){
// hooks is actually the exported moment object
var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function ut(e){var t,n,r,a,i,o=[];if(!e._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(r=st(e),
//compute day of the year from weeks and weekdays
e._w&&null==e._a[ca]&&null==e._a[da]&&lt(e),
//if the day of the year is set, figure out what it is
null!=e._dayOfYear&&(i=ot(e._a[la],r[la]),(e._dayOfYear>ee(i)||0===e._dayOfYear)&&(m(e)._overflowDayOfYear=!0),n=be(i,0,e._dayOfYear),e._a[da]=n.getUTCMonth(),e._a[ca]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=r[t];
// Zero out whatever was not defaulted, including time
for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];
// Check for 24:00:00.000
24===e._a[fa]&&0===e._a[ha]&&0===e._a[ma]&&0===e._a[_a]&&(e._nextDay=!0,e._a[fa]=0),e._d=(e._useUTC?be:Me).apply(null,o),a=e._useUTC?e._d.getUTCDay():e._d.getDay(),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[fa]=24),
// check for mismatching day of week
e._w&&void 0!==e._w.d&&e._w.d!==a&&(m(e).weekdayMismatch=!0)}}function lt(e){var t,n,r,a,i,o,s,u;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)i=1,o=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
n=ot(t.GG,e._a[la],Ye(xt(),1,4).year),r=ot(t.W,1),((a=ot(t.E,1))<1||a>7)&&(u=!0);else{i=e._locale._week.dow,o=e._locale._week.doy;var l=Ye(xt(),i,o);n=ot(t.gg,e._a[la],l.year),
// Default to current week.
r=ot(t.w,l.week),null!=t.d?((
// weekday -- low day numbers are considered next week
a=t.d)<0||a>6)&&(u=!0):null!=t.e?(
// local weekday -- counting starts from begining of week
a=t.e+i,(t.e<0||t.e>6)&&(u=!0)):
// default to begining of week
a=i}r<1||r>we(n,i,o)?m(e)._overflowWeeks=!0:null!=u?m(e)._overflowWeekday=!0:(s=ke(n,r,a,i,o),e._a[la]=s.year,e._dayOfYear=s.dayOfYear)}
// date from iso format
function dt(e){var t,n,r,a,i,o,s=e._i,u=Na.exec(s)||Ia.exec(s);if(u){for(m(e).iso=!0,t=0,n=za.length;t<n;t++)if(za[t][1].exec(u[1])){a=za[t][0],r=!1!==za[t][2];break}if(null==a)return void(e._isValid=!1);if(u[3]){for(t=0,n=Ra.length;t<n;t++)if(Ra[t][1].exec(u[3])){
// match[2] should be 'T' or space
i=(u[2]||" ")+Ra[t][0];break}if(null==i)return void(e._isValid=!1)}if(!r&&null!=i)return void(e._isValid=!1);if(u[4]){if(!Wa.exec(u[4]))return void(e._isValid=!1);o="Z"}e._f=a+(i||"")+(o||""),vt(e)}else e._isValid=!1}function ct(e,t,n,r,a,i){var o=[ft(e),La.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(a,10)];return i&&o.push(parseInt(i,10)),o}function ft(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function ht(e){
// Remove comments and folding whitespace and replace multiple-spaces with a single space
return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function mt(e,t,n){if(e){if(Da.indexOf(e)!==new Date(t[0],t[1],t[2]).getDay())return m(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function _t(e,t,n){if(e)return Ua[e];if(t)
// the only allowed military tz is Z
return 0;var r=parseInt(n,10),a=r%100;return(r-a)/100*60+a}
// date and time from ref 2822 format
function pt(e){var t=Va.exec(ht(e._i));if(t){var n=ct(t[4],t[3],t[2],t[5],t[6],t[7]);if(!mt(t[1],n,e))return;e._a=n,e._tzm=_t(t[8],t[9],t[10]),e._d=be.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),m(e).rfc2822=!0}else e._isValid=!1}
// date from iso format or fallback
function yt(e){var n=Ba.exec(e._i);if(null!==n)return void(e._d=new Date(+n[1]));dt(e),!1===e._isValid&&(delete e._isValid,pt(e),!1===e._isValid&&(delete e._isValid,
// Final attempt, use Input Fallback
t.createFromInputFallback(e)))}
// date from string and format string
function vt(e){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(e._f===t.ISO_8601)return void dt(e);if(e._f===t.RFC_2822)return void pt(e);e._a=[],m(e).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var n,r,a,i,o,s=""+e._i,u=s.length,l=0;for(a=J(e._f,e._locale).match(Wr)||[],n=0;n<a.length;n++)i=a[n],r=(s.match(G(i,e))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
r&&(o=s.substr(0,s.indexOf(r)),o.length>0&&m(e).unusedInput.push(o),s=s.slice(s.indexOf(r)+r.length),l+=r.length),
// don't parse if it's not a known token
Br[i]?(r?m(e).empty=!1:m(e).unusedTokens.push(i),X(i,r,e)):e._strict&&!r&&m(e).unusedTokens.push(i);
// add remaining unparsed input length to the string
m(e).charsLeftOver=u-l,s.length>0&&m(e).unusedInput.push(s),
// clear _12h flag if hour is <= 12
e._a[fa]<=12&&!0===m(e).bigHour&&e._a[fa]>0&&(m(e).bigHour=void 0),m(e).parsedDateParts=e._a.slice(0),m(e).meridiem=e._meridiem,
// handle meridiem
e._a[fa]=gt(e._locale,e._a[fa],e._meridiem),ut(e),it(e)}function gt(e,t,n){var r;
// Fallback
return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(r=e.isPM(n),r&&t<12&&(t+=12),r||12!==t||(t=0),t):t}
// date from string and array of format strings
function Mt(e){var t,n,r,a,i;if(0===e._f.length)return m(e).invalidFormat=!0,void(e._d=new Date(NaN));for(a=0;a<e._f.length;a++)i=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[a],vt(t),_(t)&&(
// if there is any input that was not parsed add a penalty for that format
i+=m(t).charsLeftOver,
//or tokens
i+=10*m(t).unusedTokens.length,m(t).score=i,(null==r||i<r)&&(r=i,n=t));c(e,n||t)}function bt(e){if(!e._d){var t=N(e._i);e._a=l([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ut(e)}}function Lt(e){var t=new v(it(kt(e)));
// Adding is smart enough around DST
return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function kt(e){var t=e._i,n=e._f;return e._locale=e._locale||rt(e._l),null===t||void 0===n&&""===t?p({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),g(t)?new v(it(t)):(u(t)?e._d=t:r(n)?Mt(e):n?vt(e):Yt(e),_(e)||(e._d=null),e))}function Yt(e){var n=e._i;o(n)?e._d=new Date(t.now()):u(n)?e._d=new Date(n.valueOf()):"string"==typeof n?yt(e):r(n)?(e._a=l(n.slice(0),function(e){return parseInt(e,10)}),ut(e)):a(n)?bt(e):s(n)?
// from milliseconds
e._d=new Date(n):t.createFromInputFallback(e)}function wt(e,t,n,o,s){var u={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return!0!==n&&!1!==n||(o=n,n=void 0),(a(e)&&i(e)||r(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=n,u._i=e,u._f=t,u._strict=o,Lt(u)}function xt(e,t,n,r){return wt(e,t,n,r,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function Dt(e,t){var n,a;if(1===t.length&&r(t[0])&&(t=t[0]),!t.length)return xt();for(n=t[0],a=1;a<t.length;++a)t[a].isValid()&&!t[a][e](n)||(n=t[a]);return n}
// TODO: Use [].sort instead?
function St(){return Dt("isBefore",[].slice.call(arguments,0))}function Tt(){return Dt("isAfter",[].slice.call(arguments,0))}function Et(e){for(var t in e)if(-1===va.call(Ka,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,r=0;r<Ka.length;++r)if(e[Ka[r]]){if(n)return!1;parseFloat(e[Ka[r]])!==b(e[Ka[r]])&&(n=!0)}return!0}function jt(){return this._isValid}function Ot(){return Qt(NaN)}function Pt(e){var t=N(e),n=t.year||0,r=t.quarter||0,a=t.month||0,i=t.week||0,o=t.day||0,s=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=Et(t),
// representation for dateAddRemove
this._milliseconds=+d+1e3*l+// 1000
6e4*u+// 1000 * 60
1e3*s*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+o+7*i,
// It is impossible to translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+a+3*r+12*n,this._data={},this._locale=rt(),this._bubble()}function Ht(e){return e instanceof Pt}function At(e){return e<0?-1*Math.round(-1*e):Math.round(e)}
// FORMATTING
function Ct(e,t){R(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+z(~~(e/60),2)+t+z(~~e%60,2)})}function Ft(e,t){var n=(t||"").match(e);if(null===n)return null;var r=n[n.length-1]||[],a=(r+"").match($a)||["-",0,0],i=60*a[1]+b(a[2]);return 0===i?0:"+"===a[0]?i:-i}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Nt(e,n){var r,a;
// Use low-level api, because this fn is low-level api.
return n._isUTC?(r=n.clone(),a=(g(e)||u(e)?e.valueOf():xt(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+a),t.updateOffset(r,!1),r):xt(e).local()}function It(e){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(e._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Wt(e,n,r){var a,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ft(aa,e)))return this}else Math.abs(e)<16&&!r&&(e*=60);return!this._isUTC&&n&&(a=It(this)),this._offset=e,this._isUTC=!0,null!=a&&this.add(a,"m"),i!==e&&(!n||this._changeInProgress?nn(this,Qt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:It(this)}function zt(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Rt(e){return this.utcOffset(0,e)}function Bt(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(It(this),"m")),this}function Vt(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ft(ra,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ut(e){return!!this.isValid()&&(e=e?xt(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function Jt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function qt(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),e=kt(e),e._a){var t=e._isUTC?f(e._a):xt(e._a);this._isDSTShifted=this.isValid()&&L(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Gt(){return!!this.isValid()&&!this._isUTC}function Kt(){return!!this.isValid()&&this._isUTC}function $t(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Qt(e,t){var n,r,a,i=e,
// matching against regexp is expensive, do it on demand
o=null;// checks for null or undefined
return Ht(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:s(e)?(i={},t?i[t]=e:i.milliseconds=e):(o=Qa.exec(e))?(n="-"===o[1]?-1:1,i={y:0,d:b(o[ca])*n,h:b(o[fa])*n,m:b(o[ha])*n,s:b(o[ma])*n,ms:b(At(1e3*o[_a]))*n}):(o=Za.exec(e))?(n="-"===o[1]?-1:(o[1],1),i={y:Zt(o[2],n),M:Zt(o[3],n),w:Zt(o[4],n),d:Zt(o[5],n),h:Zt(o[6],n),m:Zt(o[7],n),s:Zt(o[8],n)}):null==i?i={}:"object"==typeof i&&("from"in i||"to"in i)&&(a=en(xt(i.from),xt(i.to)),i={},i.ms=a.milliseconds,i.M=a.months),r=new Pt(i),Ht(e)&&d(e,"_locale")&&(r._locale=e._locale),r}function Zt(e,t){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var n=e&&parseFloat(e.replace(",","."));
// apply sign while we're at it
return(isNaN(n)?0:n)*t}function Xt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function en(e,t){var n;return e.isValid()&&t.isValid()?(t=Nt(t,e),e.isBefore(t)?n=Xt(e,t):(n=Xt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function tn(e,t){return function(n,r){var a,i;
//invert the arguments, but complain about it
return null===r||isNaN(+r)||(w(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=r,r=i),n="string"==typeof n?+n:n,a=Qt(n,r),nn(this,a,e),this}}function nn(e,n,r,a){var i=n._milliseconds,o=At(n._days),s=At(n._months);e.isValid()&&(a=null==a||a,s&&me(e,ae(e,"Month")+s*r),o&&ie(e,"Date",ae(e,"Date")+o*r),i&&e._d.setTime(e._d.valueOf()+i*r),a&&t.updateOffset(e,o||s))}function rn(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function an(e,n){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var r=e||xt(),a=Nt(r,this).startOf("day"),i=t.calendarFormat(this,a)||"sameElse",o=n&&(x(n[i])?n[i].call(this,r):n[i]);return this.format(o||this.localeData().calendar(i,this,xt(r)))}function on(){return new v(this)}function sn(e,t){var n=g(e)?e:xt(e);return!(!this.isValid()||!n.isValid())&&(t=F(o(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function un(e,t){var n=g(e)?e:xt(e);return!(!this.isValid()||!n.isValid())&&(t=F(o(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function ln(e,t,n,r){return r=r||"()",("("===r[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===r[1]?this.isBefore(t,n):!this.isAfter(t,n))}function dn(e,t){var n,r=g(e)?e:xt(e);return!(!this.isValid()||!r.isValid())&&(t=F(t||"millisecond"),"millisecond"===t?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function cn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function fn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function hn(e,t,n){var r,a,i;if(!this.isValid())return NaN;if(r=Nt(e,this),!r.isValid())return NaN;switch(a=6e4*(r.utcOffset()-this.utcOffset()),t=F(t)){case"year":i=mn(this,r)/12;break;case"month":i=mn(this,r);break;case"quarter":i=mn(this,r)/3;break;case"second":i=(this-r)/1e3;break;// 1000
case"minute":i=(this-r)/6e4;break;// 1000 * 60
case"hour":i=(this-r)/36e5;break;// 1000 * 60 * 60
case"day":i=(this-r-a)/864e5;break;// 1000 * 60 * 60 * 24, negate dst
case"week":i=(this-r-a)/6048e5;break;// 1000 * 60 * 60 * 24 * 7, negate dst
default:i=this-r}return n?i:M(i)}function mn(e,t){
// difference in months
var n,r,a=12*(t.year()-e.year())+(t.month()-e.month()),
// b is in (anchor - 1 month, anchor + 1 month)
i=e.clone().add(a,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return t-i<0?(n=e.clone().add(a-1,"months"),r=(t-i)/(i-n)):(n=e.clone().add(a+1,"months"),r=(t-i)/(n-i)),-(a+r)||0}function _n(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function pn(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;
// native implementation is ~50x faster, use it when we can
return n.year()<0||n.year()>9999?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}/**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
function yn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a=t+'[")]';return this.format(n+r+"-MM-DD[T]HH:mm:ss.SSS"+a)}function vn(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=U(this,e);return this.localeData().postformat(n)}function gn(e,t){return this.isValid()&&(g(e)&&e.isValid()||xt(e).isValid())?Qt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Mn(e){return this.from(xt(),e)}function bn(e,t){return this.isValid()&&(g(e)&&e.isValid()||xt(e).isValid())?Qt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ln(e){return this.to(xt(),e)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function kn(e){var t;return void 0===e?this._locale._abbr:(t=rt(e),null!=t&&(this._locale=t),this)}function Yn(){return this._locale}function wn(e){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(e=F(e)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function xn(e){
// 'date' is an alias for 'day', so it should be considered as such.
return void 0===(e=F(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function Dn(){return this._d.valueOf()-6e4*(this._offset||0)}function Sn(){return Math.floor(this.valueOf()/1e3)}function Tn(){return new Date(this.valueOf())}function En(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function On(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function Pn(){return _(this)}function Hn(){return c({},m(this))}function An(){return m(this).overflow}function Cn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Fn(e,t){R(0,[e,e.length],0,t)}
// MOMENTS
function Nn(e){return Rn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function In(e){return Rn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Wn(){return we(this.year(),1,4)}function zn(){var e=this.localeData()._week;return we(this.year(),e.dow,e.doy)}function Rn(e,t,n,r,a){var i;return null==e?Ye(this,r,a).year:(i=we(e,r,a),t>i&&(t=i),Bn.call(this,e,t,n,r,a))}function Bn(e,t,n,r,a){var i=ke(e,t,n,r,a),o=be(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}
// MOMENTS
function Vn(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Un(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function Jn(e,t){t[_a]=b(1e3*("0."+e))}
// MOMENTS
function qn(){return this._isUTC?"UTC":""}function Gn(){return this._isUTC?"Coordinated Universal Time":""}function Kn(e){return xt(1e3*e)}function $n(){return xt.apply(null,arguments).parseZone()}function Qn(e){return e}function Zn(e,t,n,r){var a=rt(),i=f().set(r,t);return a[n](i,e)}function Xn(e,t,n){if(s(e)&&(t=e,e=void 0),e=e||"",null!=t)return Zn(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=Zn(e,r,n,"month");return a}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function er(e,t,n,r){"boolean"==typeof e?(s(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,s(t)&&(n=t,t=void 0),t=t||"");var a=rt(),i=e?a._week.dow:0;if(null!=n)return Zn(t,(n+i)%7,r,"day");var o,u=[];for(o=0;o<7;o++)u[o]=Zn(t,(o+i)%7,r,"day");return u}function tr(e,t){return Xn(e,t,"months")}function nr(e,t){return Xn(e,t,"monthsShort")}function rr(e,t,n){return er(e,t,n,"weekdays")}function ar(e,t,n){return er(e,t,n,"weekdaysShort")}function ir(e,t,n){return er(e,t,n,"weekdaysMin")}function or(){var e=this._data;return this._milliseconds=li(this._milliseconds),this._days=li(this._days),this._months=li(this._months),e.milliseconds=li(e.milliseconds),e.seconds=li(e.seconds),e.minutes=li(e.minutes),e.hours=li(e.hours),e.months=li(e.months),e.years=li(e.years),this}function sr(e,t,n,r){var a=Qt(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function ur(e,t){return sr(this,e,t,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function lr(e,t){return sr(this,e,t,-1)}function dr(e){return e<0?Math.floor(e):Math.ceil(e)}function cr(){var e,t,n,r,a,i=this._milliseconds,o=this._days,s=this._months,u=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return i>=0&&o>=0&&s>=0||i<=0&&o<=0&&s<=0||(i+=864e5*dr(hr(s)+o),o=0,s=0),u.milliseconds=i%1e3,e=M(i/1e3),u.seconds=e%60,t=M(e/60),u.minutes=t%60,n=M(t/60),u.hours=n%24,o+=M(n/24),a=M(fr(o)),s+=a,o-=dr(hr(a)),r=M(s/12),s%=12,u.days=o,u.months=s,u.years=r,this}function fr(e){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*e/146097}function hr(e){
// the reverse of daysToMonths
return 146097*e/4800}function mr(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=F(e))||"year"===e)return t=this._days+r/864e5,n=this._months+fr(t),"month"===e?n:n/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
t=this._days+Math.round(hr(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}}
// TODO: Use this.as('ms')?
function _r(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*b(this._months/12):NaN}function pr(e){return function(){return this.as(e)}}function yr(){return Qt(this)}function vr(e){return e=F(e),this.isValid()?this[e+"s"]():NaN}function gr(e){return function(){return this.isValid()?this._data[e]:NaN}}function Mr(){return M(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function br(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}function Lr(e,t,n){var r=Qt(e).abs(),a=wi(r.as("s")),i=wi(r.as("m")),o=wi(r.as("h")),s=wi(r.as("d")),u=wi(r.as("M")),l=wi(r.as("y")),d=a<=xi.ss&&["s",a]||a<xi.s&&["ss",a]||i<=1&&["m"]||i<xi.m&&["mm",i]||o<=1&&["h"]||o<xi.h&&["hh",o]||s<=1&&["d"]||s<xi.d&&["dd",s]||u<=1&&["M"]||u<xi.M&&["MM",u]||l<=1&&["y"]||["yy",l];return d[2]=t,d[3]=+e>0,d[4]=n,br.apply(null,d)}
// This function allows you to set the rounding function for relative time strings
function kr(e){return void 0===e?wi:"function"==typeof e&&(wi=e,!0)}
// This function allows you to set a threshold for relative time strings
function Yr(e,t){return void 0!==xi[e]&&(void 0===t?xi[e]:(xi[e]=t,"s"===e&&(xi.ss=t-1),!0))}function wr(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=Lr(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function xr(e){return(e>0)-(e<0)||+e}function Dr(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r=Di(this._milliseconds)/1e3,a=Di(this._days),i=Di(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
e=M(r/60),t=M(e/60),r%=60,e%=60,
// 12 months -> 1 year
n=M(i/12),i%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var o=n,s=i,u=a,l=t,d=e,c=r?r.toFixed(3).replace(/\.?0+$/,""):"",f=this.asSeconds();if(!f)
// this is the same as C#'s (Noda) and python (isodate)...
// but not other JS (goog.date)
return"P0D";var h=f<0?"-":"",m=xr(this._months)!==xr(f)?"-":"",_=xr(this._days)!==xr(f)?"-":"",p=xr(this._milliseconds)!==xr(f)?"-":"";return h+"P"+(o?m+o+"Y":"")+(s?m+s+"M":"")+(u?_+u+"D":"")+(l||d||c?"T":"")+(l?p+l+"H":"")+(d?p+d+"M":"")+(c?p+c+"S":"")}var Sr,Tr;Tr=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var Er=t.momentProperties=[],jr=!1,Or={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var Pr;Pr=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)d(e,t)&&n.push(t);return n};var Hr={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ar={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Cr=/\d{1,2}/,Fr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Nr={},Ir={},Wr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,zr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rr={},Br={},Vr=/\d/,Ur=/\d\d/,Jr=/\d{3}/,qr=/\d{4}/,Gr=/[+-]?\d{6}/,Kr=/\d\d?/,$r=/\d\d\d\d?/,Qr=/\d\d\d\d\d\d?/,Zr=/\d{1,3}/,Xr=/\d{1,4}/,ea=/[+-]?\d{1,6}/,ta=/\d+/,na=/[+-]?\d+/,ra=/Z|[+-]\d\d:?\d\d/gi,aa=/Z|[+-]\d\d(?::?\d\d)?/gi,ia=/[+-]?\d+(\.\d{1,3})?/,oa=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,sa={},ua={},la=0,da=1,ca=2,fa=3,ha=4,ma=5,_a=6,pa=7,ya=8;
// FORMATTING
R("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
C("year","y"),
// PRIORITIES
I("year",1),
// PARSING
q("Y",na),q("YY",Kr,Ur),q("YYYY",Xr,qr),q("YYYYY",ea,Gr),q("YYYYYY",ea,Gr),Q(["YYYYY","YYYYYY"],la),Q("YYYY",function(e,n){n[la]=2===e.length?t.parseTwoDigitYear(e):b(e)}),Q("YY",function(e,n){n[la]=t.parseTwoDigitYear(e)}),Q("Y",function(e,t){t[la]=parseInt(e,10)}),
// HOOKS
t.parseTwoDigitYear=function(e){return b(e)+(b(e)>68?1900:2e3)};
// MOMENTS
var va,ga=re("FullYear",!0);va=Array.prototype.indexOf?Array.prototype.indexOf:function(e){
// I know
var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},
// FORMATTING
R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),R("MMMM",0,0,function(e){return this.localeData().months(this,e)}),
// ALIASES
C("month","M"),
// PRIORITY
I("month",8),
// PARSING
q("M",Kr),q("MM",Kr,Ur),q("MMM",function(e,t){return t.monthsShortRegex(e)}),q("MMMM",function(e,t){return t.monthsRegex(e)}),Q(["M","MM"],function(e,t){t[da]=b(e)-1}),Q(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);
// if we didn't find a month name, mark the date as invalid.
null!=a?t[da]=a:m(n).invalidMonth=e});
// LOCALES
var Ma=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ba="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),La="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ka=oa,Ya=oa;
// FORMATTING
R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),
// ALIASES
C("week","w"),C("isoWeek","W"),
// PRIORITIES
I("week",5),I("isoWeek",5),
// PARSING
q("w",Kr),q("ww",Kr,Ur),q("W",Kr),q("WW",Kr,Ur),Z(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=b(e)});var wa={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
R("d",0,"do","day"),R("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),R("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),R("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),
// ALIASES
C("day","d"),C("weekday","e"),C("isoWeekday","E"),
// PRIORITY
I("day",11),I("weekday",11),I("isoWeekday",11),
// PARSING
q("d",Kr),q("e",Kr),q("E",Kr),q("dd",function(e,t){return t.weekdaysMinRegex(e)}),q("ddd",function(e,t){return t.weekdaysShortRegex(e)}),q("dddd",function(e,t){return t.weekdaysRegex(e)}),Z(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=a?t.d=a:m(n).invalidWeekday=e}),Z(["d","e","E"],function(e,t,n,r){t[r]=b(e)});
// LOCALES
var xa="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Da="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Sa="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ta=oa,Ea=oa,ja=oa;R("H",["HH",2],0,"hour"),R("h",["hh",2],0,Ue),R("k",["kk",2],0,Je),R("hmm",0,0,function(){return""+Ue.apply(this)+z(this.minutes(),2)}),R("hmmss",0,0,function(){return""+Ue.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+z(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)}),qe("a",!0),qe("A",!1),
// ALIASES
C("hour","h"),
// PRIORITY
I("hour",13),q("a",Ge),q("A",Ge),q("H",Kr),q("h",Kr),q("k",Kr),q("HH",Kr,Ur),q("hh",Kr,Ur),q("kk",Kr,Ur),q("hmm",$r),q("hmmss",Qr),q("Hmm",$r),q("Hmmss",Qr),Q(["H","HH"],fa),Q(["k","kk"],function(e,t,n){var r=b(e);t[fa]=24===r?0:r}),Q(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),Q(["h","hh"],function(e,t,n){t[fa]=b(e),m(n).bigHour=!0}),Q("hmm",function(e,t,n){var r=e.length-2;t[fa]=b(e.substr(0,r)),t[ha]=b(e.substr(r)),m(n).bigHour=!0}),Q("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[fa]=b(e.substr(0,r)),t[ha]=b(e.substr(r,2)),t[ma]=b(e.substr(a)),m(n).bigHour=!0}),Q("Hmm",function(e,t,n){var r=e.length-2;t[fa]=b(e.substr(0,r)),t[ha]=b(e.substr(r))}),Q("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[fa]=b(e.substr(0,r)),t[ha]=b(e.substr(r,2)),t[ma]=b(e.substr(a))});var Oa,Pa=/[ap]\.?m?\.?/i,Ha=re("Hours",!0),Aa={calendar:Hr,longDateFormat:Ar,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:Cr,relativeTime:Fr,months:ba,monthsShort:La,week:wa,weekdays:xa,weekdaysMin:Sa,weekdaysShort:Da,meridiemParse:Pa},Ca={},Fa={},Na=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ia=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Wa=/Z|[+-]\d\d(?::?\d\d)?/,za=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ra=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ba=/^\/?Date\((\-?\d+)/i,Va=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Ua={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};t.createFromInputFallback=Y("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
t.ISO_8601=function(){},
// constant that refers to the RFC 2822 form
t.RFC_2822=function(){};var Ja=Y("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=xt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),qa=Y("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=xt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:p()}),Ga=function(){return Date.now?Date.now():+new Date},Ka=["year","quarter","month","week","day","hour","minute","second","millisecond"];Ct("Z",":"),Ct("ZZ",""),
// PARSING
q("Z",aa),q("ZZ",aa),Q(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ft(aa,e)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var $a=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
t.updateOffset=function(){};
// ASP.NET json date format regex
var Qa=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Za=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Qt.fn=Pt.prototype,Qt.invalid=Ot;var Xa=tn(1,"add"),ei=tn(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ti=Y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});
// FORMATTING
R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Fn("gggg","weekYear"),Fn("ggggg","weekYear"),Fn("GGGG","isoWeekYear"),Fn("GGGGG","isoWeekYear"),
// ALIASES
C("weekYear","gg"),C("isoWeekYear","GG"),
// PRIORITY
I("weekYear",1),I("isoWeekYear",1),
// PARSING
q("G",na),q("g",na),q("GG",Kr,Ur),q("gg",Kr,Ur),q("GGGG",Xr,qr),q("gggg",Xr,qr),q("GGGGG",ea,Gr),q("ggggg",ea,Gr),Z(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=b(e)}),Z(["gg","GG"],function(e,n,r,a){n[a]=t.parseTwoDigitYear(e)}),
// FORMATTING
R("Q",0,"Qo","quarter"),
// ALIASES
C("quarter","Q"),
// PRIORITY
I("quarter",7),
// PARSING
q("Q",Vr),Q("Q",function(e,t){t[da]=3*(b(e)-1)}),
// FORMATTING
R("D",["DD",2],"Do","date"),
// ALIASES
C("date","D"),
// PRIORITY
I("date",9),
// PARSING
q("D",Kr),q("DD",Kr,Ur),q("Do",function(e,t){
// TODO: Remove "ordinalParse" fallback in next major release.
return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),Q(["D","DD"],ca),Q("Do",function(e,t){t[ca]=b(e.match(Kr)[0])});
// MOMENTS
var ni=re("Date",!0);
// FORMATTING
R("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
C("dayOfYear","DDD"),
// PRIORITY
I("dayOfYear",4),
// PARSING
q("DDD",Zr),q("DDDD",Jr),Q(["DDD","DDDD"],function(e,t,n){n._dayOfYear=b(e)}),
// FORMATTING
R("m",["mm",2],0,"minute"),
// ALIASES
C("minute","m"),
// PRIORITY
I("minute",14),
// PARSING
q("m",Kr),q("mm",Kr,Ur),Q(["m","mm"],ha);
// MOMENTS
var ri=re("Minutes",!1);
// FORMATTING
R("s",["ss",2],0,"second"),
// ALIASES
C("second","s"),
// PRIORITY
I("second",15),
// PARSING
q("s",Kr),q("ss",Kr,Ur),Q(["s","ss"],ma);
// MOMENTS
var ai=re("Seconds",!1);
// FORMATTING
R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
C("millisecond","ms"),
// PRIORITY
I("millisecond",16),
// PARSING
q("S",Zr,Vr),q("SS",Zr,Ur),q("SSS",Zr,Jr);var ii;for(ii="SSSS";ii.length<=9;ii+="S")q(ii,ta);for(ii="S";ii.length<=9;ii+="S")Q(ii,Jn);
// MOMENTS
var oi=re("Milliseconds",!1);
// FORMATTING
R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var si=v.prototype;si.add=Xa,si.calendar=an,si.clone=on,si.diff=hn,si.endOf=xn,si.format=vn,si.from=gn,si.fromNow=Mn,si.to=bn,si.toNow=Ln,si.get=oe,si.invalidAt=An,si.isAfter=sn,si.isBefore=un,si.isBetween=ln,si.isSame=dn,si.isSameOrAfter=cn,si.isSameOrBefore=fn,si.isValid=Pn,si.lang=ti,si.locale=kn,si.localeData=Yn,si.max=qa,si.min=Ja,si.parsingFlags=Hn,si.set=se,si.startOf=wn,si.subtract=ei,si.toArray=En,si.toObject=jn,si.toDate=Tn,si.toISOString=pn,si.inspect=yn,si.toJSON=On,si.toString=_n,si.unix=Sn,si.valueOf=Dn,si.creationData=Cn,si.year=ga,si.isLeapYear=ne,si.weekYear=Nn,si.isoWeekYear=In,si.quarter=si.quarters=Vn,si.month=_e,si.daysInMonth=pe,si.week=si.weeks=Te,si.isoWeek=si.isoWeeks=Ee,si.weeksInYear=zn,si.isoWeeksInYear=Wn,si.date=ni,si.day=si.days=Ne,si.weekday=Ie,si.isoWeekday=We,si.dayOfYear=Un,si.hour=si.hours=Ha,si.minute=si.minutes=ri,si.second=si.seconds=ai,si.millisecond=si.milliseconds=oi,si.utcOffset=Wt,si.utc=Rt,si.local=Bt,si.parseZone=Vt,si.hasAlignedHourOffset=Ut,si.isDST=Jt,si.isLocal=Gt,si.isUtcOffset=Kt,si.isUtc=$t,si.isUTC=$t,si.zoneAbbr=qn,si.zoneName=Gn,si.dates=Y("dates accessor is deprecated. Use date instead.",ni),si.months=Y("months accessor is deprecated. Use month instead",_e),si.years=Y("years accessor is deprecated. Use year instead",ga),si.zone=Y("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",zt),si.isDSTShifted=Y("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",qt);var ui=T.prototype;ui.calendar=E,ui.longDateFormat=j,ui.invalidDate=O,ui.ordinal=P,ui.preparse=Qn,ui.postformat=Qn,ui.relativeTime=H,ui.pastFuture=A,ui.set=D,ui.months=de,ui.monthsShort=ce,ui.monthsParse=he,ui.monthsRegex=ve,ui.monthsShortRegex=ye,ui.week=xe,ui.firstDayOfYear=Se,ui.firstDayOfWeek=De,ui.weekdays=Pe,ui.weekdaysMin=Ae,ui.weekdaysShort=He,ui.weekdaysParse=Fe,ui.weekdaysRegex=ze,ui.weekdaysShortRegex=Re,ui.weekdaysMinRegex=Be,ui.isPM=Ke,ui.meridiem=$e,et("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===b(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),
// Side effect imports
t.lang=Y("moment.lang is deprecated. Use moment.locale instead.",et),t.langData=Y("moment.langData is deprecated. Use moment.localeData instead.",rt);var li=Math.abs,di=pr("ms"),ci=pr("s"),fi=pr("m"),hi=pr("h"),mi=pr("d"),_i=pr("w"),pi=pr("M"),yi=pr("y"),vi=gr("milliseconds"),gi=gr("seconds"),Mi=gr("minutes"),bi=gr("hours"),Li=gr("days"),ki=gr("months"),Yi=gr("years"),wi=Math.round,xi={ss:44,// a few seconds to seconds
s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},Di=Math.abs,Si=Pt.prototype;
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
// This is done to register the method called with moment()
// without creating circular dependencies.
// currently HTML5 input type only supports 24-hour formats
return Si.isValid=jt,Si.abs=or,Si.add=ur,Si.subtract=lr,Si.as=mr,Si.asMilliseconds=di,Si.asSeconds=ci,Si.asMinutes=fi,Si.asHours=hi,Si.asDays=mi,Si.asWeeks=_i,Si.asMonths=pi,Si.asYears=yi,Si.valueOf=_r,Si._bubble=cr,Si.clone=yr,Si.get=vr,Si.milliseconds=vi,Si.seconds=gi,Si.minutes=Mi,Si.hours=bi,Si.days=Li,Si.weeks=Mr,Si.months=ki,Si.years=Yi,Si.humanize=wr,Si.toISOString=Dr,Si.toString=Dr,Si.toJSON=Dr,Si.locale=kn,Si.localeData=Yn,Si.toIsoString=Y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Dr),Si.lang=ti,R("X",0,0,"unix"),R("x",0,0,"valueOf"),q("x",na),q("X",ia),Q("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),Q("x",function(e,t,n){n._d=new Date(b(e))}),t.version="2.22.2",function(e){Sr=e}(xt),t.fn=si,t.min=St,t.max=Tt,t.now=Ga,t.utc=f,t.unix=Kn,t.months=tr,t.isDate=u,t.locale=et,t.invalid=p,t.duration=Qt,t.isMoment=g,t.weekdays=rr,t.parseZone=$n,t.localeData=rt,t.isDuration=Ht,t.monthsShort=nr,t.weekdaysMin=ir,t.defineLocale=tt,t.updateLocale=nt,t.locales=at,t.weekdaysShort=ar,t.normalizeUnits=F,t.relativeTimeRounding=kr,t.relativeTimeThreshold=Yr,t.calendarFormat=rn,t.prototype=si,t.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",// <input type="datetime-local" />
DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",// <input type="datetime-local" step="1" />
DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",// <input type="datetime-local" step="0.001" />
DATE:"YYYY-MM-DD",// <input type="date" />
TIME:"HH:mm",// <input type="time" />
TIME_SECONDS:"HH:mm:ss",// <input type="time" step="1" />
TIME_MS:"HH:mm:ss.SSS",// <input type="time" step="0.001" />
WEEK:"YYYY-[W]WW",// <input type="week" />
MONTH:"YYYY-MM"},t})}).call(t,n(97)(e))},/* 2 */
,/* 3 */
/***/
function(e,t,n){var r=n(7);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},/* 4 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 5 */
/***/
function(e,t,n){"use strict";e.exports=n(96),e.exports.easing=n(459),e.exports.canvas=n(460),e.exports.options=n(461)},/* 6 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 7 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 8 */
/***/
function(e,t,n){"use strict";var r=n(5);e.exports={/**
	 * @private
	 */
_set:function(e,t){return r.merge(this[e]||(this[e]={}),t)}}},/* 9 */
/***/
function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},/* 10 */
/***/
function(e,t,n){"use strict";t.__esModule=!0;var r=n(407),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,a.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},/* 11 */
/***/
function(e,t,n){var r=n(106)("wks"),a=n(58),i=n(4).Symbol,o="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=o&&i[e]||(o?i:a)("Symbol."+e))}).store=r},/* 12 */
/***/
function(e,t,n){"use strict";t.__esModule=!0;var r=n(191),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,a.default)(t))&&"function"!=typeof t?e:t}},/* 13 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(436),i=r(a),o=n(440),s=r(o),u=n(191),l=r(u);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,l.default)(t)));e.prototype=(0,s.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},/* 14 */
/***/
function(e,t,n){
// Thank's IE8 for his funny defineProperty
e.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 15 */
/***/
function(e,t,n){var r=n(3),a=n(353),i=n(36),o=Object.defineProperty;t.f=n(14)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),a)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},/* 16 */
/***/
function(e,t,n){
// 7.1.15 ToLength
var r=n(38),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},/* 17 */
/***/
function(e,t,n){
// 7.1.13 ToObject(argument)
var r=n(37);e.exports=function(e){return Object(r(e))}},/* 18 */
,/* 19 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 20 */
,/* 21 */
,/* 22 */
/***/
function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},/* 23 */
/***/
function(e,t,n){var r=n(15),a=n(57);e.exports=n(14)?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},/* 24 */
/***/
function(e,t,n){var r=n(4),a=n(23),i=n(22),o=n(58)("src"),s=Function.toString,u=(""+s).split("toString");n(35).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,n,s){var l="function"==typeof n;l&&(i(n,"name")||a(n,"name",t)),e[t]!==n&&(l&&(i(n,o)||a(n,o,e[t]?""+e[t]:u.join(String(t)))),e===r?e[t]=n:s?e[t]?e[t]=n:a(e,t,n):(delete e[t],a(e,t,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},/* 25 */
/***/
function(e,t,n){var r=n(0),a=n(6),i=n(37),o=/"/g,s=function(e,t,n,r){var a=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},/* 26 */
/***/
function(e,t,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(89),a=n(37);e.exports=function(e){return r(a(e))}},/* 27 */
/***/
function(e,t,n){var r=n(90),a=n(57),i=n(26),o=n(36),s=n(22),u=n(353),l=Object.getOwnPropertyDescriptor;t.f=n(14)?l:function(e,t){if(e=i(e),t=o(t,!0),u)try{return l(e,t)}catch(e){}if(s(e,t))return a(!r.f.call(e,t),e[t])}},/* 28 */
/***/
function(e,t,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(22),a=n(17),i=n(154)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},/* 29 */
,/* 30 */
/***/
function(e,t,n){var r=n(330),a="object"==typeof self&&self&&self.Object===Object&&self,i=r||a||Function("return this")();e.exports=i},/* 31 */
/***/
function(e,t,n){
// optional / simple context binding
var r=n(19);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},/* 32 */
/***/
function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},/* 33 */
/***/
function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){return!!e&&r(function(){
// eslint-disable-next-line no-useless-call
t?e.call(null,function(){},1):e.call(null)})}},/* 34 */
/***/
function(e,t,n){"use strict";function r(e,t,n,r){var i,o,s,u,l,d,c,f,h,m=Object.keys(n);for(i=0,o=m.length;i<o;++i)if(s=m[i],d=n[s],
// if a value is added to the model after pivot() has been called, the view
// doesn't contain it, so let's initialize the view to the target value.
t.hasOwnProperty(s)||(t[s]=d),(u=t[s])!==d&&"_"!==s[0]){if(e.hasOwnProperty(s)||(e[s]=u),l=e[s],(c=typeof d)===typeof l)if("string"===c){if(f=a(l),f.valid&&(h=a(d),h.valid)){t[s]=h.mix(f,r).rgbString();continue}}else if("number"===c&&isFinite(l)&&isFinite(d)){t[s]=l+(d-l)*r;continue}t[s]=d}}var a=n(200),i=n(5),o=function(e){i.extend(this,e),this.initialize.apply(this,arguments)};i.extend(o.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var e=this;return e._view||(e._view=i.clone(e._model)),e._start={},e},transition:function(e){var t=this,n=t._model,a=t._start,i=t._view;
// No animation -> No Transition
// No animation -> No Transition
return n&&1!==e?(i||(i=t._view={}),a||(a=t._start={}),r(a,i,n,e),t):(t._view=n,t._start=null,t)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return i.isNumber(this._model.x)&&i.isNumber(this._model.y)}}),o.extend=i.inherits,e.exports=o},/* 35 */
/***/
function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},/* 36 */
/***/
function(e,t,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},/* 37 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 38 */
/***/
function(e,t){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},/* 39 */
/***/
function(e,t,n){
// most Object methods by ES6 should accept primitives
var r=n(0),a=n(35),i=n(6);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",o)}},/* 40 */
/***/
function(e,t,n){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var r=n(31),a=n(89),i=n(17),o=n(16),s=n(171);e.exports=function(e,t){var n=1==e,u=2==e,l=3==e,d=4==e,c=6==e,f=5==e||c,h=t||s;return function(t,s,m){for(var _,p,y=i(t),v=a(y),g=r(s,m,3),M=o(v.length),b=0,L=n?h(t,M):u?h(t,0):void 0;M>b;b++)if((f||b in v)&&(_=v[b],p=g(_,b,y),e))if(n)L[b]=p;else if(p)switch(e){case 3:return!0;// some
case 5:return _;// find
case 6:return b;// findIndex
case 2:L.push(_)}else if(d)return!1;return c?-1:l||d?d:L}}},/* 41 */
/***/
function(e,t,n){"use strict";if(n(14)){var r=n(59),a=n(4),i=n(6),o=n(0),s=n(116),u=n(177),l=n(31),d=n(65),c=n(57),f=n(23),h=n(67),m=n(38),_=n(16),p=n(379),y=n(61),v=n(36),g=n(22),M=n(91),b=n(7),L=n(17),k=n(168),Y=n(62),w=n(28),x=n(63).f,D=n(170),S=n(58),T=n(11),E=n(40),j=n(107),O=n(114),P=n(173),H=n(79),A=n(111),C=n(64),F=n(172),N=n(369),I=n(15),W=n(27),z=I.f,R=W.f,B=a.RangeError,V=a.TypeError,U=a.Uint8Array,J=Array.prototype,q=u.ArrayBuffer,G=u.DataView,K=E(0),$=E(2),Q=E(3),Z=E(4),X=E(5),ee=E(6),te=j(!0),ne=j(!1),re=P.values,ae=P.keys,ie=P.entries,oe=J.lastIndexOf,se=J.reduce,ue=J.reduceRight,le=J.join,de=J.sort,ce=J.slice,fe=J.toString,he=J.toLocaleString,me=T("iterator"),_e=T("toStringTag"),pe=S("typed_constructor"),ye=S("def_constructor"),ve=s.CONSTR,ge=s.TYPED,Me=s.VIEW,be=E(1,function(e,t){return xe(O(e,e[ye]),t)}),Le=i(function(){
// eslint-disable-next-line no-undef
return 1===new U(new Uint16Array([1]).buffer)[0]}),ke=!!U&&!!U.prototype.set&&i(function(){new U(1).set({})}),Ye=function(e,t){var n=m(e);if(n<0||n%t)throw B("Wrong offset!");return n},we=function(e){if(b(e)&&ge in e)return e;throw V(e+" is not a typed array!")},xe=function(e,t){if(!(b(e)&&pe in e))throw V("It is not a typed array constructor!");return new e(t)},De=function(e,t){return Se(O(e,e[ye]),t)},Se=function(e,t){for(var n=0,r=t.length,a=xe(e,r);r>n;)a[n]=t[n++];return a},Te=function(e,t,n){z(e,t,{get:function(){return this._d[n]}})},Ee=function(e){var t,n,r,a,i,o,s=L(e),u=arguments.length,d=u>1?arguments[1]:void 0,c=void 0!==d,f=D(s);if(void 0!=f&&!k(f)){for(o=f.call(s),r=[],t=0;!(i=o.next()).done;t++)r.push(i.value);s=r}for(c&&u>2&&(d=l(d,arguments[2],2)),t=0,n=_(s.length),a=xe(this,n);n>t;t++)a[t]=c?d(s[t],t):s[t];return a},je=function(){for(var e=0,t=arguments.length,n=xe(this,t);t>e;)n[e]=arguments[e++];return n},Oe=!!U&&i(function(){he.call(new U(1))}),Pe=function(){return he.apply(Oe?ce.call(we(this)):we(this),arguments)},He={copyWithin:function(e,t){return N.call(we(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return Z(we(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){// eslint-disable-line no-unused-vars
return F.apply(we(this),arguments)},filter:function(e){return De(this,$(we(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return X(we(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(we(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){K(we(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(we(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(we(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){// eslint-disable-line no-unused-vars
return le.apply(we(this),arguments)},lastIndexOf:function(e){// eslint-disable-line no-unused-vars
return oe.apply(we(this),arguments)},map:function(e){return be(we(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){// eslint-disable-line no-unused-vars
return se.apply(we(this),arguments)},reduceRight:function(e){// eslint-disable-line no-unused-vars
return ue.apply(we(this),arguments)},reverse:function(){for(var e,t=this,n=we(t).length,r=Math.floor(n/2),a=0;a<r;)e=t[a],t[a++]=t[--n],t[n]=e;return t},some:function(e){return Q(we(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return de.call(we(this),e)},subarray:function(e,t){var n=we(this),r=n.length,a=y(e,r);return new(O(n,n[ye]))(n.buffer,n.byteOffset+a*n.BYTES_PER_ELEMENT,_((void 0===t?r:y(t,r))-a))}},Ae=function(e,t){return De(this,ce.call(we(this),e,t))},Ce=function(e){we(this);var t=Ye(arguments[1],1),n=this.length,r=L(e),a=_(r.length),i=0;if(a+t>n)throw B("Wrong length!");for(;i<a;)this[t+i]=r[i++]},Fe={entries:function(){return ie.call(we(this))},keys:function(){return ae.call(we(this))},values:function(){return re.call(we(this))}},Ne=function(e,t){return b(e)&&e[ge]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},Ie=function(e,t){return Ne(e,t=v(t,!0))?c(2,e[t]):R(e,t)},We=function(e,t,n){return!(Ne(e,t=v(t,!0))&&b(n)&&g(n,"value"))||g(n,"get")||g(n,"set")||n.configurable||g(n,"writable")&&!n.writable||g(n,"enumerable")&&!n.enumerable?z(e,t,n):(e[t]=n.value,e)};ve||(W.f=Ie,I.f=We),o(o.S+o.F*!ve,"Object",{getOwnPropertyDescriptor:Ie,defineProperty:We}),i(function(){fe.call({})})&&(fe=he=function(){return le.call(this)});var ze=h({},He);h(ze,Fe),f(ze,me,Fe.values),h(ze,{slice:Ae,set:Ce,constructor:function(){},toString:fe,toLocaleString:Pe}),Te(ze,"buffer","b"),Te(ze,"byteOffset","o"),Te(ze,"byteLength","l"),Te(ze,"length","e"),z(ze,_e,{get:function(){return this[ge]}}),
// eslint-disable-next-line max-statements
e.exports=function(e,t,n,u){u=!!u;var l=e+(u?"Clamped":"")+"Array",c="get"+e,h="set"+e,m=a[l],y=m||{},v=m&&w(m),g=!m||!s.ABV,L={},k=m&&m.prototype,D=function(e,n){var r=e._d;return r.v[c](n*t+r.o,Le)},S=function(e,n,r){var a=e._d;u&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),a.v[h](n*t+a.o,r,Le)},T=function(e,t){z(e,t,{get:function(){return D(this,t)},set:function(e){return S(this,t,e)},enumerable:!0})};g?(m=n(function(e,n,r,a){d(e,m,l,"_d");var i,o,s,u,c=0,h=0;if(b(n)){if(!(n instanceof q||"ArrayBuffer"==(u=M(n))||"SharedArrayBuffer"==u))return ge in n?Se(m,n):Ee.call(m,n);i=n,h=Ye(r,t);var y=n.byteLength;if(void 0===a){if(y%t)throw B("Wrong length!");if((o=y-h)<0)throw B("Wrong length!")}else if((o=_(a)*t)+h>y)throw B("Wrong length!");s=o/t}else s=p(n),o=s*t,i=new q(o);for(f(e,"_d",{b:i,o:h,l:o,e:s,v:new G(i)});c<s;)T(e,c++)}),k=m.prototype=Y(ze),f(k,"constructor",m)):i(function(){m(1)})&&i(function(){new m(-1)})&&A(function(e){new m,// eslint-disable-line no-new
new m(null),// eslint-disable-line no-new
new m(1.5),// eslint-disable-line no-new
new m(e)},!0)||(m=n(function(e,n,r,a){d(e,m,l);var i;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return b(n)?n instanceof q||"ArrayBuffer"==(i=M(n))||"SharedArrayBuffer"==i?void 0!==a?new y(n,Ye(r,t),a):void 0!==r?new y(n,Ye(r,t)):new y(n):ge in n?Se(m,n):Ee.call(m,n):new y(p(n))}),K(v!==Function.prototype?x(y).concat(x(v)):x(y),function(e){e in m||f(m,e,y[e])}),m.prototype=k,r||(k.constructor=m));var E=k[me],j=!!E&&("values"==E.name||void 0==E.name),O=Fe.values;f(m,pe,!0),f(k,ge,l),f(k,Me,!0),f(k,ye,m),(u?new m(1)[_e]==l:_e in k)||z(k,_e,{get:function(){return l}}),L[l]=m,o(o.G+o.W+o.F*(m!=y),L),o(o.S,l,{BYTES_PER_ELEMENT:t}),o(o.S+o.F*i(function(){y.of.call(m,1)}),l,{from:Ee,of:je}),"BYTES_PER_ELEMENT"in k||f(k,"BYTES_PER_ELEMENT",t),o(o.P,l,He),C(l),o(o.P+o.F*ke,l,{set:Ce}),o(o.P+o.F*!j,l,Fe),r||k.toString==fe||(k.toString=fe),o(o.P+o.F*i(function(){new m(1).slice()}),l,{slice:Ae}),o(o.P+o.F*(i(function(){return[1,2].toLocaleString()!=new m([1,2]).toLocaleString()})||!i(function(){k.toLocaleString.call([1,2])})),l,{toLocaleString:Pe}),H[l]=j?E:O,r||j||f(k,me,O)}}else e.exports=function(){}},/* 42 */
/***/
function(e,t,n){var r=n(374),a=n(0),i=n(106)("metadata"),o=i.store||(i.store=new(n(377))),s=function(e,t,n){var a=o.get(e);if(!a){if(!n)return;o.set(e,a=new r)}var i=a.get(t);if(!i){if(!n)return;a.set(t,i=new r)}return i},u=function(e,t,n){var r=s(t,n,!1);return void 0!==r&&r.has(e)},l=function(e,t,n){var r=s(t,n,!1);return void 0===r?void 0:r.get(e)},d=function(e,t,n,r){s(n,r,!0).set(e,t)},c=function(e,t){var n=s(e,t,!1),r=[];return n&&n.forEach(function(e,t){r.push(t)}),r},f=function(e){return void 0===e||"symbol"==typeof e?e:String(e)},h=function(e){a(a.S,"Reflect",e)};e.exports={store:o,map:s,has:u,get:l,set:d,keys:c,key:f,exp:h}},/* 43 */
,/* 44 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 45 */
/***/
function(e,t,n){"use strict";e.exports={},e.exports.Arc=n(467),e.exports.Line=n(468),e.exports.Point=n(469),e.exports.Rectangle=n(470)},/* 46 */
/***/
function(e,t){/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},/* 47 */
/***/
function(e,t,n){var r=n(58)("meta"),a=n(7),i=n(22),o=n(15).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(6)(function(){return u(Object.preventExtensions({}))}),d=function(e){o(e,r,{value:{i:"O"+ ++s,// object ID
w:{}}})},c=function(e,t){
// return primitive with prefix
if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){
// can't set metadata to uncaught frozen object
if(!u(e))return"F";
// not necessary to add metadata
if(!t)return"E";
// add missing metadata
d(e)}return e[r].i},f=function(e,t){if(!i(e,r)){
// can't set metadata to uncaught frozen object
if(!u(e))return!0;
// not necessary to add metadata
if(!t)return!1;
// add missing metadata
d(e)}return e[r].w},h=function(e){return l&&m.NEED&&u(e)&&!i(e,r)&&d(e),e},m=e.exports={KEY:r,NEED:!1,fastKey:c,getWeak:f,onFreeze:h}},/* 48 */
/***/
function(e,t,n){
// 22.1.3.31 Array.prototype[@@unscopables]
var r=n(11)("unscopables"),a=Array.prototype;void 0==a[r]&&n(23)(a,r,{}),e.exports=function(e){a[r][e]=!0}},/* 49 */
,/* 50 */
/***/
function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},/* 51 */
/***/
function(e,t,n){var r=n(84),a=n(189),i=n(124),o=Object.defineProperty;t.f=n(52)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),a)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},/* 52 */
/***/
function(e,t,n){
// Thank's IE8 for his funny defineProperty
e.exports=!n(85)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 53 */
/***/
function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},/* 54 */
/***/
function(e,t,n){/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function r(e,t){var n=i(e,t);return a(n)?n:void 0}var a=n(525),i=n(530);e.exports=r},/* 55 */
/***/
function(e,t){/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function n(e){return null!=e&&"object"==typeof e}e.exports=n},/* 56 */
/***/
function(e,t){/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var n=Array.isArray;e.exports=n},/* 57 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 58 */
/***/
function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},/* 59 */
/***/
function(e,t){e.exports=!1},/* 60 */
/***/
function(e,t,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(355),a=n(155);e.exports=Object.keys||function(e){return r(e,a)}},/* 61 */
/***/
function(e,t,n){var r=n(38),a=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?a(e+t,0):i(e,t)}},/* 62 */
/***/
function(e,t,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(3),a=n(356),i=n(155),o=n(154)("IE_PROTO"),s=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=n(152)("iframe"),r=i.length;for(t.style.display="none",n(156).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[i[r]];return u()};e.exports=Object.create||function(e,t){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[o]=e):n=u(),void 0===t?n:a(n,t)}},/* 63 */
/***/
function(e,t,n){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var r=n(355),a=n(155).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},/* 64 */
/***/
function(e,t,n){"use strict";var r=n(4),a=n(15),i=n(14),o=n(11)("species");e.exports=function(e){var t=r[e];i&&t&&!t[o]&&a.f(t,o,{configurable:!0,get:function(){return this}})}},/* 65 */
/***/
function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},/* 66 */
/***/
function(e,t,n){var r=n(31),a=n(367),i=n(168),o=n(3),s=n(16),u=n(170),l={},d={},t=e.exports=function(e,t,n,c,f){var h,m,_,p,y=f?function(){return e}:u(e),v=r(n,c,t?2:1),g=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");
// fast case for arrays with default iterator
if(i(y)){for(h=s(e.length);h>g;g++)if((p=t?v(o(m=e[g])[0],m[1]):v(e[g]))===l||p===d)return p}else for(_=y.call(e);!(m=_.next()).done;)if((p=a(_,v,m.value,t))===l||p===d)return p};t.BREAK=l,t.RETURN=d},/* 67 */
/***/
function(e,t,n){var r=n(24);e.exports=function(e,t,n){for(var a in t)r(e,a,t[a],n);return e}},/* 68 */
,/* 69 */
/***/
function(e,t,n){var r=n(44),a=n(50),i=n(188),o=n(70),s=function(e,t,n){var u,l,d,c=e&s.F,f=e&s.G,h=e&s.S,m=e&s.P,_=e&s.B,p=e&s.W,y=f?a:a[t]||(a[t]={}),v=y.prototype,g=f?r:h?r[t]:(r[t]||{}).prototype;f&&(n=t);for(u in n)
// contains in native
(l=!c&&g&&void 0!==g[u])&&u in y||(
// export native or passed
d=l?g[u]:n[u],
// prevent global pollution for namespaces
y[u]=f&&"function"!=typeof g[u]?n[u]:_&&l?i(d,r):p&&g[u]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):m&&"function"==typeof d?i(Function.call,d):d,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
m&&((y.virtual||(y.virtual={}))[u]=d,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
e&s.R&&v&&!v[u]&&o(v,u,d)))};
// type bitmap
s.F=1,// forced
s.G=2,// global
s.S=4,// static
s.P=8,// proto
s.B=16,// bind
s.W=32,// wrap
s.U=64,// safe
s.R=128,// real proto method for `library`
e.exports=s},/* 70 */
/***/
function(e,t,n){var r=n(51),a=n(92);e.exports=n(52)?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},/* 71 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 72 */
/***/
function(e,t,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(195),a=n(126);e.exports=function(e){return r(a(e))}},/* 73 */
/***/
function(e,t,n){var r=n(131)("wks"),a=n(94),i=n(44).Symbol,o="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=o&&i[e]||(o?i:a)("Symbol."+e))}).store=r},/* 74 */
/***/
function(e,t,n){"use strict";t.__esModule=!0;var r=n(445),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},/* 75 */
/***/
function(e,t,n){/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function r(e){return null==e?void 0===e?u:s:l&&l in Object(e)?i(e):o(e)}var a=n(88),i=n(526),o=n(527),s="[object Null]",u="[object Undefined]",l=a?a.toStringTag:void 0;e.exports=r},/* 76 */
/***/
function(e,t,n){/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function r(e,t,n,r){var o=!n;n||(n={});for(var s=-1,u=t.length;++s<u;){var l=t[s],d=r?r(n[l],e[l],l,n,e):void 0;void 0===d&&(d=e[l]),o?i(n,l,d):a(n,l,d)}return n}var a=n(140),i=n(327);e.exports=r},/* 77 */
/***/
function(e,t,n){var r=n(15).f,a=n(22),i=n(11)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},/* 78 */
/***/
function(e,t,n){var r=n(0),a=n(37),i=n(6),o=n(158),s="["+o+"]",u="​",l=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),c=function(e,t,n){var a={},s=i(function(){return!!o[e]()||u[e]()!=u}),l=a[e]=s?t(f):o[e];n&&(a[n]=l),r(r.P+r.F*s,"String",a)},f=c.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(d,"")),e};e.exports=c},/* 79 */
/***/
function(e,t){e.exports={}},/* 80 */
/***/
function(e,t,n){var r=n(7);e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},/* 81 */
,/* 82 */
,/* 83 */
,/* 84 */
/***/
function(e,t,n){var r=n(71);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},/* 85 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 86 */
/***/
function(e,t,n){"use strict";function r(e,t){return i.where(e,function(e){return e.position===t})}function a(e,t){e.forEach(function(e,t){return e._tmpIndex_=t,e}),e.sort(function(e,n){var r=t?n:e,a=t?e:n;return r.weight===a.weight?r._tmpIndex_-a._tmpIndex_:r.weight-a.weight}),e.forEach(function(e){delete e._tmpIndex_})}var i=n(5);/**
 * @interface ILayoutItem
 * @prop {String} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {Function} update - Takes two parameters: width and height. Returns size of item
 * @prop {Function} getPadding -  Returns an object with padding on the edges
 * @prop {Number} width - Width of item. Must be valid after update()
 * @prop {Number} height - Height of item. Must be valid after update()
 * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */
// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
e.exports={defaults:{},/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */
addBox:function(e,t){e.boxes||(e.boxes=[]),
// initialize item with default values
t.fullWidth=t.fullWidth||!1,t.position=t.position||"top",t.weight=t.weight||0,e.boxes.push(t)},/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {Object} layoutItem - the item to remove from the layout
	 */
removeBox:function(e,t){var n=e.boxes?e.boxes.indexOf(t):-1;-1!==n&&e.boxes.splice(n,1)},/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {Object} item - the item to configure with the given options
	 * @param {Object} options - the new item options.
	 */
configure:function(e,t,n){for(var r,a=["fullWidth","position","weight"],i=a.length,o=0;o<i;++o)r=a[o],n.hasOwnProperty(r)&&(t[r]=n[r])},/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {Number} width - the width to fit into
	 * @param {Number} height - the height to fit into
	 */
update:function(e,t,n){function o(e){var t,n=e.isHorizontal();n?(t=e.update(e.fullWidth?b:D,x),S-=t.height):(t=e.update(w,S),D-=t.width),T.push({horizontal:n,minSize:t,box:e})}
// Function to fit a box
function s(e){var t=i.findNextWhere(T,function(t){return t.box===e});if(t)if(e.isHorizontal()){var n={left:Math.max(H,E),right:Math.max(A,j),top:0,bottom:0};
// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
// on the margin. Sometimes they need to increase in size slightly
e.update(e.fullWidth?b:D,L/2,n)}else e.update(t.minSize.width,S)}function u(e){var t=i.findNextWhere(T,function(t){return t.box===e}),n={left:0,right:0,top:C,bottom:F};t&&e.update(t.minSize.width,S,n)}function l(e){e.isHorizontal()?(e.left=e.fullWidth?f:H,e.right=e.fullWidth?t-h:H+D,e.top=B,e.bottom=B+e.height,
// Move to next point
B=e.bottom):(e.left=R,e.right=R+e.width,e.top=C,e.bottom=C+S,
// Move to next point
R=e.right)}if(e){var d=e.options.layout||{},c=i.options.toPadding(d.padding),f=c.left,h=c.right,m=c.top,_=c.bottom,p=r(e.boxes,"left"),y=r(e.boxes,"right"),v=r(e.boxes,"top"),g=r(e.boxes,"bottom"),M=r(e.boxes,"chartArea");
// Sort boxes by weight. A higher weight is further away from the chart area
a(p,!0),a(y,!1),a(v,!0),a(g,!1);
// Essentially we now have any number of boxes on each of the 4 sides.
// Our canvas looks like the following.
// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
// B1 is the bottom axis
// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
// an error will be thrown.
//
// |----------------------------------------------------|
// |                  T1 (Full Width)                   |
// |----------------------------------------------------|
// |    |    |                 T2                  |    |
// |    |----|-------------------------------------|----|
// |    |    | C1 |                           | C2 |    |
// |    |    |----|                           |----|    |
// |    |    |                                     |    |
// | L1 | L2 |           ChartArea (C0)            | R1 |
// |    |    |                                     |    |
// |    |    |----|                           |----|    |
// |    |    | C3 |                           | C4 |    |
// |    |----|-------------------------------------|----|
// |    |    |                 B1                  |    |
// |----------------------------------------------------|
// |                  B2 (Full Width)                   |
// |----------------------------------------------------|
//
// What we do to find the best sizing, we do the following
// 1. Determine the minimum size of the chart area.
// 2. Split the remaining width equally between each vertical axis
// 3. Split the remaining height equally between each horizontal axis
// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
// 5. Adjust the sizes of each axis based on it's minimum reported size.
// 6. Refit each axis
// 7. Position each axis in the final location
// 8. Tell the chart the final location of the chart area
// 9. Tell any axes that overlay the chart area the positions of the chart area
// Step 1
var b=t-f-h,L=n-m-_,k=b/2,Y=L/2,w=(t-k)/(p.length+y.length),x=(n-Y)/(v.length+g.length),D=b,S=L,T=[];i.each(p.concat(y,v,g),o);
// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
var E=0,j=0,O=0,P=0;i.each(v.concat(g),function(e){if(e.getPadding){var t=e.getPadding();E=Math.max(E,t.left),j=Math.max(j,t.right)}}),i.each(p.concat(y),function(e){if(e.getPadding){var t=e.getPadding();O=Math.max(O,t.top),P=Math.max(P,t.bottom)}});
// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
// be if the axes are drawn at their minimum sizes.
// Steps 5 & 6
var H=f,A=h,C=m,F=_;
// Update, and calculate the left and right margins for the horizontal boxes
i.each(p.concat(y),s),i.each(p,function(e){H+=e.width}),i.each(y,function(e){A+=e.width}),
// Set the Left and Right margins for the horizontal boxes
i.each(v.concat(g),s),
// Figure out how much margin is on the top and bottom of the vertical boxes
i.each(v,function(e){C+=e.height}),i.each(g,function(e){F+=e.height}),
// Let the left layout know the final margin
i.each(p.concat(y),u),
// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
H=f,A=h,C=m,F=_,i.each(p,function(e){H+=e.width}),i.each(y,function(e){A+=e.width}),i.each(v,function(e){C+=e.height}),i.each(g,function(e){F+=e.height});
// We may be adding some padding to account for rotated x axis labels
var N=Math.max(E-H,0);H+=N,A+=Math.max(j-A,0);var I=Math.max(O-C,0);C+=I,F+=Math.max(P-F,0);
// Figure out if our chart area changed. This would occur if the dataset layout label rotation
// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
// without calling `fit` again
var W=n-C-F,z=t-H-A;z===D&&W===S||(i.each(p,function(e){e.height=W}),i.each(y,function(e){e.height=W}),i.each(v,function(e){e.fullWidth||(e.width=z)}),i.each(g,function(e){e.fullWidth||(e.width=z)}),S=W,D=z);
// Step 7 - Position the boxes
var R=f+N,B=m+I;i.each(p.concat(v),l),
// Account for chart width and height
R+=D,B+=S,i.each(y,l),i.each(g,l),
// Step 8
e.chartArea={left:H,top:C,right:H+D,bottom:C+S},
// Step 9
i.each(M,function(t){t.left=e.chartArea.left,t.top=e.chartArea.top,t.right=e.chartArea.right,t.bottom=e.chartArea.bottom,t.update(D,S)})}}}},/* 87 */
/***/
function(e,t,n){"use strict";var r=n(5);/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
e.exports={/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
formatters:{/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {String|Array} the label to display
		 */
values:function(e){return r.isArray(e)?e:""+e},/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {Number} the value to be formatted
		 * @param index {Number} the position of the tickValue parameter in the ticks array
		 * @param ticks {Array<Number>} the list of ticks being converted
		 * @return {String} string representation of the tickValue parameter
		 */
linear:function(e,t,n){
// If we have lots of ticks, don't use the ones
var a=n.length>3?n[2]-n[1]:n[1]-n[0];
// If we have a number like 2.5 as the delta, figure out how many decimal places we need
Math.abs(a)>1&&e!==Math.floor(e)&&(
// not an integer
a=e-Math.floor(e));var i=r.log10(Math.abs(a)),o="";if(0!==e){var s=-1*Math.floor(i);s=Math.max(Math.min(s,20),0),// toFixed has a max of 20 decimal places
o=e.toFixed(s)}else o="0";return o},logarithmic:function(e,t,n){var a=e/Math.pow(10,Math.floor(r.log10(e)));return 0===e?"0":1===a||2===a||5===a||0===t||t===n.length-1?e.toExponential():""}}}},/* 88 */
/***/
function(e,t,n){var r=n(30),a=r.Symbol;e.exports=a},/* 89 */
/***/
function(e,t,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(32);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},/* 90 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 91 */
/***/
function(e,t,n){
// getting tag from 19.1.3.6 Object.prototype.toString()
var r=n(32),a=n(11)("toStringTag"),i="Arguments"==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),a))?n:i?r(t):"Object"==(s=r(t))&&"function"==typeof t.callee?"Arguments":s}},/* 92 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 93 */
/***/
function(e,t,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(194),a=n(132);e.exports=Object.keys||function(e){return r(e,a)}},/* 94 */
/***/
function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},/* 95 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 96 */
/***/
function(e,t,n){"use strict";/**
 * @namespace Chart.helpers
 */
var r={/**
	 * An empty function that can be used, for example, for optional callback.
	 */
noop:function(){},/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {Number}
	 * @function
	 */
uid:function(){var e=0;return function(){return e++}}(),/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
isNullOrUndef:function(e){return null===e||void 0===e},/**
	 * Returns true if `value` is an array, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @function
	 */
isArray:Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
isObject:function(e){return null!==e&&"[object Object]"===Object.prototype.toString.call(e)},/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
valueOrDefault:function(e,t){return void 0===e?t:e},/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {Number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
valueAtIndexOrDefault:function(e,t,n){return r.valueOrDefault(r.isArray(e)?e[t]:e,n)},/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {Function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
callback:function(e,t,n){if(e&&"function"==typeof e.call)return e.apply(n,t)},/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {Object|Array} loopable - The object or array to be iterated.
	 * @param {Function} fn - The function to call for each item.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
	 */
each:function(e,t,n,a){var i,o,s;if(r.isArray(e))if(o=e.length,a)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(r.isObject(e))for(s=Object.keys(e),o=s.length,i=0;i<o;i++)t.call(n,e[s[i]],s[i])},/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see http://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {Boolean}
	 */
arrayEquals:function(e,t){var n,a,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,a=e.length;n<a;++n)if(i=e[n],o=t[n],i instanceof Array&&o instanceof Array){if(!r.arrayEquals(i,o))return!1}else if(i!==o)
// NOTE: two different object instances will never be equal: {x:20} != {x:20}
return!1;return!0},/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
clone:function(e){if(r.isArray(e))return e.map(r.clone);if(r.isObject(e)){for(var t={},n=Object.keys(e),a=n.length,i=0;i<a;++i)t[n[i]]=r.clone(e[n[i]]);return t}return e},/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
	 * @private
	 */
_merger:function(e,t,n,a){var i=t[e],o=n[e];r.isObject(i)&&r.isObject(o)?r.merge(i,o,a):t[e]=r.clone(o)},/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
_mergerIf:function(e,t,n){var a=t[e],i=n[e];r.isObject(a)&&r.isObject(i)?r.mergeIf(a,i):t.hasOwnProperty(e)||(t[e]=r.clone(i))},/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @param {Object} [options] - Merging options:
	 * @param {Function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {Object} The `target` object.
	 */
merge:function(e,t,n){var a,i,o,s,u,l=r.isArray(t)?t:[t],d=l.length;if(!r.isObject(e))return e;for(n=n||{},a=n.merger||r._merger,i=0;i<d;++i)if(t=l[i],r.isObject(t))for(o=Object.keys(t),u=0,s=o.length;u<s;++u)a(o[u],e,t,n);return e},/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @returns {Object} The `target` object.
	 */
mergeIf:function(e,t){return r.merge(e,t,{merger:r._mergerIf})},/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {Object} target - The target object in which all objects are merged into.
	 * @param {Object} arg1 - Object containing additional properties to merge in target.
	 * @param {Object} argN - Additional objects containing properties to merge in target.
	 * @returns {Object} The `target` object.
	 */
extend:function(e){for(var t=function(t,n){e[n]=t},n=1,a=arguments.length;n<a;++n)r.each(arguments[n],t);return e},/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
inherits:function(e){var t=this,n=e&&e.hasOwnProperty("constructor")?e.constructor:function(){return t.apply(this,arguments)},a=function(){this.constructor=n};return a.prototype=t.prototype,n.prototype=new a,n.extend=r.inherits,e&&r.extend(n.prototype,e),n.__super__=t.prototype,n}};e.exports=r,
// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
r.callCallback=r.callback,/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.indexOf=function(e,t,n){return Array.prototype.indexOf.call(e,t,n)},/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.getValueOrDefault=r.valueOrDefault,/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.getValueAtIndexOrDefault=r.valueAtIndexOrDefault},/* 97 */
/***/
function(e,t){e.exports=function(e){
// module.parent = undefined by default
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},/* 98 */
/***/
function(e,t,n){/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function r(e){return null!=e&&i(e.length)&&!a(e)}var a=n(329),i=n(335);e.exports=r},/* 99 */
/***/
function(e,t){/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function n(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}/** Used for built-in method references. */
var r=Object.prototype;e.exports=n},/* 100 */
/***/
function(e,t,n){/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function r(e){return o(e)?a(e):i(e)}var a=n(337),i=n(543),o=n(98);e.exports=r},/* 101 */
/***/
function(e,t,n){/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function r(e){return"symbol"==typeof e||i(e)&&a(e)==o}var a=n(75),i=n(55),o="[object Symbol]";e.exports=r},/* 102 */
/***/
function(e,t,n){/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var a=n(562),i=n(563),o=n(564),s=n(565),u=n(566);
// Add methods to `ListCache`.
r.prototype.clear=a,r.prototype.delete=i,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,e.exports=r},/* 103 */
/***/
function(e,t,n){/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function r(e,t){for(var n=e.length;n--;)if(a(e[n][0],t))return n;return-1}var a=n(142);e.exports=r},/* 104 */
/***/
function(e,t,n){var r=n(54),a=r(Object,"create");e.exports=a},/* 105 */
/***/
function(e,t,n){/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function r(e,t){var n=e.__data__;return a(t)?n["string"==typeof t?"string":"hash"]:n.map}var a=n(580);e.exports=r},/* 106 */
/***/
function(e,t,n){var r=n(4),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return a[e]||(a[e]={})}},/* 107 */
/***/
function(e,t,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(26),a=n(16),i=n(61);e.exports=function(e){return function(t,n,o){var s,u=r(t),l=a(u.length),d=i(o,l);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&n!=n){for(;l>d;)
// eslint-disable-next-line no-self-compare
if((s=u[d++])!=s)return!0}else for(;l>d;d++)if((e||d in u)&&u[d]===n)return e||d||0;return!e&&-1}}},/* 108 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 109 */
/***/
function(e,t,n){
// 7.2.2 IsArray(argument)
var r=n(32);e.exports=Array.isArray||function(e){return"Array"==r(e)}},/* 110 */
/***/
function(e,t,n){
// 7.2.8 IsRegExp(argument)
var r=n(7),a=n(32),i=n(11)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},/* 111 */
/***/
function(e,t,n){var r=n(11)("iterator"),a=!1;try{var i=[7][r]();i.return=function(){a=!0},
// eslint-disable-next-line no-throw-literal
Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var i=[7],o=i[r]();o.next=function(){return{done:n=!0}},i[r]=function(){return o},e(i)}catch(e){}return n}},/* 112 */
/***/
function(e,t,n){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var r=n(3);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},/* 113 */
/***/
function(e,t,n){"use strict";var r=n(23),a=n(24),i=n(6),o=n(37),s=n(11);e.exports=function(e,t,n){var u=s(e),l=n(o,u,""[e]),d=l[0],c=l[1];i(function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})&&(a(String.prototype,e,d),r(RegExp.prototype,u,2==t?function(e,t){return c.call(e,this,t)}:function(e){return c.call(e,this)}))}},/* 114 */
/***/
function(e,t,n){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var r=n(3),a=n(19),i=n(11)("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[i])?t:a(n)}},/* 115 */
/***/
function(e,t,n){"use strict";var r=n(4),a=n(0),i=n(24),o=n(67),s=n(47),u=n(66),l=n(65),d=n(7),c=n(6),f=n(111),h=n(77),m=n(159);e.exports=function(e,t,n,_,p,y){var v=r[e],g=v,M=p?"set":"add",b=g&&g.prototype,L={},k=function(e){var t=b[e];i(b,e,"delete"==e?function(e){return!(y&&!d(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!d(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!d(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof g&&(y||b.forEach&&!c(function(){(new g).entries().next()}))){var Y=new g,w=Y[M](y?{}:-0,1)!=Y,x=c(function(){Y.has(1)}),D=f(function(e){new g(e)}),S=!y&&c(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var e=new g,t=5;t--;)e[M](t,t);return!e.has(-0)});D||(g=t(function(t,n){l(t,g,e);var r=m(new v,t,g);return void 0!=n&&u(n,p,r[M],r),r}),g.prototype=b,b.constructor=g),(x||S)&&(k("delete"),k("has"),p&&k("get")),(S||w)&&k(M),
// weak collections should not contains .clear method
y&&b.clear&&delete b.clear}else
// create collection constructor
g=_.getConstructor(t,e,p,M),o(g.prototype,n),s.NEED=!0;return h(g,e),L[e]=g,a(a.G+a.W+a.F*(g!=v),L),y||_.setStrong(g,e,p),g}},/* 116 */
/***/
function(e,t,n){for(var r,a=n(4),i=n(23),o=n(58),s=o("typed_array"),u=o("view"),l=!(!a.ArrayBuffer||!a.DataView),d=l,c=0,f="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");c<9;)(r=a[f[c++]])?(i(r.prototype,s,!0),i(r.prototype,u,!0)):d=!1;e.exports={ABV:l,CONSTR:d,TYPED:s,VIEW:u}},/* 117 */
/***/
function(e,t,n){"use strict";
// Forced replacement prototype accessors methods
e.exports=n(59)||!n(6)(function(){var e=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,e,function(){}),delete n(4)[e]})},/* 118 */
/***/
function(e,t,n){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var r=n(0);e.exports=function(e){r(r.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},/* 119 */
/***/
function(e,t,n){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var r=n(0),a=n(19),i=n(31),o=n(66);e.exports=function(e){r(r.S,e,{from:function(e){var t,n,r,s,u=arguments[1];return a(this),t=void 0!==u,t&&a(u),void 0==e?new this:(n=[],t?(r=0,s=i(u,arguments[2],2),o(e,!1,function(e){n.push(s(e,r++))})):o(e,!1,n.push,n),new this(n))}})}},/* 120 */
,/* 121 */
,/* 122 */
,/* 123 */
,/* 124 */
/***/
function(e,t,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(71);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},/* 125 */
/***/
function(e,t){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},/* 126 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 127 */
/***/
function(e,t){e.exports=!0},/* 128 */
/***/
function(e,t){e.exports={}},/* 129 */
/***/
function(e,t,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(84),a=n(416),i=n(132),o=n(130)("IE_PROTO"),s=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=n(190)("iframe"),r=i.length;for(t.style.display="none",n(420).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[i[r]];return u()};e.exports=Object.create||function(e,t){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[o]=e):n=u(),void 0===t?n:a(n,t)}},/* 130 */
/***/
function(e,t,n){var r=n(131)("keys"),a=n(94);e.exports=function(e){return r[e]||(r[e]=a(e))}},/* 131 */
/***/
function(e,t,n){var r=n(44),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return a[e]||(a[e]={})}},/* 132 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 133 */
/***/
function(e,t,n){var r=n(51).f,a=n(53),i=n(73)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},/* 134 */
/***/
function(e,t,n){t.f=n(73)},/* 135 */
/***/
function(e,t,n){var r=n(44),a=n(50),i=n(127),o=n(134),s=n(51).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:o.f(e)})}},/* 136 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 137 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(20),_=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"logoutHandler",value:function(){localStorage.removeItem("jwtToken"),localStorage.removeItem("userid"),this.props.history.push("/admin")}},{key:"render",value:function(){var e=this;return h.default.createElement("nav",{className:"navbar navbar-default"},h.default.createElement("div",{className:"container-fluid"},h.default.createElement("ul",{className:"nav navbar-nav navbar-left"},h.default.createElement("li",null,h.default.createElement(m.Link,{to:"/heatmap",className:"dropdown-toggle","data-toggle":"dropdown"},h.default.createElement("p",null,"Admin"))),h.default.createElement("li",null,h.default.createElement(m.Link,{to:"/createque",className:"dropdown-toggle","data-toggle":"dropdown"},h.default.createElement("p",null,"Create Question")))),h.default.createElement("ul",{className:"nav navbar-nav navbar-right"},h.default.createElement("li",null,h.default.createElement("a",{href:"javascript:void(0)",onClick:function(){e.logoutHandler()},className:"dropdown-toggle","data-toggle":"dropdown"},h.default.createElement("p",null,"Logout"))))))}}]),t}(f.Component);t.default=(0,m.withRouter)(_)},/* 138 */
/***/
function(e,t,n){var r,a;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */
/* jshint unused: true, undef: true, strict: true */
!function(i,o){
// AMD - RequireJS
r=o,void 0!==(a="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=a)}("undefined"!=typeof window&&window,function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){
// set events hash
var n=this._events=this._events||{},r=n[e]=n[e]||[];
// only add once
return-1==r.indexOf(t)&&r.push(t),this}},t.once=function(e,t){if(e&&t){
// add event
this.on(e,t);
// set once flag
// set onceEvents hash
var n=this._onceEvents=this._onceEvents||{};
// set flag
return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var r=n.indexOf(t);return-1!=r&&n.splice(r,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){
// copy over to avoid interference if .off() in listener
n=n.slice(0),t=t||[];for(var r=this._onceEvents&&this._onceEvents[e],a=0;a<n.length;a++){var i=n[a];r&&r[i]&&(
// remove listener
// remove before trigger to prevent recursion
this.off(e,i),
// unset once flag
delete r[i]),
// trigger listener
i.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})},/* 139 */
/***/
function(e,t,n){var r,a;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */
!function(i,o){
// AMD
r=o,void 0!==(a="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=a)}(window,function(){"use strict";
// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}function t(){}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;t<l;t++){e[u[t]]=0}return e}
// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function r(e){var t=getComputedStyle(e);return t||s("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function a(){
// setup once
if(!d){d=!0;
// -------------------------- box sizing -------------------------- //
/**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var a=r(t);
// round value for browser zoom. desandro/masonry#928
o=200==Math.round(e(a.width)),i.isBoxSizeOuter=o,n.removeChild(t)}}
// -------------------------- getSize -------------------------- //
function i(t){
// do not proceed on non-objects
if(a(),
// use querySeletor if elem is string
"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=r(t);
// if hidden, everything is 0
if("none"==i.display)return n();var s={};s.width=t.offsetWidth,s.height=t.offsetHeight;
// get all measurements
for(var d=s.isBorderBox="border-box"==i.boxSizing,c=0;c<l;c++){var f=u[c],h=i[f],m=parseFloat(h);
// any 'auto', 'medium' value will be 0
s[f]=isNaN(m)?0:m}var _=s.paddingLeft+s.paddingRight,p=s.paddingTop+s.paddingBottom,y=s.marginLeft+s.marginRight,v=s.marginTop+s.marginBottom,g=s.borderLeftWidth+s.borderRightWidth,M=s.borderTopWidth+s.borderBottomWidth,b=d&&o,L=e(i.width);!1!==L&&(s.width=L+(
// add padding and border unless it's already including it
b?0:_+g));var k=e(i.height);
// add padding and border unless it's already including it
return!1!==k&&(s.height=k+(b?0:p+M)),s.innerWidth=s.width-(_+g),s.innerHeight=s.height-(p+M),s.outerWidth=s.width+y,s.outerHeight=s.height+v,s}}var o,s="undefined"==typeof console?t:function(e){console.error(e)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],l=u.length,d=!1;return i})},/* 140 */
/***/
function(e,t,n){/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function r(e,t,n){var r=e[t];s.call(e,t)&&i(r,n)&&(void 0!==n||t in e)||a(e,t,n)}var a=n(327),i=n(142),o=Object.prototype,s=o.hasOwnProperty;e.exports=r},/* 141 */
/***/
function(e,t){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n},/* 142 */
/***/
function(e,t){/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},/* 143 */
/***/
function(e,t){/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function n(e){return function(t){return e(t)}}e.exports=n},/* 144 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){var r=n(330),a="object"==typeof t&&t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,o=i&&i.exports===a,s=o&&r.process,u=function(){try{return s&&s.binding&&s.binding("util")}catch(e){}}();e.exports=u}).call(t,n(97)(e))},/* 145 */
/***/
function(e,t,n){var r=n(54),a=n(30),i=r(a,"Map");e.exports=i},/* 146 */
/***/
function(e,t,n){var r=n(592),a=n(346),i=Object.prototype,o=i.propertyIsEnumerable,s=Object.getOwnPropertySymbols,u=s?function(e){return null==e?[]:(e=Object(e),r(s(e),function(t){return o.call(e,t)}))}:a;e.exports=u},/* 147 */
/***/
function(e,t){/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function n(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}e.exports=n},/* 148 */
/***/
function(e,t,n){var r=n(340),a=r(Object.getPrototypeOf,Object);e.exports=a},/* 149 */
/***/
function(e,t,n){var r=n(595),a=n(145),i=n(596),o=n(597),s=n(598),u=n(75),l=n(331),d=l(r),c=l(a),f=l(i),h=l(o),m=l(s),_=u;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
(r&&"[object DataView]"!=_(new r(new ArrayBuffer(1)))||a&&"[object Map]"!=_(new a)||i&&"[object Promise]"!=_(i.resolve())||o&&"[object Set]"!=_(new o)||s&&"[object WeakMap]"!=_(new s))&&(_=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?l(n):"";if(r)switch(r){case d:return"[object DataView]";case c:return"[object Map]";case f:return"[object Promise]";case h:return"[object Set]";case m:return"[object WeakMap]"}return t}),e.exports=_},/* 150 */
/***/
function(e,t,n){/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function r(e){var t=new e.constructor(e.byteLength);return new a(t).set(new a(e)),t}var a=n(601);e.exports=r},/* 151 */
/***/
function(e,t,n){/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function r(e,t){return a(e)?e:i(e,t)?[e]:o(s(e))}var a=n(56),i=n(613),o=n(614),s=n(617);e.exports=r},/* 152 */
/***/
function(e,t,n){var r=n(7),a=n(4).document,i=r(a)&&r(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},/* 153 */
/***/
function(e,t,n){var r=n(4),a=n(35),i=n(59),o=n(354),s=n(15).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:o.f(e)})}},/* 154 */
/***/
function(e,t,n){var r=n(106)("keys"),a=n(58);e.exports=function(e){return r[e]||(r[e]=a(e))}},/* 155 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 156 */
/***/
function(e,t,n){var r=n(4).document;e.exports=r&&r.documentElement},/* 157 */
/***/
function(e,t,n){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var r=n(7),a=n(3),i=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,r){try{r=n(31)(Function.call,n(27).f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},/* 158 */
/***/
function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 159 */
/***/
function(e,t,n){var r=n(7),a=n(157).set;e.exports=function(e,t,n){var i,o=t.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(e,i),e}},/* 160 */
/***/
function(e,t,n){"use strict";var r=n(38),a=n(37);e.exports=function(e){var t=String(a(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},/* 161 */
/***/
function(e,t){
// 20.2.2.28 Math.sign(x)
e.exports=Math.sign||function(e){
// eslint-disable-next-line no-self-compare
return 0==(e=+e)||e!=e?e:e<0?-1:1}},/* 162 */
/***/
function(e,t){
// 20.2.2.14 Math.expm1(x)
var n=Math.expm1;e.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(e){return 0==(e=+e)?e:e>-1e-6&&e<1e-6?e+e*e/2:Math.exp(e)-1}:n},/* 163 */
/***/
function(e,t,n){var r=n(38),a=n(37);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,n){var i,o,s=String(a(t)),u=r(n),l=s.length;return u<0||u>=l?e?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):i:e?s.slice(u,u+2):o-56320+(i-55296<<10)+65536)}}},/* 164 */
/***/
function(e,t,n){"use strict";var r=n(59),a=n(0),i=n(24),o=n(23),s=n(22),u=n(79),l=n(165),d=n(77),c=n(28),f=n(11)("iterator"),h=!([].keys&&"next"in[].keys()),m=function(){return this};e.exports=function(e,t,n,_,p,y,v){l(n,t,_);var g,M,b,L=function(e){if(!h&&e in x)return x[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",Y="values"==p,w=!1,x=e.prototype,D=x[f]||x["@@iterator"]||p&&x[p],S=!h&&D||L(p),T=p?Y?L("entries"):S:void 0,E="Array"==t?x.entries||D:D;if(
// Fix native
E&&(b=c(E.call(new e)))!==Object.prototype&&b.next&&(
// Set @@toStringTag to native iterators
d(b,k,!0),
// fix for some old engines
r||s(b,f)||o(b,f,m)),
// fix Array#{values, @@iterator}.name in V8 / FF
Y&&D&&"values"!==D.name&&(w=!0,S=function(){return D.call(this)}),
// Define iterator
r&&!v||!h&&!w&&x[f]||o(x,f,S),
// Plug for library
u[t]=S,u[k]=m,p)if(g={values:Y?S:L("values"),keys:y?S:L("keys"),entries:T},v)for(M in g)M in x||i(x,M,g[M]);else a(a.P+a.F*(h||w),t,g);return g}},/* 165 */
/***/
function(e,t,n){"use strict";var r=n(62),a=n(57),i=n(77),o={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n(23)(o,n(11)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(o,{next:a(1,n)}),i(e,t+" Iterator")}},/* 166 */
/***/
function(e,t,n){
// helper for String#{startsWith, endsWith, includes}
var r=n(110),a=n(37);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},/* 167 */
/***/
function(e,t,n){var r=n(11)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},/* 168 */
/***/
function(e,t,n){
// check on default Array iterator
var r=n(79),a=n(11)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[a]===e)}},/* 169 */
/***/
function(e,t,n){"use strict";var r=n(15),a=n(57);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},/* 170 */
/***/
function(e,t,n){var r=n(91),a=n(11)("iterator"),i=n(79);e.exports=n(35).getIteratorMethod=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||i[r(e)]}},/* 171 */
/***/
function(e,t,n){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var r=n(727);e.exports=function(e,t){return new(r(e))(t)}},/* 172 */
/***/
function(e,t,n){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var r=n(17),a=n(61),i=n(16);e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,s=a(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,l=void 0===u?n:a(u,n);l>s;)t[s++]=e;return t}},/* 173 */
/***/
function(e,t,n){"use strict";var r=n(48),a=n(370),i=n(79),o=n(26);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
e.exports=n(164)(Array,"Array",function(e,t){this._t=o(e),// target
this._i=0,// next index
this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,a(1)):"keys"==t?a(0,n):"values"==t?a(0,e[n]):a(0,[n,e[n]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
i.Arguments=i.Array,r("keys"),r("values"),r("entries")},/* 174 */
/***/
function(e,t,n){var r,a,i,o=n(31),s=n(360),u=n(156),l=n(152),d=n(4),c=d.process,f=d.setImmediate,h=d.clearImmediate,m=d.MessageChannel,_=d.Dispatch,p=0,y={},v=function(){var e=+this;
// eslint-disable-next-line no-prototype-builtins
if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},g=function(e){v.call(e.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
f&&h||(f=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return y[++p]=function(){
// eslint-disable-next-line no-new-func
s("function"==typeof e?e:Function(e),t)},r(p),p},h=function(e){delete y[e]},
// Node.js 0.8-
"process"==n(32)(c)?r=function(e){c.nextTick(o(v,e,1))}:_&&_.now?r=function(e){_.now(o(v,e,1))}:m?(a=new m,i=a.port2,a.port1.onmessage=g,r=o(i.postMessage,i,1)):d.addEventListener&&"function"==typeof postMessage&&!d.importScripts?(r=function(e){d.postMessage(e+"","*")},d.addEventListener("message",g,!1)):r="onreadystatechange"in l("script")?function(e){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),v.call(e)}}:function(e){setTimeout(o(v,e,1),0)}),e.exports={set:f,clear:h}},/* 175 */
/***/
function(e,t,n){var r=n(4),a=n(174).set,i=r.MutationObserver||r.WebKitMutationObserver,o=r.process,s=r.Promise,u="process"==n(32)(o);e.exports=function(){var e,t,n,l=function(){var r,a;for(u&&(r=o.domain)&&r.exit();e;){a=e.fn,e=e.next;try{a()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};
// Node.js
if(u)n=function(){o.nextTick(l)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var d=s.resolve();n=function(){d.then(l)}}else n=function(){
// strange IE + webpack dev server bug - use .call(global)
a.call(r,l)};else{var c=!0,f=document.createTextNode("");new i(l).observe(f,{characterData:!0}),// eslint-disable-line no-new
n=function(){f.data=c=!c}}return function(r){var a={fn:r,next:void 0};t&&(t.next=a),e||(e=a,n()),t=a}}},/* 176 */
/***/
function(e,t,n){"use strict";function r(e){var t,n;this.promise=new e(function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r}),this.resolve=a(t),this.reject=a(n)}
// 25.4.1.5 NewPromiseCapability(C)
var a=n(19);e.exports.f=function(e){return new r(e)}},/* 177 */
/***/
function(e,t,n){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function r(e,t,n){var r,a,i,o=new Array(n),s=8*n-t-1,u=(1<<s)-1,l=u>>1,d=23===t?N(2,-24)-N(2,-77):0,c=0,f=e<0||0===e&&1/e<0?1:0;for(e=F(e),
// eslint-disable-next-line no-self-compare
e!=e||e===A?(
// eslint-disable-next-line no-self-compare
a=e!=e?1:0,r=u):(r=I(W(e)/z),e*(i=N(2,-r))<1&&(r--,i*=2),e+=r+l>=1?d/i:d*N(2,1-l),e*i>=2&&(r++,i/=2),r+l>=u?(a=0,r=u):r+l>=1?(a=(e*i-1)*N(2,t),r+=l):(a=e*N(2,l-1)*N(2,t),r=0));t>=8;o[c++]=255&a,a/=256,t-=8);for(r=r<<t|a,s+=t;s>0;o[c++]=255&r,r/=256,s-=8);return o[--c]|=128*f,o}function a(e,t,n){var r,a=8*n-t-1,i=(1<<a)-1,o=i>>1,s=a-7,u=n-1,l=e[u--],d=127&l;for(l>>=7;s>0;d=256*d+e[u],u--,s-=8);for(r=d&(1<<-s)-1,d>>=-s,s+=t;s>0;r=256*r+e[u],u--,s-=8);if(0===d)d=1-o;else{if(d===i)return r?NaN:l?-A:A;r+=N(2,t),d-=o}return(l?-1:1)*r*N(2,d-t)}function i(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function o(e){return[255&e]}function s(e){return[255&e,e>>8&255]}function u(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function l(e){return r(e,52,8)}function d(e){return r(e,23,4)}function c(e,t,n){x(e[T],t,{get:function(){return this[n]}})}function f(e,t,n,r){var a=+n,i=Y(a);if(i+t>e[B])throw H(E);var o=e[R]._b,s=i+e[V],u=o.slice(s,s+t);return r?u:u.reverse()}function h(e,t,n,r,a,i){var o=+n,s=Y(o);if(s+t>e[B])throw H(E);for(var u=e[R]._b,l=s+e[V],d=r(+a),c=0;c<t;c++)u[l+c]=d[i?c:t-c-1]}var m=n(4),_=n(14),p=n(59),y=n(116),v=n(23),g=n(67),M=n(6),b=n(65),L=n(38),k=n(16),Y=n(379),w=n(63).f,x=n(15).f,D=n(172),S=n(77),T="prototype",E="Wrong index!",j=m.ArrayBuffer,O=m.DataView,P=m.Math,H=m.RangeError,A=m.Infinity,C=j,F=P.abs,N=P.pow,I=P.floor,W=P.log,z=P.LN2,R=_?"_b":"buffer",B=_?"_l":"byteLength",V=_?"_o":"byteOffset";if(y.ABV){if(!M(function(){j(1)})||!M(function(){new j(-1)})||M(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new j,new j(1.5),new j(NaN),"ArrayBuffer"!=j.name})){j=function(e){return b(this,j),new C(Y(e))};for(var U,J=j[T]=C[T],q=w(C),G=0;q.length>G;)(U=q[G++])in j||v(j,U,C[U]);p||(J.constructor=j)}
// iOS Safari 7.x bug
var K=new O(new j(2)),$=O[T].setInt8;K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||g(O[T],{setInt8:function(e,t){$.call(this,e,t<<24>>24)},setUint8:function(e,t){$.call(this,e,t<<24>>24)}},!0)}else j=function(e){b(this,j,"ArrayBuffer");var t=Y(e);this._b=D.call(new Array(t),0),this[B]=t},O=function(e,t,n){b(this,O,"DataView"),b(e,j,"DataView");var r=e[B],a=L(t);if(a<0||a>r)throw H("Wrong offset!");if(n=void 0===n?r-a:k(n),a+n>r)throw H("Wrong length!");this[R]=e,this[V]=a,this[B]=n},_&&(c(j,"byteLength","_l"),c(O,"buffer","_b"),c(O,"byteLength","_l"),c(O,"byteOffset","_o")),g(O[T],{getInt8:function(e){return f(this,1,e)[0]<<24>>24},getUint8:function(e){return f(this,1,e)[0]},getInt16:function(e){var t=f(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=f(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return i(f(this,4,e,arguments[1]))},getUint32:function(e){return i(f(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return a(f(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return a(f(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){h(this,1,e,o,t)},setUint8:function(e,t){h(this,1,e,o,t)},setInt16:function(e,t){h(this,2,e,s,t,arguments[2])},setUint16:function(e,t){h(this,2,e,s,t,arguments[2])},setInt32:function(e,t){h(this,4,e,u,t,arguments[2])},setUint32:function(e,t){h(this,4,e,u,t,arguments[2])},setFloat32:function(e,t){h(this,4,e,d,t,arguments[2])},setFloat64:function(e,t){h(this,8,e,l,t,arguments[2])}});S(j,"ArrayBuffer"),S(O,"DataView"),v(O[T],y.VIEW,!0),t.ArrayBuffer=j,t.DataView=O},/* 178 */
/***/
function(e,t,n){var r=n(4),a=r.navigator;e.exports=a&&a.userAgent||""},/* 179 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(2),i=r(a),o=n(180),s=r(o),u=n(20),l=n(406),d=r(l);s.default.render(i.default.createElement(u.BrowserRouter,null,i.default.createElement(d.default,null)),document.getElementById("app-wrapper"));/**
 * 
 * Firebase Setup
 */
var c={apiKey:"AIzaSyAkBtJl8rWxCKHHQqrdgIA9FTrdp8S8rMI",authDomain:"fir-97b6e.firebaseapp.com",databaseURL:"https://fir-97b6e.firebaseio.com",projectId:"fir-97b6e",storageBucket:"",messagingSenderId:"1071020519889"};if("serviceWorker"in navigator){firebase.initializeApp(c);var f=firebase.messaging();f.requestPermission().then(function(){return f.getToken()}).then(function(e){console.log(e),window.localStorage.setItem("deviceToken",e)}).catch(function(e){console.log("No Permission!! ",e),alert("You have blocked notifications. Please unblock them to get our notifications So that you can win many Prizes!!")}),f.onMessage(function(e){console.log("Message received. ",e)}),navigator.serviceWorker.register("firebase-messaging-sw.js").then(function(e){"sync"in e&&console.log("Set reg in store !!!"),console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)})}},/* 180 */
,/* 181 */
,/* 182 */
,/* 183 */
,/* 184 */
,/* 185 */
,/* 186 */
,/* 187 */
,/* 188 */
/***/
function(e,t,n){
// optional / simple context binding
var r=n(410);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},/* 189 */
/***/
function(e,t,n){e.exports=!n(52)&&!n(85)(function(){return 7!=Object.defineProperty(n(190)("div"),"a",{get:function(){return 7}}).a})},/* 190 */
/***/
function(e,t,n){var r=n(71),a=n(44).document,i=r(a)&&r(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},/* 191 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(411),i=r(a),o=n(426),s=r(o),u="function"==typeof s.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===u(i.default)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":u(e)}},/* 192 */
/***/
function(e,t,n){"use strict";var r=n(127),a=n(69),i=n(193),o=n(70),s=n(53),u=n(128),l=n(415),d=n(133),c=n(421),f=n(73)("iterator"),h=!([].keys&&"next"in[].keys()),m=function(){return this};e.exports=function(e,t,n,_,p,y,v){l(n,t,_);var g,M,b,L=function(e){if(!h&&e in x)return x[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",Y="values"==p,w=!1,x=e.prototype,D=x[f]||x["@@iterator"]||p&&x[p],S=!h&&D||L(p),T=p?Y?L("entries"):S:void 0,E="Array"==t?x.entries||D:D;if(
// Fix native
E&&(b=c(E.call(new e)))!==Object.prototype&&b.next&&(
// Set @@toStringTag to native iterators
d(b,k,!0),
// fix for some old engines
r||s(b,f)||o(b,f,m)),
// fix Array#{values, @@iterator}.name in V8 / FF
Y&&D&&"values"!==D.name&&(w=!0,S=function(){return D.call(this)}),
// Define iterator
r&&!v||!h&&!w&&x[f]||o(x,f,S),
// Plug for library
u[t]=S,u[k]=m,p)if(g={values:Y?S:L("values"),keys:y?S:L("keys"),entries:T},v)for(M in g)M in x||i(x,M,g[M]);else a(a.P+a.F*(h||w),t,g);return g}},/* 193 */
/***/
function(e,t,n){e.exports=n(70)},/* 194 */
/***/
function(e,t,n){var r=n(53),a=n(72),i=n(417)(!1),o=n(130)("IE_PROTO");e.exports=function(e,t){var n,s=a(e),u=0,l=[];for(n in s)n!=o&&r(s,n)&&l.push(n);
// Don't enum bug & hidden keys
for(;t.length>u;)r(s,n=t[u++])&&(~i(l,n)||l.push(n));return l}},/* 195 */
/***/
function(e,t,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(196);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},/* 196 */
/***/
function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},/* 197 */
/***/
function(e,t,n){
// 7.1.13 ToObject(argument)
var r=n(126);e.exports=function(e){return Object(r(e))}},/* 198 */
/***/
function(e,t,n){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var r=n(194),a=n(132).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},/* 199 */
/***/
function(e,t,n){var r=n(95),a=n(92),i=n(72),o=n(124),s=n(53),u=n(189),l=Object.getOwnPropertyDescriptor;t.f=n(52)?l:function(e,t){if(e=i(e),t=o(t,!0),u)try{return l(e,t)}catch(e){}if(s(e,t))return a(!r.f.call(e,t),e[t])}},/* 200 */
/***/
function(e,t,n){/* MIT license */
var r=n(463),a=n(465),i=function(e){if(e instanceof i)return e;if(!(this instanceof i))return new i(e);this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};
// parse Color() argument
var t;"string"==typeof e?(t=a.getRgba(e),t?this.setValues("rgb",t):(t=a.getHsla(e))?this.setValues("hsl",t):(t=a.getHwb(e))&&this.setValues("hwb",t)):"object"==typeof e&&(t=e,void 0!==t.r||void 0!==t.red?this.setValues("rgb",t):void 0!==t.l||void 0!==t.lightness?this.setValues("hsl",t):void 0!==t.v||void 0!==t.value?this.setValues("hsv",t):void 0!==t.w||void 0!==t.whiteness?this.setValues("hwb",t):void 0===t.c&&void 0===t.cyan||this.setValues("cmyk",t))};i.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var e=this.values;return 1!==e.alpha?e.hwb.concat([e.alpha]):e.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var e=this.values;return e.rgb.concat([e.alpha])},hslaArray:function(){var e=this.values;return e.hsl.concat([e.alpha])},alpha:function(e){return void 0===e?this.values.alpha:(this.setValues("alpha",e),this)},red:function(e){return this.setChannel("rgb",0,e)},green:function(e){return this.setChannel("rgb",1,e)},blue:function(e){return this.setChannel("rgb",2,e)},hue:function(e){return e&&(e%=360,e=e<0?360+e:e),this.setChannel("hsl",0,e)},saturation:function(e){return this.setChannel("hsl",1,e)},lightness:function(e){return this.setChannel("hsl",2,e)},saturationv:function(e){return this.setChannel("hsv",1,e)},whiteness:function(e){return this.setChannel("hwb",1,e)},blackness:function(e){return this.setChannel("hwb",2,e)},value:function(e){return this.setChannel("hsv",2,e)},cyan:function(e){return this.setChannel("cmyk",0,e)},magenta:function(e){return this.setChannel("cmyk",1,e)},yellow:function(e){return this.setChannel("cmyk",2,e)},black:function(e){return this.setChannel("cmyk",3,e)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var e=this.values.rgb;return e[0]<<16|e[1]<<8|e[2]},luminosity:function(){for(var e=this.values.rgb,t=[],n=0;n<e.length;n++){var r=e[n]/255;t[n]=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(e){
// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
var t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level:function(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},dark:function(){
// YIQ equation from http://24ways.org/2010/calculating-color-contrast
var e=this.values.rgb;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var e=[],t=0;t<3;t++)e[t]=255-this.values.rgb[t];return this.setValues("rgb",e),this},lighten:function(e){var t=this.values.hsl;return t[2]+=t[2]*e,this.setValues("hsl",t),this},darken:function(e){var t=this.values.hsl;return t[2]-=t[2]*e,this.setValues("hsl",t),this},saturate:function(e){var t=this.values.hsl;return t[1]+=t[1]*e,this.setValues("hsl",t),this},desaturate:function(e){var t=this.values.hsl;return t[1]-=t[1]*e,this.setValues("hsl",t),this},whiten:function(e){var t=this.values.hwb;return t[1]+=t[1]*e,this.setValues("hwb",t),this},blacken:function(e){var t=this.values.hwb;return t[2]+=t[2]*e,this.setValues("hwb",t),this},greyscale:function(){var e=this.values.rgb,t=.3*e[0]+.59*e[1]+.11*e[2];return this.setValues("rgb",[t,t,t]),this},clearer:function(e){var t=this.values.alpha;return this.setValues("alpha",t-t*e),this},opaquer:function(e){var t=this.values.alpha;return this.setValues("alpha",t+t*e),this},rotate:function(e){var t=this.values.hsl,n=(t[0]+e)%360;return t[0]=n<0?360+n:n,this.setValues("hsl",t),this},/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
mix:function(e,t){var n=this,r=e,a=void 0===t?.5:t,i=2*a-1,o=n.alpha()-r.alpha(),s=((i*o==-1?i:(i+o)/(1+i*o))+1)/2,u=1-s;return this.rgb(s*n.red()+u*r.red(),s*n.green()+u*r.green(),s*n.blue()+u*r.blue()).alpha(n.alpha()*a+r.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){
// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
// making the final build way to big to embed in Chart.js. So let's do it manually,
// assuming that values to clone are 1 dimension arrays containing only numbers,
// except 'alpha' which is a number.
var e,t,n=new i,r=this.values,a=n.values;for(var o in r)r.hasOwnProperty(o)&&(e=r[o],t={}.toString.call(e),"[object Array]"===t?a[o]=e.slice(0):"[object Number]"===t?a[o]=e:console.error("unexpected color value:",e));return n}},i.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},i.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},i.prototype.getValues=function(e){for(var t=this.values,n={},r=0;r<e.length;r++)n[e.charAt(r)]=t[e][r];
// {r: 255, g: 255, b: 255, a: 0.4}
return 1!==t.alpha&&(n.a=t.alpha),n},i.prototype.setValues=function(e,t){var n,a=this.values,i=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===e)s=t;else if(t.length)
// [10, 10, 10]
a[e]=t.slice(0,e.length),s=t[e.length];else if(void 0!==t[e.charAt(0)]){
// {r: 10, g: 10, b: 10}
for(n=0;n<e.length;n++)a[e][n]=t[e.charAt(n)];s=t.a}else if(void 0!==t[i[e][0]]){
// {red: 10, green: 10, blue: 10}
var u=i[e];for(n=0;n<e.length;n++)a[e][n]=t[u[n]];s=t.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===e)return!1;var l;
// cap values of the space prior converting all values
for(n=0;n<e.length;n++)l=Math.max(0,Math.min(o[e][n],a[e][n])),a[e][n]=Math.round(l);
// convert to all the other color spaces
for(var d in i)d!==e&&(a[d]=r[e][d](a[e]));return!0},i.prototype.setSpace=function(e,t){var n=t[0];
// color.rgb(10, 10, 10)
return void 0===n?this.getValues(e):("number"==typeof n&&(n=Array.prototype.slice.call(t)),this.setValues(e,n),this)},i.prototype.setChannel=function(e,t,n){var r=this.values[e];
// color.red(100)
return void 0===n?r[t]:n===r[t]?this:(r[t]=n,this.setValues(e,r),this)},"undefined"!=typeof window&&(window.Color=i),e.exports=i},/* 201 */
/***/
function(e,t,n){"use strict";/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {Point} the event position
 */
function r(e,t){return e.native?{x:e.x,y:e.y}:l.getRelativePosition(e,t)}/**
 * Helper function to traverse all of the visible elements in the chart
 * @param chart {chart} the chart
 * @param handler {Function} the callback to execute for each visible item
 */
function a(e,t){var n,r,a,i,o,s=e.data.datasets;for(r=0,i=s.length;r<i;++r)if(e.isDatasetVisible(r))for(n=e.getDatasetMeta(r),a=0,o=n.data.length;a<o;++a){var u=n.data[a];u._view.skip||t(u)}}/**
 * Helper function to get the items that intersect the event position
 * @param items {ChartElement[]} elements to filter
 * @param position {Point} the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function i(e,t){var n=[];return a(e,function(e){e.inRange(t.x,t.y)&&n.push(e)}),n}/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param chart {Chart} the chart to look at elements from
 * @param position {Point} the point to be nearest to
 * @param intersect {Boolean} if true, only consider items that intersect the position
 * @param distanceMetric {Function} function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function o(e,t,n,r){var i=Number.POSITIVE_INFINITY,o=[];return a(e,function(e){if(!n||e.inRange(t.x,t.y)){var a=e.getCenterPoint(),s=r(t,a);s<i?(o=[e],i=s):s===i&&
// Can have multiple items at the same distance in which case we sort by size
o.push(e)}}),o}/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {String} axis the axis mode. x|y|xy
 */
function s(e){var t=-1!==e.indexOf("x"),n=-1!==e.indexOf("y");return function(e,r){var a=t?Math.abs(e.x-r.x):0,i=n?Math.abs(e.y-r.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(i,2))}}function u(e,t,n){var a=r(t,e);
// Default axis for index mode is 'x' to match old behaviour
n.axis=n.axis||"x";var u=s(n.axis),l=n.intersect?i(e,a):o(e,a,!1,u),d=[];return l.length?(e.data.datasets.forEach(function(t,n){if(e.isDatasetVisible(n)){var r=e.getDatasetMeta(n),a=r.data[l[0]._index];
// don't count items that are skipped (null data)
a&&!a._view.skip&&d.push(a)}}),d):[]}var l=n(5);/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */
/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
e.exports={
// Helper function for different modes
modes:{single:function(e,t){var n=r(t,e),i=[];return a(e,function(e){if(e.inRange(n.x,n.y))return i.push(e),i}),i.slice(0,1)},/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
label:u,/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
index:u,/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
dataset:function(e,t,n){var a=r(t,e);n.axis=n.axis||"xy";var u=s(n.axis),l=n.intersect?i(e,a):o(e,a,!1,u);return l.length>0&&(l=e.getDatasetMeta(l[0]._datasetIndex).data),l},/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
"x-axis":function(e,t){return u(e,t,{intersect:!1})},/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
point:function(e,t){return i(e,r(t,e))},/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
nearest:function(e,t,n){var a=r(t,e);n.axis=n.axis||"xy";var i=s(n.axis),u=o(e,a,n.intersect,i);
// Return only 1 item
// We have multiple items at the same distance from the event. Now sort by smallest
return u.length>1&&u.sort(function(e,t){var n=e.getArea(),r=t.getArea(),a=n-r;
// if equal sort by dataset index
return 0===a&&(a=e._datasetIndex-t._datasetIndex),a}),u.slice(0,1)},/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
x:function(e,t,n){var i=r(t,e),o=[],s=!1;
// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
return a(e,function(e){e.inXRange(i.x)&&o.push(e),e.inRange(i.x,i.y)&&(s=!0)}),n.intersect&&!s&&(o=[]),o},/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
y:function(e,t,n){var i=r(t,e),o=[],s=!1;
// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
return a(e,function(e){e.inYRange(i.y)&&o.push(e),e.inRange(i.x,i.y)&&(s=!0)}),n.intersect&&!s&&(o=[]),o}}}},/* 202 */
/***/
function(e,t,n){"use strict";var r=n(5),a=n(471),i=n(472),o=i._enabled?i:a;/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
e.exports=r.extend({/**
	 * @since 2.7.0
	 */
initialize:function(){},/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {Object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
acquireContext:function(){},/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {Boolean} true if the method succeeded, else false
	 */
releaseContext:function(){},/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {String} type - The ({@link IEvent}) type to listen for
	 * @param {Function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
addEventListener:function(){},/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart -Chart from which to remove the listener
	 * @param {String} type - The ({@link IEvent}) type to remove
	 * @param {Function} listener - The listener function to remove from the event target.
	 */
removeEventListener:function(){}},o)},/* 203 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(5);r._set("global",{plugins:{}}),/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */
e.exports={/**
	 * Globally registered plugins.
	 * @private
	 */
_plugins:[],/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */
_cacheId:0,/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {Array|Object} plugins plugin instance(s).
	 */
register:function(e){var t=this._plugins;[].concat(e).forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),this._cacheId++},/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {Array|Object} plugins plugin instance(s).
	 */
unregister:function(e){var t=this._plugins;[].concat(e).forEach(function(e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}),this._cacheId++},/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */
clear:function(){this._plugins=[],this._cacheId++},/**
	 * Returns the number of registered plugins?
	 * @returns {Number}
	 * @since 2.1.5
	 */
count:function(){return this._plugins.length},/**
	 * Returns all registered plugin instances.
	 * @returns {Array} array of plugin objects.
	 * @since 2.1.5
	 */
getAll:function(){return this._plugins},/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Object} chart - The chart instance for which plugins should be called.
	 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {Boolean} false if any of the plugins return false, else returns true.
	 */
notify:function(e,t,n){var r,a,i,o,s,u=this.descriptors(e),l=u.length;for(r=0;r<l;++r)if(a=u[r],i=a.plugin,"function"==typeof(s=i[t])&&(o=[e].concat(n||[]),o.push(a.options),!1===s.apply(i,o)))return!1;return!0},/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {Array} [{ plugin, options }]
	 * @private
	 */
descriptors:function(e){var t=e.$plugins||(e.$plugins={});if(t.id===this._cacheId)return t.descriptors;var n=[],i=[],o=e&&e.config||{},s=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(e){if(-1===n.indexOf(e)){var t=e.id,o=s[t];!1!==o&&(!0===o&&(o=a.clone(r.global.plugins[t])),n.push(e),i.push({plugin:e,options:o||{}}))}}),t.descriptors=i,t.id=this._cacheId,i},/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */
_invalidate:function(e){delete e.$plugins}}},/* 204 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,// Maandag is die eerste dag van die week.
doy:4}})})},/* 205 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},a={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(e){return function(t,n,i,o){var s=r(t),u=a[e][r(t)];return 2===s&&(u=u[n?0:1]),u.replace(/%d/i,t)}},o=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return e.defineLocale("ar",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),ss:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 206 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,// Sunday is the first day of the week.
doy:4}})})},/* 207 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,// Sunday is the first day of the week.
doy:12}})})},/* 208 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function(e){return function(t,a,i,o){var s=n(t),u=r[e][n(t)];return 2===s&&(u=u[a?0:1]),u.replace(/%d/i,t)}},i=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return e.defineLocale("ar-ly",{months:i,monthsShort:i,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),ss:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 209 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 210 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};return e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 211 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 212 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};return e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyə",ss:"%d saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)// special case for zero
return e+"-ıncı";var n=e%10,r=e%100-n,a=e>=100?100:null;return e+(t[n]||t[r]||t[a])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 213 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,r){var a={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:n?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===r?n?"хвіліна":"хвіліну":"h"===r?n?"гадзіна":"гадзіну":e+" "+t(a[r],+e)}return e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:n,mm:n,h:n,hh:n,d:"дзень",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 214 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 215 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 216 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};return e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&e<5||"বিকাল"===t?e+12:e},meridiem:function(e,t,n){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 217 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};return e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",ss:"%d སྐར་ཆ།",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&e<5||"དགོང་དག"===t?e+12:e},meridiem:function(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 218 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n){return e+" "+a({mm:"munutenn",MM:"miz",dd:"devezh"}[n],e)}function n(e){switch(r(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function r(e){return e>9?r(e%10):e}function a(e,t){return 2===t?i(e):e}function i(e){var t={m:"v",b:"v",d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1)}return e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:n},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){return e+(1===e?"añ":"vet")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 219 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 220 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 221 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e){return e>1&&e<5&&1!=~~(e/10)}function n(e,n,r,a){var i=e+" ";switch(r){case"s":// a few seconds / in a few seconds / a few seconds ago
return n||a?"pár sekund":"pár sekundami";case"ss":// 9 seconds / in 9 seconds / 9 seconds ago
// 9 seconds / in 9 seconds / 9 seconds ago
return n||a?i+(t(e)?"sekundy":"sekund"):i+"sekundami";case"m":// a minute / in a minute / a minute ago
return n?"minuta":a?"minutu":"minutou";case"mm":// 9 minutes / in 9 minutes / 9 minutes ago
// 9 minutes / in 9 minutes / 9 minutes ago
return n||a?i+(t(e)?"minuty":"minut"):i+"minutami";case"h":// an hour / in an hour / an hour ago
return n?"hodina":a?"hodinu":"hodinou";case"hh":// 9 hours / in 9 hours / 9 hours ago
// 9 hours / in 9 hours / 9 hours ago
return n||a?i+(t(e)?"hodiny":"hodin"):i+"hodinami";case"d":// a day / in a day / a day ago
return n||a?"den":"dnem";case"dd":// 9 days / in 9 days / 9 days ago
// 9 days / in 9 days / 9 days ago
return n||a?i+(t(e)?"dny":"dní"):i+"dny";case"M":// a month / in a month / a month ago
return n||a?"měsíc":"měsícem";case"MM":// 9 months / in 9 months / 9 months ago
// 9 months / in 9 months / 9 months ago
return n||a?i+(t(e)?"měsíce":"měsíců"):i+"měsíci";case"y":// a year / in a year / a year ago
return n||a?"rok":"rokem";case"yy":// 9 years / in 9 years / 9 years ago
// 9 years / in 9 years / 9 years ago
return n||a?i+(t(e)?"roky":"let"):i+"lety"}}var r="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),a="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs",{months:r,monthsShort:a,monthsParse:function(e,t){var n,r=[];for(n=0;n<12;n++)
// use custom parser to solve problem with July (červenec)
r[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(r,a),shortMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(a),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(r),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 222 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){return e+(/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран")},past:"%s каялла",s:"пӗр-ик ҫеккунт",ss:"%d ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 223 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,
// time formats are the same as en-gb
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
// traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
ordinal:function(e){var t=e,n="",r=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed",// 1af to 10fed
"eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=r[t]),e+n},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 224 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 225 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}return e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 226 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}return e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 227 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}return e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 228 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];return e.defineLocale("dv",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,t,n){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",ss:"d% ސިކުންތު",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,// Sunday is the first day of the week.
doy:12}})})},/* 229 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}return e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return e?"string"==typeof t&&/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,n){var r=this._calendarEl[e],a=n&&n.hours();return t(r)&&(r=r.apply(n)),r.replace("{}",a%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 230 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 231 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}})})},/* 232 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 233 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 234 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}})})},/* 235 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 236 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",ss:"%d sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",//ne 'diurno', ĉar estas uzita por proksimumo
dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 237 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],a=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 238 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],a=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 239 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 240 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?a[n][2]?a[n][2]:a[n][1]:r?a[n][0]:a[n][1]}return e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 241 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 242 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};return e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,t,n){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"ثانیه d%",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 243 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,r,a){var i="";switch(r){case"s":return a?"muutaman sekunnin":"muutama sekunti";case"ss":return a?"sekunnin":"sekuntia";case"m":return a?"minuutin":"minuutti";case"mm":i=a?"minuutin":"minuuttia";break;case"h":return a?"tunnin":"tunti";case"hh":i=a?"tunnin":"tuntia";break;case"d":return a?"päivän":"päivä";case"dd":i=a?"päivän":"päivää";break;case"M":return a?"kuukauden":"kuukausi";case"MM":i=a?"kuukauden":"kuukautta";break;case"y":return a?"vuoden":"vuosi";case"yy":i=a?"vuoden":"vuotta"}return i=n(e,a)+" "+i}function n(e,t){return e<10?t?a[e]:r[e]:e}var r="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),a=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",r[7],r[8],r[9]];return e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 244 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",ss:"%d sekundir",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 245 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,t){switch(t){
// TODO: Return 'e' when day of month > 1. Move this case inside
// block for masculine words below.
// See https://github.com/moment/moment/issues/3375
case"D":return e+(1===e?"er":"");
// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");
// Words with feminine grammatical gender: semaine
case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 246 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){
// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");
// Words with feminine grammatical gender: semaine
case"w":case"W":return e+(1===e?"re":"e")}}})})},/* 247 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){
// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");
// Words with feminine grammatical gender: semaine
case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 248 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");return e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 249 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],n=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],r=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],a=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],i=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"];return e.defineLocale("gd",{months:t,monthsShort:n,monthsParseExact:!0,weekdays:r,weekdaysShort:a,weekdaysMin:i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 250 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 251 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={s:["thodde secondanim","thodde second"],ss:[e+" secondanim",e+" second"],m:["eka mintan","ek minute"],mm:[e+" mintanim",e+" mintam"],h:["eka horan","ek hor"],hh:[e+" horanim",e+" horam"],d:["eka disan","ek dis"],dd:[e+" disanim",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineanim",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsanim",e+" vorsam"]};return t?a[n][0]:a[n][1]}return e.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,t){switch(t){
// the ordinal 'er' only applies to day of the month
case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:1,// Monday is the first day of the week.
doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(e,t){return 12===e&&(e=0),"rati"===t?e<4?e:e+12:"sokalli"===t?e:"donparam"===t?e>12?e:e+12:"sanje"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati"}})})},/* 252 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"};return e.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પેહલા",s:"અમુક પળો",ss:"%d સેકંડ",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function(e){return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},
// Gujarati notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function(e,t){return 12===e&&(e=0),"રાત"===t?e<4?e:e+12:"સવાર"===t?e:"બપોર"===t?e>=10?e:e+12:"સાંજ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"રાત":e<10?"સવાર":e<17?"બપોર":e<20?"સાંજ":"રાત"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 253 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,t,n){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?n?'לפנה"צ':"לפני הצהריים":e<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}})})},/* 254 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},
// Hindi notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 255 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 256 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a=e;switch(n){case"s":return r||t?"néhány másodperc":"néhány másodperce";case"ss":return a+(r||t)?" másodperc":" másodperce";case"m":return"egy"+(r||t?" perc":" perce");case"mm":return a+(r||t?" perc":" perce");case"h":return"egy"+(r||t?" óra":" órája");case"hh":return a+(r||t?" óra":" órája");case"d":return"egy"+(r||t?" nap":" napja");case"dd":return a+(r||t?" nap":" napja");case"M":return"egy"+(r||t?" hónap":" hónapja");case"MM":return a+(r||t?" hónap":" hónapja");case"y":return"egy"+(r||t?" év":" éve");case"yy":return a+(r||t?" év":" éve")}return""}function n(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 257 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",ss:"%d վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 258 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 259 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e){return e%100==11||e%10!=1}function n(e,n,r,a){var i=e+" ";switch(r){case"s":return n||a?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return t(e)?i+(n||a?"sekúndur":"sekúndum"):i+"sekúnda";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?i+(n||a?"mínútur":"mínútum"):n?i+"mínúta":i+"mínútu";case"hh":return t(e)?i+(n||a?"klukkustundir":"klukkustundum"):i+"klukkustund";case"d":return n?"dagur":a?"dag":"degi";case"dd":return t(e)?n?i+"dagar":i+(a?"daga":"dögum"):n?i+"dagur":i+(a?"dag":"degi");case"M":return n?"mánuður":a?"mánuð":"mánuði";case"MM":return t(e)?n?i+"mánuðir":i+(a?"mánuði":"mánuðum"):n?i+"mánuður":i+(a?"mánuð":"mánuði");case"y":return n||a?"ár":"ári";case"yy":return t(e)?i+(n||a?"ár":"árum"):i+(n||a?"ár":"ári")}}return e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 260 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 261 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,n){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function(e){return e.week()<this.week()?"[来週]dddd LT":"dddd LT"},lastDay:"[昨日] LT",lastWeek:function(e){return this.week()<e.week()?"[先週]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})})},/* 262 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 263 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})})},/* 264 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};return e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 265 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩",0:"០"},n={"១":"1","២":"2","៣":"3","៤":"4","៥":"5","៦":"6","៧":"7","៨":"8","៩":"9","០":"0"};return e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ព្រឹក|ល្ងាច/,isPM:function(e){return"ល្ងាច"===e},meridiem:function(e,t,n){return e<12?"ព្រឹក":"ល្ងាច"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",ss:"%d វិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},dayOfMonthOrdinalParse:/ទី\d{1,2}/,ordinal:"ទី%d",preparse:function(e){return e.replace(/[១២៣៤៥៦៧៨៩០]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 266 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"};return e.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",ss:"%d ಸೆಕೆಂಡುಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function(e){return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ರಾತ್ರಿ"===t?e<4?e:e+12:"ಬೆಳಿಗ್ಗೆ"===t?e:"ಮಧ್ಯಾಹ್ನ"===t?e>=10?e:e+12:"ಸಂಜೆ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ರಾತ್ರಿ":e<10?"ಬೆಳಿಗ್ಗೆ":e<17?"ಮಧ್ಯಾಹ್ನ":e<20?"ಸಂಜೆ":"ರಾತ್ರಿ"},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function(e){return e+"ನೇ"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 267 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"일";case"M":return e+"월";case"w":case"W":return e+"주";default:return e}},meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,n){return e<12?"오전":"오후"}})})},/* 268 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};return e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",ss:"%d секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 269 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?a[n][0]:a[n][1]}function n(e){return a(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e}function r(e){return a(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e}/**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
function a(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)
// Negative Number --> always true
return!0;if(e<10)
// Only 1 digit
return 4<=e&&e<=7;if(e<100){
// 2 digits
var t=e%10,n=e/10;return a(0===t?n:t)}if(e<1e4){
// 3 or 4 digits --> recursively check first digit
for(;e>=10;)e/=10;return a(e)}
// Anything larger than 4 digits: recursively check first n-3 digits
return e/=1e3,a(e)}return e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){
// Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:n,past:r,s:"e puer Sekonnen",ss:"%d Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 270 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,t,n){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",ss:"%d ວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}})})},/* 271 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){return t?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"}function n(e,t,n,r){return t?a(n)[0]:r?a(n)[1]:a(n)[2]}function r(e){return e%10==0||e>10&&e<20}function a(e){return o[e].split("_")}function i(e,t,i,o){var s=e+" ";return 1===e?s+n(e,t,i[0],o):t?s+(r(e)?a(i)[1]:a(i)[0]):o?s+a(i)[1]:s+(r(e)?a(i)[1]:a(i)[2])}var o={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};return e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:t,ss:i,m:n,mm:i,h:n,hh:i,d:n,dd:i,M:n,MM:i,y:n,yy:i},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 272 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";/**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
function t(e,t,n){return n?t%10==1&&t%100!=11?e[2]:e[3]:t%10==1&&t%100!=11?e[0]:e[1]}function n(e,n,r){return e+" "+t(i[r],e,n)}function r(e,n,r){return t(i[r],e,n)}function a(e,t){return t?"dažas sekundes":"dažām sekundēm"}var i={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};return e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:a,ss:n,m:r,mm:n,h:r,hh:n,d:r,dd:n,M:r,MM:n,y:r,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 273 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={words:{//Different grammatical cases
ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var a=t.words[r];return 1===r.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};return e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mjesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 274 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",ss:"%d hēkona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 275 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 276 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",ss:"%d സെക്കൻഡ്",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e},meridiem:function(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}})})},/* 277 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){switch(n){case"s":return t?"хэдхэн секунд":"хэдхэн секундын";case"ss":return e+(t?" секунд":" секундын");case"m":case"mm":return e+(t?" минут":" минутын");case"h":case"hh":return e+(t?" цаг":" цагийн");case"d":case"dd":return e+(t?" өдөр":" өдрийн");case"M":case"MM":return e+(t?" сар":" сарын");case"y":case"yy":return e+(t?" жил":" жилийн");default:return e}}return e.defineLocale("mn",{months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),monthsParseExact:!0,weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:function(e){return"ҮХ"===e},meridiem:function(e,t,n){return e<12?"ҮӨ":"ҮХ"},calendar:{sameDay:"[Өнөөдөр] LT",nextDay:"[Маргааш] LT",nextWeek:"[Ирэх] dddd LT",lastDay:"[Өчигдөр] LT",lastWeek:"[Өнгөрсөн] dddd LT",sameElse:"L"},relativeTime:{future:"%s дараа",past:"%s өмнө",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+" өдөр";default:return e}}})})},/* 278 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a="";if(t)switch(n){case"s":a="काही सेकंद";break;case"ss":a="%d सेकंद";break;case"m":a="एक मिनिट";break;case"mm":a="%d मिनिटे";break;case"h":a="एक तास";break;case"hh":a="%d तास";break;case"d":a="एक दिवस";break;case"dd":a="%d दिवस";break;case"M":a="एक महिना";break;case"MM":a="%d महिने";break;case"y":a="एक वर्ष";break;case"yy":a="%d वर्षे"}else switch(n){case"s":a="काही सेकंदां";break;case"ss":a="%d सेकंदां";break;case"m":a="एका मिनिटा";break;case"mm":a="%d मिनिटां";break;case"h":a="एका तासा";break;case"hh":a="%d तासां";break;case"d":a="एका दिवसा";break;case"dd":a="%d दिवसां";break;case"M":a="एका महिन्या";break;case"MM":a="%d महिन्यां";break;case"y":a="एका वर्षा";break;case"yy":a="%d वर्षां"}return a.replace(/%d/i,e)}var n={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},r={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return r[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return n[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात्री"===t?e<4?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात्री":e<10?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 279 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 280 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 281 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[Għada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-bieraħ fil-]LT",lastWeek:"dddd [li għadda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 282 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};return e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",ss:"%d စက္ကန့်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 283 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 284 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,t){return 12===e&&(e=0),"राति"===t?e<4?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",ss:"%d सेकेण्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 285 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],a=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 286 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],a=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 287 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 288 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};return e.defineLocale("pa-in",{
// There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"[ਅਗਲਾ] dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",ss:"%d ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},
// Punjabi notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?e<4?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 289 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function n(e,n,r){var a=e+" ";switch(r){case"ss":return a+(t(e)?"sekundy":"sekund");case"m":return n?"minuta":"minutę";case"mm":return a+(t(e)?"minuty":"minut");case"h":return n?"godzina":"godzinę";case"hh":return a+(t(e)?"godziny":"godzin");case"MM":return a+(t(e)?"miesiące":"miesięcy");case"yy":return a+(t(e)?"lata":"lat")}}var r="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,t){return e?""===t?"("+a[e.month()]+"|"+r[e.month()]+")":/D MMMM/.test(t)?a[e.month()]:r[e.month()]:r},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:n,m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 290 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){// Saturday + Sunday
return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 291 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){// Saturday + Sunday
return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"})})},/* 292 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n){var r={ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},a=" ";return(e%100>=20||e>=100&&e%100==0)&&(a=" de "),e+a+r[n]}return e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:t,m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 293 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,r){var a={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===r?n?"минута":"минуту":e+" "+t(a[r],+e)}var r=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{
// по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:r,longMonthsParse:r,shortMonthsParse:r,
// полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
// копия предыдущего
monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
// полные названия с падежами
monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
// Выражение, которое соотвествует только сокращённым формам
monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:n,m:n,mm:n,h:"час",hh:n,d:"день",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 294 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"];return e.defineLocale("sd",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",ss:"%d سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 295 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 296 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",ss:"තත්පර %d",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,t,n){return e>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}})})},/* 297 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e){return e>1&&e<5}function n(e,n,r,a){var i=e+" ";switch(r){case"s":// a few seconds / in a few seconds / a few seconds ago
return n||a?"pár sekúnd":"pár sekundami";case"ss":// 9 seconds / in 9 seconds / 9 seconds ago
// 9 seconds / in 9 seconds / 9 seconds ago
return n||a?i+(t(e)?"sekundy":"sekúnd"):i+"sekundami";case"m":// a minute / in a minute / a minute ago
return n?"minúta":a?"minútu":"minútou";case"mm":// 9 minutes / in 9 minutes / 9 minutes ago
// 9 minutes / in 9 minutes / 9 minutes ago
return n||a?i+(t(e)?"minúty":"minút"):i+"minútami";case"h":// an hour / in an hour / an hour ago
return n?"hodina":a?"hodinu":"hodinou";case"hh":// 9 hours / in 9 hours / 9 hours ago
// 9 hours / in 9 hours / 9 hours ago
return n||a?i+(t(e)?"hodiny":"hodín"):i+"hodinami";case"d":// a day / in a day / a day ago
return n||a?"deň":"dňom";case"dd":// 9 days / in 9 days / 9 days ago
// 9 days / in 9 days / 9 days ago
return n||a?i+(t(e)?"dni":"dní"):i+"dňami";case"M":// a month / in a month / a month ago
return n||a?"mesiac":"mesiacom";case"MM":// 9 months / in 9 months / 9 months ago
// 9 months / in 9 months / 9 months ago
return n||a?i+(t(e)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":// a year / in a year / a year ago
return n||a?"rok":"rokom";case"yy":// 9 years / in 9 years / 9 years ago
// 9 years / in 9 years / 9 years ago
return n||a?i+(t(e)?"roky":"rokov"):i+"rokmi"}}var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),a="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return e.defineLocale("sk",{months:r,monthsShort:a,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 298 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"ss":return a+=1===e?t?"sekundo":"sekundi":2===e?t||r?"sekundi":"sekundah":e<5?t||r?"sekunde":"sekundah":"sekund";case"m":return t?"ena minuta":"eno minuto";case"mm":return a+=1===e?t?"minuta":"minuto":2===e?t||r?"minuti":"minutama":e<5?t||r?"minute":"minutami":t||r?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return a+=1===e?t?"ura":"uro":2===e?t||r?"uri":"urama":e<5?t||r?"ure":"urami":t||r?"ur":"urami";case"d":return t||r?"en dan":"enim dnem";case"dd":return a+=1===e?t||r?"dan":"dnem":2===e?t||r?"dni":"dnevoma":t||r?"dni":"dnevi";case"M":return t||r?"en mesec":"enim mesecem";case"MM":return a+=1===e?t||r?"mesec":"mesecem":2===e?t||r?"meseca":"mesecema":e<5?t||r?"mesece":"meseci":t||r?"mesecev":"meseci";case"y":return t||r?"eno leto":"enim letom";case"yy":return a+=1===e?t||r?"leto":"letom":2===e?t||r?"leti":"letoma":e<5?t||r?"leta":"leti":t||r?"let":"leti"}}return e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 299 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 300 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={words:{//Different grammatical cases
ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var a=t.words[r];return 1===r.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};return e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 301 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={words:{//Different grammatical cases
ss:["секунда","секунде","секунди"],m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var a=t.words[r];return 1===r.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};return e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 302 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,t,n){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 303 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"e":1===t?"a":2===t?"a":"e")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 304 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 305 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};return e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",ss:"%d விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},
// refer http://ta.wikipedia.org/s/1er1
meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 306 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",ss:"%d సెకన్లు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,t){return 12===e&&(e=0),"రాత్రి"===t?e<4?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 307 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",ss:"minutu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 308 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={0:"-ум",1:"-ум",2:"-юм",3:"-юм",4:"-ум",5:"-ум",6:"-ум",7:"-ум",8:"-ум",9:"-ум",10:"-ум",12:"-ум",13:"-ум",20:"-ум",30:"-юм",40:"-ум",50:"-ум",60:"-ум",70:"-ум",80:"-ум",90:"-ум",100:"-ум"};return e.defineLocale("tg",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Имрӯз соати] LT",nextDay:"[Пагоҳ соати] LT",lastDay:"[Дирӯз соати] LT",nextWeek:"dddd[и] [ҳафтаи оянда соати] LT",lastWeek:"dddd[и] [ҳафтаи гузашта соати] LT",sameElse:"L"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"},meridiemParse:/шаб|субҳ|рӯз|бегоҳ/,meridiemHour:function(e,t){return 12===e&&(e=0),"шаб"===t?e<4?e:e+12:"субҳ"===t?e:"рӯз"===t?e>=11?e:e+12:"бегоҳ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"шаб":e<11?"субҳ":e<16?"рӯз":e<19?"бегоҳ":"шаб"},dayOfMonthOrdinalParse:/\d{1,2}-(ум|юм)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 309 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),// yes, three characters difference
weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})})},/* 310 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 311 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"leS":-1!==e.indexOf("jar")?t.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?t.slice(0,-3)+"nem":t+" pIq"}function n(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?t.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?t.slice(0,-3)+"ben":t+" ret"}function r(e,t,n,r){var i=a(e);switch(n){case"ss":return i+" lup";case"mm":return i+" tup";case"hh":return i+" rep";case"dd":return i+" jaj";case"MM":return i+" jar";case"yy":return i+" DIS"}}function a(e){var t=Math.floor(e%1e3/100),n=Math.floor(e%100/10),r=e%10,a="";return t>0&&(a+=i[t]+"vatlh"),n>0&&(a+=(""!==a?" ":"")+i[n]+"maH"),r>0&&(a+=(""!==a?" ":"")+i[r]),""===a?"pagh":a}var i="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");return e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:t,past:n,s:"puS lup",ss:r,m:"wa’ tup",mm:r,h:"wa’ rep",hh:r,d:"wa’ jaj",dd:r,M:"wa’ jar",MM:r,y:"wa’ DIS",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 312 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(e,n){switch(n){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)// special case for zero
return e+"'ıncı";var r=e%10,a=e%100-r,i=e>=100?100:null;return e+(t[r]||t[a]||t[i])}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 313 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t,n,r){var a={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return r?a[n][0]:t?a[n][0]:a[n][1]}return e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 314 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",ss:"%d ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 315 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 316 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("ug-cn",{months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},meridiemParse:/يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,meridiemHour:function(e,t){return 12===e&&(e=0),"يېرىم كېچە"===t||"سەھەر"===t||"چۈشتىن بۇرۇن"===t?e:"چۈشتىن كېيىن"===t||"كەچ"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"يېرىم كېچە":r<900?"سەھەر":r<1130?"چۈشتىن بۇرۇن":r<1230?"چۈش":r<1800?"چۈشتىن كېيىن":"كەچ"},calendar:{sameDay:"[بۈگۈن سائەت] LT",nextDay:"[ئەتە سائەت] LT",nextWeek:"[كېلەركى] dddd [سائەت] LT",lastDay:"[تۆنۈگۈن] LT",lastWeek:"[ئالدىنقى] dddd [سائەت] LT",sameElse:"L"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",ss:"%d سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"},dayOfMonthOrdinalParse:/\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"-كۈنى";case"w":case"W":return e+"-ھەپتە";default:return e}},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{
// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
dow:1,// Monday is the first day of the week.
doy:7}})})},/* 317 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,r){var a={ss:n?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:n?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:n?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===r?n?"хвилина":"хвилину":"h"===r?n?"година":"годину":e+" "+t(a[r],+e)}function r(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return e?n[/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"][e.day()]:n.nominative}function a(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}return e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:r,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:a("[Сьогодні "),nextDay:a("[Завтра "),lastDay:a("[Вчора "),nextWeek:a("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return a("[Минулої] dddd [").call(this);case 1:case 2:case 4:return a("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:n,m:n,mm:n,h:"годину",hh:n,d:"день",dd:n,M:"місяць",MM:n,y:"рік",yy:n},
// M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 318 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";var t=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];return e.defineLocale("ur",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",ss:"%d سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 319 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",ss:"%d фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 320 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 321 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 322 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 323 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",ss:"aayá %d",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 324 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{
// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
dow:1,// Monday is the first day of the week.
doy:4}})})},/* 325 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},/* 326 */
/***/
function(e,t,n){!function(e,t){t(n(1))}(0,function(e){"use strict";return e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},/* 327 */
/***/
function(e,t,n){/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function r(e,t,n){"__proto__"==t&&a?a(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var a=n(328);e.exports=r},/* 328 */
/***/
function(e,t,n){var r=n(54),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=a},/* 329 */
/***/
function(e,t,n){/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function r(e){if(!i(e))return!1;
// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=a(e);return t==s||t==u||t==o||t==l}var a=n(75),i=n(46),o="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";e.exports=r},/* 330 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(t){/** Detect free variable `global` from Node.js. */
var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(141))},/* 331 */
/***/
function(e,t){/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function n(e){if(null!=e){try{return a.call(e)}catch(e){}try{return e+""}catch(e){}}return""}/** Used for built-in method references. */
var r=Function.prototype,a=r.toString;e.exports=n},/* 332 */
/***/
function(e,t){/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function n(e){return e}e.exports=n},/* 333 */
/***/
function(e,t,n){/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function r(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=i(r.length-t,0),u=Array(s);++o<s;)u[o]=r[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=r[o];return l[t]=n(u),a(e,this,l)}}var a=n(533),i=Math.max;e.exports=r},/* 334 */
/***/
function(e,t,n){var r=n(534),a=n(536),i=a(r);e.exports=i},/* 335 */
/***/
function(e,t){/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}/** Used as references for various `Number` constants. */
var r=9007199254740991;e.exports=n},/* 336 */
/***/
function(e,t){/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function n(e,t){var n=typeof e;return!!(t=null==t?r:t)&&("number"==n||"symbol"!=n&&a.test(e))&&e>-1&&e%1==0&&e<t}/** Used as references for various `Number` constants. */
var r=9007199254740991,a=/^(?:0|[1-9]\d*)$/;e.exports=n},/* 337 */
/***/
function(e,t,n){/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function r(e,t){var n=o(e),r=!n&&i(e),d=!n&&!r&&s(e),f=!n&&!r&&!d&&l(e),h=n||r||d||f,m=h?a(e.length,String):[],_=m.length;for(var p in e)!t&&!c.call(e,p)||h&&(
// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==p||
// Node.js 0.10 has enumerable non-index properties on buffers.
d&&("offset"==p||"parent"==p)||
// PhantomJS 2 has enumerable non-index properties on typed arrays.
f&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||
// Skip index properties.
u(p,_))||m.push(p);return m}var a=n(538),i=n(338),o=n(56),s=n(339),u=n(336),l=n(541),d=Object.prototype,c=d.hasOwnProperty;e.exports=r},/* 338 */
/***/
function(e,t,n){var r=n(539),a=n(55),i=Object.prototype,o=i.hasOwnProperty,s=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return a(e)&&o.call(e,"callee")&&!s.call(e,"callee")};e.exports=u},/* 339 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){var r=n(30),a=n(540),i="object"==typeof t&&t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i,u=s?r.Buffer:void 0,l=u?u.isBuffer:void 0,d=l||a;e.exports=d}).call(t,n(97)(e))},/* 340 */
/***/
function(e,t){/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function n(e,t){return function(n){return e(t(n))}}e.exports=n},/* 341 */
/***/
function(e,t,n){"use strict";/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n]);if(r)return r}}},/* 342 */
/***/
function(e,t,n){"use strict";var r=e.exports={};r.isIE=function(e){return!!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},r.isLegacyOpera=function(){return!!window.opera}},/* 343 */
/***/
function(e,t){/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function n(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}e.exports=n},/* 344 */
/***/
function(e,t,n){/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var a=n(572),i=n(579),o=n(581),s=n(582),u=n(583);
// Add methods to `MapCache`.
r.prototype.clear=a,r.prototype.delete=i,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,e.exports=r},/* 345 */
/***/
function(e,t,n){/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function r(e){return o(e)?a(e,!0):i(e)}var a=n(337),i=n(587),o=n(98);e.exports=r},/* 346 */
/***/
function(e,t){/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function n(){return[]}e.exports=n},/* 347 */
/***/
function(e,t,n){var r=n(147),a=n(148),i=n(146),o=n(346),s=Object.getOwnPropertySymbols,u=s?function(e){for(var t=[];e;)r(t,i(e)),e=a(e);return t}:o;e.exports=u},/* 348 */
/***/
function(e,t,n){/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function r(e,t,n){var r=t(e);return i(e)?r:a(r,n(e))}var a=n(147),i=n(56);e.exports=r},/* 349 */
/***/
function(e,t,n){/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function r(e){return a(e,o,i)}var a=n(348),i=n(347),o=n(345);e.exports=r},/* 350 */
/***/
function(e,t,n){/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function r(e){if("string"==typeof e||a(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}var a=n(101),i=1/0;e.exports=r},/* 351 */
/***/
function(e,t){},/* 352 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=function(){function e(){(0,i.default)(this,e)}return(0,s.default)(e,null,[{key:"authenticateUser",/**
         * Authenticate a user. Save a token string in Local Storage
         *
         * @param {string} token
         */
value:function(e){localStorage.setItem("jwtToken",e)}},{key:"isUserAuthenticated",value:function(e){/*
                    fetch('/api/authvalidate', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': window.localStorage.getItem('jwtToken'),
                            'id': window.localStorage.getItem('userid')
                        },
                        body: JSON.stringify({})
                    }
                    ).then(res => res.json()).then(json => {
                        if (json.status !== 200) {
                                
                        } else {
            
                        }
                    });*/
//return true;
return null!==localStorage.getItem("jwtToken")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("jwtToken")}},{key:"getToken",value:function(){return localStorage.getItem("jwtToken")}}]),e}();t.default=u},/* 353 */
/***/
function(e,t,n){e.exports=!n(14)&&!n(6)(function(){return 7!=Object.defineProperty(n(152)("div"),"a",{get:function(){return 7}}).a})},/* 354 */
/***/
function(e,t,n){t.f=n(11)},/* 355 */
/***/
function(e,t,n){var r=n(22),a=n(26),i=n(107)(!1),o=n(154)("IE_PROTO");e.exports=function(e,t){var n,s=a(e),u=0,l=[];for(n in s)n!=o&&r(s,n)&&l.push(n);
// Don't enum bug & hidden keys
for(;t.length>u;)r(s,n=t[u++])&&(~i(l,n)||l.push(n));return l}},/* 356 */
/***/
function(e,t,n){var r=n(15),a=n(3),i=n(60);e.exports=n(14)?Object.defineProperties:function(e,t){a(e);for(var n,o=i(t),s=o.length,u=0;s>u;)r.f(e,n=o[u++],t[n]);return e}},/* 357 */
/***/
function(e,t,n){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var r=n(26),a=n(63).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(e){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):a(r(e))}},/* 358 */
/***/
function(e,t,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(60),a=n(108),i=n(90),o=n(17),s=n(89),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!u||n(6)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=r})?function(e,t){for(// eslint-disable-line no-unused-vars
var n=o(e),u=arguments.length,l=1,d=a.f,c=i.f;u>l;)for(var f,h=s(arguments[l++]),m=d?r(h).concat(d(h)):r(h),_=m.length,p=0;_>p;)c.call(h,f=m[p++])&&(n[f]=h[f]);return n}:u},/* 359 */
/***/
function(e,t,n){"use strict";var r=n(19),a=n(7),i=n(360),o=[].slice,s={},u=function(e,t,n){if(!(t in s)){for(var r=[],a=0;a<t;a++)r[a]="a["+a+"]";
// eslint-disable-next-line no-new-func
s[t]=Function("F,a","return new F("+r.join(",")+")")}return s[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=o.call(arguments,1),s=function(){var r=n.concat(o.call(arguments));return this instanceof s?u(t,r.length,r):i(t,r,e)};return a(t.prototype)&&(s.prototype=t.prototype),s}},/* 360 */
/***/
function(e,t){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
e.exports=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},/* 361 */
/***/
function(e,t,n){var r=n(4).parseInt,a=n(78).trim,i=n(158),o=/^[-+]?0[xX]/;e.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(e,t){var n=a(String(e),3);return r(n,t>>>0||(o.test(n)?16:10))}:r},/* 362 */
/***/
function(e,t,n){var r=n(4).parseFloat,a=n(78).trim;e.exports=1/r(n(158)+"-0")!=-1/0?function(e){var t=a(String(e),3),n=r(t);return 0===n&&"-"==t.charAt(0)?-0:n}:r},/* 363 */
/***/
function(e,t,n){var r=n(32);e.exports=function(e,t){if("number"!=typeof e&&"Number"!=r(e))throw TypeError(t);return+e}},/* 364 */
/***/
function(e,t,n){
// 20.1.2.3 Number.isInteger(number)
var r=n(7),a=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&a(e)===e}},/* 365 */
/***/
function(e,t){
// 20.2.2.20 Math.log1p(x)
e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:Math.log(1+e)}},/* 366 */
/***/
function(e,t,n){
// 20.2.2.16 Math.fround(x)
var r=n(161),a=Math.pow,i=a(2,-52),o=a(2,-23),s=a(2,127)*(2-o),u=a(2,-126),l=function(e){return e+1/i-1/i};e.exports=Math.fround||function(e){var t,n,a=Math.abs(e),d=r(e);
// eslint-disable-next-line no-self-compare
return a<u?d*l(a/u/o)*u*o:(t=(1+o/i)*a,n=t-(t-a),n>s||n!=n?d*(1/0):d*n)}},/* 367 */
/***/
function(e,t,n){
// call something on iterator step with safe closing on error
var r=n(3);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},/* 368 */
/***/
function(e,t,n){var r=n(19),a=n(17),i=n(89),o=n(16);e.exports=function(e,t,n,s,u){r(t);var l=a(e),d=i(l),c=o(l.length),f=u?c-1:0,h=u?-1:1;if(n<2)for(;;){if(f in d){s=d[f],f+=h;break}if(f+=h,u?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;u?f>=0:c>f;f+=h)f in d&&(s=t(s,d[f],f,l));return s}},/* 369 */
/***/
function(e,t,n){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var r=n(17),a=n(61),i=n(16);e.exports=[].copyWithin||function(e,t){var n=r(this),o=i(n.length),s=a(e,o),u=a(t,o),l=arguments.length>2?arguments[2]:void 0,d=Math.min((void 0===l?o:a(l,o))-u,o-s),c=1;for(u<s&&s<u+d&&(c=-1,u+=d-1,s+=d-1);d-- >0;)u in n?n[s]=n[u]:delete n[s],s+=c,u+=c;return n}},/* 370 */
/***/
function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},/* 371 */
/***/
function(e,t,n){
// 21.2.5.3 get RegExp.prototype.flags()
n(14)&&"g"!=/./g.flags&&n(15).f(RegExp.prototype,"flags",{configurable:!0,get:n(112)})},/* 372 */
/***/
function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},/* 373 */
/***/
function(e,t,n){var r=n(3),a=n(7),i=n(176);e.exports=function(e,t){if(r(e),a(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},/* 374 */
/***/
function(e,t,n){"use strict";var r=n(375),a=n(80);
// 23.1 Map Objects
e.exports=n(115)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(e){var t=r.getEntry(a(this,"Map"),e);return t&&t.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(e,t){return r.def(a(this,"Map"),0===e?0:e,t)}},r,!0)},/* 375 */
/***/
function(e,t,n){"use strict";var r=n(15).f,a=n(62),i=n(67),o=n(31),s=n(65),u=n(66),l=n(164),d=n(370),c=n(64),f=n(14),h=n(47).fastKey,m=n(80),_=f?"_s":"size",p=function(e,t){
// fast case
var n,r=h(t);if("F"!==r)return e._i[r];
// frozen object case
for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,l){var d=e(function(e,r){s(e,d,t,"_i"),e._t=t,// collection type
e._i=a(null),// index
e._f=void 0,// first entry
e._l=void 0,// last entry
e[_]=0,// size
void 0!=r&&u(r,n,e[l],e)});return i(d.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var e=m(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[_]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(e){var n=m(this,t),r=p(n,e);if(r){var a=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=a),a&&(a.p=i),n._f==r&&(n._f=a),n._l==r&&(n._l=i),n[_]--}return!!r},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(e){m(this,t);for(var n,r=o(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)
// revert to the last existing entry
for(r(n.v,n.k,this);n&&n.r;)n=n.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(e){return!!p(m(this,t),e)}}),f&&r(d.prototype,"size",{get:function(){return m(this,t)[_]}}),d},def:function(e,t,n){var r,a,i=p(e,t);
// change existing entry
// add to index
return i?i.v=n:(e._l=i={i:a=h(t,!0),// <- index
k:t,// <- key
v:n,// <- value
p:r=e._l,// <- previous entry
n:void 0,// <- next entry
r:!1},e._f||(e._f=i),r&&(r.n=i),e[_]++,"F"!==a&&(e._i[a]=i)),e},getEntry:p,setStrong:function(e,t,n){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
l(e,t,function(e,n){this._t=m(e,t),// target
this._k=n,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var e=this,t=e._k,n=e._l;n&&n.r;)n=n.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return e._t&&(e._l=n=n?n.n:e._t._f)?"keys"==t?d(0,n.k):"values"==t?d(0,n.v):d(0,[n.k,n.v]):(e._t=void 0,d(1))},n?"entries":"values",!n,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
c(t)}}},/* 376 */
/***/
function(e,t,n){"use strict";var r=n(375),a=n(80);
// 23.2 Set Objects
e.exports=n(115)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},/* 377 */
/***/
function(e,t,n){"use strict";var r,a=n(40)(0),i=n(24),o=n(47),s=n(358),u=n(378),l=n(7),d=n(6),c=n(80),f=o.getWeak,h=Object.isExtensible,m=u.ufstore,_={},p=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(e){if(l(e)){var t=f(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(e,t){return u.def(c(this,"WeakMap"),e,t)}},v=e.exports=n(115)("WeakMap",p,y,u,!0,!0);
// IE11 WeakMap frozen keys fix
d(function(){return 7!=(new v).set((Object.freeze||Object)(_),7).get(_)})&&(r=u.getConstructor(p,"WeakMap"),s(r.prototype,y),o.NEED=!0,a(["delete","has","get","set"],function(e){var t=v.prototype,n=t[e];i(t,e,function(t,a){
// store frozen objects on internal weakmap shim
if(l(t)&&!h(t)){this._f||(this._f=new r);var i=this._f[e](t,a);return"set"==e?this:i}return n.call(this,t,a)})}))},/* 378 */
/***/
function(e,t,n){"use strict";var r=n(67),a=n(47).getWeak,i=n(3),o=n(7),s=n(65),u=n(66),l=n(40),d=n(22),c=n(80),f=l(5),h=l(6),m=0,_=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},y=function(e,t){return f(e.a,function(e){return e[0]===t})};p.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var n=y(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=h(this.a,function(t){return t[0]===e});return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var l=e(function(e,r){s(e,l,t,"_i"),e._t=t,// collection type
e._i=m++,// collection id
e._l=void 0,// leak store for uncaught frozen objects
void 0!=r&&u(r,n,e[i],e)});return r(l.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(e){if(!o(e))return!1;var n=a(e);return!0===n?_(c(this,t)).delete(e):n&&d(n,this._i)&&delete n[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(e){if(!o(e))return!1;var n=a(e);return!0===n?_(c(this,t)).has(e):n&&d(n,this._i)}}),l},def:function(e,t,n){var r=a(i(t),!0);return!0===r?_(e).set(t,n):r[e._i]=n,e},ufstore:_}},/* 379 */
/***/
function(e,t,n){
// https://tc39.github.io/ecma262/#sec-toindex
var r=n(38),a=n(16);e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=a(t);if(t!==n)throw RangeError("Wrong length!");return n}},/* 380 */
/***/
function(e,t,n){
// all object keys, includes non-enumerable and symbols
var r=n(63),a=n(108),i=n(3),o=n(4).Reflect;e.exports=o&&o.ownKeys||function(e){var t=r.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},/* 381 */
/***/
function(e,t,n){"use strict";function r(e,t,n,l,d,c,f,h){for(var m,_,p=d,y=0,v=!!f&&s(f,h,3);y<l;){if(y in n){if(m=v?v(n[y],y,t):n[y],_=!1,i(m)&&(_=m[u],_=void 0!==_?!!_:a(m)),_&&c>0)p=r(e,t,m,o(m.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError();e[p]=m}p++}y++}return p}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var a=n(109),i=n(7),o=n(16),s=n(31),u=n(11)("isConcatSpreadable");e.exports=r},/* 382 */
/***/
function(e,t,n){
// https://github.com/tc39/proposal-string-pad-start-end
var r=n(16),a=n(160),i=n(37);e.exports=function(e,t,n,o){var s=String(i(e)),u=s.length,l=void 0===n?" ":String(n),d=r(t);if(d<=u||""==l)return s;var c=d-u,f=a.call(l,Math.ceil(c/l.length));return f.length>c&&(f=f.slice(0,c)),o?f+s:s+f}},/* 383 */
/***/
function(e,t,n){var r=n(60),a=n(26),i=n(90).f;e.exports=function(e){return function(t){for(var n,o=a(t),s=r(o),u=s.length,l=0,d=[];u>l;)i.call(o,n=s[l++])&&d.push(e?[n,o[n]]:o[n]);return d}}},/* 384 */
/***/
function(e,t,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(91),a=n(385);e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return a(this)}}},/* 385 */
/***/
function(e,t,n){var r=n(66);e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},/* 386 */
/***/
function(e,t){
// https://rwaldron.github.io/proposal-math-extensions/
e.exports=Math.scale||function(e,t,n,r,a){return 0===arguments.length||e!=e||t!=t||n!=n||r!=r||a!=a?NaN:e===1/0||e===-1/0?e:(e-t)*(a-r)/(n-t)+r}},/* 387 */
/***/
function(e,t,n){n(179),n(635),e.exports=n(179)},/* 388 */
,/* 389 */
,/* 390 */
,/* 391 */
,/* 392 */
,/* 393 */
,/* 394 */
,/* 395 */
,/* 396 */
,/* 397 */
,/* 398 */
,/* 399 */
,/* 400 */
,/* 401 */
,/* 402 */
,/* 403 */
,/* 404 */
,/* 405 */
,/* 406 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(20);n(443);var _=n(444),p=r(_),y=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));
//  <QRCode value="https://anuraggautam77.github.io "/>  
return n.state={},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return h.default.createElement(p.default,null)}}]),t}(f.Component);t.default=(0,m.withRouter)(y)},/* 407 */
/***/
function(e,t,n){e.exports={default:n(408),__esModule:!0}},/* 408 */
/***/
function(e,t,n){n(409);var r=n(50).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},/* 409 */
/***/
function(e,t,n){var r=n(69);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(52),"Object",{defineProperty:n(51).f})},/* 410 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 411 */
/***/
function(e,t,n){e.exports={default:n(412),__esModule:!0}},/* 412 */
/***/
function(e,t,n){n(413),n(422),e.exports=n(134).f("iterator")},/* 413 */
/***/
function(e,t,n){"use strict";var r=n(414)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n(192)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},/* 414 */
/***/
function(e,t,n){var r=n(125),a=n(126);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,n){var i,o,s=String(a(t)),u=r(n),l=s.length;return u<0||u>=l?e?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):i:e?s.slice(u,u+2):o-56320+(i-55296<<10)+65536)}}},/* 415 */
/***/
function(e,t,n){"use strict";var r=n(129),a=n(92),i=n(133),o={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n(70)(o,n(73)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(o,{next:a(1,n)}),i(e,t+" Iterator")}},/* 416 */
/***/
function(e,t,n){var r=n(51),a=n(84),i=n(93);e.exports=n(52)?Object.defineProperties:function(e,t){a(e);for(var n,o=i(t),s=o.length,u=0;s>u;)r.f(e,n=o[u++],t[n]);return e}},/* 417 */
/***/
function(e,t,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(72),a=n(418),i=n(419);e.exports=function(e){return function(t,n,o){var s,u=r(t),l=a(u.length),d=i(o,l);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&n!=n){for(;l>d;)
// eslint-disable-next-line no-self-compare
if((s=u[d++])!=s)return!0}else for(;l>d;d++)if((e||d in u)&&u[d]===n)return e||d||0;return!e&&-1}}},/* 418 */
/***/
function(e,t,n){
// 7.1.15 ToLength
var r=n(125),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},/* 419 */
/***/
function(e,t,n){var r=n(125),a=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?a(e+t,0):i(e,t)}},/* 420 */
/***/
function(e,t,n){var r=n(44).document;e.exports=r&&r.documentElement},/* 421 */
/***/
function(e,t,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(53),a=n(197),i=n(130)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},/* 422 */
/***/
function(e,t,n){n(423);for(var r=n(44),a=n(70),i=n(128),o=n(73)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var l=s[u],d=r[l],c=d&&d.prototype;c&&!c[o]&&a(c,o,l),i[l]=i.Array}},/* 423 */
/***/
function(e,t,n){"use strict";var r=n(424),a=n(425),i=n(128),o=n(72);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
e.exports=n(192)(Array,"Array",function(e,t){this._t=o(e),// target
this._i=0,// next index
this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,a(1)):"keys"==t?a(0,n):"values"==t?a(0,e[n]):a(0,[n,e[n]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
i.Arguments=i.Array,r("keys"),r("values"),r("entries")},/* 424 */
/***/
function(e,t){e.exports=function(){}},/* 425 */
/***/
function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},/* 426 */
/***/
function(e,t,n){e.exports={default:n(427),__esModule:!0}},/* 427 */
/***/
function(e,t,n){n(428),n(433),n(434),n(435),e.exports=n(50).Symbol},/* 428 */
/***/
function(e,t,n){"use strict";
// ECMAScript 6 symbols shim
var r=n(44),a=n(53),i=n(52),o=n(69),s=n(193),u=n(429).KEY,l=n(85),d=n(131),c=n(133),f=n(94),h=n(73),m=n(134),_=n(135),p=n(430),y=n(431),v=n(84),g=n(71),M=n(72),b=n(124),L=n(92),k=n(129),Y=n(432),w=n(199),x=n(51),D=n(93),S=w.f,T=x.f,E=Y.f,j=r.Symbol,O=r.JSON,P=O&&O.stringify,H=h("_hidden"),A=h("toPrimitive"),C={}.propertyIsEnumerable,F=d("symbol-registry"),N=d("symbols"),I=d("op-symbols"),W=Object.prototype,z="function"==typeof j,R=r.QObject,B=!R||!R.prototype||!R.prototype.findChild,V=i&&l(function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=S(W,t);r&&delete W[t],T(e,t,n),r&&e!==W&&T(W,t,r)}:T,U=function(e){var t=N[e]=k(j.prototype);return t._k=e,t},J=z&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof j},q=function(e,t,n){return e===W&&q(I,t,n),v(e),t=b(t,!0),v(n),a(N,t)?(n.enumerable?(a(e,H)&&e[H][t]&&(e[H][t]=!1),n=k(n,{enumerable:L(0,!1)})):(a(e,H)||T(e,H,L(1,{})),e[H][t]=!0),V(e,t,n)):T(e,t,n)},G=function(e,t){v(e);for(var n,r=p(t=M(t)),a=0,i=r.length;i>a;)q(e,n=r[a++],t[n]);return e},K=function(e,t){return void 0===t?k(e):G(k(e),t)},$=function(e){var t=C.call(this,e=b(e,!0));return!(this===W&&a(N,e)&&!a(I,e))&&(!(t||!a(this,e)||!a(N,e)||a(this,H)&&this[H][e])||t)},Q=function(e,t){if(e=M(e),t=b(t,!0),e!==W||!a(N,t)||a(I,t)){var n=S(e,t);return!n||!a(N,t)||a(e,H)&&e[H][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=E(M(e)),r=[],i=0;n.length>i;)a(N,t=n[i++])||t==H||t==u||r.push(t);return r},X=function(e){for(var t,n=e===W,r=E(n?I:M(e)),i=[],o=0;r.length>o;)!a(N,t=r[o++])||n&&!a(W,t)||i.push(N[t]);return i};
// 19.4.1.1 Symbol([description])
z||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===W&&t.call(I,n),a(this,H)&&a(this[H],e)&&(this[H][e]=!1),V(this,e,L(1,n))};return i&&B&&V(W,e,{configurable:!0,set:t}),U(e)},s(j.prototype,"toString",function(){return this._k}),w.f=Q,x.f=q,n(198).f=Y.f=Z,n(95).f=$,n(136).f=X,i&&!n(127)&&s(W,"propertyIsEnumerable",$,!0),m.f=function(e){return U(h(e))}),o(o.G+o.W+o.F*!z,{Symbol:j});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)h(ee[te++]);for(var ne=D(h.store),re=0;ne.length>re;)_(ne[re++]);o(o.S+o.F*!z,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(e){return a(F,e+="")?F[e]:F[e]=j(e)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(e){if(!J(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){B=!0},useSimple:function(){B=!1}}),o(o.S+o.F*!z,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:K,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:q,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:G,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Q,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Z,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:X}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
O&&o(o.S+o.F*(!z||l(function(){var e=j();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=P([e])||"{}"!=P({a:e})||"{}"!=P(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(g(t)||void 0!==e)&&!J(e))// IE8 returns string on undefined
return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!J(t))return t}),r[1]=t,P.apply(O,r)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
j.prototype[A]||n(70)(j.prototype,A,j.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
c(j,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
c(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
c(r.JSON,"JSON",!0)},/* 429 */
/***/
function(e,t,n){var r=n(94)("meta"),a=n(71),i=n(53),o=n(51).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(85)(function(){return u(Object.preventExtensions({}))}),d=function(e){o(e,r,{value:{i:"O"+ ++s,// object ID
w:{}}})},c=function(e,t){
// return primitive with prefix
if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){
// can't set metadata to uncaught frozen object
if(!u(e))return"F";
// not necessary to add metadata
if(!t)return"E";
// add missing metadata
d(e)}return e[r].i},f=function(e,t){if(!i(e,r)){
// can't set metadata to uncaught frozen object
if(!u(e))return!0;
// not necessary to add metadata
if(!t)return!1;
// add missing metadata
d(e)}return e[r].w},h=function(e){return l&&m.NEED&&u(e)&&!i(e,r)&&d(e),e},m=e.exports={KEY:r,NEED:!1,fastKey:c,getWeak:f,onFreeze:h}},/* 430 */
/***/
function(e,t,n){
// all enumerable object keys, includes symbols
var r=n(93),a=n(136),i=n(95);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,s=n(e),u=i.f,l=0;s.length>l;)u.call(e,o=s[l++])&&t.push(o);return t}},/* 431 */
/***/
function(e,t,n){
// 7.2.2 IsArray(argument)
var r=n(196);e.exports=Array.isArray||function(e){return"Array"==r(e)}},/* 432 */
/***/
function(e,t,n){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var r=n(72),a=n(198).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(e){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):a(r(e))}},/* 433 */
/***/
function(e,t){},/* 434 */
/***/
function(e,t,n){n(135)("asyncIterator")},/* 435 */
/***/
function(e,t,n){n(135)("observable")},/* 436 */
/***/
function(e,t,n){e.exports={default:n(437),__esModule:!0}},/* 437 */
/***/
function(e,t,n){n(438),e.exports=n(50).Object.setPrototypeOf},/* 438 */
/***/
function(e,t,n){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var r=n(69);r(r.S,"Object",{setPrototypeOf:n(439).set})},/* 439 */
/***/
function(e,t,n){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var r=n(71),a=n(84),i=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,r){try{r=n(188)(Function.call,n(199).f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},/* 440 */
/***/
function(e,t,n){e.exports={default:n(441),__esModule:!0}},/* 441 */
/***/
function(e,t,n){n(442);var r=n(50).Object;e.exports=function(e,t){return r.create(e,t)}},/* 442 */
/***/
function(e,t,n){var r=n(69);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
r(r.S,"Object",{create:n(129)})},/* 443 */
/***/
function(e,t){},/* 444 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=r(a),o=n(449),s=r(o),u=n(9),l=r(u),d=n(10),c=r(d),f=n(12),h=r(f),m=n(13),_=r(m),p=n(2),y=r(p),v=n(20),g=n(450),M=(r(g),n(454)),b=r(M),L=n(506),k=r(L),Y=n(512),w=r(Y),x=n(631),D=r(x),S=n(633),T=r(S),E=n(352),j=r(E),O=function(e){function t(e){return(0,l.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=function(e){var t=e.component,n=(0,s.default)(e,["component"]);return y.default.createElement(v.Route,(0,i.default)({},n,{render:function(e){return j.default.isUserAuthenticated()?y.default.createElement(t,e):y.default.createElement(v.Redirect,{to:{pathname:"/admin",state:{from:e.location}}})}}))};return y.default.createElement(v.BrowserRouter,null,y.default.createElement("div",null,y.default.createElement(v.Route,{path:"/",exact:!0,component:D.default}),y.default.createElement(v.Route,{path:"/adminreg",exact:!0,component:T.default}),y.default.createElement(e,{path:"/createque",exact:!0,component:w.default}),y.default.createElement(e,{path:"/admindetail/:id/:type",exact:!0,component:b.default}),y.default.createElement(e,{path:"/heatmap",component:k.default})))}}]),t}(p.Component);t.default=O},/* 445 */
/***/
function(e,t,n){e.exports={default:n(446),__esModule:!0}},/* 446 */
/***/
function(e,t,n){n(447),e.exports=n(50).Object.assign},/* 447 */
/***/
function(e,t,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(69);r(r.S+r.F,"Object",{assign:n(448)})},/* 448 */
/***/
function(e,t,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(93),a=n(136),i=n(95),o=n(197),s=n(195),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!u||n(85)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=r})?function(e,t){for(// eslint-disable-line no-unused-vars
var n=o(e),u=arguments.length,l=1,d=a.f,c=i.f;u>l;)for(var f,h=s(arguments[l++]),m=d?r(h).concat(d(h)):r(h),_=m.length,p=0;_>p;)c.call(h,f=m[p++])&&(n[f]=h[f]);return n}:u},/* 449 */
/***/
function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},/* 450 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f);n(451);var m=n(452),_=r(m),p=n(453),y=r(p),v=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"application landing"},h.default.createElement(_.default,null),h.default.createElement(y.default,null))}}]),t}(f.Component);t.default=v},/* 451 */
/***/
function(e,t){},/* 452 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(20),_=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"logoutHandler",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"mainmenu-wrapper"},h.default.createElement("div",{className:"container"},h.default.createElement("nav",{id:"mainmenu",className:"mainmenu"},h.default.createElement("ul",null,h.default.createElement("li",{className:"logo-wrapper"},h.default.createElement(m.Link,{to:"/",className:"dropdown-toggle","data-toggle":"dropdown"},h.default.createElement("img",{src:"/img/web-logo.png",alt:"AGARTHA"})))))))}}]),t}(f.Component);t.default=(0,m.withRouter)(_)},/* 453 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=r(a),o=n(9),s=r(o),u=n(10),l=r(u),d=n(12),c=r(d),f=n(13),h=r(f),m=n(2),_=r(m),p=n(20),y=function(e){function t(e){(0,s.default)(this,t);var n=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={projectname:"",showform:"db",navigation:"dn",showgrid:"dn",floorno:10,name:"",selectedBlock:"",lid:"",deviceid:"",matrix:[]},n}return(0,h.default)(t,e),(0,l.default)(t,[{key:"generateSquareMatrix",value:function(e,t,n,r,a){var i,o,s=[],u=t,l=u+r;for(i=0;i<e;i++)for(s[i]=[],o=0;o<e;o++)s[i][o]=a+"F-"+u+" to "+a+"F-"+l,u=l+1,l=u+r;return s}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"gridClickHandler",value:function(e){this.setState((0,i.default)({},this.state,{selectedBlock:e.currentTarget.getAttribute("blockid"),projectname:e.currentTarget.getAttribute("blockid"),lid:e.currentTarget.id}))}},{key:"registerUser",value:function(){var e=this;if(""!==this.refs.mobileno.value&&""!==this.refs.name.value&&""!==this.state.lid&&""!==this.state.projectname){var t={lid:this.state.lid,projectname:this.state.projectname,deviceid:"-",floorno:this.state.floorno,mobileno:this.refs.mobileno.value,name:this.refs.name.value};fetch("/api/spotreg",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(t){e.setState((0,i.default)({},e.state,{navigation:"db",showform:"dn",name:e.refs.name.value}))})}else alert("Fill all the form !!!")}},{key:"checkstatus",value:function(e){return"Block-"+e===this.state.selectedBlock?"recall-grid-tile is-selected":"recall-grid-tile"}},{key:"drawgrid",value:function(){var e=this,t=0;return this.state.matrix.map(function(n,r){return _.default.createElement("div",{key:r,className:"recall-grid-row"},n.map(function(n,a){return t++,_.default.createElement("div",{key:a,id:e.state.floorno+"F-"+(r+1)+"B-"+(a+1)+"R",blockid:"Block-"+t,className:e.checkstatus(t),onClick:function(t){e.gridClickHandler(t,a)}},_.default.createElement("div",null," Seat No",_.default.createElement("br",null),n))}))})}},{key:"render",value:function(){var e=this;return _.default.createElement("div",null,_.default.createElement("div",{className:"section section-breadcrumbs"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-md-12"},_.default.createElement("h1",null,"Footfall Registration"))))),_.default.createElement("div",{className:"section"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-sm-7"},_.default.createElement("div",{className:"basic-login "+this.state.showform},_.default.createElement("form",{role:"form"},_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-user"})," ",_.default.createElement("b",null,"Nick Name")),_.default.createElement("input",{type:"text",name:"first_name",id:"first_name",className:"form-control input-sm",placeholder:"Nick Name",required:"required",ref:"name"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-phone"})," ",_.default.createElement("b",null,"Mobile Number")),_.default.createElement("input",{id:"mobileno",name:"Mobile No.",ref:"mobileno",placeholder:"Mobile No.",className:"form-control input-sm",required:"required",type:"number"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-building"})," ",_.default.createElement("b",null,"Select Floor")),_.default.createElement("select",{onChange:function(t){""!==t.target.value?e.setState((0,i.default)({},e.state,{floorno:t.target.value,showgrid:"db",matrix:e.generateSquareMatrix(4,1,600,39,t.target.value)})):e.setState((0,i.default)({},e.state,{showgrid:"dn"}))},id:"inputState",className:"form-control input-sm"},_.default.createElement("option",{value:""},"Floor No ..."),_.default.createElement("option",{value:"4"},"Floor-4"),_.default.createElement("option",{value:"5"},"Floor-5"),_.default.createElement("option",{value:"6"},"Floor-6"),_.default.createElement("option",{value:"7"},"Floor-7"),_.default.createElement("option",{value:"8"},"Floor-8"),_.default.createElement("option",{value:"9"},"Floor-9"),_.default.createElement("option",{value:"10"},"Floor-10"))),_.default.createElement("div",{className:"form-group"},_.default.createElement("div",{className:"row "+this.state.showgrid},_.default.createElement("p",null," ",this.state.projectname," "),_.default.createElement("div",{className:"form-group canvas-container col-md-12"},_.default.createElement("div",{className:"recall-grid"},this.drawgrid())))),_.default.createElement("div",{className:"form-group"},_.default.createElement("button",{type:"button",onClick:function(){e.registerUser()},className:"btn pull-right"},"Register"),_.default.createElement("div",{className:"clearfix"})))),_.default.createElement("div",{className:"row "+this.state.navigation},_.default.createElement("div",{className:"col-sm-12 col-md-12"},_.default.createElement("div",{className:"well panel-heading service-wrapper alignheading"},_.default.createElement("div",{className:"widget-tile"},_.default.createElement("section",null,_.default.createElement("h3",null," Thank you for registration"),_.default.createElement("div",{className:"progress xs green"}),_.default.createElement("div",{className:"thanku-template"},_.default.createElement("h3",null," Thanks for registration")))))))),_.default.createElement("div",{className:"col-sm-4 col-sm-offset-1 social-login"},_.default.createElement("p",null,"dummy text"),_.default.createElement("div",{className:"social-login-buttons"}))))))}}]),t}(m.Component);t.default=(0,p.withRouter)(y)},/* 454 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(455),_=r(m),p=n(137),y=r(p);n(505);/* global google, fetch */
var v=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={users:null,count:null,que:null,type:n.props.match.params.type},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this;if("poll"===this.props.match.params.type||"quiz"===this.props.match.params.type){var t=this.props.match.params.type,n=this.props.match.params.id;fetch("/api/admingetque/"+n+"/"+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(n){"poll"==t?e.setState({count:n.count,que:n.que}):e.setState({users:n.users,count:n.count,que:n.que})})}}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return h.default.createElement("div",{className:"wrapper"},h.default.createElement("div",{className:"main-panel"},h.default.createElement(y.default,null),h.default.createElement("div",{className:"content"},h.default.createElement("div",{className:"container-fluid"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-12"},h.default.createElement("div",{className:"card"},h.default.createElement("div",{className:"content"},function(){if(null!==e.state.que)return h.default.createElement(_.default,{pollquiz:e.state})}())))))),h.default.createElement("footer",{className:"footer"},h.default.createElement("div",{className:"container-fluid"},h.default.createElement("div",{className:"copyright pull-right"})))))}}]),t}(f.Component);t.default=v},/* 455 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(456),_=r(m),p=n(504),y=r(p),v=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={users:null!==e.pollquiz.users?e.pollquiz.users:[],count:null!==e.pollquiz.count?e.pollquiz.count:[],que:null!==e.pollquiz.que?e.pollquiz.que:[]},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this;return h.default.createElement("div",null,h.default.createElement("h3",{className:"form-signin-heading"},this.props.pollquiz.que[0].que),function(){return"poll"===e.props.pollquiz.type?h.default.createElement(_.default,{count:e.state.count,que:e.state.que}):h.default.createElement(y.default,{users:e.state.users,que:e.state.que,count:e.state.count})}())}}]),t}(f.Component);t.default=v},/* 456 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(457),_=r(m),p=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.props,n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){this.collectData()}},{key:"collectData",value:function(){var e=this,t=1,n=[];this.state.que[0].options.map(function(r,a){var i={};i.text=r,i.option="op"+t,i.count=0,e.state.count.arrCount.map(function(e){Object.keys(e)[0]==="op"+t&&(i.count=e["op"+t])}),t++,n.push(i)}),this.setState({finalData:n},function(){e.showGraph(n),console.log(e.state)})}},{key:"showGraph",value:function(e){var t=[],n=[];e.map(function(e){t.push(e.text+" ("+e.count+")"),n.push(e.count)});var r=document.getElementById("chart"),a=r.getContext("2d");new _.default(a,{type:"pie",data:{datasets:[{data:n,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}],labels:t},options:{legend:{position:"bottom",display:!0,responsive:!1,maintainAspectRatio:!0,labels:{fontFamily:"Helvetica",fontSize:12}}}})}},{key:"renderList",value:function(){return this.state.finalData.map(function(e,t){return h.default.createElement("li",{className:"list-group-item",key:t},h.default.createElement("span",{className:"badge"},e.count),e.text)})}},{key:"render",value:function(){var e=this;return h.default.createElement("div",null,h.default.createElement("hr",{className:"colorgraph"}),h.default.createElement("br",null),h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-sm-8 col-xs-12"},h.default.createElement("div",{className:"chart-container"},h.default.createElement("canvas",{id:"chart"}))),h.default.createElement("div",{className:"col-sm-4 col-xs-12"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-heading"},"Options"),h.default.createElement("div",{className:"panel-body"},h.default.createElement("ul",{className:"list-group"},function(){return e.renderList()}())),h.default.createElement("div",{className:"panel-footer"})))),h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-sm-6 col-xs-12"})))}}]),t}(f.Component);t.default=p},/* 457 */
/***/
function(e,t,n){/**
 * @namespace Chart
 */
var r=n(458)();r.helpers=n(5),
// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
n(462)(r),r.defaults=n(8),r.Element=n(34),r.elements=n(45),r.Interaction=n(201),r.layouts=n(86),r.platform=n(202),r.plugins=n(203),r.Ticks=n(87),n(473)(r),n(474)(r),n(475)(r),n(476)(r),n(477)(r),n(478)(r),n(479)(r),n(480)(r),n(481)(r),n(482)(r),n(483)(r),n(484)(r),
// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
n(486)(r),n(487)(r),n(488)(r),n(489)(r),n(490)(r),n(491)(r),n(492)(r),n(493)(r),n(494)(r),n(495)(r),n(496)(r),n(497)(r),n(498)(r),n(499)(r);
// Loading built-it plugins
var a=n(500);for(var i in a)a.hasOwnProperty(i)&&r.plugins.register(a[i]);r.platform.initialize(),e.exports=r,"undefined"!=typeof window&&(window.Chart=r),
// DEPRECATIONS
/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
r.Legend=a.legend._element,/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
r.Title=a.title._element,/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
r.pluginService=r.plugins,/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
r.PluginBase=r.Element.extend({}),/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
r.canvasHelpers=r.helpers.canvas,/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
r.layoutService=r.layouts},/* 458 */
/***/
function(e,t,n){"use strict";n(8)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,
// Element defaults defined in element extensions
elements:{},
// Layout options such as padding
layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){
// Occupy the global variable of Chart, and create a simple base class
var e=function(e,t){return this.construct(e,t),this};return e.Chart=e,e}},/* 459 */
/***/
function(e,t,n){"use strict";var r=n(96),a={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return-e*(e-2)},easeInOutQuad:function(e){return(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1)},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return(e-=1)*e*e+1},easeInOutCubic:function(e){return(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return-((e-=1)*e*e*e-1)},easeInOutQuart:function(e){return(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return(e-=1)*e*e*e*e+1},easeInOutQuint:function(e){return(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},easeInSine:function(e){return 1-Math.cos(e*(Math.PI/2))},easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInExpo:function(e){return 0===e?0:Math.pow(2,10*(e-1))},easeOutExpo:function(e){return 1===e?1:1-Math.pow(2,-10*e)},easeInOutExpo:function(e){return 0===e?0:1===e?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*--e))},easeInCirc:function(e){return e>=1?e:-(Math.sqrt(1-e*e)-1)},easeOutCirc:function(e){return Math.sqrt(1-(e-=1)*e)},easeInOutCirc:function(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){var t=1.70158,n=0,r=1;return 0===e?0:1===e?1:(n||(n=.3),r<1?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r),-r*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/n))},easeOutElastic:function(e){var t=1.70158,n=0,r=1;return 0===e?0:1===e?1:(n||(n=.3),r<1?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/n)+1)},easeInOutElastic:function(e){var t=1.70158,n=0,r=1;return 0===e?0:2==(e/=.5)?1:(n||(n=.45),r<1?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r),e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/n)*-.5:r*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/n)*.5+1)},easeInBack:function(e){var t=1.70158;return e*e*((t+1)*e-t)},easeOutBack:function(e){var t=1.70158;return(e-=1)*e*((t+1)*e+t)+1},easeInOutBack:function(e){var t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2)},easeInBounce:function(e){return 1-a.easeOutBounce(1-e)},easeOutBounce:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:function(e){return e<.5?.5*a.easeInBounce(2*e):.5*a.easeOutBounce(2*e-1)+.5}};e.exports={effects:a},
// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.easingEffects=a},/* 460 */
/***/
function(e,t,n){"use strict";var r=n(96),t=e.exports={/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
clear:function(e){e.ctx.clearRect(0,0,e.width,e.height)},/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {Number} width - The rectangle's width.
	 * @param {Number} height - The rectangle's height.
	 * @param {Number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
roundedRect:function(e,t,n,r,a,i){if(i){var o=Math.min(i,r/2),s=Math.min(i,a/2);e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+s),e.lineTo(t+r,n+a-s),e.quadraticCurveTo(t+r,n+a,t+r-o,n+a),e.lineTo(t+o,n+a),e.quadraticCurveTo(t,n+a,t,n+a-s),e.lineTo(t,n+s),e.quadraticCurveTo(t,n,t+o,n)}else e.rect(t,n,r,a)},drawPoint:function(e,t,n,r,a){var i,o,s,u,l,d;if(t&&"object"==typeof t&&("[object HTMLImageElement]"===(i=t.toString())||"[object HTMLCanvasElement]"===i))return void e.drawImage(t,r-t.width/2,a-t.height/2,t.width,t.height);if(!(isNaN(n)||n<=0)){switch(t){
// Default includes circle
default:e.beginPath(),e.arc(r,a,n,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),o=3*n/Math.sqrt(3),l=o*Math.sqrt(3)/2,e.moveTo(r-o/2,a+l/3),e.lineTo(r+o/2,a+l/3),e.lineTo(r,a-2*l/3),e.closePath(),e.fill();break;case"rect":d=1/Math.SQRT2*n,e.beginPath(),e.fillRect(r-d,a-d,2*d,2*d),e.strokeRect(r-d,a-d,2*d,2*d);break;case"rectRounded":var c=n/Math.SQRT2,f=r-c,h=a-c,m=Math.SQRT2*n;e.beginPath(),this.roundedRect(e,f,h,m,m,n/2),e.closePath(),e.fill();break;case"rectRot":d=1/Math.SQRT2*n,e.beginPath(),e.moveTo(r-d,a),e.lineTo(r,a+d),e.lineTo(r+d,a),e.lineTo(r,a-d),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(r,a+n),e.lineTo(r,a-n),e.moveTo(r-n,a),e.lineTo(r+n,a),e.closePath();break;case"crossRot":e.beginPath(),s=Math.cos(Math.PI/4)*n,u=Math.sin(Math.PI/4)*n,e.moveTo(r-s,a-u),e.lineTo(r+s,a+u),e.moveTo(r-s,a+u),e.lineTo(r+s,a-u),e.closePath();break;case"star":e.beginPath(),e.moveTo(r,a+n),e.lineTo(r,a-n),e.moveTo(r-n,a),e.lineTo(r+n,a),s=Math.cos(Math.PI/4)*n,u=Math.sin(Math.PI/4)*n,e.moveTo(r-s,a-u),e.lineTo(r+s,a+u),e.moveTo(r-s,a+u),e.lineTo(r+s,a-u),e.closePath();break;case"line":e.beginPath(),e.moveTo(r-n,a),e.lineTo(r+n,a),e.closePath();break;case"dash":e.beginPath(),e.moveTo(r,a),e.lineTo(r+n,a),e.closePath()}e.stroke()}},clipArea:function(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()},unclipArea:function(e){e.restore()},lineTo:function(e,t,n,r){return n.steppedLine?("after"===n.steppedLine&&!r||"after"!==n.steppedLine&&r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y),void e.lineTo(n.x,n.y)):n.tension?void e.bezierCurveTo(r?t.controlPointPreviousX:t.controlPointNextX,r?t.controlPointPreviousY:t.controlPointNextY,r?n.controlPointNextX:n.controlPointPreviousX,r?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):void e.lineTo(n.x,n.y)}};
// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.clear=t.clear,/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.drawRoundedRectangle=function(e){e.beginPath(),t.roundedRect.apply(t,arguments),e.closePath()}},/* 461 */
/***/
function(e,t,n){"use strict";var r=n(96);/**
 * @alias Chart.helpers.options
 * @namespace
 */
e.exports={/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
toLineHeight:function(e,t){var n=(""+e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*t;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100}return t*e},/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {Number|Object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {Object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
toPadding:function(e){var t,n,a,i;return r.isObject(e)?(t=+e.top||0,n=+e.right||0,a=+e.bottom||0,i=+e.left||0):t=n=a=i=+e||0,{top:t,right:n,bottom:a,left:i,height:t+a,width:i+n}},/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array[]} inputs - An array of values, falling back to the last value.
	 * @param {Object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {Number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */
resolve:function(e,t,n){var a,i,o;for(a=0,i=e.length;a<i;++a)if(void 0!==(o=e[a])&&(void 0!==t&&"function"==typeof o&&(o=o(t)),void 0!==n&&r.isArray(o)&&(o=o[n]),void 0!==o))return o}}},/* 462 */
/***/
function(e,t,n){"use strict";/* global window: false */
/* global document: false */
var r=n(200),a=n(8),i=n(5);e.exports=function(e){
// Private helper function to convert max-width/max-height values that may be percentages into a number
function t(e,t,n){var r;
// percentage * size in dimension
return"string"==typeof e?(r=parseInt(e,10),-1!==e.indexOf("%")&&(r=r/100*t.parentNode[n])):r=e,r}/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
function n(e){return void 0!==e&&null!==e&&"none"!==e}
// Private helper to get a constraint dimension
// @param domNode : the node to check the constraint on
// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
// @param percentageProperty : property of parent to use when calculating width as a percentage
// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
function o(e,r,a){var i=document.defaultView,o=e.parentNode,s=i.getComputedStyle(e)[r],u=i.getComputedStyle(o)[r],l=n(s),d=n(u),c=Number.POSITIVE_INFINITY;return l||d?Math.min(l?t(s,e,a):c,d?t(u,o,a):c):"none"}
// -- Basic js utility methods
i.configMerge=function(){return i.merge(i.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,n,r,a){var o=n[t]||{},s=r[t];"scales"===t?
// scale config merging is complex. Add our own function here for that
n[t]=i.scaleMerge(o,s):"scale"===t?
// used in polar area & radar charts since there is only one scale
n[t]=i.merge(o,[e.scaleService.getScaleDefaults(s.type),s]):i._merger(t,n,r,a)}})},i.scaleMerge=function(){return i.merge(i.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,n,r,a){if("xAxes"===t||"yAxes"===t){var o,s,u,l=r[t].length;for(n[t]||(n[t]=[]),o=0;o<l;++o)u=r[t][o],s=i.valueOrDefault(u.type,"xAxes"===t?"category":"linear"),o>=n[t].length&&n[t].push({}),!n[t][o].type||u.type&&u.type!==n[t][o].type?
// new/untyped scale or type changed: let's apply the new defaults
// then merge source scale to correctly overwrite the defaults.
i.merge(n[t][o],[e.scaleService.getScaleDefaults(s),u]):
// scales type are the same
i.merge(n[t][o],u)}else i._merger(t,n,r,a)}})},i.where=function(e,t){if(i.isArray(e)&&Array.prototype.filter)return e.filter(t);var n=[];return i.each(e,function(e){t(e)&&n.push(e)}),n},i.findIndex=Array.prototype.findIndex?function(e,t,n){return e.findIndex(t,n)}:function(e,t,n){n=void 0===n?e:n;for(var r=0,a=e.length;r<a;++r)if(t.call(n,e[r],r,e))return r;return-1},i.findNextWhere=function(e,t,n){
// Default to start of the array
i.isNullOrUndef(n)&&(n=-1);for(var r=n+1;r<e.length;r++){var a=e[r];if(t(a))return a}},i.findPreviousWhere=function(e,t,n){
// Default to end of the array
i.isNullOrUndef(n)&&(n=e.length);for(var r=n-1;r>=0;r--){var a=e[r];if(t(a))return a}},
// -- Math methods
i.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},i.almostEquals=function(e,t,n){return Math.abs(e-t)<n},i.almostWhole=function(e,t){var n=Math.round(e);return n-t<e&&n+t>e},i.max=function(e){return e.reduce(function(e,t){return isNaN(t)?e:Math.max(e,t)},Number.NEGATIVE_INFINITY)},i.min=function(e){return e.reduce(function(e,t){return isNaN(t)?e:Math.min(e,t)},Number.POSITIVE_INFINITY)},i.sign=Math.sign?function(e){return Math.sign(e)}:function(e){// convert to a number
// convert to a number
return e=+e,0===e||isNaN(e)?e:e>0?1:-1},i.log10=Math.log10?function(e){return Math.log10(e)}:function(e){var t=Math.log(e)*Math.LOG10E,n=Math.round(t);return e===Math.pow(10,n)?n:t},i.toRadians=function(e){return e*(Math.PI/180)},i.toDegrees=function(e){return e*(180/Math.PI)},
// Gets the angle from vertical upright to the point about a centre.
i.getAngleFromPoint=function(e,t){var n=t.x-e.x,r=t.y-e.y,a=Math.sqrt(n*n+r*r),i=Math.atan2(r,n);return i<-.5*Math.PI&&(i+=2*Math.PI),{angle:i,distance:a}},i.distanceBetweenPoints=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},i.aliasPixel=function(e){return e%2==0?0:.5},i.splineCurve=function(e,t,n,r){
// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
var a=e.skip?t:e,i=t,o=n.skip?t:n,s=Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)),l=s/(s+u),d=u/(s+u);
// If all points are the same, s01 & s02 will be inf
l=isNaN(l)?0:l,d=isNaN(d)?0:d;var c=r*l,f=r*d;return{previous:{x:i.x-c*(o.x-a.x),y:i.y-c*(o.y-a.y)},next:{x:i.x+f*(o.x-a.x),y:i.y+f*(o.y-a.y)}}},i.EPSILON=Number.EPSILON||1e-14,i.splineCurveMonotone=function(e){
// This function calculates Bézier control points in a similar way than |splineCurve|,
// but preserves monotonicity of the provided data and ensures no local extremums are added
// between the dataset discrete points due to the interpolation.
// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
var t,n,r,a,o=(e||[]).map(function(e){return{model:e._model,deltaK:0,mK:0}}),s=o.length;for(t=0;t<s;++t)if(r=o[t],!r.model.skip){if(n=t>0?o[t-1]:null,(a=t<s-1?o[t+1]:null)&&!a.model.skip){var u=a.model.x-r.model.x;
// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
r.deltaK=0!==u?(a.model.y-r.model.y)/u:0}!n||n.model.skip?r.mK=r.deltaK:!a||a.model.skip?r.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(r.deltaK)?r.mK=0:r.mK=(n.deltaK+r.deltaK)/2}
// Adjust tangents to ensure monotonic properties
var l,d,c,f;for(t=0;t<s-1;++t)r=o[t],a=o[t+1],r.model.skip||a.model.skip||(i.almostEquals(r.deltaK,0,this.EPSILON)?r.mK=a.mK=0:(l=r.mK/r.deltaK,d=a.mK/r.deltaK,(f=Math.pow(l,2)+Math.pow(d,2))<=9||(c=3/Math.sqrt(f),r.mK=l*c*r.deltaK,a.mK=d*c*r.deltaK)));
// Compute control points
var h;for(t=0;t<s;++t)r=o[t],r.model.skip||(n=t>0?o[t-1]:null,a=t<s-1?o[t+1]:null,n&&!n.model.skip&&(h=(r.model.x-n.model.x)/3,r.model.controlPointPreviousX=r.model.x-h,r.model.controlPointPreviousY=r.model.y-h*r.mK),a&&!a.model.skip&&(h=(a.model.x-r.model.x)/3,r.model.controlPointNextX=r.model.x+h,r.model.controlPointNextY=r.model.y+h*r.mK))},i.nextItem=function(e,t,n){return n?t>=e.length-1?e[0]:e[t+1]:t>=e.length-1?e[e.length-1]:e[t+1]},i.previousItem=function(e,t,n){return n?t<=0?e[e.length-1]:e[t-1]:t<=0?e[0]:e[t-1]},
// Implementation of the nice number algorithm used in determining where axis labels will go
i.niceNum=function(e,t){var n=Math.floor(i.log10(e)),r=e/Math.pow(10,n);return(t?r<1.5?1:r<3?2:r<7?5:10:r<=1?1:r<=2?2:r<=5?5:10)*Math.pow(10,n)},
// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
i.requestAnimFrame=function(){return"undefined"==typeof window?function(e){e()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}(),
// -- DOM methods
i.getRelativePosition=function(e,t){var n,r,a=e.originalEvent||e,o=e.currentTarget||e.srcElement,s=o.getBoundingClientRect(),u=a.touches;u&&u.length>0?(n=u[0].clientX,r=u[0].clientY):(n=a.clientX,r=a.clientY);
// Scale mouse coordinates into canvas coordinates
// by following the pattern laid out by 'jerryj' in the comments of
// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
var l=parseFloat(i.getStyle(o,"padding-left")),d=parseFloat(i.getStyle(o,"padding-top")),c=parseFloat(i.getStyle(o,"padding-right")),f=parseFloat(i.getStyle(o,"padding-bottom")),h=s.right-s.left-l-c,m=s.bottom-s.top-d-f;
// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
return n=Math.round((n-s.left-l)/h*o.width/t.currentDevicePixelRatio),r=Math.round((r-s.top-d)/m*o.height/t.currentDevicePixelRatio),{x:n,y:r}},
// returns Number or undefined if no constraint
i.getConstraintWidth=function(e){return o(e,"max-width","clientWidth")},
// returns Number or undefined if no constraint
i.getConstraintHeight=function(e){return o(e,"max-height","clientHeight")},i.getMaximumWidth=function(e){var t=e.parentNode;if(!t)return e.clientWidth;var n=parseInt(i.getStyle(t,"padding-left"),10),r=parseInt(i.getStyle(t,"padding-right"),10),a=t.clientWidth-n-r,o=i.getConstraintWidth(e);return isNaN(o)?a:Math.min(a,o)},i.getMaximumHeight=function(e){var t=e.parentNode;if(!t)return e.clientHeight;var n=parseInt(i.getStyle(t,"padding-top"),10),r=parseInt(i.getStyle(t,"padding-bottom"),10),a=t.clientHeight-n-r,o=i.getConstraintHeight(e);return isNaN(o)?a:Math.min(a,o)},i.getStyle=function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null).getPropertyValue(t)},i.retinaScale=function(e,t){var n=e.currentDevicePixelRatio=t||window.devicePixelRatio||1;if(1!==n){var r=e.canvas,a=e.height,i=e.width;r.height=a*n,r.width=i*n,e.ctx.scale(n,n),
// If no style has been set on the canvas, the render size is used as display size,
// making the chart visually bigger, so let's enforce it to the "correct" values.
// See https://github.com/chartjs/Chart.js/issues/3575
r.style.height||r.style.width||(r.style.height=a+"px",r.style.width=i+"px")}},
// -- Canvas methods
i.fontString=function(e,t,n){return t+" "+e+"px "+n},i.longestText=function(e,t,n,r){r=r||{};var a=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(a=r.data={},o=r.garbageCollect=[],r.font=t),e.font=t;var s=0;i.each(n,function(t){
// Undefined strings and arrays should not be measured
void 0!==t&&null!==t&&!0!==i.isArray(t)?s=i.measureText(e,a,o,s,t):i.isArray(t)&&
// if it is an array lets measure each element
// to do maybe simplify this function a bit so we can do this more recursively?
i.each(t,function(t){
// Undefined strings and arrays should not be measured
void 0===t||null===t||i.isArray(t)||(s=i.measureText(e,a,o,s,t))})});var u=o.length/2;if(u>n.length){for(var l=0;l<u;l++)delete a[o[l]];o.splice(0,u)}return s},i.measureText=function(e,t,n,r,a){var i=t[a];return i||(i=t[a]=e.measureText(a).width,n.push(a)),i>r&&(r=i),r},i.numberOfLabelLines=function(e){var t=1;return i.each(e,function(e){i.isArray(e)&&e.length>t&&(t=e.length)}),t},i.color=r?function(e){/* global CanvasGradient */
return e instanceof CanvasGradient&&(e=a.global.defaultColor),r(e)}:function(e){return console.error("Color.js not found!"),e},i.getHoverColor=function(e){/* global CanvasPattern */
return e instanceof CanvasPattern?e:i.color(e).saturate(.5).darken(.1).rgbString()}}},/* 463 */
/***/
function(e,t,n){var r=n(464),a=function(){return new l};for(var i in r){
// export Raw versions
a[i+"Raw"]=function(e){
// accept array or plain args
return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),r[e](t)}}(i);var o=/(\w+)2(\w+)/.exec(i),s=o[1],u=o[2];
// export rgb2hsl and ["rgb"]["hsl"]
a[s]=a[s]||{},a[s][u]=a[i]=function(e){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var n=r[e](t);if("string"==typeof n||void 0===n)return n;// keyword
for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(i)}/* Converter does lazy conversion and caching */
var l=function(){this.convs={}};/* Either get the values for a space or
  set the values for a space, depending on args */
l.prototype.routeSpace=function(e,t){var n=t[0];
// color.rgb(10, 10, 10)
return void 0===n?this.getValues(e):("number"==typeof n&&(n=Array.prototype.slice.call(t)),this.setValues(e,n))},/* Set the values for a space, invalidating cache */
l.prototype.setValues=function(e,t){return this.space=e,this.convs={},this.convs[e]=t,this},/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
l.prototype.getValues=function(e){var t=this.convs[e];if(!t){var n=this.space,r=this.convs[n];t=a[n][e](r),this.convs[e]=t}return t},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(e){l.prototype[e]=function(t){return this.routeSpace(e,arguments)}}),e.exports=a},/* 464 */
/***/
function(e,t){function n(e){var t,n,r,a=e[0]/255,i=e[1]/255,o=e[2]/255,s=Math.min(a,i,o),u=Math.max(a,i,o),l=u-s;return u==s?t=0:a==u?t=(i-o)/l:i==u?t=2+(o-a)/l:o==u&&(t=4+(a-i)/l),t=Math.min(60*t,360),t<0&&(t+=360),r=(s+u)/2,n=u==s?0:r<=.5?l/(u+s):l/(2-u-s),[t,100*n,100*r]}function a(e){var t,n,r,a=e[0],i=e[1],o=e[2],s=Math.min(a,i,o),u=Math.max(a,i,o),l=u-s;return n=0==u?0:l/u*1e3/10,u==s?t=0:a==u?t=(i-o)/l:i==u?t=2+(o-a)/l:o==u&&(t=4+(a-i)/l),t=Math.min(60*t,360),t<0&&(t+=360),r=u/255*1e3/10,[t,n,r]}function i(e){var t=e[0],r=e[1],a=e[2],i=n(e)[0],o=1/255*Math.min(t,Math.min(r,a)),a=1-1/255*Math.max(t,Math.max(r,a));return[i,100*o,100*a]}function o(e){var t,n,r,a,i=e[0]/255,o=e[1]/255,s=e[2]/255;return a=Math.min(1-i,1-o,1-s),t=(1-i-a)/(1-a)||0,n=(1-o-a)/(1-a)||0,r=(1-s-a)/(1-a)||0,[100*t,100*n,100*r,100*a]}function s(e){return $[JSON.stringify(e)]}function u(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;
// assume sRGB
return t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]}function l(e){var t,n,r,a=u(e),i=a[0],o=a[1],s=a[2];return i/=95.047,o/=100,s/=108.883,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=116*o-16,n=500*(i-o),r=200*(o-s),[t,n,r]}function d(e){return F(l(e))}function c(e){var t,n,r,a,i,o=e[0]/360,s=e[1]/100,u=e[2]/100;if(0==s)return i=255*u,[i,i,i];n=u<.5?u*(1+s):u+s-u*s,t=2*u-n,a=[0,0,0];for(var l=0;l<3;l++)r=o+1/3*-(l-1),r<0&&r++,r>1&&r--,i=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,a[l]=255*i;return a}function f(e){var t,n,r=e[0],a=e[1]/100,i=e[2]/100;return 0===i?[0,0,0]:(i*=2,a*=i<=1?i:2-i,n=(i+a)/2,t=2*a/(i+a),[r,100*t,100*n])}function h(e){return i(c(e))}function m(e){return o(c(e))}function _(e){return s(c(e))}function p(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,a=Math.floor(t)%6,i=t-Math.floor(t),o=255*r*(1-n),s=255*r*(1-n*i),u=255*r*(1-n*(1-i)),r=255*r;switch(a){case 0:return[r,u,o];case 1:return[s,r,o];case 2:return[o,r,u];case 3:return[o,s,r];case 4:return[u,o,r];case 5:return[r,o,s]}}function y(e){var t,n,r=e[0],a=e[1]/100,i=e[2]/100;return n=(2-a)*i,t=a*i,t/=n<=1?n:2-n,t=t||0,n/=2,[r,100*t,100*n]}function v(e){return i(p(e))}function M(e){return o(p(e))}function L(e){return s(p(e))}
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function k(e){var t,n,a,i,o=e[0]/360,s=e[1]/100,u=e[2]/100,l=s+u;// linear interpolation
switch(
// wh + bl cant be > 1
l>1&&(s/=l,u/=l),t=Math.floor(6*o),n=1-u,a=6*o-t,0!=(1&t)&&(a=1-a),i=s+a*(n-s),t){default:case 6:case 0:r=n,g=i,b=s;break;case 1:r=i,g=n,b=s;break;case 2:r=s,g=n,b=i;break;case 3:r=s,g=i,b=n;break;case 4:r=i,g=s,b=n;break;case 5:r=n,g=s,b=i}return[255*r,255*g,255*b]}function Y(e){return n(k(e))}function w(e){return a(k(e))}function x(e){return o(k(e))}function D(e){return s(k(e))}function S(e){var t,n,r,a=e[0]/100,i=e[1]/100,o=e[2]/100,s=e[3]/100;return t=1-Math.min(1,a*(1-s)+s),n=1-Math.min(1,i*(1-s)+s),r=1-Math.min(1,o*(1-s)+s),[255*t,255*n,255*r]}function T(e){return n(S(e))}function E(e){return a(S(e))}function j(e){return i(S(e))}function O(e){return s(S(e))}function P(e){var t,n,r,a=e[0]/100,i=e[1]/100,o=e[2]/100;
// assume sRGB
return t=3.2406*a+-1.5372*i+-.4986*o,n=-.9689*a+1.8758*i+.0415*o,r=.0557*a+-.204*i+1.057*o,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,t=Math.min(Math.max(0,t),1),n=Math.min(Math.max(0,n),1),r=Math.min(Math.max(0,r),1),[255*t,255*n,255*r]}function H(e){var t,n,r,a=e[0],i=e[1],o=e[2];return a/=95.047,i/=100,o/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,t=116*i-16,n=500*(a-i),r=200*(i-o),[t,n,r]}function A(e){return F(H(e))}function C(e){var t,n,r,a,i=e[0],o=e[1],s=e[2];return i<=8?(n=100*i/903.3,a=n/100*7.787+16/116):(n=100*Math.pow((i+16)/116,3),a=Math.pow(n/100,1/3)),t=t/95.047<=.008856?t=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),r=r/108.883<=.008859?r=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[t,n,r]}function F(e){var t,n,r,a=e[0],i=e[1],o=e[2];return t=Math.atan2(o,i),n=360*t/2/Math.PI,n<0&&(n+=360),r=Math.sqrt(i*i+o*o),[a,r,n]}function N(e){return P(C(e))}function I(e){var t,n,r,a=e[0],i=e[1],o=e[2];return r=o/360*2*Math.PI,t=i*Math.cos(r),n=i*Math.sin(r),[a,t,n]}function W(e){return C(I(e))}function z(e){return N(I(e))}function R(e){return K[e]}function B(e){return n(R(e))}function V(e){return a(R(e))}function U(e){return i(R(e))}function J(e){return o(R(e))}function q(e){return l(R(e))}function G(e){return u(R(e))}/* MIT license */
e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:i,rgb2cmyk:o,rgb2keyword:s,rgb2xyz:u,rgb2lab:l,rgb2lch:d,hsl2rgb:c,hsl2hsv:f,hsl2hwb:h,hsl2cmyk:m,hsl2keyword:_,hsv2rgb:p,hsv2hsl:y,hsv2hwb:v,hsv2cmyk:M,hsv2keyword:L,hwb2rgb:k,hwb2hsl:Y,hwb2hsv:w,hwb2cmyk:x,hwb2keyword:D,cmyk2rgb:S,cmyk2hsl:T,cmyk2hsv:E,cmyk2hwb:j,cmyk2keyword:O,keyword2rgb:R,keyword2hsl:B,keyword2hsv:V,keyword2hwb:U,keyword2cmyk:J,keyword2lab:q,keyword2xyz:G,xyz2rgb:P,xyz2lab:H,xyz2lch:A,lab2xyz:C,lab2rgb:N,lab2lch:F,lch2lab:I,lch2xyz:W,lch2rgb:z};var K={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},$={};for(var Q in K)$[JSON.stringify(K[Q])]=Q},/* 465 */
/***/
function(e,t,n){function r(e){if(e){var t=/^#([a-fA-F0-9]{3})$/i,n=/^#([a-fA-F0-9]{6})$/i,r=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,i=/(\w+)/,o=[0,0,0],s=1,u=e.match(t);if(u){u=u[1];for(var l=0;l<o.length;l++)o[l]=parseInt(u[l]+u[l],16)}else if(u=e.match(n)){u=u[1];for(var l=0;l<o.length;l++)o[l]=parseInt(u.slice(2*l,2*l+2),16)}else if(u=e.match(r)){for(var l=0;l<o.length;l++)o[l]=parseInt(u[l+1]);s=parseFloat(u[4])}else if(u=e.match(a)){for(var l=0;l<o.length;l++)o[l]=Math.round(2.55*parseFloat(u[l+1]));s=parseFloat(u[4])}else if(u=e.match(i)){if("transparent"==u[1])return[0,0,0,0];if(!(o=M[u[1]]))return}for(var l=0;l<o.length;l++)o[l]=v(o[l],0,255);return s=s||0==s?v(s,0,1):1,o[3]=s,o}}function a(e){if(e){var t=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=e.match(t);if(n){var r=parseFloat(n[4]);return[v(parseInt(n[1]),0,360),v(parseFloat(n[2]),0,100),v(parseFloat(n[3]),0,100),v(isNaN(r)?1:r,0,1)]}}}function i(e){if(e){var t=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=e.match(t);if(n){var r=parseFloat(n[4]);return[v(parseInt(n[1]),0,360),v(parseFloat(n[2]),0,100),v(parseFloat(n[3]),0,100),v(isNaN(r)?1:r,0,1)]}}}function o(e){var t=r(e);return t&&t.slice(0,3)}function s(e){var t=a(e);return t&&t.slice(0,3)}function u(e){var t=r(e);return t?t[3]:(t=a(e))?t[3]:(t=i(e))?t[3]:void 0}
// generators
function l(e){return"#"+g(e[0])+g(e[1])+g(e[2])}function d(e,t){return t<1||e[3]&&e[3]<1?c(e,t):"rgb("+e[0]+", "+e[1]+", "+e[2]+")"}function c(e,t){return void 0===t&&(t=void 0!==e[3]?e[3]:1),"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+t+")"}function f(e,t){return t<1||e[3]&&e[3]<1?h(e,t):"rgb("+Math.round(e[0]/255*100)+"%, "+Math.round(e[1]/255*100)+"%, "+Math.round(e[2]/255*100)+"%)"}function h(e,t){return"rgba("+Math.round(e[0]/255*100)+"%, "+Math.round(e[1]/255*100)+"%, "+Math.round(e[2]/255*100)+"%, "+(t||e[3]||1)+")"}function m(e,t){return t<1||e[3]&&e[3]<1?_(e,t):"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)"}function _(e,t){return void 0===t&&(t=void 0!==e[3]?e[3]:1),"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+t+")"}
// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function p(e,t){return void 0===t&&(t=void 0!==e[3]?e[3]:1),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+(void 0!==t&&1!==t?", "+t:"")+")"}function y(e){return b[e.slice(0,3)]}
// helpers
function v(e,t,n){return Math.min(Math.max(t,e),n)}function g(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}/* MIT license */
var M=n(466);e.exports={getRgba:r,getHsla:a,getRgb:o,getHsl:s,getHwb:i,getAlpha:u,hexString:l,rgbString:d,rgbaString:c,percentString:f,percentaString:h,hslString:m,hslaString:_,hwbString:p,keyword:y};
//create a list of reverse color names
var b={};for(var L in M)b[M[L]]=L},/* 466 */
/***/
function(e,t,n){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},/* 467 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(34),i=n(5);r._set("global",{elements:{arc:{backgroundColor:r.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=a.extend({inLabelRange:function(e){var t=this._view;return!!t&&Math.pow(e-t.x,2)<Math.pow(t.radius+t.hoverRadius,2)},inRange:function(e,t){var n=this._view;if(n){for(var r=i.getAngleFromPoint(n,{x:e,y:t}),a=r.angle,o=r.distance,s=n.startAngle,u=n.endAngle;u<s;)u+=2*Math.PI;for(;a>u;)a-=2*Math.PI;for(;a<s;)a+=2*Math.PI;
// Check if within the range of the open/close angle
var l=a>=s&&a<=u,d=o>=n.innerRadius&&o<=n.outerRadius;return l&&d}return!1},getCenterPoint:function(){var e=this._view,t=(e.startAngle+e.endAngle)/2,n=(e.innerRadius+e.outerRadius)/2;return{x:e.x+Math.cos(t)*n,y:e.y+Math.sin(t)*n}},getArea:function(){var e=this._view;return Math.PI*((e.endAngle-e.startAngle)/(2*Math.PI))*(Math.pow(e.outerRadius,2)-Math.pow(e.innerRadius,2))},tooltipPosition:function(){var e=this._view,t=e.startAngle+(e.endAngle-e.startAngle)/2,n=(e.outerRadius-e.innerRadius)/2+e.innerRadius;return{x:e.x+Math.cos(t)*n,y:e.y+Math.sin(t)*n}},draw:function(){var e=this._chart.ctx,t=this._view,n=t.startAngle,r=t.endAngle;e.beginPath(),e.arc(t.x,t.y,t.outerRadius,n,r),e.arc(t.x,t.y,t.innerRadius,r,n,!0),e.closePath(),e.strokeStyle=t.borderColor,e.lineWidth=t.borderWidth,e.fillStyle=t.backgroundColor,e.fill(),e.lineJoin="bevel",t.borderWidth&&e.stroke()}})},/* 468 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(34),i=n(5),o=r.global;r._set("global",{elements:{line:{tension:.4,backgroundColor:o.defaultColor,borderWidth:3,borderColor:o.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=a.extend({draw:function(){var e,t,n,r,a=this,s=a._view,u=a._chart.ctx,l=s.spanGaps,d=a._children.slice(),c=o.elements.line,f=-1;for(
// If we are looping, adding the first point again
a._loop&&d.length&&d.push(d[0]),u.save(),
// Stroke Line Options
u.lineCap=s.borderCapStyle||c.borderCapStyle,
// IE 9 and 10 do not support line dash
u.setLineDash&&u.setLineDash(s.borderDash||c.borderDash),u.lineDashOffset=s.borderDashOffset||c.borderDashOffset,u.lineJoin=s.borderJoinStyle||c.borderJoinStyle,u.lineWidth=s.borderWidth||c.borderWidth,u.strokeStyle=s.borderColor||o.defaultColor,
// Stroke Line
u.beginPath(),f=-1,e=0;e<d.length;++e)t=d[e],n=i.previousItem(d,e),r=t._view,
// First point moves to it's starting position no matter what
0===e?r.skip||(u.moveTo(r.x,r.y),f=e):(n=-1===f?n:d[f],r.skip||(f!==e-1&&!l||-1===f?
// There was a gap and this is the first point after the gap
u.moveTo(r.x,r.y):
// Line to next point
i.canvas.lineTo(u,n._view,t._view),f=e));u.stroke(),u.restore()}})},/* 469 */
/***/
function(e,t,n){"use strict";function r(e){var t=this._view;return!!t&&Math.abs(e-t.x)<t.radius+t.hitRadius}function a(e){var t=this._view;return!!t&&Math.abs(e-t.y)<t.radius+t.hitRadius}var i=n(8),o=n(34),s=n(5),u=i.global.defaultColor;i._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:u,borderColor:u,borderWidth:1,
// Hover
hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=o.extend({inRange:function(e,t){var n=this._view;return!!n&&Math.pow(e-n.x,2)+Math.pow(t-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:r,inXRange:r,inYRange:a,getCenterPoint:function(){var e=this._view;return{x:e.x,y:e.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var e=this._view;return{x:e.x,y:e.y,padding:e.radius+e.borderWidth}},draw:function(e){var t=this._view,n=this._model,r=this._chart.ctx,a=t.pointStyle,o=t.radius,l=t.x,d=t.y,c=s.color,f=0;t.skip||(r.strokeStyle=t.borderColor||u,r.lineWidth=s.valueOrDefault(t.borderWidth,i.global.elements.point.borderWidth),r.fillStyle=t.backgroundColor||u,
// Cliping for Points.
// going out from inner charArea?
void 0!==e&&(n.x<e.left||1.01*e.right<n.x||n.y<e.top||1.01*e.bottom<n.y)&&(
// Point fade out
n.x<e.left?f=(l-n.x)/(e.left-n.x):1.01*e.right<n.x?f=(n.x-l)/(n.x-e.right):n.y<e.top?f=(d-n.y)/(e.top-n.y):1.01*e.bottom<n.y&&(f=(n.y-d)/(n.y-e.bottom)),f=Math.round(100*f)/100,r.strokeStyle=c(r.strokeStyle).alpha(f).rgbString(),r.fillStyle=c(r.fillStyle).alpha(f).rgbString()),s.canvas.drawPoint(r,a,o,l,d))}})},/* 470 */
/***/
function(e,t,n){"use strict";function r(e){return void 0!==e._view.width}/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function a(e){var t,n,a,i,o=e._view;if(r(e)){
// vertical
var s=o.width/2;t=o.x-s,n=o.x+s,a=Math.min(o.y,o.base),i=Math.max(o.y,o.base)}else{
// horizontal bar
var u=o.height/2;t=Math.min(o.x,o.base),n=Math.max(o.x,o.base),a=o.y-u,i=o.y+u}return{left:t,top:a,right:n,bottom:i}}var i=n(8),o=n(34);i._set("global",{elements:{rectangle:{backgroundColor:i.global.defaultColor,borderColor:i.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=o.extend({draw:function(){function e(e){return y[(g+e)%4]}var t,n,r,a,i,o,s,u=this._chart.ctx,l=this._view,d=l.borderWidth;
// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
if(l.horizontal?(
// horizontal bar
t=l.base,n=l.x,r=l.y-l.height/2,a=l.y+l.height/2,i=n>t?1:-1,o=1,s=l.borderSkipped||"left"):(
// bar
t=l.x-l.width/2,n=l.x+l.width/2,r=l.y,a=l.base,i=1,o=a>r?1:-1,s=l.borderSkipped||"bottom"),d){
// borderWidth shold be less than bar width and bar height.
var c=Math.min(Math.abs(t-n),Math.abs(r-a));d=d>c?c:d;var f=d/2,h=t+("left"!==s?f*i:0),m=n+("right"!==s?-f*i:0),_=r+("top"!==s?f*o:0),p=a+("bottom"!==s?-f*o:0);
// not become a vertical line?
h!==m&&(r=_,a=p),
// not become a horizontal line?
_!==p&&(t=h,n=m)}u.beginPath(),u.fillStyle=l.backgroundColor,u.strokeStyle=l.borderColor,u.lineWidth=d;
// Corner points, from bottom-left to bottom-right clockwise
// | 1 2 |
// | 0 3 |
var y=[[t,a],[t,r],[n,r],[n,a]],v=["bottom","left","top","right"],g=v.indexOf(s,0);-1===g&&(g=0);
// Draw rectangle from 'startCorner'
var M=e(0);u.moveTo(M[0],M[1]);for(var b=1;b<4;b++)M=e(b),u.lineTo(M[0],M[1]);u.fill(),d&&u.stroke()},height:function(){var e=this._view;return e.base-e.y},inRange:function(e,t){var n=!1;if(this._view){var r=a(this);n=e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom}return n},inLabelRange:function(e,t){var n=this;if(!n._view)return!1;var i=a(n);return r(n)?e>=i.left&&e<=i.right:t>=i.top&&t<=i.bottom},inXRange:function(e){var t=a(this);return e>=t.left&&e<=t.right},inYRange:function(e){var t=a(this);return e>=t.top&&e<=t.bottom},getCenterPoint:function(){var e,t,n=this._view;return r(this)?(e=n.x,t=(n.y+n.base)/2):(e=(n.x+n.base)/2,t=n.y),{x:e,y:t}},getArea:function(){var e=this._view;return e.width*Math.abs(e.y-e.base)},tooltipPosition:function(){var e=this._view;return{x:e.x,y:e.y}}})},/* 471 */
/***/
function(e,t){/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */
e.exports={acquireContext:function(e){
// Support for any object associated to a canvas (including a context2d)
return e&&e.canvas&&(e=e.canvas),e&&e.getContext("2d")||null}}},/* 472 */
/***/
function(e,t,n){"use strict";/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {Number} Size in pixels or undefined if unknown.
 */
function r(e,t){var n=p.getStyle(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?Number(r[1]):void 0}/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function a(e,t){var n=e.style,a=e.getAttribute("height"),i=e.getAttribute("width");if(
// Chart.js modifies some canvas values that we want to restore on destroy
e[y]={initial:{height:a,width:i,style:{display:n.display,height:n.height,width:n.width}}},
// Force canvas to display as block to avoid extra space caused by inline
// elements, which would interfere with the responsive resize process.
// https://github.com/chartjs/Chart.js/issues/2538
n.display=n.display||"block",null===i||""===i){var o=r(e,"width");void 0!==o&&(e.width=o)}if(null===a||""===a)if(""===e.style.height)
// If no explicit render height and style height, let's apply the aspect ratio,
// which one can be specified by the user but also by charts as default option
// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
e.height=e.width/(t.options.aspectRatio||2);else{var s=r(e,"height");void 0!==o&&(e.height=s)}return e}function i(e,t,n){e.addEventListener(t,n,Y)}function o(e,t,n){e.removeEventListener(t,n,Y)}function s(e,t,n,r,a){return{type:e,chart:t,native:a||null,x:void 0!==n?n:null,y:void 0!==r?r:null}}function u(e,t){var n=L[e.type]||e.type,r=p.getRelativePosition(e,t);return s(n,t,r.x,r.y,e)}function l(e,t){var n=!1,r=[];return function(){r=Array.prototype.slice.call(arguments),t=t||this,n||(n=!0,p.requestAnimFrame.call(window,function(){n=!1,e.apply(t,r)}))}}
// Implementation based on https://github.com/marcj/css-element-queries
function d(e){var t=document.createElement("div"),n=v+"size-monitor",r="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";t.style.cssText=r,t.className=n,t.innerHTML='<div class="'+n+'-expand" style="'+r+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+n+'-shrink" style="'+r+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var a=t.childNodes[0],o=t.childNodes[1];t._reset=function(){a.scrollLeft=1e6,a.scrollTop=1e6,o.scrollLeft=1e6,o.scrollTop=1e6};var s=function(){t._reset(),e()};return i(a,"scroll",s.bind(a,"expand")),i(o,"scroll",s.bind(o,"shrink")),t}
// https://davidwalsh.name/detect-node-insertion
function c(e,t){var n=e[y]||(e[y]={}),r=n.renderProxy=function(e){e.animationName===M&&t()};p.each(b,function(t){i(e,t,r)}),
// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
// is removed then added back immediately (same animation frame?). Accessing the
// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
// https://github.com/chartjs/Chart.js/issues/4737
n.reflow=!!e.offsetParent,e.classList.add(g)}function f(e){var t=e[y]||{},n=t.renderProxy;n&&(p.each(b,function(t){o(e,t,n)}),delete t.renderProxy),e.classList.remove(g)}function h(e,t,n){var r=e[y]||(e[y]={}),a=r.resizer=d(l(function(){if(r.resizer)return t(s("resize",n))}));
// The resizer needs to be attached to the node parent, so we first need to be
// sure that `node` is attached to the DOM before injecting the resizer element.
c(e,function(){if(r.resizer){var t=e.parentNode;t&&t!==a.parentNode&&t.insertBefore(a,t.firstChild),
// The container size might have changed, let's reset the resizer state.
a._reset()}})}function m(e){var t=e[y]||{},n=t.resizer;delete t.resizer,f(e),n&&n.parentNode&&n.parentNode.removeChild(n)}function _(e,t){
// http://stackoverflow.com/q/3922139
var n=e._style||document.createElement("style");e._style||(e._style=n,t="/* Chart.js */\n"+t,n.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(n)),n.appendChild(document.createTextNode(t))}/**
 * Chart.Platform implementation for targeting a web browser
 */
var p=n(5),y="$chartjs",v="chartjs-",g=v+"render-monitor",M=v+"render-animation",b=["animationstart","webkitAnimationStart"],L={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},k=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("e",null,t)}catch(e){}return e}(),Y=!!k&&{passive:!0};e.exports={/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var e="from{opacity:0.99}to{opacity:1}";_(this,
// DOM rendering detection
// https://davidwalsh.name/detect-node-insertion
"@-webkit-keyframes "+M+"{"+e+"}@keyframes "+M+"{"+e+"}."+g+"{-webkit-animation:"+M+" 0.001s;animation:"+M+" 0.001s;}")},acquireContext:function(e,t){"string"==typeof e?e=document.getElementById(e):e.length&&(
// Support for array based queries (such as jQuery)
e=e[0]),e&&e.canvas&&(
// Support for any object associated to a canvas (including a context2d)
e=e.canvas);
// To prevent canvas fingerprinting, some add-ons undefine the getContext
// method, for example: https://github.com/kkapsner/CanvasBlocker
// https://github.com/chartjs/Chart.js/issues/2807
var n=e&&e.getContext&&e.getContext("2d");
// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
// inside an iframe or when running in a protected environment. We could guess the
// types from their toString() value but let's keep things flexible and assume it's
// a sufficient condition if the item has a context2D which has item as `canvas`.
// https://github.com/chartjs/Chart.js/issues/3887
// https://github.com/chartjs/Chart.js/issues/4102
// https://github.com/chartjs/Chart.js/issues/4152
// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
// inside an iframe or when running in a protected environment. We could guess the
// types from their toString() value but let's keep things flexible and assume it's
// a sufficient condition if the item has a context2D which has item as `canvas`.
// https://github.com/chartjs/Chart.js/issues/3887
// https://github.com/chartjs/Chart.js/issues/4102
// https://github.com/chartjs/Chart.js/issues/4152
return n&&n.canvas===e?(a(e,t),n):null},releaseContext:function(e){var t=e.canvas;if(t[y]){var n=t[y].initial;["height","width"].forEach(function(e){var r=n[e];p.isNullOrUndef(r)?t.removeAttribute(e):t.setAttribute(e,r)}),p.each(n.style||{},function(e,n){t.style[n]=e}),
// The canvas render size might have been changed (and thus the state stack discarded),
// we can't use save() and restore() to restore the initial state. So make sure that at
// least the canvas context is reset to the default state by setting the canvas width.
// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
t.width=t.width,delete t[y]}},addEventListener:function(e,t,n){var r=e.canvas;if("resize"===t)
// Note: the resize event is not supported on all browsers.
return void h(r,n,e);var a=n[y]||(n[y]={});i(r,t,(a.proxies||(a.proxies={}))[e.id+"_"+t]=function(t){n(u(t,e))})},removeEventListener:function(e,t,n){var r=e.canvas;if("resize"===t)
// Note: the resize event is not supported on all browsers.
return void m(r);var a=n[y]||{},i=a.proxies||{},s=i[e.id+"_"+t];s&&o(r,t,s)}},
// DEPRECATIONS
/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
p.addEvent=i,/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
p.removeEvent=o},/* 473 */
/***/
function(e,t,n){"use strict";/* global window: false */
var r=n(8),a=n(34),i=n(5);r._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:i.noop,onComplete:i.noop}}),e.exports=function(e){e.Animation=a.extend({chart:null,// the animation associated chart instance
currentStep:0,// the current animation step
numSteps:60,// default number of steps
easing:"",// the easing to use for this animation
render:null,// render function used by the animation service
onAnimationProgress:null,// user specified callback to fire on each step of the animation
onAnimationComplete:null}),e.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,/**
		 * @param {Chart} chart - The chart to animate.
		 * @param {Chart.Animation} animation - The animation that we will animate.
		 * @param {Number} duration - The animation duration in ms.
		 * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		 */
addAnimation:function(e,t,n,r){var a,i,o=this.animations;for(t.chart=e,r||(e.animating=!0),a=0,i=o.length;a<i;++a)if(o[a].chart===e)return void(o[a]=t);o.push(t),
// If there are no animations queued, manually kickstart a digest, for lack of a better word
1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(e){var t=i.findIndex(this.animations,function(t){return t.chart===e});-1!==t&&(this.animations.splice(t,1),e.animating=!1)},requestAnimationFrame:function(){var e=this;null===e.request&&(
// Skip animation frame requests until the active one is executed.
// This can happen when processing mouse events, e.g. 'mousemove'
// and 'mouseout' events will trigger multiple renders.
e.request=i.requestAnimFrame.call(window,function(){e.request=null,e.startDigest()}))},/**
		 * @private
		 */
startDigest:function(){var e=this,t=Date.now(),n=0;e.dropFrames>1&&(n=Math.floor(e.dropFrames),e.dropFrames=e.dropFrames%1),e.advance(1+n);var r=Date.now();e.dropFrames+=(r-t)/e.frameDuration,
// Do we have more stuff to animate?
e.animations.length>0&&e.requestAnimationFrame()},/**
		 * @private
		 */
advance:function(e){for(var t,n,r=this.animations,a=0;a<r.length;)t=r[a],n=t.chart,t.currentStep=(t.currentStep||0)+e,t.currentStep=Math.min(t.currentStep,t.numSteps),i.callback(t.render,[n,t],n),i.callback(t.onAnimationProgress,[t],n),t.currentStep>=t.numSteps?(i.callback(t.onAnimationComplete,[t],n),n.animating=!1,r.splice(a,1)):++a}},/**
	 * Provided for backward compatibility, use Chart.Animation instead
	 * @prop Chart.Animation#animationObject
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
Object.defineProperty(e.Animation.prototype,"animationObject",{get:function(){return this}}),/**
	 * Provided for backward compatibility, use Chart.Animation#chart instead
	 * @prop Chart.Animation#chartInstance
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
Object.defineProperty(e.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(e){this.chart=e}})}},/* 474 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(5),i=n(201),o=n(86),s=n(202),u=n(203);e.exports=function(e){/**
	 * Initializes the given config with global and chart default values.
	 */
function t(e){e=e||{};
// Do NOT use configMerge() for the data object because this method merges arrays
// and so would change references to labels and datasets, preventing data updates.
var t=e.data=e.data||{};return t.datasets=t.datasets||[],t.labels=t.labels||[],e.options=a.configMerge(r.global,r[e.type],e.options||{}),e}/**
	 * Updates the config of the chart
	 * @param chart {Chart} chart to update the options for
	 */
function n(t){var n=t.options;a.each(t.scales,function(e){o.removeBox(t,e)}),n=a.configMerge(e.defaults.global,e.defaults[t.config.type],n),t.options=t.config.options=n,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),
// Tooltip
t.tooltip._options=n.tooltips,t.tooltip.initialize()}function l(e){return"top"===e||"bottom"===e}
// Create a dictionary of chart types, to allow for extension of existing types
e.types={},
// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
// Destroy method on the chart will remove the instance of the chart from this reference.
e.instances={},
// Controllers available for dataset visualization eg. bar, line, slice, etc.
e.controllers={},a.extend(e.prototype,/** @lends Chart */{/**
		 * @private
		 */
construct:function(n,r){var i=this;r=t(r);var o=s.acquireContext(n,r),u=o&&o.canvas,l=u&&u.height,d=u&&u.width;if(i.id=a.uid(),i.ctx=o,i.canvas=u,i.config=r,i.width=d,i.height=l,i.aspectRatio=l?d/l:null,i.options=r.options,i._bufferedRender=!1,/**
			 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
			 * the "instance" still need to be defined since it might be called from plugins.
			 * @prop Chart#chart
			 * @deprecated since version 2.6.0
			 * @todo remove at version 3
			 * @private
			 */
i.chart=i,i.controller=i,// chart.chart.controller #inception
// Add the chart instance to the global namespace
e.instances[i.id]=i,
// Define alias to the config data: `chart.data === chart.config.data`
Object.defineProperty(i,"data",{get:function(){return i.config.data},set:function(e){i.config.data=e}}),!o||!u)
// The given item is not a compatible context2d element, let's return before finalizing
// the chart initialization but after setting basic chart / controller properties that
// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
// https://github.com/chartjs/Chart.js/issues/2807
return void console.error("Failed to create chart: can't acquire context from the given item");i.initialize(),i.update()},/**
		 * @private
		 */
initialize:function(){var e=this;
// Before init plugin notification
// Initial resize before chart draws (must be silent to preserve initial animations).
// Make sure scales have IDs and are built before we build any controllers.
// After init plugin notification
return u.notify(e,"beforeInit"),a.retinaScale(e,e.options.devicePixelRatio),e.bindEvents(),e.options.responsive&&e.resize(!0),e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.initToolTip(),u.notify(e,"afterInit"),e},clear:function(){return a.canvas.clear(this),this},stop:function(){
// Stops any current animation loop occurring
return e.animationService.cancelAnimation(this),this},resize:function(e){var t=this,n=t.options,r=t.canvas,i=n.maintainAspectRatio&&t.aspectRatio||null,o=Math.max(0,Math.floor(a.getMaximumWidth(r))),s=Math.max(0,Math.floor(i?o/i:a.getMaximumHeight(r)));if((t.width!==o||t.height!==s)&&(r.width=t.width=o,r.height=t.height=s,r.style.width=o+"px",r.style.height=s+"px",a.retinaScale(t,n.devicePixelRatio),!e)){
// Notify any plugins about the resize
var l={width:o,height:s};u.notify(t,"resize",[l]),
// Notify of resize
t.options.onResize&&t.options.onResize(t,l),t.stop(),t.update(t.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var e=this.options,t=e.scales||{},n=e.scale;a.each(t.xAxes,function(e,t){e.id=e.id||"x-axis-"+t}),a.each(t.yAxes,function(e,t){e.id=e.id||"y-axis-"+t}),n&&(n.id=n.id||"scale")},/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
buildOrUpdateScales:function(){var t=this,n=t.options,r=t.scales||{},i=[],o=Object.keys(r).reduce(function(e,t){return e[t]=!1,e},{});n.scales&&(i=i.concat((n.scales.xAxes||[]).map(function(e){return{options:e,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(e){return{options:e,dtype:"linear",dposition:"left"}}))),n.scale&&i.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),a.each(i,function(n){var i=n.options,s=i.id,u=a.valueOrDefault(i.type,n.dtype);l(i.position)!==l(n.dposition)&&(i.position=n.dposition),o[s]=!0;var d=null;if(s in r&&r[s].type===u)d=r[s],d.options=i,d.ctx=t.ctx,d.chart=t;else{var c=e.scaleService.getScaleConstructor(u);if(!c)return;d=new c({id:s,type:u,options:i,ctx:t.ctx,chart:t}),r[d.id]=d}d.mergeTicksOptions(),
// TODO(SB): I think we should be able to remove this custom case (options.scale)
// and consider it as a regular scale part of the "scales"" map only! This would
// make the logic easier and remove some useless? custom code.
n.isDefault&&(t.scale=d)}),
// clear up discarded scales
a.each(o,function(e,t){e||delete r[t]}),t.scales=r,e.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t=this,n=[],r=[];return a.each(t.data.datasets,function(a,i){var o=t.getDatasetMeta(i),s=a.type||t.config.type;if(o.type&&o.type!==s&&(t.destroyDatasetMeta(i),o=t.getDatasetMeta(i)),o.type=s,n.push(o.type),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{var u=e.controllers[o.type];if(void 0===u)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new u(t,i),r.push(o.controller)}},t),r},/**
		 * Reset the elements of all datasets
		 * @private
		 */
resetElements:function(){var e=this;a.each(e.data.datasets,function(t,n){e.getDatasetMeta(n).controller.reset()},e)},/**
		* Resets the chart back to it's state before the initial animation
		*/
reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e){var t=this;if(e&&"object"==typeof e||(
// backwards compatibility
e={duration:e,lazy:arguments[1]}),n(t),
// plugins options references might have change, let's invalidate the cache
// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
u._invalidate(t),!1!==u.notify(t,"beforeUpdate")){
// In case the entire data object changed
t.tooltip._data=t.data;
// Make sure dataset controllers are updated and new controllers are reset
var r=t.buildOrUpdateControllers();
// Make sure all dataset controllers have correct meta data counts
a.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.buildOrUpdateElements()},t),t.updateLayout(),
// Can only reset the new controllers after the scales have been updated
t.options.animation&&t.options.animation.duration&&a.each(r,function(e){e.reset()}),t.updateDatasets(),
// Need to reset tooltip in case it is displayed with elements that are removed
// after update.
t.tooltip.initialize(),
// Last active contains items that were previously in the tooltip.
// When we reset the tooltip, we need to clear it
t.lastActive=[],
// Do this before render so that any plugins that need final scale updates can use it
u.notify(t,"afterUpdate"),t._bufferedRender?t._bufferedRequest={duration:e.duration,easing:e.easing,lazy:e.lazy}:t.render(e)}},/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */
updateLayout:function(){var e=this;!1!==u.notify(e,"beforeLayout")&&(o.update(this,this.width,this.height),/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 * @private
			 */
u.notify(e,"afterScaleUpdate"),u.notify(e,"afterLayout"))},/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */
updateDatasets:function(){var e=this;if(!1!==u.notify(e,"beforeDatasetsUpdate")){for(var t=0,n=e.data.datasets.length;t<n;++t)e.updateDataset(t);u.notify(e,"afterDatasetsUpdate")}},/**
		 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		 * @private
		 */
updateDataset:function(e){var t=this,n=t.getDatasetMeta(e),r={meta:n,index:e};!1!==u.notify(t,"beforeDatasetUpdate",[r])&&(n.controller.update(),u.notify(t,"afterDatasetUpdate",[r]))},render:function(t){var n=this;t&&"object"==typeof t||(
// backwards compatibility
t={duration:t,lazy:arguments[1]});var r=t.duration,i=t.lazy;if(!1!==u.notify(n,"beforeRender")){var o=n.options.animation,s=function(e){u.notify(n,"afterRender"),a.callback(o&&o.onComplete,[e],n)};if(o&&(void 0!==r&&0!==r||void 0===r&&0!==o.duration)){var l=new e.Animation({numSteps:(r||o.duration)/16.66,// 60 fps
easing:t.easing||o.easing,render:function(e,t){var n=a.easing.effects[t.easing],r=t.currentStep,i=r/t.numSteps;e.draw(n(i),i,r)},onAnimationProgress:o.onProgress,onAnimationComplete:s});e.animationService.addAnimation(n,l,r,i)}else n.draw(),
// See https://github.com/chartjs/Chart.js/issues/3781
s(new e.Animation({numSteps:0,chart:n}));return n}},draw:function(e){var t=this;t.clear(),a.isNullOrUndef(e)&&(e=1),t.transition(e),!1!==u.notify(t,"beforeDraw",[e])&&(
// Draw all the scales
a.each(t.boxes,function(e){e.draw(t.chartArea)},t),t.scale&&t.scale.draw(),t.drawDatasets(e),t._drawTooltip(e),u.notify(t,"afterDraw",[e]))},/**
		 * @private
		 */
transition:function(e){for(var t=this,n=0,r=(t.data.datasets||[]).length;n<r;++n)t.isDatasetVisible(n)&&t.getDatasetMeta(n).controller.transition(e);t.tooltip.transition(e)},/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */
drawDatasets:function(e){var t=this;if(!1!==u.notify(t,"beforeDatasetsDraw",[e])){
// Draw datasets reversed to support proper line stacking
for(var n=(t.data.datasets||[]).length-1;n>=0;--n)t.isDatasetVisible(n)&&t.drawDataset(n,e);u.notify(t,"afterDatasetsDraw",[e])}},/**
		 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
		 * @private
		 */
drawDataset:function(e,t){var n=this,r=n.getDatasetMeta(e),a={meta:r,index:e,easingValue:t};!1!==u.notify(n,"beforeDatasetDraw",[a])&&(r.controller.draw(t),u.notify(n,"afterDatasetDraw",[a]))},/**
		 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
		 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
		 * @private
		 */
_drawTooltip:function(e){var t=this,n=t.tooltip,r={tooltip:n,easingValue:e};!1!==u.notify(t,"beforeTooltipDraw",[r])&&(n.draw(),u.notify(t,"afterTooltipDraw",[r]))},
// Get the single element that was clicked on
// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
getElementAtEvent:function(e){return i.modes.single(this,e)},getElementsAtEvent:function(e){return i.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return i.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,t,n){var r=i.modes[t];return"function"==typeof r?r(this,e,n):[]},getDatasetAtEvent:function(e){return i.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(e){var t=this,n=t.data.datasets[e];n._meta||(n._meta={});var r=n._meta[t.id];return r||(r=n._meta[t.id]={type:null,data:[],dataset:null,controller:null,hidden:null,// See isDatasetVisible() comment
xAxisID:null,yAxisID:null}),r},getVisibleDatasetCount:function(){for(var e=0,t=0,n=this.data.datasets.length;t<n;++t)this.isDatasetVisible(t)&&e++;return e},isDatasetVisible:function(e){var t=this.getDatasetMeta(e);
// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
return"boolean"==typeof t.hidden?!t.hidden:!this.data.datasets[e].hidden},generateLegend:function(){return this.options.legendCallback(this)},/**
		 * @private
		 */
destroyDatasetMeta:function(e){var t=this.id,n=this.data.datasets[e],r=n._meta&&n._meta[t];r&&(r.controller.destroy(),delete n._meta[t])},destroy:function(){var t,n,r=this,i=r.canvas;
// dataset controllers need to cleanup associated data
for(r.stop(),t=0,n=r.data.datasets.length;t<n;++t)r.destroyDatasetMeta(t);i&&(r.unbindEvents(),a.canvas.clear(r),s.releaseContext(r.ctx),r.canvas=null,r.ctx=null),u.notify(r,"destroy"),delete e.instances[r.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new e.Tooltip({_chart:t,_chartInstance:t,// deprecated, backward compatibility
_data:t.data,_options:t.options.tooltips},t)},/**
		 * @private
		 */
bindEvents:function(){var e=this,t=e._listeners={},n=function(){e.eventHandler.apply(e,arguments)};a.each(e.options.events,function(r){s.addEventListener(e,r,n),t[r]=n}),
// Elements used to detect size change should not be injected for non responsive charts.
// See https://github.com/chartjs/Chart.js/issues/2210
e.options.responsive&&(n=function(){e.resize()},s.addEventListener(e,"resize",n),t.resize=n)},/**
		 * @private
		 */
unbindEvents:function(){var e=this,t=e._listeners;t&&(delete e._listeners,a.each(t,function(t,n){s.removeEventListener(e,n,t)}))},updateHoverStyle:function(e,t,n){var r,a,i,o=n?"setHoverStyle":"removeHoverStyle";for(a=0,i=e.length;a<i;++a)(r=e[a])&&this.getDatasetMeta(r._datasetIndex).controller[o](r)},/**
		 * @private
		 */
eventHandler:function(e){var t=this,n=t.tooltip;if(!1!==u.notify(t,"beforeEvent",[e])){
// Buffer any update calls so that renders do not occur
t._bufferedRender=!0,t._bufferedRequest=null;var r=t.handleEvent(e);
// for smooth tooltip animations issue #4989
// the tooltip should be the source of change
// Animation check workaround:
// tooltip._start will be null when tooltip isn't animating
n&&(r=n._start?n.handleEvent(e):r|n.handleEvent(e)),u.notify(t,"afterEvent",[e]);var a=t._bufferedRequest;
// If we have an update that was triggered, we need to do a normal render
// If entering, leaving, or changing elements, animate the change via pivot
// We only need to render at this point. Updating will cause scales to be
// recomputed generating flicker & using more memory than necessary.
return a?t.render(a):r&&!t.animating&&(t.stop(),t.render(t.options.hover.animationDuration,!0)),t._bufferedRender=!1,t._bufferedRequest=null,t}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */
handleEvent:function(e){var t=this,n=t.options||{},r=n.hover,i=!1;
// Find Active Elements for hover and tooltips
// Invoke onHover hook
// Need to call with native event here to not break backwards compatibility
// Use e.native here for backwards compatibility
// Remove styling for last active (even if it may still be active)
// Built in hover styling
// Remember Last Actives
return t.lastActive=t.lastActive||[],"mouseout"===e.type?t.active=[]:t.active=t.getElementsAtEventForMode(e,r.mode,r),a.callback(n.onHover||n.hover.onHover,[e.native,t.active],t),"mouseup"!==e.type&&"click"!==e.type||n.onClick&&n.onClick.call(t,e.native,t.active),t.lastActive.length&&t.updateHoverStyle(t.lastActive,r.mode,!1),t.active.length&&r.mode&&t.updateHoverStyle(t.active,r.mode,!0),i=!a.arrayEquals(t.active,t.lastActive),t.lastActive=t.active,i}}),/**
	 * Provided for backward compatibility, use Chart instead.
	 * @class Chart.Controller
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 * @private
	 */
e.Controller=e}},/* 475 */
/***/
function(e,t,n){"use strict";var r=n(5);e.exports=function(e){/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */
function t(e,t){if(e._chartjs)return void e._chartjs.listeners.push(t);Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),a.forEach(function(t){var n="onData"+t.charAt(0).toUpperCase()+t.slice(1),a=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:function(){var t=Array.prototype.slice.call(arguments),i=a.apply(this,t);return r.each(e._chartjs.listeners,function(e){"function"==typeof e[n]&&e[n].apply(e,t)}),i}})})}/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */
function n(e,t){var n=e._chartjs;if(n){var r=n.listeners,i=r.indexOf(t);-1!==i&&r.splice(i,1),r.length>0||(a.forEach(function(t){delete e[t]}),delete e._chartjs)}}var a=["push","pop","shift","splice","unshift"];
// Base class for all dataset controllers (line, bar, etc)
e.DatasetController=function(e,t){this.initialize(e,t)},r.extend(e.DatasetController.prototype,{/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
datasetElementType:null,/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
dataElementType:null,initialize:function(e,t){var n=this;n.chart=e,n.index=t,n.linkScales(),n.addElements()},updateIndex:function(e){this.index=e},linkScales:function(){var e=this,t=e.getMeta(),n=e.getDataset();null!==t.xAxisID&&t.xAxisID in e.chart.scales||(t.xAxisID=n.xAxisID||e.chart.options.scales.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in e.chart.scales||(t.yAxisID=n.yAxisID||e.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(e){return this.chart.scales[e]},reset:function(){this.update(!0)},/**
		 * @private
		 */
destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var e=this,t=e.datasetElementType;return t&&new t({_chart:e.chart,_datasetIndex:e.index})},createMetaData:function(e){var t=this,n=t.dataElementType;return n&&new n({_chart:t.chart,_datasetIndex:t.index,_index:e})},addElements:function(){var e,t,n=this,r=n.getMeta(),a=n.getDataset().data||[],i=r.data;for(e=0,t=a.length;e<t;++e)i[e]=i[e]||n.createMetaData(e);r.dataset=r.dataset||n.createMetaDataset()},addElementAndReset:function(e){var t=this.createMetaData(e);this.getMeta().data.splice(e,0,t),this.updateElement(t,e,!0)},buildOrUpdateElements:function(){var e=this,r=e.getDataset(),a=r.data||(r.data=[]);
// In order to correctly handle data addition/deletion animation (an thus simulate
// real-time charts), we need to monitor these data modifications and synchronize
// the internal meta data accordingly.
e._data!==a&&(e._data&&
// This case happens when the user replaced the data array instance.
n(e._data,e),t(a,e),e._data=a),
// Re-sync meta data in case the user replaced the data array or if we missed
// any updates and so make sure that we handle number of datapoints changing.
e.resyncElements()},update:r.noop,transition:function(e){for(var t=this.getMeta(),n=t.data||[],r=n.length,a=0;a<r;++a)n[a].transition(e);t.dataset&&t.dataset.transition(e)},draw:function(){var e=this.getMeta(),t=e.data||[],n=t.length,r=0;for(e.dataset&&e.dataset.draw();r<n;++r)t[r].draw()},removeHoverStyle:function(e,t){var n=this.chart.data.datasets[e._datasetIndex],a=e._index,i=e.custom||{},o=r.valueAtIndexOrDefault,s=e._model;s.backgroundColor=i.backgroundColor?i.backgroundColor:o(n.backgroundColor,a,t.backgroundColor),s.borderColor=i.borderColor?i.borderColor:o(n.borderColor,a,t.borderColor),s.borderWidth=i.borderWidth?i.borderWidth:o(n.borderWidth,a,t.borderWidth)},setHoverStyle:function(e){var t=this.chart.data.datasets[e._datasetIndex],n=e._index,a=e.custom||{},i=r.valueAtIndexOrDefault,o=r.getHoverColor,s=e._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:i(t.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:i(t.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:i(t.hoverBorderWidth,n,s.borderWidth)},/**
		 * @private
		 */
resyncElements:function(){var e=this,t=e.getMeta(),n=e.getDataset().data,r=t.data.length,a=n.length;a<r?t.data.splice(a,r-a):a>r&&e.insertElements(r,a-r)},/**
		 * @private
		 */
insertElements:function(e,t){for(var n=0;n<t;++n)this.addElementAndReset(e+n)},/**
		 * @private
		 */
onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},/**
		 * @private
		 */
onDataPop:function(){this.getMeta().data.pop()},/**
		 * @private
		 */
onDataShift:function(){this.getMeta().data.shift()},/**
		 * @private
		 */
onDataSplice:function(e,t){this.getMeta().data.splice(e,t),this.insertElements(e,arguments.length-2)},/**
		 * @private
		 */
onDataUnshift:function(){this.insertElements(0,arguments.length)}}),e.DatasetController.extend=r.inherits}},/* 476 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(5),i=n(86);e.exports=function(e){e.scaleService={
// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
// use the new chart options to grab the correct scale
constructors:{},
// Use a registration function so that we can move to an ES6 map when we no longer need to support
// old browsers
// Scale config defaults
defaults:{},registerScaleType:function(e,t,n){this.constructors[e]=t,this.defaults[e]=a.clone(n)},getScaleConstructor:function(e){return this.constructors.hasOwnProperty(e)?this.constructors[e]:void 0},getScaleDefaults:function(e){
// Return the scale defaults merged with the global settings so that we always use the latest ones
return this.defaults.hasOwnProperty(e)?a.merge({},[r.scale,this.defaults[e]]):{}},updateScaleDefaults:function(e,t){var n=this;n.defaults.hasOwnProperty(e)&&(n.defaults[e]=a.extend(n.defaults[e],t))},addScalesToLayout:function(e){
// Adds each scale to the chart.boxes array to be sized accordingly
a.each(e.scales,function(t){
// Set ILayoutItem parameters for backwards compatibility
t.fullWidth=t.options.fullWidth,t.position=t.options.position,t.weight=t.options.weight,i.addBox(e,t)})}}}},/* 477 */
/***/
function(e,t,n){"use strict";function r(e){var t,n,r=[];for(t=0,n=e.length;t<n;++t)r.push(e[t].label);return r}function a(e,t,n){var r=e.getPixelForTick(t);return n&&(r-=0===t?(e.getPixelForTick(1)-r)/2:(r-e.getPixelForTick(t-1))/2),r}var i=n(8),o=n(34),s=n(5),u=n(87);i._set("scale",{display:!0,position:"left",offset:!1,
// grid line settings
gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},
// scale label
scaleLabel:{
// display property
display:!1,
// actual label
labelString:"",
// line height
lineHeight:1.2,
// top/bottom padding
padding:{top:4,bottom:4}},
// label settings
ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,
// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
callback:u.formatters.values,minor:{},major:{}}}),e.exports=function(e){function t(e,t,n){return s.isArray(t)?s.longestText(e,n,t):e.measureText(t).width}function n(e){var t=s.valueOrDefault,n=i.global,r=t(e.fontSize,n.defaultFontSize),a=t(e.fontStyle,n.defaultFontStyle),o=t(e.fontFamily,n.defaultFontFamily);return{size:r,style:a,family:o,font:s.fontString(r,a,o)}}function u(e){return s.options.toLineHeight(s.valueOrDefault(e.lineHeight,1.2),s.valueOrDefault(e.fontSize,i.global.defaultFontSize))}e.Scale=o.extend({/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */
getPadding:function(){var e=this;return{left:e.paddingLeft||0,top:e.paddingTop||0,right:e.paddingRight||0,bottom:e.paddingBottom||0}},/**
		 * Returns the scale tick objects ({label, major})
		 * @since 2.7
		 */
getTicks:function(){return this._ticks},
// These methods are ordered by lifecyle. Utilities then follow.
// Any function defined here is inherited by all scale types.
// Any function can be extended by the scale type
mergeTicksOptions:function(){var e=this.options.ticks;!1===e.minor&&(e.minor={display:!1}),!1===e.major&&(e.major={display:!1});for(var t in e)"major"!==t&&"minor"!==t&&(void 0===e.minor[t]&&(e.minor[t]=e[t]),void 0===e.major[t]&&(e.major[t]=e[t]))},beforeUpdate:function(){s.callback(this.options.beforeUpdate,[this])},update:function(e,t,n){var r,a,i,o,u,l,d=this;// BACKWARD COMPATIBILITY
// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!
// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
for(
// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
d.beforeUpdate(),
// Absorb the master measurements
d.maxWidth=e,d.maxHeight=t,d.margins=s.extend({left:0,right:0,top:0,bottom:0},n),d.longestTextCache=d.longestTextCache||{},
// Dimensions
d.beforeSetDimensions(),d.setDimensions(),d.afterSetDimensions(),
// Data min/max
d.beforeDataLimits(),d.determineDataLimits(),d.afterDataLimits(),
// Ticks - `this.ticks` is now DEPRECATED!
// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
// and must not be accessed directly from outside this class. `this.ticks` being
// around for long time and not marked as private, we can't change its structure
// without unexpected breaking changes. If you need to access the scale ticks,
// use scale.getTicks() instead.
d.beforeBuildTicks(),
// New implementations should return an array of objects but for BACKWARD COMPAT,
// we still support no return (`this.ticks` internally set by calling this method).
u=d.buildTicks()||[],d.afterBuildTicks(),d.beforeTickToLabelConversion(),
// New implementations should return the formatted tick labels but for BACKWARD
// COMPAT, we still support no return (`this.ticks` internally changed by calling
// this method and supposed to contain only string values).
i=d.convertTicksToLabels(u)||d.ticks,d.afterTickToLabelConversion(),d.ticks=i,r=0,a=i.length;r<a;++r)o=i[r],l=u[r],l?l.label=o:u.push(l={label:o,major:!1});
// Tick Rotation
// Fit
//
return d._ticks=u,d.beforeCalculateTickRotation(),d.calculateTickRotation(),d.afterCalculateTickRotation(),d.beforeFit(),d.fit(),d.afterFit(),d.afterUpdate(),d.minSize},afterUpdate:function(){s.callback(this.options.afterUpdate,[this])},
//
beforeSetDimensions:function(){s.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var e=this;
// Set the unconstrained dimension before label rotation
e.isHorizontal()?(
// Reset position before calculating rotation
e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,
// Reset position before calculating rotation
e.top=0,e.bottom=e.height),
// Reset padding
e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0},afterSetDimensions:function(){s.callback(this.options.afterSetDimensions,[this])},
// Data limits
beforeDataLimits:function(){s.callback(this.options.beforeDataLimits,[this])},determineDataLimits:s.noop,afterDataLimits:function(){s.callback(this.options.afterDataLimits,[this])},
//
beforeBuildTicks:function(){s.callback(this.options.beforeBuildTicks,[this])},buildTicks:s.noop,afterBuildTicks:function(){s.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){s.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var e=this,t=e.options.ticks;e.ticks=e.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){s.callback(this.options.afterTickToLabelConversion,[this])},
//
beforeCalculateTickRotation:function(){s.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var e=this,t=e.ctx,a=e.options.ticks,i=r(e._ticks),o=n(a);t.font=o.font;var u=a.minRotation||0;if(i.length&&e.options.display&&e.isHorizontal())
// Max label rotation can be set or default to 90 - also act as a loop counter
for(var l,d=s.longestText(t,o.font,i,e.longestTextCache),c=d,f=e.getPixelForTick(1)-e.getPixelForTick(0)-6;c>f&&u<a.maxRotation;){var h=s.toRadians(u);if(l=Math.cos(h),Math.sin(h)*d>e.maxHeight){
// go back one step
u--;break}u++,c=l*d}e.labelRotation=u},afterCalculateTickRotation:function(){s.callback(this.options.afterCalculateTickRotation,[this])},
//
beforeFit:function(){s.callback(this.options.beforeFit,[this])},fit:function(){var e=this,a=e.minSize={width:0,height:0},i=r(e._ticks),o=e.options,l=o.ticks,d=o.scaleLabel,c=o.gridLines,f=o.display,h=e.isHorizontal(),m=n(l),_=o.gridLines.tickMarkLength;
// Are we showing a title for the scale?
if(
// Width
// subtract the margins to line up with the chartArea if we are a full width scale
a.width=h?e.isFullWidth()?e.maxWidth-e.margins.left-e.margins.right:e.maxWidth:f&&c.drawTicks?_:0,
// height
a.height=h?f&&c.drawTicks?_:0:e.maxHeight,d.display&&f){var p=u(d),y=s.options.toPadding(d.padding),v=p+y.height;h?a.height+=v:a.width+=v}
// Don't bother fitting the ticks if we are not showing them
if(l.display&&f){var g=s.longestText(e.ctx,m.font,i,e.longestTextCache),M=s.numberOfLabelLines(i),b=.5*m.size,L=e.options.ticks.padding;if(h){
// A horizontal axis is more constrained by the height.
e.longestLabelWidth=g;var k=s.toRadians(e.labelRotation),Y=Math.cos(k),w=Math.sin(k),x=w*g+m.size*M+b*(M-1)+b;// padding
a.height=Math.min(e.maxHeight,a.height+x+L),e.ctx.font=m.font;var D=t(e.ctx,i[0],m.font),S=t(e.ctx,i[i.length-1],m.font);
// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
// which means that the right padding is dominated by the font height
0!==e.labelRotation?(e.paddingLeft="bottom"===o.position?Y*D+3:Y*b+3,// add 3 px to move away from canvas edges
e.paddingRight="bottom"===o.position?Y*b+3:Y*S+3):(e.paddingLeft=D/2+3,// add 3 px to move away from canvas edges
e.paddingRight=S/2+3)}else
// A vertical axis is more constrained by the width. Labels are the
// dominant factor here, so get that length first and account for padding
l.mirror?g=0:
// use lineSpace for consistency with horizontal axis
// tickPadding is not implemented for horizontal
g+=L+b,a.width=Math.min(e.maxWidth,a.width+g),e.paddingTop=m.size/2,e.paddingBottom=m.size/2}e.handleMargins(),e.width=a.width,e.height=a.height},/**
		 * Handle margins and padding interactions
		 * @private
		 */
handleMargins:function(){var e=this;e.margins&&(e.paddingLeft=Math.max(e.paddingLeft-e.margins.left,0),e.paddingTop=Math.max(e.paddingTop-e.margins.top,0),e.paddingRight=Math.max(e.paddingRight-e.margins.right,0),e.paddingBottom=Math.max(e.paddingBottom-e.margins.bottom,0))},afterFit:function(){s.callback(this.options.afterFit,[this])},
// Shared Methods
isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},
// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
getRightValue:function(e){
// Null and undefined values first
if(s.isNullOrUndef(e))return NaN;
// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
if("number"==typeof e&&!isFinite(e))return NaN;
// If it is in fact an object, dive in one more level
if(e)if(this.isHorizontal()){if(void 0!==e.x)return this.getRightValue(e.x)}else if(void 0!==e.y)return this.getRightValue(e.y);
// Value is good, return it
return e},/**
		 * Used to get the value to display in the tooltip for the data at the given index
		 * @param index
		 * @param datasetIndex
		 */
getLabelForIndex:s.noop,/**
		 * Returns the location of the given data point. Value can either be an index or a numerical value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param value
		 * @param index
		 * @param datasetIndex
		 */
getPixelForValue:s.noop,/**
		 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param pixel
		 */
getValueForPixel:s.noop,/**
		 * Returns the location of the tick at the given index
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
getPixelForTick:function(e){var t=this,n=t.options.offset;if(t.isHorizontal()){var r=t.width-(t.paddingLeft+t.paddingRight),a=r/Math.max(t._ticks.length-(n?0:1),1),i=a*e+t.paddingLeft;n&&(i+=a/2);var o=t.left+Math.round(i);return o+=t.isFullWidth()?t.margins.left:0}var s=t.height-(t.paddingTop+t.paddingBottom);return t.top+e*(s/(t._ticks.length-1))},/**
		 * Utility for getting the pixel location of a percentage of scale
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
getPixelForDecimal:function(e){var t=this;if(t.isHorizontal()){var n=t.width-(t.paddingLeft+t.paddingRight),r=n*e+t.paddingLeft,a=t.left+Math.round(r);return a+=t.isFullWidth()?t.margins.left:0}return t.top+e*t.height},/**
		 * Returns the pixel for the minimum chart value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var e=this,t=e.min,n=e.max;return e.beginAtZero?0:t<0&&n<0?n:t>0&&n>0?t:0},/**
		 * Returns a subset of ticks to be plotted to avoid overlapping labels.
		 * @private
		 */
_autoSkip:function(e){var t,n,r,a,i,o=this,u=o.isHorizontal(),l=o.options.ticks.minor,d=e.length,c=s.toRadians(o.labelRotation),f=Math.cos(c),h=o.longestLabelWidth*f,m=[];for(l.maxTicksLimit&&(i=l.maxTicksLimit),u&&(t=!1,(h+l.autoSkipPadding)*d>o.width-(o.paddingLeft+o.paddingRight)&&(t=1+Math.floor((h+l.autoSkipPadding)*d/(o.width-(o.paddingLeft+o.paddingRight)))),
// if they defined a max number of optionTicks,
// increase skipRatio until that number is met
i&&d>i&&(t=Math.max(t,Math.floor(d/i)))),n=0;n<d;n++)r=e[n],
// Since we always show the last tick,we need may need to hide the last shown one before
a=t>1&&n%t>0||n%t==0&&n+t>=d,a&&n!==d-1&&
// leave tick in place but make sure it's not displayed (#4635)
delete r.label,m.push(r);return m},
// Actually draw the scale on the canvas
// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
draw:function(e){var t=this,r=t.options;if(r.display){var o=t.ctx,l=i.global,d=r.ticks.minor,c=r.ticks.major||d,f=r.gridLines,h=r.scaleLabel,m=0!==t.labelRotation,_=t.isHorizontal(),p=d.autoSkip?t._autoSkip(t.getTicks()):t.getTicks(),y=s.valueOrDefault(d.fontColor,l.defaultFontColor),v=n(d),g=s.valueOrDefault(c.fontColor,l.defaultFontColor),M=n(c),b=f.drawTicks?f.tickMarkLength:0,L=s.valueOrDefault(h.fontColor,l.defaultFontColor),k=n(h),Y=s.options.toPadding(h.padding),w=s.toRadians(t.labelRotation),x=[],D=t.options.gridLines.lineWidth,S="right"===r.position?t.right:t.right-D-b,T="right"===r.position?t.right+b:t.right,E="bottom"===r.position?t.top+D:t.bottom-b-D,j="bottom"===r.position?t.top+D+b:t.bottom+D;if(s.each(p,function(n,i){
// autoskipper skipped this tick (#4635)
if(!s.isNullOrUndef(n.label)){var o,u,c,h,y=n.label;i===t.zeroLineIndex&&r.offset===f.offsetGridLines?(
// Draw the first index specially
o=f.zeroLineWidth,u=f.zeroLineColor,c=f.zeroLineBorderDash,h=f.zeroLineBorderDashOffset):(o=s.valueAtIndexOrDefault(f.lineWidth,i),u=s.valueAtIndexOrDefault(f.color,i),c=s.valueOrDefault(f.borderDash,l.borderDash),h=s.valueOrDefault(f.borderDashOffset,l.borderDashOffset));
// Common properties
var v,g,M,L,k,Y,O,P,H,A,C="middle",F="middle",N=d.padding;if(_){var I=b+N;"bottom"===r.position?(
// bottom
F=m?"middle":"top",C=m?"right":"center",A=t.top+I):(
// top
F=m?"middle":"bottom",C=m?"left":"center",A=t.bottom-I);var W=a(t,i,f.offsetGridLines&&p.length>1);W<t.left&&(u="rgba(0,0,0,0)"),W+=s.aliasPixel(o),H=t.getPixelForTick(i)+d.labelOffset,// x values for optionTicks (need to consider offsetLabel option)
v=M=k=O=W,g=E,L=j,Y=e.top,P=e.bottom+D}else{var z,R="left"===r.position;d.mirror?(C=R?"left":"right",z=N):(C=R?"right":"left",z=b+N),H=R?t.right-z:t.left+z;var B=a(t,i,f.offsetGridLines&&p.length>1);B<t.top&&(u="rgba(0,0,0,0)"),B+=s.aliasPixel(o),A=t.getPixelForTick(i)+d.labelOffset,v=S,M=T,k=e.left,O=e.right+D,g=L=Y=P=B}x.push({tx1:v,ty1:g,tx2:M,ty2:L,x1:k,y1:Y,x2:O,y2:P,labelX:H,labelY:A,glWidth:o,glColor:u,glBorderDash:c,glBorderDashOffset:h,rotation:-1*w,label:y,major:n.major,textBaseline:F,textAlign:C})}}),
// Draw all of the tick labels, tick marks, and grid lines at the correct places
s.each(x,function(e){if(f.display&&(o.save(),o.lineWidth=e.glWidth,o.strokeStyle=e.glColor,o.setLineDash&&(o.setLineDash(e.glBorderDash),o.lineDashOffset=e.glBorderDashOffset),o.beginPath(),f.drawTicks&&(o.moveTo(e.tx1,e.ty1),o.lineTo(e.tx2,e.ty2)),f.drawOnChartArea&&(o.moveTo(e.x1,e.y1),o.lineTo(e.x2,e.y2)),o.stroke(),o.restore()),d.display){
// Make sure we draw text in the correct color and font
o.save(),o.translate(e.labelX,e.labelY),o.rotate(e.rotation),o.font=e.major?M.font:v.font,o.fillStyle=e.major?g:y,o.textBaseline=e.textBaseline,o.textAlign=e.textAlign;var n=e.label;if(s.isArray(n))for(var r=n.length,a=1.5*v.size,i=t.isHorizontal()?0:-a*(r-1)/2,u=0;u<r;++u)
// We just make sure the multiline element is a string here..
o.fillText(""+n[u],0,i),
// apply same lineSpacing as calculated @ L#320
i+=a;else o.fillText(n,0,0);o.restore()}}),h.display){
// Draw the scale label
var O,P,H=0,A=u(h)/2;if(_)O=t.left+(t.right-t.left)/2,// midpoint of the width
P="bottom"===r.position?t.bottom-A-Y.bottom:t.top+A+Y.top;else{var C="left"===r.position;O=C?t.left+A+Y.top:t.right-A-Y.top,P=t.top+(t.bottom-t.top)/2,H=C?-.5*Math.PI:.5*Math.PI}o.save(),o.translate(O,P),o.rotate(H),o.textAlign="center",o.textBaseline="middle",o.fillStyle=L,// render in correct colour
o.font=k.font,o.fillText(h.labelString,0,0),o.restore()}if(f.drawBorder){
// Draw the line at the edge of the axis
o.lineWidth=s.valueAtIndexOrDefault(f.lineWidth,0),o.strokeStyle=s.valueAtIndexOrDefault(f.color,0);var F=t.left,N=t.right+D,I=t.top,W=t.bottom+D,z=s.aliasPixel(o.lineWidth);_?(I=W="top"===r.position?t.bottom:t.top,I+=z,W+=z):(F=N="left"===r.position?t.right:t.left,F+=z,N+=z),o.beginPath(),o.moveTo(F,I),o.lineTo(N,W),o.stroke()}}}})}},/* 478 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(34),i=n(5);r._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{
// Args are: (tooltipItems, data)
beforeTitle:i.noop,title:function(e,t){
// Pick first xLabel for now
var n="",r=t.labels,a=r?r.length:0;if(e.length>0){var i=e[0];i.xLabel?n=i.xLabel:a>0&&i.index<a&&(n=r[i.index])}return n},afterTitle:i.noop,
// Args are: (tooltipItems, data)
beforeBody:i.noop,
// Args are: (tooltipItem, data)
beforeLabel:i.noop,label:function(e,t){var n=t.datasets[e.datasetIndex].label||"";return n&&(n+=": "),n+=e.yLabel},labelColor:function(e,t){var n=t.getDatasetMeta(e.datasetIndex),r=n.data[e.index],a=r._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:i.noop,
// Args are: (tooltipItems, data)
afterBody:i.noop,
// Args are: (tooltipItems, data)
beforeFooter:i.noop,footer:i.noop,afterFooter:i.noop}}}),e.exports=function(e){/**
 	 * Helper method to merge the opacity into a color
 	 */
function t(e,t){var n=i.color(e);return n.alpha(t*n.alpha()).rgbaString()}
// Helper to push or concat based on if the 2nd parameter is an array or not
function n(e,t){
// base = base.concat(toPush);
return t&&(i.isArray(t)?Array.prototype.push.apply(e,t):e.push(t)),e}
// Private helper to create a tooltip item model
// @param element : the chart element (point, arc, bar) to create the tooltip item for
// @return : new tooltip item
function o(e){var t=e._xScale,n=e._yScale||e._scale,r=e._index,a=e._datasetIndex;return{xLabel:t?t.getLabelForIndex(r,a):"",yLabel:n?n.getLabelForIndex(r,a):"",index:r,datasetIndex:a,x:e._model.x,y:e._model.y}}/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */
function s(e){var t=r.global,n=i.valueOrDefault;return{
// Positioning
xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,
// Body
bodyFontColor:e.bodyFontColor,_bodyFontFamily:n(e.bodyFontFamily,t.defaultFontFamily),_bodyFontStyle:n(e.bodyFontStyle,t.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:n(e.bodyFontSize,t.defaultFontSize),bodySpacing:e.bodySpacing,
// Title
titleFontColor:e.titleFontColor,_titleFontFamily:n(e.titleFontFamily,t.defaultFontFamily),_titleFontStyle:n(e.titleFontStyle,t.defaultFontStyle),titleFontSize:n(e.titleFontSize,t.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,
// Footer
footerFontColor:e.footerFontColor,_footerFontFamily:n(e.footerFontFamily,t.defaultFontFamily),_footerFontStyle:n(e.footerFontStyle,t.defaultFontStyle),footerFontSize:n(e.footerFontSize,t.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,
// Appearance
caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors,borderColor:e.borderColor,borderWidth:e.borderWidth}}/**
	 * Get the size of the tooltip
	 */
function u(e,t){var n=e._chart.ctx,r=2*t.yPadding,a=0,o=t.body,s=o.reduce(function(e,t){return e+t.before.length+t.lines.length+t.after.length},0);s+=t.beforeBody.length+t.afterBody.length;var u=t.title.length,l=t.footer.length,d=t.titleFontSize,c=t.bodyFontSize,f=t.footerFontSize;r+=u*d,// Title Lines
r+=u?(u-1)*t.titleSpacing:0,// Title Line Spacing
r+=u?t.titleMarginBottom:0,// Title's bottom Margin
r+=s*c,// Body Lines
r+=s?(s-1)*t.bodySpacing:0,// Body Line Spacing
r+=l?t.footerMarginTop:0,// Footer Margin
r+=l*f,// Footer Lines
r+=l?(l-1)*t.footerSpacing:0;// Footer Line Spacing
// Title width
var h=0,m=function(e){a=Math.max(a,n.measureText(e).width+h)};
// Body width
// Body lines may include some extra width due to the color box
// Reset back to 0
// Footer width
// Add padding
return n.font=i.fontString(d,t._titleFontStyle,t._titleFontFamily),i.each(t.title,m),n.font=i.fontString(c,t._bodyFontStyle,t._bodyFontFamily),i.each(t.beforeBody.concat(t.afterBody),m),h=t.displayColors?c+2:0,i.each(o,function(e){i.each(e.before,m),i.each(e.lines,m),i.each(e.after,m)}),h=0,n.font=i.fontString(f,t._footerFontStyle,t._footerFontFamily),i.each(t.footer,m),a+=2*t.xPadding,{width:a,height:r}}/**
	 * Helper to get the alignment of a tooltip given the size
	 */
function l(e,t){var n=e._model,r=e._chart,a=e._chart.chartArea,i="center",o="center";n.y<t.height?o="top":n.y>r.height-t.height&&(o="bottom");var s,u,l,d,c,f=(a.left+a.right)/2,h=(a.top+a.bottom)/2;"center"===o?(s=function(e){return e<=f},u=function(e){return e>f}):(s=function(e){return e<=t.width/2},u=function(e){return e>=r.width-t.width/2}),l=function(e){return e+t.width+n.caretSize+n.caretPadding>r.width},d=function(e){return e-t.width-n.caretSize-n.caretPadding<0},c=function(e){return e<=h?"top":"bottom"},s(n.x)?(i="left",
// Is tooltip too wide and goes over the right side of the chart.?
l(n.x)&&(i="center",o=c(n.y))):u(n.x)&&(i="right",
// Is tooltip too wide and goes outside left edge of canvas?
d(n.x)&&(i="center",o=c(n.y)));var m=e._options;return{xAlign:m.xAlign?m.xAlign:i,yAlign:m.yAlign?m.yAlign:o}}/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */
function d(e,t,n,r){
// Background Position
var a=e.x,i=e.y,o=e.caretSize,s=e.caretPadding,u=e.cornerRadius,l=n.xAlign,d=n.yAlign,c=o+s,f=u+s;return"right"===l?a-=t.width:"center"===l&&(a-=t.width/2,a+t.width>r.width&&(a=r.width-t.width),a<0&&(a=0)),"top"===d?i+=c:i-="bottom"===d?t.height+c:t.height/2,"center"===d?"left"===l?a+=c:"right"===l&&(a-=c):"left"===l?a-=f:"right"===l&&(a+=f),{x:a,y:i}}e.Tooltip=a.extend({initialize:function(){this._model=s(this._options),this._lastActive=[]},
// Get the title
// Args are: (tooltipItem, data)
getTitle:function(){var e=this,t=e._options,r=t.callbacks,a=r.beforeTitle.apply(e,arguments),i=r.title.apply(e,arguments),o=r.afterTitle.apply(e,arguments),s=[];return s=n(s,a),s=n(s,i),s=n(s,o)},
// Args are: (tooltipItem, data)
getBeforeBody:function(){var e=this._options.callbacks.beforeBody.apply(this,arguments);return i.isArray(e)?e:void 0!==e?[e]:[]},
// Args are: (tooltipItem, data)
getBody:function(e,t){var r=this,a=r._options.callbacks,o=[];return i.each(e,function(e){var i={before:[],lines:[],after:[]};n(i.before,a.beforeLabel.call(r,e,t)),n(i.lines,a.label.call(r,e,t)),n(i.after,a.afterLabel.call(r,e,t)),o.push(i)}),o},
// Args are: (tooltipItem, data)
getAfterBody:function(){var e=this._options.callbacks.afterBody.apply(this,arguments);return i.isArray(e)?e:void 0!==e?[e]:[]},
// Get the footer and beforeFooter and afterFooter lines
// Args are: (tooltipItem, data)
getFooter:function(){var e=this,t=e._options.callbacks,r=t.beforeFooter.apply(e,arguments),a=t.footer.apply(e,arguments),i=t.afterFooter.apply(e,arguments),o=[];return o=n(o,r),o=n(o,a),o=n(o,i)},update:function(t){var n,r,a=this,c=a._options,f=a._model,h=a._model=s(c),m=a._active,_=a._data,p={xAlign:f.xAlign,yAlign:f.yAlign},y={x:f.x,y:f.y},v={width:f.width,height:f.height},g={x:f.caretX,y:f.caretY};if(m.length){h.opacity=1;var M=[],b=[];g=e.Tooltip.positioners[c.position].call(a,m,a._eventPosition);var L=[];for(n=0,r=m.length;n<r;++n)L.push(o(m[n]));
// If the user provided a filter function, use it to modify the tooltip items
c.filter&&(L=L.filter(function(e){return c.filter(e,_)})),
// If the user provided a sorting function, use it to modify the tooltip items
c.itemSort&&(L=L.sort(function(e,t){return c.itemSort(e,t,_)})),
// Determine colors for boxes
i.each(L,function(e){M.push(c.callbacks.labelColor.call(a,e,a._chart)),b.push(c.callbacks.labelTextColor.call(a,e,a._chart))}),
// Build the Text Lines
h.title=a.getTitle(L,_),h.beforeBody=a.getBeforeBody(L,_),h.body=a.getBody(L,_),h.afterBody=a.getAfterBody(L,_),h.footer=a.getFooter(L,_),
// Initial positioning and colors
h.x=Math.round(g.x),h.y=Math.round(g.y),h.caretPadding=c.caretPadding,h.labelColors=M,h.labelTextColors=b,
// data points
h.dataPoints=L,
// We need to determine alignment of the tooltip
v=u(this,h),p=l(this,v),
// Final Size and Position
y=d(h,v,p,a._chart)}else h.opacity=0;
// Point where the caret on the tooltip points to
return h.xAlign=p.xAlign,h.yAlign=p.yAlign,h.x=y.x,h.y=y.y,h.width=v.width,h.height=v.height,h.caretX=g.x,h.caretY=g.y,a._model=h,t&&c.custom&&c.custom.call(a,h),a},drawCaret:function(e,t){var n=this._chart.ctx,r=this._view,a=this.getCaretPosition(e,t,r);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(e,t,n){var r,a,i,o,s,u,l=n.caretSize,d=n.cornerRadius,c=n.xAlign,f=n.yAlign,h=e.x,m=e.y,_=t.width,p=t.height;if("center"===f)s=m+p/2,"left"===c?(r=h,a=r-l,i=r,o=s+l,u=s-l):(r=h+_,a=r+l,i=r,o=s-l,u=s+l);else if("left"===c?(a=h+d+l,r=a-l,i=a+l):"right"===c?(a=h+_-d-l,r=a-l,i=a+l):(a=n.caretX,r=a-l,i=a+l),"top"===f)o=m,s=o-l,u=o;else{o=m+p,s=o+l,u=o;
// invert drawing order
var y=i;i=r,r=y}return{x1:r,x2:a,x3:i,y1:o,y2:s,y3:u}},drawTitle:function(e,n,r,a){var o=n.title;if(o.length){r.textAlign=n._titleAlign,r.textBaseline="top";var s=n.titleFontSize,u=n.titleSpacing;r.fillStyle=t(n.titleFontColor,a),r.font=i.fontString(s,n._titleFontStyle,n._titleFontFamily);var l,d;for(l=0,d=o.length;l<d;++l)r.fillText(o[l],e.x,e.y),e.y+=s+u,// Line Height and spacing
l+1===o.length&&(e.y+=n.titleMarginBottom-u)}},drawBody:function(e,n,r,a){var o=n.bodyFontSize,s=n.bodySpacing,u=n.body;r.textAlign=n._bodyAlign,r.textBaseline="top",r.font=i.fontString(o,n._bodyFontStyle,n._bodyFontFamily);
// Before Body
var l=0,d=function(t){r.fillText(t,e.x+l,e.y),e.y+=o+s};
// Before body lines
r.fillStyle=t(n.bodyFontColor,a),i.each(n.beforeBody,d);var c=n.displayColors;l=c?o+2:0,
// Draw body lines now
i.each(u,function(s,u){var l=t(n.labelTextColors[u],a);r.fillStyle=l,i.each(s.before,d),i.each(s.lines,function(i){
// Draw Legend-like boxes if needed
c&&(
// Fill a white rect so that colours merge nicely if the opacity is < 1
r.fillStyle=t(n.legendColorBackground,a),r.fillRect(e.x,e.y,o,o),
// Border
r.lineWidth=1,r.strokeStyle=t(n.labelColors[u].borderColor,a),r.strokeRect(e.x,e.y,o,o),
// Inner square
r.fillStyle=t(n.labelColors[u].backgroundColor,a),r.fillRect(e.x+1,e.y+1,o-2,o-2),r.fillStyle=l),d(i)}),i.each(s.after,d)}),
// Reset back to 0 for after body
l=0,
// After body lines
i.each(n.afterBody,d),e.y-=s},drawFooter:function(e,n,r,a){var o=n.footer;o.length&&(e.y+=n.footerMarginTop,r.textAlign=n._footerAlign,r.textBaseline="top",r.fillStyle=t(n.footerFontColor,a),r.font=i.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),i.each(o,function(t){r.fillText(t,e.x,e.y),e.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(e,n,r,a,i){r.fillStyle=t(n.backgroundColor,i),r.strokeStyle=t(n.borderColor,i),r.lineWidth=n.borderWidth;var o=n.xAlign,s=n.yAlign,u=e.x,l=e.y,d=a.width,c=a.height,f=n.cornerRadius;r.beginPath(),r.moveTo(u+f,l),"top"===s&&this.drawCaret(e,a),r.lineTo(u+d-f,l),r.quadraticCurveTo(u+d,l,u+d,l+f),"center"===s&&"right"===o&&this.drawCaret(e,a),r.lineTo(u+d,l+c-f),r.quadraticCurveTo(u+d,l+c,u+d-f,l+c),"bottom"===s&&this.drawCaret(e,a),r.lineTo(u+f,l+c),r.quadraticCurveTo(u,l+c,u,l+c-f),"center"===s&&"left"===o&&this.drawCaret(e,a),r.lineTo(u,l+f),r.quadraticCurveTo(u,l,u+f,l),r.closePath(),r.fill(),n.borderWidth>0&&r.stroke()},draw:function(){var e=this._chart.ctx,t=this._view;if(0!==t.opacity){var n={width:t.width,height:t.height},r={x:t.x,y:t.y},a=Math.abs(t.opacity<.001)?0:t.opacity,i=t.title.length||t.beforeBody.length||t.body.length||t.afterBody.length||t.footer.length;this._options.enabled&&i&&(
// Draw Background
this.drawBackground(r,t,e,n,a),
// Draw Title, Body, and Footer
r.x+=t.xPadding,r.y+=t.yPadding,
// Titles
this.drawTitle(r,t,e,a),
// Body
this.drawBody(r,t,e,a),
// Footer
this.drawFooter(r,t,e,a))}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */
handleEvent:function(e){var t=this,n=t._options,r=!1;
// Find Active Elements for tooltips
// Remember Last Actives
// Only handle target event on tooltip change
return t._lastActive=t._lastActive||[],"mouseout"===e.type?t._active=[]:t._active=t._chart.getElementsAtEventForMode(e,n.mode,n),r=!i.arrayEquals(t._active,t._lastActive),r&&(t._lastActive=t._active,(n.enabled||n.custom)&&(t._eventPosition={x:e.x,y:e.y},t.update(!0),t.pivot())),r}}),/**
	 * @namespace Chart.Tooltip.positioners
	 */
e.Tooltip.positioners={/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */
average:function(e){if(!e.length)return!1;var t,n,r=0,a=0,i=0;for(t=0,n=e.length;t<n;++t){var o=e[t];if(o&&o.hasValue()){var s=o.tooltipPosition();r+=s.x,a+=s.y,++i}}return{x:Math.round(r/i),y:Math.round(a/i)}},/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */
nearest:function(e,t){var n,r,a,o=t.x,s=t.y,u=Number.POSITIVE_INFINITY;for(n=0,r=e.length;n<r;++n){var l=e[n];if(l&&l.hasValue()){var d=l.getCenterPoint(),c=i.distanceBetweenPoints(t,d);c<u&&(u=c,a=l)}}if(a){var f=a.tooltipPosition();o=f.x,s=f.y}return{x:o,y:s}}}}},/* 479 */
/***/
function(e,t,n){"use strict";/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {Array<Number>} array of tick values
 */
function r(e,t){var n,r=[];if(e.stepSize&&e.stepSize>0)n=e.stepSize;else{var i=a.niceNum(t.max-t.min,!1);n=a.niceNum(i/(e.maxTicks-1),!0)}var o=Math.floor(t.min/n)*n,s=Math.ceil(t.max/n)*n;
// If min, max and stepSize is set and they make an evenly spaced scale use it.
e.min&&e.max&&e.stepSize&&a.almostWhole((e.max-e.min)/e.stepSize,n/1e3)&&(o=e.min,s=e.max);var u=(s-o)/n;
// If very close to our rounded value, use it.
u=a.almostEquals(u,Math.round(u),n/1e3)?Math.round(u):Math.ceil(u);var l=1;n<1&&(l=Math.pow(10,n.toString().length-2),o=Math.round(o*l)/l,s=Math.round(s*l)/l),r.push(void 0!==e.min?e.min:o);for(var d=1;d<u;++d)r.push(Math.round((o+d*n)*l)/l);return r.push(void 0!==e.max?e.max:s),r}var a=n(5);e.exports=function(e){var t=a.noop;e.LinearScaleBase=e.Scale.extend({getRightValue:function(t){return"string"==typeof t?+t:e.Scale.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var e=this,t=e.options,n=t.ticks;
// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
// do nothing since that would make the chart weird. If the user really wants a weird chart
// axis, they can manually override it
if(n.beginAtZero){var r=a.sign(e.min),i=a.sign(e.max);r<0&&i<0?
// move the top up to 0
e.max=0:r>0&&i>0&&(
// move the bottom down to 0
e.min=0)}var o=void 0!==n.min||void 0!==n.suggestedMin,s=void 0!==n.max||void 0!==n.suggestedMax;void 0!==n.min?e.min=n.min:void 0!==n.suggestedMin&&(null===e.min?e.min=n.suggestedMin:e.min=Math.min(e.min,n.suggestedMin)),void 0!==n.max?e.max=n.max:void 0!==n.suggestedMax&&(null===e.max?e.max=n.suggestedMax:e.max=Math.max(e.max,n.suggestedMax)),o!==s&&e.min>=e.max&&(o?e.max=e.min+1:e.min=e.max-1),e.min===e.max&&(e.max++,n.beginAtZero||e.min--)},getTickLimit:t,handleDirectionalChanges:t,buildTicks:function(){var e=this,t=e.options,n=t.ticks,i=e.getTickLimit();i=Math.max(2,i);var o={maxTicks:i,min:n.min,max:n.max,stepSize:a.valueOrDefault(n.fixedStepSize,n.stepSize)},s=e.ticks=r(o,e);e.handleDirectionalChanges(),
// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
e.max=a.max(s),e.min=a.min(s),n.reverse?(s.reverse(),e.start=e.max,e.end=e.min):(e.start=e.min,e.end=e.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),e.Scale.prototype.convertTicksToLabels.call(t)}})}},/* 480 */
/***/
function(e,t,n){"use strict";e.exports=function(e){
// Default config for a category scale
var t={position:"bottom"},n=e.Scale.extend({/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/
getLabels:function(){var e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels},determineDataLimits:function(){var e=this,t=e.getLabels();e.minIndex=0,e.maxIndex=t.length-1;var n;void 0!==e.options.ticks.min&&(
// user specified min value
n=t.indexOf(e.options.ticks.min),e.minIndex=-1!==n?n:e.minIndex),void 0!==e.options.ticks.max&&(
// user specified max value
n=t.indexOf(e.options.ticks.max),e.maxIndex=-1!==n?n:e.maxIndex),e.min=t[e.minIndex],e.max=t[e.maxIndex]},buildTicks:function(){var e=this,t=e.getLabels();
// If we are viewing some subset of labels, slice the original array
e.ticks=0===e.minIndex&&e.maxIndex===t.length-1?t:t.slice(e.minIndex,e.maxIndex+1)},getLabelForIndex:function(e,t){var n=this,r=n.chart.data,a=n.isHorizontal();return r.yLabels&&!a?n.getRightValue(r.datasets[t].data[e]):n.ticks[e-n.minIndex]},
// Used to get data value locations.  Value can either be an index or a numerical value
getPixelForValue:function(e,t){var n,r=this,a=r.options.offset,i=Math.max(r.maxIndex+1-r.minIndex-(a?0:1),1);if(void 0!==e&&null!==e&&(n=r.isHorizontal()?e.x:e.y),void 0!==n||void 0!==e&&isNaN(t)){var o=r.getLabels();e=n||e;var s=o.indexOf(e);t=-1!==s?s:t}if(r.isHorizontal()){var u=r.width/i,l=u*(t-r.minIndex);return a&&(l+=u/2),r.left+Math.round(l)}var d=r.height/i,c=d*(t-r.minIndex);return a&&(c+=d/2),r.top+Math.round(c)},getPixelForTick:function(e){return this.getPixelForValue(this.ticks[e],e+this.minIndex,null)},getValueForPixel:function(e){var t=this,n=t.options.offset,r=Math.max(t._ticks.length-(n?0:1),1),a=t.isHorizontal(),i=(a?t.width:t.height)/r;return e-=a?t.left:t.top,n&&(e-=i/2),(e<=0?0:Math.round(e/i))+t.minIndex},getBasePixel:function(){return this.bottom}});e.scaleService.registerScaleType("category",n,t)}},/* 481 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(5),i=n(87);e.exports=function(e){var t={position:"left",ticks:{callback:i.formatters.linear}},n=e.LinearScaleBase.extend({determineDataLimits:function(){function e(e){return s?e.xAxisID===t.id:e.yAxisID===t.id}var t=this,n=t.options,r=t.chart,i=r.data,o=i.datasets,s=t.isHorizontal();
// First Calculate the range
t.min=null,t.max=null;var u=n.stacked;if(void 0===u&&a.each(o,function(t,n){if(!u){var a=r.getDatasetMeta(n);r.isDatasetVisible(n)&&e(a)&&void 0!==a.stack&&(u=!0)}}),n.stacked||u){var l={};a.each(o,function(i,o){var s=r.getDatasetMeta(o),u=[s.type,
// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
void 0===n.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});
// Store these per type
var d=l[u].positiveValues,c=l[u].negativeValues;r.isDatasetVisible(o)&&e(s)&&a.each(i.data,function(e,r){var a=+t.getRightValue(e);isNaN(a)||s.data[r].hidden||(d[r]=d[r]||0,c[r]=c[r]||0,n.relativePoints?d[r]=100:a<0?c[r]+=a:d[r]+=a)})}),a.each(l,function(e){var n=e.positiveValues.concat(e.negativeValues),r=a.min(n),i=a.max(n);t.min=null===t.min?r:Math.min(t.min,r),t.max=null===t.max?i:Math.max(t.max,i)})}else a.each(o,function(n,i){var o=r.getDatasetMeta(i);r.isDatasetVisible(i)&&e(o)&&a.each(n.data,function(e,n){var r=+t.getRightValue(e);isNaN(r)||o.data[n].hidden||(null===t.min?t.min=r:r<t.min&&(t.min=r),null===t.max?t.max=r:r>t.max&&(t.max=r))})});t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,
// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
this.handleTickRangeOptions()},getTickLimit:function(){var e,t=this,n=t.options.ticks;if(t.isHorizontal())e=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(t.width/50));else{
// The factor of 2 used to scale the font size has been experimentally determined.
var i=a.valueOrDefault(n.fontSize,r.global.defaultFontSize);e=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(t.height/(2*i)))}return e},
// Called after the ticks are built. We need
handleDirectionalChanges:function(){this.isHorizontal()||
// We are in a vertical orientation. The top value is the highest. So reverse the array
this.ticks.reverse()},getLabelForIndex:function(e,t){return+this.getRightValue(this.chart.data.datasets[t].data[e])},
// Utils
getPixelForValue:function(e){
// This must be called after fit has been run so that
// this.left, this.top, this.right, and this.bottom have been defined
var t=this,n=t.start,r=+t.getRightValue(e),a=t.end-n;return t.isHorizontal()?t.left+t.width/a*(r-n):t.bottom-t.height/a*(r-n)},getValueForPixel:function(e){var t=this,n=t.isHorizontal(),r=n?t.width:t.height,a=(n?e-t.left:t.bottom-e)/r;return t.start+(t.end-t.start)*a},getPixelForTick:function(e){return this.getPixelForValue(this.ticksAsNumbers[e])}});e.scaleService.registerScaleType("linear",n,t)}},/* 482 */
/***/
function(e,t,n){"use strict";/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {Array<Number>} array of tick values
 */
function r(e,t){var n,r,i=[],o=a.valueOrDefault,s=o(e.min,Math.pow(10,Math.floor(a.log10(t.min)))),u=Math.floor(a.log10(t.max)),l=Math.ceil(t.max/Math.pow(10,u));0===s?(n=Math.floor(a.log10(t.minNotZero)),r=Math.floor(t.minNotZero/Math.pow(10,n)),i.push(s),s=r*Math.pow(10,n)):(n=Math.floor(a.log10(s)),r=Math.floor(s/Math.pow(10,n)));var d=n<0?Math.pow(10,Math.abs(n)):1;do{i.push(s),++r,10===r&&(r=1,++n,d=n>=0?1:d),s=Math.round(r*Math.pow(10,n)*d)/d}while(n<u||n===u&&r<l);var c=o(e.max,s);return i.push(c),i}var a=n(5),i=n(87);e.exports=function(e){var t={position:"left",
// label settings
ticks:{callback:i.formatters.logarithmic}},n=e.Scale.extend({determineDataLimits:function(){function e(e){return s?e.xAxisID===t.id:e.yAxisID===t.id}var t=this,n=t.options,r=t.chart,i=r.data,o=i.datasets,s=t.isHorizontal();
// Calculate Range
t.min=null,t.max=null,t.minNotZero=null;var u=n.stacked;if(void 0===u&&a.each(o,function(t,n){if(!u){var a=r.getDatasetMeta(n);r.isDatasetVisible(n)&&e(a)&&void 0!==a.stack&&(u=!0)}}),n.stacked||u){var l={};a.each(o,function(i,o){var s=r.getDatasetMeta(o),u=[s.type,
// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
void 0===n.stacked&&void 0===s.stack?o:"",s.stack].join(".");r.isDatasetVisible(o)&&e(s)&&(void 0===l[u]&&(l[u]=[]),a.each(i.data,function(e,n){var r=l[u],a=+t.getRightValue(e);
// invalid, hidden and negative values are ignored
isNaN(a)||s.data[n].hidden||a<0||(r[n]=r[n]||0,r[n]+=a)}))}),a.each(l,function(e){if(e.length>0){var n=a.min(e),r=a.max(e);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?r:Math.max(t.max,r)}})}else a.each(o,function(n,i){var o=r.getDatasetMeta(i);r.isDatasetVisible(i)&&e(o)&&a.each(n.data,function(e,n){var r=+t.getRightValue(e);
// invalid, hidden and negative values are ignored
isNaN(r)||o.data[n].hidden||r<0||(null===t.min?t.min=r:r<t.min&&(t.min=r),null===t.max?t.max=r:r>t.max&&(t.max=r),0!==r&&(null===t.minNotZero||r<t.minNotZero)&&(t.minNotZero=r))})});
// Common base implementation to handle ticks.min, ticks.max
this.handleTickRangeOptions()},handleTickRangeOptions:function(){var e=this,t=e.options,n=t.ticks,r=a.valueOrDefault;e.min=r(n.min,e.min),e.max=r(n.max,e.max),e.min===e.max&&(0!==e.min&&null!==e.min?(e.min=Math.pow(10,Math.floor(a.log10(e.min))-1),e.max=Math.pow(10,Math.floor(a.log10(e.max))+1)):(e.min=1,e.max=10)),null===e.min&&(e.min=Math.pow(10,Math.floor(a.log10(e.max))-1)),null===e.max&&(e.max=0!==e.min?Math.pow(10,Math.floor(a.log10(e.min))+1):10),null===e.minNotZero&&(e.min>0?e.minNotZero=e.min:e.max<1?e.minNotZero=Math.pow(10,Math.floor(a.log10(e.max))):e.minNotZero=1)},buildTicks:function(){var e=this,t=e.options,n=t.ticks,i=!e.isHorizontal(),o={min:n.min,max:n.max},s=e.ticks=r(o,e);
// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
e.max=a.max(s),e.min=a.min(s),n.reverse?(i=!i,e.start=e.max,e.end=e.min):(e.start=e.min,e.end=e.max),i&&s.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),e.Scale.prototype.convertTicksToLabels.call(this)},
// Get the correct tooltip label
getLabelForIndex:function(e,t){return+this.getRightValue(this.chart.data.datasets[t].data[e])},getPixelForTick:function(e){return this.getPixelForValue(this.tickValues[e])},/**
		 * Returns the value of the first tick.
		 * @param {Number} value - The minimum not zero value.
		 * @return {Number} The first tick value.
		 * @private
		 */
_getFirstTickValue:function(e){var t=Math.floor(a.log10(e));return Math.floor(e/Math.pow(10,t))*Math.pow(10,t)},getPixelForValue:function(t){var n,r,i,o,s,u=this,l=u.options.ticks.reverse,d=a.log10,c=u._getFirstTickValue(u.minNotZero),f=0;// invert, since the upper-left corner of the canvas is at pixel (0, 0)
// include zero tick
return t=+u.getRightValue(t),l?(i=u.end,o=u.start,s=-1):(i=u.start,o=u.end,s=1),u.isHorizontal()?(n=u.width,r=l?u.right:u.left):(n=u.height,s*=-1,r=l?u.top:u.bottom),t!==i&&(0===i&&(f=a.getValueOrDefault(u.options.ticks.fontSize,e.defaults.global.defaultFontSize),n-=f,i=c),0!==t&&(f+=n/(d(o)-d(i))*(d(t)-d(i))),r+=s*f),r},getValueForPixel:function(t){var n,r,i,o,s=this,u=s.options.ticks.reverse,l=a.log10,d=s._getFirstTickValue(s.minNotZero);if(u?(r=s.end,i=s.start):(r=s.start,i=s.end),s.isHorizontal()?(n=s.width,o=u?s.right-t:t-s.left):(n=s.height,o=u?t-s.top:s.bottom-t),o!==r){if(0===r){// include zero tick
var c=a.getValueOrDefault(s.options.ticks.fontSize,e.defaults.global.defaultFontSize);o-=c,n-=c,r=d}o*=l(i)-l(r),o/=n,o=Math.pow(10,l(r)+o)}return o}});e.scaleService.registerScaleType("logarithmic",n,t)}},/* 483 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(5),i=n(87);e.exports=function(e){function t(e){var t=e.options;return t.angleLines.display||t.pointLabels.display?e.chart.data.labels.length:0}function n(e){var t=e.options.pointLabels,n=a.valueOrDefault(t.fontSize,p.defaultFontSize),r=a.valueOrDefault(t.fontStyle,p.defaultFontStyle),i=a.valueOrDefault(t.fontFamily,p.defaultFontFamily);return{size:n,style:r,family:i,font:a.fontString(n,r,i)}}function o(e,t,n){return a.isArray(n)?{w:a.longestText(e,e.font,n),h:n.length*t+1.5*(n.length-1)*t}:{w:e.measureText(n).width,h:t}}function s(e,t,n,r,a){return e===r||e===a?{start:t-n/2,end:t+n/2}:e<r||e>a?{start:t-n-5,end:t}:{start:t,end:t+n+5}}/**
	 * Helper function to fit a radial linear scale with point labels
	 */
function u(e){/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */
var r,i,u,l=n(e),d=Math.min(e.height/2,e.width/2),c={r:e.width,l:0,t:e.height,b:0},f={};e.ctx.font=l.font,e._pointLabelSizes=[];var h=t(e);for(r=0;r<h;r++){u=e.getPointPosition(r,d),i=o(e.ctx,l.size,e.pointLabels[r]||""),e._pointLabelSizes[r]=i;
// Add quarter circle to make degree 0 mean top of circle
var m=e.getIndexAngle(r),_=a.toDegrees(m)%360,p=s(_,u.x,i.w,0,180),y=s(_,u.y,i.h,90,270);p.start<c.l&&(c.l=p.start,f.l=m),p.end>c.r&&(c.r=p.end,f.r=m),y.start<c.t&&(c.t=y.start,f.t=m),y.end>c.b&&(c.b=y.end,f.b=m)}e.setReductions(d,c,f)}/**
	 * Helper function to fit a radial linear scale with no point labels
	 */
function l(e){var t=Math.min(e.height/2,e.width/2);e.drawingArea=Math.round(t),e.setCenterPoint(0,0,0,0)}function d(e){return 0===e||180===e?"center":e<180?"left":"right"}function c(e,t,n,r){if(a.isArray(t))for(var i=n.y,o=1.5*r,s=0;s<t.length;++s)e.fillText(t[s],n.x,i),i+=o;else e.fillText(t,n.x,n.y)}function f(e,t,n){90===e||270===e?n.y-=t.h/2:(e>270||e<90)&&(n.y-=t.h)}function h(e){var r=e.ctx,i=e.options,o=i.angleLines,s=i.pointLabels;r.lineWidth=o.lineWidth,r.strokeStyle=o.color;var u=e.getDistanceFromCenterForValue(i.ticks.reverse?e.min:e.max),l=n(e);r.textBaseline="top";for(var h=t(e)-1;h>=0;h--){if(o.display){var m=e.getPointPosition(h,u);r.beginPath(),r.moveTo(e.xCenter,e.yCenter),r.lineTo(m.x,m.y),r.stroke(),r.closePath()}if(s.display){
// Extra 3px out for some label spacing
var _=e.getPointPosition(h,u+5),y=a.valueAtIndexOrDefault(s.fontColor,h,p.defaultFontColor);r.font=l.font,r.fillStyle=y;var v=e.getIndexAngle(h),g=a.toDegrees(v);r.textAlign=d(g),f(g,e._pointLabelSizes[h],_),c(r,e.pointLabels[h]||"",_,l.size)}}}function m(e,n,r,i){var o=e.ctx;if(o.strokeStyle=a.valueAtIndexOrDefault(n.color,i-1),o.lineWidth=a.valueAtIndexOrDefault(n.lineWidth,i-1),e.options.gridLines.circular)
// Draw circular arcs between the points
o.beginPath(),o.arc(e.xCenter,e.yCenter,r,0,2*Math.PI),o.closePath(),o.stroke();else{
// Draw straight lines connecting each index
var s=t(e);if(0===s)return;o.beginPath();var u=e.getPointPosition(0,r);o.moveTo(u.x,u.y);for(var l=1;l<s;l++)u=e.getPointPosition(l,r),o.lineTo(u.x,u.y);o.closePath(),o.stroke()}}function _(e){return a.isNumber(e)?e:0}var p=r.global,y={display:!0,
// Boolean - Whether to animate scaling the chart from the centre
animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},
// label settings
ticks:{
// Boolean - Show a backdrop to the scale label
showLabelBackdrop:!0,
// String - The colour of the label backdrop
backdropColor:"rgba(255,255,255,0.75)",
// Number - The backdrop padding above & below the label in pixels
backdropPaddingY:2,
// Number - The backdrop padding to the side of the label in pixels
backdropPaddingX:2,callback:i.formatters.linear},pointLabels:{
// Boolean - if true, show point labels
display:!0,
// Number - Point label font size in pixels
fontSize:10,
// Function - Used to convert point labels
callback:function(e){return e}}},v=e.LinearScaleBase.extend({setDimensions:function(){var e=this,t=e.options,n=t.ticks;
// Set the unconstrained dimension before label rotation
e.width=e.maxWidth,e.height=e.maxHeight,e.xCenter=Math.round(e.width/2),e.yCenter=Math.round(e.height/2);var r=a.min([e.height,e.width]),i=a.valueOrDefault(n.fontSize,p.defaultFontSize);e.drawingArea=t.display?r/2-(i/2+n.backdropPaddingY):r/2},determineDataLimits:function(){var e=this,t=e.chart,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;a.each(t.data.datasets,function(i,o){if(t.isDatasetVisible(o)){var s=t.getDatasetMeta(o);a.each(i.data,function(t,a){var i=+e.getRightValue(t);isNaN(i)||s.data[a].hidden||(n=Math.min(i,n),r=Math.max(i,r))})}}),e.min=n===Number.POSITIVE_INFINITY?0:n,e.max=r===Number.NEGATIVE_INFINITY?0:r,
// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
e.handleTickRangeOptions()},getTickLimit:function(){var e=this.options.ticks,t=a.valueOrDefault(e.fontSize,p.defaultFontSize);return Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*t)))},convertTicksToLabels:function(){var t=this;e.LinearScaleBase.prototype.convertTicksToLabels.call(t),
// Point labels
t.pointLabels=t.chart.data.labels.map(t.options.pointLabels.callback,t)},getLabelForIndex:function(e,t){return+this.getRightValue(this.chart.data.datasets[t].data[e])},fit:function(){this.options.pointLabels.display?u(this):l(this)},/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */
setReductions:function(e,t,n){var r=this,a=t.l/Math.sin(n.l),i=Math.max(t.r-r.width,0)/Math.sin(n.r),o=-t.t/Math.cos(n.t),s=-Math.max(t.b-r.height,0)/Math.cos(n.b);a=_(a),i=_(i),o=_(o),s=_(s),r.drawingArea=Math.min(Math.round(e-(a+i)/2),Math.round(e-(o+s)/2)),r.setCenterPoint(a,i,o,s)},setCenterPoint:function(e,t,n,r){var a=this,i=a.width-t-a.drawingArea,o=e+a.drawingArea,s=n+a.drawingArea,u=a.height-r-a.drawingArea;a.xCenter=Math.round((o+i)/2+a.left),a.yCenter=Math.round((s+u)/2+a.top)},getIndexAngle:function(e){
// Start from the top instead of right, so remove a quarter of the circle
return e*(2*Math.PI/t(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(e){var t=this;if(null===e)return 0;
// Take into account half font size + the yPadding of the top value
var n=t.drawingArea/(t.max-t.min);return t.options.ticks.reverse?(t.max-e)*n:(e-t.min)*n},getPointPosition:function(e,t){var n=this,r=n.getIndexAngle(e)-Math.PI/2;return{x:Math.round(Math.cos(r)*t)+n.xCenter,y:Math.round(Math.sin(r)*t)+n.yCenter}},getPointPositionForValue:function(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))},getBasePosition:function(){var e=this,t=e.min,n=e.max;return e.getPointPositionForValue(0,e.beginAtZero?0:t<0&&n<0?n:t>0&&n>0?t:0)},draw:function(){var e=this,t=e.options,n=t.gridLines,r=t.ticks,i=a.valueOrDefault;if(t.display){var o=e.ctx,s=this.getIndexAngle(0),u=i(r.fontSize,p.defaultFontSize),l=i(r.fontStyle,p.defaultFontStyle),d=i(r.fontFamily,p.defaultFontFamily),c=a.fontString(u,l,d);a.each(e.ticks,function(t,a){
// Don't draw a centre value (if it is minimum)
if(a>0||r.reverse){var l=e.getDistanceFromCenterForValue(e.ticksAsNumbers[a]);if(
// Draw circular lines around the scale
n.display&&0!==a&&m(e,n,l,a),r.display){var d=i(r.fontColor,p.defaultFontColor);if(o.font=c,o.save(),o.translate(e.xCenter,e.yCenter),o.rotate(s),r.showLabelBackdrop){var f=o.measureText(t).width;o.fillStyle=r.backdropColor,o.fillRect(-f/2-r.backdropPaddingX,-l-u/2-r.backdropPaddingY,f+2*r.backdropPaddingX,u+2*r.backdropPaddingY)}o.textAlign="center",o.textBaseline="middle",o.fillStyle=d,o.fillText(t,0,-l),o.restore()}}}),(t.angleLines.display||t.pointLabels.display)&&h(e)}}});e.scaleService.registerScaleType("radialLinear",v,y)}},/* 484 */
/***/
function(e,t,n){"use strict";function r(e,t){return e-t}function a(e){var t,n,r,a={},i=[];for(t=0,n=e.length;t<n;++t)r=e[t],a[r]||(a[r]=!0,i.push(r));return i}/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function i(e,t,n,r){if("linear"===r||!e.length)return[{time:t,pos:0},{time:n,pos:1}];var a,i,o,s,u,l=[],d=[t];for(a=0,i=e.length;a<i;++a)(s=e[a])>t&&s<n&&d.push(s);for(d.push(n),a=0,i=d.length;a<i;++a)u=d[a+1],o=d[a-1],s=d[a],
// only add points that breaks the scale linearity
void 0!==o&&void 0!==u&&Math.round((u+o)/2)===s||l.push({time:s,pos:a/(i-1)});return l}
// @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function o(e,t,n){for(var r,a,i,o=0,s=e.length-1;o>=0&&o<=s;){if(r=o+s>>1,a=e[r-1]||null,i=e[r],!a)
// given value is outside table (before first item)
return{lo:null,hi:i};if(i[t]<n)o=r+1;else{if(!(a[t]>n))return{lo:a,hi:i};s=r-1}}
// given value is outside table (after last item)
return{lo:i,hi:null}}/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function s(e,t,n,r){var a=o(e,t,n),i=a.lo?a.hi?a.lo:e[e.length-2]:e[0],s=a.lo?a.hi?a.hi:e[e.length-1]:e[1],u=s[t]-i[t],l=u?(n-i[t])/u:0,d=(s[r]-i[r])*l;return i[r]+d}/**
 * Convert the given value to a moment object using the given time options.
 * @see http://momentjs.com/docs/#/parsing/
 */
function u(e,t){var n=t.parser,r=t.parser||t.format;
// Labels are in an incompatible moment format and no `parser` has been provided.
// The user might still use the deprecated `format` option to convert his inputs.
return"function"==typeof n?n(e):"string"==typeof e&&"string"==typeof r?v(e,r):(e instanceof v||(e=v(e)),e.isValid()?e:"function"==typeof r?r(e):e)}function l(e,t){if(M.isNullOrUndef(e))return null;var n=t.options.time,r=u(t.getRightValue(e),n);return r.isValid()?(n.round&&r.startOf(n.round),r.valueOf()):null}/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */
function d(e,t,n,r){var a,i,o,s=t-e,u=k[n],l=u.size,d=u.steps;if(!d)return Math.ceil(s/(r*l));for(a=0,i=d.length;a<i&&(o=d[a],!(Math.ceil(s/(l*o))<=r));++a);return o}/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function c(e,t,n,r){var a,i,o,s=Y.length;for(a=Y.indexOf(e);a<s-1;++a)if(i=k[Y[a]],o=i.steps?i.steps[i.steps.length-1]:L,i.common&&Math.ceil((n-t)/(o*i.size))<=r)return Y[a];return Y[s-1]}/**
 * Figures out what unit to format a set of ticks with
 */
function f(e,t,n,r){var a,i,o=v.duration(v(r).diff(v(n))),s=Y.length;for(a=s-1;a>=Y.indexOf(t);a--)if(i=Y[a],k[i].common&&o.as(i)>=e.length)return i;return Y[t?Y.indexOf(t):0]}function h(e){for(var t=Y.indexOf(e)+1,n=Y.length;t<n;++t)if(k[Y[t]].common)return Y[t]}/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function m(e,t,n,r){var a,i=r.time,o=i.unit||c(i.minUnit,e,t,n),s=h(o),u=M.valueOrDefault(i.stepSize,i.unitStepSize),l="week"===o&&i.isoWeekday,f=r.ticks.major.enabled,m=k[o],_=v(e),p=v(t),y=[];for(u||(u=d(e,t,o,n)),
// For 'week' unit, handle the first day of week option
l&&(_=_.isoWeekday(l),p=p.isoWeekday(l)),
// Align first/last ticks on unit
_=_.startOf(l?"day":o),p=p.startOf(l?"day":o),
// Make sure that the last tick include max
p<t&&p.add(1,o),a=v(_),f&&s&&!l&&!i.round&&(
// Align the first tick on the previous `minor` unit aligned on the `major` unit:
// we first aligned time on the previous `major` unit then add the number of full
// stepSize there is between first and the previous major time.
a.startOf(s),a.add(~~((_-a)/(m.size*u))*u,o));a<p;a.add(u,o))y.push(+a);return y.push(+a),y}/**
 * Returns the right and left offsets from edges in the form of {left, right}.
 * Offsets are added when the `offset` option is true.
 */
function _(e,t,n,r,a){var i,o,u=0,l=0;return a.offset&&t.length&&(a.time.min||(i=t.length>1?t[1]:r,o=t[0],u=(s(e,"time",i,"pos")-s(e,"time",o,"pos"))/2),a.time.max||(i=t[t.length-1],o=t.length>1?t[t.length-2]:n,l=(s(e,"time",i,"pos")-s(e,"time",o,"pos"))/2)),{left:u,right:l}}function p(e,t){var n,r,a,i,o=[];for(n=0,r=e.length;n<r;++n)a=e[n],i=!!t&&a===+v(a).startOf(t),o.push({value:a,major:i});return o}function y(e,t){var n,r,a,i=e.length;
// find the label with the most parts (milliseconds, minutes, etc.)
// format all labels with the same level of detail as the most specific label
for(n=0;n<i;n++){if(r=u(e[n],t),0!==r.millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===r.second()&&0===r.minute()&&0===r.hour()||(a=!0)}return a?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}/* global window: false */
var v=n(1);v="function"==typeof v?v:window.moment;var g=n(8),M=n(5),b=Number.MIN_SAFE_INTEGER||-9007199254740991,L=Number.MAX_SAFE_INTEGER||9007199254740991,k={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},Y=Object.keys(k);e.exports=function(e){var t={position:"bottom",/**
		 * Data distribution along the scale:
		 * - 'linear': data are spread according to their time (distances can vary),
		 * - 'series': data are spread at the same distance from each other.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
distribution:"linear",/**
		 * Scale boundary strategy (bypassed by min/max time options)
		 * - `data`: make sure data are fully visible, ticks outside are removed
		 * - `ticks`: make sure ticks are fully visible, data outside are truncated
		 * @see https://github.com/chartjs/Chart.js/pull/4556
		 * @since 2.7.0
		 */
bounds:"data",time:{parser:!1,// false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
format:!1,// DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
unit:!1,// false == automatic or override with week, month, year, etc.
round:!1,// none, or override with week, month, year, etc.
displayFormat:!1,// DEPRECATED
isoWeekday:!1,// override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
minUnit:"millisecond",
// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
displayFormats:{millisecond:"h:mm:ss.SSS a",// 11:20:01.123 AM,
second:"h:mm:ss a",// 11:20:01 AM
minute:"h:mm a",// 11:20 AM
hour:"hA",// 5PM
day:"MMM D",// Sep 4
week:"ll",// Week 46, or maybe "[W]WW - YYYY" ?
month:"MMM YYYY",// Sept 2015
quarter:"[Q]Q - YYYY",// Q3
year:"YYYY"}},ticks:{autoSkip:!1,/**
			 * Ticks generation input values:
			 * - 'auto': generates "optimal" ticks based on scale size and time options.
			 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
			 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			 * @see https://github.com/chartjs/Chart.js/pull/4507
			 * @since 2.7.0
			 */
source:"auto",major:{enabled:!1}}},n=e.Scale.extend({initialize:function(){if(!v)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),e.Scale.prototype.initialize.call(this)},update:function(){var t=this,n=t.options;
// DEPRECATIONS: output a message only one time per update
return n.time&&n.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),e.Scale.prototype.update.apply(t,arguments)},/**
		 * Allows data to be referenced via 't' attribute
		 */
getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),e.Scale.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var e,t,n,i,o,s,u=this,d=u.chart,c=u.options.time,f=c.unit||"day",h=L,m=b,_=[],p=[],y=[];
// Convert labels to timestamps
for(e=0,n=d.data.labels.length;e<n;++e)y.push(l(d.data.labels[e],u));
// Convert data to timestamps
for(e=0,n=(d.data.datasets||[]).length;e<n;++e)if(d.isDatasetVisible(e))
// Let's consider that all data have the same format.
if(o=d.data.datasets[e].data,M.isObject(o[0]))for(p[e]=[],t=0,i=o.length;t<i;++t)s=l(o[t],u),_.push(s),p[e][t]=s;else _.push.apply(_,y),p[e]=y.slice(0);else p[e]=[];y.length&&(
// Sort labels **after** data have been converted
y=a(y).sort(r),h=Math.min(h,y[0]),m=Math.max(m,y[y.length-1])),_.length&&(_=a(_).sort(r),h=Math.min(h,_[0]),m=Math.max(m,_[_.length-1])),h=l(c.min,u)||h,m=l(c.max,u)||m,
// In case there is no valid min/max, set limits based on unit time option
h=h===L?+v().startOf(f):h,m=m===b?+v().endOf(f)+1:m,
// Make sure that max is strictly higher than min (required by the lookup table)
u.min=Math.min(h,m),u.max=Math.max(h+1,m),
// PRIVATE
u._horizontal=u.isHorizontal(),u._table=[],u._timestamps={data:_,datasets:p,labels:y}},buildTicks:function(){var e,t,n,r=this,a=r.min,o=r.max,s=r.options,u=s.time,d=[],c=[];switch(s.ticks.source){case"data":d=r._timestamps.data;break;case"labels":d=r._timestamps.labels;break;case"auto":default:d=m(a,o,r.getLabelCapacity(a),s)}
// Remove ticks outside the min/max range
for("ticks"===s.bounds&&d.length&&(a=d[0],o=d[d.length-1]),
// Enforce limits with user min/max options
a=l(u.min,r)||a,o=l(u.max,r)||o,e=0,t=d.length;e<t;++e)(n=d[e])>=a&&n<=o&&c.push(n);
// PRIVATE
return r.min=a,r.max=o,r._unit=u.unit||f(c,u.minUnit,r.min,r.max),r._majorUnit=h(r._unit),r._table=i(r._timestamps.data,a,o,s.distribution),r._offsets=_(r._table,c,a,o,s),r._labelFormat=y(r._timestamps.data,u),p(c,r._majorUnit)},getLabelForIndex:function(e,t){var n=this,r=n.chart.data,a=n.options.time,i=r.labels&&e<r.labels.length?r.labels[e]:"",o=r.datasets[t].data[e];return M.isObject(o)&&(i=n.getRightValue(o)),a.tooltipFormat?u(i,a).format(a.tooltipFormat):"string"==typeof i?i:u(i,a).format(n._labelFormat)},/**
		 * Function to format an individual tick mark
		 * @private
		 */
tickFormatFunction:function(e,t,n,r){var a=this,i=a.options,o=e.valueOf(),s=i.time.displayFormats,u=s[a._unit],l=a._majorUnit,d=s[l],c=e.clone().startOf(l).valueOf(),f=i.ticks.major,h=f.enabled&&l&&d&&o===c,m=e.format(r||(h?d:u)),_=h?f:i.ticks.minor,p=M.valueOrDefault(_.callback,_.userCallback);return p?p(m,t,n):m},convertTicksToLabels:function(e){var t,n,r=[];for(t=0,n=e.length;t<n;++t)r.push(this.tickFormatFunction(v(e[t].value),t,e));return r},/**
		 * @private
		 */
getPixelForOffset:function(e){var t=this,n=t._horizontal?t.width:t.height,r=t._horizontal?t.left:t.top,a=s(t._table,"time",e,"pos");return r+n*(t._offsets.left+a)/(t._offsets.left+1+t._offsets.right)},getPixelForValue:function(e,t,n){var r=this,a=null;if(void 0!==t&&void 0!==n&&(a=r._timestamps.datasets[n][t]),null===a&&(a=l(e,r)),null!==a)return r.getPixelForOffset(a)},getPixelForTick:function(e){var t=this.getTicks();return e>=0&&e<t.length?this.getPixelForOffset(t[e].value):null},getValueForPixel:function(e){var t=this,n=t._horizontal?t.width:t.height,r=t._horizontal?t.left:t.top,a=(n?(e-r)/n:0)*(t._offsets.left+1+t._offsets.left)-t._offsets.right,i=s(t._table,"pos",a,"time");return v(i)},/**
		 * Crude approximation of what the label width might be
		 * @private
		 */
getLabelWidth:function(e){var t=this,n=t.options.ticks,r=t.ctx.measureText(e).width,a=M.toRadians(n.maxRotation),i=Math.cos(a),o=Math.sin(a);return r*i+M.valueOrDefault(n.fontSize,g.global.defaultFontSize)*o},/**
		 * @private
		 */
getLabelCapacity:function(e){var t=this,n=t.options.time.displayFormats.millisecond,r=t.tickFormatFunction(v(e),0,[],n),a=t.getLabelWidth(r),i=t.isHorizontal()?t.width:t.height,o=Math.floor(i/a);return o>0?o:1}});e.scaleService.registerScaleType("time",n,t)}},/* 485 */
/***/
function(e,t,n){function r(e){return n(a(e))}function a(e){var t=i[e];if(!(t+1))// check for number or string
throw new Error("Cannot find module '"+e+"'.");return t}var i={"./af":204,"./af.js":204,"./ar":205,"./ar-dz":206,"./ar-dz.js":206,"./ar-kw":207,"./ar-kw.js":207,"./ar-ly":208,"./ar-ly.js":208,"./ar-ma":209,"./ar-ma.js":209,"./ar-sa":210,"./ar-sa.js":210,"./ar-tn":211,"./ar-tn.js":211,"./ar.js":205,"./az":212,"./az.js":212,"./be":213,"./be.js":213,"./bg":214,"./bg.js":214,"./bm":215,"./bm.js":215,"./bn":216,"./bn.js":216,"./bo":217,"./bo.js":217,"./br":218,"./br.js":218,"./bs":219,"./bs.js":219,"./ca":220,"./ca.js":220,"./cs":221,"./cs.js":221,"./cv":222,"./cv.js":222,"./cy":223,"./cy.js":223,"./da":224,"./da.js":224,"./de":225,"./de-at":226,"./de-at.js":226,"./de-ch":227,"./de-ch.js":227,"./de.js":225,"./dv":228,"./dv.js":228,"./el":229,"./el.js":229,"./en-au":230,"./en-au.js":230,"./en-ca":231,"./en-ca.js":231,"./en-gb":232,"./en-gb.js":232,"./en-ie":233,"./en-ie.js":233,"./en-il":234,"./en-il.js":234,"./en-nz":235,"./en-nz.js":235,"./eo":236,"./eo.js":236,"./es":237,"./es-do":238,"./es-do.js":238,"./es-us":239,"./es-us.js":239,"./es.js":237,"./et":240,"./et.js":240,"./eu":241,"./eu.js":241,"./fa":242,"./fa.js":242,"./fi":243,"./fi.js":243,"./fo":244,"./fo.js":244,"./fr":245,"./fr-ca":246,"./fr-ca.js":246,"./fr-ch":247,"./fr-ch.js":247,"./fr.js":245,"./fy":248,"./fy.js":248,"./gd":249,"./gd.js":249,"./gl":250,"./gl.js":250,"./gom-latn":251,"./gom-latn.js":251,"./gu":252,"./gu.js":252,"./he":253,"./he.js":253,"./hi":254,"./hi.js":254,"./hr":255,"./hr.js":255,"./hu":256,"./hu.js":256,"./hy-am":257,"./hy-am.js":257,"./id":258,"./id.js":258,"./is":259,"./is.js":259,"./it":260,"./it.js":260,"./ja":261,"./ja.js":261,"./jv":262,"./jv.js":262,"./ka":263,"./ka.js":263,"./kk":264,"./kk.js":264,"./km":265,"./km.js":265,"./kn":266,"./kn.js":266,"./ko":267,"./ko.js":267,"./ky":268,"./ky.js":268,"./lb":269,"./lb.js":269,"./lo":270,"./lo.js":270,"./lt":271,"./lt.js":271,"./lv":272,"./lv.js":272,"./me":273,"./me.js":273,"./mi":274,"./mi.js":274,"./mk":275,"./mk.js":275,"./ml":276,"./ml.js":276,"./mn":277,"./mn.js":277,"./mr":278,"./mr.js":278,"./ms":279,"./ms-my":280,"./ms-my.js":280,"./ms.js":279,"./mt":281,"./mt.js":281,"./my":282,"./my.js":282,"./nb":283,"./nb.js":283,"./ne":284,"./ne.js":284,"./nl":285,"./nl-be":286,"./nl-be.js":286,"./nl.js":285,"./nn":287,"./nn.js":287,"./pa-in":288,"./pa-in.js":288,"./pl":289,"./pl.js":289,"./pt":290,"./pt-br":291,"./pt-br.js":291,"./pt.js":290,"./ro":292,"./ro.js":292,"./ru":293,"./ru.js":293,"./sd":294,"./sd.js":294,"./se":295,"./se.js":295,"./si":296,"./si.js":296,"./sk":297,"./sk.js":297,"./sl":298,"./sl.js":298,"./sq":299,"./sq.js":299,"./sr":300,"./sr-cyrl":301,"./sr-cyrl.js":301,"./sr.js":300,"./ss":302,"./ss.js":302,"./sv":303,"./sv.js":303,"./sw":304,"./sw.js":304,"./ta":305,"./ta.js":305,"./te":306,"./te.js":306,"./tet":307,"./tet.js":307,"./tg":308,"./tg.js":308,"./th":309,"./th.js":309,"./tl-ph":310,"./tl-ph.js":310,"./tlh":311,"./tlh.js":311,"./tr":312,"./tr.js":312,"./tzl":313,"./tzl.js":313,"./tzm":314,"./tzm-latn":315,"./tzm-latn.js":315,"./tzm.js":314,"./ug-cn":316,"./ug-cn.js":316,"./uk":317,"./uk.js":317,"./ur":318,"./ur.js":318,"./uz":319,"./uz-latn":320,"./uz-latn.js":320,"./uz.js":319,"./vi":321,"./vi.js":321,"./x-pseudo":322,"./x-pseudo.js":322,"./yo":323,"./yo.js":323,"./zh-cn":324,"./zh-cn.js":324,"./zh-hk":325,"./zh-hk.js":325,"./zh-tw":326,"./zh-tw.js":326};r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=485},/* 486 */
/***/
function(e,t,n){"use strict";/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */
function r(e,t){var n,r,a,i,o=e.isHorizontal()?e.width:e.height,s=e.getTicks();for(a=1,i=t.length;a<i;++a)o=Math.min(o,t[a]-t[a-1]);for(a=0,i=s.length;a<i;++a)r=e.getPixelForTick(a),o=a>0?Math.min(o,r-n):o,n=r;return o}/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */
function a(e,t,n){var r,a,i=n.barThickness,o=t.stackCount,s=t.pixels[e];
// When bar thickness is enforced, category and bar percentages are ignored.
// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
// and deprecate barPercentage since this value is ignored when thickness is absolute.
return u.isNullOrUndef(i)?(r=t.min*n.categoryPercentage,a=n.barPercentage):(r=i*o,a=1),{chunk:r/o,ratio:a,start:s-r/2}}/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */
function i(e,t,n){var r,a,i=t.pixels,o=i[e],s=e>0?i[e-1]:null,u=e<i.length-1?i[e+1]:null,l=n.categoryPercentage;
// first data: its size is double based on the next point or,
// if it's also the last data, we use the scale end extremity.
// last data: its size is also double based on the previous point.
return null===s&&(s=o-(null===u?t.end-o:u-o)),null===u&&(u=o+o-s),r=o-(o-s)/2*l,a=(u-s)/2*l,{chunk:a/t.stackCount,ratio:n.barPercentage,start:r}}var o=n(8),s=n(45),u=n(5);o._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",
// Specific to Bar Controller
categoryPercentage:.8,barPercentage:.9,
// offset settings
offset:!0,
// grid line settings
gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),o._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",
// Specific to Horizontal Bar Controller
categoryPercentage:.8,barPercentage:.9,
// offset settings
offset:!0,
// grid line settings
gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(e,t){
// Pick first xLabel for now
var n="";return e.length>0&&(e[0].yLabel?n=e[0].yLabel:t.labels.length>0&&e[0].index<t.labels.length&&(n=t.labels[e[0].index])),n},label:function(e,t){return(t.datasets[e.datasetIndex].label||"")+": "+e.xLabel}},mode:"index",axis:"y"}}),e.exports=function(e){e.controllers.bar=e.DatasetController.extend({dataElementType:s.Rectangle,initialize:function(){var t,n=this;e.DatasetController.prototype.initialize.apply(n,arguments),t=n.getMeta(),t.stack=n.getDataset().stack,t.bar=!0},update:function(e){var t,n,r=this,a=r.getMeta().data;for(r._ruler=r.getRuler(),t=0,n=a.length;t<n;++t)r.updateElement(a[t],t,e)},updateElement:function(e,t,n){var r=this,a=r.chart,i=r.getMeta(),o=r.getDataset(),s=e.custom||{},l=a.options.elements.rectangle;e._xScale=r.getScaleForId(i.xAxisID),e._yScale=r.getScaleForId(i.yAxisID),e._datasetIndex=r.index,e._index=t,e._model={datasetLabel:o.label,label:a.data.labels[t],borderSkipped:s.borderSkipped?s.borderSkipped:l.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:u.valueAtIndexOrDefault(o.backgroundColor,t,l.backgroundColor),borderColor:s.borderColor?s.borderColor:u.valueAtIndexOrDefault(o.borderColor,t,l.borderColor),borderWidth:s.borderWidth?s.borderWidth:u.valueAtIndexOrDefault(o.borderWidth,t,l.borderWidth)},r.updateElementGeometry(e,t,n),e.pivot()},/**
		 * @private
		 */
updateElementGeometry:function(e,t,n){var r=this,a=e._model,i=r.getValueScale(),o=i.getBasePixel(),s=i.isHorizontal(),u=r._ruler||r.getRuler(),l=r.calculateBarValuePixels(r.index,t),d=r.calculateBarIndexPixels(r.index,t,u);a.horizontal=s,a.base=n?o:l.base,a.x=s?n?o:l.head:d.center,a.y=s?d.center:n?o:l.head,a.height=s?d.size:void 0,a.width=s?void 0:d.size},/**
		 * @private
		 */
getValueScaleId:function(){return this.getMeta().yAxisID},/**
		 * @private
		 */
getIndexScaleId:function(){return this.getMeta().xAxisID},/**
		 * @private
		 */
getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},/**
		 * @private
		 */
getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},/**
		 * Returns the stacks based on groups and bar visibility.
		 * @param {Number} [last] - The dataset index
		 * @returns {Array} The stack list
		 * @private
		 */
_getStacks:function(e){var t,n,r=this,a=r.chart,i=r.getIndexScale(),o=i.options.stacked,s=void 0===e?a.data.datasets.length:e+1,u=[];for(t=0;t<s;++t)n=a.getDatasetMeta(t),n.bar&&a.isDatasetVisible(t)&&(!1===o||!0===o&&-1===u.indexOf(n.stack)||void 0===o&&(void 0===n.stack||-1===u.indexOf(n.stack)))&&u.push(n.stack);return u},/**
		 * Returns the effective number of stacks based on groups and bar visibility.
		 * @private
		 */
getStackCount:function(){return this._getStacks().length},/**
		 * Returns the stack index for the given dataset based on groups and bar visibility.
		 * @param {Number} [datasetIndex] - The dataset index
		 * @param {String} [name] - The stack name to find
		 * @returns {Number} The stack index
		 * @private
		 */
getStackIndex:function(e,t){var n=this._getStacks(e),r=void 0!==t?n.indexOf(t):-1;// indexOf returns -1 if element is not present
return-1===r?n.length-1:r},/**
		 * @private
		 */
getRuler:function(){var e,t,n,a=this,i=a.getIndexScale(),o=a.getStackCount(),s=a.index,l=i.isHorizontal(),d=l?i.left:i.top,c=d+(l?i.width:i.height),f=[];for(e=0,t=a.getMeta().data.length;e<t;++e)f.push(i.getPixelForValue(null,e,s));return n=u.isNullOrUndef(i.options.barThickness)?r(i,f):-1,{min:n,pixels:f,start:d,end:c,stackCount:o,scale:i}},/**
		 * Note: pixel values are not clamped to the scale area.
		 * @private
		 */
calculateBarValuePixels:function(e,t){var n,r,a,i,o,s,u=this,l=u.chart,d=u.getMeta(),c=u.getValueScale(),f=l.data.datasets,h=c.getRightValue(f[e].data[t]),m=c.options.stacked,_=d.stack,p=0;if(m||void 0===m&&void 0!==_)for(n=0;n<e;++n)r=l.getDatasetMeta(n),r.bar&&r.stack===_&&r.controller.getValueScaleId()===c.id&&l.isDatasetVisible(n)&&(a=c.getRightValue(f[n].data[t]),(h<0&&a<0||h>=0&&a>0)&&(p+=a));return i=c.getPixelForValue(p),o=c.getPixelForValue(p+h),s=(o-i)/2,{size:s,base:i,head:o,center:o+s/2}},/**
		 * @private
		 */
calculateBarIndexPixels:function(e,t,n){var r=this,o=n.scale.options,s="flex"===o.barThickness?i(t,n,o):a(t,n,o),l=r.getStackIndex(e,r.getMeta().stack),d=s.start+s.chunk*l+s.chunk/2,c=Math.min(u.valueOrDefault(o.maxBarThickness,1/0),s.chunk*s.ratio);return{base:d-c/2,head:d+c/2,center:d,size:c}},draw:function(){var e=this,t=e.chart,n=e.getValueScale(),r=e.getMeta().data,a=e.getDataset(),i=r.length,o=0;for(u.canvas.clipArea(t.ctx,t.chartArea);o<i;++o)isNaN(n.getRightValue(a.data[o]))||r[o].draw();u.canvas.unclipArea(t.ctx)},setHoverStyle:function(e){var t=this.chart.data.datasets[e._datasetIndex],n=e._index,r=e.custom||{},a=e._model;a.backgroundColor=r.hoverBackgroundColor?r.hoverBackgroundColor:u.valueAtIndexOrDefault(t.hoverBackgroundColor,n,u.getHoverColor(a.backgroundColor)),a.borderColor=r.hoverBorderColor?r.hoverBorderColor:u.valueAtIndexOrDefault(t.hoverBorderColor,n,u.getHoverColor(a.borderColor)),a.borderWidth=r.hoverBorderWidth?r.hoverBorderWidth:u.valueAtIndexOrDefault(t.hoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(e){var t=this.chart.data.datasets[e._datasetIndex],n=e._index,r=e.custom||{},a=e._model,i=this.chart.options.elements.rectangle;a.backgroundColor=r.backgroundColor?r.backgroundColor:u.valueAtIndexOrDefault(t.backgroundColor,n,i.backgroundColor),a.borderColor=r.borderColor?r.borderColor:u.valueAtIndexOrDefault(t.borderColor,n,i.borderColor),a.borderWidth=r.borderWidth?r.borderWidth:u.valueAtIndexOrDefault(t.borderWidth,n,i.borderWidth)}}),e.controllers.horizontalBar=e.controllers.bar.extend({/**
		 * @private
		 */
getValueScaleId:function(){return this.getMeta().xAxisID},/**
		 * @private
		 */
getIndexScaleId:function(){return this.getMeta().yAxisID}})}},/* 487 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(45),i=n(5);r._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",// bubble should probably use a linear scale by default
position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){
// Title doesn't make sense for scatter since we format the data as a point
return""},label:function(e,t){var n=t.datasets[e.datasetIndex].label||"",r=t.datasets[e.datasetIndex].data[e.index];return n+": ("+e.xLabel+", "+e.yLabel+", "+r.r+")"}}}}),e.exports=function(e){e.controllers.bubble=e.DatasetController.extend({/**
		 * @protected
		 */
dataElementType:a.Point,/**
		 * @protected
		 */
update:function(e){var t=this,n=t.getMeta(),r=n.data;
// Update Points
i.each(r,function(n,r){t.updateElement(n,r,e)})},/**
		 * @protected
		 */
updateElement:function(e,t,n){var r=this,a=r.getMeta(),i=e.custom||{},o=r.getScaleForId(a.xAxisID),s=r.getScaleForId(a.yAxisID),u=r._resolveElementOptions(e,t),l=r.getDataset().data[t],d=r.index,c=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof l?l:NaN,t,d),f=n?s.getBasePixel():s.getPixelForValue(l,t,d);e._xScale=o,e._yScale=s,e._options=u,e._datasetIndex=d,e._index=t,e._model={backgroundColor:u.backgroundColor,borderColor:u.borderColor,borderWidth:u.borderWidth,hitRadius:u.hitRadius,pointStyle:u.pointStyle,radius:n?0:u.radius,skip:i.skip||isNaN(c)||isNaN(f),x:c,y:f},e.pivot()},/**
		 * @protected
		 */
setHoverStyle:function(e){var t=e._model,n=e._options;t.backgroundColor=i.valueOrDefault(n.hoverBackgroundColor,i.getHoverColor(n.backgroundColor)),t.borderColor=i.valueOrDefault(n.hoverBorderColor,i.getHoverColor(n.borderColor)),t.borderWidth=i.valueOrDefault(n.hoverBorderWidth,n.borderWidth),t.radius=n.radius+n.hoverRadius},/**
		 * @protected
		 */
removeHoverStyle:function(e){var t=e._model,n=e._options;t.backgroundColor=n.backgroundColor,t.borderColor=n.borderColor,t.borderWidth=n.borderWidth,t.radius=n.radius},/**
		 * @private
		 */
_resolveElementOptions:function(e,t){var n,r,a,o=this,s=o.chart,u=s.data.datasets,l=u[o.index],d=e.custom||{},c=s.options.elements.point,f=i.options.resolve,h=l.data[t],m={},_={chart:s,dataIndex:t,dataset:l,datasetIndex:o.index},p=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(n=0,r=p.length;n<r;++n)a=p[n],m[a]=f([d[a],l[a],c[a]],_,t);
// Custom radius resolution
return m.radius=f([d.radius,h?h.r:void 0,l.radius,c.radius],_,t),m}})}},/* 488 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(45),i=n(5);r._set("doughnut",{animation:{
// Boolean - Whether we animate the rotation of the Doughnut
animateRotate:!0,
// Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:!1},hover:{mode:"single"},legendCallback:function(e){var t=[];t.push('<ul class="'+e.id+'-legend">');var n=e.data,r=n.datasets,a=n.labels;if(r.length)for(var i=0;i<r[0].data.length;++i)t.push('<li><span style="background-color:'+r[0].backgroundColor[i]+'"></span>'),a[i]&&t.push(a[i]),t.push("</li>");return t.push("</ul>"),t.join("")},legend:{labels:{generateLabels:function(e){var t=e.data;return t.labels.length&&t.datasets.length?t.labels.map(function(n,r){var a=e.getDatasetMeta(0),o=t.datasets[0],s=a.data[r],u=s&&s.custom||{},l=i.valueAtIndexOrDefault,d=e.options.elements.arc;return{text:n,fillStyle:u.backgroundColor?u.backgroundColor:l(o.backgroundColor,r,d.backgroundColor),strokeStyle:u.borderColor?u.borderColor:l(o.borderColor,r,d.borderColor),lineWidth:u.borderWidth?u.borderWidth:l(o.borderWidth,r,d.borderWidth),hidden:isNaN(o.data[r])||a.data[r].hidden,
// Extra data used for toggling the correct item
index:r}}):[]}},onClick:function(e,t){var n,r,a,i=t.index,o=this.chart;for(n=0,r=(o.data.datasets||[]).length;n<r;++n)a=o.getDatasetMeta(n),
// toggle visibility of index if exists
a.data[i]&&(a.data[i].hidden=!a.data[i].hidden);o.update()}},
// The percentage of the chart that we cut out of the middle.
cutoutPercentage:50,
// The rotation of the chart, where the first data arc begins.
rotation:-.5*Math.PI,
// The total circumference of the chart.
circumference:2*Math.PI,
// Need to override these to give a nice default
tooltips:{callbacks:{title:function(){return""},label:function(e,t){var n=t.labels[e.index],r=": "+t.datasets[e.datasetIndex].data[e.index];
// show value on first line of multiline label
// need to clone because we are changing the value
return i.isArray(n)?(n=n.slice(),n[0]+=r):n+=r,n}}}}),r._set("pie",i.clone(r.doughnut)),r._set("pie",{cutoutPercentage:0}),e.exports=function(e){e.controllers.doughnut=e.controllers.pie=e.DatasetController.extend({dataElementType:a.Arc,linkScales:i.noop,
// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
getRingIndex:function(e){for(var t=0,n=0;n<e;++n)this.chart.isDatasetVisible(n)&&++t;return t},update:function(e){var t=this,n=t.chart,r=n.chartArea,a=n.options,o=a.elements.arc,s=r.right-r.left-o.borderWidth,u=r.bottom-r.top-o.borderWidth,l=Math.min(s,u),d={x:0,y:0},c=t.getMeta(),f=a.cutoutPercentage,h=a.circumference;
// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
if(h<2*Math.PI){var m=a.rotation%(2*Math.PI);m+=2*Math.PI*(m>=Math.PI?-1:m<-Math.PI?1:0);var _=m+h,p={x:Math.cos(m),y:Math.sin(m)},y={x:Math.cos(_),y:Math.sin(_)},v=m<=0&&_>=0||m<=2*Math.PI&&2*Math.PI<=_,g=m<=.5*Math.PI&&.5*Math.PI<=_||m<=2.5*Math.PI&&2.5*Math.PI<=_,M=m<=-Math.PI&&-Math.PI<=_||m<=Math.PI&&Math.PI<=_,b=m<=.5*-Math.PI&&.5*-Math.PI<=_||m<=1.5*Math.PI&&1.5*Math.PI<=_,L=f/100,k={x:M?-1:Math.min(p.x*(p.x<0?1:L),y.x*(y.x<0?1:L)),y:b?-1:Math.min(p.y*(p.y<0?1:L),y.y*(y.y<0?1:L))},Y={x:v?1:Math.max(p.x*(p.x>0?1:L),y.x*(y.x>0?1:L)),y:g?1:Math.max(p.y*(p.y>0?1:L),y.y*(y.y>0?1:L))},w={width:.5*(Y.x-k.x),height:.5*(Y.y-k.y)};l=Math.min(s/w.width,u/w.height),d={x:-.5*(Y.x+k.x),y:-.5*(Y.y+k.y)}}n.borderWidth=t.getMaxBorderWidth(c.data),n.outerRadius=Math.max((l-n.borderWidth)/2,0),n.innerRadius=Math.max(f?n.outerRadius/100*f:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=d.x*n.outerRadius,n.offsetY=d.y*n.outerRadius,c.total=t.calculateTotal(),t.outerRadius=n.outerRadius-n.radiusLength*t.getRingIndex(t.index),t.innerRadius=Math.max(t.outerRadius-n.radiusLength,0),i.each(c.data,function(n,r){t.updateElement(n,r,e)})},updateElement:function(e,t,n){var r=this,a=r.chart,o=a.chartArea,s=a.options,u=s.animation,l=(o.left+o.right)/2,d=(o.top+o.bottom)/2,c=s.rotation,f=s.rotation,h=r.getDataset(),m=n&&u.animateRotate?0:e.hidden?0:r.calculateCircumference(h.data[t])*(s.circumference/(2*Math.PI)),_=n&&u.animateScale?0:r.innerRadius,p=n&&u.animateScale?0:r.outerRadius,y=i.valueAtIndexOrDefault;i.extend(e,{
// Utility
_datasetIndex:r.index,_index:t,
// Desired view properties
_model:{x:l+a.offsetX,y:d+a.offsetY,startAngle:c,endAngle:f,circumference:m,outerRadius:p,innerRadius:_,label:y(h.label,t,a.data.labels[t])}});var v=e._model;
// Resets the visual styles
this.removeHoverStyle(e),
// Set correct angles if not resetting
n&&u.animateRotate||(v.startAngle=0===t?s.rotation:r.getMeta().data[t-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),e.pivot()},removeHoverStyle:function(t){e.DatasetController.prototype.removeHoverStyle.call(this,t,this.chart.options.elements.arc)},calculateTotal:function(){var e,t=this.getDataset(),n=this.getMeta(),r=0;/* if (total === 0) {
				total = NaN;
			}*/
return i.each(n.data,function(n,a){e=t.data[a],isNaN(e)||n.hidden||(r+=Math.abs(e))}),r},calculateCircumference:function(e){var t=this.getMeta().total;return t>0&&!isNaN(e)?2*Math.PI*(Math.abs(e)/t):0},
// gets the max border or hover width to properly scale pie charts
getMaxBorderWidth:function(e){for(var t,n,r=0,a=this.index,i=e.length,o=0;o<i;o++)t=e[o]._model?e[o]._model.borderWidth:0,n=e[o]._chart?e[o]._chart.config.data.datasets[a].hoverBorderWidth:0,r=t>r?t:r,r=n>r?n:r;return r}})}},/* 489 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(45),i=n(5);r._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(e){function t(e,t){return i.valueOrDefault(e.showLine,t.showLines)}e.controllers.line=e.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,update:function(e){var n,r,a,o=this,s=o.getMeta(),u=s.dataset,l=s.data||[],d=o.chart.options,c=d.elements.line,f=o.getScaleForId(s.yAxisID),h=o.getDataset(),m=t(h,d);
// Update Points
for(
// Update Line
m&&(a=u.custom||{},
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==h.tension&&void 0===h.lineTension&&(h.lineTension=h.tension),
// Utility
u._scale=f,u._datasetIndex=o.index,
// Data
u._children=l,
// Model
u._model={
// Appearance
// The default behavior of lines is to break at null values, according
// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
// This option gives lines the ability to span gaps
spanGaps:h.spanGaps?h.spanGaps:d.spanGaps,tension:a.tension?a.tension:i.valueOrDefault(h.lineTension,c.tension),backgroundColor:a.backgroundColor?a.backgroundColor:h.backgroundColor||c.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:h.borderWidth||c.borderWidth,borderColor:a.borderColor?a.borderColor:h.borderColor||c.borderColor,borderCapStyle:a.borderCapStyle?a.borderCapStyle:h.borderCapStyle||c.borderCapStyle,borderDash:a.borderDash?a.borderDash:h.borderDash||c.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:h.borderDashOffset||c.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:h.borderJoinStyle||c.borderJoinStyle,fill:a.fill?a.fill:void 0!==h.fill?h.fill:c.fill,steppedLine:a.steppedLine?a.steppedLine:i.valueOrDefault(h.steppedLine,c.stepped),cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:i.valueOrDefault(h.cubicInterpolationMode,c.cubicInterpolationMode)},u.pivot()),n=0,r=l.length;n<r;++n)o.updateElement(l[n],n,e);
// Now pivot the point for animation
for(m&&0!==u._model.tension&&o.updateBezierControlPoints(),n=0,r=l.length;n<r;++n)l[n].pivot()},getPointBackgroundColor:function(e,t){var n=this.chart.options.elements.point.backgroundColor,r=this.getDataset(),a=e.custom||{};return a.backgroundColor?n=a.backgroundColor:r.pointBackgroundColor?n=i.valueAtIndexOrDefault(r.pointBackgroundColor,t,n):r.backgroundColor&&(n=r.backgroundColor),n},getPointBorderColor:function(e,t){var n=this.chart.options.elements.point.borderColor,r=this.getDataset(),a=e.custom||{};return a.borderColor?n=a.borderColor:r.pointBorderColor?n=i.valueAtIndexOrDefault(r.pointBorderColor,t,n):r.borderColor&&(n=r.borderColor),n},getPointBorderWidth:function(e,t){var n=this.chart.options.elements.point.borderWidth,r=this.getDataset(),a=e.custom||{};return isNaN(a.borderWidth)?!isNaN(r.pointBorderWidth)||i.isArray(r.pointBorderWidth)?n=i.valueAtIndexOrDefault(r.pointBorderWidth,t,n):isNaN(r.borderWidth)||(n=r.borderWidth):n=a.borderWidth,n},updateElement:function(e,t,n){var r,a,o=this,s=o.getMeta(),u=e.custom||{},l=o.getDataset(),d=o.index,c=l.data[t],f=o.getScaleForId(s.yAxisID),h=o.getScaleForId(s.xAxisID),m=o.chart.options.elements.point;
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==l.radius&&void 0===l.pointRadius&&(l.pointRadius=l.radius),void 0!==l.hitRadius&&void 0===l.pointHitRadius&&(l.pointHitRadius=l.hitRadius),r=h.getPixelForValue("object"==typeof c?c:NaN,t,d),a=n?f.getBasePixel():o.calculatePointY(c,t,d),
// Utility
e._xScale=h,e._yScale=f,e._datasetIndex=d,e._index=t,
// Desired view properties
e._model={x:r,y:a,skip:u.skip||isNaN(r)||isNaN(a),
// Appearance
radius:u.radius||i.valueAtIndexOrDefault(l.pointRadius,t,m.radius),pointStyle:u.pointStyle||i.valueAtIndexOrDefault(l.pointStyle,t,m.pointStyle),backgroundColor:o.getPointBackgroundColor(e,t),borderColor:o.getPointBorderColor(e,t),borderWidth:o.getPointBorderWidth(e,t),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,
// Tooltip
hitRadius:u.hitRadius||i.valueAtIndexOrDefault(l.pointHitRadius,t,m.hitRadius)}},calculatePointY:function(e,t,n){var r,a,i,o=this,s=o.chart,u=o.getMeta(),l=o.getScaleForId(u.yAxisID),d=0,c=0;if(l.options.stacked){for(r=0;r<n;r++)if(a=s.data.datasets[r],i=s.getDatasetMeta(r),"line"===i.type&&i.yAxisID===l.id&&s.isDatasetVisible(r)){var f=Number(l.getRightValue(a.data[t]));f<0?c+=f||0:d+=f||0}var h=Number(l.getRightValue(e));return h<0?l.getPixelForValue(c+h):l.getPixelForValue(d+h)}return l.getPixelForValue(e)},updateBezierControlPoints:function(){function e(e,t,n){return Math.max(Math.min(e,n),t)}var t,n,r,a,o,s=this,u=s.getMeta(),l=s.chart.chartArea,d=u.data||[];if(
// Only consider points that are drawn in case the spanGaps option is used
u.dataset._model.spanGaps&&(d=d.filter(function(e){return!e._model.skip})),"monotone"===u.dataset._model.cubicInterpolationMode)i.splineCurveMonotone(d);else for(t=0,n=d.length;t<n;++t)r=d[t],a=r._model,o=i.splineCurve(i.previousItem(d,t)._model,a,i.nextItem(d,t)._model,u.dataset._model.tension),a.controlPointPreviousX=o.previous.x,a.controlPointPreviousY=o.previous.y,a.controlPointNextX=o.next.x,a.controlPointNextY=o.next.y;if(s.chart.options.elements.line.capBezierPoints)for(t=0,n=d.length;t<n;++t)a=d[t]._model,a.controlPointPreviousX=e(a.controlPointPreviousX,l.left,l.right),a.controlPointPreviousY=e(a.controlPointPreviousY,l.top,l.bottom),a.controlPointNextX=e(a.controlPointNextX,l.left,l.right),a.controlPointNextY=e(a.controlPointNextY,l.top,l.bottom)},draw:function(){var e=this,n=e.chart,r=e.getMeta(),a=r.data||[],o=n.chartArea,s=a.length,u=0;
// Draw the points
for(i.canvas.clipArea(n.ctx,o),t(e.getDataset(),n.options)&&r.dataset.draw(),i.canvas.unclipArea(n.ctx);u<s;++u)a[u].draw(o)},setHoverStyle:function(e){
// Point
var t=this.chart.data.datasets[e._datasetIndex],n=e._index,r=e.custom||{},a=e._model;a.radius=r.hoverRadius||i.valueAtIndexOrDefault(t.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),a.backgroundColor=r.hoverBackgroundColor||i.valueAtIndexOrDefault(t.pointHoverBackgroundColor,n,i.getHoverColor(a.backgroundColor)),a.borderColor=r.hoverBorderColor||i.valueAtIndexOrDefault(t.pointHoverBorderColor,n,i.getHoverColor(a.borderColor)),a.borderWidth=r.hoverBorderWidth||i.valueAtIndexOrDefault(t.pointHoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(e){var t=this,n=t.chart.data.datasets[e._datasetIndex],r=e._index,a=e.custom||{},o=e._model;
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==n.radius&&void 0===n.pointRadius&&(n.pointRadius=n.radius),o.radius=a.radius||i.valueAtIndexOrDefault(n.pointRadius,r,t.chart.options.elements.point.radius),o.backgroundColor=t.getPointBackgroundColor(e,r),o.borderColor=t.getPointBorderColor(e,r),o.borderWidth=t.getPointBorderWidth(e,r)}})}},/* 490 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(45),i=n(5);r._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},
// Boolean - Whether to animate the rotation of the chart
animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(e){var t=[];t.push('<ul class="'+e.id+'-legend">');var n=e.data,r=n.datasets,a=n.labels;if(r.length)for(var i=0;i<r[0].data.length;++i)t.push('<li><span style="background-color:'+r[0].backgroundColor[i]+'"></span>'),a[i]&&t.push(a[i]),t.push("</li>");return t.push("</ul>"),t.join("")},legend:{labels:{generateLabels:function(e){var t=e.data;return t.labels.length&&t.datasets.length?t.labels.map(function(n,r){var a=e.getDatasetMeta(0),o=t.datasets[0],s=a.data[r],u=s.custom||{},l=i.valueAtIndexOrDefault,d=e.options.elements.arc;return{text:n,fillStyle:u.backgroundColor?u.backgroundColor:l(o.backgroundColor,r,d.backgroundColor),strokeStyle:u.borderColor?u.borderColor:l(o.borderColor,r,d.borderColor),lineWidth:u.borderWidth?u.borderWidth:l(o.borderWidth,r,d.borderWidth),hidden:isNaN(o.data[r])||a.data[r].hidden,
// Extra data used for toggling the correct item
index:r}}):[]}},onClick:function(e,t){var n,r,a,i=t.index,o=this.chart;for(n=0,r=(o.data.datasets||[]).length;n<r;++n)a=o.getDatasetMeta(n),a.data[i].hidden=!a.data[i].hidden;o.update()}},
// Need to override these to give a nice default
tooltips:{callbacks:{title:function(){return""},label:function(e,t){return t.labels[e.index]+": "+e.yLabel}}}}),e.exports=function(e){e.controllers.polarArea=e.DatasetController.extend({dataElementType:a.Arc,linkScales:i.noop,update:function(e){var t=this,n=t.chart,r=n.chartArea,a=t.getMeta(),o=n.options,s=o.elements.arc,u=Math.min(r.right-r.left,r.bottom-r.top);n.outerRadius=Math.max((u-s.borderWidth/2)/2,0),n.innerRadius=Math.max(o.cutoutPercentage?n.outerRadius/100*o.cutoutPercentage:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),t.outerRadius=n.outerRadius-n.radiusLength*t.index,t.innerRadius=t.outerRadius-n.radiusLength,a.count=t.countVisibleElements(),i.each(a.data,function(n,r){t.updateElement(n,r,e)})},updateElement:function(e,t,n){for(var r=this,a=r.chart,o=r.getDataset(),s=a.options,u=s.animation,l=a.scale,d=a.data.labels,c=r.calculateCircumference(o.data[t]),f=l.xCenter,h=l.yCenter,m=0,_=r.getMeta(),p=0;p<t;++p)isNaN(o.data[p])||_.data[p].hidden||++m;
// var negHalfPI = -0.5 * Math.PI;
var y=s.startAngle,v=e.hidden?0:l.getDistanceFromCenterForValue(o.data[t]),g=y+c*m,M=g+(e.hidden?0:c),b=u.animateScale?0:l.getDistanceFromCenterForValue(o.data[t]);i.extend(e,{
// Utility
_datasetIndex:r.index,_index:t,_scale:l,
// Desired view properties
_model:{x:f,y:h,innerRadius:0,outerRadius:n?b:v,startAngle:n&&u.animateRotate?y:g,endAngle:n&&u.animateRotate?y:M,label:i.valueAtIndexOrDefault(d,t,d[t])}}),
// Apply border and fill style
r.removeHoverStyle(e),e.pivot()},removeHoverStyle:function(t){e.DatasetController.prototype.removeHoverStyle.call(this,t,this.chart.options.elements.arc)},countVisibleElements:function(){var e=this.getDataset(),t=this.getMeta(),n=0;return i.each(t.data,function(t,r){isNaN(e.data[r])||t.hidden||n++}),n},calculateCircumference:function(e){var t=this.getMeta().count;return t>0&&!isNaN(e)?2*Math.PI/t:0}})}},/* 491 */
/***/
function(e,t,n){"use strict";var r=n(8),a=n(45),i=n(5);r._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(e){e.controllers.radar=e.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,linkScales:i.noop,update:function(e){var t=this,n=t.getMeta(),r=n.dataset,a=n.data,o=r.custom||{},s=t.getDataset(),u=t.chart.options.elements.line,l=t.chart.scale;
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),i.extend(n.dataset,{
// Utility
_datasetIndex:t.index,_scale:l,
// Data
_children:a,_loop:!0,
// Model
_model:{
// Appearance
tension:o.tension?o.tension:i.valueOrDefault(s.lineTension,u.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||u.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||u.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||u.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:u.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||u.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||u.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||u.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||u.borderJoinStyle}}),n.dataset.pivot(),
// Update Points
i.each(a,function(n,r){t.updateElement(n,r,e)},t),
// Update bezier control points
t.updateBezierControlPoints()},updateElement:function(e,t,n){var r=this,a=e.custom||{},o=r.getDataset(),s=r.chart.scale,u=r.chart.options.elements.point,l=s.getPointPositionForValue(t,o.data[t]);
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==o.radius&&void 0===o.pointRadius&&(o.pointRadius=o.radius),void 0!==o.hitRadius&&void 0===o.pointHitRadius&&(o.pointHitRadius=o.hitRadius),i.extend(e,{
// Utility
_datasetIndex:r.index,_index:t,_scale:s,
// Desired view properties
_model:{x:n?s.xCenter:l.x,// value not used in dataset scale, but we want a consistent API between scales
y:n?s.yCenter:l.y,
// Appearance
tension:a.tension?a.tension:i.valueOrDefault(o.lineTension,r.chart.options.elements.line.tension),radius:a.radius?a.radius:i.valueAtIndexOrDefault(o.pointRadius,t,u.radius),backgroundColor:a.backgroundColor?a.backgroundColor:i.valueAtIndexOrDefault(o.pointBackgroundColor,t,u.backgroundColor),borderColor:a.borderColor?a.borderColor:i.valueAtIndexOrDefault(o.pointBorderColor,t,u.borderColor),borderWidth:a.borderWidth?a.borderWidth:i.valueAtIndexOrDefault(o.pointBorderWidth,t,u.borderWidth),pointStyle:a.pointStyle?a.pointStyle:i.valueAtIndexOrDefault(o.pointStyle,t,u.pointStyle),
// Tooltip
hitRadius:a.hitRadius?a.hitRadius:i.valueAtIndexOrDefault(o.pointHitRadius,t,u.hitRadius)}}),e._model.skip=a.skip?a.skip:isNaN(e._model.x)||isNaN(e._model.y)},updateBezierControlPoints:function(){var e=this.chart.chartArea,t=this.getMeta();i.each(t.data,function(n,r){var a=n._model,o=i.splineCurve(i.previousItem(t.data,r,!0)._model,a,i.nextItem(t.data,r,!0)._model,a.tension);
// Prevent the bezier going outside of the bounds of the graph
a.controlPointPreviousX=Math.max(Math.min(o.previous.x,e.right),e.left),a.controlPointPreviousY=Math.max(Math.min(o.previous.y,e.bottom),e.top),a.controlPointNextX=Math.max(Math.min(o.next.x,e.right),e.left),a.controlPointNextY=Math.max(Math.min(o.next.y,e.bottom),e.top),
// Now pivot the point for animation
n.pivot()})},setHoverStyle:function(e){
// Point
var t=this.chart.data.datasets[e._datasetIndex],n=e.custom||{},r=e._index,a=e._model;a.radius=n.hoverRadius?n.hoverRadius:i.valueAtIndexOrDefault(t.pointHoverRadius,r,this.chart.options.elements.point.hoverRadius),a.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:i.valueAtIndexOrDefault(t.pointHoverBackgroundColor,r,i.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor?n.hoverBorderColor:i.valueAtIndexOrDefault(t.pointHoverBorderColor,r,i.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:i.valueAtIndexOrDefault(t.pointHoverBorderWidth,r,a.borderWidth)},removeHoverStyle:function(e){var t=this.chart.data.datasets[e._datasetIndex],n=e.custom||{},r=e._index,a=e._model,o=this.chart.options.elements.point;a.radius=n.radius?n.radius:i.valueAtIndexOrDefault(t.pointRadius,r,o.radius),a.backgroundColor=n.backgroundColor?n.backgroundColor:i.valueAtIndexOrDefault(t.pointBackgroundColor,r,o.backgroundColor),a.borderColor=n.borderColor?n.borderColor:i.valueAtIndexOrDefault(t.pointBorderColor,r,o.borderColor),a.borderWidth=n.borderWidth?n.borderWidth:i.valueAtIndexOrDefault(t.pointBorderWidth,r,o.borderWidth)}})}},/* 492 */
/***/
function(e,t,n){"use strict";n(8)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",// need an ID so datasets can reference the scale
type:"linear",// scatter should not use a category axis
position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(e){return"("+e.xLabel+", "+e.yLabel+")"}}}}),e.exports=function(e){
// Scatter charts use line controllers
e.controllers.scatter=e.controllers.line}},/* 493 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.Bar=function(t,n){return n.type="bar",new e(t,n)}}},/* 494 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.Bubble=function(t,n){return n.type="bubble",new e(t,n)}}},/* 495 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.Doughnut=function(t,n){return n.type="doughnut",new e(t,n)}}},/* 496 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.Line=function(t,n){return n.type="line",new e(t,n)}}},/* 497 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.PolarArea=function(t,n){return n.type="polarArea",new e(t,n)}}},/* 498 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.Radar=function(t,n){return n.type="radar",new e(t,n)}}},/* 499 */
/***/
function(e,t,n){"use strict";e.exports=function(e){e.Scatter=function(t,n){return n.type="scatter",new e(t,n)}}},/* 500 */
/***/
function(e,t,n){"use strict";e.exports={},e.exports.filler=n(501),e.exports.legend=n(502),e.exports.title=n(503)},/* 501 */
/***/
function(e,t,n){"use strict";
// @todo if (fill[0] === '#')
function r(e,t,n){var r,a=e._model||{},i=a.fill;if(void 0===i&&(i=!!a.backgroundColor),!1===i||null===i)return!1;if(!0===i)return"origin";if(r=parseFloat(i,10),isFinite(r)&&Math.floor(r)===r)return"-"!==i[0]&&"+"!==i[0]||(r=t+r),!(r===t||r<0||r>=n)&&r;switch(i){
// compatibility
case"bottom":return"start";case"top":return"end";case"zero":return"origin";
// supported boundaries
case"origin":case"start":case"end":return i;
// invalid fill values
default:return!1}}function a(e){var t,n=e.el._model||{},r=e.el._scale||{},a=e.fill,i=null;if(isFinite(a))return null;if(
// Backward compatibility: until v3, we still need to support boundary values set on
// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
// controllers might still use it (e.g. the Smith chart).
"start"===a?i=void 0===n.scaleBottom?r.bottom:n.scaleBottom:"end"===a?i=void 0===n.scaleTop?r.top:n.scaleTop:void 0!==n.scaleZero?i=n.scaleZero:r.getBasePosition?i=r.getBasePosition():r.getBasePixel&&(i=r.getBasePixel()),void 0!==i&&null!==i){if(void 0!==i.x&&void 0!==i.y)return i;if("number"==typeof i&&isFinite(i))return t=r.isHorizontal(),{x:t?i:null,y:t?null:i}}return null}function i(e,t,n){var r,a=e[t],i=a.fill,o=[t];if(!n)return i;for(;!1!==i&&-1===o.indexOf(i);){if(!isFinite(i))return i;if(!(r=e[i]))return!1;if(r.visible)return i;o.push(i),i=r.fill}return!1}function o(e){var t=e.fill,n="dataset";return!1===t?null:(isFinite(t)||(n="boundary"),h[n](e))}function s(e){return e&&!e.skip}function u(e,t,n,r,a){var i;if(r&&a){for(
// building first area curve (normal)
e.moveTo(t[0].x,t[0].y),i=1;i<r;++i)f.canvas.lineTo(e,t[i-1],t[i]);
// building opposite area curve (reverse)
for(
// joining the two area curves
e.lineTo(n[a-1].x,n[a-1].y),i=a-1;i>0;--i)f.canvas.lineTo(e,n[i],n[i-1],!0)}}function l(e,t,n,r,a,i){var o,l,d,c,f,h,m,_=t.length,p=r.spanGaps,y=[],v=[],g=0,M=0;for(e.beginPath(),o=0,l=_+!!i;o<l;++o)d=o%_,c=t[d]._view,f=n(c,d,r),h=s(c),m=s(f),h&&m?(g=y.push(c),M=v.push(f)):g&&M&&(p?(h&&y.push(c),m&&v.push(f)):(u(e,y,v,g,M),g=M=0,y=[],v=[]));u(e,y,v,g,M),e.closePath(),e.fillStyle=a,e.fill()}/**
 * Plugin based on discussion from the following Chart.js issues:
 * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
 * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
 */
var d=n(8),c=n(45),f=n(5);d._set("global",{plugins:{filler:{propagate:!0}}});var h={dataset:function(e){var t=e.fill,n=e.chart,r=n.getDatasetMeta(t),a=r&&n.isDatasetVisible(t),i=a&&r.dataset._children||[],o=i.length||0;return o?function(e,t){return t<o&&i[t]._view||null}:null},boundary:function(e){var t=e.boundary,n=t?t.x:null,r=t?t.y:null;return function(e){return{x:null===n?e.x:n,y:null===r?e.y:r}}}};e.exports={id:"filler",afterDatasetsUpdate:function(e,t){var n,s,u,l,d=(e.data.datasets||[]).length,f=t.propagate,h=[];for(s=0;s<d;++s)n=e.getDatasetMeta(s),u=n.dataset,l=null,u&&u._model&&u instanceof c.Line&&(l={visible:e.isDatasetVisible(s),fill:r(u,s,d),chart:e,el:u}),n.$filler=l,h.push(l);for(s=0;s<d;++s)(l=h[s])&&(l.fill=i(h,s,f),l.boundary=a(l),l.mapper=o(l))},beforeDatasetDraw:function(e,t){var n=t.meta.$filler;if(n){var r=e.ctx,a=n.el,i=a._view,o=a._children||[],s=n.mapper,u=i.backgroundColor||d.global.defaultColor;s&&u&&o.length&&(f.canvas.clipArea(r,e.chartArea),l(r,o,s,i,u,a._loop),f.canvas.unclipArea(r))}}}},/* 502 */
/***/
function(e,t,n){"use strict";/**
 * Helper function to get the box width based on the usePointStyle option
 * @param labelopts {Object} the label options on the legend
 * @param fontSize {Number} the label font size
 * @return {Number} width of the color box area
 */
function r(e,t){return e.usePointStyle?t*Math.SQRT2:e.boxWidth}function a(e,t){var n=new d({ctx:e.ctx,options:t,chart:e});u.configure(e,n,t),u.addBox(e,n),e.legend=n}var i=n(8),o=n(34),s=n(5),u=n(86),l=s.noop;i._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,
// a callback that will handle
onClick:function(e,t){var n=t.datasetIndex,r=this.chart,a=r.getDatasetMeta(n);
// See controller.isDatasetVisible comment
a.hidden=null===a.hidden?!r.data.datasets[n].hidden:null,
// We hid a dataset ... rerender the chart
r.update()},onHover:null,labels:{boxWidth:40,padding:10,
// Generates labels shown in the legend
// Valid properties to return:
// text : text to display
// fillStyle : fill of coloured box
// strokeStyle: stroke of coloured box
// hidden : if this legend item refers to a hidden item
// lineCap : cap style for line
// lineDash
// lineDashOffset :
// lineJoin :
// lineWidth :
generateLabels:function(e){var t=e.data;return s.isArray(t.datasets)?t.datasets.map(function(t,n){return{text:t.label,fillStyle:s.isArray(t.backgroundColor)?t.backgroundColor[0]:t.backgroundColor,hidden:!e.isDatasetVisible(n),lineCap:t.borderCapStyle,lineDash:t.borderDash,lineDashOffset:t.borderDashOffset,lineJoin:t.borderJoinStyle,lineWidth:t.borderWidth,strokeStyle:t.borderColor,pointStyle:t.pointStyle,
// Below is extra data used for toggling the datasets
datasetIndex:n}},this):[]}}},legendCallback:function(e){var t=[];t.push('<ul class="'+e.id+'-legend">');for(var n=0;n<e.data.datasets.length;n++)t.push('<li><span style="background-color:'+e.data.datasets[n].backgroundColor+'"></span>'),e.data.datasets[n].label&&t.push(e.data.datasets[n].label),t.push("</li>");return t.push("</ul>"),t.join("")}});/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var d=o.extend({initialize:function(e){s.extend(this,e),
// Contains hit boxes for each dataset (in dataset order)
this.legendHitBoxes=[],
// Are we in doughnut mode which has a different data type
this.doughnutMode=!1},
// These methods are ordered by lifecycle. Utilities then follow.
// Any function defined here is inherited by all legend types.
// Any function can be extended by the legend type
beforeUpdate:l,update:function(e,t,n){var r=this;
// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
// Absorb the master measurements
// Dimensions
// Labels
// Fit
//
return r.beforeUpdate(),r.maxWidth=e,r.maxHeight=t,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:l,
//
beforeSetDimensions:l,setDimensions:function(){var e=this;
// Set the unconstrained dimension before label rotation
e.isHorizontal()?(
// Reset position before calculating rotation
e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,
// Reset position before calculating rotation
e.top=0,e.bottom=e.height),
// Reset padding
e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0,
// Reset minSize
e.minSize={width:0,height:0}},afterSetDimensions:l,
//
beforeBuildLabels:l,buildLabels:function(){var e=this,t=e.options.labels||{},n=s.callback(t.generateLabels,[e.chart],e)||[];t.filter&&(n=n.filter(function(n){return t.filter(n,e.chart.data)})),e.options.reverse&&n.reverse(),e.legendItems=n},afterBuildLabels:l,
//
beforeFit:l,fit:function(){var e=this,t=e.options,n=t.labels,a=t.display,o=e.ctx,u=i.global,l=s.valueOrDefault,d=l(n.fontSize,u.defaultFontSize),c=l(n.fontStyle,u.defaultFontStyle),f=l(n.fontFamily,u.defaultFontFamily),h=s.fontString(d,c,f),m=e.legendHitBoxes=[],_=e.minSize,p=e.isHorizontal();
// Increase sizes here
if(p?(_.width=e.maxWidth,// fill all the width
_.height=a?10:0):(_.width=a?10:0,_.height=e.maxHeight),a)if(o.font=h,p){
// Labels
// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
var y=e.lineWidths=[0],v=e.legendItems.length?d+n.padding:0;o.textAlign="left",o.textBaseline="top",s.each(e.legendItems,function(t,a){var i=r(n,d),s=i+d/2+o.measureText(t.text).width;y[y.length-1]+s+n.padding>=e.width&&(v+=d+n.padding,y[y.length]=e.left),
// Store the hitbox width and height here. Final position will be updated in `draw`
m[a]={left:0,top:0,width:s,height:d},y[y.length-1]+=s+n.padding}),_.height+=v}else{var g=n.padding,M=e.columnWidths=[],b=n.padding,L=0,k=0,Y=d+g;s.each(e.legendItems,function(e,t){var a=r(n,d),i=a+d/2+o.measureText(e.text).width;
// If too tall, go to new column
k+Y>_.height&&(b+=L+n.padding,M.push(L),// previous column width
L=0,k=0),
// Get max width
L=Math.max(L,i),k+=Y,
// Store the hitbox width and height here. Final position will be updated in `draw`
m[t]={left:0,top:0,width:i,height:d}}),b+=L,M.push(L),_.width+=b}e.width=_.width,e.height=_.height},afterFit:l,
// Shared Methods
isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},
// Actually draw the legend on the canvas
draw:function(){var e=this,t=e.options,n=t.labels,a=i.global,o=a.elements.line,u=e.width,l=e.lineWidths;if(t.display){var d,c=e.ctx,f=s.valueOrDefault,h=f(n.fontColor,a.defaultFontColor),m=f(n.fontSize,a.defaultFontSize),_=f(n.fontStyle,a.defaultFontStyle),p=f(n.fontFamily,a.defaultFontFamily),y=s.fontString(m,_,p);
// Canvas setup
c.textAlign="left",c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=h,// for strikethrough effect
c.fillStyle=h,// render in correct colour
c.font=y;var v=r(n,m),g=e.legendHitBoxes,M=function(e,n,r){if(!(isNaN(v)||v<=0)){
// Set the ctx for the box
c.save(),c.fillStyle=f(r.fillStyle,a.defaultColor),c.lineCap=f(r.lineCap,o.borderCapStyle),c.lineDashOffset=f(r.lineDashOffset,o.borderDashOffset),c.lineJoin=f(r.lineJoin,o.borderJoinStyle),c.lineWidth=f(r.lineWidth,o.borderWidth),c.strokeStyle=f(r.strokeStyle,a.defaultColor);var i=0===f(r.lineWidth,o.borderWidth);if(c.setLineDash&&
// IE 9 and 10 do not support line dash
c.setLineDash(f(r.lineDash,o.borderDash)),t.labels&&t.labels.usePointStyle){
// Recalculate x and y for drawPoint() because its expecting
// x and y to be center of figure (instead of top left)
var u=m*Math.SQRT2/2,l=u/Math.SQRT2,d=e+l,h=n+l;
// Draw pointStyle as legend symbol
s.canvas.drawPoint(c,r.pointStyle,u,d,h)}else
// Draw box as legend symbol
i||c.strokeRect(e,n,v,m),c.fillRect(e,n,v,m);c.restore()}},b=function(e,t,n,r){var a=m/2,i=v+a+e,o=t+a;c.fillText(n.text,i,o),n.hidden&&(
// Strikethrough the text if hidden
c.beginPath(),c.lineWidth=2,c.moveTo(i,o),c.lineTo(i+r,o),c.stroke())},L=e.isHorizontal();d=L?{x:e.left+(u-l[0])/2,y:e.top+n.padding,line:0}:{x:e.left+n.padding,y:e.top+n.padding,line:0};var k=m+n.padding;s.each(e.legendItems,function(t,r){var a=c.measureText(t.text).width,i=v+m/2+a,o=d.x,s=d.y;L?o+i>=u&&(s=d.y+=k,d.line++,o=d.x=e.left+(u-l[d.line])/2):s+k>e.bottom&&(o=d.x=o+e.columnWidths[d.line]+n.padding,s=d.y=e.top+n.padding,d.line++),M(o,s,t),g[r].left=o,g[r].top=s,
// Fill the actual label
b(o,s,t,a),L?d.x+=i+n.padding:d.y+=k})}},/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @return {Boolean} true if a change occured
	 */
handleEvent:function(e){var t=this,n=t.options,r="mouseup"===e.type?"click":e.type,a=!1;if("mousemove"===r){if(!n.onHover)return}else{if("click"!==r)return;if(!n.onClick)return}
// Chart event already has relative position in it
var i=e.x,o=e.y;if(i>=t.left&&i<=t.right&&o>=t.top&&o<=t.bottom)for(var s=t.legendHitBoxes,u=0;u<s.length;++u){var l=s[u];if(i>=l.left&&i<=l.left+l.width&&o>=l.top&&o<=l.top+l.height){
// Touching an element
if("click"===r){
// use e.native for backwards compatibility
n.onClick.call(t,e.native,t.legendItems[u]),a=!0;break}if("mousemove"===r){
// use e.native for backwards compatibility
n.onHover.call(t,e.native,t.legendItems[u]),a=!0;break}}}return a}});e.exports={id:"legend",/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
_element:d,beforeInit:function(e){var t=e.options.legend;t&&a(e,t)},beforeUpdate:function(e){var t=e.options.legend,n=e.legend;t?(s.mergeIf(t,i.global.legend),n?(u.configure(e,n,t),n.options=t):a(e,t)):n&&(u.removeBox(e,n),delete e.legend)},afterEvent:function(e,t){var n=e.legend;n&&n.handleEvent(t)}}},/* 503 */
/***/
function(e,t,n){"use strict";function r(e,t){var n=new l({ctx:e.ctx,options:t,chart:e});s.configure(e,n,t),s.addBox(e,n),e.titleBlock=n}var a=n(8),i=n(34),o=n(5),s=n(86),u=o.noop;a._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var l=i.extend({initialize:function(e){var t=this;o.extend(t,e),
// Contains hit boxes for each dataset (in dataset order)
t.legendHitBoxes=[]},
// These methods are ordered by lifecycle. Utilities then follow.
beforeUpdate:u,update:function(e,t,n){var r=this;
// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
// Absorb the master measurements
// Dimensions
// Labels
// Fit
//
return r.beforeUpdate(),r.maxWidth=e,r.maxHeight=t,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:u,
//
beforeSetDimensions:u,setDimensions:function(){var e=this;
// Set the unconstrained dimension before label rotation
e.isHorizontal()?(
// Reset position before calculating rotation
e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,
// Reset position before calculating rotation
e.top=0,e.bottom=e.height),
// Reset padding
e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0,
// Reset minSize
e.minSize={width:0,height:0}},afterSetDimensions:u,
//
beforeBuildLabels:u,buildLabels:u,afterBuildLabels:u,
//
beforeFit:u,fit:function(){var e=this,t=o.valueOrDefault,n=e.options,r=n.display,i=t(n.fontSize,a.global.defaultFontSize),s=e.minSize,u=o.isArray(n.text)?n.text.length:1,l=o.options.toLineHeight(n.lineHeight,i),d=r?u*l+2*n.padding:0;e.isHorizontal()?(s.width=e.maxWidth,// fill all the width
s.height=d):(s.width=d,s.height=e.maxHeight),e.width=s.width,e.height=s.height},afterFit:u,
// Shared Methods
isHorizontal:function(){var e=this.options.position;return"top"===e||"bottom"===e},
// Actually draw the title block on the canvas
draw:function(){var e=this,t=e.ctx,n=o.valueOrDefault,r=e.options,i=a.global;if(r.display){var s,u,l,d=n(r.fontSize,i.defaultFontSize),c=n(r.fontStyle,i.defaultFontStyle),f=n(r.fontFamily,i.defaultFontFamily),h=o.fontString(d,c,f),m=o.options.toLineHeight(r.lineHeight,d),_=m/2+r.padding,p=0,y=e.top,v=e.left,g=e.bottom,M=e.right;t.fillStyle=n(r.fontColor,i.defaultFontColor),// render in correct colour
t.font=h,
// Horizontal
e.isHorizontal()?(u=v+(M-v)/2,// midpoint of the width
l=y+_,s=M-v):(u="left"===r.position?v+_:M-_,l=y+(g-y)/2,s=g-y,p=Math.PI*("left"===r.position?-.5:.5)),t.save(),t.translate(u,l),t.rotate(p),t.textAlign="center",t.textBaseline="middle";var b=r.text;if(o.isArray(b))for(var L=0,k=0;k<b.length;++k)t.fillText(b[k],0,L,s),L+=m;else t.fillText(b,0,0,s);t.restore()}}});e.exports={id:"title",/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
_element:l,beforeInit:function(e){var t=e.options.title;t&&r(e,t)},beforeUpdate:function(e){var t=e.options.title,n=e.titleBlock;t?(o.mergeIf(t,a.global.title),n?(s.configure(e,n,t),n.options=t):r(e,t)):n&&(s.removeBox(e,n),delete e.titleBlock)}}},/* 504 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=r(a),o=n(9),s=r(o),u=n(10),l=r(u),d=n(12),c=r(d),f=n(13),h=r(f),m=n(2),_=r(m),p=function(e){function t(e){(0,s.default)(this,t);var n=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log(e),n.state=(0,i.default)({},n.props,{notificationPanel:"dn",userid:null,notifymessage:"dn"}),n}return(0,h.default)(t,e),(0,l.default)(t,[{key:"sendNotification",value:function(){var e=this,t={userid:this.state.userid};null!==this.state.userid?(t.title=this.refs.title.value,t.message=this.refs.message.value,fetch("/api/notifyquiz",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(t){"sent"===t.data&&e.setState((0,i.default)({},e.state,{notifymessage:"db"}),function(){setTimeout(function(){e.setState((0,i.default)({},e.state,{notifymessage:"dn"}))},4e3)})})):alert("Please select User")}},{key:"componentWillMount",value:function(){this.collectData()}},{key:"collectData",value:function(){var e=this,t=1,n=[];this.state.que[0].options.map(function(r,a){var i={};i.text=r,i.option="op"+t,i.count=0,i.correctoption=!1,e.state.count.arrCount.map(function(n){Object.keys(n)[0]==="op"+t&&(i.count=n["op"+t],"op"+t===e.state.que[0].ca[0]&&(i.correctoption=!0))}),t++,n.push(i)}),this.setState({finalData:n},function(){console.log(e.state)})}},{key:"renderList",value:function(){return this.state.finalData.map(function(e,t){return _.default.createElement("li",{className:"list-group-item  "+(e.correctoption?"list-group-item-success":"")+" ",key:t},_.default.createElement("span",{className:"badge"},e.count),e.text)})}},{key:"userList",value:function(){return this.state.users.map(function(e,t){return _.default.createElement("li",{className:"list-group-item",key:t},_.default.createElement("span",{className:"pull-right"}),"Name: ",_.default.createElement("b",null," ",e.name),_.default.createElement("br",null),"Phone Number: ",_.default.createElement("b",null," ",e.mobile))})}},{key:"optionlist",value:function(){return this.state.users.map(function(e,t){return _.default.createElement("option",{value:e.userid,key:t}," ",e.name,"  ")})}},{key:"render",value:function(){var e=this;return _.default.createElement("div",null,_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-md-6 col-xs-12"},_.default.createElement("hr",{className:"colorgraph"}),_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},"Result"),_.default.createElement("div",{className:"panel-body"},_.default.createElement("ul",{className:"list-group"},function(){return e.renderList()}())),_.default.createElement("div",{className:"panel-footer"}))),_.default.createElement("div",{className:"col-sm-6 col-xs-12"},_.default.createElement("hr",{className:"colorgraph"}),_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},"Send Notification to  User"),_.default.createElement("div",{className:"panel-body"},_.default.createElement("div",{className:"alert alert-success "+this.state.notifymessage,role:"alert"},"Notification Sent successfully"),_.default.createElement("select",{className:"form-control selectpicker",onChange:function(t){e.setState((0,i.default)({},e.state,{userid:t.target.value}))}},_.default.createElement("option",null," Select User"),function(){return e.optionlist()}()),_.default.createElement("br",null),_.default.createElement("input",{type:"text",ref:"title",id:"title",className:"form-control",placeholder:"Title"}),_.default.createElement("br",null),_.default.createElement("div",null,_.default.createElement("textarea",{defaultValue:"",ref:"message",className:"form-control",placeholder:"Notification Body"}))),_.default.createElement("div",{className:"panel-footer"},_.default.createElement("input",{type:"button",onClick:function(){e.sendNotification()},className:"btn btn-success",value:"Send Notification"}))))),_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-sm-6 col-xs-12"},_.default.createElement("hr",{className:"colorgraph"}),_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},"User who Attempt correct answer"),_.default.createElement("div",{className:"panel-body"},_.default.createElement("ul",{className:"list-group"},function(){return e.userList()}())),_.default.createElement("div",{className:"panel-footer"})))))}}]),t}(m.Component);t.default=p},/* 505 */
/***/
function(e,t){},/* 506 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=(n(20),n(507)),_=r(m);n(511);var p=n(137),y=r(p),v=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"wrapper"},h.default.createElement("div",{className:"main-panel"},h.default.createElement(y.default,null),h.default.createElement("div",{className:"content"},h.default.createElement("div",{className:"container-fluid"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-12"},h.default.createElement(_.default,null)))))))}}]),t}(f.Component);t.default=v},/* 507 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=r(a),o=n(9),s=r(o),u=n(10),l=r(u),d=n(12),c=r(d),f=n(13),h=r(f),m=n(2),_=r(m),p=n(508),y=r(p),v=n(509),g=r(v),M=n(510),b=r(M),L=function(e){function t(e){(0,s.default)(this,t);var n=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={usercount:"...",spotcount:"...",refferal:[],floorwisecount:[],firstrow:!0,secondrow:!1,floorwisedata:[],floorno:"",mostDenFloor:[],mostDenLoc:[]},n}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/api/alluserdetail",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var n=0,r=0;t.result.map(function(e){n+=e.userCount}),t.spotcount.map(function(e){r+=e.userCount}),e.setState({usercount:n,spotcount:r,refferal:t.refferal,floorwisecount:t.result,mostDenFloor:t.mostDenFloor,mostDenLoc:t.mostDenLoc,firstrow:!0})})}},{key:"floorwiseData",value:function(e){var t=this;fetch("/api/floorwsie/"+e,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(n){n.result.sort(function(e,t){var n=e.userCount,r=t.userCount;return r<n?-1:r<n?0:1}),t.setState((0,i.default)({},t.state,{firstrow:!1,secondrow:!0,floorno:e,floorwisedata:n.result}))})}},{key:"render",value:function(){var e=this;return _.default.createElement("div",null,_.default.createElement("div",{className:"row"},function(){return e.state.firstrow?_.default.createElement("div",null,_.default.createElement(y.default,{bardata:e.state.floorwisecount,floorwise:function(t){return e.floorwiseData(t)},usercount:e.state.usercount,refferal:e.state.refferal,spotcount:e.state.spotcount,mostDenFloor:e.state.mostDenFloor,mostDenLoc:e.state.mostDenLoc}),_.default.createElement(b.default,{floorwise:function(t){return e.floorwiseData(t)},bardata:e.state.floorwisecount,gropupdata:e.state.floorwisecount})):_.default.createElement("div",null,_.default.createElement(y.default,{refferal:e.state.refferal,bardata:e.state.floorwisecount,floorwise:function(t){return e.floorwiseData(t)},usercount:e.state.usercount,spotcount:e.state.spotcount,mostDenFloor:e.state.mostDenFloor,mostDenLoc:e.state.mostDenLoc}),_.default.createElement(g.default,{floorwise:function(t){return e.floorwiseData(t)},gropupdata:e.state.floorwisecount,floorwisedata:e.state.floorwisedata,floorno:e.state.floorno}))}()))}}]),t}(m.Component);t.default=L},/* 508 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={usercount:e.usercount,bardata:e.bardata,spotcount:e.spotcount,refferal:e.refferal,mostDenFloor:e.mostDenFloor,mostDenLoc:e.mostDenLoc},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({usercount:e.usercount,mostDenFloor:e.mostDenFloor,mostDenLoc:e.mostDenLoc,refferal:e.refferal,spotcount:e.spotcount,bardata:e.bardata})}},{key:"renderList",value:function(){var e=this;return this.state.bardata.map(function(t,n){return h.default.createElement("li",{className:"list-group-item",key:n},h.default.createElement("span",{className:"badge"},t.userCount),h.default.createElement("button",{onClick:function(){e.props.floorwise(t.floorno)},className:"btn btn-success btn-xs"},t.floorno," ",h.default.createElement("sup",null,"th")," Floor Detail")," ")})}},{key:"refferalcode",value:function(){return this.state.refferal.map(function(e,t){return h.default.createElement("li",{className:"list-group-item",key:t},h.default.createElement("strong",null,e.name,"'s"),"  ref code ",h.default.createElement("b",null,e.code),"  ",h.default.createElement("span",{className:"badge"},e.userCount))})}},{key:"render",value:function(){var e=this;return h.default.createElement("div",null,h.default.createElement("div",{className:"col-md-3"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-heading"},h.default.createElement("b",null,"Registered user")),h.default.createElement("div",{className:"panel-body text-center"},h.default.createElement("b",null," Count ",h.default.createElement("h1",null,this.state.usercount)," ")))),h.default.createElement("div",{className:"col-md-3"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-heading"},h.default.createElement("b",null,"Spot Registration Count")),h.default.createElement("div",{className:"panel-body text-center"},h.default.createElement("b",null," Count ",h.default.createElement("h1",null,this.state.spotcount)," ")))),h.default.createElement("div",{className:"col-md-3"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-heading"},h.default.createElement("b",null,"Refferal Code ")),h.default.createElement("div",{className:"panel-body text-center"},function(){return e.refferalcode()}()))),h.default.createElement("div",{className:"col-md-3"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-heading"},h.default.createElement("b",null,"Density Wise")),h.default.createElement("div",{className:"panel-body"},function(){if(e.state.mostDenFloor.length>0)return h.default.createElement("li",{className:"list-group-item"},h.default.createElement("b",null," By Floor: "),e.state.mostDenFloor[0].fn+" Floor , Count:"+e.state.mostDenFloor[0].userCount)}(),function(){if(e.state.mostDenLoc.length>0)return h.default.createElement("li",{className:"list-group-item"},h.default.createElement("b",null," By Location : "),e.state.mostDenLoc[0].blockname+" of "+e.state.mostDenLoc[0].loc.split("-")[0]+" , Count: "+e.state.mostDenLoc[0].userCount)}()))))}}]),t}(f.Component);t.default=m},/* 509 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=r(a),o=n(9),s=r(o),u=n(10),l=r(u),d=n(12),c=r(d),f=n(13),h=r(f),m=n(2),_=r(m),p=function(e){function t(e){(0,s.default)(this,t);var n=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.color=["brown-tone","slightly-blue","moderate-orange","bright-orange","vivid-orange"],n.state={floorwisedata:e.floorwisedata,floorno:e.floorno,matrix:[],bardata:e.gropupdata},n}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentWillMount",value:function(){this.collectdata()}},{key:"collectdata",value:function(){this.state.floorwisedata.map(function(e){e.percentage=e.userCount>40?Math.round(1e4)/100:Math.round(e.userCount/40*100*100)/100}),this.setState((0,i.default)({},this.state,{floorwisedata:this.state.floorwisedata,matrix:this.generateSquareMatrix(4,1,600,39,this.state.floorno)}))}},{key:"getPercentageWiseColor",value:function(e){var t="";switch(!0){case e>=0&&e<=20:t=this.color[4];break;case e>=21&&e<=40:t=this.color[3];break;case e>=41&&e<=60:t=this.color[2];break;case e>=61&&e<=80:t=this.color[1];break;case e>=81&&e<=100:t=this.color[0]}return t}},{key:"componentWillReceiveProps",value:function(e){e.floorwisedata.map(function(e){e.percentage=e.userCount>40?Math.round(1e4)/100:Math.round(e.userCount/40*100*100)/100}),this.setState((0,i.default)({},this.state,{floorno:e.floorno,bardata:e.gropupdata,floorwisedata:e.floorwisedata,matrix:this.generateSquareMatrix(4,1,600,39,this.state.floorno)}))}},{key:"generateSquareMatrix",value:function(e,t,n,r,a){var i,o,s=this,u=[],l=t,d=l+r,c=0;for(i=0;i<e;i++)for(u[i]=[],o=0;o<e;o++){c++;var f=0,h=this.color[this.color.length-1];this.state.floorwisedata.map(function(e,t){e.projName==="Block-"+c&&(f=e.userCount,h=s.getPercentageWiseColor(e.percentage))}),u[i][o]=[l+" to "+d,"Block-"+c,f,h],l=d+1,d=l+r}return u}},{key:"checkstatus",value:function(e,t){return"recall-grid-tile "+t}},{key:"drawgrid",value:function(){var e=this,t=0;return this.state.matrix.map(function(n,r){return _.default.createElement("div",{key:r,className:"recall-grid-row"},n.map(function(n,a){return t++,_.default.createElement("div",{key:a,id:e.state.floorno+"F-"+(r+1)+"B-"+(a+1)+"R",blockid:"Block-"+t,className:e.checkstatus(t,n[3])},_.default.createElement("div",null," ",n[1]," ",_.default.createElement("br",null),_.default.createElement("span",null," Seat no ",n[0]),_.default.createElement("br",null),_.default.createElement("h2",null,n[2])))}))})}},{key:"renderListButton",value:function(){var e=this;return this.state.bardata.map(function(t,n){return _.default.createElement("li",{className:"list-group-item",key:n},_.default.createElement("span",{className:"badge"},t.userCount),_.default.createElement("button",{onClick:function(){e.props.floorwise(t.floorno)},className:"btn btn-success btn-xs"},t.floorno," ",_.default.createElement("sup",null,"th")," Floor Detail")," ")})}},{key:"render",value:function(){var e=this;return _.default.createElement("div",{className:"col-md-12 admin-allbox"},_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},_.default.createElement("b",null,"Floor Plan ",this.state.floorno)),_.default.createElement("div",{className:"panel-body"},_.default.createElement("div",{className:"col-md-3"},_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},_.default.createElement("b",null,"Floor  wise")),_.default.createElement("div",{className:"panel-body"},_.default.createElement("ul",{className:"list-group"},function(){return e.renderListButton()}())))),_.default.createElement("div",{className:"col-md-9"},_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-body"},_.default.createElement("div",{className:"chart-container"},this.drawgrid())))))))}}]),t}(m.Component);t.default=p},/* 510 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),i=r(a),o=n(9),s=r(o),u=n(10),l=r(u),d=n(12),c=r(d),f=n(13),h=r(f),m=n(2),_=r(m),p=function(e){function t(e){(0,s.default)(this,t);var n=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bardata:e.gropupdata,bardatalisting:e.bardata,matrix:[]},n.color=["brown-tone","slightly-blue","moderate-orange","bright-orange","vivid-orange"],n}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentWillMount",value:function(){this.setState((0,i.default)({},this.state,{matrix:[]}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.gropupdata.map(function(e,n){void 0===t.color[n]?e.color=t.color[t.color.length-1]:e.color=t.color[n]}),this.setState({bardata:e.gropupdata,bardatalisting:e.bardata},function(){t.collectGraphdata()})}},{key:"collectGraphdata",value:function(){this.setState({matrix:this.generateSquareMatrix(3,2,this.state.bardata)})}},{key:"generateSquareMatrix",value:function(e,t,n){var r,a,i=[],o=t;for(r=0;r<e;r++)for(i[r]=[],a=0;a<e;a++){var s=0,u=this.color[this.color.length-1];o>3?(n.map(function(e,t){e.floorno===o&&(s=e.userCount,u=e.color)}),i[r][a]=["Floor-"+o,s,u]):i[r][a]=["Floor-"+o],o++}return i}},{key:"checkstatus",value:function(e,t,n,r){return n<=3?"recall-grid-tile cross-disable":"recall-grid-tile "+r[2]}},{key:"gridClickHandler",value:function(e,t){}},{key:"drawgrid",value:function(){var e=this,t=1;return this.state.matrix.map(function(n,r){return _.default.createElement("div",{key:r,className:"recall-grid-row"},n.map(function(n,a){return t++,_.default.createElement("div",{key:a,blockid:n[0],className:e.checkstatus(r,a,t,n),onClick:function(t){e.gridClickHandler(t,a)}},_.default.createElement("div",null,function(){return 1===n.length?_.default.createElement("span",null," ",n[0],"  "):_.default.createElement("span",null," ",n[0],_.default.createElement("br",null)," Count: ",_.default.createElement("h2",null,n[1]))}()))}))})}},{key:"renderList",value:function(){return this.state.bardatalisting.map(function(e,t){return _.default.createElement("li",{className:"list-group-item",key:t},_.default.createElement("span",{className:"badge"},e.userCount),e.floorno," ",_.default.createElement("sup",null,"th")," Floor ")})}},{key:"renderListButton",value:function(){var e=this;return this.state.bardata.map(function(t,n){return _.default.createElement("li",{className:"list-group-item",key:n},_.default.createElement("span",{className:"badge"},t.userCount),_.default.createElement("button",{onClick:function(){e.props.floorwise(t.floorno)},className:"btn btn-success btn-xs"},t.floorno," ",_.default.createElement("sup",null,"th")," Floor Detail")," ")})}},{key:"render",value:function(){var e=this;return _.default.createElement("div",null,_.default.createElement("div",{className:"col-md-12 admin-allbox"},_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},_.default.createElement("b",null,"Heat Map")),_.default.createElement("div",{className:"panel-body"},_.default.createElement("div",{className:"col-md-3"},_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},_.default.createElement("b",null,"Floor  wise")),_.default.createElement("div",{className:"panel-body"},_.default.createElement("ul",{className:"list-group"},function(){return e.renderListButton()}())))),_.default.createElement("div",{className:"col-md-9"},_.default.createElement("div",{className:"col-md-8"},_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-body"},_.default.createElement("div",{className:"chart-container"},this.drawgrid())))),_.default.createElement("div",{className:"col-md-4"},_.default.createElement("ul",{className:"list-group"},function(){return e.renderList()}())))))))}}]),t}(m.Component);t.default=p},/* 511 */
/***/
function(e,t){},/* 512 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=(n(20),n(513)),_=r(m),p=n(137),y=r(p),v=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"wrapper"},h.default.createElement("div",{className:"main-panel"},h.default.createElement(y.default,null),h.default.createElement("div",{className:"content"},h.default.createElement("div",{className:"container-fluid"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-12"},h.default.createElement("div",{className:"card"},h.default.createElement("div",{className:"content"},h.default.createElement(_.default,null))))))),h.default.createElement("footer",{className:"footer"},h.default.createElement("div",{className:"container-fluid"},h.default.createElement("div",{className:"copyright pull-right"})))))}}]),t}(f.Component);t.default=v},/* 513 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(514),_=r(m),p=n(515),y=r(p),v=n(516),g=r(v),M=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pollshow:"dn",quizshow:"dn"},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return h.default.createElement("div",{className:"user-panel"},h.default.createElement("div",{className:"container"},h.default.createElement("div",null,h.default.createElement("h1",null,"Create Question!!! ")),h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-6"},h.default.createElement("label",null,"Select Question:"),h.default.createElement("select",{className:"form-control selectpicker",onChange:function(t){"poll"===t.target.value?e.setState({pollshow:"db",quizshow:"dn"}):"quiz"===t.target.value?e.setState({quizshow:"db",pollshow:"dn"}):e.setState({quizshow:"dn",pollshow:"dn"})}},h.default.createElement("option",null,"Select one"),h.default.createElement("option",{value:"poll"},"Poll"),h.default.createElement("option",{value:"quiz"},"Quiz")),h.default.createElement("hr",null))),h.default.createElement("div",{className:"row "+this.state.quizshow},h.default.createElement(y.default,null)),h.default.createElement("div",{className:"row "+this.state.pollshow},h.default.createElement(_.default,null)),h.default.createElement("div",null,h.default.createElement("h1",null," Listing !!! ")),h.default.createElement("div",{className:"row"},h.default.createElement(g.default,{admin:"true"}))))}}]),t}(f.Component);t.default=M},/* 514 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m={title:"",option1:"",option2:"",option3:"",option4:"",correct:"",status:"save",message:"",errormsg:"dn"},_=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=m,n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"submitQuestion",value:function(e){""===this.refs.title.value||""===this.refs.option1.value||""===this.refs.option2.value?alert("Please select title and minimum of two options !!"):this.setState({title:this.refs.title.value,option1:this.refs.option1.value,option2:this.refs.option2.value,option3:this.refs.option3.value,option4:this.refs.option4.value,status:e,type:"poll"},function(){this.seriveCall()})}},{key:"seriveCall",value:function(){var e=this;fetch("/api/createque",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)}).then(function(e){return e.json()}).then(function(t){e.setState({errormsg:"db",message:t.status},function(){setTimeout(function(){e.setState(m)},3e3)})})}},{key:"render",value:function(){var e=this;return h.default.createElement("div",null,h.default.createElement("div",{className:"col-md-6"},h.default.createElement("div",{className:"box box-success"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-body"},h.default.createElement("div",{className:"alert alert-success  "+this.state.errormsg},h.default.createElement("strong",null,this.state.message)," !!!"),h.default.createElement("label",null,"Poll Title"),h.default.createElement("input",{className:"form-control",ref:"title",placeholder:"Title"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option1",placeholder:"Option 1"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option2",placeholder:"Option 2"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option3",placeholder:"Option 3"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option4",placeholder:"Option 4"}),h.default.createElement("br",null)),h.default.createElement("div",{className:"panel-footer"},h.default.createElement("input",{type:"button",className:"btn  btn-info",onClick:function(){e.submitQuestion("save")},value:"Save Question"}),"   ",h.default.createElement("input",{type:"button",className:"btn btn-success",onClick:function(){e.submitQuestion("publish")},value:"Publish Question"}))))))}}]),t}(f.Component);t.default=_},/* 515 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m={title:"",option1:"",option2:"",option3:"",option4:"",correct:"",status:"save",message:"",errormsg:"dn"},_=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=m,n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"submitQuestion",value:function(e){""===this.refs.title.value||""===this.refs.option1.value||""===this.refs.option2.value||""===this.refs.correct.value?alert("Please Title , minimum of two options and Select Correct Answer"):this.setState({title:this.refs.title.value,option1:this.refs.option1.value,option2:this.refs.option2.value,option3:this.refs.option3.value,option4:this.refs.option4.value,correct:this.refs.correct.value,status:e,type:"quiz"},function(){this.seriveCall()})}},{key:"seriveCall",value:function(){var e=this;fetch("/api/createque",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({errormsg:"db",message:t.status},function(){setTimeout(function(){e.setState(m)},3e3)})})}},{key:"render",value:function(){var e=this;return h.default.createElement("div",null,h.default.createElement("div",{className:"col-md-6"},h.default.createElement("div",{className:"box box-success"},h.default.createElement("div",{className:"panel panel-default"},h.default.createElement("div",{className:"panel-body"},h.default.createElement("div",{className:"alert alert-success  "+this.state.errormsg},h.default.createElement("strong",null,this.state.message)," !!!"),h.default.createElement("label",null,"Quiz Title"),h.default.createElement("input",{className:"form-control",ref:"title",placeholder:"Title"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option1",placeholder:"Option 1"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option2",placeholder:"Option 2"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option3",placeholder:"Option 3"}),h.default.createElement("br",null),h.default.createElement("input",{className:"form-control",ref:"option4",placeholder:"Option 4"}),h.default.createElement("br",null),h.default.createElement("br",null),h.default.createElement("label",null,"Correct Answer"),h.default.createElement("input",{className:"form-control",min:"1",max:"4",ref:"correct",type:"number",placeholder:"Answer Number"})),h.default.createElement("div",{className:"panel-footer"},h.default.createElement("input",{type:"button",className:"btn  btn-info",onClick:function(){e.submitQuestion("save")},value:"Save Question"}),"   ",h.default.createElement("input",{type:"button",className:"btn btn-success",onClick:function(){e.submitQuestion("publish")},value:"Publish Question"}))))))}}]),t}(f.Component);t.default=_},/* 516 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(20),_=n(517),p=r(_),y={transitionDuration:6},v={background:".my-bg-image-el"},g=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[]},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/api/pollquizlist",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({both:!0})}).then(function(e){return e.json()}).then(function(t){e.setState({list:t.pollList.concat(t.quizList)})})}},{key:"publishHandler",value:function(e,t,n){var r=this;fetch("/api/chnagestatus",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({type:e,id:t,status:n})}).then(function(e){return e.json()}).then(function(e){r.state.list.map(function(t){t.id===e.changeto[0].id&&(t.detail.status=e.changeto[0].status)}),r.setState({list:r.state.list})})}},{key:"render",value:function(){var e=this,t=this.state.list.map(function(t){return h.default.createElement("div",{className:"image-element-class col-md-3",key:t.id},h.default.createElement("div",{className:"card tile "+("save"==t.detail.status?"orange":"green")+" "},h.default.createElement("div",{className:"content"},h.default.createElement(m.Link,{to:"admindetail/"+t.id+"/"+t.type.toLocaleLowerCase()},h.default.createElement("h3",{className:"title"},t.type,": ",t.detail.qus)),h.default.createElement("p",null,"Content...."),h.default.createElement("button",{className:"btn btn-danger",onClick:function(){return e.publishHandler(t.type.toLocaleLowerCase(),t.id,t.detail.status)}},"save"==t.detail.status?"Publish":"Unpublish"))))});return h.default.createElement("div",null,h.default.createElement(p.default,{className:"my-gallery-class",options:y,updateOnEachImageLoad:!1,imagesLoadedOptions:v},t))}}]),t}(f.Component);t.default=g},/* 517 */
/***/
function(e,t,n){var r="undefined"!=typeof window,a=r?window.Masonry||n(518):null,i=r?n(523):null,o=n(524),s=n(545),u=n(556),l=n(559),d=n(21),c=n(2),f=n(629),h={enableResizableChildren:d.bool,disableImagesLoaded:d.bool,onImagesLoaded:d.func,updateOnEachImageLoad:d.bool,options:d.object,imagesLoadedOptions:d.object,elementType:d.string,onLayoutComplete:d.func,onRemoveComplete:d.func},m=f({masonry:!1,erd:void 0,latestKnownDomChildren:[],displayName:"MasonryComponent",imagesLoadedCancelRef:void 0,propTypes:h,getDefaultProps:function(){return{enableResizableChildren:!1,disableImagesLoaded:!1,updateOnEachImageLoad:!1,options:{},imagesLoadedOptions:{},className:"",elementType:"div",onLayoutComplete:function(){},onRemoveComplete:function(){}}},initializeMasonry:function(e){this.masonry&&!e||(this.masonry=new a(this.masonryContainer,this.props.options),this.props.onLayoutComplete&&this.masonry.on("layoutComplete",this.props.onLayoutComplete),this.props.onRemoveComplete&&this.masonry.on("removeComplete",this.props.onRemoveComplete),this.latestKnownDomChildren=this.getCurrentDomChildren())},getCurrentDomChildren:function(){var e=this.masonryContainer,t=this.props.options.itemSelector?e.querySelectorAll(this.props.options.itemSelector):e.children;return Array.prototype.slice.call(t)},diffDomChildren:function(){var e=!1,t=this.latestKnownDomChildren.filter(function(e){/*
       * take only elements attached to DOM
       * (aka the parent is the masonry container, not null)
       * otherwise masonry would try to "remove it" again from the DOM
       */
return!!e.parentNode});/*
     * If not all known children are attached to the dom - we have no other way of notifying
     * masonry to remove the ones not still attached besides invoking a complete item reload.
     * basically all the rest of the code below does not matter in that case.
     */
t.length!==this.latestKnownDomChildren.length&&(e=!0);var n=this.getCurrentDomChildren(),r=t.filter(function(e){return!~n.indexOf(e)}),a=n.filter(function(e){return!~t.indexOf(e)}),i=0,o=a.filter(function(e){var t=i===n.indexOf(e);
// increase the index
return t&&i++,t}),s=a.filter(function(e){return-1===o.indexOf(e)}),u=[];/*
     * This would always be true (see above about the lofic for "removed")
     */
/*
       * 'moved' will contain some random elements (if any) since the "knownChildrenStillAttached" is a filter
       * of the "known" children which are still attached - All indexes could basically change. (for example
       * if the first element is not attached)
       * Don't trust this array.
       */
return 0===r.length&&(u=t.filter(function(e,t){return t!==n.indexOf(e)})),this.latestKnownDomChildren=n,{old:t,// Not used
new:n,// Not used
removed:r,appended:s,prepended:o,moved:u,forceItemReload:e}},performLayout:function(){var e=this.diffDomChildren(),t=e.forceItemReload||e.moved.length>0;
// Would never be true. (see comments of 'diffDomChildren' about 'removed')
e.removed.length>0&&(this.props.enableResizableChildren&&e.removed.forEach(this.erd.removeAllListeners,this.erd),this.masonry.remove(e.removed),t=!0),e.appended.length>0&&(this.masonry.appended(e.appended),0===e.prepended.length&&(t=!0),this.props.enableResizableChildren&&e.appended.forEach(this.listenToElementResize,this)),e.prepended.length>0&&(this.masonry.prepended(e.prepended),this.props.enableResizableChildren&&e.prepended.forEach(this.listenToElementResize,this)),t&&this.masonry.reloadItems(),this.masonry.layout()},derefImagesLoaded:function(){this.imagesLoadedCancelRef(),this.imagesLoadedCancelRef=void 0},imagesLoaded:function(){if(!this.props.disableImagesLoaded){this.imagesLoadedCancelRef&&this.derefImagesLoaded();var e=this.props.updateOnEachImageLoad?"progress":"always",t=u(function(e){this.props.onImagesLoaded&&this.props.onImagesLoaded(e),this.masonry.layout()}.bind(this),100),n=i(this.masonryContainer,this.props.imagesLoadedOptions).on(e,t);this.imagesLoadedCancelRef=function(){n.off(e,t),t.cancel()}}},initializeResizableChildren:function(){this.props.enableResizableChildren&&(this.erd=s({strategy:"scroll"}),this.latestKnownDomChildren.forEach(this.listenToElementResize,this))},listenToElementResize:function(e){this.erd.listenTo(e,function(){this.masonry.layout()}.bind(this))},destroyErd:function(){this.erd&&this.latestKnownDomChildren.forEach(this.erd.uninstall,this.erd)},componentDidMount:function(){this.initializeMasonry(),this.initializeResizableChildren(),this.imagesLoaded()},componentDidUpdate:function(){this.performLayout(),this.imagesLoaded()},componentWillUnmount:function(){this.destroyErd(),
// unregister events
this.props.onLayoutComplete&&this.masonry.off("layoutComplete",this.props.onLayoutComplete),this.props.onRemoveComplete&&this.masonry.off("removeComplete",this.props.onRemoveComplete),this.imagesLoadedCancelRef&&this.derefImagesLoaded(),this.masonry.destroy()},setRef:function(e){this.masonryContainer=e},render:function(){var e=l(this.props,Object.keys(h));return c.createElement(this.props.elementType,o({},e,{ref:this.setRef}),this.props.children)}});e.exports=m,e.exports.default=m},/* 518 */
/***/
function(e,t,n){var r,a,i;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(o,s){
// AMD
a=[n(519),n(139)],r=s,void 0!==(i="function"==typeof r?r.apply(t,a):r)&&(e.exports=i)}(window,function(e,t){"use strict";
// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var n=e.create("masonry");
// isFitWidth -> fitWidth
n.compatOptions.fitWidth="isFitWidth";var r=n.prototype;/**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
// get column position based on horizontal index. #873
return r._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),
// reset column Y
this.colYs=[];for(var e=0;e<this.cols;e++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},r.measureColumns=function(){
// if columnWidth is 0, default to outerWidth of first item
if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;
// columnWidth fall back to item of first element
this.columnWidth=n&&t(n).outerWidth||
// if first elem has no width, default to size of container
this.containerWidth}var r=this.columnWidth+=this.gutter,a=this.containerWidth+this.gutter,i=a/r,o=r-a%r,s=o&&o<1?"round":"floor";i=Math[s](i),this.cols=Math.max(i,1)},r.getContainerWidth=function(){
// container is parent if fit width
var e=this._getOption("fitWidth"),n=e?this.element.parentNode:this.element,r=t(n);this.containerWidth=r&&r.innerWidth},r._getItemLayoutPosition=function(e){e.getSize();
// how many columns does this brick span
var t=e.size.outerWidth%this.columnWidth,n=t&&t<1?"round":"ceil",r=Math[n](e.size.outerWidth/this.columnWidth);r=Math.min(r,this.cols);for(var a=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",i=this[a](r,e),o={x:this.columnWidth*i.col,y:i.y},s=i.y+e.size.outerHeight,u=r+i.col,l=i.col;l<u;l++)this.colYs[l]=s;return o},r._getTopColPosition=function(e){var t=this._getTopColGroup(e),n=Math.min.apply(Math,t);return{col:t.indexOf(n),y:n}},r._getTopColGroup=function(e){if(e<2)
// if brick spans only one column, use all the column Ys
return this.colYs;
// for each group potential horizontal position
for(var t=[],n=this.cols+1-e,r=0;r<n;r++)t[r]=this._getColGroupY(r,e);return t},r._getColGroupY=function(e,t){if(t<2)return this.colYs[e];
// make an array of colY values for that one group
var n=this.colYs.slice(e,e+t);
// and get the max value of the array
return Math.max.apply(Math,n)},r._getHorizontalColPosition=function(e,t){var n=this.horizontalColIndex%this.cols;
// shift to next row if item can't fit on current row
n=e>1&&n+e>this.cols?0:n;
// don't let zero-size items take up space
var r=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=r?n+e:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,e)}},r._manageStamp=function(e){var n=t(e),r=this._getElementOffset(e),a=this._getOption("originLeft"),i=a?r.left:r.right,o=i+n.outerWidth,s=Math.floor(i/this.columnWidth);s=Math.max(0,s);var u=Math.floor(o/this.columnWidth);
// lastCol should not go over if multiple of columnWidth #425
u-=o%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var l=this._getOption("originTop"),d=(l?r.top:r.bottom)+n.outerHeight,c=s;c<=u;c++)this.colYs[c]=Math.max(d,this.colYs[c])},r._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e},r._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;
// fit container to columns that have been used
return(this.cols-e)*this.columnWidth-this.gutter},r.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth},n})},/* 519 */
/***/
function(e,t,n){var r,a;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
!function(i,o){"use strict";r=[n(138),n(139),n(520),n(522)],void 0!==(a=function(e,t,n,r){return o(i,e,t,n,r)}.apply(t,r))&&(e.exports=a)}(window,function(e,t,n,r,a){"use strict";/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function i(e,t){var n=r.getQueryElement(e);if(!n)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(n||e)));this.element=n,
// add jQuery
l&&(this.$element=l(this.element)),
// options
this.options=r.extend({},this.constructor.defaults),this.option(t);
// add id for Outlayer.getFromElement
var a=++c;this.element.outlayerGUID=a,// expando
f[a]=this,// associate via id
// kick it off
this._create(),this._getOption("initLayout")&&this.layout()}function o(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}
// munge time-like parameter into millisecond number
// '0.4s' -> 40
function s(e){if("number"==typeof e)return e;var t=e.match(/(^\d*\.?\d*)(\w*)/),n=t&&t[1],r=t&&t[2];return n.length?(n=parseFloat(n))*(m[r]||1):0}
// ----- vars ----- //
var u=e.console,l=e.jQuery,d=function(){},c=0,f={};
// settings are for internal use only
i.namespace="outlayer",i.Item=a,
// default options
i.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,
// item options
transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var h=i.prototype;
// inherit EvEmitter
r.extend(h,t.prototype),/**
 * set options
 * @param {Object} opts
 */
h.option=function(e){r.extend(this.options,e)},/**
 * get backwards compatible option value, check old name
 */
h._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e]},i.compatOptions={
// currentName: oldName
initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},h._create=function(){
// get items from children
this.reloadItems(),
// elements that affect layout, but are not laid out
this.stamps=[],this.stamp(this.options.stamp),
// set container style
r.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},
// goes through all children again and gets bricks in proper order
h.reloadItems=function(){
// collection of item elements
this.items=this._itemize(this.element.children)},/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
h._itemize=function(e){for(var t=this._filterFindItemElements(e),n=this.constructor.Item,r=[],a=0;a<t.length;a++){var i=t[a],o=new n(i,this);r.push(o)}return r},/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
h._filterFindItemElements=function(e){return r.filterFindElements(e,this.options.itemSelector)},/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
h.getItemElements=function(){return this.items.map(function(e){return e.element})},
// ----- init & layout ----- //
/**
 * lays out all items
 */
h.layout=function(){this._resetLayout(),this._manageStamps();
// don't animate first layout
var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,t),
// flag for initalized
this._isLayoutInited=!0},
// _init is alias for layout
h._init=h.layout,/**
 * logic before any new layout
 */
h._resetLayout=function(){this.getSize()},h.getSize=function(){this.size=n(this.element)},/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
h._getMeasurement=function(e,t){var r,a=this.options[e];a?(
// use option as an element
"string"==typeof a?r=this.element.querySelector(a):a instanceof HTMLElement&&(r=a),
// use size of element, if element
this[e]=r?n(r)[t]:a):
// default to 0
this[e]=0},/**
 * layout a collection of item elements
 * @api public
 */
h.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
h._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored})},/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
h._layoutItems=function(e,t){if(this._emitCompleteOnItems("layout",e),e&&e.length){var n=[];e.forEach(function(e){
// get x/y object from method
var r=this._getItemLayoutPosition(e);
// enqueue
r.item=e,r.isInstant=t||e.isLayoutInstant,n.push(r)},this),this._processLayoutQueue(n)}},/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
h._getItemLayoutPosition=function(){return{x:0,y:0}},/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
h._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t)},this)},
// set stagger from option in milliseconds number
h.updateStagger=function(){var e=this.options.stagger;return null===e||void 0===e?void(this.stagger=0):(this.stagger=s(e),this.stagger)},/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
h._positionItem=function(e,t,n,r,a){r?
// if not transition, just set CSS
e.goTo(t,n):(e.stagger(a*this.stagger),e.moveTo(t,n))},/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
h._postLayout=function(){this.resizeContainer()},h.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
h._getContainerSize=d,/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
h._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;
// add padding and border width if border box
n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
h._emitCompleteOnItems=function(e,t){function n(){a.dispatchEvent(e+"Complete",null,[t])}function r(){++o==i&&n()}var a=this,i=t.length;if(!t||!i)return void n();var o=0;
// bind callback
t.forEach(function(t){t.once(e,r)})},/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
h.dispatchEvent=function(e,t,n){
// add original event to arguments
var r=t?[t].concat(n):n;if(this.emitEvent(e,r),l)if(
// set this.$element
this.$element=this.$element||l(this.element),t){
// create jQuery event
var a=l.Event(t);a.type=e,this.$element.trigger(a,n)}else
// just trigger with type if no event available
this.$element.trigger(e,n)},
// -------------------------- ignore & stamps -------------------------- //
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
h.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},/**
 * return item to layout collection
 * @param {Element} elem
 */
h.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
h.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),
// ignore
e.forEach(this.ignore,this))},/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
h.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){
// filter out removed stamp elements
r.removeFrom(this.stamps,e),this.unignore(e)},this)},/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
h._find=function(e){if(e)
// if string, use argument as selector string
return"string"==typeof e&&(e=this.element.querySelectorAll(e)),e=r.makeArray(e)},h._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},
// update boundingLeft / Top
h._getBoundingRect=function(){
// get bounding rect for container element
var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},/**
 * @param {Element} stamp
**/
h._manageStamp=d,/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
h._getElementOffset=function(e){var t=e.getBoundingClientRect(),r=this._boundingRect,a=n(e);return{left:t.left-r.left-a.marginLeft,top:t.top-r.top-a.marginTop,right:r.right-t.right-a.marginRight,bottom:r.bottom-t.bottom-a.marginBottom}},
// -------------------------- resize -------------------------- //
// enable event handlers for listeners
// i.e. resize -> onresize
h.handleEvent=r.handleEvent,/**
 * Bind layout to window resizing
 */
h.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},/**
 * Unbind layout to window resizing
 */
h.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},h.onresize=function(){this.resize()},r.debounceMethod(i,"onresize",100),h.resize=function(){
// don't trigger if size did not change
// or if resize was unbound. See #9
this.isResizeBound&&this.needsResizeLayout()&&this.layout()},/**
 * check if layout is needed post layout
 * @returns Boolean
 */
h.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth},
// -------------------------- methods -------------------------- //
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
h.addItems=function(e){var t=this._itemize(e);
// add items to collection
return t.length&&(this.items=this.items.concat(t)),t},/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
h.appended=function(e){var t=this.addItems(e);t.length&&(
// layout and reveal just the new items
this.layoutItems(t,!0),this.reveal(t))},/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
h.prepended=function(e){var t=this._itemize(e);if(t.length){
// add items to beginning of collection
var n=this.items.slice(0);this.items=t.concat(n),
// start new layout
this._resetLayout(),this._manageStamps(),
// layout new stuff without transition
this.layoutItems(t,!0),this.reveal(t),
// layout previous items
this.layoutItems(n)}},/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
h.reveal=function(e){if(this._emitCompleteOnItems("reveal",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.reveal()})}},/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
h.hide=function(e){if(this._emitCompleteOnItems("hide",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.hide()})}},/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
h.revealItemElements=function(e){var t=this.getItems(e);this.reveal(t)},/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
h.hideItemElements=function(e){var t=this.getItems(e);this.hide(t)},/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
h.getItem=function(e){
// loop through items to get the one that matches
for(var t=0;t<this.items.length;t++){var n=this.items[t];if(n.element==e)
// return item
return n}},/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
h.getItems=function(e){e=r.makeArray(e);var t=[];return e.forEach(function(e){var n=this.getItem(e);n&&t.push(n)},this),t},/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
h.remove=function(e){var t=this.getItems(e);this._emitCompleteOnItems("remove",t),
// bail if no items to remove
t&&t.length&&t.forEach(function(e){e.remove(),
// remove item from collection
r.removeFrom(this.items,e)},this)},
// ----- destroy ----- //
// remove and disable Outlayer instance
h.destroy=function(){
// clean up dynamic styles
var e=this.element.style;e.height="",e.position="",e.width="",
// destroy items
this.items.forEach(function(e){e.destroy()}),this.unbindResize();var t=this.element.outlayerGUID;delete f[t],// remove reference to instance by id
delete this.element.outlayerGUID,
// remove data for jQuery
l&&l.removeData(this.element,this.constructor.namespace)},
// -------------------------- data -------------------------- //
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
i.data=function(e){e=r.getQueryElement(e);var t=e&&e.outlayerGUID;return t&&f[t]},
// -------------------------- create Outlayer class -------------------------- //
/**
 * create a layout class
 * @param {String} namespace
 */
i.create=function(e,t){
// sub-class Outlayer
var n=o(i);
// apply new options and compatOptions
// sub-class Item
// -------------------------- declarative -------------------------- //
// -------------------------- jQuery bridge -------------------------- //
// make into jQuery plugin
return n.defaults=r.extend({},i.defaults),r.extend(n.defaults,t),n.compatOptions=r.extend({},i.compatOptions),n.namespace=e,n.data=i.data,n.Item=o(a),r.htmlInit(n,e),l&&l.bridget&&l.bridget(e,n),n};
// ----- helpers ----- //
// how many milliseconds are in each unit
var m={ms:1,s:1e3};
// ----- fin ----- //
// back in global
return i.Item=a,i})},/* 520 */
/***/
function(e,t,n){var r,a;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
!function(i,o){
// AMD
r=[n(521)],void 0!==(a=function(e){return o(i,e)}.apply(t,r))&&(e.exports=a)}(window,function(e,t){"use strict";var n={};
// ----- extend ----- //
// extends objects
n.extend=function(e,t){for(var n in t)e[n]=t[n];return e},
// ----- modulo ----- //
n.modulo=function(e,t){return(e%t+t)%t};
// ----- makeArray ----- //
var r=Array.prototype.slice;
// turn element or nodeList into an array
n.makeArray=function(e){
// return empty array if undefined or null. #6
return Array.isArray(e)?e:null===e||void 0===e?[]:"object"==typeof e&&"number"==typeof e.length?r.call(e):[e]},
// ----- removeFrom ----- //
n.removeFrom=function(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)},
// ----- getParent ----- //
n.getParent=function(e,n){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,t(e,n))return e},
// ----- getQueryElement ----- //
// use element as selector string
n.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},
// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
n.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},
// ----- filterFindElements ----- //
n.filterFindElements=function(e,r){
// make array of elems
e=n.makeArray(e);var a=[];return e.forEach(function(e){
// check that elem is an actual element
if(e instanceof HTMLElement){
// add elem if no selector
if(!r)return void a.push(e);
// filter & find items if we have a selector
// filter
t(e,r)&&a.push(e);
// concat childElems to filterFound array
for(var n=e.querySelectorAll(r),i=0;i<n.length;i++)a.push(n[i])}}),a},
// ----- debounceMethod ----- //
n.debounceMethod=function(e,t,n){n=n||100;
// original method
var r=e.prototype[t],a=t+"Timeout";e.prototype[t]=function(){var e=this[a];clearTimeout(e);var t=arguments,i=this;this[a]=setTimeout(function(){r.apply(i,t),delete i[a]},n)}},
// ----- docReady ----- //
n.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?
// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(e):document.addEventListener("DOMContentLoaded",e)},
// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
n.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var a=e.console;
// -----  ----- //
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
return n.htmlInit=function(t,r){n.docReady(function(){var i=n.toDashed(r),o="data-"+i,s=document.querySelectorAll("["+o+"]"),u=document.querySelectorAll(".js-"+i),l=n.makeArray(s).concat(n.makeArray(u)),d=o+"-options",c=e.jQuery;l.forEach(function(e){var n,i=e.getAttribute(o)||e.getAttribute(d);try{n=i&&JSON.parse(i)}catch(t){
// log error, do not initialize
return void(a&&a.error("Error parsing "+o+" on "+e.className+": "+t))}
// initialize
var s=new t(e,n);
// make available via $().data('namespace')
c&&c.data(e,r,s)})})},n})},/* 521 */
/***/
function(e,t,n){var r,a;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
!function(i,o){/*global define: false, module: false */
"use strict";r=o,void 0!==(a="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=a)}(window,function(){"use strict";var e=function(){var e=window.Element.prototype;
// check for the standard method name first
if(e.matches)return"matches";
// check un-prefixed
if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0;n<t.length;n++){var r=t[n],a=r+"MatchesSelector";if(e[a])return a}}();return function(t,n){return t[e](n)}})},/* 522 */
/***/
function(e,t,n){var r,a,i;/**
 * Outlayer Item
 */
!function(o,s){
// AMD - RequireJS
a=[n(138),n(139)],r=s,void 0!==(i="function"==typeof r?r.apply(t,a):r)&&(e.exports=i)}(window,function(e,t){"use strict";
// ----- helpers ----- //
function n(e){for(var t in e)return!1;return null,!0}
// -------------------------- Item -------------------------- //
function r(e,t){e&&(this.element=e,
// parent layout class, i.e. Masonry, Isotope, or Packery
this.layout=t,this.position={x:0,y:0},this._create())}
// -------------------------- CSS3 support -------------------------- //
var a=document.documentElement.style,i="string"==typeof a.transition?"transition":"WebkitTransition",o="string"==typeof a.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[i],u={transform:o,transition:i,transitionDuration:i+"Duration",transitionProperty:i+"Property",transitionDelay:i+"Delay"},l=r.prototype=Object.create(e.prototype);l.constructor=r,l._create=function(){
// transition objects
this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},
// trigger specified handler for event type
l.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.getSize=function(){this.size=t(this.element)},/**
 * apply CSS styles to element
 * @param {Object} style
 */
l.css=function(e){var t=this.element.style;for(var n in e){t[u[n]||n]=e[n]}},
// measure position, and sets it
l.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),r=e[t?"left":"right"],a=e[n?"top":"bottom"],i=parseFloat(r),o=parseFloat(a),s=this.layout.size;-1!=r.indexOf("%")&&(i=i/100*s.width),-1!=a.indexOf("%")&&(o=o/100*s.height),
// clean up 'auto' or other non-integer values
i=isNaN(i)?0:i,o=isNaN(o)?0:o,
// remove padding from measurement
i-=t?s.paddingLeft:s.paddingRight,o-=n?s.paddingTop:s.paddingBottom,this.position.x=i,this.position.y=o},
// set settled position, apply padding
l.layoutPosition=function(){var e=this.layout.size,t={},n=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop"),a=n?"paddingLeft":"paddingRight",i=n?"left":"right",o=n?"right":"left",s=this.position.x+e[a];
// set in percentage or pixels
t[i]=this.getXValue(s),
// reset other property
t[o]="";
// y
var u=r?"paddingTop":"paddingBottom",l=r?"top":"bottom",d=r?"bottom":"top",c=this.position.y+e[u];
// set in percentage or pixels
t[l]=this.getYValue(c),
// reset other property
t[d]="",this.css(t),this.emitEvent("layout",[this])},l.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},l.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},l._transitionTo=function(e,t){this.getPosition();
// get current x & y from top/left
var n=this.position.x,r=this.position.y,a=e==this.position.x&&t==this.position.y;
// if did not move and not transitioning, just go to layout
if(
// save end position
this.setPosition(e,t),a&&!this.isTransitioning)return void this.layoutPosition();var i=e-n,o=t-r,s={};s.transform=this.getTranslate(i,o),this.transition({to:s,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},l.getTranslate=function(e,t){
// flip cooridinates if origin on right or bottom
var n=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop");return e=n?e:-e,t=r?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},
// non transition + transform support
l.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},l.moveTo=l._transitionTo,l.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},
// ----- transition ----- //
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */
// non transition, just trigger callback
l._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
l.transition=function(e){
// redirect to nonTransition if no transition duration
if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);var t=this._transn;
// keep track of onTransitionEnd callback by css property
for(var n in e.onTransitionEnd)t.onEnd[n]=e.onTransitionEnd[n];
// keep track of properties that are transitioning
for(n in e.to)t.ingProperties[n]=!0,
// keep track of properties to clean up when transition is done
e.isCleaning&&(t.clean[n]=!0);
// set from styles
if(e.from){this.css(e.from);
// force redraw. http://blog.alexmaccaw.com/css-transitions
this.element.offsetHeight;
// hack for JSHint to hush about unused var
null}
// enable transition
this.enableTransition(e.to),
// set styles that are transitioning
this.css(e.to),this.isTransitioning=!0};var d="opacity,"+
// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(o);l.enableTransition=function(){
// HACK changing transitionProperty during a transition
// will cause transition to jump
if(!this.isTransitioning){
// make `transition: foo, bar, baz` from style object
// HACK un-comment this when enableTransition can work
// while a transition is happening
// var transitionValues = [];
// for ( var prop in style ) {
//   // dash-ify camelCased properties like WebkitTransition
//   prop = vendorProperties[ prop ] || prop;
//   transitionValues.push( toDashedAll( prop ) );
// }
// munge number to millisecond, to match stagger
var e=this.layout.options.transitionDuration;e="number"==typeof e?e+"ms":e,
// enable transition styles
this.css({transitionProperty:d,transitionDuration:e,transitionDelay:this.staggerDelay||0}),
// listen for transition end event
this.element.addEventListener(s,this,!1)}},
// ----- events ----- //
l.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},l.onotransitionend=function(e){this.ontransitionend(e)};
// properties that I munge to make my life easier
var c={"-webkit-transform":"transform"};l.ontransitionend=function(e){
// disregard bubbled events from children
if(e.target===this.element){var t=this._transn,r=c[e.propertyName]||e.propertyName;
// trigger onTransitionEnd callback
if(
// remove property that has completed transitioning
delete t.ingProperties[r],
// check if any properties are still transitioning
n(t.ingProperties)&&
// all properties have completed transitioning
this.disableTransition(),
// clean style
r in t.clean&&(
// clean up style
this.element.style[e.propertyName]="",delete t.clean[r]),r in t.onEnd){t.onEnd[r].call(this),delete t.onEnd[r]}this.emitEvent("transitionEnd",[this])}},l.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},/**
 * removes style property from element
 * @param {Object} style
**/
l._removeStyles=function(e){
// clean up transition styles
var t={};for(var n in e)t[n]="";this.css(t)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};
// ----- stagger ----- //
// ----- show/hide/remove ----- //
// remove element from DOM
/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
return l.removeTransitionStyles=function(){
// remove transition
this.css(f)},l.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},l.removeElem=function(){this.element.parentNode.removeChild(this.element),
// remove display: none
this.css({display:""}),this.emitEvent("remove",[this])},l.remove=function(){
// just remove element if no transition support or no transition
if(!i||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
// start transition
this.once("transitionEnd",function(){this.removeElem()}),this.hide()},l.reveal=function(){delete this.isHidden,
// remove display: none
this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},l.onRevealTransitionEnd=function(){
// check if still visible
// during transition, item may have been hidden
this.isHidden||this.emitEvent("reveal")},l.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];
// use opacity
if(t.opacity)return"opacity";
// get first property
for(var n in t)return n},l.hide=function(){
// set flag
this.isHidden=!0,
// remove display: none
this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,
// keep hidden stuff hidden
isCleaning:!0,onTransitionEnd:t})},l.onHideTransitionEnd=function(){
// check if still hidden
// during transition, item may have been un-hidden
this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},l.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},r})},/* 523 */
/***/
function(e,t,n){var r,a;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(i,o){"use strict";r=[n(138)],void 0!==(a=function(e){return o(i,e)}.apply(t,r))&&(e.exports=a)}("undefined"!=typeof window?window:this,
// --------------------------  factory -------------------------- //
function(e,t){"use strict";
// -------------------------- helpers -------------------------- //
// extend objects
function n(e,t){for(var n in t)e[n]=t[n];return e}
// turn element or nodeList into an array
function r(e){return Array.isArray(e)?e:"object"==typeof e&&"number"==typeof e.length?l.call(e):[e]}
// -------------------------- imagesLoaded -------------------------- //
/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function a(e,t,i){
// coerce ImagesLoaded() without new, to be new ImagesLoaded()
if(!(this instanceof a))return new a(e,t,i);
// use elem as selector string
var o=e;
// bail if bad element
if("string"==typeof e&&(o=document.querySelectorAll(e)),!o)return void u.error("Bad element for imagesLoaded "+(o||e));this.elements=r(o),this.options=n({},this.options),
// shift arguments if no options set
"function"==typeof t?i=t:n(this.options,t),i&&this.on("always",i),this.getImages(),s&&(
// add jQuery Deferred object
this.jqDeferred=new s.Deferred),
// HACK check async to allow time to bind listeners
setTimeout(this.check.bind(this))}
// --------------------------  -------------------------- //
function i(e){this.img=e}
// -------------------------- Background -------------------------- //
function o(e,t){this.url=e,this.element=t,this.img=new Image}var s=e.jQuery,u=e.console,l=Array.prototype.slice;a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],
// filter & find items if we have an item selector
this.elements.forEach(this.addElementImages,this)},/**
 * @param {Node} element
 */
a.prototype.addElementImages=function(e){
// filter siblings
"IMG"==e.nodeName&&this.addImage(e),
// get background image on element
!0===this.options.background&&this.addElementBackgroundImages(e);
// find children
// no non-element nodes, #143
var t=e.nodeType;if(t&&d[t]){
// concat childElems to filterFound array
for(var n=e.querySelectorAll("img"),r=0;r<n.length;r++){var a=n[r];this.addImage(a)}
// get child background images
if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(r=0;r<i.length;r++){var o=i[r];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};
// --------------------------  -------------------------- //
/**
 * @param {Image} img
 */
// ----- events ----- //
// trigger specified handler for event type
// inherit LoadingImage prototype
// -------------------------- jQuery -------------------------- //
// try making plugin
return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(
// get url inside url("...")
var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(t.backgroundImage);null!==r;){var a=r&&r[2];a&&this.addBackground(a,e),r=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new i(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new o(e,t);this.images.push(n)},a.prototype.check=function(){function e(e,n,r){
// HACK - Chrome triggers event before object properties have changed. #83
setTimeout(function(){t.progress(e,n,r)})}var t=this;
// complete if no images
if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();this.images.forEach(function(t){t.once("progress",e),t.check()})},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,
// progress event
this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),
// check if completed
this.progressedCount==this.images.length&&this.complete(),this.options.debug&&u&&u.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},i.prototype=Object.create(t.prototype),i.prototype.check=function(){if(this.getIsImageComplete())
// report based on naturalWidth
return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");
// If none of the checks above matched, simulate loading on detached element.
this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),
// bind to image as well for Firefox. #191
this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},i.prototype.getIsImageComplete=function(){
// check for non-zero, non-undefined naturalWidth
// fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype=Object.create(i.prototype),o.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},o.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&(
// set local variable
s=t,
// $().imagesLoaded()
s.fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(s(this))})},a.makeJQueryPlugin(),a})},/* 524 */
/***/
function(e,t,n){var r=n(140),a=n(76),i=n(531),o=n(98),s=n(99),u=n(100),l=Object.prototype,d=l.hasOwnProperty,c=i(function(e,t){if(s(t)||o(t))return void a(t,u(t),e);for(var n in t)d.call(t,n)&&r(e,n,t[n])});e.exports=c},/* 525 */
/***/
function(e,t,n){/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function r(e){return!(!o(e)||i(e))&&(a(e)?m:l).test(s(e))}var a=n(329),i=n(528),o=n(46),s=n(331),u=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,d=Function.prototype,c=Object.prototype,f=d.toString,h=c.hasOwnProperty,m=RegExp("^"+f.call(h).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},/* 526 */
/***/
function(e,t,n){/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function r(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(t?e[u]=n:delete e[u]),a}var a=n(88),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,u=a?a.toStringTag:void 0;e.exports=r},/* 527 */
/***/
function(e,t){/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function n(e){return a.call(e)}/** Used for built-in method references. */
var r=Object.prototype,a=r.toString;e.exports=n},/* 528 */
/***/
function(e,t,n){/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function r(e){return!!i&&i in e}var a=n(529),i=function(){var e=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},/* 529 */
/***/
function(e,t,n){var r=n(30),a=r["__core-js_shared__"];e.exports=a},/* 530 */
/***/
function(e,t){/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function n(e,t){return null==e?void 0:e[t]}e.exports=n},/* 531 */
/***/
function(e,t,n){/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function r(e){return a(function(t,n){var r=-1,a=n.length,o=a>1?n[a-1]:void 0,s=a>2?n[2]:void 0;for(o=e.length>3&&"function"==typeof o?(a--,o):void 0,s&&i(n[0],n[1],s)&&(o=a<3?void 0:o,a=1),t=Object(t);++r<a;){var u=n[r];u&&e(t,u,r,o)}return t})}var a=n(532),i=n(537);e.exports=r},/* 532 */
/***/
function(e,t,n){/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function r(e,t){return o(i(e,t,a),e+"")}var a=n(332),i=n(333),o=n(334);e.exports=r},/* 533 */
/***/
function(e,t){/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},/* 534 */
/***/
function(e,t,n){var r=n(535),a=n(328),i=n(332),o=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:i;e.exports=o},/* 535 */
/***/
function(e,t){/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function n(e){return function(){return e}}e.exports=n},/* 536 */
/***/
function(e,t){/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function n(e){var t=0,n=0;return function(){var o=i(),s=a-(o-n);if(n=o,s>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}/** Used to detect hot functions by number of calls within a span of milliseconds. */
var r=800,a=16,i=Date.now;e.exports=n},/* 537 */
/***/
function(e,t,n){/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function r(e,t,n){if(!s(n))return!1;var r=typeof t;return!!("number"==r?i(n)&&o(t,n.length):"string"==r&&t in n)&&a(n[t],e)}var a=n(142),i=n(98),o=n(336),s=n(46);e.exports=r},/* 538 */
/***/
function(e,t){/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},/* 539 */
/***/
function(e,t,n){/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function r(e){return i(e)&&a(e)==o}var a=n(75),i=n(55),o="[object Arguments]";e.exports=r},/* 540 */
/***/
function(e,t){/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function n(){return!1}e.exports=n},/* 541 */
/***/
function(e,t,n){var r=n(542),a=n(143),i=n(144),o=i&&i.isTypedArray,s=o?a(o):r;e.exports=s},/* 542 */
/***/
function(e,t,n){/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function r(e){return o(e)&&i(e.length)&&!!s[a(e)]}var a=n(75),i=n(335),o=n(55),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,e.exports=r},/* 543 */
/***/
function(e,t,n){/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function r(e){if(!a(e))return i(e);var t=[];for(var n in Object(e))s.call(e,n)&&"constructor"!=n&&t.push(n);return t}var a=n(99),i=n(544),o=Object.prototype,s=o.hasOwnProperty;e.exports=r},/* 544 */
/***/
function(e,t,n){var r=n(340),a=r(Object.keys,Object);e.exports=a},/* 545 */
/***/
function(e,t,n){"use strict";function r(e){return Array.isArray(e)||void 0!==e.length}function a(e){if(Array.isArray(e))return e;var t=[];return s(e,function(e){t.push(e)}),t}function i(e){return e&&1===e.nodeType}function o(e,t,n){var r=e[t];return void 0!==r&&null!==r||void 0===n?r:n}var s=n(341).forEach,u=n(546),l=n(547),d=n(548),c=n(549),f=n(550),h=n(342),m=n(551),_=n(553),p=n(554),y=n(555);/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */
/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */
/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
e.exports=function(e){/**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
function t(e,t,n){function u(e){var t=w.get(e);s(t,function(t){t(e)})}function l(e,t,n){w.add(t,n),e&&n(t)}if(
//Options object may be omitted.
n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(i(t))
// A single element has been passed in.
t=[t];else{if(!r(t))return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
// Convert collection to array for plugins.
// TODO: May want to check so that all the elements in the collection are valid elements.
t=a(t)}var d=0,c=o(e,"callOnAdd",k.callOnAdd),f=o(e,"onReady",function(){}),h=o(e,"debug",k.debug);s(t,function(e){_.getState(e)||(_.initState(e),v.set(e));var r=v.get(e);if(h&&b.log("Attaching listener to element",r,e),!x.isDetectable(e))
//The element is being prepared to be detectable. Do not make it detectable.
//Just add the listener, because the element will soon be detectable.
//The element is not prepared to be detectable, so do prepare it and add a listener to it.
return h&&b.log(r,"Not detectable."),x.isBusy(e)?(h&&b.log(r,"System busy making it detectable"),l(c,e,n),T[r]=T[r]||[],void T[r].push(function(){++d===t.length&&f()})):(h&&b.log(r,"Making detectable..."),x.markBusy(e,!0),Y.makeDetectable({debug:h},e,function(e){if(h&&b.log(r,"onElementDetectable"),_.getState(e)){x.markAsDetectable(e),x.markBusy(e,!1),Y.addListener(e,u),l(c,e,n);
// Since the element size might have changed since the call to "listenTo", we need to check for this change,
// so that a resize event may be emitted.
// Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
// Also, check the state existance before since the element may have been uninstalled in the installation process.
var a=_.getState(e);if(a&&a.startSize){var i=e.offsetWidth,o=e.offsetHeight;a.startSize.width===i&&a.startSize.height===o||u(e)}T[r]&&s(T[r],function(e){e()})}else
// The element has been unisntalled before being detectable.
h&&b.log(r,"Element uninstalled before being detectable.");delete T[r],++d===t.length&&f()}));h&&b.log(r,"Already detecable, adding listener."),
//The element has been prepared to be detectable and is ready to be listened to.
l(c,e,n),d++}),d===t.length&&f()}function n(e){if(!e)return b.error("At least one element is required.");if(i(e))
// A single element has been passed in.
e=[e];else{if(!r(e))return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
// Convert collection to array for plugins.
// TODO: May want to check so that all the elements in the collection are valid elements.
e=a(e)}s(e,function(e){w.removeAllListeners(e),Y.uninstall(e),_.cleanState(e)})}e=e||{};
//idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
var v;if(e.idHandler)
// To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
// so that readonly flag always is true when it's used here. This may be removed next major version bump.
v={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var g=d(),M=c({idGenerator:g,stateHandler:_});v=M}
//reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
var b=e.reporter;if(!b){b=f(!1===b)}
//batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
var L=o(e,"batchProcessor",m({reporter:b})),k={};k.callOnAdd=!!o(e,"callOnAdd",!0),k.debug=!!o(e,"debug",!1);var Y,w=l(v),x=u({stateHandler:_}),D=o(e,"strategy","object"),S={reporter:b,batchProcessor:L,stateHandler:_,idHandler:v};if("scroll"===D&&(h.isLegacyOpera()?(b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),D="object"):h.isIE(9)&&(b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),D="object")),"scroll"===D)Y=y(S);else{if("object"!==D)throw new Error("Invalid strategy name: "+D);Y=p(S)}
//Calls can be made to listenTo with elements that are still being installed.
//Also, same elements can occur in the elements list in the listenTo function.
//With this map, the ready callbacks can be synchronized between the calls
//so that the ready callback can always be called when an element is ready - even if
//it wasn't installed from the function itself.
var T={};return{listenTo:t,removeListener:w.removeListener,removeAllListeners:w.removeAllListeners,uninstall:n}}},/* 546 */
/***/
function(e,t,n){"use strict";e.exports=function(e){/**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
function t(e){var t=i(e);return t&&!!t.isDetectable}/**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
function n(e){i(e).isDetectable=!0}/**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
function r(e){return!!i(e).busy}/**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
function a(e,t){i(e).busy=!!t}var i=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:r,markBusy:a}}},/* 547 */
/***/
function(e,t,n){"use strict";e.exports=function(e){/**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
function t(t){var n=e.get(t);return void 0===n?[]:i[n]||[]}/**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
function n(t,n){var r=e.get(t);i[r]||(i[r]=[]),i[r].push(n)}function r(e,n){for(var r=t(e),a=0,i=r.length;a<i;++a)if(r[a]===n){r.splice(a,1);break}}function a(e){var n=t(e);n&&(n.length=0)}var i={};return{get:t,add:n,removeListener:r,removeAllListeners:a}}},/* 548 */
/***/
function(e,t,n){"use strict";e.exports=function(){/**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
function e(){return t++}var t=1;return{generate:e}}},/* 549 */
/***/
function(e,t,n){"use strict";e.exports=function(e){/**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
function t(e){var t=a(e);return t&&void 0!==t.id?t.id:null}/**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
function n(e){var t=a(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=r.generate();return t.id=n,n}var r=e.idGenerator,a=e.stateHandler.getState;return{get:t,set:n}}},/* 550 */
/***/
function(e,t,n){"use strict";/* global console: false */
/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var r=function(e,t){
//The proxy is needed to be able to call the method with the console context,
//since we cannot use bind.
e[t]=function(){var e=console[t];if(e.apply)//IE9 does not support console.log.apply :)
e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};r(n,"log"),r(n,"warn"),r(n,"error")}return n}},/* 551 */
/***/
function(e,t,n){"use strict";function r(){function e(e,t){t||(t=e,e=0),e>i?i=e:e<o&&(o=e),r[e]||(r[e]=[]),r[e].push(t),a++}function t(){for(var e=o;e<=i;e++)for(var t=r[e],n=0;n<t.length;n++){var a=t[n];a()}}function n(){return a}var r={},a=0,i=0,o=0;return{add:e,process:t,size:n}}var a=n(552);e.exports=function(e){function t(e,t){!m&&c&&d&&0===h.size()&&
// Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
// This needs to be done before, since we're checking the size of the batch to be 0.
o(),h.add(e,t)}function n(){for(
// Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
// Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
m=!0;h.size();){var e=h;h=r(),e.process()}m=!1}function i(e){m||(void 0===e&&(e=d),f&&(s(f),f=null),e?o():n())}function o(){f=u(n)}function s(e){return clearTimeout(e)}function u(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var l=e.reporter,d=a.getOption(e,"async",!0),c=a.getOption(e,"auto",!0);c&&!d&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),d=!0);var f,h=r(),m=!1;return{add:t,force:i}}},/* 552 */
/***/
function(e,t,n){"use strict";function r(e,t,n){var r=e[t];return void 0!==r&&null!==r||void 0===n?r:n}(e.exports={}).getOption=r},/* 553 */
/***/
function(e,t,n){"use strict";function r(e){return e[o]={},a(e)}function a(e){return e[o]}function i(e){delete e[o]}var o="_erd";e.exports={initState:r,getState:a,cleanState:i}},/* 554 */
/***/
function(e,t,n){"use strict";/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */
var r=n(342);e.exports=function(e){/**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
function t(e,t){function n(){t(e)}if(!a(e))throw new Error("Element is not detectable by this strategy.");if(r.isIE(8))
//IE 8 does not support object, but supports the resize event directly on elements.
u(e).object={proxy:n},e.attachEvent("onresize",n);else{a(e).contentDocument.defaultView.addEventListener("resize",n)}}/**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
function n(e,t,n){n||(n=t,t=e,e=null),e=e||{};e.debug;r.isIE(8)?
//IE 8 does not support objects properly. Luckily they do support the resize event.
//So do not inject the object and notify that the element is already ready to be listened to.
//The event handler for the resize event is attached in the utils.addListener instead.
n(t):function(e,t){function n(){function n(){if("static"===l.position){e.style.position="relative";var t=function(e,t,n,r){var a=n[r];"auto"!==a&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(a)&&(e.warn("An element that is positioned static has style."+r+"="+a+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",t),t.style[r]=0)};
//Check so that there are no accidental styles that will make the element styled differently now that is is relative.
//If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
t(o,e,l,"top"),t(o,e,l,"right"),t(o,e,l,"bottom"),t(o,e,l,"left")}}function s(){/*jshint validthis: true */
function r(e,t){
//Opera 12 seem to call the object.onload before the actual document has been created.
//So if it is not present, poll it with an timeout until it is present.
//TODO: Could maybe be handled better with object.onreadystatechange or similar.
if(!e.contentDocument)return void setTimeout(function(){r(e,t)},100);t(e.contentDocument)}
// The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
i||n(),
//Create the style element to be added to the object.
r(this,function(n){
//Notify that the element is ready to be listened to.
t(e)})}
// The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
// The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
""!==l.position&&(n(l),i=!0);
//Add an object element as a child to the target element that will be listened to for resize events.
var d=document.createElement("object");d.style.cssText=a,d.tabIndex=-1,d.type="text/html",d.onload=s,
//Safari: This must occur before adding the object to the DOM.
//IE: Does not like that this happens before, even if it is also added after.
r.isIE()||(d.data="about:blank"),e.appendChild(d),u(e).object=d,
//IE: This must occur after adding the object to the DOM.
r.isIE()&&(d.data="about:blank")}var a="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",i=!1,l=window.getComputedStyle(e),d=e.offsetWidth,c=e.offsetHeight;u(e).startSize={width:d,height:c},s?s.add(n):n()}(t,n)}/**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
function a(e){return u(e).object}function i(e){r.isIE(8)?e.detachEvent("onresize",u(e).object.proxy):e.removeChild(a(e)),delete u(e).object}e=e||{};var o=e.reporter,s=e.batchProcessor,u=e.stateHandler.getState;if(!o)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:t,uninstall:i}}},/* 555 */
/***/
function(e,t,n){"use strict";/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */
var r=n(341).forEach;e.exports=function(e){function t(e){e.className+=" "+_+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return d.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function a(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return d.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function i(e){return f(e).container.childNodes[0].childNodes[0].childNodes[0]}function o(e){return f(e).container.childNodes[0].childNodes[0].childNodes[1]}/**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
function s(e,t){if(!f(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");f(e).listeners.push(t)}/**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
function u(e,a,s){function u(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(h.get(a),"Scroll: "),d.log.apply)d.log.apply(null,t);else for(var n=0;n<t.length;n++)d.log(t[n])}}function l(e){
// Check the absolute positioned container since the top level container is display: inline.
var t=f(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function p(){
// Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
// so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
var e=window.getComputedStyle(a),t={};return t.position=e.position,t.width=a.offsetWidth,t.height=a.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function y(){var e=p();f(a).startSize={width:e.width,height:e.height},u("Element start size",f(a).startSize)}function v(){f(a).listeners=[]}function g(){if(u("storeStyle invoked."),!f(a))return void u("Aborting because element has been uninstalled");var e=p();f(a).style=e}function M(e,t,n){f(e).lastWidth=t,f(e).lastHeight=n}function b(e){return i(e).childNodes[0]}function L(){return 2*m.width+1}function k(){return 2*m.height+1}function Y(e){return e+10+L()}function w(e){return e+10+k()}function x(e){return 2*e+L()}function D(e){return 2*e+k()}function S(e,t,n){var r=i(e),a=o(e),s=Y(t),u=w(n),l=x(t),d=D(n);r.scrollLeft=s,r.scrollTop=u,a.scrollLeft=l,a.scrollTop=d}function T(){var e=f(a).container;if(!e){e=document.createElement("div"),e.className=_,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",f(a).container=e,t(e),a.appendChild(e);var r=function(){f(a).onRendered&&f(a).onRendered()};n(e,"animationstart",r),
// Store the event handler here so that they may be removed when uninstall is called.
// See uninstall function for an explanation why it is needed.
f(a).onAnimationStart=r}return e}function E(){function e(){f(a).onExpand&&f(a).onExpand()}function t(){f(a).onShrink&&f(a).onShrink()}if(u("Injecting elements"),!f(a))return void u("Aborting because element has been uninstalled");!function(){var e=f(a).style;if("static"===e.position){a.style.position="relative";var t=function(e,t,n,r){var a=n[r];"auto"!==a&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(a)&&(e.warn("An element that is positioned static has style."+r+"="+a+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",t),t.style[r]=0)};
//Check so that there are no accidental styles that will make the element styled differently now that is is relative.
//If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
t(d,a,e,"top"),t(d,a,e,"right"),t(d,a,e,"bottom"),t(d,a,e,"left")}}();var r=f(a).container;r||(r=T());
// Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
// we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
// the targeted element.
// When the bug is resolved, "containerContainer" may be removed.
// The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
// This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.
var i=m.width,o=m.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,r){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",r=r?r+"px":"0","left: "+e+"; top: "+t+"; right: "+r+"; bottom: "+n+";"}(-(1+i),-(1+o),-o,-i),l=document.createElement("div"),c=document.createElement("div"),h=document.createElement("div"),p=document.createElement("div"),y=document.createElement("div"),v=document.createElement("div");
// Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
// However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
l.dir="ltr",l.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",l.className=_,c.className=_,c.style.cssText=s,h.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",p.style.cssText="position: absolute; left: 0; top: 0;",y.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",v.style.cssText="position: absolute; width: 200%; height: 200%;",h.appendChild(p),y.appendChild(v),c.appendChild(h),c.appendChild(y),l.appendChild(c),r.appendChild(l),n(h,"scroll",e),n(y,"scroll",t),
// Store the event handlers here so that they may be removed when uninstall is called.
// See uninstall function for an explanation why it is needed.
f(a).onExpandScroll=e,f(a).onShrinkScroll=t}function j(){function t(e,t,n){var r=b(e),a=Y(t),i=w(n);r.style.width=a+"px",r.style.height=i+"px"}function n(n){var r=a.offsetWidth,i=a.offsetHeight;u("Storing current size",r,i),
// Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
// Otherwise the if-check in handleScroll is useless.
M(a,r,i),
// Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
// Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.
c.add(0,function(){if(!f(a))return void u("Aborting because element has been uninstalled");if(!s())return void u("Aborting because element container has not been initialized");if(e.debug){var n=a.offsetWidth,o=a.offsetHeight;n===r&&o===i||d.warn(h.get(a),"Scroll: Size changed before updating detector elements.")}t(a,r,i)}),c.add(1,function(){return f(a)?s()?void S(a,r,i):void u("Aborting because element container has not been initialized"):void u("Aborting because element has been uninstalled")}),n&&c.add(2,function(){return f(a)?s()?void n():void u("Aborting because element container has not been initialized"):void u("Aborting because element has been uninstalled")})}function s(){return!!f(a).container}function m(){u("notifyListenersIfNeeded invoked");var e=f(a);
// Don't notify the if the current size is the start size, and this is the first notification.
// Don't notify the if the current size is the start size, and this is the first notification.
// Don't notify if the size already has been notified.
return function(){return void 0===f(a).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?u("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?u("Not notifying: Size already notified"):(u("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void r(f(a).listeners,function(e){e(a)}))}function _(){if(u("startanimation triggered."),l(a))return void u("Ignoring since element is still unrendered...");u("Element rendered.");var e=i(a),t=o(a);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(u("Scrollbars out of sync. Updating detector elements..."),n(m))}function p(){if(u("Scroll detected."),l(a))
// Element is still unrendered. Skip this scroll event.
return void u("Scroll event fired while unrendered. Ignoring...");var e=a.offsetWidth,t=a.offsetHeight;e!==f(a).lastWidth||t!==f(a).lastHeight?(u("Element size changed."),n(m)):u("Element size has not changed ("+e+"x"+t+").")}if(u("registerListenersAndPositionElements invoked."),!f(a))return void u("Aborting because element has been uninstalled");f(a).onRendered=_,f(a).onExpand=p,f(a).onShrink=p;var y=f(a).style;t(a,y.width,y.height)}function O(){if(u("finalizeDomMutation invoked."),!f(a))return void u("Aborting because element has been uninstalled");var e=f(a).style;M(a,e.width,e.height),S(a,e.width,e.height)}function P(){s(a)}function H(){u("Installing..."),v(),y(),c.add(0,g),c.add(1,E),c.add(2,j),c.add(3,O),c.add(4,P)}s||(s=a,a=e,e=null),e=e||{},u("Making detectable..."),!function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===window.getComputedStyle(e)}(a)?H():(u("Element is detached"),T(),u("Waiting until element is attached..."),f(a).onRendered=function(){u("Element is now attached"),H()})}function l(e){var t=f(e);t&&(
// Uninstall may have been called in the following scenarios:
// (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
// (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
// (3) After the installation process (here, state.busy = false and all the stuff has been injected).
// So to be on the safe side, let's check for each thing before removing.
// We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
t.onExpandScroll&&a(i(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&a(o(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&a(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var d=e.reporter,c=e.batchProcessor,f=e.stateHandler.getState,h=(e.stateHandler.hasState,e.idHandler);if(!c)throw new Error("Missing required dependency: batchProcessor");if(!d)throw new Error("Missing required dependency: reporter.");
//TODO: Could this perhaps be done at installation time?
var m=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,r=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:r}}(),_="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",r=t+"_animation_active",a="/* Created by the element-resize-detector library. */\n";a+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",a+="."+r+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",a+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",a+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(t,n){n=n||function(e){document.head.appendChild(e)};var r=document.createElement("style");r.innerHTML=t,r.id=e,n(r)}(a)}}("erd_scroll_detection_scrollbar_style",_),{makeDetectable:u,addListener:s,uninstall:l}}},/* 556 */
/***/
function(e,t,n){/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function r(e,t,n){function r(t){var n=v,r=g;return v=g=void 0,Y=t,b=e.apply(r,n)}function d(e){
// Invoke the leading edge.
// Reset any `maxWait` timer.
// Start the timer for the trailing edge.
return Y=e,L=setTimeout(h,t),w?r(e):b}function c(e){var n=e-k,r=e-Y,a=t-n;return x?l(a,M-r):a}function f(e){var n=e-k,r=e-Y;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===k||n>=t||n<0||x&&r>=M}function h(){var e=i();if(f(e))return m(e);
// Restart the timer.
L=setTimeout(h,c(e))}function m(e){
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return L=void 0,D&&v?r(e):(v=g=void 0,b)}function _(){void 0!==L&&clearTimeout(L),Y=0,v=k=g=L=void 0}function p(){return void 0===L?b:m(i())}function y(){var e=i(),n=f(e);if(v=arguments,g=this,k=e,n){if(void 0===L)return d(k);if(x)
// Handle invocations in a tight loop.
return L=setTimeout(h,t),r(k)}return void 0===L&&(L=setTimeout(h,t)),b}var v,g,M,b,L,k,Y=0,w=!1,x=!1,D=!0;if("function"!=typeof e)throw new TypeError(s);return t=o(t)||0,a(n)&&(w=!!n.leading,x="maxWait"in n,M=x?u(o(n.maxWait)||0,t):M,D="trailing"in n?!!n.trailing:D),y.cancel=_,y.flush=p,y}var a=n(46),i=n(557),o=n(558),s="Expected a function",u=Math.max,l=Math.min;e.exports=r},/* 557 */
/***/
function(e,t,n){var r=n(30),a=function(){return r.Date.now()};e.exports=a},/* 558 */
/***/
function(e,t,n){/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function r(e){if("number"==typeof e)return e;if(i(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=l.test(e);return n||d.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}var a=n(46),i=n(101),o=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt;e.exports=r},/* 559 */
/***/
function(e,t,n){var r=n(343),a=n(560),i=n(612),o=n(151),s=n(76),u=n(623),l=n(625),d=n(349),c=l(function(e,t){var n={};if(null==e)return n;var l=!1;t=r(t,function(t){return t=o(t,e),l||(l=t.length>1),t}),s(e,d(e),n),l&&(n=a(n,7,u));for(var c=t.length;c--;)i(n,t[c]);return n});e.exports=c},/* 560 */
/***/
function(e,t,n){/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function r(e,t,n,P,H,A){var C,F=t&w,N=t&x,I=t&D;if(n&&(C=H?n(e,P,H,A):n(e)),void 0!==C)return C;if(!L(e))return e;var W=g(e);if(W){if(C=p(e),!F)return d(e,C)}else{var z=_(e),R=z==T||z==E;if(M(e))return l(e,F);if(z==j||z==S||R&&!H){if(C=N||R?{}:v(e),!F)return N?f(e,u(C,e)):c(e,s(C,e))}else{if(!O[z])return H?e:{};C=y(e,z,F)}}
// Check for circular references and return its corresponding clone.
A||(A=new a);var B=A.get(e);if(B)return B;if(A.set(e,C),k(e))return e.forEach(function(a){C.add(r(a,t,n,a,e,A))}),C;if(b(e))return e.forEach(function(a,i){C.set(i,r(a,t,n,i,e,A))}),C;var V=I?N?m:h:N?keysIn:Y,U=W?void 0:V(e);return i(U||e,function(a,i){U&&(i=a,a=e[i]),
// Recursively populate clone (susceptible to call stack limits).
o(C,i,r(a,t,n,i,e,A))}),C}var a=n(561),i=n(584),o=n(140),s=n(585),u=n(586),l=n(589),d=n(590),c=n(591),f=n(593),h=n(594),m=n(349),_=n(149),p=n(599),y=n(600),v=n(606),g=n(56),M=n(339),b=n(608),L=n(46),k=n(610),Y=n(100),w=1,x=2,D=4,S="[object Arguments]",T="[object Function]",E="[object GeneratorFunction]",j="[object Object]",O={};O[S]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O[j]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O[T]=O["[object WeakMap]"]=!1,e.exports=r},/* 561 */
/***/
function(e,t,n){/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(e){var t=this.__data__=new a(e);this.size=t.size}var a=n(102),i=n(567),o=n(568),s=n(569),u=n(570),l=n(571);
// Add methods to `Stack`.
r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=s,r.prototype.has=u,r.prototype.set=l,e.exports=r},/* 562 */
/***/
function(e,t){/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function n(){this.__data__=[],this.size=0}e.exports=n},/* 563 */
/***/
function(e,t,n){/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function r(e){var t=this.__data__,n=a(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}var a=n(103),i=Array.prototype,o=i.splice;e.exports=r},/* 564 */
/***/
function(e,t,n){/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function r(e){var t=this.__data__,n=a(t,e);return n<0?void 0:t[n][1]}var a=n(103);e.exports=r},/* 565 */
/***/
function(e,t,n){/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function r(e){return a(this.__data__,e)>-1}var a=n(103);e.exports=r},/* 566 */
/***/
function(e,t,n){/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function r(e,t){var n=this.__data__,r=a(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var a=n(103);e.exports=r},/* 567 */
/***/
function(e,t,n){/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function r(){this.__data__=new a,this.size=0}var a=n(102);e.exports=r},/* 568 */
/***/
function(e,t){/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}e.exports=n},/* 569 */
/***/
function(e,t){/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function n(e){return this.__data__.get(e)}e.exports=n},/* 570 */
/***/
function(e,t){/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function n(e){return this.__data__.has(e)}e.exports=n},/* 571 */
/***/
function(e,t,n){/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function r(e,t){var n=this.__data__;if(n instanceof a){var r=n.__data__;if(!i||r.length<s-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new o(r)}return n.set(e,t),this.size=n.size,this}var a=n(102),i=n(145),o=n(344),s=200;e.exports=r},/* 572 */
/***/
function(e,t,n){/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function r(){this.size=0,this.__data__={hash:new a,map:new(o||i),string:new a}}var a=n(573),i=n(102),o=n(145);e.exports=r},/* 573 */
/***/
function(e,t,n){/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var a=n(574),i=n(575),o=n(576),s=n(577),u=n(578);
// Add methods to `Hash`.
r.prototype.clear=a,r.prototype.delete=i,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,e.exports=r},/* 574 */
/***/
function(e,t,n){/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function r(){this.__data__=a?a(null):{},this.size=0}var a=n(104);e.exports=r},/* 575 */
/***/
function(e,t){/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},/* 576 */
/***/
function(e,t,n){/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function r(e){var t=this.__data__;if(a){var n=t[e];return n===i?void 0:n}return s.call(t,e)?t[e]:void 0}var a=n(104),i="__lodash_hash_undefined__",o=Object.prototype,s=o.hasOwnProperty;e.exports=r},/* 577 */
/***/
function(e,t,n){/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function r(e){var t=this.__data__;return a?void 0!==t[e]:o.call(t,e)}var a=n(104),i=Object.prototype,o=i.hasOwnProperty;e.exports=r},/* 578 */
/***/
function(e,t,n){/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=a&&void 0===t?i:t,this}var a=n(104),i="__lodash_hash_undefined__";e.exports=r},/* 579 */
/***/
function(e,t,n){/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function r(e){var t=a(this,e).delete(e);return this.size-=t?1:0,t}var a=n(105);e.exports=r},/* 580 */
/***/
function(e,t){/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},/* 581 */
/***/
function(e,t,n){/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function r(e){return a(this,e).get(e)}var a=n(105);e.exports=r},/* 582 */
/***/
function(e,t,n){/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function r(e){return a(this,e).has(e)}var a=n(105);e.exports=r},/* 583 */
/***/
function(e,t,n){/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function r(e,t){var n=a(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var a=n(105);e.exports=r},/* 584 */
/***/
function(e,t){/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}e.exports=n},/* 585 */
/***/
function(e,t,n){/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function r(e,t){return e&&a(t,i(t),e)}var a=n(76),i=n(100);e.exports=r},/* 586 */
/***/
function(e,t,n){/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function r(e,t){return e&&a(t,i(t),e)}var a=n(76),i=n(345);e.exports=r},/* 587 */
/***/
function(e,t,n){/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function r(e){if(!a(e))return o(e);var t=i(e),n=[];for(var r in e)("constructor"!=r||!t&&u.call(e,r))&&n.push(r);return n}var a=n(46),i=n(99),o=n(588),s=Object.prototype,u=s.hasOwnProperty;e.exports=r},/* 588 */
/***/
function(e,t){/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function n(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}e.exports=n},/* 589 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e){/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function r(e,t){if(t)return e.slice();var n=e.length,r=l?l(n):new e.constructor(n);return e.copy(r),r}var a=n(30),i="object"==typeof t&&t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i,u=s?a.Buffer:void 0,l=u?u.allocUnsafe:void 0;e.exports=r}).call(t,n(97)(e))},/* 590 */
/***/
function(e,t){/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function n(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}e.exports=n},/* 591 */
/***/
function(e,t,n){/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function r(e,t){return a(e,i(e),t)}var a=n(76),i=n(146);e.exports=r},/* 592 */
/***/
function(e,t){/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function n(e,t){for(var n=-1,r=null==e?0:e.length,a=0,i=[];++n<r;){var o=e[n];t(o,n,e)&&(i[a++]=o)}return i}e.exports=n},/* 593 */
/***/
function(e,t,n){/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function r(e,t){return a(e,i(e),t)}var a=n(76),i=n(347);e.exports=r},/* 594 */
/***/
function(e,t,n){/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function r(e){return a(e,o,i)}var a=n(348),i=n(146),o=n(100);e.exports=r},/* 595 */
/***/
function(e,t,n){var r=n(54),a=n(30),i=r(a,"DataView");e.exports=i},/* 596 */
/***/
function(e,t,n){var r=n(54),a=n(30),i=r(a,"Promise");e.exports=i},/* 597 */
/***/
function(e,t,n){var r=n(54),a=n(30),i=r(a,"Set");e.exports=i},/* 598 */
/***/
function(e,t,n){var r=n(54),a=n(30),i=r(a,"WeakMap");e.exports=i},/* 599 */
/***/
function(e,t){/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function n(e){var t=e.length,n=new e.constructor(t);
// Add properties assigned by `RegExp#exec`.
return t&&"string"==typeof e[0]&&a.call(e,"index")&&(n.index=e.index,n.input=e.input),n}/** Used for built-in method references. */
var r=Object.prototype,a=r.hasOwnProperty;e.exports=n},/* 600 */
/***/
function(e,t,n){/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function r(e,t,n){var r=e.constructor;switch(t){case y:return a(e);case l:case d:return new r(+e);case v:return i(e,n);case g:case M:case b:case L:case k:case Y:case w:case x:case D:return u(e,n);case c:return new r;case f:case _:return new r(e);case h:return o(e);case m:return new r;case p:return s(e)}}var a=n(150),i=n(602),o=n(603),s=n(604),u=n(605),l="[object Boolean]",d="[object Date]",c="[object Map]",f="[object Number]",h="[object RegExp]",m="[object Set]",_="[object String]",p="[object Symbol]",y="[object ArrayBuffer]",v="[object DataView]",g="[object Float32Array]",M="[object Float64Array]",b="[object Int8Array]",L="[object Int16Array]",k="[object Int32Array]",Y="[object Uint8Array]",w="[object Uint8ClampedArray]",x="[object Uint16Array]",D="[object Uint32Array]";e.exports=r},/* 601 */
/***/
function(e,t,n){var r=n(30),a=r.Uint8Array;e.exports=a},/* 602 */
/***/
function(e,t,n){/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function r(e,t){var n=t?a(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var a=n(150);e.exports=r},/* 603 */
/***/
function(e,t){/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function n(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}/** Used to match `RegExp` flags from their coerced string values. */
var r=/\w*$/;e.exports=n},/* 604 */
/***/
function(e,t,n){/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function r(e){return o?Object(o.call(e)):{}}var a=n(88),i=a?a.prototype:void 0,o=i?i.valueOf:void 0;e.exports=r},/* 605 */
/***/
function(e,t,n){/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function r(e,t){var n=t?a(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var a=n(150);e.exports=r},/* 606 */
/***/
function(e,t,n){/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function r(e){return"function"!=typeof e.constructor||o(e)?{}:a(i(e))}var a=n(607),i=n(148),o=n(99);e.exports=r},/* 607 */
/***/
function(e,t,n){var r=n(46),a=Object.create,i=function(){function e(){}return function(t){if(!r(t))return{};if(a)return a(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=i},/* 608 */
/***/
function(e,t,n){var r=n(609),a=n(143),i=n(144),o=i&&i.isMap,s=o?a(o):r;e.exports=s},/* 609 */
/***/
function(e,t,n){/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function r(e){return i(e)&&a(e)==o}var a=n(149),i=n(55),o="[object Map]";e.exports=r},/* 610 */
/***/
function(e,t,n){var r=n(611),a=n(143),i=n(144),o=i&&i.isSet,s=o?a(o):r;e.exports=s},/* 611 */
/***/
function(e,t,n){/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function r(e){return i(e)&&a(e)==o}var a=n(149),i=n(55),o="[object Set]";e.exports=r},/* 612 */
/***/
function(e,t,n){/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function r(e,t){return t=a(t,e),null==(e=o(e,t))||delete e[s(i(t))]}var a=n(151),i=n(619),o=n(620),s=n(350);e.exports=r},/* 613 */
/***/
function(e,t,n){/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function r(e,t){if(a(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(s.test(e)||!o.test(e)||null!=t&&e in Object(t))}var a=n(56),i=n(101),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=r},/* 614 */
/***/
function(e,t,n){var r=n(615),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,function(e,n,r,a){t.push(r?a.replace(i,"$1"):n||e)}),t});e.exports=o},/* 615 */
/***/
function(e,t,n){/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function r(e){var t=a(e,function(e){return n.size===i&&n.clear(),e}),n=t.cache;return t}var a=n(616),i=500;e.exports=r},/* 616 */
/***/
function(e,t,n){/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(r.Cache||a),n}var a=n(344),i="Expected a function";
// Expose `MapCache`.
r.Cache=a,e.exports=r},/* 617 */
/***/
function(e,t,n){/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function r(e){return null==e?"":a(e)}var a=n(618);e.exports=r},/* 618 */
/***/
function(e,t,n){/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function r(e){
// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(o(e))
// Recursively convert values (susceptible to call stack limits).
return i(e,r)+"";if(s(e))return d?d.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var a=n(88),i=n(343),o=n(56),s=n(101),u=1/0,l=a?a.prototype:void 0,d=l?l.toString:void 0;e.exports=r},/* 619 */
/***/
function(e,t){/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function n(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}e.exports=n},/* 620 */
/***/
function(e,t,n){/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function r(e,t){return t.length<2?e:a(e,i(t,0,-1))}var a=n(621),i=n(622);e.exports=r},/* 621 */
/***/
function(e,t,n){/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function r(e,t){t=a(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[i(t[n++])];return n&&n==r?e:void 0}var a=n(151),i=n(350);e.exports=r},/* 622 */
/***/
function(e,t){/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function n(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(a);++r<a;)i[r]=e[r+t];return i}e.exports=n},/* 623 */
/***/
function(e,t,n){/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function r(e){return a(e)?void 0:e}var a=n(624);e.exports=r},/* 624 */
/***/
function(e,t,n){/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function r(e){if(!o(e)||a(e)!=s)return!1;var t=i(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&d.call(n)==f}var a=n(75),i=n(148),o=n(55),s="[object Object]",u=Function.prototype,l=Object.prototype,d=u.toString,c=l.hasOwnProperty,f=d.call(Object);e.exports=r},/* 625 */
/***/
function(e,t,n){/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function r(e){return o(i(e,void 0,a),e+"")}var a=n(626),i=n(333),o=n(334);e.exports=r},/* 626 */
/***/
function(e,t,n){/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function r(e){return(null==e?0:e.length)?a(e,1):[]}var a=n(627);e.exports=r},/* 627 */
/***/
function(e,t,n){/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function r(e,t,n,o,s){var u=-1,l=e.length;for(n||(n=i),s||(s=[]);++u<l;){var d=e[u];t>0&&n(d)?t>1?
// Recursively flatten arrays (susceptible to call stack limits).
r(d,t-1,n,o,s):a(s,d):o||(s[s.length]=d)}return s}var a=n(147),i=n(628);e.exports=r},/* 628 */
/***/
function(e,t,n){/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function r(e){return o(e)||i(e)||!!(s&&e&&e[s])}var a=n(88),i=n(338),o=n(56),s=a?a.isConcatSpreadable:void 0;e.exports=r},/* 629 */
/***/
function(e,t,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r=n(2),a=n(630);if(void 0===r)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
// Hack to grab NoopUpdateQueue from isomorphic React
var i=(new r.Component).updater;e.exports=a(r.Component,r.isValidElement,i)},/* 630 */
/***/
function(e,t,n){"use strict";
// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function r(e){return e}function a(e,t,n){function a(e,t,n){for(var r in t)t.hasOwnProperty(r)&&l("function"==typeof t[r],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",i[n],r)}function c(e,t){var n=b.hasOwnProperty(t)?b[t]:null;
// Disallow overriding of base class methods unless explicitly allowed.
x.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),
// Disallow defining methods more than once unless explicitly allowed.
e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}/**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
function f(e,n){if(!n){var r=typeof n;return void l("object"===r&&null!==n,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",e.displayName||"ReactClass",null===n?null:r)}u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,i=a.__reactAutoBindPairs;
// By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
n.hasOwnProperty(d)&&k.mixins(e,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==d){var s=n[o],f=a.hasOwnProperty(o);if(c(f,o),k.hasOwnProperty(o))k[o](e,s);else{
// Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var h=b.hasOwnProperty(o),m="function"==typeof s,y=m&&!h&&!f&&!1!==n.autobind;if(y)i.push(o,s),a[o]=s;else if(f){var v=b[o];
// These cases should already be caught by validateMethodOverride.
u(h&&("DEFINE_MANY_MERGED"===v||"DEFINE_MANY"===v),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",v,o),
// For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
"DEFINE_MANY_MERGED"===v?a[o]=_(a[o],s):"DEFINE_MANY"===v&&(a[o]=p(a[o],s))}else a[o]=s,
// Add verbose displayName to the function, which helps when looking
// at profiling tools.
"function"==typeof s&&n.displayName&&(a[o].displayName=n.displayName+"_"+o)}}}function h(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var a=n in k;u(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;if(i){var o=L.hasOwnProperty(n)?L[n]:null;return u("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=_(e[n],r))}e[n]=r}}}/**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
function m(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}/**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
function _(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var a={};return m(a,n),m(a,r),a}}/**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}/**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
function y(e,t){var n=t.bind(e);n.__reactBoundContext=e,n.__reactBoundMethod=t,n.__reactBoundArguments=null;var r=e.constructor.displayName,a=n.bind;return n.bind=function(i){for(var o=arguments.length,s=Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=arguments[u];
// User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(i!==e&&null!==i)l(!1,"bind(): React component methods may only be bound to the component instance. See %s",r);else if(!s.length)return l(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",r),n;var d=a.apply(n,arguments);return d.__reactBoundContext=e,d.__reactBoundMethod=t,d.__reactBoundArguments=s,d},n}/**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
function v(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],a=t[n+1];e[r]=y(e,a)}}/**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
function g(e){
// To keep our warnings more understandable, we'll use a little hack here to
// ensure that Constructor.name !== 'Constructor'. This makes sure we don't
// unnecessarily identify a class without displayName as 'Constructor'.
var t=r(function(e,r,a){l(this instanceof t,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"),
// Wire up auto-binding
this.__reactAutoBindPairs.length&&v(this),this.props=e,this.context=r,this.refs=s,this.updater=a||n,this.state=null;
// ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var i=this.getInitialState?this.getInitialState():null;
// We allow auto-mocks to proceed as if they're returning null.
void 0===i&&this.getInitialState._isMockFunction&&(
// This is probably bad practice. Consider warning here and
// deprecating this convenience.
i=null),u("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],M.forEach(f.bind(null,t)),f(t,Y),f(t,e),f(t,w),
// Initialize the defaultProps property after all mixins have been merged.
t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),
// This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved={}),t.prototype.getInitialState&&(t.prototype.getInitialState.isReactClassApproved={}),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),l(!t.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component"),l(!t.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",e.displayName||"A component"),l(!t.prototype.UNSAFE_componentWillRecieveProps,"%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",e.displayName||"A component");
// Reduce time spent doing lookups by setting these on the prototype.
for(var a in b)t.prototype[a]||(t.prototype[a]=null);return t}/**
   * Policies that describe methods in `ReactClassInterface`.
   */
var M=[],b={/**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
mixins:"DEFINE_MANY",/**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
statics:"DEFINE_MANY",/**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
propTypes:"DEFINE_MANY",/**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
contextTypes:"DEFINE_MANY",/**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
childContextTypes:"DEFINE_MANY",
// ==== Definition methods ====
/**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
getDefaultProps:"DEFINE_MANY_MERGED",/**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
getInitialState:"DEFINE_MANY_MERGED",/**
     * @return {object}
     * @optional
     */
getChildContext:"DEFINE_MANY_MERGED",/**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
render:"DEFINE_ONCE",
// ==== Delegate methods ====
/**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
componentWillMount:"DEFINE_MANY",/**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
componentDidMount:"DEFINE_MANY",/**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
componentWillReceiveProps:"DEFINE_MANY",/**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
shouldComponentUpdate:"DEFINE_ONCE",/**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
componentWillUpdate:"DEFINE_MANY",/**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
componentDidUpdate:"DEFINE_MANY",/**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
componentWillUnmount:"DEFINE_MANY",/**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
UNSAFE_componentWillMount:"DEFINE_MANY",/**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
UNSAFE_componentWillReceiveProps:"DEFINE_MANY",/**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
UNSAFE_componentWillUpdate:"DEFINE_MANY",
// ==== Advanced methods ====
/**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
updateComponent:"OVERRIDE_BASE"},L={/**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
getDerivedStateFromProps:"DEFINE_MANY_MERGED"},k={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)f(e,t[n])},childContextTypes:function(e,t){a(e,t,"childContext"),e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){a(e,t,"context"),e.contextTypes=o({},e.contextTypes,t)},/**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=_(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){a(e,t,"prop"),e.propTypes=o({},e.propTypes,t)},statics:function(e,t){h(e,t)},autobind:function(){}},Y={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},x={/**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},/**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
isMounted:function(){return l(this.__didWarnIsMounted,"%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",this.constructor&&this.constructor.displayName||this.name||"Component"),this.__didWarnIsMounted=!0,!!this.__isMounted}},D=function(){};return o(D.prototype,e.prototype,x),g}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var i,o=n(68),s=n(81),u=n(43),l=n(82),d="mixins";i={prop:"prop",context:"context",childContext:"child context"},e.exports=a},/* 631 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f);n(351);var m=n(632),_=r(m),p=n(20),y=n(352),v=r(y),g=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){v.default.isUserAuthenticated()&&this.props.history.push("/heatmap")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement(_.default,null)}}]),t}(f.Component);t.default=(0,p.withRouter)(g)},/* 632 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=n(20),_=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sessionToken:null,error:null,username:"",password:""},n.handleSubmit=n.handleSubmit.bind(n),n.handleUsernameChange=n.handleUsernameChange.bind(n),n.handlePasswordChange=n.handlePasswordChange.bind(n),n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.username,a=n.password;fetch("/api/adminlogin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:r,password:a})}).then(function(e){return e.json()}).then(function(e){e.success?(localStorage.setItem("jwtToken",e.token),localStorage.setItem("userid",e.userid),t.props.history.push("/heatmap")):t.setState({error:e.msg})})}},{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return h.default.createElement("div",{className:"adminlogin"},h.default.createElement("div",{id:"login"},h.default.createElement("div",{className:"container"},h.default.createElement("div",{id:"login-row",className:"row justify-content-center align-items-center"},h.default.createElement("div",{id:"login-column",className:"col-md-6 col-md-6 col-md-offset-3"},h.default.createElement("div",{id:"login-box",className:"col-md-12"},h.default.createElement("form",{id:"login-form",className:"form"},h.default.createElement("h3",{className:"text-center text-info"},"Administrator Log-in"),this.state.error,h.default.createElement("div",{className:"form-group"},h.default.createElement("label",{className:"text-info"},"Username:"),h.default.createElement("br",null),h.default.createElement("input",{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleUsernameChange,className:"form-control"})),h.default.createElement("div",{className:"form-group"},h.default.createElement("label",{className:"text-info"},"Password:"),h.default.createElement("br",null),h.default.createElement("input",{type:"password",value:this.state.password,onChange:this.handlePasswordChange,name:"password",id:"password",className:"form-control"})),h.default.createElement("div",{className:"form-group"},h.default.createElement("input",{type:"button",name:"submit",className:"btn btn-info btn-md",onClick:this.handleSubmit,value:"submit"})))))))))}}]),t}(f.Component);t.default=(0,m.withRouter)(_)},/* 633 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f);n(351);var m=n(634),_=r(m),p=function(e){function t(e){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement(_.default,null)}}]),t}(f.Component);t.default=p},/* 634 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(10),s=r(o),u=n(12),l=r(u),d=n(13),c=r(d),f=n(2),h=r(f),m=(n(20),function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={username:"",password:""},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"onChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t)}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.username,r=t.password;fetch("/api/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})}).then(function(e){return e.json()}).then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state;t.username,t.password;return h.default.createElement("div",{className:"container"},h.default.createElement("form",{className:"form-signin",onSubmit:function(t){return e.onSubmit(t)}},h.default.createElement("label",{className:"sr-only"},"Email address"),h.default.createElement("input",{type:"text",className:"form-control",placeholder:"username",name:"username",onChange:function(t){return e.onChange(t)},required:!0}),h.default.createElement("label",{className:"sr-only"},"Password"),h.default.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",onChange:function(t){return e.onChange(t)},required:!0}),h.default.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Register")))}}]),t}(h.default.Component));t.default=m},/* 635 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function t(e,t,n){e[t]||Object[r](e,t,{writable:!0,configurable:!0,value:n})}if(n(636),n(833),n(834),e._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");e._babelPolyfill=!0;var r="defineProperty";t(String.prototype,"padLeft","".padStart),t(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&t(Array,e,Function.call.bind([][e]))})}).call(t,n(141))},/* 636 */
/***/
function(e,t,n){n(637),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(649),n(650),n(651),n(652),n(653),n(655),n(656),n(657),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(670),n(671),n(672),n(673),n(674),n(675),n(676),n(677),n(678),n(679),n(680),n(681),n(682),n(683),n(684),n(685),n(686),n(687),n(688),n(689),n(690),n(691),n(692),n(693),n(694),n(695),n(696),n(697),n(698),n(699),n(700),n(701),n(702),n(703),n(704),n(705),n(706),n(707),n(708),n(709),n(710),n(711),n(712),n(713),n(714),n(715),n(717),n(718),n(720),n(721),n(722),n(723),n(724),n(725),n(726),n(728),n(729),n(730),n(731),n(732),n(733),n(734),n(735),n(736),n(737),n(738),n(739),n(740),n(173),n(741),n(742),n(371),n(743),n(744),n(745),n(746),n(747),n(374),n(376),n(377),n(748),n(749),n(750),n(751),n(752),n(753),n(754),n(755),n(756),n(757),n(758),n(759),n(760),n(761),n(762),n(763),n(764),n(765),n(766),n(767),n(768),n(769),n(770),n(771),n(772),n(773),n(774),n(775),n(776),n(777),n(778),n(779),n(780),n(781),n(782),n(783),n(784),n(785),n(786),n(787),n(788),n(789),n(790),n(791),n(792),n(793),n(794),n(795),n(796),n(797),n(798),n(799),n(800),n(801),n(802),n(803),n(804),n(805),n(806),n(807),n(808),n(809),n(810),n(811),n(812),n(813),n(814),n(815),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),n(827),n(828),n(829),n(830),n(831),n(832),e.exports=n(35)},/* 637 */
/***/
function(e,t,n){"use strict";
// ECMAScript 6 symbols shim
var r=n(4),a=n(22),i=n(14),o=n(0),s=n(24),u=n(47).KEY,l=n(6),d=n(106),c=n(77),f=n(58),h=n(11),m=n(354),_=n(153),p=n(638),y=n(109),v=n(3),g=n(7),M=n(26),b=n(36),L=n(57),k=n(62),Y=n(357),w=n(27),x=n(15),D=n(60),S=w.f,T=x.f,E=Y.f,j=r.Symbol,O=r.JSON,P=O&&O.stringify,H=h("_hidden"),A=h("toPrimitive"),C={}.propertyIsEnumerable,F=d("symbol-registry"),N=d("symbols"),I=d("op-symbols"),W=Object.prototype,z="function"==typeof j,R=r.QObject,B=!R||!R.prototype||!R.prototype.findChild,V=i&&l(function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=S(W,t);r&&delete W[t],T(e,t,n),r&&e!==W&&T(W,t,r)}:T,U=function(e){var t=N[e]=k(j.prototype);return t._k=e,t},J=z&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof j},q=function(e,t,n){return e===W&&q(I,t,n),v(e),t=b(t,!0),v(n),a(N,t)?(n.enumerable?(a(e,H)&&e[H][t]&&(e[H][t]=!1),n=k(n,{enumerable:L(0,!1)})):(a(e,H)||T(e,H,L(1,{})),e[H][t]=!0),V(e,t,n)):T(e,t,n)},G=function(e,t){v(e);for(var n,r=p(t=M(t)),a=0,i=r.length;i>a;)q(e,n=r[a++],t[n]);return e},K=function(e,t){return void 0===t?k(e):G(k(e),t)},$=function(e){var t=C.call(this,e=b(e,!0));return!(this===W&&a(N,e)&&!a(I,e))&&(!(t||!a(this,e)||!a(N,e)||a(this,H)&&this[H][e])||t)},Q=function(e,t){if(e=M(e),t=b(t,!0),e!==W||!a(N,t)||a(I,t)){var n=S(e,t);return!n||!a(N,t)||a(e,H)&&e[H][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=E(M(e)),r=[],i=0;n.length>i;)a(N,t=n[i++])||t==H||t==u||r.push(t);return r},X=function(e){for(var t,n=e===W,r=E(n?I:M(e)),i=[],o=0;r.length>o;)!a(N,t=r[o++])||n&&!a(W,t)||i.push(N[t]);return i};
// 19.4.1.1 Symbol([description])
z||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===W&&t.call(I,n),a(this,H)&&a(this[H],e)&&(this[H][e]=!1),V(this,e,L(1,n))};return i&&B&&V(W,e,{configurable:!0,set:t}),U(e)},s(j.prototype,"toString",function(){return this._k}),w.f=Q,x.f=q,n(63).f=Y.f=Z,n(90).f=$,n(108).f=X,i&&!n(59)&&s(W,"propertyIsEnumerable",$,!0),m.f=function(e){return U(h(e))}),o(o.G+o.W+o.F*!z,{Symbol:j});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)h(ee[te++]);for(var ne=D(h.store),re=0;ne.length>re;)_(ne[re++]);o(o.S+o.F*!z,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(e){return a(F,e+="")?F[e]:F[e]=j(e)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(e){if(!J(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){B=!0},useSimple:function(){B=!1}}),o(o.S+o.F*!z,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:K,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:q,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:G,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Q,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Z,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:X}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
O&&o(o.S+o.F*(!z||l(function(){var e=j();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=P([e])||"{}"!=P({a:e})||"{}"!=P(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(g(t)||void 0!==e)&&!J(e))// IE8 returns string on undefined
return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!J(t))return t}),r[1]=t,P.apply(O,r)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
j.prototype[A]||n(23)(j.prototype,A,j.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
c(j,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
c(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
c(r.JSON,"JSON",!0)},/* 638 */
/***/
function(e,t,n){
// all enumerable object keys, includes symbols
var r=n(60),a=n(108),i=n(90);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,s=n(e),u=i.f,l=0;s.length>l;)u.call(e,o=s[l++])&&t.push(o);return t}},/* 639 */
/***/
function(e,t,n){var r=n(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
r(r.S,"Object",{create:n(62)})},/* 640 */
/***/
function(e,t,n){var r=n(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(14),"Object",{defineProperty:n(15).f})},/* 641 */
/***/
function(e,t,n){var r=n(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
r(r.S+r.F*!n(14),"Object",{defineProperties:n(356)})},/* 642 */
/***/
function(e,t,n){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var r=n(26),a=n(27).f;n(39)("getOwnPropertyDescriptor",function(){return function(e,t){return a(r(e),t)}})},/* 643 */
/***/
function(e,t,n){
// 19.1.2.9 Object.getPrototypeOf(O)
var r=n(17),a=n(28);n(39)("getPrototypeOf",function(){return function(e){return a(r(e))}})},/* 644 */
/***/
function(e,t,n){
// 19.1.2.14 Object.keys(O)
var r=n(17),a=n(60);n(39)("keys",function(){return function(e){return a(r(e))}})},/* 645 */
/***/
function(e,t,n){
// 19.1.2.7 Object.getOwnPropertyNames(O)
n(39)("getOwnPropertyNames",function(){return n(357).f})},/* 646 */
/***/
function(e,t,n){
// 19.1.2.5 Object.freeze(O)
var r=n(7),a=n(47).onFreeze;n(39)("freeze",function(e){return function(t){return e&&r(t)?e(a(t)):t}})},/* 647 */
/***/
function(e,t,n){
// 19.1.2.17 Object.seal(O)
var r=n(7),a=n(47).onFreeze;n(39)("seal",function(e){return function(t){return e&&r(t)?e(a(t)):t}})},/* 648 */
/***/
function(e,t,n){
// 19.1.2.15 Object.preventExtensions(O)
var r=n(7),a=n(47).onFreeze;n(39)("preventExtensions",function(e){return function(t){return e&&r(t)?e(a(t)):t}})},/* 649 */
/***/
function(e,t,n){
// 19.1.2.12 Object.isFrozen(O)
var r=n(7);n(39)("isFrozen",function(e){return function(t){return!r(t)||!!e&&e(t)}})},/* 650 */
/***/
function(e,t,n){
// 19.1.2.13 Object.isSealed(O)
var r=n(7);n(39)("isSealed",function(e){return function(t){return!r(t)||!!e&&e(t)}})},/* 651 */
/***/
function(e,t,n){
// 19.1.2.11 Object.isExtensible(O)
var r=n(7);n(39)("isExtensible",function(e){return function(t){return!!r(t)&&(!e||e(t))}})},/* 652 */
/***/
function(e,t,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(0);r(r.S+r.F,"Object",{assign:n(358)})},/* 653 */
/***/
function(e,t,n){
// 19.1.3.10 Object.is(value1, value2)
var r=n(0);r(r.S,"Object",{is:n(654)})},/* 654 */
/***/
function(e,t){
// 7.2.9 SameValue(x, y)
e.exports=Object.is||function(e,t){
// eslint-disable-next-line no-self-compare
return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},/* 655 */
/***/
function(e,t,n){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var r=n(0);r(r.S,"Object",{setPrototypeOf:n(157).set})},/* 656 */
/***/
function(e,t,n){"use strict";
// 19.1.3.6 Object.prototype.toString()
var r=n(91),a={};a[n(11)("toStringTag")]="z",a+""!="[object z]"&&n(24)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},/* 657 */
/***/
function(e,t,n){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var r=n(0);r(r.P,"Function",{bind:n(359)})},/* 658 */
/***/
function(e,t,n){var r=n(15).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in a||n(14)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},/* 659 */
/***/
function(e,t,n){"use strict";var r=n(7),a=n(28),i=n(11)("hasInstance"),o=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
i in o||n(15).f(o,i,{value:function(e){if("function"!=typeof this||!r(e))return!1;if(!r(this.prototype))return e instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;e=a(e);)if(this.prototype===e)return!0;return!1}})},/* 660 */
/***/
function(e,t,n){var r=n(0),a=n(361);
// 18.2.5 parseInt(string, radix)
r(r.G+r.F*(parseInt!=a),{parseInt:a})},/* 661 */
/***/
function(e,t,n){var r=n(0),a=n(362);
// 18.2.4 parseFloat(string)
r(r.G+r.F*(parseFloat!=a),{parseFloat:a})},/* 662 */
/***/
function(e,t,n){"use strict";var r=n(4),a=n(22),i=n(32),o=n(159),s=n(36),u=n(6),l=n(63).f,d=n(27).f,c=n(15).f,f=n(78).trim,h=r.Number,m=h,_=h.prototype,p="Number"==i(n(62)(_)),y="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():f(t,3);var n,r,a,i=t.charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:r=8,a=55;break;// fast equal /^0o[0-7]+$/i
default:return+t}for(var o,u=t.slice(2),l=0,d=u.length;l<d;l++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((o=u.charCodeAt(l))<48||o>a)return NaN;return parseInt(u,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(p?u(function(){_.valueOf.call(n)}):"Number"!=i(n))?o(new m(v(t)),n,h):v(t)};for(var g,M=n(14)?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;M.length>b;b++)a(m,g=M[b])&&!a(h,g)&&c(h,g,d(m,g));h.prototype=_,_.constructor=h,n(24)(r,"Number",h)}},/* 663 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(38),i=n(363),o=n(160),s=1..toFixed,u=Math.floor,l=[0,0,0,0,0,0],d="Number.toFixed: incorrect invocation!",c=function(e,t){for(var n=-1,r=t;++n<6;)r+=e*l[n],l[n]=r%1e7,r=u(r/1e7)},f=function(e){for(var t=6,n=0;--t>=0;)n+=l[t],l[t]=u(n/e),n=n%e*1e7},h=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==l[e]){var n=String(l[e]);t=""===t?n:t+o.call("0",7-n.length)+n}return t},m=function(e,t,n){return 0===t?n:t%2==1?m(e,t-1,n*e):m(e*e,t/2,n)},_=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t};r(r.P+r.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(6)(function(){
// V8 ~ Android 4.3-
s.call({})})),"Number",{toFixed:function(e){var t,n,r,s,u=i(this,d),l=a(e),p="",y="0";if(l<0||l>20)throw RangeError(d);
// eslint-disable-next-line no-self-compare
if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(p="-",u=-u),u>1e-21)if(t=_(u*m(2,69,1))-69,n=t<0?u*m(2,-t,1):u/m(2,t,1),n*=4503599627370496,(t=52-t)>0){for(c(0,n),r=l;r>=7;)c(1e7,0),r-=7;for(c(m(10,r,1),0),r=t-1;r>=23;)f(1<<23),r-=23;f(1<<r),c(1,1),f(2),y=h()}else c(0,n),c(1<<-t,0),y=h()+o.call("0",l);return l>0?(s=y.length,y=p+(s<=l?"0."+o.call("0",l-s)+y:y.slice(0,s-l)+"."+y.slice(s-l))):y=p+y,y}})},/* 664 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(6),i=n(363),o=1..toPrecision;r(r.P+r.F*(a(function(){
// IE7-
return"1"!==o.call(1,void 0)})||!a(function(){
// V8 ~ Android 4.3-
o.call({})})),"Number",{toPrecision:function(e){var t=i(this,"Number#toPrecision: incorrect invocation!");return void 0===e?o.call(t):o.call(t,e)}})},/* 665 */
/***/
function(e,t,n){
// 20.1.2.1 Number.EPSILON
var r=n(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 666 */
/***/
function(e,t,n){
// 20.1.2.2 Number.isFinite(number)
var r=n(0),a=n(4).isFinite;r(r.S,"Number",{isFinite:function(e){return"number"==typeof e&&a(e)}})},/* 667 */
/***/
function(e,t,n){
// 20.1.2.3 Number.isInteger(number)
var r=n(0);r(r.S,"Number",{isInteger:n(364)})},/* 668 */
/***/
function(e,t,n){
// 20.1.2.4 Number.isNaN(number)
var r=n(0);r(r.S,"Number",{isNaN:function(e){
// eslint-disable-next-line no-self-compare
return e!=e}})},/* 669 */
/***/
function(e,t,n){
// 20.1.2.5 Number.isSafeInteger(number)
var r=n(0),a=n(364),i=Math.abs;r(r.S,"Number",{isSafeInteger:function(e){return a(e)&&i(e)<=9007199254740991}})},/* 670 */
/***/
function(e,t,n){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var r=n(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 671 */
/***/
function(e,t,n){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var r=n(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 672 */
/***/
function(e,t,n){var r=n(0),a=n(362);
// 20.1.2.12 Number.parseFloat(string)
r(r.S+r.F*(Number.parseFloat!=a),"Number",{parseFloat:a})},/* 673 */
/***/
function(e,t,n){var r=n(0),a=n(361);
// 20.1.2.13 Number.parseInt(string, radix)
r(r.S+r.F*(Number.parseInt!=a),"Number",{parseInt:a})},/* 674 */
/***/
function(e,t,n){
// 20.2.2.3 Math.acosh(x)
var r=n(0),a=n(365),i=Math.sqrt,o=Math.acosh;r(r.S+r.F*!(o&&710==Math.floor(o(Number.MAX_VALUE))&&o(1/0)==1/0),"Math",{acosh:function(e){return(e=+e)<1?NaN:e>94906265.62425156?Math.log(e)+Math.LN2:a(e-1+i(e-1)*i(e+1))}})},/* 675 */
/***/
function(e,t,n){function r(e){return isFinite(e=+e)&&0!=e?e<0?-r(-e):Math.log(e+Math.sqrt(e*e+1)):e}
// 20.2.2.5 Math.asinh(x)
var a=n(0),i=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
a(a.S+a.F*!(i&&1/i(0)>0),"Math",{asinh:r})},/* 676 */
/***/
function(e,t,n){
// 20.2.2.7 Math.atanh(x)
var r=n(0),a=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
r(r.S+r.F*!(a&&1/a(-0)<0),"Math",{atanh:function(e){return 0==(e=+e)?e:Math.log((1+e)/(1-e))/2}})},/* 677 */
/***/
function(e,t,n){
// 20.2.2.9 Math.cbrt(x)
var r=n(0),a=n(161);r(r.S,"Math",{cbrt:function(e){return a(e=+e)*Math.pow(Math.abs(e),1/3)}})},/* 678 */
/***/
function(e,t,n){
// 20.2.2.11 Math.clz32(x)
var r=n(0);r(r.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},/* 679 */
/***/
function(e,t,n){
// 20.2.2.12 Math.cosh(x)
var r=n(0),a=Math.exp;r(r.S,"Math",{cosh:function(e){return(a(e=+e)+a(-e))/2}})},/* 680 */
/***/
function(e,t,n){
// 20.2.2.14 Math.expm1(x)
var r=n(0),a=n(162);r(r.S+r.F*(a!=Math.expm1),"Math",{expm1:a})},/* 681 */
/***/
function(e,t,n){
// 20.2.2.16 Math.fround(x)
var r=n(0);r(r.S,"Math",{fround:n(366)})},/* 682 */
/***/
function(e,t,n){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var r=n(0),a=Math.abs;r(r.S,"Math",{hypot:function(e,t){for(// eslint-disable-line no-unused-vars
var n,r,i=0,o=0,s=arguments.length,u=0;o<s;)n=a(arguments[o++]),u<n?(r=u/n,i=i*r*r+1,u=n):n>0?(r=n/u,i+=r*r):i+=n;return u===1/0?1/0:u*Math.sqrt(i)}})},/* 683 */
/***/
function(e,t,n){
// 20.2.2.18 Math.imul(x, y)
var r=n(0),a=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
r(r.S+r.F*n(6)(function(){return-5!=a(4294967295,5)||2!=a.length}),"Math",{imul:function(e,t){var n=+e,r=+t,a=65535&n,i=65535&r;return 0|a*i+((65535&n>>>16)*i+a*(65535&r>>>16)<<16>>>0)}})},/* 684 */
/***/
function(e,t,n){
// 20.2.2.21 Math.log10(x)
var r=n(0);r(r.S,"Math",{log10:function(e){return Math.log(e)*Math.LOG10E}})},/* 685 */
/***/
function(e,t,n){
// 20.2.2.20 Math.log1p(x)
var r=n(0);r(r.S,"Math",{log1p:n(365)})},/* 686 */
/***/
function(e,t,n){
// 20.2.2.22 Math.log2(x)
var r=n(0);r(r.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},/* 687 */
/***/
function(e,t,n){
// 20.2.2.28 Math.sign(x)
var r=n(0);r(r.S,"Math",{sign:n(161)})},/* 688 */
/***/
function(e,t,n){
// 20.2.2.30 Math.sinh(x)
var r=n(0),a=n(162),i=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
r(r.S+r.F*n(6)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(e){return Math.abs(e=+e)<1?(a(e)-a(-e))/2:(i(e-1)-i(-e-1))*(Math.E/2)}})},/* 689 */
/***/
function(e,t,n){
// 20.2.2.33 Math.tanh(x)
var r=n(0),a=n(162),i=Math.exp;r(r.S,"Math",{tanh:function(e){var t=a(e=+e),n=a(-e);return t==1/0?1:n==1/0?-1:(t-n)/(i(e)+i(-e))}})},/* 690 */
/***/
function(e,t,n){
// 20.2.2.34 Math.trunc(x)
var r=n(0);r(r.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},/* 691 */
/***/
function(e,t,n){var r=n(0),a=n(61),i=String.fromCharCode,o=String.fromCodePoint;
// length should be 1, old FF problem
r(r.S+r.F*(!!o&&1!=o.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(e){for(// eslint-disable-line no-unused-vars
var t,n=[],r=arguments.length,o=0;r>o;){if(t=+arguments[o++],a(t,1114111)!==t)throw RangeError(t+" is not a valid code point");n.push(t<65536?i(t):i(55296+((t-=65536)>>10),t%1024+56320))}return n.join("")}})},/* 692 */
/***/
function(e,t,n){var r=n(0),a=n(26),i=n(16);r(r.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(e){for(var t=a(e.raw),n=i(t.length),r=arguments.length,o=[],s=0;n>s;)o.push(String(t[s++])),s<r&&o.push(String(arguments[s]));return o.join("")}})},/* 693 */
/***/
function(e,t,n){"use strict";
// 21.1.3.25 String.prototype.trim()
n(78)("trim",function(e){return function(){return e(this,3)}})},/* 694 */
/***/
function(e,t,n){"use strict";var r=n(163)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n(164)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},/* 695 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(163)(!1);r(r.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(e){return a(this,e)}})},/* 696 */
/***/
function(e,t,n){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var r=n(0),a=n(16),i=n(166),o="".endsWith;r(r.P+r.F*n(167)("endsWith"),"String",{endsWith:function(e){var t=i(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=a(t.length),s=void 0===n?r:Math.min(a(n),r),u=String(e);return o?o.call(t,u,s):t.slice(s-u.length,s)===u}})},/* 697 */
/***/
function(e,t,n){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var r=n(0),a=n(166);r(r.P+r.F*n(167)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},/* 698 */
/***/
function(e,t,n){var r=n(0);r(r.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:n(160)})},/* 699 */
/***/
function(e,t,n){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var r=n(0),a=n(16),i=n(166),o="".startsWith;r(r.P+r.F*n(167)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},/* 700 */
/***/
function(e,t,n){"use strict";
// B.2.3.2 String.prototype.anchor(name)
n(25)("anchor",function(e){return function(t){return e(this,"a","name",t)}})},/* 701 */
/***/
function(e,t,n){"use strict";
// B.2.3.3 String.prototype.big()
n(25)("big",function(e){return function(){return e(this,"big","","")}})},/* 702 */
/***/
function(e,t,n){"use strict";
// B.2.3.4 String.prototype.blink()
n(25)("blink",function(e){return function(){return e(this,"blink","","")}})},/* 703 */
/***/
function(e,t,n){"use strict";
// B.2.3.5 String.prototype.bold()
n(25)("bold",function(e){return function(){return e(this,"b","","")}})},/* 704 */
/***/
function(e,t,n){"use strict";
// B.2.3.6 String.prototype.fixed()
n(25)("fixed",function(e){return function(){return e(this,"tt","","")}})},/* 705 */
/***/
function(e,t,n){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
n(25)("fontcolor",function(e){return function(t){return e(this,"font","color",t)}})},/* 706 */
/***/
function(e,t,n){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
n(25)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})},/* 707 */
/***/
function(e,t,n){"use strict";
// B.2.3.9 String.prototype.italics()
n(25)("italics",function(e){return function(){return e(this,"i","","")}})},/* 708 */
/***/
function(e,t,n){"use strict";
// B.2.3.10 String.prototype.link(url)
n(25)("link",function(e){return function(t){return e(this,"a","href",t)}})},/* 709 */
/***/
function(e,t,n){"use strict";
// B.2.3.11 String.prototype.small()
n(25)("small",function(e){return function(){return e(this,"small","","")}})},/* 710 */
/***/
function(e,t,n){"use strict";
// B.2.3.12 String.prototype.strike()
n(25)("strike",function(e){return function(){return e(this,"strike","","")}})},/* 711 */
/***/
function(e,t,n){"use strict";
// B.2.3.13 String.prototype.sub()
n(25)("sub",function(e){return function(){return e(this,"sub","","")}})},/* 712 */
/***/
function(e,t,n){"use strict";
// B.2.3.14 String.prototype.sup()
n(25)("sup",function(e){return function(){return e(this,"sup","","")}})},/* 713 */
/***/
function(e,t,n){
// 20.3.3.1 / 15.9.4.4 Date.now()
var r=n(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},/* 714 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(17),i=n(36);r(r.P+r.F*n(6)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(e){var t=a(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},/* 715 */
/***/
function(e,t,n){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var r=n(0),a=n(716);
// PhantomJS / old WebKit has a broken implementations
r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},/* 716 */
/***/
function(e,t,n){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var r=n(6),a=Date.prototype.getTime,i=Date.prototype.toISOString,o=function(e){return e>9?e:"0"+e};
// PhantomJS / old WebKit has a broken implementations
e.exports=r(function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-5e13-1))})||!r(function(){i.call(new Date(NaN))})?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+o(e.getUTCMonth()+1)+"-"+o(e.getUTCDate())+"T"+o(e.getUTCHours())+":"+o(e.getUTCMinutes())+":"+o(e.getUTCSeconds())+"."+(n>99?n:"0"+o(n))+"Z"}:i},/* 717 */
/***/
function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(24)(r,"toString",function(){var e=i.call(this);
// eslint-disable-next-line no-self-compare
return e===e?a.call(this):"Invalid Date"})},/* 718 */
/***/
function(e,t,n){var r=n(11)("toPrimitive"),a=Date.prototype;r in a||n(23)(a,r,n(719))},/* 719 */
/***/
function(e,t,n){"use strict";var r=n(3),a=n(36);e.exports=function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return a(r(this),"number"!=e)}},/* 720 */
/***/
function(e,t,n){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var r=n(0);r(r.S,"Array",{isArray:n(109)})},/* 721 */
/***/
function(e,t,n){"use strict";var r=n(31),a=n(0),i=n(17),o=n(367),s=n(168),u=n(16),l=n(169),d=n(170);a(a.S+a.F*!n(111)(function(e){Array.from(e)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(e){var t,n,a,c,f=i(e),h="function"==typeof this?this:Array,m=arguments.length,_=m>1?arguments[1]:void 0,p=void 0!==_,y=0,v=d(f);
// if object isn't iterable or it's array with default iterator - use simple case
if(p&&(_=r(_,m>2?arguments[2]:void 0,2)),void 0==v||h==Array&&s(v))for(t=u(f.length),n=new h(t);t>y;y++)l(n,y,p?_(f[y],y):f[y]);else for(c=v.call(f),n=new h;!(a=c.next()).done;y++)l(n,y,p?o(c,_,[a.value,y],!0):a.value);return n.length=y,n}})},/* 722 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(169);
// WebKit Array.of isn't generic
r(r.S+r.F*n(6)(function(){function e(){}return!(Array.of.call(e)instanceof e)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var e=0,t=arguments.length,n=new("function"==typeof this?this:Array)(t);t>e;)a(n,e,arguments[e++]);return n.length=t,n}})},/* 723 */
/***/
function(e,t,n){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var r=n(0),a=n(26),i=[].join;
// fallback for not array-like strings
r(r.P+r.F*(n(89)!=Object||!n(33)(i)),"Array",{join:function(e){return i.call(a(this),void 0===e?",":e)}})},/* 724 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(156),i=n(32),o=n(61),s=n(16),u=[].slice;
// fallback for not array-like ES3 strings and DOM objects
r(r.P+r.F*n(6)(function(){a&&u.call(a)}),"Array",{slice:function(e,t){var n=s(this.length),r=i(this);if(t=void 0===t?n:t,"Array"==r)return u.call(this,e,t);for(var a=o(e,n),l=o(t,n),d=s(l-a),c=new Array(d),f=0;f<d;f++)c[f]="String"==r?this.charAt(a+f):this[a+f];return c}})},/* 725 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(19),i=n(17),o=n(6),s=[].sort,u=[1,2,3];r(r.P+r.F*(o(function(){
// IE8-
u.sort(void 0)})||!o(function(){
// V8 bug
u.sort(null)})||!n(33)(s)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(e){return void 0===e?s.call(i(this)):s.call(i(this),a(e))}})},/* 726 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(40)(0),i=n(33)([].forEach,!0);r(r.P+r.F*!i,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(e){return a(this,e,arguments[1])}})},/* 727 */
/***/
function(e,t,n){var r=n(7),a=n(109),i=n(11)("species");e.exports=function(e){var t;
// cross-realm fallback
return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},/* 728 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(40)(1);r(r.P+r.F*!n(33)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(e){return a(this,e,arguments[1])}})},/* 729 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(40)(2);r(r.P+r.F*!n(33)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(e){return a(this,e,arguments[1])}})},/* 730 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(40)(3);r(r.P+r.F*!n(33)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(e){return a(this,e,arguments[1])}})},/* 731 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(40)(4);r(r.P+r.F*!n(33)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(e){return a(this,e,arguments[1])}})},/* 732 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(368);r(r.P+r.F*!n(33)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(e){return a(this,e,arguments.length,arguments[1],!1)}})},/* 733 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(368);r(r.P+r.F*!n(33)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(e){return a(this,e,arguments.length,arguments[1],!0)}})},/* 734 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(107)(!1),i=[].indexOf,o=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(o||!n(33)(i)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(e){return o?i.apply(this,arguments)||0:a(this,e,arguments[1])}})},/* 735 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(26),i=n(38),o=n(16),s=[].lastIndexOf,u=!!s&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(u||!n(33)(s)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(e){
// convert -0 to +0
if(u)return s.apply(this,arguments)||0;var t=a(this),n=o(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},/* 736 */
/***/
function(e,t,n){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var r=n(0);r(r.P,"Array",{copyWithin:n(369)}),n(48)("copyWithin")},/* 737 */
/***/
function(e,t,n){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var r=n(0);r(r.P,"Array",{fill:n(172)}),n(48)("fill")},/* 738 */
/***/
function(e,t,n){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var r=n(0),a=n(40)(5),i=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(48)("find")},/* 739 */
/***/
function(e,t,n){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var r=n(0),a=n(40)(6),i="findIndex",o=!0;
// Shouldn't skip holes
i in[]&&Array(1)[i](function(){o=!1}),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(48)(i)},/* 740 */
/***/
function(e,t,n){n(64)("Array")},/* 741 */
/***/
function(e,t,n){var r=n(4),a=n(159),i=n(15).f,o=n(63).f,s=n(110),u=n(112),l=r.RegExp,d=l,c=l.prototype,f=/a/g,h=/a/g,m=new l(f)!==f;if(n(14)&&(!m||n(6)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return h[n(11)("match")]=!1,l(f)!=f||l(h)==h||"/a/i"!=l(f,"i")}))){l=function(e,t){var n=this instanceof l,r=s(e),i=void 0===t;return!n&&r&&e.constructor===l&&i?e:a(m?new d(r&&!i?e.source:e,t):d((r=e instanceof l)?e.source:e,r&&i?u.call(e):t),n?this:c,l)};for(var _=o(d),p=0;_.length>p;)!function(e){e in l||i(l,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})}(_[p++]);c.constructor=l,l.prototype=c,n(24)(r,"RegExp",l)}n(64)("RegExp")},/* 742 */
/***/
function(e,t,n){"use strict";n(371);var r=n(3),a=n(112),i=n(14),o=/./.toString,s=function(e){n(24)(RegExp.prototype,"toString",e,!0)};
// 21.2.5.14 RegExp.prototype.toString()
n(6)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?a.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},/* 743 */
/***/
function(e,t,n){
// @@match logic
n(113)("match",1,function(e,t,n){
// 21.1.3.11 String.prototype.match(regexp)
return[function(n){"use strict";var r=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},n]})},/* 744 */
/***/
function(e,t,n){
// @@replace logic
n(113)("replace",2,function(e,t,n){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(r,a){"use strict";var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,a):n.call(String(i),r,a)},n]})},/* 745 */
/***/
function(e,t,n){
// @@search logic
n(113)("search",1,function(e,t,n){
// 21.1.3.15 String.prototype.search(regexp)
return[function(n){"use strict";var r=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},n]})},/* 746 */
/***/
function(e,t,n){
// @@split logic
n(113)("split",2,function(e,t,r){"use strict";var a=n(110),i=r,o=[].push,s="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[s]||2!="ab".split(/(?:ab)*/)[s]||4!=".".split(/(.?)(.?)/)[s]||".".split(/()()/)[s]>1||"".split(/.?/)[s]){var u=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
r=function(e,t){var n=String(this);if(void 0===e&&0===t)return[];
// If `separator` is not a regex, use native split
if(!a(e))return i.call(n,e,t);var r,l,d,c,f,h=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),_=0,p=void 0===t?4294967295:t>>>0,y=new RegExp(e.source,m+"g");for(
// Doesn't need flags gy, but they don't hurt
u||(r=new RegExp("^"+y.source+"$(?!\\s)",m));(l=y.exec(n))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
d=l.index+l[0][s])>_&&(h.push(n.slice(_,l.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!u&&l[s]>1&&l[0].replace(r,function(){for(f=1;f<arguments[s]-2;f++)void 0===arguments[f]&&(l[f]=void 0)}),l[s]>1&&l.index<n[s]&&o.apply(h,l.slice(1)),c=l[0][s],_=d,h[s]>=p));)y.lastIndex===l.index&&y.lastIndex++;return _===n[s]?!c&&y.test("")||h.push(""):h.push(n.slice(_)),h[s]>p?h.slice(0,p):h}}else"0".split(void 0,0)[s]&&(r=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(n,a){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,a):r.call(String(i),n,a)},r]})},/* 747 */
/***/
function(e,t,n){"use strict";var r,a,i,o,s=n(59),u=n(4),l=n(31),d=n(91),c=n(0),f=n(7),h=n(19),m=n(65),_=n(66),p=n(114),y=n(174).set,v=n(175)(),g=n(176),M=n(372),b=n(373),L=u.TypeError,k=u.process,Y=u.Promise,w="process"==d(k),x=function(){},D=a=g.f,S=!!function(){try{
// correct subclassing with @@species support
var e=Y.resolve(1),t=(e.constructor={})[n(11)("species")]=function(e){e(x,x)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(w||"function"==typeof PromiseRejectionEvent)&&e.then(x)instanceof t}catch(e){}}(),T=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},E=function(e,t){if(!e._n){e._n=!0;var n=e._c;v(function(){for(var r=e._v,a=1==e._s,i=0;n.length>i;)!function(t){var n,i,o=a?t.ok:t.fail,s=t.resolve,u=t.reject,l=t.domain;try{o?(a||(2==e._h&&P(e),e._h=1),!0===o?n=r:(l&&l.enter(),n=o(r),l&&l.exit()),n===t.promise?u(L("Promise-chain cycle")):(i=T(n))?i.call(n,s,u):s(n)):u(r)}catch(e){u(e)}}(n[i++]);// variable length - can't use forEach
e._c=[],e._n=!1,t&&!e._h&&j(e)})}},j=function(e){y.call(u,function(){var t,n,r,a=e._v,i=O(e);if(i&&(t=M(function(){w?k.emit("unhandledRejection",a,e):(n=u.onunhandledrejection)?n({promise:e,reason:a}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",a)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
e._h=w||O(e)?2:1),e._a=void 0,i&&t.e)throw t.v})},O=function(e){return 1!==e._h&&0===(e._a||e._c).length},P=function(e){y.call(u,function(){var t;w?k.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},H=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,// unwrap
t._v=e,t._s=2,t._a||(t._a=t._c.slice()),E(t,!0))},A=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;// unwrap
try{if(n===e)throw L("Promise can't be resolved itself");(t=T(e))?v(function(){var r={_w:n,_d:!1};// wrap
try{t.call(e,l(A,r,1),l(H,r,1))}catch(e){H.call(r,e)}}):(n._v=e,n._s=1,E(n,!1))}catch(e){H.call({_w:n,_d:!1},e)}}};
// constructor polyfill
S||(
// 25.4.3.1 Promise(executor)
Y=function(e){m(this,Y,"Promise","_h"),h(e),r.call(this);try{e(l(A,this,1),l(H,this,1))}catch(e){H.call(this,e)}},
// eslint-disable-next-line no-unused-vars
r=function(e){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},r.prototype=n(67)(Y.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(e,t){var n=D(p(this,Y));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=w?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&E(this,!1),n.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r;this.promise=e,this.resolve=l(A,e,1),this.reject=l(H,e,1)},g.f=D=function(e){return e===Y||e===o?new i(e):a(e)}),c(c.G+c.W+c.F*!S,{Promise:Y}),n(77)(Y,"Promise"),n(64)("Promise"),o=n(35).Promise,
// statics
c(c.S+c.F*!S,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(e){var t=D(this);return(0,t.reject)(e),t.promise}}),c(c.S+c.F*(s||!S),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(e){return b(s&&this===o?Y:this,e)}}),c(c.S+c.F*!(S&&n(111)(function(e){Y.all(e).catch(x)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(e){var t=this,n=D(t),r=n.resolve,a=n.reject,i=M(function(){var n=[],i=0,o=1;_(e,!1,function(e){var s=i++,u=!1;n.push(void 0),o++,t.resolve(e).then(function(e){u||(u=!0,n[s]=e,--o||r(n))},a)}),--o||r(n)});return i.e&&a(i.v),n.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(e){var t=this,n=D(t),r=n.reject,a=M(function(){_(e,!1,function(e){t.resolve(e).then(n.resolve,r)})});return a.e&&r(a.v),n.promise}})},/* 748 */
/***/
function(e,t,n){"use strict";var r=n(378),a=n(80);
// 23.4 WeakSet Objects
n(115)("WeakSet",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(e){return r.def(a(this,"WeakSet"),e,!0)}},r,!1,!0)},/* 749 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(116),i=n(177),o=n(3),s=n(61),u=n(16),l=n(7),d=n(4).ArrayBuffer,c=n(114),f=i.ArrayBuffer,h=i.DataView,m=a.ABV&&d.isView,_=f.prototype.slice,p=a.VIEW;r(r.G+r.W+r.F*(d!==f),{ArrayBuffer:f}),r(r.S+r.F*!a.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(e){return m&&m(e)||l(e)&&p in e}}),r(r.P+r.U+r.F*n(6)(function(){return!new f(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(e,t){if(void 0!==_&&void 0===t)return _.call(o(this),e);for(// FF fix
var n=o(this).byteLength,r=s(e,n),a=s(void 0===t?n:t,n),i=new(c(this,f))(u(a-r)),l=new h(this),d=new h(i),m=0;r<a;)d.setUint8(m++,l.getUint8(r++));return i}}),n(64)("ArrayBuffer")},/* 750 */
/***/
function(e,t,n){var r=n(0);r(r.G+r.W+r.F*!n(116).ABV,{DataView:n(177).DataView})},/* 751 */
/***/
function(e,t,n){n(41)("Int8",1,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 752 */
/***/
function(e,t,n){n(41)("Uint8",1,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 753 */
/***/
function(e,t,n){n(41)("Uint8",1,function(e){return function(t,n,r){return e(this,t,n,r)}},!0)},/* 754 */
/***/
function(e,t,n){n(41)("Int16",2,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 755 */
/***/
function(e,t,n){n(41)("Uint16",2,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 756 */
/***/
function(e,t,n){n(41)("Int32",4,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 757 */
/***/
function(e,t,n){n(41)("Uint32",4,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 758 */
/***/
function(e,t,n){n(41)("Float32",4,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 759 */
/***/
function(e,t,n){n(41)("Float64",8,function(e){return function(t,n,r){return e(this,t,n,r)}})},/* 760 */
/***/
function(e,t,n){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var r=n(0),a=n(19),i=n(3),o=(n(4).Reflect||{}).apply,s=Function.apply;
// MS Edge argumentsList argument is optional
r(r.S+r.F*!n(6)(function(){o(function(){})}),"Reflect",{apply:function(e,t,n){var r=a(e),u=i(n);return o?o(r,t,u):s.call(r,t,u)}})},/* 761 */
/***/
function(e,t,n){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var r=n(0),a=n(62),i=n(19),o=n(3),s=n(7),u=n(6),l=n(359),d=(n(4).Reflect||{}).construct,c=u(function(){function e(){}return!(d(function(){},[],e)instanceof e)}),f=!u(function(){d(function(){})});r(r.S+r.F*(c||f),"Reflect",{construct:function(e,t){i(e),o(t);var n=arguments.length<3?e:i(arguments[2]);if(f&&!c)return d(e,t,n);if(e==n){
// w/o altered newTarget, optimization for 0-4 arguments
switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}
// w/o altered newTarget, lot of arguments case
var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}
// with altered newTarget, not support built-in constructors
var u=n.prototype,h=a(s(u)?u:Object.prototype),m=Function.apply.call(e,h,t);return s(m)?m:h}})},/* 762 */
/***/
function(e,t,n){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var r=n(15),a=n(0),i=n(3),o=n(36);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
a(a.S+a.F*n(6)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(e,t,n){i(e),t=o(t,!0),i(n);try{return r.f(e,t,n),!0}catch(e){return!1}}})},/* 763 */
/***/
function(e,t,n){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var r=n(0),a=n(27).f,i=n(3);r(r.S,"Reflect",{deleteProperty:function(e,t){var n=a(i(e),t);return!(n&&!n.configurable)&&delete e[t]}})},/* 764 */
/***/
function(e,t,n){"use strict";
// 26.1.5 Reflect.enumerate(target)
var r=n(0),a=n(3),i=function(e){this._t=a(e),// target
this._i=0;// next index
var t,n=this._k=[];for(t in e)n.push(t)};n(165)(i,"Object",function(){var e,t=this,n=t._k;do{if(t._i>=n.length)return{value:void 0,done:!0}}while(!((e=n[t._i++])in t._t));return{value:e,done:!1}}),r(r.S,"Reflect",{enumerate:function(e){return new i(e)}})},/* 765 */
/***/
function(e,t,n){function r(e,t){var n,s,d=arguments.length<3?e:arguments[2];return l(e)===d?e[t]:(n=a.f(e,t))?o(n,"value")?n.value:void 0!==n.get?n.get.call(d):void 0:u(s=i(e))?r(s,t,d):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var a=n(27),i=n(28),o=n(22),s=n(0),u=n(7),l=n(3);s(s.S,"Reflect",{get:r})},/* 766 */
/***/
function(e,t,n){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var r=n(27),a=n(0),i=n(3);a(a.S,"Reflect",{getOwnPropertyDescriptor:function(e,t){return r.f(i(e),t)}})},/* 767 */
/***/
function(e,t,n){
// 26.1.8 Reflect.getPrototypeOf(target)
var r=n(0),a=n(28),i=n(3);r(r.S,"Reflect",{getPrototypeOf:function(e){return a(i(e))}})},/* 768 */
/***/
function(e,t,n){
// 26.1.9 Reflect.has(target, propertyKey)
var r=n(0);r(r.S,"Reflect",{has:function(e,t){return t in e}})},/* 769 */
/***/
function(e,t,n){
// 26.1.10 Reflect.isExtensible(target)
var r=n(0),a=n(3),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(e){return a(e),!i||i(e)}})},/* 770 */
/***/
function(e,t,n){
// 26.1.11 Reflect.ownKeys(target)
var r=n(0);r(r.S,"Reflect",{ownKeys:n(380)})},/* 771 */
/***/
function(e,t,n){
// 26.1.12 Reflect.preventExtensions(target)
var r=n(0),a=n(3),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(e){a(e);try{return i&&i(e),!0}catch(e){return!1}}})},/* 772 */
/***/
function(e,t,n){function r(e,t,n){var u,f,h=arguments.length<4?e:arguments[3],m=i.f(d(e),t);if(!m){if(c(f=o(e)))return r(f,t,n,h);m=l(0)}return s(m,"value")?!(!1===m.writable||!c(h))&&(u=i.f(h,t)||l(0),u.value=n,a.f(h,t,u),!0):void 0!==m.set&&(m.set.call(h,n),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var a=n(15),i=n(27),o=n(28),s=n(22),u=n(0),l=n(57),d=n(3),c=n(7);u(u.S,"Reflect",{set:r})},/* 773 */
/***/
function(e,t,n){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var r=n(0),a=n(157);a&&r(r.S,"Reflect",{setPrototypeOf:function(e,t){a.check(e,t);try{return a.set(e,t),!0}catch(e){return!1}}})},/* 774 */
/***/
function(e,t,n){"use strict";
// https://github.com/tc39/Array.prototype.includes
var r=n(0),a=n(107)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(48)("includes")},/* 775 */
/***/
function(e,t,n){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var r=n(0),a=n(381),i=n(17),o=n(16),s=n(19),u=n(171);r(r.P,"Array",{flatMap:function(e){var t,n,r=i(this);return s(e),t=o(r.length),n=u(r,0),a(n,r,r,t,0,1,e,arguments[1]),n}}),n(48)("flatMap")},/* 776 */
/***/
function(e,t,n){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var r=n(0),a=n(381),i=n(17),o=n(16),s=n(38),u=n(171);r(r.P,"Array",{flatten:function(){var e=arguments[0],t=i(this),n=o(t.length),r=u(t,0);return a(r,t,t,n,0,void 0===e?1:s(e)),r}}),n(48)("flatten")},/* 777 */
/***/
function(e,t,n){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var r=n(0),a=n(163)(!0);r(r.P,"String",{at:function(e){return a(this,e)}})},/* 778 */
/***/
function(e,t,n){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var r=n(0),a=n(382),i=n(178);
// https://github.com/zloirock/core-js/issues/280
r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(i),"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},/* 779 */
/***/
function(e,t,n){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var r=n(0),a=n(382),i=n(178);
// https://github.com/zloirock/core-js/issues/280
r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(i),"String",{padEnd:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},/* 780 */
/***/
function(e,t,n){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
n(78)("trimLeft",function(e){return function(){return e(this,1)}},"trimStart")},/* 781 */
/***/
function(e,t,n){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
n(78)("trimRight",function(e){return function(){return e(this,2)}},"trimEnd")},/* 782 */
/***/
function(e,t,n){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var r=n(0),a=n(37),i=n(16),o=n(110),s=n(112),u=RegExp.prototype,l=function(e,t){this._r=e,this._s=t};n(165)(l,"RegExp String",function(){var e=this._r.exec(this._s);return{value:e,done:null===e}}),r(r.P,"String",{matchAll:function(e){if(a(this),!o(e))throw TypeError(e+" is not a regexp!");var t=String(this),n="flags"in u?String(e.flags):s.call(e),r=new RegExp(e.source,~n.indexOf("g")?n:"g"+n);return r.lastIndex=i(e.lastIndex),new l(r,t)}})},/* 783 */
/***/
function(e,t,n){n(153)("asyncIterator")},/* 784 */
/***/
function(e,t,n){n(153)("observable")},/* 785 */
/***/
function(e,t,n){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var r=n(0),a=n(380),i=n(26),o=n(27),s=n(169);r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),u=o.f,l=a(r),d={},c=0;l.length>c;)void 0!==(n=u(r,t=l[c++]))&&s(d,t,n);return d}})},/* 786 */
/***/
function(e,t,n){
// https://github.com/tc39/proposal-object-values-entries
var r=n(0),a=n(383)(!1);r(r.S,"Object",{values:function(e){return a(e)}})},/* 787 */
/***/
function(e,t,n){
// https://github.com/tc39/proposal-object-values-entries
var r=n(0),a=n(383)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},/* 788 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(17),i=n(19),o=n(15);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
n(14)&&r(r.P+n(117),"Object",{__defineGetter__:function(e,t){o.f(a(this),e,{get:i(t),enumerable:!0,configurable:!0})}})},/* 789 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(17),i=n(19),o=n(15);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
n(14)&&r(r.P+n(117),"Object",{__defineSetter__:function(e,t){o.f(a(this),e,{set:i(t),enumerable:!0,configurable:!0})}})},/* 790 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(17),i=n(36),o=n(28),s=n(27).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
n(14)&&r(r.P+n(117),"Object",{__lookupGetter__:function(e){var t,n=a(this),r=i(e,!0);do{if(t=s(n,r))return t.get}while(n=o(n))}})},/* 791 */
/***/
function(e,t,n){"use strict";var r=n(0),a=n(17),i=n(36),o=n(28),s=n(27).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
n(14)&&r(r.P+n(117),"Object",{__lookupSetter__:function(e){var t,n=a(this),r=i(e,!0);do{if(t=s(n,r))return t.set}while(n=o(n))}})},/* 792 */
/***/
function(e,t,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(0);r(r.P+r.R,"Map",{toJSON:n(384)("Map")})},/* 793 */
/***/
function(e,t,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(0);r(r.P+r.R,"Set",{toJSON:n(384)("Set")})},/* 794 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
n(118)("Map")},/* 795 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
n(118)("Set")},/* 796 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
n(118)("WeakMap")},/* 797 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
n(118)("WeakSet")},/* 798 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
n(119)("Map")},/* 799 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
n(119)("Set")},/* 800 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
n(119)("WeakMap")},/* 801 */
/***/
function(e,t,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
n(119)("WeakSet")},/* 802 */
/***/
function(e,t,n){
// https://github.com/tc39/proposal-global
var r=n(0);r(r.G,{global:n(4)})},/* 803 */
/***/
function(e,t,n){
// https://github.com/tc39/proposal-global
var r=n(0);r(r.S,"System",{global:n(4)})},/* 804 */
/***/
function(e,t,n){
// https://github.com/ljharb/proposal-is-error
var r=n(0),a=n(32);r(r.S,"Error",{isError:function(e){return"Error"===a(e)}})},/* 805 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{clamp:function(e,t,n){return Math.min(n,Math.max(t,e))}})},/* 806 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 807 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0),a=180/Math.PI;r(r.S,"Math",{degrees:function(e){return e*a}})},/* 808 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0),a=n(386),i=n(366);r(r.S,"Math",{fscale:function(e,t,n,r,o){return i(a(e,t,n,r,o))}})},/* 809 */
/***/
function(e,t,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{iaddh:function(e,t,n,r){var a=e>>>0,i=t>>>0,o=n>>>0;return i+(r>>>0)+((a&o|(a|o)&~(a+o>>>0))>>>31)|0}})},/* 810 */
/***/
function(e,t,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{isubh:function(e,t,n,r){var a=e>>>0,i=t>>>0,o=n>>>0;return i-(r>>>0)-((~a&o|~(a^o)&a-o>>>0)>>>31)|0}})},/* 811 */
/***/
function(e,t,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{imulh:function(e,t){var n=+e,r=+t,a=65535&n,i=65535&r,o=n>>16,s=r>>16,u=(o*i>>>0)+(a*i>>>16);return o*s+(u>>16)+((a*s>>>0)+(65535&u)>>16)}})},/* 812 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 813 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0),a=Math.PI/180;r(r.S,"Math",{radians:function(e){return e*a}})},/* 814 */
/***/
function(e,t,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{scale:n(386)})},/* 815 */
/***/
function(e,t,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{umulh:function(e,t){var n=+e,r=+t,a=65535&n,i=65535&r,o=n>>>16,s=r>>>16,u=(o*i>>>0)+(a*i>>>16);return o*s+(u>>>16)+((a*s>>>0)+(65535&u)>>>16)}})},/* 816 */
/***/
function(e,t,n){
// http://jfbastien.github.io/papers/Math.signbit.html
var r=n(0);r(r.S,"Math",{signbit:function(e){
// eslint-disable-next-line no-self-compare
return(e=+e)!=e?e:0==e?1/e==1/0:e>0}})},/* 817 */
/***/
function(e,t,n){"use strict";
// https://github.com/tc39/proposal-promise-finally
var r=n(0),a=n(35),i=n(4),o=n(114),s=n(373);r(r.P+r.R,"Promise",{finally:function(e){var t=o(this,a.Promise||i.Promise),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then(function(){return n})}:e,n?function(n){return s(t,e()).then(function(){throw n})}:e)}})},/* 818 */
/***/
function(e,t,n){"use strict";
// https://github.com/tc39/proposal-promise-try
var r=n(0),a=n(176),i=n(372);r(r.S,"Promise",{try:function(e){var t=a.f(this),n=i(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},/* 819 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=r.key,o=r.set;r.exp({defineMetadata:function(e,t,n,r){o(e,t,a(n),i(r))}})},/* 820 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=r.key,o=r.map,s=r.store;r.exp({deleteMetadata:function(e,t){var n=arguments.length<3?void 0:i(arguments[2]),r=o(a(t),n,!1);if(void 0===r||!r.delete(e))return!1;if(r.size)return!0;var u=s.get(t);return u.delete(n),!!u.size||s.delete(t)}})},/* 821 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=n(28),o=r.has,s=r.get,u=r.key,l=function(e,t,n){if(o(e,t,n))return s(e,t,n);var r=i(t);return null!==r?l(e,r,n):void 0};r.exp({getMetadata:function(e,t){return l(e,a(t),arguments.length<3?void 0:u(arguments[2]))}})},/* 822 */
/***/
function(e,t,n){var r=n(376),a=n(385),i=n(42),o=n(3),s=n(28),u=i.keys,l=i.key,d=function(e,t){var n=u(e,t),i=s(e);if(null===i)return n;var o=d(i,t);return o.length?n.length?a(new r(n.concat(o))):o:n};i.exp({getMetadataKeys:function(e){return d(o(e),arguments.length<2?void 0:l(arguments[1]))}})},/* 823 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=r.get,o=r.key;r.exp({getOwnMetadata:function(e,t){return i(e,a(t),arguments.length<3?void 0:o(arguments[2]))}})},/* 824 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=r.keys,o=r.key;r.exp({getOwnMetadataKeys:function(e){return i(a(e),arguments.length<2?void 0:o(arguments[1]))}})},/* 825 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=n(28),o=r.has,s=r.key,u=function(e,t,n){if(o(e,t,n))return!0;var r=i(t);return null!==r&&u(e,r,n)};r.exp({hasMetadata:function(e,t){return u(e,a(t),arguments.length<3?void 0:s(arguments[2]))}})},/* 826 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=r.has,o=r.key;r.exp({hasOwnMetadata:function(e,t){return i(e,a(t),arguments.length<3?void 0:o(arguments[2]))}})},/* 827 */
/***/
function(e,t,n){var r=n(42),a=n(3),i=n(19),o=r.key,s=r.set;r.exp({metadata:function(e,t){return function(n,r){s(e,t,(void 0!==r?a:i)(n),o(r))}}})},/* 828 */
/***/
function(e,t,n){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var r=n(0),a=n(175)(),i=n(4).process,o="process"==n(32)(i);r(r.G,{asap:function(e){var t=o&&i.domain;a(t?t.bind(e):e)}})},/* 829 */
/***/
function(e,t,n){"use strict";
// https://github.com/zenparsing/es-observable
var r=n(0),a=n(4),i=n(35),o=n(175)(),s=n(11)("observable"),u=n(19),l=n(3),d=n(65),c=n(67),f=n(23),h=n(66),m=h.RETURN,_=function(e){return null==e?void 0:u(e)},p=function(e){var t=e._c;t&&(e._c=void 0,t())},y=function(e){return void 0===e._o},v=function(e){y(e)||(e._o=void 0,p(e))},g=function(e,t){l(e),this._c=void 0,this._o=e,e=new M(this);try{var n=t(e),r=n;null!=n&&("function"==typeof n.unsubscribe?n=function(){r.unsubscribe()}:u(n),this._c=n)}catch(t){return void e.error(t)}y(this)&&p(this)};g.prototype=c({},{unsubscribe:function(){v(this)}});var M=function(e){this._s=e};M.prototype=c({},{next:function(e){var t=this._s;if(!y(t)){var n=t._o;try{var r=_(n.next);if(r)return r.call(n,e)}catch(e){try{v(t)}finally{throw e}}}},error:function(e){var t=this._s;if(y(t))throw e;var n=t._o;t._o=void 0;try{var r=_(n.error);if(!r)throw e;e=r.call(n,e)}catch(e){try{p(t)}finally{throw e}}return p(t),e},complete:function(e){var t=this._s;if(!y(t)){var n=t._o;t._o=void 0;try{var r=_(n.complete);e=r?r.call(n,e):void 0}catch(e){try{p(t)}finally{throw e}}return p(t),e}}});var b=function(e){d(this,b,"Observable","_f")._f=u(e)};c(b.prototype,{subscribe:function(e){return new g(e,this._f)},forEach:function(e){var t=this;return new(i.Promise||a.Promise)(function(n,r){u(e);var a=t.subscribe({next:function(t){try{return e(t)}catch(e){r(e),a.unsubscribe()}},error:r,complete:n})})}}),c(b,{from:function(e){var t="function"==typeof this?this:b,n=_(l(e)[s]);if(n){var r=l(n.call(e));return r.constructor===t?r:new t(function(e){return r.subscribe(e)})}return new t(function(t){var n=!1;return o(function(){if(!n){try{if(h(e,!1,function(e){if(t.next(e),n)return m})===m)return}catch(e){if(n)throw e;return void t.error(e)}t.complete()}}),function(){n=!0}})},of:function(){for(var e=0,t=arguments.length,n=new Array(t);e<t;)n[e]=arguments[e++];return new("function"==typeof this?this:b)(function(e){var t=!1;return o(function(){if(!t){for(var r=0;r<n.length;++r)if(e.next(n[r]),t)return;e.complete()}}),function(){t=!0}})}}),f(b.prototype,s,function(){return this}),r(r.G,{Observable:b}),n(64)("Observable")},/* 830 */
/***/
function(e,t,n){
// ie9- setTimeout & setInterval additional parameters fix
var r=n(4),a=n(0),i=n(178),o=[].slice,s=/MSIE .\./.test(i),u=function(e){return function(t,n){var r=arguments.length>2,a=!!r&&o.call(arguments,2);return e(r?function(){
// eslint-disable-next-line no-new-func
("function"==typeof t?t:Function(t)).apply(this,a)}:t,n)}};a(a.G+a.B+a.F*s,{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},/* 831 */
/***/
function(e,t,n){var r=n(0),a=n(174);r(r.G+r.B,{setImmediate:a.set,clearImmediate:a.clear})},/* 832 */
/***/
function(e,t,n){for(var r=n(173),a=n(60),i=n(24),o=n(4),s=n(23),u=n(79),l=n(11),d=l("iterator"),c=l("toStringTag"),f=u.Array,h={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(h),_=0;_<m.length;_++){var p,y=m[_],v=h[y],g=o[y],M=g&&g.prototype;if(M&&(M[d]||s(M,d,f),M[c]||s(M,c,y),u[y]=f,v))for(p in r)M[p]||i(M,p,r[p],!0)}},/* 833 */
/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(t){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function(t){"use strict";function n(e,t,n,r){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var i=t&&t.prototype instanceof a?t:a,o=Object.create(i.prototype),s=new h(r||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return o._invoke=l(e,n,s),o}
// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function a(){}function i(){}function o(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function u(e){function n(t,a,i,o){var s=r(e[t],e,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&v.call(l,"__await")?Promise.resolve(l.__await).then(function(e){n("next",e,i,o)},function(e){n("throw",e,i,o)}):Promise.resolve(l).then(function(e){
// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
u.value=e,i(u)},o)}o(s.arg)}function a(e,t){function r(){return new Promise(function(r,a){n(e,t,r,a)})}
// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
return i=i?i.then(r,r):r()}"object"==typeof t.process&&t.process.domain&&(n=t.process.domain.bind(n));var i;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=a}function l(e,t,n){var a=w;return function(i,o){if(a===D)throw new Error("Generator is already running");if(a===S){if("throw"===i)throw o;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return _()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var u=d(s,n);if(u){if(u===T)continue;return u}}if("next"===n.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===w)throw a=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=D;var l=r(e,t,n);if("normal"===l.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
a=n.done?S:x,l.arg===T)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=S,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
n.method="throw",n.arg=l.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function d(e,t){var n=e.iterator[t.method];if(n===p){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
t.delegate=null,"throw"===t.method){if(e.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
t.method="return",t.arg=p,d(e,t),"throw"===t.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return T;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var a=r(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,T;var i=a.arg;
// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
// Resume execution at the desired location (see delegateYield).
// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=p),t.delegate=null,T):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,T)}function c(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function f(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function h(e){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(c,this),this.reset(!0)}function m(e){if(e){var t=e[M];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(v.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=p,t.done=!0,t};return r.next=r}}
// Return an iterator with no values.
return{next:_}}function _(){return{value:p,done:!0}}var p,y=Object.prototype,v=y.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},M=g.iterator||"@@iterator",b=g.asyncIterator||"@@asyncIterator",L=g.toStringTag||"@@toStringTag",k="object"==typeof e,Y=t.regeneratorRuntime;if(Y)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(k&&(e.exports=Y));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
Y=t.regeneratorRuntime=k?e.exports:{},Y.wrap=n;var w="suspendedStart",x="suspendedYield",D="executing",S="completed",T={},E={};E[M]=function(){return this};var j=Object.getPrototypeOf,O=j&&j(j(m([])));O&&O!==y&&v.call(O,M)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
E=O);var P=o.prototype=a.prototype=Object.create(E);i.prototype=P.constructor=o,o.constructor=i,o[L]=i.displayName="GeneratorFunction",Y.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},Y.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,o):(e.__proto__=o,L in e||(e[L]="GeneratorFunction")),e.prototype=Object.create(P),e},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
Y.awrap=function(e){return{__await:e}},s(u.prototype),u.prototype[b]=function(){return this},Y.AsyncIterator=u,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
Y.async=function(e,t,r,a){var i=new u(n(e,t,r,a));return Y.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
s(P),P[L]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
P[M]=function(){return this},P.toString=function(){return"[object Generator]"},Y.keys=function(e){var t=[];for(var n in e)t.push(n);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return n.done=!0,n}},Y.values=m,h.prototype={constructor:h,reset:function(e){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=p,this.done=!1,this.delegate=null,this.method="next",this.arg=p,this.tryEntries.forEach(f),!e)for(var t in this)
// Not sure about the optimal order of these conditions:
"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=p)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=p),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return t("end");if(a.tryLoc<=this.prev){var o=v.call(a,"catchLoc"),s=v.call(a,"finallyLoc");if(o&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&v.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,T):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),T},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),f(n),T}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;f(n)}return a}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:m(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=p),T}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,n(141))},/* 834 */
/***/
function(e,t,n){n(835),e.exports=n(35).RegExp.escape},/* 835 */
/***/
function(e,t,n){
// https://github.com/benjamingr/RexExp.escape
var r=n(0),a=n(836)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function(e){return a(e)}})},/* 836 */
/***/
function(e,t){e.exports=function(e,t){var n=t===Object(t)?function(e){return t[e]}:t;return function(t){return String(t).replace(e,n)}}}],[387]);