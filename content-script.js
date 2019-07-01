
var button = document.createElement("Button");
button.innerHTML = "Install extension in Chromium";
button.style = "top:100px; right:45px; position:fixed; z-index:9999; width:125px; background:white; color:#1a73e8;; font-family: 'Google Sans',Roboto,Arial,sans-serif; box-shadow:0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3); border-radius: 12px; letter-spacing: .01785714em; font-size: .875rem; font-weight: 500; line-height: 1.25rem; padding:5px; ";
button.onclick= function() {
	var browser = get_browser();
	var browser_version = browser.version + '.0';
	var href = location.href;
	if(href.includes('?')) {
    		href = href.substring(0, href.indexOf('?'));
	}
	var ext_id = href.match(/([^\/]*)\/*$/)[1];
	var final_url = 'https://clients2.google.com/service/update2/crx?response=redirect&prodversion=' + browser_version + '&x=id%3D' + ext_id + '%26installsource%3Dondemand%26uc'+'&acceptformat=crx3';

	window.location.href = final_url;
}

document.body.appendChild(button);

function get_browser() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
            name: 'IE',
            version: (tem[1] || '')
        };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
            return {
                name: 'Opera',
                version: tem[1]
            };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}

