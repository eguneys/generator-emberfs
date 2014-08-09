define ['components/<%= _.slugify(name) %>'], ->
    moduleForComponent '<%= _.slugify(name) %>', '<%= _.classify(name) %> Component', {
        needs: []
    }

    test 'renders', ->
        expect 2

        component = @subject()
        equal component.state, 'preRender'

        @append()
        equal component.state, 'inDOM'
