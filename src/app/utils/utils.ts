export class Utils {
	constructor() {}

  	setCustomerSessionId(csid: string) {
  		console.log('csid', csid)
  		localStorage.setItem("cdSetCsid", csid);
    }

    randomString(length: number, chars: string) {
    	let result = '';
    	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    	return result;
  	};
};