
describe('check sign up functionality',()=>{
    beforeEach(function (){
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('To verify signup Functionality',()=>{
        cy.get('#signin2').click()
        cy.get('#sign-username').type("Prasadd")
        cy.get('#sign-password').type("Prasad@123")
        cy.contains('Sign up').click()
    })

    it('To verify Login Functionality',()=>{
        cy.login("Prasadd","Prasad@123") 
    })

    it('To verify logout Functionality',()=>{
        cy.login("Prasadd","Prasad@123")
        cy.get('#logout2').click({force:true})
    })

    it('To verify Login Functionality',()=>{
        cy.login("Prasadd","Prasad@123")
    })

    it('To verify Fill details in Contact functionality',()=>{
        cy.get('ul > li:nth-child(2) > a').click()
        cy.get("#recipient-email").type("prasaddhavale003@gmail.com")
        cy.get("#recipient-name").type("prasad")
        cy.get("#message-text").type("prasad")
        cy.get("button[onclick='send()']").click({force:true})
    })

    it('To verify categories',()=>{
        let catog1 =['Phones','Laptops','Monitors']
        cy.login("Prasadd","Prasad@123")
        cy.get('#contcont div > div.col-lg-3 >  div  >#itemc').each((el,i)=>{
            expect(el.text()).to.eq(catog1[i])
        })  
    })

    it('To verify Some products and their details',()=>{
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text','Samsung galaxy s6') 
    })

    it('To verify add to cart functionality',()=>{
        cy.login("Prasadd","Prasad@123")
        cy.wait(5000)
        cy.get('div:nth-child(3) > div > a > img',{timeout:5000}).click()
        cy.wait(5000)
        cy.get('div.row > div > a').click()  
    })

    it('To verify Cart functionality',()=>{
        cy.login("Prasadd","Prasad@123")
        cy.wait(5000)
        cy.get('#cartur',{timeout:5000}).click()
        cy.wait(10000)
        cy.get('#tbodyid',{timeout:5000}).contains('Nexus 6')
        
    })

    it('To verify Place Order functionality',()=>{
        cy.wait(5000)
        cy.get('#cartur').click()
        cy.get('.btn-success').click()
        cy.get('#name').type('Prasadd')
        cy.get('#country').type('India')
        cy.get('#city').type('Pune')
        cy.get('#card').type('7080907060')
        cy.get('#month').type('May')
        cy.get('#year').type('2021')
        cy.get("button[onclick='purchaseOrder()']").click({force:true})
        cy.get('.confirm').contains('OK').click()
        cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-secondary').click() 
    })

    it('To verify logout Functionality',()=>{
        cy.get('#logout2').click({force:true})
    })
})
