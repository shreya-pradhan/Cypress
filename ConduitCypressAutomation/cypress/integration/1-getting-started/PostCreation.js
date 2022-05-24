import ArticlePage from '../1-getting-started/PageObjects/ArticlePage';
import HomePage from '../1-getting-started/PageObjects/HomePage';
describe('User Post ',function()
{

    beforeEach(()=>{
        cy.fixture('UserPostsFixture').then(function(data)
        {
                this.data=data;
               
        })
    }),
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
        
        cy.Login();
        cy.wait(5000);
       // cy.get('.article-preview').should('have.length',3);
        cy.get(navBar).contains('New Post').click();

        articlePage.getArticleTitleField().type(this.data.postTitle);
        articlePage.getArticleAboutField().type(this.data.postAbout);
        articlePage.getArticleDescriptionField().type(this.data.post);
        articlePage.getArticleTagField().type(this.data.postTags);
        articlePage.getPublishButton().click();
        articlePage.getPublishButton().click();
        homePage.getGlobalFeedToggle().should('be.visible');
       // cy.get('.article-preview').should('have.length',4);
       articlePage.getArticleTitleField().should('have.value',this.data.postTitle);
        articlePage.getArticleAboutField().should('have.value',this.data.postAbout);
       articlePage.getArticleDescriptionField().should('have.value',this.data.post);
     //   articlePage.getArticleTagField().should('have.text',postTags);
       
    })
})