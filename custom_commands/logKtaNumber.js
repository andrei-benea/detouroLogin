module.exports = class LogKtaNumber {
    async command(element) {
        var fs = require('fs');
        return browser
            .waitForElementVisible(element, 'Element visible')
            .getText(element, (result) => {
                fs.writeFile('tests_output/ktanumber.txt', result.value, (err) => {
                    if (err) throw err;
                    console.log('Saving KTA number to output file!')
                })
                console.log('The KTA Nr. is........ ', result.value)
            })
    }
}
// module.exports = class LogKtaNumber {
//     async command(element) {
//         var fs = require('fs');
//         const result = await browser
//             .waitForElementVisible(element, 'Element visible!')
//             .getText(element);

//         fs.writeFile('tests_output/ktanumber.txt', result, (err) => {
//             if (err) throw err;
//             console.log('KTA Number saved to output file!')
//         })
//         console.log('The KTA Nr. is:', result);
//     }
// }