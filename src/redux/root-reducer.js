import { combineReducers } from 'redux';

import timeEntries from './time-entries';
import teamMembers from './team-members';

export default combineReducers({
  timeEntries,
  teamMembers
});
