import SignUpPage from './PageObjects/SignUpPage'

describe('Sign Up Functionality',function()
{

    it('Verify valid User Sign UP ',function()
    {
        const signupPage=new SignUpPage();
        cy.visit('http://localhost:3000')
        signupPage.getNavigationMenu().contains('Sign up').click();
       
        const NewuserEmail='shreya29913.sp@gmail.com';
        const userPassowrd='Test1231$';
        const userName='PradhanShreyaP1145';
        signupPage.getUsernameField().type(userName);
        signupPage.getEmailIDField().type(NewuserEmail);
        signupPage.getPasswordField().type(userPassowrd);
        signupPage.getSubmitButton().click();
        cy.wait(500)
        cy.get('.navbar-nav li').should('have.length',4);
        signupPage.getNavigationMenu().contains('New Post');
        
        

    }),
    it('Verify Invalid  User Sign UP',function()
    {
        const signupPage=new SignUpPage();
        cy.visit('http://localhost:3000')
        signupPage.getNavigationMenu().contains('Sign up').click();
       
        
        const registeredEmail='shreya19.sp@gmail.com';
        const userPassowrd='Test123$';
        const userName='PraShreya';
        signupPage.getUsernameField().type(userName);
        signupPage.getEmailIDField().type(registeredEmail);
        signupPage.getPasswordField().type(userPassowrd);
        signupPage.getSubmitButton().click();
        signupPage.getErrorMessage().should('have.text','body Could not create user User aldready exists with this email id');
        signupPage.getPasswordField().clear();
         signupPage.getSubmitButton().click();
         signupPage.getErrorMessage().should('have.text','body Could not create user Password is Required');

        signupPage.getPasswordField().type(userPassowrd);
        signupPage.getEmailIDField().clear();
         signupPage.getSubmitButton().click();
         signupPage.getErrorMessage().should('have.text','body Could not create user Email is Required');

        signupPage.getEmailIDField().type(registeredEmail);
        signupPage.getUsernameField().clear();
         signupPage.getSubmitButton().click()
         signupPage.getErrorMessage().should('have.text','body Could not create user Username is Required')

    })

})