import React from 'react';

import TeamMember from '../team-member/TeamMember';
import styles from './TeamMembers.module.css';

const TeamMembers = () => {
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
        <TeamMember className={styles.teamMember} />
        <TeamMember className={styles.teamMember} />
      </div>
    </div>
  );
};

export default TeamMembers;
