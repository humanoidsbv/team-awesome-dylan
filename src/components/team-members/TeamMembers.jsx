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
          <option value="">Sort by:</option>
        </select>
      </div>
      <div className={styles.teamMembersContainer}>
        <button type="button" className={styles.newHumanoidButton}>
          + New Humanoid
        </button>
        {teamMembers.map(
          ({
            currentEmployer,
            employeeFunction,
            employeeNumber,
            firstName,
            lastName,
            startingDate
          }) => (
            <TeamMember
              currentEmployer={currentEmployer}
              employeeFunction={employeeFunction}
              employeeNumber={employeeNumber}
              firstName={firstName}
              lastName={lastName}
              startingDate={startingDate}
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