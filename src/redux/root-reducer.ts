import { combineReducers } from 'redux';

import timeEntries from './time-entries';
import teamMembers from './team-members';
import clients from './clients';

export default combineReducers({
  clients,
  teamMembers,
  timeEntries
});
