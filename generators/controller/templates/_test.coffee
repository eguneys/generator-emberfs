define ['controllers/<%=_.slugify(name)%>_controller'], ->
    moduleFor 'controller:<%= _.slugify(name) %>', '<%= _.classify(name) %> Controller', {
        needs: []
    }
    
    test 'exists', ->
        expect 1

        ctrl = @subject()
        
        ok ctrl
        
