export default class AsyncDtIndex {
    url = 'https://qa.de-touro.de/Index';
    elements = {
        ktaHeaderMyAssignedRides: '[class="x-toolbar navigation-panel x-box-item x-toolbar-default x-table-layout-ct"] > table > tbody > tr:nth-child(2) > td:nth-child(4) [class="x-btn-button"]',
        ktaGridBody: '[class="x-panel-body x-panel-body-default x-layout-fit x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"]',
        ktaHeaderKtaNr: '[id="tab1"] [class="x-panel view-panel x-box-item x-panel-default"] > div >div:nth-child(2) [class="x-grid-header-ct x-docked x-grid-header-ct-default x-docked-top x-grid-header-ct-docked-top x-grid-header-ct-default-docked-top x-box-layout-ct x-docked-noborder-top x-docked-noborder-right x-docked-noborder-left"] > div > div > div:nth-child(6)',
        ktaHeaderAssignedRidesKtaNr: '[id="tab1"] [class="x-panel x-grid-with-col-lines x-grid-no-row-lines x-fit-item x-panel-default x-grid"] [class="x-column-header x-column-header-align-center x-box-item x-column-header-default x-unselectable"]:nth-child(8)',
        ktaHeaderKtaNrFilterArrow: '[id="tab1"] [class="x-panel view-panel x-box-item x-panel-default"] > div >div:nth-child(2) [class="x-grid-header-ct x-docked x-grid-header-ct-default x-docked-top x-grid-header-ct-docked-top x-grid-header-ct-default-docked-top x-box-layout-ct x-docked-noborder-top x-docked-noborder-right x-docked-noborder-left"] > div > div > div:nth-child(6) > div > div',
        ktaHeaderAssignedRidesKtaNrFilterArrow: '[class="x-column-header x-column-header-align-center x-box-item x-column-header-default x-unselectable x-column-header-sort-ASC"] > div > div',
        ktaFooterRefreshButton: '[data-qtip="Aktualisieren"]',
        ktaFooterPageNumber: '[class="x-toolbar x-docked x-toolbar-default x-docked-bottom x-toolbar-docked-bottom x-toolbar-default-docked-bottom x-box-layout-ct x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"] [class="x-toolbar-text x-box-item x-toolbar-item x-toolbar-text-default"]:last-child',
        ktaGridSingleRow: '[data-recordindex="0"]',
        ktaGridRowReadBidField: '[class="x-grid-row x-grid-data-row"] > td:nth-child(15)',
        ktaGridRowUnread: '[class="x-grid-row tour-grid-unread-row x-grid-data-row"]',
        ktaGridRowUnreadBidField: '[class="x-grid-row tour-grid-unread-row x-grid-data-row"] > td:nth-child(15)',
        ktaGridRowAltReadBidField: '[class="x-grid-row x-grid-row-alt x-grid-data-row"] > td:nth-child(15)',
        ktaGridRowAltUnread: '[class="x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row"]',
        ktaGridRowAltUnreadBidField: '[class="x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row"] > td:nth-child(15)',
        ktaGridFilterBoxInput: '[class="x-panel x-layer x-panel-menupanel x-menu x-menu-plain x-border-box"] [class="x-form-field x-form-text"]',
        ktaGridButton: '[id="gridcolumn-1355-titleEl"]',
        ktaGridFilterArrow: "div[id='gridcolumn-1355-triggerEl']",
        ktaGridAssignedRidesSingleRow: '[class="x-panel-body x-panel-body-default x-layout-fit x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"] > div:nth-child(3) > div:nth-child(2) > div > table > tbody > tr',
        ktaGridAssignedRidesUploadProofButton: '[class="x-panel-body x-panel-body-default x-layout-fit x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"] > div:nth-child(3) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(5)',
        ktaGridAssignedRidesExistingProofButton: '[class="x-panel-body x-panel-body-default x-layout-fit x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"] > div:nth-child(3) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(4)',
        ktaDetailsContainer: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"]',
        ktaDetailsContainerTitleSection: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"] [class="x-panel-body x-panel-body-default x-box-layout-ct x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"] > div > div',
        ktaDetailsDaIdentifier: '[class="x-component da-text x-box-item x-component-default"]',
        ktaDetailsBaIdentifier: '[class="x-component ba-text x-box-item x-component-default"]',
        ktaDetailsPlaceBidButtonKta: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        ktaDetailsPlaceBidButtonDa: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(4)',
        ktaDetailsPlaceBidButtonBa: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(4)',
        ktaDetailsBidInput: '[class="x-form-field x-form-required-field x-form-text"]',
        ktaDetailsMwst19Button: '[id="mwst19-btnEl"]',
        ktaDetailsInnerPlaceBidButton: '[class="x-window bid-body x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        ktaDetailsInnerConfirmBidButton: '[class="x-window x-message-box x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        uploadProofWindowTopSection: '[class="x-panel upload-form-field x-grid-with-col-lines x-grid-no-row-lines x-panel-default x-grid"]',
        uploadProofWindowTourTypComboBox: '[class="x-form-field x-form-text x-form-focus x-field-form-focus x-field-default-form-focus"]',
        uploadProofWindowFileInput: 'input[id="certificateFile-button-fileInputEl"]',
        uploadProofWindowFileInputx: 'input[id="certificateFile-inputEl"]',
        uploadProofWindowFileInputy: '[id="certificateFile-browseButtonWrap"] > a > input',
        uploadProofWindowOkButton: '[class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon"]:nth-child(1)',
        uploadProofWindowConfirmationButton: '[class="x-window x-message-box x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] > div:nth-child(3) > div > div > a:nth-child(2)',
        uploadProofLocatorA: '[id="certificateFile-inputRow"]',
        uploadProofLocatorB: '[id="certificateFile-bodyEl"]',
        uploadProofLocatorB: '[id="certificateFile-bodyEl"]',
        uploadProofLocatorC: '[id="certificateFile-triggerWrap"]',
        uploadProofLocatorD: '[id="certificateFile-inputCell"]',
        uploadProofLocatorE: '[id="certificateFile-browseButtonWrap"]',
        uploadProofLocatorF: '[class="upload-btn x-form-file-btn x-unselectable upload-btn-default-small"]',
        uploadProofLocatorG: '[id="certificateFile-button-btnWrap"]',
        uploadProofLocatorH: '[id="certificateFile-button-btnEl"]',
        uploadProofLocatorI: '[id="certificateFile-inputEl"]',
    };
    async placeBid() {
        const fs = require('fs');
        fs.readFile('tests_output/ktainfo.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let ktaInfo = JSON.parse(data);
                console.log('KTA details are: ', ktaInfo)
                browser
                    .pause(3000)
                    .customClick(this.elements.ktaHeaderKtaNr)
                    .customClick(this.elements.ktaHeaderKtaNrFilterArrow)
                    .customSetValue(this.elements.ktaGridFilterBoxInput, ktaInfo.kta.number)
                    .pause(2000)
                    .customRefreshLe(this.elements.ktaFooterRefreshButton, this.elements.ktaFooterPageNumber)
                    .waitForElementVisible(this.elements.ktaGridSingleRow, 'Successfully filtered KTA list!')
                    .doubleClick(this.elements.ktaGridSingleRow)
                    .waitForElementVisible(this.elements.ktaDetailsContainer, 'Successfully loaded KTA details!')
                    .saveScreenshot('tests_output/a-test-screen.png')
                if (ktaInfo.kta.type === 'DA') {
                    browser
                        .customClick(this.elements.ktaDetailsPlaceBidButtonDa)
                        .customSetValue(this.elements.ktaDetailsBidInput, '123')
                        .customClick(this.elements.ktaDetailsMwst19Button)
                        .customClick(this.elements.ktaDetailsInnerPlaceBidButton)
                        .customClick(this.elements.ktaDetailsInnerConfirmBidButton)
                        .pause(2000)
                        .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        .saveScreenshot('tests_output/a-test-screen-da.png')
                }
                else if (ktaInfo.kta.type === 'BA') {
                    browser
                        .customClick(this.elements.ktaDetailsPlaceBidButtonBa)
                        .pause(2000)
                        .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        .saveScreenshot('tests_output/a-test-screen-ba.png')
                }
                else if (ktaInfo.kta.type === 'KTA') {
                    browser
                        .customClick(this.elements.ktaDetailsPlaceBidButtonKta)
                        .customSetValue(this.elements.ktaDetailsBidInput, '123')
                        .customClick(this.elements.ktaDetailsMwst19Button)
                        .customClick(this.elements.ktaDetailsInnerPlaceBidButton)
                        .customClick(this.elements.ktaDetailsInnerConfirmBidButton)
                        .pause(2000)
                        .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        .saveScreenshot('tests_output/a-test-screen-kta.png')
                }
            }
        });
    };
    async simulateRide() {
        const fs = require('fs');
        fs.readFile('tests_output/ktainfo.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let ktaInfo = JSON.parse(data);
                console.log('KTA details are: ', ktaInfo)
                browser
                    .pause(5000)
                    .customClick(this.elements.ktaHeaderMyAssignedRides)
                    .pause(5000)
                    .customClick(this.elements.ktaHeaderAssignedRidesKtaNr)
                    .customClick(this.elements.ktaHeaderAssignedRidesKtaNrFilterArrow)
                    .pause(2000)
                    .customSetValue(this.elements.ktaGridFilterBoxInput, ktaInfo.kta.number)
                    .pause(2000)
                    .customRefreshLe(this.elements.ktaFooterRefreshButton, this.elements.ktaFooterPageNumber)
                    .waitForElementVisible(this.elements.ktaGridAssignedRidesSingleRow, 'Successfully filtered KTA list!')
                    .customClick(this.elements.ktaGridAssignedRidesUploadProofButton)
                    .customClick(this.elements.uploadProofWindowTopSection)
                    .customSetValue(this.elements.uploadProofWindowTourTypComboBox, 'Hin- und Rückfahrt')
                    .sendKeys(this.elements.uploadProofWindowTourTypComboBox, [browser.Keys.ENTER])
                    .setValue(this.elements.uploadProofWindowFileInput, require('path').resolve(__dirname + '/../tests_input/test-image.PNG'))
                    .customClick(this.elements.uploadProofWindowOkButton)
                    .customClick(this.elements.uploadProofWindowConfirmationButton)
                    .pause(2000)
            }
        });
    }
