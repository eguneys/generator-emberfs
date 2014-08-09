define ['models/<%= _.slugify(name) %>_model'], ->
    moduleForModel '<%= _.slugify(name) %>', '<%= _.classify(name) %> Model', {
        needs: []
    }

    test 'exists', ->
        expect 1

        model = @subject()

        ok model
