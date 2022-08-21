const json = require('../data/pages.json')
let data = json.login.data
let locators = json.login

class loginPage{


    elements = {
        username: () => cy.get(locators.username),
        password: () => cy.get(locators.password),
        loginbtn: () => cy.get(locators.btnlogin)
    }

    type_username(username){
        this.elements.username().type(username)
    }

    type_password(password){
        this.elements.password().type(password)
    }

    click_on_login(){
        this.elements.loginbtn().click()
    }

    login_with_json(){
        this.type_username(data.Username)
        this.type_password(data.Password)
        this.click_on_login()
    }


}

module.exports = new loginPage()