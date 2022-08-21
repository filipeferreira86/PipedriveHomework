const json = require('../data/pages.json')
let deal_data = json.deal.data
let locators = json.dealDetail

class dealDetailPage{

    elements = {
        wrapper: () => cy.get(locators.wrapper, { timeout:40000 }).not('[style="display: none;"]'),
        title:() => this.elements.wrapper().find(locators.title, { timeout:40000 }),
        value:() => this.elements.wrapper().find(locators.value, { timeout:40000 }),
        organization:() => this.elements.wrapper().find(locators.contactname, { timeout:40000 }).eq(0),
        contact:() => this.elements.wrapper().find(locators.contactname, { timeout:40000 }).eq(1),
        close_date:() => this.elements.wrapper().find(locators.close_date, { timeout:40000 }),
        phone:() => this.elements.wrapper().find(locators.phone, { timeout:40000 }),
        email:() => this.elements.wrapper().find(locators.email, { timeout:40000 }),
        drop_menu_btn:() => this.elements.wrapper().find(locators.dropMenu, { timeout:40000 }),
        delete:() => cy.get(locators.class_delete, { timeout:40000 }).find(locators.dlt),

    }

    check_deal_data(){
        this.elements.title().should('have.text', deal_data.title)
        this.elements.value().should('contain.text', deal_data.value)
        this.elements.organization().should('contain.text', deal_data.organization)
        this.elements.contact().should('contain.text', deal_data.contact)
        this.elements.close_date().should('have.text', deal_data.check_close_date)
        this.elements.phone().should('have.text', deal_data.phone)
        this.elements.email().should('have.text', deal_data.email)
    }

    delete_added_del(){
        this.elements.drop_menu_btn().click()
        cy.get('[class="delete"]').find('[class="cui5-option "]').click()
    }

}

module.exports = new dealDetailPage()