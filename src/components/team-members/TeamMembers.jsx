import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/TeamMember';
import TeamMemberForm from '../team-member-form/TeamMemberForm';

function TeamMembers({ createTeamMember, fetchTeamMembers, teamMembers }) {
  const [isTeamMemberFormVisible, setTeamMemberFormVisibility] = useState(
    false
  );

  const toggleTeamMemberForm = () => {
    setTeamMemberFormVisibility(!isTeamMemberFormVisible);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div>
      <TeamMemberForm
        createTeamMember={newTeamMember => createTeamMember(newTeamMember)}
        isTeamMemberFormVisible={isTeamMemberFormVisible}
        toggleTeamMemberForm={toggleTeamMemberForm}
      />
      <div className={styles.headerTeamMembers}>
        <span className={styles.headerTeamMembersText}> All Humanoids </span>
        <button
          className={`${styles.newHumanoidButtonHeader} ${
            isTeamMemberFormVisible ? styles.newHumanoidButtonHeaderGrey : ''
          }`}
          disabled={isTeamMemberFormVisible}
          onClick={toggleTeamMemberForm}
          type="button"
        >
          + New Humanoid
        </button>
        <select type="button" className={styles.sortTeamMembersSelector}>
          <option value="">Sort by:</option>
        </select>
      </div>
      <div className={styles.teamMembersContainer}>
        <button
          className={`${styles.newHumanoidButton} ${
            isTeamMemberFormVisible ? styles.newHumanoidButtonGrey : ''
          }`}
          disabled={isTeamMemberFormVisible}
          onClick={toggleTeamMemberForm}
          type="button"
        >
          + New Humanoid
        </button>
        {teamMembers.map(
          ({
            currentClient,
            employeeFunction,
            employeeNumber,
            firstName,
            lastName,
            startingDate
          }) => (
            <TeamMember
              currentClient={currentClient}
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
  createTeamMember: PropTypes.func.isRequired,
  fetchTeamMembers: PropTypes.func.isRequired
};

TeamMembers.defaultProps = {
  teamMembers: []
};

export default TeamMembers;
