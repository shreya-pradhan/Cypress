describe('API Tests',function()
{

    beforeEach('Get user token ',function()
    {

        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/users/login',
            body:{
                "user":
                 {
                     "email":"shreya19.sp@gmail.com",
                     "password":"Test123$"
                    }
                }
            }).
       
        then(function(response) {
            
            expect(response.status).to.eq(200)
            this.token='Token '+response.body.user.token
            cy.log(this.token)
           
          
          })
    
        
    }),

    it('Get All articles ',function()
    {

        cy.request('http://localhost:8080/api/articles ').then(function(response) {
            
            expect(response.status).to.eq(200)

            let articles=response.body.articles;
            cy.log(articles)
            articles.forEach(function(article) {
                expect(article).have.property('slug')
                expect(article.slug).to.not.be.null
                expect(article).have.property('title')
                expect(article.title).to.not.be.null
                expect(article).have.property('body')
                expect(article.body).to.not.be.null
            });
          
          })
    
        
    }),

    it('Get All Feeds ',function()
    {
        
       
        cy.request({
            method:'GET',
            url:'http://localhost:8080/api/articles/feed',
            headers:{
               'authorization':this.token
            }

        }).then(function(response) {
            
            expect(response.status).to.eq(200)
            
          })
    
        
    }),

    it('Create a article',function()
    { let responsetitle="How to train a students"
      let responsedescription="Ever wonder how difficult it is2 ?"
      let responsebody="Very carefully and gracefully3."

        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/articles',
            headers:{
               'authorization':this.token
            },
            body:{
                "article":{
                    "title":responsetitle,
                     "description":responsedescription, 
                     "body":responsebody, 
                     "tagList":["training", "dragons","cartoon"]
                }
            }

        }).then(function(response) {
            this.newlycreatedslug=response.body.article.slug
            expect(response.status).to.eq(201)
            assert.equal(response.body.article.title,responsetitle,"title correct?")
            assert.equal(response.body.article.description,responsedescription,"description correct?")
            assert.equal(response.body.article.body,responsebody,"body correct?")
            
        })
    }),

    it('Get a Single article by slug',function()
    {

        cy.request({
            method:'GET',
            url:' http://localhost:8080/api/articles/what-a-wonderful-world'
           
        }).then(function(response) {
            
            expect(response.status).to.eq(200)
            expect(response.body.article).have.property('slug')
            expect(response.body.article.slug).to.not.be.null
            expect(response.body.article).have.property('title')
            expect(response.body.title).to.not.be.null
            expect(response.body.article).have.property('body')
            
        })

                 
    }),

    it('Delete a single article by slug',function()
    {

        let responsetitle="new Test creation"
        let responsedescription="New regression test added ?"
        let responsebody="Test added for  new feature"

        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/articles',
            headers:{
               'authorization':this.token
            },
            body:{
                "article":{
                    "title":responsetitle,
                     "description":responsedescription, 
                     "body":responsebody, 
                     "tagList":["training", "dragons","cartoon"]
                }
            }

        }).then(function(response) {
            expect(response.status).to.eq(201)
            this.newlycreatedslug=response.body.article.slug
            
            cy.log(this.newlycreatedslug)
                        
        })
        cy.wait(2000)
        let requestUrl='http://localhost:8080/api/articles/new-test-creation'
        cy.request({
            method:'DELETE',
            url:requestUrl,
            headers:{
                'authorization':this.token
             }
            
            
        }).then(function(response) {
            
            expect(response.status).to.eq(200)
            assert.equal(response.body.message,"Article deleted successfully","response message correct?")
            
        })

                 
    })
    
})