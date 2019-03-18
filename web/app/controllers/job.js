/*
 * Copyright 2016 LinkedIn Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['jobid'],
  jobid: null,
  currentIterationCount: null,

  actions: {
    showRecommendation(jobDefinitionId) {
      this.send("showRecommendations", jobDefinitionId);
    },
    autoTuningToggle(e) {
      this.set('model.tunein.autoApply', e.target.checked);
    },
    updateIterationCount() {
      var currentIterationCount = this.get('currentIterationCount');
      var isIterationCountChanged =
          (currentIterationCount != this.get('model.tunein.iterationCount')) ? true : false;
      console.log("iterationCount " + isIterationCountChanged + " " +
          this.get('model.tunein.iterationCount'))
    },
    submit(job, tunein) {
      this.send("submitUserChanges",tunein, job);
    }
  }
});
