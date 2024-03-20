"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[902],{34054:(e,t,l)=>{l.d(t,{Z:()=>i,q:()=>a});const i={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MARKDOWN:"MARKDOWN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL",COLLAPSIBLE:"COLLAPSIBLE",EVENTS_TAB:"EVENTS_TAB",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",COW_EVENT_FORM:"COW_EVENT_FORM"},a={DESIGN:"DESIGN",CONTENT:"CONTENT",ADVANCED:"ADVANCED"}},18769:(e,t,l)=>{l.d(t,{Z:()=>r});var i=l(34054);const a=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((e=>({field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:i.Z.CHECKBOX,defaultValue:!1}))),r={fields:[{label:"Content Container Settings",type:i.Z.COLLAPSIBLE,category:i.q.DESIGN,itemSchema:{fields:[{field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:i.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:i.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:i.Z.CHECKBOX,defaultValue:!1},{field:"containerFullWidth",label:"Full width container",required:!1,type:i.Z.TOGGLE_SWITCH,defaultValue:!1},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:i.Z.BACKGROUND_COLOR},{field:"containerBackgroundTransparent",label:"Transparent background",fieldLabel:"Check here to make grid container transparent",required:!1,type:i.Z.CHECKBOX,defaultValue:!0}]}},{label:"Block Container Settings",type:i.Z.COLLAPSIBLE,category:i.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",type:i.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"marginBottom",label:"Add padding bottom",required:!1,type:i.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"textColor",label:"Text color",required:!1,type:i.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:i.Z.BACKGROUND_COLOR},{field:"backgroundImageLarge",label:"Background image large",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageMedium",label:"Background image medium",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageSmall",label:"Background image small",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:i.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",required:!1,type:i.Z.ENUM_CUSTOM,options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}]},{field:"autoplayVideo",label:"Background video",required:!1,type:i.Z.OBJECT,itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:i.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:i.Z.TEXT_LINE}]}},{field:"height",label:"Block height",required:!1,type:i.Z.TABBED_FIELDS,itemSchema:{fields:[{field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:i.Z.TEXT_LINE},{field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:i.Z.TEXT_LINE},{field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:i.Z.TEXT_LINE}]}},{field:"alignContainer",label:"Align container (height must be set)",required:!1,type:i.Z.ENUM_CUSTOM,options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}]},{field:"anchorName",label:"Block anchor name",required:!1,type:i.Z.SLUG}]}},{label:"Rules Based Personalization (Logged-out User) Settings",type:i.Z.COLLAPSIBLE,category:i.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",label:"Visible for following user types",type:i.Z.OBJECT,required:!1,itemSchema:{fields:a}},{field:"hiddenOn",label:"Hidden for following user types",type:i.Z.OBJECT,required:!1,itemSchema:{fields:a}}]}}]}},16199:(e,t,l)=>{l.d(t,{G:()=>r});var i=l(34054),a=l(96911);function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((e=>{let{elementName:l,elementId:r,elementType:n}=e;return{field:r,label:l,type:i.Z.COW_EVENT_FORM,options:a.Mg.filter((e=>{let{id:l}=e;return t.includes(l)})),elementType:n}}))}},35350:(e,t,l)=>{l.d(t,{D:()=>u});var i=l(34054),a=l(16199),r=l(96911);function n(e){return e.reduce(((e,t)=>t.type===i.Z.COLLAPSIBLE?[...e,...t.itemSchema.fields]:[...e,t]),[])}function o(e,t){const l=e.reduce(((e,t)=>{const l=t.category||i.q.ADVANCED;return{...e,[l]:[...e[l]||[],t]}}),{});return Object.keys(i.q).reduce(((e,a)=>{const r=l[a]||[];return[...e,...t?[{field:"loggedOutProps",label:"For Logged-out users",type:i.Z.OBJECT,category:a,itemSchema:{fields:n(r)}}]:[],{field:"loggedInProps",label:"For Logged-in users",type:i.Z.OBJECT,category:a,itemSchema:{fields:n(r)}}]}),[])}const d=e=>({label:"Event tracking",type:i.Z.EVENTS_TAB,category:i.q.ADVANCED,itemSchema:{fields:[...e.itemSchema.fields,...(0,a.G)([{elementId:r.aM,elementName:"Logged-in State"}],[r.ci.VISIBLE])]}}),u=function(e,t,l){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{title:e,previewSettingsFields:[{field:"loggedIn",label:"User is logged-in",type:i.Z.TOGGLE_SWITCH,defaultValue:!1}],fields:[...a?[]:[{field:"isPersonalized",label:"LoggedIn Personalization",type:i.Z.TOGGLE_SWITCH,defaultValue:!1,category:i.q.CONTENT},...t],...o(t,a),d(l)]}}},39206:(e,t,l)=>{l.d(t,{H$:()=>c});const i="click",a="visible",r="submit";var n=l(38967);function o(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{label:i="",category:a="",redirectUrl:r=""}=l;return e.filter((e=>e.eventType===t)).map((e=>{let{selectedCampaigns:l,eventName:n}=e;return{campaignId:Array.isArray(l)&&l[0]?l[0]:null,eventType:t,eventName:n,label:i,category:a,redirectUrl:r}}))}const d=(e,t)=>({trackClickEvents:l=>{t(o(e,i,l))},trackVisibleEvents:l=>{t(o(e,a,l))},trackSubmitEvents:l=>{t(o(e,r,l))}}),u=function(e,t,l){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!(i>=5))return Array.isArray(t[0])?(i++,t.map(((e,t)=>u(t,e,l,i))).filter(Boolean)):d(t,l)};function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.d;return Object.fromEntries(Object.entries(e).map((e=>{let[l,i]=e;return[l,u(l,i,t)]})))}},__fusion__45:(e,t,l)=>{l.r(t),l.d(t,{Illustration:()=>U,default:()=>_,schema:()=>Z});var i=l(70803),a=l(80472),r=l(24226),n=l(39206),o=l(36151),d=l(42797),u=l(61934),c=l(65320),s=l(10927),m=l(72617),g=l(77510);Object.freeze({DESKTOP:"desktop",PORTABLE:"portable",PALM:"palm"}),Object.freeze({RTL:"rtl",LTR:"ltr"}),Object.freeze({FLUSH:"flush",FLUSH_END:"flush--ends",FLUSH_TOP:"flush--top",FLUSH_BOTTOM:"flush--top",FLUSH_VERTICAL:"flush--vertical",INSET:"inset",HALF:"half",BLOCK:"block",QUARTER:"quarter",DEFAULT:"default"}),Object.freeze({R4X3:"aspect_4_3",R16X9:"aspect_16_9",R263X1:"aspect_263_1",R9X16:"aspect_9_16",R3X4:"aspect_3_4",R1X1:"aspect_1_1",AUTO:"auto"}),Object.freeze({DOWN:40,LEFT:37,RIGHT:39,SPACE:32,UP:38,TAB:9});var p=l(27013),T=l(33990);const E=(0,d.zo)("div",(e=>{let{$theme:t,$backgroundColor:l,$isMouseOver:i,$textColor:a}=e;const{mediaQuery:r,colors:n,animation:o}=t;return{backgroundColor:l||n.backgroundPrimary,borderBottom:"1px solid ".concat(a),borderColor:i?n.contentSecondary:"none",textDecoration:"none",transition:"".concat(o.timing100," ").concat(o.easeInOutCurve),position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"stretch",boxSizing:"border-box",color:a,[r.small]:{paddingBottom:"23px"},[r.medium]:{paddingBottom:"35px"},[r.large]:{paddingBottom:"40px"}}})),b=(0,d.zo)("div",(e=>{let{$theme:t}=e;const{mediaQuery:l}=t;return{display:"grid",width:"100%",alignItems:"center",justifyContent:"center",[l.small]:{alignItems:"inherit",gridTemplateColumns:"70% 30%"},[l.medium]:{gridTemplateColumns:"70% 30%"},[l.large]:{gridTemplateColumns:"60% 40%"}}})),f=(0,d.zo)("div",(()=>({gridColumnStart:1,gridColumnEnd:2}))),C=(0,d.zo)("div",(()=>({gridColumnStart:2,gridColumnEnd:3,display:"flex",justifyContent:"flex-end",alignItems:"center"}))),L=(0,d.zo)("div",(e=>{let{$theme:t}=e;const l="rtl"===t.direction;return{overflow:"hidden",display:"block",float:l?"left":"right",transform:l?"scale(-1)":"none",width:"30px"}})),O=(0,d.zo)("div",(e=>{let{$theme:t,$isMouseEnter:l}=e;const{animation:i}=t;return{transform:"translateX(0)",width:"7em",display:"flex",animationName:l?{from:{transform:"translateX(-50%)"},to:{transform:"translateX(0)"}}:"",animationFillMode:"forwards",animationPlayState:"running",animationTimingFunction:i.easeInOutCurve,animationDuration:"650ms",justifyContent:"space-between"}})),h=(0,d.zo)("div",(e=>{let{$theme:t,$color:l}=e;const{mediaQuery:i,animation:a}=t;return{display:"flex",alignItems:"center",width:"1em",animationTimingFunction:a.easeInOutCurve,transition:a.timing100,overflow:"hidden",color:l,[i.small]:{fontSize:"36px"},[i.large]:{fontSize:"44px",position:"relative",left:"-3px"}}})),y=e=>{const[t,l]=(0,o.useState)(!1),[,i]=(0,d.hQ)(),{mediaQuery:a}=i,r=(0,g.a)(a.small),n=(0,g.a)(a.medium),y=(0,g.a)(a.large),{backgroundColor:_,textColor:I,cta:N,isLoading:B}=e;function v(){return((e,t,l)=>("string"==typeof t?t.replace(/\[(\d+)]/g,".$1"):t.join(".")).split(".").filter(Boolean).every((t=>void 0!==(e=e[t])))?e:l)(e,"cta.text",void 0)}function S(){return y?"36px":n&&!y?"30px":r&&!n?"27px":"30px"}function A(){l(!0)}function k(){l(!1)}return(0,s.Q)(N)?(0,T.tZ)(m.Z,{...N,onClick:e.onClick,render:(e,l)=>{const a=e||l;return(0,T.tZ)(E,{$isMouseOver:a,$backgroundColor:_,$textColor:I||i.colors.black,onMouseEnter:A,children:(0,T.tZ)(b,{children:v()&&(0,T.BX)(T.HY,{children:[(0,T.tZ)(f,{children:(0,T.tZ)(u.O,{isLoading:Boolean(B),children:(0,T.tZ)(c.Z,{color:a?i.colors.contentSecondary:I,heading:N.text,level:2})})}),(0,T.tZ)(C,{children:(0,T.tZ)(L,{children:(0,T.BX)(O,{$isMouseEnter:t,onAnimationEnd:k,children:[(0,T.tZ)(h,{$color:a?i.colors.contentSecondary:I,children:(0,T.tZ)(p.Z,{size:S()})}),(0,T.tZ)(h,{$color:a?i.colors.contentSecondary:I,children:(0,T.tZ)(p.Z,{size:S()})})]})})})]})})})},width:["100%","100%","100%"],height:"100%",isLoading:Boolean(B)}):null},_=e=>{const{animations:t,activeLanguage:l,items:o,alignContainer:d,anchorName:u,autoplayVideo:c,backgroundColor:s,backgroundFullBleed:m,backgroundImageLarge:g,backgroundImageMedium:p,backgroundImageSmall:E,backgroundOverlay:b,containerBackgroundColor:f,containerBackgroundTransparent:C=!0,height:L,marginTop:O,removePaddingBottom:h,removePaddingSides:_,removePaddingTop:I,textColor:N,userData:B,isPersonalized:v,analyticsEvents:S,analyticsHandler:A}=e,k=(0,n.H$)(S,A),{loading:Z,user:U}=B||{},M=Boolean(null==U?void 0:U.firstName),R=o&&o.length?o.map(((e,t)=>({...e,index:t}))).filter((e=>{var t;return!(null!=e&&null!==(t=e.cta)&&void 0!==t&&t.hidden||null!=e&&e.hidden)})):[];function D(){return l&&l.languageSlug&&["fi","ru"].includes(l.languageSlug)}function P(){return!(!R||!R.length)}return(0,T.tZ)(a.l,{animations:t,target:"fullBlock",children:(0,T.tZ)(r.V,{alignContainer:d,anchorName:u,autoplayVideo:c,backgroundColor:s,backgroundFullBleed:m,backgroundImageLarge:g,backgroundImageMedium:p,backgroundImageSmall:E,backgroundOverlay:b,containerBackgroundColor:f,containerBackgroundTransparent:C,hasHeading:!1,height:L,marginTop:O,removePaddingBottom:h,removePaddingSides:_,removePaddingTop:I,textColor:N,children:P()&&function(){const e=(e,l)=>(0,T.tZ)(i.P,{$gridColumn:["1/-1","1/-1","span 4","span 6"],children:(0,T.tZ)(a.l,{animations:t,target:"multilinkItems",children:(0,T.tZ)(y,{textColor:N,backgroundColor:s,...e,specialSizing:D,onClick:()=>{var t,l;null==k||null===(t=k.items)||void 0===t||null===(t=t[e.index])||void 0===t||null===(l=t.trackClickEvents)||void 0===l||l.call(t,{label:v?M?"logged-in":"logged-out":""})},isLoading:Z})})},"multilink-bold-item-".concat(l));return P()&&R.map(e)}()})})};var I=l(34054),N=l(16199),B=l(96911),v=l(18769),S=l(35350);const A={label:"Event Tracking",type:I.Z.EVENTS_TAB,category:I.q.ADVANCED,itemSchema:{fields:(0,N.G)([{elementId:"items",elementName:"Item",elementType:I.Z.ARRAY}],[B.ci.CLICK])}},k=[{field:"items",label:"Multilink Bold Items",labelItemsBy:"heading",required:!0,type:I.Z.ARRAY,category:I.q.CONTENT,itemSchema:{fields:[{field:"cta",label:"Item CTA",required:!1,type:I.Z.TEXT_LINK}]}},{label:"Animations",type:I.Z.COLLAPSIBLE,category:I.q.ADVANCED,itemSchema:{fields:[{field:"animations",type:I.Z.ANIMATION_BUILDER,options:[{label:"Full block",value:"fullBlock"},{label:"Multilink items",value:"multilinkItems"}]}]}},...v.Z.fields],Z=(0,S.D)("Multilink Bold",k,A),U=e=>{let{width:t,height:l}=e;return(0,T.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Multilink-Bold.png",alt:"",width:t||"auto",height:l||"200px"})}}}]);