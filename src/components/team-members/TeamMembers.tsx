import React, { useEffect, useState } from 'react';

import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/TeamMember';
import TeamMemberForm from '../team-member-form/TeamMemberForm';
import MenuDownIcon from '../../assets/icons/icon-arrow-down.svg';
import { ActionInterface, TeamMembersProps, TeamMemberInterface } from '../../redux/team-members/types';

function TeamMembers({
  createTeamMember,
  fetchTeamMembers,
  sortDirection,
  sortTeamMembersByField,
  sortTeamMembersDirection,
  teamMembers
}: TeamMembersProps): React.ReactElement {
  const [isTeamMemberFormVisible, setTeamMemberFormVisibility] = useState(
    false
  );

  const toggleTeamMemberForm = (): void => {
    setTeamMemberFormVisibility(!isTeamMemberFormVisible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): ActionInterface => sortTeamMembersByField(event.target.value);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div>
      <TeamMemberForm
        createTeamMember={(newTeamMember: {}): ActionInterface => createTeamMember(newTeamMember)}
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
        <div className={styles.sortingWrapper}>
          <select
            className={styles.sortTeamMembersSelector}
            id="sortSelect"
            onChange={handleChange}
          >
            <option value="firstName">Sort by: First name</option>
            <option value="lastName">Sort by: Last name</option>
            <option value="employeeFunction">Sort by: Employee function</option>
            <option value="employeeNumber">Sort by: Employee number</option>
            <option value="currentClient">Sort by: Current client</option>
            <option value="startingDate">Sort by: Starting date</option>
          </select>
          <button
            className={styles.sortDirectionToggle}
            type="button"
            onClick={() => sortTeamMembersDirection()}
          >
            <MenuDownIcon
              className={`${
                sortDirection === true
                  ? styles.sortDirectionAscending
                  : styles.sortDirectionDescending
              }`}
            />
          </button>
        </div>
      </div>
      <div className={styles.teamMembersContainer}>
        {teamMembers.map(
          ({
            currentClient,
            employeeFunction,
            employeeNumber,
            firstName,
            lastName,
            startingDate,
            id
          }: TeamMemberInterface): React.ReactElement => (
            <TeamMember
              currentClient={currentClient}
              employeeFunction={employeeFunction}
              employeeNumber={employeeNumber}
              firstName={firstName}
              lastName={lastName}
              startingDate={startingDate}
              key={id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default TeamMembers;
