/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*!
 * Tiny Scrollbar 1.66
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Copyright 2010, Maarten Baijs
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 13 / 11 / 2011
 * Depends on library: jQuery
 * 
 */

var requirejs,require,define;(function(e){function c(e,t){return f.call(e,t)}function h(e,t){var n,r,i,s,o,a,f,l,c,h,p=t&&t.split("/"),d=u.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(l=0;l<e.length;l+=1){h=e[l];if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))break;l>0&&(e.splice(l-1,2),l-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(l=n.length;l>0;l-=1){r=n.slice(0,l).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=l;break}}}if(s)break;!a&&v&&v[r]&&(a=v[r],f=l)}!s&&a&&(s=a,o=f),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function p(t,r){return function(){return n.apply(e,l.call(arguments,0).concat([t,r]))}}function d(e){return function(t){return h(t,e)}}function v(e){return function(t){s[e]=t}}function m(n){if(c(o,n)){var r=o[n];delete o[n],a[n]=!0,t.apply(e,r)}if(!c(s,n)&&!c(a,n))throw new Error("No "+n);return s[n]}function g(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function y(e){return function(){return u&&u.config&&u.config[e]||{}}}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice;r=function(e,t){var n,r=g(e),i=r[0];return e=r[1],i&&(i=h(i,t),n=m(i)),i?n&&n.normalize?e=n.normalize(e,d(t)):e=h(e,t):(e=h(e,t),r=g(e),i=r[0],e=r[1],i&&(n=m(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},i={require:function(e){return p(e)},exports:function(e){var t=s[e];return typeof t!="undefined"?t:s[e]={}},module:function(e){return{id:e,uri:"",exports:s[e],config:y(e)}}},t=function(t,n,u,f){var l,h,d,g,y,b=[],w;f=f||t;if(typeof u=="function"){n=!n.length&&u.length?["require","exports","module"]:n;for(y=0;y<n.length;y+=1){g=r(n[y],f),h=g.f;if(h==="require")b[y]=i.require(t);else if(h==="exports")b[y]=i.exports(t),w=!0;else if(h==="module")l=b[y]=i.module(t);else if(c(s,h)||c(o,h)||c(a,h))b[y]=m(h);else{if(!g.p)throw new Error(t+" missing "+h);g.p.load(g.n,p(f,!0),v(h),{}),b[y]=s[h]}}d=u.apply(s[t],b);if(t)if(l&&l.exports!==e&&l.exports!==s[t])s[t]=l.exports;else if(d!==e||!w)s[t]=d}else t&&(s[t]=u)},requirejs=require=n=function(s,o,a,f,l){return typeof s=="string"?i[s]?i[s](o):m(r(s,o).f):(s.splice||(u=s,o.splice?(s=o,o=a,a=null):s=e),o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)},4),n)},n.config=function(e){return u=e,u.deps&&n(u.deps,u.callback),n},define=function(e,t,n){t.splice||(n=t,t=[]),!c(s,e)&&!c(o,e)&&(o[e]=[e,t,n])},define.amd={jQuery:!0}})(),define("../src/lib/almond",function(){}),define("jquery",[],function(){return window.jQuery}),define("../src/main/DateTime",["require","jquery"],function(e){function n(e,t,n,r,i,s){function o(e,t,n,r,i,s){r=r||0,i=i||0,s=s||0;var o=new Date(e,t-1,n,r,i,s,0);if(o.toString()=="Invalid Date"||t!=o.getMonth()+1||e!=o.getFullYear()||n!=o.getDate()||r!=o.getHours()||i!=o.getMinutes()||s!=o.getSeconds())throw Error("Invalid Date: "+e+"-"+t+"-"+n+" "+r+":"+i+":"+s);return o}if(arguments.length==0)this.date=new Date;else if(e instanceof Date)this.date=new Date(e.getTime());else if(typeof e=="string")this.date=new Date(e);else{if(typeof e!="number")throw Error("None of supported parameters was used for constructor: "+Array.prototype.slice.call(arguments).join(", "));this.date=o(+e,+t,+n,+r,+i,+s)}}function r(e){var t=e.split("-");return{year:+t[0],month:+t[1],day:+t[2]}}function i(e){if(e){var t=e.split(":");return{hours:+t[0],minutes:+t[1],seconds:+t[2]||0}}return{hours:0,minutes:0}}var t=e("jquery");return n.SUNDAY=0,n.MONDAY=1,n.TUESDAY=2,n.WEDNESDAY=3,n.THURSDAY=4,n.FRIDAY=5,n.SATURDAY=6,n.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],n.y2kYear=50,n.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},n.fromDateTime=function(e,t,r,i,s){return new n(e,t,r,i,s)},n.fromDate=function(e,t,r){return n.fromDateTime(e,t,r,0,0)},n.fromDateObject=function(e){return n.fromMillis(e.getTime())},n.fromIsoDate=function(e){var t=/^\d{4}-[01]\d-[0-3]\d(T[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z?))?$/;if(!t.test(e))throw Error(e+" is not valid ISO Date (YYYY-MM-DD or YYYY-MM-DDTHH:MM)");var i=r(e.split("T")[0]);return n.fromDate(i.year,i.month,i.day)},n.fromIsoDateTime=function(e){var t=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z?)/;if(!t.test(e))throw Error(e+" is not valid ISO Date (YYYY-MM-DDTHH:MM)");var s=e.split("T"),o=i(s.length==2&&s[1]),u=r(s[0]);return new n(u.year,u.month,u.day,o.hours,o.minutes,o.seconds)},n.fromMillis=function(e){return new n(new Date(e))},t.each(["getTime","getFullYear","getDate","getDay","getHours","getMinutes","getSeconds","getMilliseconds"],function(e,t){n.prototype[t]=function(){return this.date[t]()}}),n.prototype.withResetMS=function(){var e=this.clone();return e.date.setMilliseconds(0),e},n.prototype.withTime=function(e,t){if(typeof e=="string"){var n=e.split(":");e=n[0],t=n[1]}var r=this.clone();return r.date.setHours(e),r.date.setMinutes(t),r.date.setSeconds(0),r.date.setMilliseconds(0),r},n.SECOND=1e3,n.MINUTE=60*n.SECOND,n.HOUR=60*n.MINUTE,n.DAY=24*n.HOUR,n.WEEK=7*n.DAY,n.now=function(){return typeof n._now=="undefined"&&(n._now=new n),n._now},n.getDaysInMonth=function(e,t){if(t>12||t<1)throw new Error("Month must be between 1-12");var r=e*12+t;return n.fromDate(Math.floor(r/12),r%12+1,1).minusDays(1).getDate()},n.getDayInYear=function(e,t,r){return n.fromDate(e,1,1).distanceInDays(n.fromDate(e,t,r))+1},n.prototype.getDaysInMonth=function(){return n.getDaysInMonth(this.getFullYear(),this.getMonth())},n.prototype.getDayInYear=function(){return n.getDayInYear(this.getFullYear(),this.getMonth(),this.getDate())},n.prototype.plusDays=function(e){var t=this.clone(),r=this.getHours();t.date.setTime(this.getTime()+e*n.DAY);var i=r-t.getHours();return i!=0&&(i>12&&(i-=24),i<-12&&(i+=24),t.date.setTime(t.getTime()+i*n.HOUR)),t},n.prototype.minusDays=function(e){return this.plusDays(-e)},n.prototype.compareTo=function(e){if(!e)return 1;var t=this.getTime(),n=e.getTime();return t<n?-1:t>n?1:0},n.prototype.isToday=function(){return this.equalsOnlyDate(n.now())},n.prototype.getWeekInYear=function(e){if(e!="US"&&e!="ISO")throw"Week numbering system must be either US or ISO, was "+e;var t=(new Date(this.getFullYear(),0,1)).getDay();if(e=="US")return Math.ceil((this.getDayInYear()+t)/7);var r=4,i=this.getDay();i==0&&(i=7),t==0&&(t=7);if(this.getMonth()==12&&this.getDate()>=29&&this.getDate()-i>27)return 1;if(this.getMonth()==1&&this.getDate()<4&&i>r)return(new n(new Date(this.getFullYear()-1,11,31))).getWeekInYear("ISO");var s=Math.ceil((this.getDayInYear()+t-1)/7);return t>r&&s--,s},n.prototype.clone=function(){return new n(this.date)},n.prototype.isOddMonth=function(){return this.getMonth()%2==0},n.prototype.equalsOnlyDate=function(e){return e?this.getMonth()==e.getMonth()&&this.getDate()==e.getDate()&&this.getFullYear()==e.getFullYear():!1},n.prototype.isBetweenDates=function(e,t){if(e.getTime()>t.getTime())throw Error("start date can't be after end date");return this.compareTo(e)>=0&&this.compareTo(t)<=0},n.prototype.firstDateOfMonth=function(){return n.fromDate(this.getFullYear(),this.getMonth(),1)},n.prototype.lastDateOfMonth=function(){return n.fromDate(this.getFullYear(),this.getMonth(),this.getDaysInMonth())},n.prototype.distanceInDays=function(e){var t=parseInt(this.getTime()/n.DAY,10),r=parseInt(e.getTime()/n.DAY,10);return r-t},n.prototype.withWeekday=function(e){return this.plusDays(e-this.getDay())},n.prototype.getOnlyDate=function(){return n.fromDate(this.getFullYear(),this.getMonth(),this.getDate())},n.prototype.isWeekend=function(){return this.getDay()==6||this.getDay()==0},n.prototype.toString=function(){return this.toISOString()},n.prototype.getFirstDateOfWeek=function(e){var t=e?e.firstWeekday:n.MONDAY;return t<this.getDay()?this.plusDays(t-this.getDay()):t>this.getDay()?this.plusDays(t-this.getDay()-7):this.clone()},n.prototype.toISOString=function(){function e(e){return e<10?"0"+e:""+e}return t.map([this.getFullYear(),this.getMonth(),this.getDate()],e).join("-")+"T"+t.map([this.getHours(),this.getMinutes(),this.getSeconds()],e).join(":")},n.prototype.getMonth=function(){return this.date.getMonth()+1},n}),define("../src/main/DateFormat",["require","./DateTime"],function(require){var DateTime=require("./DateTime"),DateFormat={};return DateFormat.parseFunctions={count:0},DateFormat.parseRegexes=[],DateFormat.formatFunctions={count:0},DateFormat.hoursAndMinutes=function(e,t){return(Math.round((e+t/60)*100)/100).toString()},DateFormat.format=function(e,t,n){DateFormat.formatFunctions[t]==null&&DateFormat.createNewFormat(e,t,n);var r=DateFormat.formatFunctions[t];return e[r]()},DateFormat.shortDateFormat=function(e,t){return DateFormat.format(e,t?t.shortDateFormat:"n/j/Y",t)},DateFormat.formatRange=function(e,t){return e._hasTimes?t.daysLabel(e.days())+" "+t.hoursLabel(e.hours(),e.minutes()):DateFormat.shortDateFormat(e.start,t)+" - "+DateFormat.shortDateFormat(e.end,t)},DateFormat.formatDefiningRangeDuration=function(e,t){var n=parseInt(e.days()/360,10);if(n>0)return t.yearsLabel(n);var r=parseInt(e.days()/30,10);return r>0?t.monthsLabel(r):t.daysLabel(e.days())},DateFormat.getGMTOffset=function(e){return(e.date.getTimezoneOffset()>0?"-":"+")+DateFormat.leftPad(Math.floor(e.getTimezoneOffset()/60),2,"0")+DateFormat.leftPad(e.getTimezoneOffset()%60,2,"0")},DateFormat.leftPad=function(e,t,n){var r=String(e);n==null&&(n=" ");while(r.length<t)r=n+r;return r},DateFormat.escape=function(e){return e.replace(/('|\\)/g,"\\$1")},DateFormat.parse=function(e){if(e=="today")return DateTime.now();var t=new Date(e);if(isNaN(t.getTime()))throw Error('Could not parse date from "'+e+'"');return new DateTime(t)},DateFormat.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",FiShortDatePattern:"j.n.Y",FiWeekdayDatePattern:"D j.n.Y",FiWeekdayDateTimePattern:"D j.n.Y k\\lo G:i",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"},DateFormat.parseTime=function(e){function r(e){if(e.indexOf(".")!=-1)return e.split(".");switch(e.length){case 4:return[e.slice(0,2),e.slice(2,4)];case 3:return[e.slice(0,1),e.slice(1,3)];case 2:return[e,0];default:return[-1,-1]}}function i(e){return!isNaN(e)&&e>=0&&e<=59}function s(e){return!isNaN(e)&&e>=0&&e<=23}var t=r(e.replace(/:|,/i,".")),n=[+t[0],+t[1]];return s(n[0])&&i(n[1])?n:null},DateFormat.createNewFormat=function(dateTime,format,locale){var funcName="format"+DateFormat.formatFunctions.count++;DateFormat.formatFunctions[format]=funcName;var code="DateTime.prototype."+funcName+" = function(){return ",special=!1,ch="";for(var i=0;i<format.length;++i)ch=format.charAt(i),!special&&ch=="\\"?special=!0:special?(special=!1,code+="'"+DateFormat.escape(ch)+"' + "):code+=DateFormat.getFormatCode(ch,locale);eval(code.substring(0,code.length-3)+";}")},DateFormat.getFormatCode=function(e){var t={d:"DateFormat.leftPad(this.getDate(), 2, '0') + ",D:"locale.shortDayNames[this.getDay()] + ",j:"this.getDate() + ",l:"locale.dayNames[this.getDay()] + ",w:"this.getDay() + ",z:"this.getDayInYear() + ",F:"locale.monthNames[this.getMonth()-1] + ",m:"DateFormat.leftPad(this.getMonth(), 2, '0') + ",M:"locale.monthNames[this.getMonth()-1].substring(0, 3) + ",n:"(this.getMonth()) + ",t:"this.getDaysInMonth() + ",Y:"this.getFullYear() + ",y:"('' + this.getFullYear()).substring(2, 4) + ",a:"(this.getHours() < 12 ? 'am' : 'pm') + ",A:"(this.getHours() < 12 ? 'AM' : 'PM') + ",g:"((this.getHours() %12) ? this.getHours() % 12 : 12) + ",G:"this.getHours() + ",h:"DateFormat.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ",H:"DateFormat.leftPad(this.getHours(), 2, '0') + ",i:"DateFormat.leftPad(this.getMinutes(), 2, '0') + ",s:"DateFormat.leftPad(this.getSeconds(), 2, '0') + ",O:"DateFormat.getGMTOffset(this) + ",Z:"(this.getTimezoneOffset() * -60) + "};return e in t?t[e]:"'"+DateFormat.escape(e)+"' + "},DateFormat}),define("../src/main/locale/FI",["require","../DateTime","../DateFormat"],function(e){var t=e("../DateTime"),n=e("../DateFormat");return{id:"FI",monthNames:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],dayNames:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],shortDayNames:["su","ma","ti","ke","to","pe","la"],yearsLabel:function(e){return e+" "+(e=="1"?"vuosi":"vuotta")},monthsLabel:function(e){return e+" "+(e=="1"?"kuukausi":"kuukautta")},daysLabel:function(e){return e+" "+(e=="1"?"päivä":"päivää")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"tunti":"tuntia")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\lo G:i",firstWeekday:t.MONDAY}}),define("../src/main/locale/EN",["require","../DateTime","../DateFormat"],function(e){var t=e("../DateTime"),n=e("../DateFormat");return{id:"EN",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],yearsLabel:function(e){return e+" "+(e=="1"?"Year":"Years")},monthsLabel:function(e){return e+" "+(e=="1"?"Months":"Months")},daysLabel:function(e){return e+" "+(e=="1"?"Day":"Days")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t);return r+" "+(r=="1"?"Hour":"Hours")},shortDateFormat:"n/j/Y",weekDateFormat:"D n/j/Y",dateTimeFormat:"D n/j/Y G:i",firstWeekday:t.SUNDAY}}),define("../src/main/locale/AU",["require","../DateTime","../DateFormat"],function(e){var t=e("../DateTime"),n=e("../DateFormat");return{id:"AU",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],yearsLabel:function(e){return e+" "+(e=="1"?"Year":"Years")},monthsLabel:function(e){return e+" "+(e=="1"?"Months":"Months")},daysLabel:function(e){return e+" "+(e=="1"?"Day":"Days")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t);return r+" "+(r=="1"?"Hour":"Hours")},shortDateFormat:"j/n/Y",weekDateFormat:"D j/n/Y",dateTimeFormat:"D j/n/Y G:i",firstWeekday:t.SUNDAY}}),define("../src/main/locale/ET",["require","../DateTime","../DateFormat"],function(e){var t=e("../DateTime"),n=e("../DateFormat");return{id:"ET",monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],shortDayNames:["P","E","T","K","N","R","L"],yearsLabel:function(e){return e+" "+(e=="1"?"Aasta":"Aastat")},monthsLabel:function(e){return e+" "+(e=="1"?"Kuu":"Kuud")},daysLabel:function(e){return e+" "+(e=="1"?"Päev":"Päeva")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"Tund":"Tundi")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\l G:i",firstWeekday:t.MONDAY}}),define("../src/main/locale/RU",["require","../DateTime","../DateFormat"],function(e){var t=e("../DateTime"),n=e("../DateFormat");return{id:"RU",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayNames:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDayNames:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],yearsLabel:function(e){return e+" "+(e=="1"?"Год":"Года")},monthsLabel:function(e){return e+" "+(e=="1"?"Месяц":"Месяца")},daysLabel:function(e){return e+" "+(e=="1"?"День":"Дня")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"Минута":"Минуты")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\lo G:i",firstWeekday:t.MONDAY}}),define("../src/main/locale/SV",["require","../DateTime","../DateFormat"],function(e){var t=e("../DateTime"),n=e("../DateFormat");return{id:"SV",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],shortDayNames:["Sö","Må","Ti","On","To","Fr","Lö"],yearsLabel:function(e){return e+" "+(e=="1"?"År":"År")},monthsLabel:function(e){return e+" "+(e=="1"?"Månad":"Månader")},daysLabel:function(e){return e+" "+(e=="1"?"Dag":"Dagar")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"Minut":"Minuter")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\lo G:i",firstWeekday:t.MONDAY}}),define("../src/main/DateLocale",["require","./locale/FI","./locale/EN","./locale/AU","./locale/ET","./locale/RU","./locale/SV"],function(e){var t=e("./locale/FI"),n=e("./locale/EN"),r=e("./locale/AU"),i=e("./locale/ET"),s=e("./locale/RU"),o=e("./locale/SV"),u={FI:t,EN:n,AU:r,ET:i,RU:s,SV:o};return u.fromArgument=function(e){return typeof e=="string"?u[e.toUpperCase()]:e},u}),define("../src/main/DateRange",["require","jquery","./DateTime","./DateFormat"],function(e){function i(e,t){if(!e||!t)throw"two dates must be specified, date1="+e+", date2="+t;this.start=e.compareTo(t)>0?t:e,this.end=e.compareTo(t)>0?e:t,this._days=0,this._hours=0,this._minutes=0,this._valid=!0}var t=e("jquery"),n=e("./DateTime"),r=e("./DateFormat");return i.emptyRange=function(){function e(){this.start=null,this.end=null,this.days=function(){return 0},this.shiftDays=t.noop,this.hasDate=function(){return!1},this.clone=function(){return i.emptyRange()},this.expandDaysTo=function(){return this},this.hasEndsOnWeekend=function(){return!1},this.isPermittedRange=function(){return!0}}return new e},i.rangeWithMinimumSize=function(e,t,n,r){function u(){return t&&e.days()<=t}function a(e){return-((e+1)%7+1)}if(u()){var s=e.expandDaysTo(t);if(n&&s.hasEndsOnWeekend()){var o=s.shiftDays(a(s.end.getDay())).shiftInside(r);while(!o.isPermittedRange(t,n,r)||o.end.compareTo(r.end)>0){if(!o.isPermittedRange(t,!1,r))return i.emptyRange();o=o.shiftDays(1)}s=o}return s.isPermittedRange(t,!1,r)?s:i.emptyRange()}return e},i.prototype._setDaysHoursAndMinutes=function(){if(this._hasTimes){var e=parseInt(this.end.getTime()-this.start.getTime(),10);this._days=parseInt(e/n.DAY,10),e-=this._days*n.DAY,this._hours=parseInt(e/n.HOUR,10),e-=this._hours*n.HOUR,this._minutes=parseInt(e/n.MINUTE,10)}},i.prototype._dateWithTime=function(e,t){return e.withTime(t[0],t[1])},i.prototype.hours=function(){return this._hours},i.prototype.minutes=function(){return this._minutes},i.prototype.hasDate=function(e){return e.isBetweenDates(this.start,this.end)},i.prototype.isValid=function(){return this._valid&&this.end.getTime()-this.start.getTime()>=0},i.prototype.days=function(){return this._hasTimes?this._days:Math.round(this.start.distanceInDays(this.end)+1)},i.prototype.shiftDays=function(e){return new i(this.start.plusDays(e),this.end.plusDays(e))},i.prototype.expandTo=function(e){var t=this.start.clone(),n=this.end.clone();return e.compareTo(this.start)<0?t=e:e.compareTo(this.end)>0&&(n=e),new i(t,n)},i.prototype.expandDaysTo=function(e){return new i(this.start,this.start.plusDays(e-1))},i.prototype.hasValidSize=function(e){return e<0||this.days()>=e},i.prototype.hasValidSizeAndEndsOnWorkWeek=function(e){return this.hasValidSize(e)&&this.hasEndsOnWeekend()},i.prototype.and=function(e){var t=this.start.compareTo(e.start)>0?this.start:e.start,n=this.end.compareTo(e.end)>0?e.end:this.end;return t.compareTo(n)<0?new i(t,n):i.emptyRange()},i.prototype.isInside=function(e){return this.start.compareTo(e.start)>=0&&this.end.compareTo(e.end)<=0},i.prototype.hasEndsOnWeekend=function(){return this.start.isWeekend()||this.end.isWeekend()},i.prototype.withTimes=function(e,t){var n=r.parseTime(e),i=r.parseTime(t),s=this.clone();return n&&i?(s._valid=!0,s._hasTimes=!0,s.start=this._dateWithTime(this.start,n),s.end=this._dateWithTime(this.end,i),s._setDaysHoursAndMinutes()):s._valid=!1,s},i.prototype.clone=function(){return new i(this.start,this.end)},i.prototype.toString=function(){return["DateRange:",this.start.toString(),"-",this.end.toString(),this._days,"days",this._hours,"hours",this._minutes,"minutes",this._valid?"valid":"invalid"].join(" ")},i.prototype.isPermittedRange=function(e,t,n){return this.hasValidSize(e)&&(!t||!this.hasEndsOnWeekend())&&this.isInside(n)},i.prototype.shiftInside=function(e){if(this.days()>e.days())return i.emptyRange();var t=this.start.distanceInDays(e.start),n=this.end.distanceInDays(e.end);return t>0?this.shiftDays(t):n<0?this.shiftDays(n):this},i}),define("../src/main/CalendarBody",["require","jquery","./DateFormat","./DateTime"],function(e){var t=e("jquery"),n=e("./DateFormat"),r=e("./DateTime");return function(e,i,s,o,u,a){function m(){var e=t('<tr><th class="month"></th><th class="week">&nbsp;</th>');return t(s.dayNames).each(function(n){var r=t("<th>").append(s.shortDayNames[(n+s.firstWeekday)%7]).addClass("weekDay");e.append(r)}),t("<thead>").append(e)}function g(e){var t=n.format(r.now(),"Ymd",s);t in e&&T(e[t]).addClass("today").wrapInner("<div>")}function y(){function o(e,t,n){e.push("<tr>"),e.push(a(t,n)),e.push(c(t));for(var r=0;r<7;r++){var i=t.plusDays(r);e.push(u(i))}e.push("</tr>")}function u(e){var t='<td class="'+b(e)+'" date-cell-index="'+l.length+'">'+e.getDate()+"</td>";return f[n.format(e,"Ymd",s)]=l.length,l.push(e),t}function a(e,t){var n='<th class="month '+w(e);return t||e.getDate()<=7?(n+=' monthName">',n+=s.monthNames[e.getMonth()-1]):(n+='">',e.getDate()<=14&&e.getMonth()==1&&(n+=e.getFullYear())),n+"</th>"}function c(e){return'<th class="week '+w(e)+'">'+e.getWeekInYear("ISO")+"</th>"}var e=i.start.getFirstDateOfWeek(s),t=!0,r=[];while(e.compareTo(i.end)<=0)o(r,e.clone(),t),t=!1,e=e.plusDays(7);return"<tbody>"+r.join("")+"</tbody>"}function b(e){return t.trim(["date",w(e),E(e),S(e),x(e)].sort().join(" "))}function w(e){return e.isOddMonth()?"odd":""}function E(e){var t=u&&e.isWeekend(),n=a[e.getOnlyDate().date],r=!i.hasDate(e);return r||t||n?"disabled":""}function S(e){return e.isToday()?"today":""}function x(e){return e.getDay()==0?"holiday":""}function T(e){return t(d[e])}var f={},l=[],c=t('<table class="calendarHeader">').append(m()),h=t('<table class="calendarBody">').append(y()),p=t('<div class="calendarScrollContent">').append(h);e.append(c),o?(h.addClass("overview"),p.addClass("viewport"),e.append(t('<div class="tinyscrollbar"></div>').append('<div class="scrollbar"> <div class="track"> <div class="thumb"> <div class="end"></div> </div> </div> </div>').append(p))):e.append(p);var d=t("td.date",e).get();g(f);var v=t("th.month",c);return{bodyTable:h,scrollContent:p,dateCells:d,yearTitle:v,dateCellMap:f,dateCellDates:l,dateStyles:b,getDateCell:T}}}),define("../src/main/RangeEvents",["require","jquery","./DateFormat","./DateRange","./DateTime"],function(e){var t=e("jquery"),n=e("./DateFormat"),r=e("./DateRange"),i=e("./DateTime");return function(e,s,o,u,a,f,l,c,h,p,d,v,m,g){function x(){k(),w=b.clone(),L(e,s.bodyTable),B()}function T(){if(t(".rangeLengthLabel",e).isEmpty()){var n=t('<div class="label"><span class="rangeLengthLabel"></span></div>');t(".continuousCalendar",e).append(n)}}function N(e){e.append('<span class="separator"> - </span>').append('<span class="endDateLabel"></span>')}function C(){e.data("calendarRange",b),o(b)}function k(){b=c&&h?new r(c,h):r.emptyRange()}function L(e,n){t("span.rangeLengthLabel",e).text(u.daysLabel(b.days())),n.addClass(a.selectWeek?"weekRange":"freeRange"),n.mousedown(A).mouseover(_).mouseup(P),M(n.get(0))}function A(e){function o(e){return U(e)&&X(e)}function l(e,t){return a.selectWeek?o(e)||z(e):z(e)||W(e)||t}function c(e,n){if(a.selectWeek&&o(e)||z(e)){S=E.NONE;var i=f(t(e).parent().children(".date").get(0));return h(i)}if(W(e)){S=E.NONE;var s=f(t(e).siblings(".date").get(0));return new r(s.firstDateOfMonth(),s.lastDateOfMonth(),u)}return n&&b.days()>0&&o(e)?(S=E.NONE,b=b.expandTo(f(e)),b):b}function h(e){var t=e,n=e.plusDays(6);return a.disableWeekends&&(t=e.withWeekday(i.MONDAY),n=e.withWeekday(i.FRIDAY)),(new r(t,n,u)).and(p)}var n=e.target,s=e.shiftKey;if(l(n,s)){b=c(n,s);return}S=E.CREATE_OR_RESIZE,y=f(n);if(y.equalsOnlyDate(b.end)){y=b.start;return}if(y.equalsOnlyDate(b.start)){y=b.end;return}if(b.hasDate(y)){S=E.MOVE;return}o(n)&&O()}function O(){b=new r(y,y,u)}function M(e){t(e).css("MozUserSelect","none"),t(e).bind("selectstart",function(){return!1}),t(e).mousedown(function(){return!1})}function _(e){if(S==E.NONE)return;var t=f(e.target),n={move:function(){var e=y.distanceInDays(t),n=b.shiftDays(e).and(p);D(n)&&(y=t,b=n)},create:function(){var n=new r(y,t,u);X(e.target)&&D(n)&&(b=n)}};n[S](),B()}function D(e){return e.isPermittedRange(a.minimumRange,a.disableWeekends,p)}function P(){S=E.NONE,H()&&(b=r.emptyRange()),B(),q()}function H(){for(var e=0;e<g.length;e++)if(b.hasDate(new i(g[e])))return!0;return!1}function B(){b=r.rangeWithMinimumSize(b,a.minimumRange,a.disableWeekends,p),j(b),t("span.rangeLengthLabel",e).text(u.daysLabel(b.days()))}function j(n){t("td.selected",e).removeClass("selected").removeClass("rangeStart").removeClass("rangeEnd").removeClass("invalidSelection"),F(n),w=n.clone()}function F(r){function f(e){return s.dateCellMap[n.format(e,"Ymd",u)]}if(r.days()==0)return;var i=f(r.start),o=f(r.end);for(var a=i;a<=o;a++)s.getDateCell(a).get(0).className=I(s.dateCellDates[a],r.start,r.end).join(" ");H()&&t("td.selected",e).addClass("invalidSelection")}function I(e,t,n){var r=[s.dateStyles(e)];return e.equalsOnlyDate(n)?r.concat("selected rangeEnd"):e.equalsOnlyDate(t)?r.concat("selected rangeStart"):e.isBetweenDates(t,n)?r.concat("selected"):r}function q(){H()&&(b=r.emptyRange(),setTimeout(function(){j(b)},200));var n=m(b.start),i=m(b.end);e.data("calendarRange",b),d(n),v(i),R(),a.selectWeek&&l.close(t("td.selected",e).first()),o(b)}function R(){b||k();if(b.start&&b.end){var r=u.weekDateFormat;t("span.startDateLabel",e).text(n.format(b.start,r,u)),t("span.endDateLabel",e).text(n.format(b.end,r,u)),t("span.separator",e).show()}else t("span.separator",e).hide()}function U(e){return t(e).closest("[date-cell-index]").hasClass("date")}function z(e){return t(e).hasClass("week")}function W(e){return t(e).hasClass("month")}function X(e){return!t(e).hasClass("disabled")}var y=null,b,w,E={CREATE_OR_RESIZE:"create",MOVE:"move",NONE:"none"},S=E.NONE;return{showInitialSelection:R,initEvents:x,addRangeLengthLabel:T,addEndDateLabel:N,performTrigger:C}}}),define("../src/main/SingleDateEvents",["require","jquery","./DateFormat"],function(e){var t=e("jquery"),n=e("./DateFormat");return function(e,r,i,s,o,u,a,f){function l(){f&&d(n.format(f,s.weekDateFormat,s))}function c(){p();var e=f&&n.format(f,"Ymd",s);e in r.dateCellMap&&r.getDateCell(r.dateCellMap[e]).addClass("selected")}function h(){e.data("calendarRange",f),i(f)}function p(){t(".date",e).bind("click",function(){var r=t(this);if(r.hasClass("disabled"))return;t("td.selected",e).removeClass("selected"),r.addClass("selected");var f=u(r.get(0));o.startField.val(n.shortDateFormat(f,s)),d(n.format(f,s.weekDateFormat,s)),a.close(this),i(f)})}function d(n){t("span.startDateLabel",e).text(n)}return{showInitialSelection:l,initEvents:c,addRangeLengthLabel:t.noop,addEndDateLabel:t.noop,performTrigger:h}}}),function(e){function t(t,n){function m(){return r.update(),y(),r}function g(){f.obj.css(c,p/u.ratio),o.obj.css(c,-p),v.start=f.obj.offset()[c];var e=h.toLowerCase();u.obj.css(e,a[n.axis]),a.obj.css(e,a[n.axis]),f.obj.css(e,f[n.axis])}function y(){f.obj.bind("mousedown",b),f.obj[0].ontouchstart=function(e){return e.preventDefault(),f.obj.unbind("mousedown"),b(e.touches[0]),!1},a.obj.bind("mouseup",S),n.scroll&&this.addEventListener?(i[0].addEventListener("DOMMouseScroll",w,!1),i[0].addEventListener("mousewheel",w,!1)):n.scroll&&(i[0].onmousewheel=w)}function b(t){v.start=l?t.pageX:t.pageY;var n=parseInt(f.obj.css(c),10);return d.start=n=="auto"?0:n,e(document).bind("mousemove",S),document.ontouchmove=function(t){e(document).unbind("mousemove"),S(t.touches[0])},e(document).bind("mouseup",E),f.obj.bind("mouseup",E),f.obj[0].ontouchend=document.ontouchend=function(t){e(document).unbind("mouseup"),f.obj.unbind("mouseup"),E(t.touches[0])},!1}function w(t){if(!(o.ratio>=1)){i.trigger("scroll"),t=t||window.event;var r=t.wheelDelta?t.wheelDelta/120:-t.detail/3;p-=r*n.wheel,p=Math.min(o[n.axis]-s[n.axis],Math.max(0,p)),f.obj.css(c,p/u.ratio),o.obj.css(c,-p),t=e.event.fix(t),t.preventDefault()}}function E(){return e(document).unbind("mousemove",S),e(document).unbind("mouseup",E),f.obj.unbind("mouseup",E),document.ontouchmove=f.obj[0].ontouchend=document.ontouchend=null,!1}function S(e){return i.trigger("scroll"),o.ratio>=1||(d.now=Math.min(a[n.axis]-f[n.axis],Math.max(0,d.start+((l?e.pageX:e.pageY)-v.start))),p=d.now*u.ratio,o.obj.css(c,-p),f.obj.css(c,d.now)),!1}var r=this,i=t,s={obj:e(".viewport",t)},o={obj:e(".overview",t)},u={obj:e(".scrollbar",t)},a={obj:e(".track",u.obj)},f={obj:e(".thumb",u.obj)},l=n.axis=="x",c=l?"left":"top",h=l?"Width":"Height",p,d={start:0,now:0},v={};return this.update=function(e){var t=n.axis;s[t]=s.obj[0]["offset"+h],o[t]=o.obj[0]["scroll"+h];var r=o[t],i=s[t];o.ratio=i/r,u.obj.toggleClass("disable",o.ratio>=1),a[t]=n.size=="auto"?i:n.size;var l=a[t];f[t]=Math.min(l,Math.max(0,n.sizethumb=="auto"?l*o.ratio:n.sizethumb));var c=f[t];u.ratio=n.sizethumb=="auto"?r/l:(r-i)/(l-c),p=e=="relative"&&o.ratio<=1?Math.min(r-i,Math.max(0,p)):0,p=e=="bottom"&&o.ratio<=1?r-i:isNaN(parseInt(e,10))?p:parseInt(e,10),g()},m()}e.tiny=e.tiny||{},e.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:!0,size:"auto",sizethumb:"auto"}},e.fn.tinyscrollbar=function(n){var n=e.extend({},e.tiny.scrollbar.options,n);return this.each(function(){e(this).data("tsb",new t(e(this),n))}),this},e.fn.tinyscrollbar_update=function(t){return e(this).data("tsb").update(t)}}(jQuery),define("jquery.tinyscrollbar",function(){}),define("../src/main/jquery.continuousCalendar",["require","jquery","./DateFormat","./DateLocale","./DateRange","./DateTime","./CalendarBody","./RangeEvents","./SingleDateEvents","jquery.tinyscrollbar"],function(e){var t=e("jquery"),n=e("./DateFormat"),r=e("./DateLocale"),i=e("./DateRange"),s=e("./DateTime"),o=e("./CalendarBody"),u=e("./RangeEvents"),a=e("./SingleDateEvents");e("jquery.tinyscrollbar"),t.continuousCalendar={version:typeof VERSION!="undefined"?VERSION:"nightly",released:typeof RELEASED!="undefined"?RELEASED:"nightly"},t.fn.continuousCalendar=function(e){function f(e){function k(){N=l.disabledDates?l.disabledDates.split(" "):[],C=l.disabledDates?_(N):{},T=O(l),w=P(l.isPopup),E=D(K()),l.fadeOutDuration=+l.fadeOutDuration,y=H(),y.click(function(e){e.stopPropagation()}),t(".startDateLabel",m).isEmpty()&&B(m,w,E),w.initUI(),E.showInitialSelection(),E.performTrigger()}function L(){l.customScroll&&(S=t(".tinyscrollbar",m).tinyscrollbar())}function A(){if(x.scrollContent)return;x=t.extend(x,o(y,T,c,l.customScroll,l.disableWeekends,C)),M(),w.initState(),E.addRangeLengthLabel(),E.initEvents(),j()}function O(e){var t=(h||s.now()).getFirstDateOfWeek(c),r=e.firstDate,o=e.lastDate,u=r?n.parse(r,c):t.minusDays(e.weeksBefore*7),a=o?n.parse(o,c):t.plusDays(e.weeksAfter*7+6);return new i(u,a)}function M(){if(l.customScroll)S||L(),S.bind("scroll",F);else{var e=!1;x.scrollContent.scroll(function(){e=!0}),setInterval(function(){e&&(e=!1,F())},250)}}function _(e){var r={};return t.each(e,function(e,t){r[n.parse(t).date]=!0}),r}function D(e){var t=[m,x,z,c,l,W,w,h],n=[p,T,X,V,J,N];return e?u.apply(null,t.concat(n)):a.apply(null,t)}function P(e){var n={initUI:function(){y.addClass("popup").hide();var e=t('<a href="#" class="calendarIcon">'+d.getDate()+"</a>").click(R);m.prepend("<div></div>"),m.prepend(e)},initState:t.noop,getContainer:function(e){return t('<div class="popUpContainer">').append(e)},close:function(e){R.call(e)},addDateLabelBehaviour:function(e){e.addClass("clickable"),e.click(R)}},r={initUI:A,initState:I,getContainer:function(e){return e},close:t.noop,addDateLabelBehaviour:t.noop};return e?n:r}function H(){var e=t(".continuousCalendar",m);if(e.exists())return e;var n=t('<div class="continuousCalendar">');return m.append(w.getContainer(n)),n}function B(e,n,r){var i=t('<div class="label"><span class="startDateLabel"></span></div>');r.addEndDateLabel(i),e.prepend(i),n.addDateLabelBehaviour(i.children())}function j(){var e=t(".selected",x.scrollContent).get(0)||t(".today",x.scrollContent).get(0);if(e){var n=e.offsetTop-(x.scrollContent.height()-e.offsetHeight)/2;if(l.customScroll){var r=x.bodyTable.height(),i=r-x.scrollContent.height(),s=n>i?i:n;S.tinyscrollbar_update(s>0?s:0)}else x.scrollContent.scrollTop(n)}}function F(){var e=x.scrollContent.get(0),n=t("table",e).get(0),r=l.customScroll?-t(".overview",y).position().top:e.scrollTop,i=parseInt(r/g,10),s=W(n.rows[i].cells[2]);x.yearTitle.text(s.getFullYear())}function I(){L(),q(),F()}function q(){g=parseInt(x.bodyTable.height()/t("tr",x.bodyTable).size(),10)}function R(){return A(),y.is(":visible")?(y.fadeOut(l.fadeOutDuration),t(document).unbind("click.continuousCalendar")):(y.show(),b&&(L(),q(),F(),b=!1),j(),t(document).bind("click.continuousCalendar",R)),!1}function U(e){return e.length>0&&e.val().length>0?n.parse(e.val()):null}function z(e){l.callback.call(m,e),m.trigger("calendarChange",e)}function W(e){return x.dateCellDates[t(e).closest("[date-cell-index]").attr("date-cell-index")]}function X(e){l.startField.val(e)}function V(e){l.endField.val(e)}function J(e){return e?n.shortDateFormat(e,c):""}function K(){return l.endField&&l.endField.length>0}var f={weeksBefore:26,weeksAfter:26,firstDate:null,lastDate:null,startField:t("input.startDate",this),endField:t("input.endDate",this),isPopup:!1,selectToday:!1,locale:r.EN,disableWeekends:!1,disabledDates:null,minimumRange:-1,selectWeek:!1,fadeOutDuration:0,callback:t.noop,customScroll:!1,theme:""},l=t.extend({},f,e),c=r.fromArgument(l.locale),h=U(l.startField),p=U(l.endField),d=s.now();if(l.selectToday){var v=J(d);h=d,p=d,X(v),V(v)}var m=this,g,y,b=!0,w,E,S,x={},T,N,C;t(this).addClass("continuousCalendarContainer").addClass(l.theme).append("&nbsp;"),k()}return this.each(function(){f.call(t(this),e)})},t.fn.calendarRange=function(){return t(this).data("calendarRange")},t.fn.exists=function(){return this.length>0},t.fn.isEmpty=function(){return this.length==0}}),requirejs.config({paths:{jquery:"../src/lib/jquery-1.8.0.min","jquery.tinyscrollbar":"../src/main/jquery.tinyscrollbar-1.66/jquery.tinyscrollbar"}}),define("playground",["require","../src/main/jquery.continuousCalendar","jquery","../src/main/DateFormat","../src/main/DateLocale","../src/main/DateTime"],function(e){function o(e){return'<label class="row"><input type="radio" name="locale" value="'+e+'" id="'+e+'" /><span class="label">DateLocale.'+e+"</span></label>"}function f(){function l(e){var n=t("#"+e);return n.attr("type")=="checkbox"?n.filter(":checked").length>0:n.val()}var e="container"+counter,n=t("<div>").addClass(e),i=t('<div class="containerWrapper">').append(n);l("isRange")&&n.append('<input type="hidden" class="startDate" value="'+t("#selectionStart").val()+'" /><input type="hidden" class="endDate" value="'+t("#selectionEnd").val()+'"/>'),t("body").append(i);var s=["selectToday","disableWeekends","isPopup","weeksBefore","weeksAfter","firstDate","lastDate","minimumRange","selectWeek","disabledDates","fadeOutDuration","customScroll"],o={theme:t("[name=theme]:checked").val(),locale:r[t("[name=locale]:checked").val()]};for(var u=0;u<s.length;u++){var a=l(s[u]);a&&(o[s[u]]=a)}var f=JSON.stringify(o);return i.prepend('<textarea  class="example_params">$(selector).continuousCalendar('+f+")</textarea>"),n.continuousCalendar(o),!1}e("../src/main/jquery.continuousCalendar");var t=e("jquery"),n=e("../src/main/DateFormat"),r=e("../src/main/DateLocale"),i=e("../src/main/DateTime");jQuery=t,counter=0,t("#create").click(f);var s=t.grep(t.map(r,function(e,t){return t}),function(e){return e.length==2});t(".locales").append(t.map(s,o).join("\n")).find("input:first").click();var u=t([i.now(),i.now(),i.now()]).map(function(e,t){return n.format(t.plusDays(e+3),"n/j/Y")}).toArray().join(" ");t("#disabledDates").val(u);var a=t([i.now().plusDays(10),i.now().plusDays(18)]).map(function(e,t){return n.format(t,"n/j/Y")}).toArray();t("#selectionStart").val(a[0]),t("#selectionEnd").val(a[1]),f()}),require(["playground"]);