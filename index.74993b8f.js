const o=function(){return console.log("Total two:"),n()},n=function(){console.log("Total three:")};console.log("Total one:"),o();const l=function(o){let n=0;for(const l of o)n+=l;return n},c=(l([21,34,123]),l([12,12,1223]),l([15,23,123]),["123@%!@##%%%11","12!@!@#f11","1rf13f4@33r"]),e=function(o,n){for(const l of o)if(l===n)return`find ${n}`;return`not find ${n}`};console.log(e(c,"12cvbcvbf11")),console.log(e(c,"12!@!@#f11")),console.log(e(c,"123@%!@##%%%11"));["123","lkimv2","knjunu"].includes(find),find;const t=function(o,n,l,...c){console.log(`${o} ${n} ${l}`,c)};t("one",1,2,3),t("two",4,5,6),t("three",7,8,9);const s=function(...o){console.log(o);let n=0;for(const l of o)n+=l;return n};console.log(s(1,2,3)),console.log(s(1,2,3)),console.log(s(1,2,3));console.log(function(o,...n){console.log("arr:",o),console.log("args:",n);const l=[];for(const c of o)n.includes(c)&&(l.push(c),console.log(`${c} yes`));return l}([1,2,3],1,2,3,5,6,7,8,9));console.log(20);
//# sourceMappingURL=index.74993b8f.js.map
