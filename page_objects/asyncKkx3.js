export default class AsyncKkx3 {
    url = 'https://check-kkx3.zhp-online.de/x3/de/';
    elements = {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        loginButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        selectGroupInput: '#ext-comp-1037',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(33)',
        loggedInUser: '#ext-comp-1181',
        treeDeTouro: '#ext-gen50 > div > li:nth-child(2) > div',
        frameMain: '[name="FDLiFrame"]',
        ktaModuleStartButton: '#ctl00_MainContent_Image1',
        ktaGridKt: '[id="ctl00_MainContent_ASPxGridViewDrives_DXMainTable"]',
        newKtaButton: '#ctl00_MainContent_linkButtonNewKta',
        ktaNrSearchInput: '[name="ctl00$MainContent$ASPxGridViewDrives$DXFREditorcol2"]',
    };
    async initPage() {
        return browser
            .maximizeWindow()
            .url(this.url)
            .assert.urlContains(this.url)
    };
    async loginKt() {
        return browser
            .customLogin(this.elements.usernameInput, this.elements.passwordInput, this.elements.loginButton)
            .customClick(this.elements.kkSwitchButton)
            .customClick(this.elements.kkDeTouroGroup)
            .customAssertText(this.elements.loggedInUser, 'Andrei Benea')
    };
    async loadDeTouro() {
        return browser
            .customClick(this.elements.treeDeTouro)
            .customFrameSwitch(this.elements.frameMain, 0)
    };
    async loadKtaModule() {
        return browser
            .customClick(this.elements.ktaModuleStartButton)
            .waitForElementVisible(this.elements.ktaGridKt, 'KTA grid loaded!')
    };
    async saveNewKta() {
        return browser
            .customClick(this.elements.newKtaButton)
    }
};