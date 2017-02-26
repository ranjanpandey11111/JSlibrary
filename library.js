function $(selector){
var self ={};
self.selector=selector;
self.element=document.querySelector(self.selector);
self.html=function(){
return self.element;
}
self.attr=function(name,value){
	 if(!value) return self.element.getAttribute(name);
}
return self;
}