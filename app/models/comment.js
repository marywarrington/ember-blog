import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  post: DS.belongsTo('post', { async: true})  
});
