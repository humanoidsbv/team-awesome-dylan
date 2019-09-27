import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/TeamMember';

function TeamMembers({ fetchTeamMembers, teamMembers }) {
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div>
      <div className={styles.headerTeamMembers}>
        <span className={styles.headerTeamMembersText}> All Humanoids </span>
        <button type="button" className={styles.newHumanoidButtonDesktop}>
          + New Humanoid
        </button>
        <select type="button" className={styles.sortTeamMembersSelector}>
          <option value="" disabled selected>
            Sort by:
          </option>
          <option value="hurr">Durr</option>
        </select>
      </div>
      <div className={styles.teamMembersContainer}>
        <button type="button" className={styles.newHumanoidButton}>
          + New Humanoid
        </button>
        {teamMembers.map(
          ({
            firstName,
            lastName,
            employerFunction,
            startingDate,
            currentEmployer,
            employeeNumber
          }) => (
            <TeamMember
              firstName={firstName}
              lastName={lastName}
              employerFunction={employerFunction}
              startingDate={startingDate}
              currentEmployer={currentEmployer}
              employeeNumber={employeeNumber}
            />
          )
        )}
      </div>
    </div>
  );
}

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string
    })
  ),
  fetchTeamMembers: PropTypes.func.isRequired
};

TeamMembers.defaultProps = {
  teamMembers: []
};

export default TeamMembers;
