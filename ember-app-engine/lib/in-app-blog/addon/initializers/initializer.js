import { getOwner } from '@ember/application';

export default {
	name: 'initializer',//No I18N
	initialize: function(application)
	{

		// application.register('stored:service', Ember.inject.service('stored'), {
		// 	instantiate: false
		// });
		application.inject('controller', 'GLOBAL_DATA_MODEL', 'service:GLOBAL_DATA_MODEL');
	}
};
