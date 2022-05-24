class SignUpPage
{

    getUsernameField()
    {
    
        return cy.get(':nth-child(1) > .form-control');
   
    }
    getEmailIDField()
    {
        return cy.get(':nth-child(2) > .form-control');
    }

    getPasswordField()
    {
        return cy.get(':nth-child(3) > .form-control')
    }

    getSubmitButton()
    {
        return cy.get('.btn')
    }

    getErrorMessage()
    {
        return cy.get('.error-messages > li')
    }

    getNavigationMenu()
    {
        return cy.get('.navbar-nav')
    }

}

export default SignUpPage;