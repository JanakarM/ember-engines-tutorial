import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('in-app-blog', {path: 'blog'});
  this.mount('post-engine', {path: 'post'});
});

export default Router;
