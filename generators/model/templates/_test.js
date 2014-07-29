define(['models/<%= _.slugify(name) %>_model'], function() {
    moduleForModel('<%= _.slugify(name) %>', '<%= _.classify(name) %> Model', {
       needs: [] 
    });
    
    test('exists', function() {
        expect(1);

        var model = this.subject();

        ok(model);
    });
});
