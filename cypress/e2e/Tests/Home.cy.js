/// <reference types="cypress" />


describe("Home Page Tests ",()=>{

    beforeEach(()=>{
        cy.visit("https://training.bigbyte.academy/#/") 
    })



    it('test Conduit',()=>{
        cy.xpath('//*[@id="root"]/main/div/div[2]/div/div/div[2]/a/h1').should('have.text','test2')
    })


    it('Navigate Login',()=>{
        cy.xpath("//a[@data-name='login']").click()
    })

    it('verify modal',()=>{
        cy.xpath('//*[@id="root"]/main/div/div[2]/div/div/div[2]/div/button').click()
        
    })
})