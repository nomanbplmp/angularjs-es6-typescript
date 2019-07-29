export default class MessageProxyFactory {

  static getProxy(obj){
   	 let handler = {
        get: function(target, propKey, receiver) {
            const origMethod = target[propKey];
            return function (...args) {
                let result = origMethod.apply(this, args);
                console.log(result);
                return "Proxied ";
            };
        }
    };
    return  new Proxy(obj, handler);;
   }

	
}

