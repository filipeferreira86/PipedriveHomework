import {Given, When,And,Then} from "@badeball/cypress-cucumber-preprocessor";
const login = require('../pages/loginPage')
let dealsPage
let deals_list_before
let deal_detail


Given('that Im logged in the pipedrive CRM', ()=>{
    cy.viewport(1920, 1080)
    cy.visit('/')
    login.login_with_json()
})

When('I click over the +Deal button', ()=>{
    dealsPage  = require('../pages/dealsPage')
    dealsPage.get_deals_list().its('length').then((size) =>{
        deals_list_before =  size
    })
    dealsPage.create_new_deal()
})

And ('I fill the data for a new deal', ()=>{
    dealsPage.new_deal_with_json()
})

And('click on save', ()=>{
    dealsPage.save_deal()
    dealsPage.wait_deal_modal_disapear()
})

And('click on the item added', ()=>{
    dealsPage.get_deals_list().its('length').should('eq', deals_list_before+1)
    cy.get('[class="sc-djUGQo dnvGGk"]').eq(0).contains('new deal Title').click()
})

And('I fill the data for a new deal except {string}', (field_to_clear)=>{
    dealsPage.new_deal_with_json_except(field_to_clear)
})

Then('a message of error should be presented for {string} field', (field_empty)=>{
    dealsPage.validate_error_message(field_empty)
})

Then('the data shown should be the same as inputed', ()=>{
    deal_detail = require('../pages/dealDetailPage')
    deal_detail.check_deal_data()
    deal_detail.delete_added_del()
})
