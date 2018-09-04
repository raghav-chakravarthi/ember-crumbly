import Ember from 'ember';
import layout from '../templates/components/bread-crumb';
import computed from 'ember-new-computed';

const {
  Component,
  computed
} = Ember;
const {
  oneWay,
  bool
} = computed;

export default Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: ['crumbClass'],

  crumbClass: oneWay('breadCrumbs.crumbClass'),
  linkClass: oneWay('breadCrumbs.linkClass'),
  hasBlock: bool('template').readOnly(),
  i18nTitle    : computed('route', function() {
  	if (this.get('route').preventTranslation) {
  	  return this.get('route').title
  	}
  	 return Ember.i18n.t('navigation.' + this.get('route').title) 
  })
});
