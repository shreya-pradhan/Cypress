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
           // expect(response.body).have.property('slug')
            //expect(response.body).have.property('title')
           //expect(response.body.articles).to.eq(1) // check number of items 
           // expect(response.body.articles[0].title).to.eq('what a wonderful world') // check first item in array
          
          })
    
        
    }),

    it('Get All articles ',function()
    {

        cy.request('http://localhost:8080/api/articles ').then(function(response) {
            
            expect(response.status).to.eq(200)
           // expect(response.body).have.property('slug')
            //expect(response.body).have.property('title')
           //expect(response.body.articles).to.eq(1) // check number of items 
            expect(response.body.articles[0].title).to.eq('what a wonderful world') // check first item in array
          
          })
    
        
    }),

    it('Get All Feeds ',function()
    {
        
        cy.log(usertoken)
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
    {

        cy.request({
            method:'POST',
            url:'http://localhost:8080/api/articles',
            headers:{
               'authorization':this.token
            },
            body:{
                "article":{
                    "title":"How to train a dragon122",
                     "description":"Ever wonder how difficult it is123 ?", 
                     "body":"Very carefully and gracefully122.", 
                     "tagList":["training", "dragons","cartoon"]
                }
            }

        }).then(function(response) {
            
            expect(response.status).to.eq(201)
            
        })
    }),

    it('Get a Single article by slug',function()
    {

        cy.request({
            method:'GET',
            url:' http://localhost:8080/api/articles/what-a-wonderful-world'
           
        }).then(function(response) {
            
            expect(response.status).to.eq(200)
            
        })

                 
    }),

    it.only('Delete a single article by slug',function()
    {

        cy.request({
            method:'DELETE',
            url:' http://localhost:8080/api/articles/how-to-train-a-dragon-',
            headers:{
                'authorization':this.token
             }
            
            
        }).then(function(response) {
            
            expect(response.status).to.eq(200)
            
        })

                 
    })
    
})