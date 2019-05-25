// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/Preset.html":'\x3cdiv class\x3d"esriCTPresetPopUpDiv"\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopUpLabel"\x3e${nls.intersectionPage.groupNameLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopupdijitWrapper"\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"groupNameDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopUpLabel"\x3e${nls.intersectionPage.dataTypeLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopupdijitWrapper"\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"dataTypeDropdownDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopUpLabel"\x3e${nls.presetPopup.presetValueLAbel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopupdijitWrapper" data-dojo-attach-point \x3d"presetValuedijitWrapper"\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"presetValueDiv"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%; margin-top:2px" data-dojo-attach-point\x3d"presetValueTimeNodeDiv"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-btn esriCTSelectValueBtn esriCTHidden" data-dojo-attach-point\x3d"selectPresetValueBtn" data-dojo-attach-event\x3d"onClick:_onSelectPresetValueButtonClick"\x3e${nls.chooseFromLayer.selectValueLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.smartActionsPage.layerAndFieldsApplyLabel}\x3c/legend\x3e\r\n            \x3cdiv class\x3d"esriCTTableParentContainer" data-dojo-attach-point\x3d"tableParentContainer"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/fieldset\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/text!./Preset.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup dijit/form/Select dijit/form/ValidationTextBox ./ChooseFromLayer dojo/dom-class dijit/form/DateTextBox dijit/form/NumberTextBox dijit/form/TimeTextBox ./layersAndFieldsApplyOn ../presetUtils".split(" "),function(n,p,c,f,g,k,q,r,t,u,v,h,w,l,x,y,z,A,m){return n([t,p,r],{baseClass:"jimu-widget-smartEditor-setting-presetPopup",
templateString:q,groupNameTextBox:null,dataTypeDropdown:null,hasDomainField:null,presetValueDijitNode:null,presetValueTimeNode:null,ValidFieldsByTypeToApplyOn:{esriFieldTypeInteger:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeGUID:["esriFieldTypeGUID"],esriFieldTypeDate:["esriFieldTypeDate"],esriFieldTypeString:["esriFieldTypeString"]},postCreate:function(){this.inherited(arguments);this._isDomainField();this._initControls();this.isDelete||
this.showDialog()},_initControls:function(){this.groupNameTextBox=new h({required:!0,trim:!0,style:{width:"100%"}});this.groupNameTextBox.placeAt(this.groupNameDiv);this.groupNameTextBox.validator=c.hitch(this,function(a){return a?a!==this.prevName&&-1<this.existingGroupNames.indexOf(a)?(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.uniqueGroupNameMsg),!1):!0:(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.requiredGroupNameMsg),!1)});this.groupNameTextBox.startup();
this.name&&this.groupNameTextBox.set("value",this.name);this.dataTypeDropdown=new v({options:this._addDataTypeOptions(),style:{width:"100%"}});this.own(k(this.dataTypeDropdown,"change",c.hitch(this,this._createValueDijit)));this.dataTypeDropdown.placeAt(this.dataTypeDropdownDiv);this.dataTypeDropdown.startup();this.dataType&&(this.dataTypeDropdown.set("value",this.dataType,!1),this._createValueDijit(this.dataType,this.presetValue))},_createValueDijit:function(a,b){var e,d=null;(e=this.createDijitOnDataTypeChange(a))&&
0<e.length&&(this.presetValueDijitNode=e[0],this.presetValueDijitNode.placeAt(this.presetValueDiv),this.presetValueDijitNode.startup(),1<e.length?(this.presetValueDijitNode=e[0],this.presetValueTimeNode=e[1],this.presetValueTimeNode.placeAt(this.presetValueTimeNodeDiv),this.presetValueTimeNode.startup(),b&&1<b.length&&(d=b[0]),d=""===d||null===d?null:new Date(d),this.presetValueDijitNode.set("value",d),this.presetValueTimeNode.set("value",d)):b&&0<b.length&&this.presetValueDijitNode.set("value",b[0]),
this.displaySelectValueButton(a),this._createLayersAndFields(a))},_addDataTypeOptions:function(){return[{label:this.nls.dataType.esriFieldTypeString,value:"esriFieldTypeString"},{label:this.nls.dataType.esriFieldTypeInteger,value:"esriFieldTypeInteger"},{label:this.nls.dataType.esriFieldTypeDate,value:"esriFieldTypeDate"},{label:this.nls.dataType.esriFieldTypeGUID,value:"esriFieldTypeGUID"}]},_isDomainField:function(){f.forEach(this._totalLayers,c.hitch(this,function(a){f.some(a.layerObject.fields,
c.hitch(this,function(a){if(a.domain&&"codedValue"===a.domain.type)return this.hasDomainField=!0}))}))},displaySelectValueButton:function(a){this.hasDomainField&&("esriFieldTypeString"===a||"esriFieldTypeInteger"===a?l.remove(this.selectPresetValueBtn,"esriCTHidden"):l.add(this.selectPresetValueBtn,"esriCTHidden"))},_createLayerFieldsFilter:function(a){var b=[],e={};f.forEach(this._totalLayers,c.hitch(this,function(d){(!d.isTable||d.isTable&&0<d.layerObject.relationships.length)&&f.forEach(d.layerObject.fields,
c.hitch(this,function(c){this.ValidFieldsByTypeToApplyOn[a]&&(b=this.ValidFieldsByTypeToApplyOn[a],-1<b.indexOf(c.type)&&c.editable&&(e[d.id]||(e[d.id]={}),e[d.id][c.name]=c))}))}));return e},_createLayersAndFields:function(a){this._layerAndFieldsApplyOnObj=new A({map:this.map,layerInfos:this.layerInfos,_configInfos:this._configInfos,actionName:"Preset",nls:this.nls,prevName:this.prevName,existingGroups:this.existingGroups,_configuredPresetInfos:this._configuredPresetInfos,layerDetails:this._createLayerFieldsFilter(a),
appliedOn:this.appliedOn});g.empty(this.tableParentContainer);this._layerAndFieldsApplyOnObj.placeAt(this.tableParentContainer);this._layerAndFieldsApplyOnObj.startup()},deleteGroup:function(){this._layerAndFieldsApplyOnObj.deleteGroup()},showDialog:function(){this.presetPopup=new u({titleLabel:this.nls.fieldsPage.fieldsSettingsTable.canPresetValue,width:750,maxHeight:500,autoHeight:!1,"class":this.baseClass,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var a,b;b={presetValue:[]};
this.groupNameTextBox.isValid()?this.presetValueDijitNode.isValid()?this.presetValueTimeNode&&!this.presetValueTimeNode.isValid()?this.presetValueTimeNode.focus():(b.name=this.groupNameTextBox.get("value"),b.dataType=this.dataTypeDropdown.get("value"),this.presetValueTimeNode?(a=m.getDateFieldValue({type:"esriFieldTypeDate"},[this.presetValueDijitNode,this.presetValueTimeNode]),b.presetValue.push(a),b.presetValue.push(a)):this.presetValueDijitNode&&b.presetValue.push(this.presetValueDijitNode.get("value")),
b.appliedOn=this._layerAndFieldsApplyOnObj.getCheckedFields(b),this.emit("groupInfoUpdated",b),this.presetPopup.close()):this.presetValueDijitNode.focus():this.groupNameTextBox.focus()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){this.presetPopup.close()})}]})},createDijitOnDataTypeChange:function(a){var b=[];g.empty(this.presetValueDiv);g.empty(this.presetValueTimeNodeDiv);this.presetValueDijitNode=this.presetValueTimeNode=null;switch(a){case "esriFieldTypeDate":a=
new x({style:{width:"100%"}});b.push(a);a=new z({style:{width:"100%"}});b.push(a);break;case "esriFieldTypeSmallInteger":case "esriFieldTypeInteger":case "esriFieldTypeSingle":case "esriFieldTypeDouble":a=new y({style:"width:100%"});b.push(a);break;case "esriFieldTypeGUID":a=new h({style:"width:100%"});a.validator=c.hitch(this,m.isGuid);b.push(a);break;default:a=new h({required:!1,trim:!0,style:{width:"100%"}}),b.push(a)}return b},_onSelectPresetValueButtonClick:function(){this.ChooseFromLayerObj=
new w({map:this.map,nls:this.nls,allLayers:this._totalLayers});k(this.ChooseFromLayerObj,"updatePresetValue",c.hitch(this,function(a){this.presetValueDijitNode.set("value",a)}))}})});