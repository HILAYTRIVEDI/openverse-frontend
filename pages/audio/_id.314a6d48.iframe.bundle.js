(window.webpackJsonp=window.webpackJsonp||[]).push([[189,3,9,10,11,17,18,20],{1324:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),attribution_html=__webpack_require__(519),license=__webpack_require__(518),VLink=__webpack_require__(57),CopyButton=__webpack_require__(1326),VMediaInfo_VCopyLicensevue_type_script_lang_js_=Object(runtime.b)({name:"VCopyLicense",components:{CopyButton:CopyButton.default,VLink:VLink.default},props:{media:{type:Object},fullLicenseName:{type:String}},setup:function setup(props){var activeTab=Object(runtime.l)("rich"),licenseUrl=Object(runtime.a)((function(){return"".concat(props.media.license_url,"?ref=openverse")})),attributionHtml=Object(runtime.a)((function(){var licenseUrl="".concat(props.media.license_url,"&atype=html");return Object(attribution_html.a)(props.media,licenseUrl,props.fullLicenseName)}));return{activeTab:activeTab,attributionHtml:attributionHtml,isPDM:function isPDM(){return Object(license.c)(props.fullLicenseName)},licenseUrl:licenseUrl,tabs:["rich","html","plain"],setActiveTab:function setActiveTab(tabIdx){return activeTab.value=tabIdx},period:"."}}}),componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(VMediaInfo_VCopyLicensevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("h5",{staticClass:"mb-4 text-base md:text-2xl font-semibold"},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.copy-license.title"))+"\n  ")]),_vm._v(" "),_c("nav",{staticClass:"flex border-b-none",attrs:{role:"tablist"}},_vm._l(_vm.tabs,(function(tab,idx){return _c("button",{key:idx,staticClass:"py-3 md:py-4 px-4 md:px-6 border-t border-x rounded-t-sm bg-white text-sm md:text-base font-semibold relative focus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset]",class:[_vm.activeTab===tab?"border-t-dark-charcoal-20 border-x-dark-charcoal-20 -mb-[1px]":"border-tx"],attrs:{role:"tab","aria-controls":"tab-"+tab,"aria-selected":_vm.activeTab===tab},on:{click:function($event){return $event.preventDefault(),_vm.setActiveTab(tab)}}},[_vm._v("\n      "+_vm._s(_vm.$t("media-details.reuse.copy-license."+tab))+"\n    ")])})),0),_vm._v(" "),_vm._l(_vm.tabs,(function(tab,idx){return _c("div",{key:idx,staticClass:"border border-dark-charcoal-20 p-4 md:p-6 text-sm md:text-base foxus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset] h-[190px] flex flex-col justify-between items-start",class:{hidden:_vm.activeTab!==tab},attrs:{id:"tab-"+tab,"aria-labelledby":tab,role:"tabpanel",tabindex:"0"}},[_c("div",{staticClass:"flex-grow-1 overflow-y-scroll w-full"},["rich"===tab?_c("i18n",{attrs:{id:"attribution-rich",path:"media-details.reuse.credit.text",tag:"p"},scopedSlots:_vm._u([{key:"title",fn:function(){return[_c("VLink",{attrs:{href:_vm.media.foreign_landing_url}},[_vm._v(_vm._s(_vm.media.title))])]},proxy:!0},{key:"creator",fn:function(){return[_vm.media.creator?_c("i18n",{attrs:{path:"media-details.reuse.credit.creator-text",tag:"span"},scopedSlots:_vm._u([{key:"creator-name",fn:function(){return[_vm.media.creator_url?_c("VLink",{attrs:{href:_vm.media.creator_url}},[_vm._v(_vm._s(_vm.media.creator))]):_c("span",[_vm._v(_vm._s(_vm.media.creator))])]},proxy:!0}],null,!0)}):_vm._e()]},proxy:!0},{key:"marked-licensed",fn:function(){return[_vm._v("\n          "+_vm._s(_vm.isPDM?_vm.$t("media-details.reuse.credit.marked"):_vm.$t("media-details.reuse.credit.licensed"))+"\n        ")]},proxy:!0},{key:"license",fn:function(){return[_c("VLink",{staticClass:"uppercase",attrs:{href:_vm.licenseUrl}},[_vm._v(_vm._s(_vm.fullLicenseName))]),_vm._v(_vm._s(_vm.period)+"\n        ")]},proxy:!0}],null,!0)}):_vm._e(),_vm._v(" "),"html"===tab?_c("label",{staticClass:"w-full",attrs:{for:"attribution-html"}},[_c("div",{staticClass:"w-full font-mono h-auto w-full resize-none",attrs:{id:"attribution-html",value:_vm.attributionHtml,dir:"ltr",readonly:""}},[_vm._v("\n          "+_vm._s(_vm.attributionHtml)+"\n        ")])]):_vm._e(),_vm._v(" "),"plain"===tab?_c("i18n",{attrs:{id:"attribution-plain",path:"media-details.reuse.credit.text",tag:"p"},scopedSlots:_vm._u([{key:"title",fn:function(){return[_vm._v(_vm._s(_vm.media.title))]},proxy:!0},{key:"creator",fn:function(){return[_vm.media.creator?_c("i18n",{attrs:{path:"media-details.reuse.credit.creator-text"},scopedSlots:_vm._u([{key:"creator-name",fn:function(){return[_vm._v(_vm._s(_vm.media.creator))]},proxy:!0}],null,!0)}):_vm._e()]},proxy:!0},{key:"marked-licensed",fn:function(){return[_vm._v("\n          "+_vm._s(_vm.isPDM?_vm.$t("media-details.reuse.credit.marked"):_vm.$t("media-details.reuse.credit.licensed"))+"\n        ")]},proxy:!0},{key:"license",fn:function(){return[_vm._v(" "+_vm._s(_vm.fullLicenseName))]},proxy:!0},{key:"view-legal",fn:function(){return[_c("i18n",{attrs:{path:"media-details.reuse.credit.view-legal-text"},scopedSlots:_vm._u([{key:"terms-copy",fn:function(){return[_vm._v("\n              "+_vm._s(_vm.isPDM?_vm.$t("media-details.reuse.credit.terms-text"):_vm.$t("media-details.reuse.credit.copy-text"))+"\n            ")]},proxy:!0},_vm.licenseUrl?{key:"URL",fn:function(){return[_vm._v("\n              "+_vm._s(_vm.licenseUrl)+"\n            ")]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)}):_vm._e()],1),_vm._v(" "),_c("CopyButton",{staticClass:"mt-6",attrs:{id:"copyattr-"+tab,el:"#attribution-"+tab}})],1)}))],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__(57).default,CopyButton:__webpack_require__(1326).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VCopyLicense",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"object"}},{name:"fullLicenseName",type:{name:"string"}}]}},1325:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var license=__webpack_require__(518),VLicenseElements=__webpack_require__(313),VLink=__webpack_require__(57),VMediaInfo_VMediaLicensevue_type_script_lang_js_={name:"VMediaLicense",components:{VLicenseElements:VLicenseElements.default,VLink:VLink.default},props:{fullLicenseName:String,license:String,licenseUrl:String},computed:{isLicense:function isLicense(){return Object(license.b)(this.license)},headerText:function headerText(){var licenseOrTool=this.isLicense?"license":"tool";return this.$t("media-details.reuse.".concat(licenseOrTool,"-header"))}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(VMediaInfo_VMediaLicensevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"media-attribution"},[_c("h5",{staticClass:"mb-4 text-base md:text-2xl font-semibold"},[_vm._v("\n    "+_vm._s(_vm.headerText)+"\n  ")]),_vm._v(" "),_vm.isLicense?[_c("i18n",{staticClass:"block text-sm md:text-base",attrs:{path:"media-details.reuse.attribution",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("VLink",{staticClass:"uppercase text-pink",attrs:{href:_vm.licenseUrl}},[_vm._v("\n          "+_vm._s(_vm.fullLicenseName)+"\n        ")])]},proxy:!0}],null,!1,843276929)}),_vm._v(" "),_vm.license?_c("VLicenseElements",{staticClass:"md:py-4",attrs:{license:_vm.license}}):_vm._e(),_vm._v(" "),_vm.isLicense?_vm._e():_c("i18n",{staticClass:"caption font-semibold",attrs:{path:"media-details.reuse.license.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("VLink",{staticClass:"text-pink",attrs:{"aria-label":_vm.$t("media-details.aria.attribution.license"),href:_vm.licenseUrl}},[_vm._v(_vm._s(_vm.$t("media-details.reuse.license.link")))])]},proxy:!0}],null,!1,898833920)})]:[_vm.license?_c("VLicenseElements",{staticClass:"md:py-4",attrs:{license:_vm.license}}):_vm._e(),_vm._v(" "),_c("i18n",{staticClass:"caption font-semibold",attrs:{path:"media-details.reuse.tool.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("VLink",{staticClass:"text-pink",attrs:{"aria-label":_vm.$t("media-details.aria.attribution.tool"),href:_vm.licenseUrl}},[_vm._v(_vm._s(_vm.$t("media-details.reuse.tool.link")))])]},proxy:!0}])})]],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__(57).default,VLicenseElements:__webpack_require__(313).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaLicense",exportName:"default",description:"",tags:{},props:[{name:"fullLicenseName",type:{name:"string"}},{name:"license",type:{name:"string"}},{name:"licenseUrl",type:{name:"string"}}]}},1331:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(110);var vue_composition_api_esm=__webpack_require__(18),VLink=__webpack_require__(57),chevron_leftinline=__webpack_require__(1378),chevron_leftinline_default=__webpack_require__.n(chevron_leftinline),components_VBackToSearchResultsLinkvue_type_script_lang_js_=Object(vue_composition_api_esm.defineComponent)({components:{Chevron:chevron_leftinline_default.a,VLink:VLink.default},data:function data(){return{path:void 0,show:!1}},created:function created(){var _this$$nuxt,_this$$nuxt$context,_this$$nuxt$context$f;null!==(_this$$nuxt=this.$nuxt)&&void 0!==_this$$nuxt&&null!==(_this$$nuxt$context=_this$$nuxt.context)&&void 0!==_this$$nuxt$context&&null!==(_this$$nuxt$context$f=_this$$nuxt$context.from)&&void 0!==_this$$nuxt$context$f&&_this$$nuxt$context$f.fullPath&&(this.path=this.$nuxt.context.from.fullPath,this.path.startsWith("/search")&&(this.show=!0))}}),componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(components_VBackToSearchResultsLinkvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return this.show?_c("VLink",{staticClass:"px-2 pt-1 md:px-6 md:pt-4 md:pb-2 flex flex-row items-center font-semibold text-dark-charcoal text-xs md:text-sr",attrs:{href:this.path}},[_c("Chevron",{staticClass:"-ms-2"}),this._v("\n  "+this._s(this.$t("single-result.back"))+"\n")],1):this._e()}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__(57).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VBackToSearchResultsLink",description:"",tags:{}}},1332:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var components_LoadingIconvue_type_script_lang_js_={name:"LoadingIcon"},componentNormalizer=(__webpack_require__(1379),__webpack_require__(7));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_LoadingIconvue_type_script_lang_js_,(function(){var _h=this.$createElement;this._self._c;return this._m(0)}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"lds-ring"},[_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div")])}],!1,null,"7f2b418a",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LoadingIcon",exportName:"default",description:"",tags:{}}},1333:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),license=__webpack_require__(518),VCopyLicense=__webpack_require__(1324),VMediaLicense=__webpack_require__(1325),VMediaInfo_VMediaReusevue_type_script_lang_js_=Object(runtime.b)({name:"VMediaReuse",components:{VCopyLicense:VCopyLicense.default,VMediaLicense:VMediaLicense.default},props:{media:{type:Object,required:!0}},setup:function setup(props){return{fullLicenseName:Object(runtime.a)((function(){return Object(license.a)(props.media.license,props.media.license_version)}))}}}),componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(VMediaInfo_VMediaReusevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{attrs:{"aria-label":_vm.$t("media-details.reuse.title")}},[_c("h3",{staticClass:"text-2xl md:text-3xl mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.title"))+"\n  ")]),_vm._v(" "),_c("div",{staticClass:"grid md:grid-cols-2 gap-6"},[_c("VMediaLicense",{attrs:{license:_vm.media.license,"license-url":_vm.media.license_url,"full-license-name":_vm.fullLicenseName}}),_vm._v(" "),_c("VCopyLicense",{attrs:{media:_vm.media,"full-license-name":_vm.fullLicenseName}})],1)])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMediaLicense:__webpack_require__(1325).default,VCopyLicense:__webpack_require__(1324).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaReuse",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"object"},required:!0}]}},1334:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(13),__webpack_require__(25),__webpack_require__(12),__webpack_require__(27),__webpack_require__(6);var defineProperty=__webpack_require__(9),vuex_esm=__webpack_require__(209),store_modules=__webpack_require__(94),Case=__webpack_require__(228);function getProviderName(providersList,providerCode){if(!providersList)return Object(Case.capital)(providerCode)||"";var provider=providersList.filter((function(p){return p.source_name===providerCode}))[0];return provider?provider.display_name:Object(Case.capital)(providerCode)||""}var VLink=__webpack_require__(57),VAudioThumbnail=__webpack_require__(134),VMediaTag=__webpack_require__(208);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var VAudioDetails_VAudioDetailsvue_type_script_lang_js_={name:"VAudioDetails",components:{VAudioThumbnail:VAudioThumbnail.default,VLink:VLink.default,VMediaTag:VMediaTag.default},props:["audio"],computed:_objectSpread(_objectSpread({},Object(vuex_esm.d)(store_modules.b,["audioProviders"])),{},{providerName:function providerName(){return getProviderName(this.audioProviders,this.$props.audio.provider)},sourceName:function sourceName(){return getProviderName(this.audioProviders,this.$props.audio.source)}})},componentNormalizer=(__webpack_require__(1395),__webpack_require__(7)),component=Object(componentNormalizer.a)(VAudioDetails_VAudioDetailsvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{staticClass:"audio-info"},[_c("h4",{staticClass:"text-base lg:text-3xl mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("audio-details.information"))+"\n  ")]),_vm._v(" "),_c("div",{staticClass:"flex flex-col md:flex-row items-start gap-6"},[_c("div",{staticClass:"w-[75px] h-[75px] lg:w-30 lg:h-30 rounded-sm overflow-hidden"},[_c("VAudioThumbnail",{attrs:{audio:_vm.audio}})],1),_vm._v(" "),_c("div",{staticClass:"flex flex-col gap-4 lg:gap-6 flex-grow"},[_vm.audio.description?_c("p",{staticClass:"mb-6"},[_vm._v(_vm._s(_vm.audio.description))]):_vm._e(),_vm._v(" "),_c("ul",{staticClass:"flex flex-wrap gap-2"},_vm._l(_vm.audio.tags.filter((function(i){return!!i})),(function(tag,index){return _c("VMediaTag",{key:index,attrs:{tag:"li"}},[_vm._v("\n          "+_vm._s(tag.name)+"\n        ")])})),1),_vm._v(" "),_vm.audio?_c("dl",[_vm.audio.audio_set?_c("div",[_c("dt",[_vm._v(_vm._s(_vm.$t("audio-details.table.album")))]),_vm._v(" "),_c("dd",[_c("VLink",{attrs:{href:_vm.audio.audio_set.url}},[_vm._v(_vm._s(_vm.audio.audio_set.name))])],1)]):_vm._e(),_vm._v(" "),_vm.audio.category?_c("div",[_c("dt",[_vm._v(_vm._s(_vm.$t("audio-details.table.category")))]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.category)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.sample_rate?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.sample-rate"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.sample_rate)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.filetype?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.filetype"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.filetype.toUpperCase())+"\n          ")])]):_vm._e(),_vm._v(" "),_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.provider"))+"\n          ")]),_vm._v(" "),_c("dd",[_c("VLink",{attrs:{href:_vm.audio.foreign_landing_url}},[_vm._v("\n              "+_vm._s(_vm.providerName)+"\n            ")])],1)]),_vm._v(" "),_vm.audio.source&&_vm.sourceName!==_vm.providerName?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.source"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.sourceName)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.genres&&_vm.audio.genres.length>0?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.genre"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.genres.join(", "))+"\n          ")])]):_vm._e()]):_vm._e()])])])}),[],!1,null,"974fd59c",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioThumbnail:__webpack_require__(134).default,VMediaTag:__webpack_require__(208).default,VLink:__webpack_require__(57).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioDetails",exportName:"default",description:"",tags:{},props:[{name:"audio",type:{name:"undefined"}}]}},1343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),media=__webpack_require__(26),use_related=__webpack_require__(1369),use_media_query=__webpack_require__(133),LoadingIcon=__webpack_require__(1332),VAudioDetails_VRelatedAudiovue_type_script_lang_js_={name:"VRelatedAudio",components:{VAudioTrack:__webpack_require__(188).default,LoadingIcon:LoadingIcon.default},props:{audioId:{type:String,required:!0},service:{}},setup:function setup(props){var mainAudioId=Object(runtime.l)(props.audioId),relatedOptions={mediaType:media.b,mediaId:mainAudioId,service:void 0};props.service&&(relatedOptions.service=props.service);var isMinScreenMd=Object(use_media_query.a)("md",{shouldPassInSSR:!0});return{audioTrackSize:Object(runtime.a)((function(){return isMinScreenMd.value?"l":"s"})),audios:Object(use_related.a)(relatedOptions).media}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(VAudioDetails_VRelatedAudiovue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("aside",{attrs:{"aria-label":_vm.$t("audio-details.related-audios")}},[_c("h4",{staticClass:"text-base lg:text-3xl mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("audio-details.related-audios"))+"\n  ")]),_vm._v(" "),_vm.$fetchState.error?_vm._e():_c("div",{staticClass:"flex flex-col gap-8 lg:gap-12 mb-12"},[_vm._l(_vm.audios,(function(audio){return _c("VAudioTrack",{key:audio.id,attrs:{audio:audio,layout:"row",size:_vm.audioTrackSize}})})),_vm._v(" "),_c("LoadingIcon",{directives:[{name:"show",rawName:"v-show",value:_vm.$fetchState.pending,expression:"$fetchState.pending"}]})],2),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:!!_vm.$fetchState.error,expression:"!!$fetchState.error"}]},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.related-error"))+"\n  ")])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__(188).default,LoadingIcon:__webpack_require__(1332).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedAudio",exportName:"default",description:"",tags:{},props:[{name:"audioId",type:{name:"string"},required:!0},{name:"service"}]}},1366:function(module,exports,__webpack_require__){var content=__webpack_require__(1380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(60).default)("1ce11c38",content,!0,{sourceMap:!1})},1369:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useRelated}));var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(75),__webpack_require__(2)),_store_media__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(780);function useRelated(_ref){var mediaType=_ref.mediaType,mediaId=_ref.mediaId,_ref$service=_ref.service,service=void 0===_ref$service?_store_media__WEBPACK_IMPORTED_MODULE_3__.mediaServices[mediaType]:_ref$service,media=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_2__.l)([]);return(0,Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_2__.q)(Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a)(regeneratorRuntime.mark((function _callee(){var data;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,service.getRelatedMedia({id:mediaId.value});case 2:data=_context.sent,media.value=data.results;case 4:case"end":return _context.stop()}}),_callee)})))).fetch)(),{media:media}}},1377:function(module,exports,__webpack_require__){var content=__webpack_require__(1396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(60).default)("640d26e4",content,!0,{sourceMap:!1})},1378:function(module,exports,__webpack_require__){__webpack_require__(8),__webpack_require__(4),__webpack_require__(13),__webpack_require__(6),__webpack_require__(25),__webpack_require__(12),__webpack_require__(27);var _defineProperty=__webpack_require__(241),_objectWithoutProperties=__webpack_require__(242),_excluded=["class","staticClass","style","staticStyle","attrs"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}__webpack_require__(15),module.exports={functional:!0,render:function render(_h,_vm){var _c=_vm._c,data=(_vm._v,_vm.data),_vm$children=_vm.children,children=void 0===_vm$children?[]:_vm$children,classNames=data.class,staticClass=data.staticClass,style=data.style,staticStyle=data.staticStyle,_data$attrs=data.attrs,attrs=void 0===_data$attrs?{}:_data$attrs,rest=_objectWithoutProperties(data,_excluded);return _c("svg",function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({class:[classNames,staticClass],style:[style,staticStyle],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},attrs)},rest),children.concat([_c("g",{attrs:{id:"icon"}},[_c("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.445 18.0045L7.98638 12L13.445 5.99553L14.5549 7.00454L10.0136 12L14.5549 16.9955L13.445 18.0045Z",fill:"currentColor"}})])]))}}},1379:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1366)},1380:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(59)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".lds-ring[data-v-7f2b418a]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div[data-v-7f2b418a]{display:block;position:absolute;width:51px;height:51px;margin:6px;border-radius:50%;-webkit-animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;border:6px solid transparent;border-top-color:#3b3b3b}.lds-ring div[data-v-7f2b418a]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-7f2b418a]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-7f2b418a]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1395:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1377)},1396:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(59)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,"dl[data-v-974fd59c]{display:grid;gap:1.00rem;grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}@media (min-width: 1024px){dl[data-v-974fd59c]{gap:1.25rem}}dl div[data-v-974fd59c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}dt[data-v-974fd59c]{font-weight:400;display:inline-block}dd[data-v-974fd59c]{font-weight:700}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1411:function(module,exports,__webpack_require__){var content=__webpack_require__(1477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(60).default)("000f50ac",content,!0,{sourceMap:!1})},1476:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1411)},1477:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(59)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".audio-page{--wp-max-width:940px}.audio-page .full-track .mx-16,.audio-page aside,.audio-page section{max-width:var(--wp-max-width);margin-right:auto;margin-left:auto}.audio-page .full-track .mx-16{margin-top:1.50rem;padding-left:1.00rem;padding-right:1.00rem}@media (min-width: 768px){.audio-page .full-track .mx-16{padding-left:0;padding-right:0}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1716:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(13),__webpack_require__(25),__webpack_require__(12),__webpack_require__(27),__webpack_require__(15),__webpack_require__(11),__webpack_require__(6);var asyncToGenerator=__webpack_require__(33),defineProperty=__webpack_require__(9),vuex_esm=(__webpack_require__(75),__webpack_require__(209)),action_types=__webpack_require__(49),media=__webpack_require__(26),store_modules=__webpack_require__(94),attribution_html=__webpack_require__(519),license=__webpack_require__(518),VAudioDetails=__webpack_require__(1334),VAudioTrack=__webpack_require__(188),VBackToSearchResultsLink=__webpack_require__(1331),VRelatedAudio=__webpack_require__(1343),VMediaReuse=__webpack_require__(1333);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var audio_idvue_type_script_lang_js_={name:"AudioDetailPage",components:{VAudioDetails:VAudioDetails.default,VAudioTrack:VAudioTrack.default,VBackToSearchResultsLink:VBackToSearchResultsLink.default,VMediaReuse:VMediaReuse.default,VRelatedAudio:VRelatedAudio.default},data:function data(){return{showBackToSearchLink:!1}},computed:_objectSpread(_objectSpread({},Object(vuex_esm.d)(store_modules.a,["audio"])),{},{fullLicenseName:function fullLicenseName(){return Object(license.a)(this.audio.license,this.audio.license_version)},licenseUrl:function licenseUrl(){return"".concat(this.audio.license_url,"?ref=openverse")}}),watch:{audio:function audio(newAudio){this.id=newAudio.id}},asyncData:function asyncData(_ref){return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var store,route,error,app;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return store=_ref.store,route=_ref.route,error=_ref.error,app=_ref.app,_context.prev=1,_context.next=4,store.dispatch("".concat(store_modules.a,"/").concat(action_types.d),{id:route.params.id,mediaType:media.b});case 4:return _context.abrupt("return",{id:route.params.id});case 7:_context.prev=7,_context.t0=_context.catch(1),error({statusCode:404,message:app.i18n.t("error.media-not-found",{mediaType:media.b,id:route.params.id})});case 10:case"end":return _context.stop()}}),_callee,null,[[1,7]])})))()},beforeRouteEnter:function beforeRouteEnter(to,from,nextPage){nextPage((function(_this){from.name!==_this.localeRoute({path:"/search/"}).name&&from.name!==_this.localeRoute({path:"/search/audio"}).name||(_this.showBackToSearchLink=!0)}))},methods:{attributionHtml:function attributionHtml(){var licenseUrl="".concat(this.licenseUrl,"&atype=html");return Object(attribution_html.a)(this.audio,licenseUrl,this.fullLicenseName)}},head:function head(){var title=this.audio.title;return{title:"".concat(title," | Openverse"),meta:[{hid:"robots",name:"robots",content:"noindex"}]}}},componentNormalizer=(__webpack_require__(1476),__webpack_require__(7)),component=Object(componentNormalizer.a)(audio_idvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("main",{staticClass:"relative"},[_c("div",{staticClass:"w-full p-2"},[_c("VBackToSearchResultsLink")],1),_vm._v(" "),_c("VAudioTrack",{staticClass:"main-track",attrs:{layout:"full",audio:_vm.audio}}),_vm._v(" "),_c("div",{staticClass:"mt-10 lg:mt-16 flex flex-col gap-10 lg:gap-16 px-4 lg:px-0 lg:max-w-5xl mx-auto"},[_c("VMediaReuse",{attrs:{"data-testid":"audio-attribution",media:_vm.audio,"license-url":_vm.licenseUrl,"full-license-name":_vm.fullLicenseName,"attribution-html":_vm.attributionHtml()}}),_vm._v(" "),_c("VAudioDetails",{attrs:{"data-testid":"audio-info",audio:_vm.audio}}),_vm._v(" "),_vm.audio.id?_c("VRelatedAudio",{attrs:{"audio-id":_vm.audio.id}}):_vm._e()],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VBackToSearchResultsLink:__webpack_require__(1331).default,VAudioTrack:__webpack_require__(188).default,VMediaReuse:__webpack_require__(1333).default,VAudioDetails:__webpack_require__(1334).default,VRelatedAudio:__webpack_require__(1343).default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioDetailPage",exportName:"default",description:"",tags:{}}}}]);