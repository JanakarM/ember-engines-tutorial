import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add-emp');
  this.route('add-notes');
  this.route('login');
  this.route('notes');
  this.route('signup');
  this.route('view-emp');
  this.route('view-notes');
  this.route('update-notes');
  this.route('deleteaccount');
});

export default Router;
