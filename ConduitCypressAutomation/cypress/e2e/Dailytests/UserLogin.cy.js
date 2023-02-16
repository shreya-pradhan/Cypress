import LoginPage from '../1-getting-started/PageObjects/LoginPage'
describe('Login Functionality',function()
{

    beforeEach(()=>{
        cy.fixture('LoginFixture').then(function(data)
        {
                this.data=data;
               
        })
    }),
    it('Verify valid User Login ',function()
    {
       
        const loginpage=new LoginPage();
        cy.NavigateToApplication();
        loginpage.getNavigationMenu().contains('Sign in').click();
        loginpage.getEmailIDField().type(Cypress.env('username'));
        loginpage.getPasswordField().type(Cypress.env('password'));
        loginpage.getSubmitButton().click();
        cy.get('.navbar-nav li').should('have.length',4);
        loginpage.getNavigationMenu().contains('New Post');
        
    }),
    it('Verify Invalid  User Login',function()
    {
        const loginpage=new LoginPage();
        cy.NavigateToApplication();
        loginpage.getNavigationMenu().contains('Sign in').click();
        loginpage.getEmailIDField().type(this.data.InvalidEmail);
        loginpage.getPasswordField().type(this.data.InvalidPassword);
        loginpage.getSubmitButton().click();
        loginpage.getErrorMessage().should('have.text',this.data.errorMessage);
    })

})

