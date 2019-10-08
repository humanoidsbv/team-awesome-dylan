import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/TeamMember';
import TeamMemberForm from '../team-member-form/TeamMemberForm';

function TeamMembers({
  createTeamMember,
  fetchTeamMembers,
  teamMembers,
  sortTeamMembersByField
}) {
  const [isTeamMemberFormVisible, setTeamMemberFormVisibility] = useState(
    false
  );

  const toggleTeamMemberForm = () => {
    setTeamMemberFormVisibility(!isTeamMemberFormVisible);
  };

  const handleChange = event => sortTeamMembersByField(event.target.value);

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
        <select
          className={styles.sortTeamMembersSelector}
          id="sortSelect"
          onChange={handleChange}
          type="button"
        >
          <option value="firstName">Sort by: First name</option>
          <option value="lastName">Sort by: Last name</option>
          <option value="employeeFunction">Sort by: Employee function</option>
          <option value="employeeNumber">Sort by: Employee number</option>
          <option value="currentClient">Sort by: Current client</option>
          <option value="startingDate">Sort by: Starting date</option>
        </select>
      </div>
      <div className={styles.teamMembersContainer}>
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
  fetchTeamMembers: PropTypes.func.isRequired,
  sortTeamMembersByField: PropTypes.func.isRequired
};

TeamMembers.defaultProps = {
  teamMembers: []
};

export default TeamMembers;
