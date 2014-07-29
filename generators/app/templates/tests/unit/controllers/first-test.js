define(['routes/guides_deps'], function() {
    moduleFor('controller:guides_guide', 'GuidesGuide Controller', {
        needs: ['controller:guides']
    });
    
    test('bottom navigation', function() {
        expect(4);

        var ctrl = this.subject();
        var guidesCtrl = ctrl.get('controllers.guides');

        Ember.run(function() {
            var guideModel =  Ember.A([
                {id: '0', title: 'hello', body: 'world'},
                {id: '1', title: 'second', body: 'world' }]);
            
            guidesCtrl.set('model', guideModel);

            ctrl.set('model', guideModel[0]);

            equal(ctrl.get('next_guide'), guideModel[1], 'next_guide is ok.');
            equal(ctrl.get('prev_guide'), undefined, 'prev_guide is ok.');

            ctrl.set('model', guideModel[1]);

            equal(ctrl.get('next_guide'), undefined, 'next_guide is ok.');
            equal(ctrl.get('prev_guide'), guideModel[0], 'prev_guide is ok.');
        });
    });
});
