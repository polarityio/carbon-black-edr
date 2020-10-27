'use strict';
polarity.export = PolarityComponent.extend({
  details: Ember.computed.alias('block.data.details'),
  endpointTags: Ember.computed('details', function() {
    let endpointTags = [];
    this.get('details.results').forEach(function(item) {
      if (Array.isArray(item.endpoint)) {
        for (let i = 0; i < item.endpoint.length; i++) {
          endpointTags.push(item.endpoint[i].split('|')[0]);
        }
      }
    });
    return [...new Set(endpointTags)];
  })
});
