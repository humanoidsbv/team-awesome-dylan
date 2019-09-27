import React from 'react';

import TeamMember from '../team-member/TeamMember';
import styles from './TeamMembers.module.css';

const TeamMembers = () => {
  return (
    <div className={styles.teamMembersContainer}>
      <button type="button" className={styles.newHumanoidButton}>
        + New Humanoid
      </button>
      <TeamMember className={styles.teamMember} />
      <TeamMember className={styles.teamMember} />
      <TeamMember className={styles.teamMember} />
    </div>
  );
};

export default TeamMembers;
