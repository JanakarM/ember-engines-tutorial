import { set } from '@ember/object';


export default {
	name: 'initializer',//No I18N
	initialize: function(application)
	{
		
		application.register('global-data-model:service', Ember.inject.service('stored'), {
			instantiate: false
		});
		application.inject('controller', 'GLOBAL_DATA_MODEL', 'service:global-data-model');
	}
};
