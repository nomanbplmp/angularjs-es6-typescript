import LoginService from './login.service';
import MessageProxyFactory from "../commons/message.proxy";

export class LoginController{

	
	state:ng.ui.IStateService;
	loginService:any;
	user:string;
	password:string;
	
	constructor(loginService:LoginService,$state:ng.ui.IStateService){
		this.loginService = MessageProxyFactory.getProxy(loginService);
		this.state = $state;
	}

	doLogin(){
		console.log("attempting login with " + this.user + " " + this.password);
		let result = this.loginService.attempLogin(this.user,this.password);
		console.log(result);	
		this.state.go("userHome",{"welcomeMessage":result});
	}

}