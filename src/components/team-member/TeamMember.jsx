import React, { useState } from 'react';

import MenuDownIcon from '../../assets/icons/icon-arrow-down.svg';
import styles from './TeamMember.module.css';
import teamMemberAvatar from '../../../static/pictures/picture-tnt.jpg';

const TeamMember = () => {
  const [isTeamMemberActive, setTeamMemberActivity] = useState(false);

  const toggleTeamMemberActivity = () => {
    setTeamMemberActivity(!isTeamMemberActive);
  };

  return (
    <div
      className={`${
        isTeamMemberActive
          ? styles.teamMemberEntryActive
          : styles.teamMemberEntry
      }`}
    >
      <div className={styles.teamMemberBasicInfo}>
        <img
          className={styles.teamMemberAvatar}
          src={teamMemberAvatar}
          alt="Logo"
        />
        <div className={styles.teamMemberTitle}>
          <span className={styles.teamMemberName}>Antje Adriaens</span>
          <span className={styles.teamMemberFunction}>UX Designer</span>
        </div>
        <div className={styles.extraInfoDesktop}>
          <div className={styles.teamMemberNumber}>
            <span className={styles.extraInfoMainDesktop}>HUM_001</span>
            <span className={styles.extraInfoSubDesktop}>Employee number</span>
          </div>
          <div className={styles.extraEmployerInfo}>
            <span className={styles.extraInfoMainDesktop}>Hike One</span>
            <span className={styles.extraInfoSubDesktop}>Current Employer</span>
          </div>
          <div className={styles.extraStartingDate}>
            <span className={styles.extraInfoMainDesktop}>February 2018</span>
            <span className={styles.extraInfoSubDesktop}>Starting date</span>
          </div>
        </div>
        <MenuDownIcon
          className={styles.menuDownIcon}
          onClick={toggleTeamMemberActivity}
        />
      </div>
      <div
        className={`${
          isTeamMemberActive ? styles.extraInfoActive : styles.extraInfo
        }`}
      >
        <div className={styles.extraInfoHeader}>
          <span className={styles.extraInfoHeaderText}>
            Detailed information about Antje
          </span>
        </div>
        <div className={styles.extraEmployerInfo}>
          <span className={styles.extraInfoMain}>Hike One</span>
          <span className={styles.extraInfoSub}>Current Employer</span>
        </div>
        <div className={styles.extraStartingDate}>
          <span className={styles.extraInfoMain}>February 2018</span>
          <span className={styles.extraInfoSub}>Starting date</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
