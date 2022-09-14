import Controller from '@ember/controller';  //NO I18N

export default Controller.extend({
    apply() {

    },
    actions: {
        apply() {
            Ember.set(this.get('GLOBAL_DATA_MODEL'), 'name', 'Dude');
        }
    }
});