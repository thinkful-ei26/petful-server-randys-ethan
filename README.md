Petful Server

The Petful server holds the information about our cats and dogs that are available for adoption. Pets come in and out on a first in, first out basis, so we only display one cat and one dog at a time. Because of this we store the animal information in a stack. 

By visiting https://localhost:8080/api/cat or https://localhost:8080/api/dog, one can see the animal currently up for adoption. One can also view them in Postman using the aformentioned addresses with a GET request.

Animals that have been adopted can be removed from the stack using a dequeque function, which will eliminate the animal that has been up for adoption the longest. An example request would be:
    app.delete('/api/cat', (req, res) => {
        catQueue.dequeue();
        return res.sendStatus(204);
    });

This backend uses Node and Express.