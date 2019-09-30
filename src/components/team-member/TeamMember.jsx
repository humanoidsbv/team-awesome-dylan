import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MenuDownIcon from '../../assets/icons/icon-arrow-down.svg';
import styles from './TeamMember.module.css';
import teamMemberAvatar from '../../../static/pictures/picture-tnt.jpg';

const TeamMember = ({
  currentEmployer,
  employeeFunction,
  employeeNumber,
  firstName,
  lastName,
  startingDate
}) => {
  const [isTeamMemberActive, setTeamMemberActivity] = useState(false);

  const toggleTeamMemberActivity = () => {
    setTeamMemberActivity(!isTeamMemberActive);
  };

  const startDate = new Date(startingDate).toDateString();

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
          <span className={styles.teamMemberName}>
            {`${firstName} ${lastName}`}
          </span>
          <span className={styles.teamMemberFunction}>{employeeFunction}</span>
        </div>
        <div className={styles.extraInfoDesktop}>
          <div className={styles.teamMemberNumber}>
            <span className={styles.extraInfoMainDesktop}>
              {employeeNumber}
            </span>
            <span className={styles.extraInfoSubDesktop}>Employee number</span>
          </div>
          <div className={styles.extraEmployerInfo}>
            <span className={styles.extraInfoMainDesktop}>
              {currentEmployer}
            </span>
            <span className={styles.extraInfoSubDesktop}>Current Employer</span>
          </div>
          <div className={styles.extraStartingDate}>
            <span className={styles.extraInfoMainDesktop}>{startDate}</span>
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
            Detailed information about             {firstName}
          </span>
        </div>
        <div className={styles.extraEmployerInfo}>
          <span className={styles.extraInfoMain}>{currentEmployer}</span>
          <span className={styles.extraInfoSub}>Current Employer</span>
        </div>
        <div className={styles.extraStartingDate}>
          <span className={styles.extraInfoMain}>{startDate}</span>
          <span className={styles.extraInfoSub}>Starting date</span>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  currentEmployer: PropTypes.string.isRequired,
  employeeFunction: PropTypes.string.isRequired,
  employeeNumber: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  startingDate: PropTypes.string.isRequired
};

export default TeamMember;
