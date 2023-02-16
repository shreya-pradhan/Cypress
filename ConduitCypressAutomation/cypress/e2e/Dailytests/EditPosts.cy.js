import ArticlePage from '../../support/PageObjects/ArticlePage.cy';
import HomePage from '../../support/PageObjects/HomePage.cy';
describe('User Post ',function()
{ 
    beforeEach(()=>{
    cy.fixture('UserPostsFixture').then(function(data)
    {
            this.data=data;
           
    })
}),

    it('Verify edit  post and delete post ',function()
    {

        const articlePage =new ArticlePage();
        const homePage=new HomePage();
               const navBar='.navbar-nav';
              
        cy.Login();
        cy.wait(5000);

         homePage.getExisitngArticleTitleField().contains(this.data.postTitle).click();
        cy.wait(10000);
        homePage.getEditArticleButton().should('be.visible').click();
        cy.wait(5000);

       articlePage.getArticleTitleField().should('have.value',this.data.postTitle);
        articlePage.getArticleAboutField().should('have.value',this.data.postAbout);
       articlePage.getArticleDescriptionField().should('have.value',this.data.post);
     //   articlePage.getArticleTagField().should('have.text',postTags);
       

       articlePage.getArticleTitleField().clear().type(this.data.updatedPostTitle);
        articlePage.getArticleAboutField().clear().type(this.data.updatedPostAbout);
       articlePage.getArticleDescriptionField().clear().type(this.data.updatedPost);
        articlePage.getUpdateButton().click();
        cy.wait(5000);
        homePage.getGlobalFeedToggle().should('be.visible')
    }),
    it('Verify  delete post ',function()
    {

        const articlePage =new ArticlePage();
        const homePage=new HomePage();
               const navBar='.navbar-nav';
              
        cy.Login();
        cy.wait(5000);

        
        homePage.getExisitngArticleTitleField().contains(this.data.postTitle).click();
        cy.wait(10000);

       homePage.getDeleteArticleButton().click();
        cy.wait(5000);
        homePage.getExisitngArticleTitleField().should('have.length',1);











        
    })
    
})

