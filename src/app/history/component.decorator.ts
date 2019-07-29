import * as angular from "angular";

export  function Component1(moduleName,selector,options){
	this.moduleName=moduleName;
	this.selector=selector;
	this.options=options;
  return (controller)=>{
  	angular.module(this.moduleName).component(this.selector, angular.extend(this.options, { controller: controller }));
  }
}


export default function Component(moduleOrName , selector, 
	options) {
  return (controller) => {
    var module =  angular.module(moduleOrName)
     
    module.component(selector, angular.extend(options, { controller: controller }));
  }
}	

