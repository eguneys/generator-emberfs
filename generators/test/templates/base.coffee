define ['app/app'], (App) ->
    module 'Integration: <%= _.classify(name) %>', {
        setup: ->
            App.reset()
        teardown: ->
    }
    test 'First Test', ->
        expect 1

        equal 1, 1, 'should pass'
