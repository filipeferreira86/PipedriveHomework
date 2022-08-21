const json = require('../data/pages.json')
let data = json.deal.data
let locators = json.deal
let list_size

class dealsPage{

    elements = {
        new_deal_btn: () => cy.get(locators.newDealBtn, { timeout:40000 }),
        organization: () => cy.get(locators.addDeal.organization, { timeout:40000 }),
        contact: () => cy.get(locators.addDeal.contact, { timeout:40000 }),
        title: () => cy.get(locators.addDeal.title, { timeout:40000 }),
        value: () => cy.get(locators.addDeal.compound_input, { timeout:40000 }).eq(0),
        close_date: () => cy.get(locators.addDeal.closeDate, { timeout:40000 }),
        phone: () => cy.get(locators.addDeal.compound_input, { timeout:40000 }).eq(1),
        email: () => cy.get(locators.addDeal.compound_input, { timeout:40000 }).eq(2),
        save: () => cy.get(locators.addDeal.save, { timeout:40000 }),
        deals_list: () => cy.get(locators.dealsList, { timeout:40000 }).eq(0),
        error_message_field: () => cy.get(locators.addDeal.error_message_field, { timeout:40000 }).eq(0)
    }

    create_new_deal(){
        this.elements.new_deal_btn().click()
    }

    new_deal_with_json(){
        this.elements.contact().type(data.contact)
        this.elements.organization().type(data.organization)
        this.elements.title().clear()
        this.elements.title().type(data.title)
        this.elements.value().type(data.value)
        this.elements.close_date().type(data.close_date)
        this.elements.phone().type(data.phone)
        this.elements.email().type(data.email)
    }
    
    save_deal(){
        this.elements.save().click()
        
    }

    get_deals_list(){
        return this.elements.deals_list().find('[data-test="pipeline-deal-tile"]')
    }

    wait_until_modal_disapear(){
        cy.get('[data-test="add-modal"]')
    }

    wait_deal_modal_disapear(){
        this.elements.save().should('not.exist', { timeout: 10000 })
    }


    new_deal_with_json_except(excep){
        if(excep!="Contact person"){
            this.elements.contact().type(data.contact)
        }
        if(excep!="Organization"){
            this.elements.organization().type(data.organization)
        }
        this.elements.title().clear()
        if(excep!="Title"){
            
            this.elements.title().type(data.title)
        }
        /*this.elements.value().type(data.value)
        this.elements.close_date().type(data.close_date)
        this.elements.phone().type(data.phone)
        this.elements.email().type(data.email)*/
    }

    clear_field(field_to_clear){
        switch (field_to_clear){
            case "Contact person":
                this.elements.contact().clear().type('')
                break
            case "Organization":
                this.elements.organization().clear().type('')
                break
            case "Title":
                this.elements.title().clear().type('')
                break
            default:
                throw new Error("field not found")
        }
    }

    validate_error_message(field_empty){
        switch(field_empty){
            case "Contact person":
                this.elements.error_message_field().should('contain.text', data.error_message_contact)
                break
            case "Organization":
                this.elements.error_message_field().should('contain.text', data.error_message_organization)
                break
            case "Title":
                this.elements.error_message_field().should('contain.text', data.error_message_title)
                break
            default:
                throw new Error("field not found")
        }
    }
}

module.exports = new dealsPage()