module.exports = {
    url: 'https://check-kkx3.zhp-online.de/x3/de/',
    elements: {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        submitButton: '#ext-gen48'
    },
    commands: [{
        setUser(){
            const username = 'zhp.benea'
            return this
                .setValue('@usernameInput', username);
        },
        setPass(){
            const password = 'ungam+30'
            return this
                .setValue('@passwordInput', password);
        },
        login(){
            return this
                .click('@submitButton');
        }
    }]
}