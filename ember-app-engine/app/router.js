import EmberRouter from '@ember/routing/router';
import config from './config/environment';
const engines = config.engines
const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('reports',function(){//NO I18N
  //   this.mount('in-app-blog', {path: 'blog'});
  // });
  // this.mount('in-app-blog', {path: 'blog'});
  engines.forEach((e)=>{
    this.mount(e)
  })
});

export default Router;
