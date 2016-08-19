import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        content: this.get('content'),
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
