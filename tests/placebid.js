module.exports = {
    '@tags': 'place-bid',

    'Place bid'(browser) {

        const login = browser.page.detouroLogin();
        const index = browser.page.detouroIndex();

        login
            .maximizeWindow()
            .navigate()
            .setUser()
            .setPass()
            .login()
            .assert.urlContains('https://qa.de-touro.de/Index')

        index
            .identifyFirstRowKta()
            .placeBid()
        
        index
            .identifyFirstRowKta()

        browser
            .saveScreenshot('tests_output/kta-details.png')
    }
}