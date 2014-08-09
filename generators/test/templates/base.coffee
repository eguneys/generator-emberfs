define ['app/app'], (App) ->
    module 'Integration: <%= _.classify(name) %>', {
        setup: ->
        teardown: ->
            # make sure to call app.reset
            # from the teardown function
            # otherwise Ember fails.
            # (unit tests for component)
            App.reset()
    }
    test 'First Test', ->
        expect 1

        equal 1, 1, 'should pass'
