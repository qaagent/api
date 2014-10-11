define(function() {

        var IDENTIFIER = "qaagent-ide";

        //To enable plugin in your page add <div id="qaagent-ide" style="display: none;"></div> somewhere in the body
        var version;

        return {

            isInstalled: function() {
                var element = document.getElementById(IDENTIFIER);

                if (element != "undefined" &&
                    element != null &&
                    element.id.length > 0 &&
                    element.innerHTML.length > 0) {
                    version = element.innerHTML;
                    console.log('QA Agent Plugin Version: ' + version);
                } else {
                    alert("Please load the chrome extension first! For more details check this out ");
                    var answer = confirm("Please load the chrome extension first.")
                    if (answer) {
                        window.location = "https://developer.chrome.com/extensions/getstarted#unpacked";
                    }
                }
            },

            getVersion: function() {

                return version;
            }
        }

    });
