define(['ember', 'app/app'], function(Ember, App) {
    App.GuidesGuideController = Ember.ObjectController.extend({
        needs: 'guides',

        guides: Ember.computed.alias('controllers.guides'),

        next_guide: function() {
            var next_idx = this.get('guides').indexOf(this.get('model')) + 1;

            return this.get('guides').objectAt(next_idx);
        }.property('model'),

        prev_guide: function() {
            var prev_idx = this.get('guides').indexOf(this.get('model')) - 1;
            return this.get('guides').objectAt(prev_idx);
        }.property('model')
    });
});
