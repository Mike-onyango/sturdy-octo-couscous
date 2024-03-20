"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[3695],{98573:(e,l,r)=>{r.d(l,{Z:()=>a,q:()=>d});const a={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MARKDOWN:"MARKDOWN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL",COLLAPSIBLE:"COLLAPSIBLE",EVENTS_TAB:"EVENTS_TAB",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",COW_EVENT_FORM:"COW_EVENT_FORM"},d={DESIGN:"DESIGN",CONTENT:"CONTENT",ADVANCED:"ADVANCED"}},34054:(e,l,r)=>{r.d(l,{Z:()=>a,q:()=>d});const a={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MARKDOWN:"MARKDOWN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL",COLLAPSIBLE:"COLLAPSIBLE",EVENTS_TAB:"EVENTS_TAB",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",COW_EVENT_FORM:"COW_EVENT_FORM"},d={DESIGN:"DESIGN",CONTENT:"CONTENT",ADVANCED:"ADVANCED"}},18769:(e,l,r)=>{r.d(l,{Z:()=>i});var a=r(34054);const d=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((e=>({field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:a.Z.CHECKBOX,defaultValue:!1}))),i={fields:[{label:"Content Container Settings",type:a.Z.COLLAPSIBLE,category:a.q.DESIGN,itemSchema:{fields:[{field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:a.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:a.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:a.Z.CHECKBOX,defaultValue:!1},{field:"containerFullWidth",label:"Full width container",required:!1,type:a.Z.TOGGLE_SWITCH,defaultValue:!1},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:a.Z.BACKGROUND_COLOR},{field:"containerBackgroundTransparent",label:"Transparent background",fieldLabel:"Check here to make grid container transparent",required:!1,type:a.Z.CHECKBOX,defaultValue:!0}]}},{label:"Block Container Settings",type:a.Z.COLLAPSIBLE,category:a.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",type:a.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"marginBottom",label:"Add padding bottom",required:!1,type:a.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"textColor",label:"Text color",required:!1,type:a.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:a.Z.BACKGROUND_COLOR},{field:"backgroundImageLarge",label:"Background image large",required:!1,type:a.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageMedium",label:"Background image medium",required:!1,type:a.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageSmall",label:"Background image small",required:!1,type:a.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:a.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",required:!1,type:a.Z.ENUM_CUSTOM,options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}]},{field:"autoplayVideo",label:"Background video",required:!1,type:a.Z.OBJECT,itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:a.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:a.Z.TEXT_LINE}]}},{field:"height",label:"Block height",required:!1,type:a.Z.TABBED_FIELDS,itemSchema:{fields:[{field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:a.Z.TEXT_LINE},{field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:a.Z.TEXT_LINE},{field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:a.Z.TEXT_LINE}]}},{field:"alignContainer",label:"Align container (height must be set)",required:!1,type:a.Z.ENUM_CUSTOM,options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}]},{field:"anchorName",label:"Block anchor name",required:!1,type:a.Z.SLUG}]}},{label:"Rules Based Personalization (Logged-out User) Settings",type:a.Z.COLLAPSIBLE,category:a.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",label:"Visible for following user types",type:a.Z.OBJECT,required:!1,itemSchema:{fields:d}},{field:"hiddenOn",label:"Hidden for following user types",type:a.Z.OBJECT,required:!1,itemSchema:{fields:d}}]}}]}},17037:(e,l,r)=>{r.d(l,{H:()=>d});var a=r(34054);const d={fields:[{field:"heading",label:"Heading",required:!1,type:a.Z.TEXT_LINE,category:a.q.CONTENT},{field:"body",label:"Body Copy",required:!1,type:a.Z.MARKDOWN,category:a.q.CONTENT},{field:"cta",label:"CTA",required:!1,type:a.Z.OBJECT,category:a.q.CONTENT,itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:a.Z.TEXT_LINK},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:a.Z.TEXT_LINK}]}}]}},84443:(e,l,r)=>{r.d(l,{Z:()=>T});var a=r(43193),d=r(53291),i=r(13791),t=r(42797),o=r(38317),n=r(33990);const T=e=>{const{backgroundColor:l,textColor:r,items:T,isDefaultExpandedProp:E,rtl:c}=e,[,u]=(0,t.hQ)(),N=(T?Array.isArray(T)?T:[T]:[]).filter((e=>e.heading)),_="true"===E?N.map((e=>"panel-".concat(N.indexOf(e)))):[],[p,C]=a.useState(_);return(0,n.tZ)(d.Z,{expanded:p,onChange:e=>{let{key:l}=e;p.includes(l)?C(p.filter((e=>e!==l))):C([...p,l])},renderAll:!0,overrides:{Header:{style:{backgroundColor:"transparent",...r?{color:r}:{},...l===u.colors.black?{":hover":{color:r}}:{}}},Content:{style:e=>{let{$expanded:l}=e;return{backgroundColor:"transparent",paddingBottom:l?u.sizing.scale800:0}}},ToggleIcon:{style:{flexShrink:0,color:r}}},children:N.map(((e,l)=>(0,n.tZ)(i.Z,{title:e.heading,children:(0,n.tZ)(o.Z,{body:e.body,color:r,cta:e.cta,rtl:c,width:[90,85,100]})},"panel-".concat(l))))})}},7237:(e,l,r)=>{r.d(l,{U:()=>c});var a=r(42797),d=r(84443),i=r(24226),t=r(13462),o=r(70803),n=r(38317),T=r(33990);const E=(0,a.zo)("div",(e=>{let{$theme:l}=e;const{sizing:r,mediaQuery:a}=l;return{paddingBottom:r.scale400,[a.large]:{paddingBottom:0}}})),c=e=>{const{anchorName:l,backgroundColor:r,body:a,containerBackgroundTransparent:c=!0,cta:u,eyebrow:N,heading:_,textColor:p,items:C,isDefaultExpanded:L,rtl:O,automatedEventTracker:s}=e,b=C?Array.isArray(C)?C:[C]:[];return(0,T.BX)(i.V,{...e,containerBackgroundTransparent:c,onClick:s,children:[(0,t.Qf)({heading:_,body:a,cta:u})&&(0,T.tZ)(o.P,{$gridColumn:["1/-1","1/-1","1/-1","span 8"],children:(0,T.tZ)(E,{children:(0,T.tZ)(n.Z,{body:a,color:p,cta:u,eyebrow:N,heading:_,headingAnchorName:l,headingSize:2,headingLevelOverride:2,rtl:O,width:[90,85,100]})})}),b&&b.length>0&&(0,T.tZ)(o.P,{children:(0,T.tZ)(d.Z,{backgroundColor:r,textColor:p,items:C,isDefaultExpandedProp:L,rtl:O})})]})}},__fusion__7:(e,l,r)=>{r.r(l),r.d(l,{Accordion:()=>a.U,AccordionComponent:()=>d.Z,AccordionComponentSchema:()=>i.a,Illustration:()=>o,default:()=>a.U,schema:()=>i.f});var a=r(7237),d=r(84443),i=r(42173),t=r(33990);const o=e=>{let{width:l,height:r}=e;return(0,t.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Accordion.png",alt:"",width:l||"auto",height:r||"200px"})}},42173:(e,l,r)=>{r.d(l,{a:()=>t,f:()=>o});var a=r(98573),d=r(17037),i=r(18769);const t={fields:[{field:"isDefaultExpanded",label:"Expand by default",required:!1,type:a.Z.ENUM_CUSTOM,category:a.q.CONTENT,options:[{label:"No",value:"false"},{label:"Yes",value:"true"}]},{field:"items",label:"Accordion Items",labelItemsBy:"heading",required:!0,type:a.Z.ARRAY,category:a.q.CONTENT,itemSchema:{fields:[{field:"heading",label:"Item Heading",required:!0,type:a.Z.TEXT_LINE},{field:"body",label:"Item Body",required:!0,type:a.Z.MARKDOWN},{field:"cta",label:"CTA",required:!0,type:a.Z.OBJECT,itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:a.Z.TEXT_LINK},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:a.Z.TEXT_LINK}]}}]}}]},o={title:"Accordion",fields:[...d.H.fields,...t.fields,...i.Z.fields]}},53291:(e,l,r)=>{r.d(l,{Z:()=>n});var a=r(36151),d=r(57462),i=r(69584),t=r(80998),o=r(33990);const n=function(e){let{accordion:l=!0,children:r,disabled:n,expanded:T,onChange:E,overrides:c={},renderAll:u}=e;const{Root:N,..._}=c,[p,C]=(0,i.jb)(N,t.fC);return(0,o.tZ)(p,{"data-baseweb":"accordion",...C,children:a.Children.map(r,((e,r)=>{let i=(0,d.kK)(e)||(0,d.ni)(e)?e:(0,o.tZ)(o.HY,{children:e});const t=i.key||String(r);return a.cloneElement(i,{disabled:i.props.disabled||n,expanded:T.includes(t),key:t,onChange:E&&"function"==typeof E?()=>{let e;e=l?T.includes(t)?[]:[t]:T.includes(t)?T.filter((e=>e!==t)):[...T,t],E({key:t,expanded:e})}:E,overrides:i.props.overrides||_,renderAll:u})}))})}}}]);