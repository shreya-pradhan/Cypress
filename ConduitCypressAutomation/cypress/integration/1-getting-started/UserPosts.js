import ArticlePage from '../1-getting-started/PageObjects/ArticlePage';
import HomePage from '../1-getting-started/PageObjects/HomePage';
describe('User Post ',function()
{

    it('Verify creation of new post , edit  post and delete post ',function()
    {

        const articlePage =new ArticlePage();
        const homePage=new HomePage();
        
        const navBar='.navbar-nav';

        const postTitle='My First Article';
        const postAbout='My Experience Using Conduit';
        const post='Conduit is a great application for Beginners';
        const postTags='First';

        const updatedPostTitle='My First Article updated';
        const updatedPostAbout='My Experience Using Conduit updated';
        const updatedPost='Conduit is a great application for Beginners updated';
        
        
        
        cy.Login('shreya19.sp@gmail.com','Test123$');
        cy.wait(5000);
        cy.get('.article-preview').should('have.length',3);
        cy.get(navBar).contains('New Post').click();

        articlePage.getArticleTitleField().type(postTitle);
        articlePage.getArticleAboutField().type(postAbout);
        articlePage.getArticleDescriptionField().type(post);
        articlePage.getArticleTagField().type(postTags);
        articlePage.getPublishButton().click();
        articlePage.getPublishButton().click();
        homePage.getGlobalFeedToggle().should('be.visible');
       // cy.get('.article-preview').should('have.length',4);
       

        homePage.getExisitngArticleTitleField().first().should('have.text',postTitle);
        homePage.getExisitngArticleAboutField().first().should('have.text',postAbout);
        homePage.getExisitngArticleTitleField().first().click();
        cy.wait(10000);
        homePage.getEditArticleButton().should('be.visible').click();
        cy.wait(5000);

       articlePage.getArticleTitleField().should('have.value',postTitle);
        articlePage.getArticleAboutField().should('have.value',postAbout);
       articlePage.getArticleDescriptionField().should('have.value',post);
     //   articlePage.getArticleTagField().should('have.text',postTags);
       

       articlePage.getArticleTitleField().clear().type(updatedPostTitle);
        articlePage.getArticleAboutField().clear().type(updatedPostAbout);
       articlePage.getArticleDescriptionField().clear().type(updatedPost);
        articlePage.getUpdateButton().click();
        cy.wait(5000);
        homePage.getGlobalFeedToggle().should('be.visible')


        homePage.getExisitngArticleTitleField().first().click();
        homePage.getDeleteArticleButton().click();
        cy.wait(5000);
       // cy.get('.article-preview').should('have.length',3);











        
    })
    
})

