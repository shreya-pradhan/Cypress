class HomePage
{

       getExisitngArticleTitleField()
    {
            return cy.get('div.article-preview h1');
    }

   getExisitngArticleAboutField()
    {
        return cy.get('div.article-preview p')
    }
  
   getExisitngArticleTagField()
    {
        return cy.get('.tag-list')
    }

    getEditArticleButton()
    {
        return cy.get('.btn-outline-secondary')
    }

    getDeleteArticleButton()
    {
        return cy.get('.btn-outline-danger')
    }

    getGlobalFeedToggle()
    {
        return cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link',{timeout:10000})
    }


}

export default HomePage;