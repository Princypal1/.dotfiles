"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9510],{50680:(e,o,s)=>{s.d(o,{F:()=>r,m:()=>c});var t=s(59496),n=s(17657),a=s(48192);const r=420;function c({episodeBase62Id:e,getEpisodeSponsors:o,fetchedEpisodeSponsorsData:c=[],version:i}){const[u,d]=(0,t.useState)(c),l=(0,t.useCallback)((async()=>{try{if(!e)throw new Error("episodeBase62Id is required to fetch episode sponsors");const t=o??(await Promise.resolve().then(s.bind(s,73642))).getEpisodeSponsors;d(await t(e,{version:i}))}catch(e){d([])}}),[e,o,i]),f=(0,n.y1)(l,r);(0,t.useEffect)((function(){c.length||f()}),[f,c.length]);const h=(0,t.useCallback)((()=>({effectCallback:f})),[f]);return(0,a.H)(h),{fetchedEpisodeSponsorsData:u}}},79510:(e,o,s)=>{s.r(o),s.d(o,{ShowSponsorsPreview:()=>i,default:()=>u});var t=s(59496),n=s(92053),a=s(71692),r=s(4637);const c=(0,t.lazy)((()=>Promise.all([s.e(1814),s.e(9402)]).then(s.bind(s,29402))));function i(e){const o=(0,n.TH)(),{showSponsorsData:s}=(0,a.O)({...e,showSponsorsData:o.state?.showSponsorsData});return s?.length?(0,r.jsx)(t.Suspense,{fallback:!0,children:(0,r.jsx)(c,{...e,showSponsorsData:s})}):null}const u=i},71692:(e,o,s)=>{s.d(o,{O:()=>c});var t=s(59496),n=s(17657),a=s(50680),r=s(48192);function c({showId:e,showSponsorsData:o=[],getShowSponsors:c}){const[i,u]=(0,t.useState)(o),d=(0,t.useCallback)((async o=>{const t=(...e)=>{o.mounted&&u(...e)};try{if(!e)throw new Error("showId is required to fetch show sponsors");const o=c??(await Promise.resolve().then(s.bind(s,15840))).getShowSponsors;t(await o(e))}catch(e){t([])}}),[e,c]),l=(0,n.y1)(d,a.F);(0,t.useEffect)((function(){const e={mounted:!0};return o.length||l(e),()=>{e.mounted=!1}}),[l,o.length]);const f=(0,t.useCallback)((()=>{const e={mounted:!0};return{effectCallback(){l(e)},destructor(){e.mounted=!1}}}),[l]);return(0,r.H)(f),{showSponsorsData:i}}},48192:(e,o,s)=>{s.d(o,{H:()=>u});var t=s(59496),n=s(33366),a=s(85388),r=s(75693),c=s(64384),i=s(72104);function u(e){const o=(0,n.W6)(a.oF),s=(0,c.Y)((e=>{const o=e?.item??void 0;return(0,i.k6)(o)&&o.isPodcastAd?o.id??void 0:void 0})),u=(0,r.D)(s);(0,t.useEffect)((function(){const{effectCallback:t,destructor:n}=e();return s!==u&&Boolean(s)&&setTimeout(t,o),n}),[e,s,u,o])}}}]);
//# sourceMappingURL=9510.js.map