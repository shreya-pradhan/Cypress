class ArticlePage
{  
    
    getArticleTitleField()
    {
            return cy.get(':nth-child(1) > .form-control');
    }

    getArticleAboutField()
    {
        return cy.get(':nth-child(2) > .form-control')
    }
    getArticleDescriptionField()
    {
        return cy.get(':nth-child(3) > .form-control')
    }
    getArticleTagField()
    {
        return cy.get(':nth-child(4) > .form-control')
    }

    getPublishButton()
    {
        return cy.get('.btn')
    }

    getUpdateButton()
    {
        return cy.get('.btn-primary')
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

export default ArticlePage;