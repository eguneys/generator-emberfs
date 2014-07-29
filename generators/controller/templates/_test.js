define(['controllers/<%=_.slugify(name)%>_controller'], function() {
    moduleFor('controller:<%= _.slugify(name) %>', '<%= _.classify(name) %> Controller', {
        needs: []
    });
    
    test('exists', function() {
        expect(1);

        var ctrl = this.subject();
        
        ok(ctrl);
        
    });
});
