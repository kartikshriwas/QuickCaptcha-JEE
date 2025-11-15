(function () {
    function extractAndFill() {
        try {
            const loginBtn = document.querySelector("#ctl00_ContentPlaceHolder1_btnsignin");
            if (!loginBtn) return;
            const onclickAttr = loginBtn.getAttribute("onclick");
            if (!onclickAttr) return;
            const match = onclickAttr.match(/AppLogin_Validator\('([A-Za-z0-9]+)'\)/);
            if (match && match[1]) {
                const fullCode = match[1];
                const captcha = fullCode.substring(0, 6);
                const secPinInput = document.querySelector("#ctl00_ContentPlaceHolder1_txtsecpin");
                if (secPinInput) {
                    secPinInput.value = captcha;
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
    extractAndFill();
    const observer = new MutationObserver(extractAndFill);
    observer.observe(document.body, { childList: true, subtree: true });
})();