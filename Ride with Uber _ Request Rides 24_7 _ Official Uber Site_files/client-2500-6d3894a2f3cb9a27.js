"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[2500],{34054:(e,t,l)=>{l.d(t,{Z:()=>r,q:()=>a});const r={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MARKDOWN:"MARKDOWN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL",COLLAPSIBLE:"COLLAPSIBLE",EVENTS_TAB:"EVENTS_TAB",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",COW_EVENT_FORM:"COW_EVENT_FORM"},a={DESIGN:"DESIGN",CONTENT:"CONTENT",ADVANCED:"ADVANCED"}},29469:(e,t,l)=>{l.d(t,{Z:()=>o});var r=l(36151),a=l(89313),i=l(33990);class o extends r.Component{render(){return(0,i.tZ)(a.Z,{viewBox:"0 0 36 36",...this.props,children:(0,i.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z",fill:"currentColor"})})}}},89313:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(43193),a=l(33990);class i extends r.Component{render(){const{children:e,...t}=this.props;return e&&(0,a.tZ)("svg",{"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",fill:"currentColor",...t,children:e})}}},18769:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(34054);const a=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((e=>({field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:r.Z.CHECKBOX,defaultValue:!1}))),i={fields:[{label:"Content Container Settings",type:r.Z.COLLAPSIBLE,category:r.q.DESIGN,itemSchema:{fields:[{field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:r.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:r.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:r.Z.CHECKBOX,defaultValue:!1},{field:"containerFullWidth",label:"Full width container",required:!1,type:r.Z.TOGGLE_SWITCH,defaultValue:!1},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:r.Z.BACKGROUND_COLOR},{field:"containerBackgroundTransparent",label:"Transparent background",fieldLabel:"Check here to make grid container transparent",required:!1,type:r.Z.CHECKBOX,defaultValue:!0}]}},{label:"Block Container Settings",type:r.Z.COLLAPSIBLE,category:r.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",type:r.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"marginBottom",label:"Add padding bottom",required:!1,type:r.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"textColor",label:"Text color",required:!1,type:r.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:r.Z.BACKGROUND_COLOR},{field:"backgroundImageLarge",label:"Background image large",required:!1,type:r.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageMedium",label:"Background image medium",required:!1,type:r.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageSmall",label:"Background image small",required:!1,type:r.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:r.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",required:!1,type:r.Z.ENUM_CUSTOM,options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}]},{field:"autoplayVideo",label:"Background video",required:!1,type:r.Z.OBJECT,itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:r.Z.TEXT_LINE}]}},{field:"height",label:"Block height",required:!1,type:r.Z.TABBED_FIELDS,itemSchema:{fields:[{field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:r.Z.TEXT_LINE},{field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:r.Z.TEXT_LINE},{field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:r.Z.TEXT_LINE}]}},{field:"alignContainer",label:"Align container (height must be set)",required:!1,type:r.Z.ENUM_CUSTOM,options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}]},{field:"anchorName",label:"Block anchor name",required:!1,type:r.Z.SLUG}]}},{label:"Rules Based Personalization (Logged-out User) Settings",type:r.Z.COLLAPSIBLE,category:r.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",label:"Visible for following user types",type:r.Z.OBJECT,required:!1,itemSchema:{fields:a}},{field:"hiddenOn",label:"Hidden for following user types",type:r.Z.OBJECT,required:!1,itemSchema:{fields:a}}]}}]}},16199:(e,t,l)=>{l.d(t,{G:()=>i});var r=l(34054),a=l(96911);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((e=>{let{elementName:l,elementId:i,elementType:o}=e;return{field:i,label:l,type:r.Z.COW_EVENT_FORM,options:a.Mg.filter((e=>{let{id:l}=e;return t.includes(l)})),elementType:o}}))}},21641:(e,t,l)=>{l.d(t,{xu:()=>c});var r=l(42797),a=l(31578),i=l(33990);const{values:{aspectRatios:o}}=a.ZP,n=(0,r.zo)("div",(e=>{let{$aspectRatio:t,$outerStyles:l={}}=e;return{overflow:"hidden",paddingBottom:o[t],position:"relative",width:"100%",...l}})),d=(0,r.zo)("div",{bottom:0,left:0,position:"absolute",right:0,top:0}),c=e=>e.aspectRatio?(0,i.tZ)(n,{$aspectRatio:e.aspectRatio,$outerStyles:e.$outerStyles,children:(0,i.tZ)(d,{children:e.children})}):e.children},20222:(e,t,l)=>{l.d(t,{Z:()=>n});var r=l(36151),a=l(33990);function i(e,t,l){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}class o extends r.PureComponent{constructor(e){super(e),i(this,"state",{isVisible:!1}),this.lazyRef=(0,r.createRef)()}static get hasIntersectionObserver(){return"undefined"!=typeof window&&"undefined"!=typeof window.IntersectionObserver}componentDidMount(){o.hasIntersectionObserver?(this.io=new IntersectionObserver(((e,t)=>{let[l]=e;if(l.isIntersecting)return this.setVisible(),t.disconnect()}),{root:null,rootMargin:"150px",threshold:0}),this.lazyRef&&this.io.observe(this.lazyRef.current)):this.setVisible()}componentWillUnmount(){var e;o.hasIntersectionObserver&&(null===(e=this.io)||void 0===e||e.disconnect())}setVisible(){this.setState({isVisible:!0});const{onLoaded:e}=this.props;e&&e()}render(){return(0,a.tZ)("div",{style:{height:"100%",width:"100%"},ref:this.lazyRef,children:this.state.isVisible?this.props.children:null})}}const n=o},__fusion__44:(e,t,l)=>{l.r(t),l.d(t,{Illustration:()=>w,default:()=>D,schema:()=>V});var r=l(80472),a=l(13462),i=l(68026),o=l(24226),n=l(70803),d=l(38317),c=l(3268),s=l(36131),u=l(36151),m=l(42797),p=l(97688),b=l(21641),g=l(65320),h=l(96712),y=l(29469),T=l(52920),f=l(61328),v=l(20222),C=l(99951),E=l(30291),O=l(33990);const Z=(0,m.zo)("div",(e=>({display:"flex",color:(0,C.S0)(e.$textColor),alignItems:"flex-start",textDecoration:"none",position:"relative"}))),N=(0,m.zo)("a",(e=>{let{$theme:t,$removeCardBorders:l,$backgroundColor:r,$textColor:a}=e;const{borders:i,colors:o}=t;return{background:(0,C.zn)(r),border:l?"none":"".concat(i.border300.borderWidth," ").concat(i.border300.borderStyle," ").concat(i.border300.borderColor),color:a||o.primaryA,display:"flex",position:"relative",textDecoration:"none",width:"100%"}})),L=(0,m.zo)("div",(e=>{let{$theme:t}=e;const{sizing:l,mediaQuery:r}=t,a="rtl"===t.direction;return{display:"flex",flexDirection:"column",justifyContent:"center",padding:a?"".concat(l.scale600," ").concat(l.scale600," ").concat(l.scale600," ").concat(l.scale1200):"".concat(l.scale600," ").concat(l.scale1200," ").concat(l.scale600," ").concat(l.scale600),[r.large]:{padding:a?"".concat(l.scale800," ").concat(l.scale800," ").concat(l.scale800," ").concat(l.scale1200):"".concat(l.scale800," ").concat(l.scale1200," ").concat(l.scale800," ").concat(l.scale800)}}})),I=(0,m.zo)("div",(e=>{let{$theme:t,$active:l}=e;const{mediaQuery:r,sizing:a}=t,i="rtl"===t.direction,o=i?"left":"right",n=l?a.scale500:a.scale800,d=l?a.scale100:a.scale600,c={transition:"all 400ms ease !important",position:"absolute",width:a.scale700,top:"50%",[o]:d,[r.large]:{[o]:n}},s=i?{transform:"scaleX(-1)"}:null;return s?{...c,...s}:c})),S=(0,m.zo)("div",(e=>{let{$theme:t}=e;const{sizing:l,mediaQuery:r}=t,a="rtl"===t.direction;return{flexShrink:0,width:"84px",height:"84px",margin:a?"".concat(l.scale600," ").concat(l.scale600," ").concat(l.scale600," 0"):"".concat(l.scale600," 0 ").concat(l.scale600," ").concat(l.scale600),[r.large]:{width:"150px",height:"150px",margin:a?"".concat(l.scale800," ").concat(l.scale800," ").concat(l.scale800," 0"):"".concat(l.scale800," 0 ").concat(l.scale800," ").concat(l.scale800)}}})),k=(0,m.zo)("a",(e=>{let{$theme:t,$color:l}=e;const{animation:r,colors:a,mediaQuery:i,typography:o}=t;return{...o.HeadingXSmall,color:(0,C.S0)(l),textDecoration:"none",transition:"all ".concat(r.timing200," ").concat(r.easeInOutCurve),":hover":{color:a.accent},[i.large]:{...o.HeadingSmall}}})),_={top:"calc(50% - 12px)",right:0,position:"absolute"},B=(0,m.zo)("div",(e=>{let{$theme:t,$color:l,$headingSize:r}=e;const{colors:a,mediaQuery:i,typography:o}=t;return{color:(0,C.S0)(l,a.primaryA),opacity:.5,margin:"0 0 ".concat(r>3?4:8,"px 0"),...o.HeadingXSmall,fontSize:r>3?o.LabelSmall.fontSize:o.HeadingXSmall.fontSize,[i.large]:{fontSize:o.LabelMedium.fontSize}}})),A=e=>{const{index:t,image:l,heading:r,body:a,cta:i,backgroundColor:o,textColor:n,removeCardBorders:d=!1,textLinksEnabled:c,eyebrow:s,eventTrackers:C}=e,[A,M]=(0,u.useState)(!1),[,P]=(0,m.hQ)(),{mediaQuery:R}=P,D=(P.direction,(0,E.a)(R.medium)?"medium":"legal"),U=(0,p.Q)({value:e=>{let{path:t,...l}=e;return{...l,path:[...t,"multilink-item"]}}});return(0,O.tZ)(Z,{children:(0,O.BX)(N,{$backgroundColor:o,$removeCardBorders:d,$textColor:n,"aria-label":null==i?void 0:i.ctaPrimary.ariaLabel,href:c?void 0:null!=i&&i.ctaPrimary.href?i.ctaPrimary.href:void 0,onMouseEnter:null!=i&&i.ctaPrimary.href?()=>{M(!0)}:void 0,onMouseLeave:null!=i&&i.ctaPrimary.href?()=>{M(!1)}:void 0,rel:!c&&null!=i&&i.ctaPrimary.openInNewTab?"noopener noreferrer":void 0,target:!c&&null!=i&&i.ctaPrimary.openInNewTab?"_blank":void 0,"data-tracking-name":"".concat(U).concat(t||"0"),children:[T.Z.imageIsValid(l)&&l&&(0,O.tZ)(S,{children:(0,O.tZ)(b.xu,{aspectRatio:"aspect_1_1",children:(0,O.tZ)(v.Z,{children:(0,O.tZ)(f.Z,{image:l})})})}),(0,O.BX)(L,{children:[!!s&&(0,O.tZ)(B,{$color:n,$headingSize:4,children:s}),c?(0,O.tZ)(k,{href:null==i?void 0:i.ctaPrimary.href,target:null!=i&&i.ctaPrimary.openInNewTab?"_blank":void 0,$color:n,onClick:()=>{var e,l,r;return null==C||null===(e=C.items)||void 0===e||null===(e=e[t])||void 0===e?void 0:e.trackClickEvents({label:(null==i||null===(l=i.ctaPrimary)||void 0===l?void 0:l.text)||"",category:"1",redirectUrl:(null==i||null===(r=i.ctaPrimary)||void 0===r?void 0:r.href)||""})},children:r}):(0,O.tZ)(g.Z,{level:3,color:n,heading:r}),(0,O.tZ)(h.ZP,{body:a,size:D})]}),(null==i?void 0:i.ctaPrimary.href)&&(0,O.tZ)(I,{$active:A,children:(0,O.tZ)(y.Z,{height:25,style:_})})]})})},M=e=>{const{animations:t,anchorName:l,alignContainer:u,autoplayVideo:m,backgroundColor:p,backgroundFullBleed:b,backgroundImageLarge:g,backgroundImageMedium:h,backgroundImageSmall:y,backgroundOverlay:T,body:f,cta:v,ctaPosition:C,containerBackgroundColor:E,containerBackgroundTransparent:Z=!0,eyebrow:N,heading:L="",height:I,marginBottom:S,marginTop:k,removePaddingBottom:_,removePaddingSides:B,removePaddingTop:M,rtl:P=!1,textColor:R,automatedEventTracker:D,eventTrackers:U}=e;const q={ctaPrimary:null!=v&&v.ctaPrimary?{...v.ctaPrimary,onClick:()=>{var e,t,l;null==U||null===(e=U.ctaPrimary)||void 0===e||e.trackClickEvents({label:(null==v||null===(t=v.ctaPrimary)||void 0===t?void 0:t.text)||"",category:"1",redirectUrl:(null==v||null===(l=v.ctaPrimary)||void 0===l?void 0:l.href)||""})}}:void 0,ctaSecondary:null!=v&&v.ctaSecondary?{...v.ctaSecondary,onClick:()=>{var e,t,l;null==U||null===(e=U.ctaSecondary)||void 0===e||e.trackClickEvents({label:(null==v||null===(t=v.ctaSecondary)||void 0===t?void 0:t.text)||"",category:"1",redirectUrl:(null==v||null===(l=v.ctaSecondary)||void 0===l?void 0:l.href)||""})}}:void 0};const x=(0,a.Qf)({heading:L,body:f,cta:v}),X=(0,i.ed)(v),H=X&&"top"===C?q:{},V=e.items?e.items.filter((e=>{let{cta:t}=e;return!(null!=t&&t.ctaPrimary.hidden)})):[];return(0,O.tZ)(r.l,{animations:t,target:"fullBlock",children:(0,O.tZ)(s.U,{value:e=>{let{path:t,...l}=e;return{...l,path:[...t,"wcb3-multilink"],container:"id",page:"static"}},children:(0,O.BX)(o.V,{alignContainer:u,anchorName:l,autoplayVideo:m,backgroundColor:p,backgroundFullBleed:b,backgroundImageLarge:g,backgroundImageMedium:h,backgroundImageSmall:y,backgroundOverlay:T,containerBackgroundColor:E,containerBackgroundTransparent:Z,hasHeading:!!L,height:I,marginBottom:S,marginTop:k,removePaddingBottom:_,removePaddingSides:B,removePaddingTop:M,textColor:R,onClick:D,children:[x&&(0,O.tZ)(n.P,{$gridColumn:["1/-1","1/-1","span 7","span 8"],children:(0,O.tZ)(d.Z,{animations:t,heading:L,headingLevelOverride:2,headingSize:2,body:f,cta:H,color:R,rtl:P,eyebrow:N,headingAnchorName:l})}),function(e){return!!e.length}(V)&&function(l){const{textColor:a,backgroundColor:i,removeCardBorders:o,textLinksEnabled:n,rtl:d,singleItemFullWidth:s}=e,u=s?"span 12":"span 6";return l.map(((e,l)=>{var s;return null!=e&&e.heading&&0!==e.heading.trim().length||null!=e&&null!==(s=e.body)&&void 0!==s&&s.markdownContent&&""!==e.body.markdownContent.trim()||null!=e&&e.image?(0,O.tZ)(c.Z,{gridColumn:["1/-1","1/-1","1/-1",u],alignSelf:"flex-start",display:"grid",width:"100%",height:"100%",children:(0,O.tZ)(r.l,{animations:t,target:"multilinkItems",children:(0,O.tZ)(A,{index:l,textColor:a,backgroundColor:i,removeCardBorders:o,rtl:d,textLinksEnabled:n,...e,eventTrackers:U})})},l):null}))}(V),X&&"bottom"===C&&(0,O.tZ)(n.P,{children:(0,O.tZ)(r.l,{animations:t,target:"contentGroupCta",children:(0,O.tZ)(i.ZP,{...q,ctaAlign:"flex-end",rtl:P})})})]})})})};var P=l(68982),R=l(79930);const D=e=>{let{desktopOverrides:t={enableDesktopOverrides:!0},mobileOverrides:l={enableMobileOverrides:!0},automatedEventTracker:r,analyticsEvents:a,analyticsHandler:i,...o}=e;const n=Object.keys(t).length>1&&!1!==t.enableDesktopOverrides,d=Object.keys(l).length>1&&!1!==l.enableMobileOverrides,c={...o,automatedEventTracker:r,eventTrackers:(0,R.H$)(a,i)},s={...c,...t},u={...c,...l};return n&&d?(0,O.BX)(O.HY,{children:[(0,O.tZ)(P.q5,{children:(0,O.tZ)(M,{...u})}),(0,O.tZ)(P.jf,{children:(0,O.tZ)(M,{...s})})]}):n&&!d?(0,O.BX)(O.HY,{children:[(0,O.tZ)(P.q5,{children:(0,O.tZ)(M,{...c})}),(0,O.tZ)(P.jf,{children:(0,O.tZ)(M,{...s})})]}):!n&&d?(0,O.BX)(O.HY,{children:[(0,O.tZ)(P.q5,{children:(0,O.tZ)(M,{...u})}),(0,O.tZ)(P.jf,{children:(0,O.tZ)(M,{...c})})]}):(0,O.tZ)(M,{...c})};var U=l(34054),q=l(16199),x=l(96911),X=l(18769);const H=[{field:"heading",label:"Heading",required:!1,type:U.Z.TEXT_LINE,category:U.q.CONTENT},{field:"body",label:"Body Copy",required:!1,type:U.Z.MARKDOWN,category:U.q.CONTENT},{field:"cta",label:"CTA",required:!1,type:U.Z.OBJECT,category:U.q.CONTENT,itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:U.Z.TEXT_LINK},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:U.Z.TEXT_LINK}]}},{field:"ctaPosition",label:"CTA alignment",required:!1,type:U.Z.ENUM_CUSTOM,category:U.q.DESIGN,options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}]},{field:"items",label:"Multilink Items",labelItemsBy:"heading",required:!0,type:U.Z.ARRAY,category:U.q.CONTENT,itemSchema:{fields:[{field:"image",label:"Item Image",required:!1,type:U.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"eyebrow",label:"Sub Heading",required:!1,type:U.Z.TEXT_LINE},{field:"heading",label:"Section Heading",required:!0,type:U.Z.TEXT_LINE},{field:"body",label:"Section Body Copy",required:!1,type:U.Z.MARKDOWN},{field:"cta",label:"Item CTA",required:!1,type:U.Z.OBJECT,itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:U.Z.TEXT_LINK}]}},{field:"backgroundColor",label:"Background Color",required:!1,type:U.Z.BACKGROUND_COLOR},{field:"textColor",label:"Text Color",required:!1,type:U.Z.TEXT_COLOR}]}},{field:"removeCardBorders",label:"Remove card borders",required:!1,type:U.Z.ENUM_CUSTOM,category:U.q.DESIGN,options:[{label:"No",value:!1},{label:"Yes",value:!0}]},{field:"textLinksEnabled",label:"Add href link for the cards to the card title text",required:!1,type:U.Z.ENUM_CUSTOM,category:U.q.ADVANCED,options:[{label:"Off",value:!1},{label:"On",value:!0}]},{label:"Animations",type:U.Z.COLLAPSIBLE,category:U.q.ADVANCED,itemSchema:{fields:[{field:"animations",type:U.Z.ANIMATION_BUILDER,options:[{label:"Full block",value:"fullBlock"},{label:"Content group header",value:"contentGroupHeader"},{label:"Content group body",value:"contentGroupBody"},{label:"Content group CTA",value:"contentGroupCta"},{label:"Multilink items",value:"multilinkItems"}]}]}},{label:"Event Tracking",type:U.Z.EVENTS_TAB,category:U.q.ADVANCED,itemSchema:{fields:(0,q.G)([{elementId:"ctaPrimary",elementName:"CTA Primary"},{elementId:"ctaSecondary",elementName:"CTA Secondary"},{elementId:"items",elementName:"Items",elementType:U.Z.ARRAY}],[x.ci.CLICK])}},...X.Z.fields],V={title:"Multilink",fields:[{field:"desktopOverrides",label:"Desktop Overrides",required:!1,type:U.Z.OBJECT,category:U.q.CONTENT,itemSchema:{fields:[{field:"enableDesktopOverrides",fieldLabel:"Enable Desktop Overrides",required:!1,type:U.Z.CHECKBOX,defaultValue:!0},...H]}},{field:"mobileOverrides",label:"Mobile Overrides",required:!1,type:U.Z.OBJECT,category:U.q.CONTENT,itemSchema:{fields:[{field:"enableMobileOverrides",fieldLabel:"Enable Mobile Overrides",required:!1,type:U.Z.CHECKBOX,defaultValue:!0},...H]}},...H]},w=e=>{let{width:t,height:l}=e;return(0,O.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Multilink.png",alt:"",width:t||"auto",height:l||"200px"})}}}]);