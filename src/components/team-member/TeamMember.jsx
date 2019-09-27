import React from 'react';

import employeeAvatar from '../../../static/pictures/picture-tnt.jpg';
import styles from './TeamMember.module.css';
import MenuDownIcon from '../../assets/icons/icon-arrow-down.svg';

const TeamMember = () => {
  return (
    <div className={styles.teamMemberActive}>
      <img className={styles.employeeAvatar} src={employeeAvatar} alt="Logo" />
      <div className={styles.employeeTitle}>
        <span className={styles.employeeName}>Antje Adriaens</span>
        <span className={styles.employeeFunction}>UX Designer</span>
      </div>
      <div className={styles.extraInfo}>
        <span className={styles.extraInfoMain}>HUM_001</span>
        <span className={styles.extraInfoSub}>Employee number</span>
      </div>
      <div className={styles.extraInfo}>
        <span className={styles.extraInfoMain}>Hike One</span>
        <span className={styles.extraInfoSub}>Current Employer</span>
      </div>
      <div className={styles.extraInfo}>
        <span className={styles.extraInfoMain}>February 2018</span>
        <span className={styles.extraInfoSub}>Starting date</span>
      </div>
      <MenuDownIcon className={styles.menuDownIcon} />
    </div>
  );
};

export default TeamMember;
