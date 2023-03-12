"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6554],{41200:(e,t,n)=>{n.d(t,{T:()=>u});var a=n(21586),r=n(44979),l=n(96723),i=n(58950),o=n(18805);const s="profile-editImage-imageContainer",c="profile-editImage-editImageButtonContainer";var d=n(4637);const u=function({onClick:e,name:t,images:n,canEdit:u,placeholderType:m,shape:h=o.Kc.SQUARE,dragUri:g=""}){const[p,C]=(0,r.RH)(n),b=(0,l.VO)(p,C)===l.KO.loaded,x=(0,a.O1)([g],t);return(0,d.jsxs)("div",{className:s,"data-testid":`${m}-image`,draggable:!!g,onDragStart:x,children:[(0,d.jsx)(o.Oe,{loading:"eager",name:t,images:n,placeholderType:m,shape:h}),u&&(0,d.jsx)("div",{className:c,children:(0,d.jsx)(i.F,{overlay:b,onClick:e,rounded:h===o.Kc.CIRCLE})})]})}},81583:(e,t,n)=>{n.d(t,{w:()=>C});var a=n(59496),r=n(4417),l=n.n(r),i=n(53083),o=n(33186);const s=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var c=n(3777);const d="QD13ZfPiO5otS0PU89wG",u="playlist-playlist-playlistDescription",m="ZbLneLRe2x_OBOYZMX3M",h="rjdQaIDkSgcGmxkdI2vU",g="umouqjSkMUbvF4I_Xz6r";var p=n(4637);const C=a.memo((function({html:e,onTimeStampClick:t,enableTimestamps:n=!1,semanticColor:r="textSubdued"}){const i=(0,a.useMemo)((()=>{const a=n?e.split(s).map((e=>e.match(s)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let i;try{i=l()(a,{transform:b(t,r),dangerouslySetChildren:[]})}catch{i=e}return i}),[n,e,t,r]);return(0,p.jsx)("div",{className:u,children:i})}));function b(e,t){let n=0;return{p:e=>(0,p.jsx)(i.D,{as:"p",variant:"ballad",semanticColor:t,className:g,children:e.children}),a:t=>t.href?.startsWith("#t=")?(0,p.jsx)(o.E,{onClick:e,children:t.children}):t.href?(0,p.jsx)(c.Link,{to:t.href,children:t.children}):(0,p.jsx)(p.Fragment,{children:t.children}),ul:e=>(0,p.jsx)("ul",{className:m,children:e.children}),ol:e=>(0,p.jsx)("ol",{className:m,children:e.children}),li:e=>(0,p.jsx)(i.D,{as:"li",variant:"ballad",semanticColor:t,className:h,children:e.children}),br:()=>(0,p.jsx)("br",{}),h1:e=>(0,p.jsx)(i.D,{as:"h1",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h2:e=>(0,p.jsx)(i.D,{as:"h2",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h3:e=>(0,p.jsx)(i.D,{as:"h3",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h4:e=>(0,p.jsx)(i.D,{as:"h4",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h5:e=>(0,p.jsx)(i.D,{as:"h5",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h6:e=>(0,p.jsx)(i.D,{as:"h6",variant:"balladBold",semanticColor:t,className:d,children:e.children}),time:t=>(0,p.jsx)(o.E,{onClick:e,children:t.children}),_:(e,t,r)=>{const l=void 0===t?e:r;return(0,p.jsx)(a.Fragment,{children:l},"fragment"+n++)}}}},68547:(e,t,n)=>{n.d(t,{l:()=>C});var a=n(59496),r=n(80326),l=n(83590),i=n(76703),o=n(8982);const s={"custom-order":i.HI,title:{column:o.Q.TITLE,order:o.k.ASC},artist:{column:o.Q.TITLE,order:o.k.SECONDARY_ASC},"added-by":{column:o.Q.ADDED_BY,order:o.k.ASC},"added-at":{column:o.Q.ADDED_AT,order:o.k.ASC},duration:{column:o.Q.DURATION,order:o.k.ASC},album:{column:o.Q.ALBUM,order:o.k.ASC},"album-or-podcast":{column:o.Q.ALBUM_OR_PODCAST,order:o.k.ASC},"album-or-show":{column:o.Q.ALBUM_OR_SHOW,order:o.k.ASC}},c={title:o.Q.TITLE,artist:o.Q.TITLE,"added-by":o.Q.ADDED_BY,"added-at":o.Q.ADDED_AT,duration:o.Q.DURATION,album:o.Q.ALBUM,"album-or-podcast":o.Q.ALBUM_OR_PODCAST,"album-or-show":o.Q.ALBUM_OR_SHOW},d={[o.k.NONE]:o.k.NONE,[o.k.ASC]:o.k.DESC,[o.k.DESC]:o.k.ASC,[o.k.SECONDARY_ASC]:o.k.SECONDARY_DESC,[o.k.SECONDARY_DESC]:o.k.SECONDARY_ASC},u={[o.Q.INDEX]:{key:"custom-order",get value(){return r.ag.get("sort.custom-order")}},[o.Q.TITLE]:{key:"title",get value(){return r.ag.get("sort.title")}},[o.Q.ARTIST]:{key:"artist",get value(){return r.ag.get("sort.artist")}},[o.Q.ADDED_BY]:{key:"added-by",get value(){return r.ag.get("sort.added-by")}},[o.Q.ADDED_AT]:{key:"added-at",get value(){return r.ag.get("sort.date-added")}},[o.Q.DURATION]:{key:"duration",get value(){return r.ag.get("sort.duration")}},[o.Q.EVENT_DATE]:null,[o.Q.ALBUM]:{key:"album",get value(){return r.ag.get("sort.album")}},[o.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return r.ag.get("sort.album-or-podcast")}},[o.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return r.ag.get("sort.album-or-show")}},[o.Q.PLAYS]:null,[o.Q.RELEASE_DATE]:null,[o.Q.ADD]:null,[o.Q.ACTIONS]:null};var m=n(51841),h=n(15528),g=n(4637);function p(e){return!!e}const C=({columns:e,disabled:t,onSort:n})=>{const C=[...e];C.splice(2,0,m.QD.ARTIST);const{sortState:b,setSortState:x}=(0,a.useContext)(i.Gb),k=function(e){return null===e.column?u[m.QD.INDEX]:(0,h.cB)(e.column,e.order)?u[m.QD.ARTIST]:u[e.column]}(b),y=(0,a.useCallback)((e=>{n?.(),x(((e,t,n)=>e?t!==c[e]||"artist"===e&&[o.k.ASC,o.k.DESC].includes(n)||"title"===e&&[o.k.SECONDARY_ASC,o.k.SECONDARY_DESC].includes(n)?s[e]:{column:c[e],order:d[n]}:i.HI)(e,b.column,b.order))}),[n,x,b.column,b.order]),S=(0,a.useCallback)((()=>null!==b.column),[b.column]),v=C.map((e=>u[e])).filter(p);return(0,g.jsx)(l.A,{options:v,onSelect:y,selected:k,isSelectionChanged:S,sortOrder:b.order,heading:r.ag.get("drop_down.sort_by"),disabled:t})}},85628:(e,t,n)=>{n.d(t,{v:()=>b});var a=n(84875),r=n.n(a),l=n(55796),i=n(26289),o=n(11209),s=n(80326),c=n(71544),d=n(13034),u=n(95895),m=n(60271);const h="I3oc8sxg8Duq4kYUGnMo",g="LEZf9K5hG4hfCKfgr5Xo";var p=n(4637);const C=e=>(0,p.jsx)(l.e,{semanticColor:"textPositive",...e}),b=({uri:e,...t})=>{const{isEnhanced:n,toggleIsEnhanced:a}=(0,m.U)(e),{spec:l,logger:b}=(0,d.fU)(o.createDesktopEnhanceButtonEventFactory,{data:{uri:e}}),x=(0,p.jsx)(c._,{label:n?s.ag.get("web-player.enhance.button_aria_label_enhanced"):s.ag.get("web-player.enhance.button_aria_label_not_enhanced"),children:(0,p.jsx)(i.P,{buttonSize:"sm",className:r()(h,{[g]:n}),...t,iconLeading:n?C:void 0,onClick:()=>{b.logInteraction(n?l.hitUnenhanceContext({contextToBeUnenhanced:e}):l.hitEnhanceContext({contextToBeEnhanced:e})),a()},children:n?s.ag.get("web-player.enhance.button_text_enhanced"):s.ag.get("web-player.enhance.button_text_not_enhanced")})});return n?x:(0,p.jsx)(u.T,{id:"enhance-button",bodyText:s.ag.get("web-player.enhance.onboarding.enhance-playlist"),children:x})}},95895:(e,t,n)=>{n.d(t,{T:()=>g});var a=n(59496),r=n(87995),l=n(22096),i=n(53083),o=n(68789),s=n(6923),c=n(8566),d=n(52336);const u="iW5kFTiudWn9ItsTvZmz",m="OfNgl_iK7pi63fAi8USM";var h=n(4637);const g=function({id:e,title:t,bodyText:n,buttonText:g,shouldScrollIntoView:p,children:C}){const[b,x]=(0,d.z)(`onboarding-dismissed:${e}`,!1),{scrollNodeRef:k}=(0,a.useContext)(c.VX),[y,S]=(0,a.useState)(null),[v,D]=(0,a.useState)(null),E=(0,a.useRef)(!1);(0,a.useEffect)((()=>{p&&v&&!E.current&&(E.current=!0,v.scrollIntoView({behavior:"smooth",block:"center"}))}),[p,v]);const T=(0,a.useCallback)((()=>x(!0)),[x]);(0,a.useEffect)((()=>{if(b)return()=>{};const e=e=>{"Escape"===e.key&&T()},t=e=>{e.target instanceof Node&&!v?.contains(e.target)&&T()};return window.addEventListener("keydown",e,!0),window.addEventListener("click",t,!0),()=>{window.removeEventListener("keydown",e,!0),window.removeEventListener("click",t,!0)}}),[b,T,v]);const w=k.current?.getBoundingClientRect(),_=y?.getBoundingClientRect();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{ref:S,children:C}),!b&&_&&(0,r.createPortal)((0,h.jsx)("div",{className:u,style:{top:(_?.top??0)-((w?.top??0)-(k.current?.scrollTop??0)),left:(_?.left??0)-((w?.left??0)-(k.current?.scrollLeft??0)),width:_?.width,height:_?.height},ref:D,children:(0,h.jsxs)(l.J,{popoverTitle:t,arrow:l.J.bottom,colorSet:"announcement",className:m,children:[(0,h.jsx)(i.D,{as:"p",paddingBottom:g&&o.g4V,children:n}),g&&(0,h.jsx)(s.D,{buttonSize:"sm",colorSet:"invertedLight",onClick:T,children:g})]})}),k.current||document.body)]})}},77671:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(85628)},54564:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(92107)},30229:(e,t,n)=>{n.d(t,{s:()=>D});var a=n(59496),r=n(33366),l=n(80326),i=n(33639),o=n(41200),s=n(18805),c=n(53965),d=n(99567),u=n(81583),m=n(93824),h=n(79357),g=n(55528),p=n(85388),C=n(35407),b=n(46985);function x(e){return e.user||null}function k(e){return!!e}function y(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}var S=n(60640),v=n(4637);const D=function({metadata:e,isPlaying:t,isPublished:n,togglePlay:D,backgroundColor:E,spec:T,specLikedSongs:w}){const{uri:_,name:A,description:f="",images:j,totalLength:N,totalLikes:I,duration:L,owner:O,isOwnedBySelf:R=!1,isCollaborative:B=!1,formatListData:Q,madeFor:U=null,collaborators:P}=e,M=Q?.attributes||{},F=M.header_image_url_desktop||M.image_url||null,X=null!==F?[{url:F,width:null,height:null}]:[],Y=(0,r.W6)(p.bM),K=(0,S.$)(),W=(0,a.useMemo)((()=>function(e,t,n=[],a){return e?[y(e,!0)]:n.length>1&&a?n.map(x).filter(k).map((e=>y(e))):[y(t)]}(U,O,P?.items,Y)),[U,O,P?.items,Y]),G=(0,a.useContext)(g.zy),z=(0,a.useContext)(b.S7),Z=(0,a.useCallback)((()=>{if(T){const e=T.ownerFactory().hitUiReveal();K.logInteraction(e)}z({type:"open",uri:_})}),[z,_,T,K]),V=(0,a.useCallback)((e=>{if(T){const e=T?.descriptionTextFactory().hitUiReveal();K.logInteraction(e)}G({type:"open",playlistDetails:{name:A,description:f,image:j[0],uri:_},focusedElement:e})}),[T,G,A,f,j,_,K]),J=(0,a.useCallback)((()=>{if(T){const e=T.coverArtFactory().hitUiReveal();K.logInteraction(e)}G({type:"openWithImagePicker",playlistDetails:{name:A,description:f,image:j[0],uri:_}})}),[G,A,f,j,_,K,T]),H=(0,a.useCallback)(((e,t)=>{if(T){const e=T.ownerFactory().hitUiNavigate({destination:t.creator.uri});K.logInteraction(e)}if(w){const e=w.ownerFactory().hitUiNavigate({destination:t.creator.uri});K.logInteraction(e)}}),[K,T,w]),q=Y&&e.permissions?e.permissions?.isPrivate?l.ag.get("private_playlist"):l.ag.get("public_playlist"):B?l.ag.get("sidebar.collaborative_playlist"):l.ag.get("playlist");return(0,v.jsxs)(s.gF,{backgroundColor:E,backgroundImages:X,children:[(0,v.jsxs)(c.W,{children:[(0,v.jsx)(m.$,{size:"md",onClick:D,isPlaying:t,uri:_}),(0,v.jsx)(d.i,{text:A,dragUri:_,dragLabel:A})]}),F?null:(0,v.jsx)(C._,{menu:(0,v.jsx)(i.X,{uri:_,isPublished:n}),children:(0,v.jsx)("div",{className:h.Z.playlistImageContainer,children:(0,v.jsx)(o.T,{canEdit:R,name:A,images:j,onClick:J,placeholderType:"playlist",dragUri:_})})}),(0,v.jsxs)(s.sP,{children:[(0,v.jsx)(s.dy,{small:!0,uppercase:!0,children:q}),(0,v.jsx)(C._,{menu:(0,v.jsx)(i.X,{uri:_,isPublished:n}),children:(0,v.jsx)(s.xd,{canEdit:R,onClick:()=>{if(T){const e=T.titleFactory().hitUiReveal();K.logInteraction(e)}V(g.w.TITLE)},dragUri:_,dragLabel:A,ariaLabel:l.ag.get("playlist.edit-details.button",A),children:A})}),f&&(0,v.jsx)(s.dy,{bold:!1,gray:!0,canEdit:R,onClick:e=>(e=>{"href"in e.target||V(g.w.DESCRIPTION)})(e),children:(0,v.jsx)(u.w,{html:f,onTimeStampClick:()=>{}})}),(0,v.jsx)(s.QS,{creators:W,onPiledCreatorsClick:Z,onCreatorClick:H,totalTracks:N,totalLikes:I??0,durationMilliseconds:L?.milliseconds,isEstimatedDuration:L?.isEstimate,newEntries:parseInt(M.new_entries_count||"0",10)})]})]})}},79357:(e,t,n)=>{n.d(t,{Z:()=>a});const a={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"playlist-playlist-playlist",searchBoxContainer:"playlist-playlist-searchBoxContainer",recommendedTrackList:"playlist-playlist-recommendedTrackList",playlistContent:"playlist-playlist-playlistContent",playlistDescription:"playlist-playlist-playlistDescription",top:"playlist-playlist-top",header:"playlist-playlist-header",subtitle:"playlist-playlist-subtitle",refreshButton:"plyalist-playlist-refreshButton",playlistImageContainer:"playlist-playlist-playlistImageContainer",playlistInlineCurationSection:"playlist-playlist-playlistInlineCurationSection",playlistInlineCurationTitle:"playlist-playlist-playlistInlineCurationTitle",playlistInlineCurationWrapper:"playlist-playlist-playlistInlineCurationWrapper",playlistInlineCurationCloseButton:"playlist-playlist-playlistInlineCurationCloseButton",playlistInlineCurationBackButton:"playlist-playlist-playlistInlineCurationBackButton",artistResultListTitle:"playlist-playlist-artistResultListTitle",seeMore:"playlist-playlist-seeMore",emptyStateContainer:"playlist-playlist-emptyStateContainer",searchResultListContainer:"playlist-playlist-searchResultListContainer",emptySearchTermContainer:"playlist-playlist-emptySearchTermContainer",icon:"playlist-playlist-icon"}}}]);
//# sourceMappingURL=6554.js.map