import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
      };
      this.sendAction('save', params);
    }
  }
});
