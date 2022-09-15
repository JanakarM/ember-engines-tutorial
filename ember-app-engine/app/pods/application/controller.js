import Controller from '@ember/controller';  //NO I18N

export default Controller.extend({
    actions: {
        apply() {
            console.log("apply clicked");
            Ember.set(this.get('GLOBAL_DATA_MODEL'), 'name', 'Dude..!!')
            this.transitionToRoute('in-app-blog');
        }
    }
});