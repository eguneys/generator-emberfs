define(['components/<%= _.slugify(name) %>'], function() {
    moduleForComponent('component:<%= _.slugify(name) %>', '<%= _.classify(name) %> Component', {
       needs: [] 
    });
    
    test('renders', function() {
        expect(2);

        var component = this.subject();
        equal(component.state, 'preRender');

        this.append();
        equal(component.state, 'inDOM');
    });
});