////////////////////////////////////////////////////////////////////////////////
///////////////// LOOP (through all orders w/o bids) CODE BELOW ////////////////
////////////////////////////////////////////////////////////////////////////////
    async checkForUnreadKtas() {
        browser
            .pause(5000)
            .saveScreenshot('tests_output/detouroLE.png')
            .elements('css selector', this.elements.ktaGridRowUnread, (object) => {
                let items = object[Object.keys(object)[0]]
                browser.elements('css selector', this.elements.ktaGridRowAltUnread, (object) => {
                    let itemsAlt = object[Object.keys(object)[0]]
                    let itemsAll = items.length + itemsAlt.length
                    if (itemsAll != 0) {
                        console.log('Unread KTAs available: ', itemsAll)
                        for (let i = 0; i < items.length; i++) {
                            browser
                                .doubleClick(items[i])
                                .waitForElementVisible(this.elements.ktaDetailsContainer)
                                .getAttribute(this.elements.ktaDetailsDaIdentifier, 'style', (result) => {
                                    console.log(result)
                                    if (result.value === 'right: auto; left: 0px; margin: 0px; width: 930px; top: 53px;') {
                                        browser
                                            .getText(this.elements.ktaDetailsDaIdentifier, (text) => {
                                                console.log(text)
                                                if (text.value === 'Direkt-Anfrage (DA)') {
                                                    browser
                                                        .customClick(this.elements.ktaDetailsPlaceBidButtonDa)
                                                        .customSetValue(this.elements.ktaDetailsBidInput, '123')
                                                        .customClick(this.elements.ktaDetailsMwst19Button)
                                                        .customClick(this.elements.ktaDetailsInnerPlaceBidButton)
                                                        .customClick(this.elements.ktaDetailsInnerConfirmBidButton)
                                                        .pause(2000)
                                                }
                                                else return
                                            })
                                    }
                                    else return
                                })
                                .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        }
                        for (let i = 0; i < itemsAlt.length; i++) {
                            browser
                                .doubleClick(itemsAlt[i])
                                .waitForElementVisible(this.elements.ktaDetailsContainer)
                                .getAttribute(this.elements.ktaDetailsDaIdentifier, 'style', (result) => {
                                    console.log(result)
                                    if (result.value === 'right: auto; left: 0px; margin: 0px; width: 930px; top: 53px;') {
                                        browser
                                            .getText(this.elements.ktaDetailsDaIdentifier, (text) => {
                                                console.log(text)
                                                if (text.value === 'Direkt-Anfrage (DA)') {
                                                    browser
                                                        .customClick(this.elements.ktaDetailsPlaceBidButtonDa)
                                                        .customSetValue(this.elements.ktaDetailsBidInput, '123')
                                                        .customClick(this.elements.ktaDetailsMwst19Button)
                                                        .customClick(this.elements.ktaDetailsInnerPlaceBidButton)
                                                        .customClick(this.elements.ktaDetailsInnerConfirmBidButton)
                                                        .pause(2000)
                                                }
                                                else return
                                            })
                                    }
                                    else return
                                })
                                .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        }
                    }
                    else {
                        console.log('No unread KTAs!')
                    }
                })
            })
    }
};