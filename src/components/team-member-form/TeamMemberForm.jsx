import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Input from '../../shared/components/input/Input';
import styles from './TeamMemberForm.module.css';

function TeamMemberForm({
  createTeamMember,
  toggleTeamMemberForm,
  isTeamMemberFormVisible
}) {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [currentClient, setCurrentClient] = useState('To be confirmed');
  const [emailAddress, setEmailAddress] = useState('');
  const [employeeFunction, setEmployeeFunction] = useState('To be confirmed');
  const [employeeNumber, setEmployeeNumber] = useState('To be confirmed');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [socialProfileOne, setSocialProfileOne] = useState('');
  const [socialProfileTwo, setSocialProfileTwo] = useState('');
  const [startingDate, setStartingDate] = useState(today);
  const [validity, setValidity] = useState({});

  const formRef = useRef(null);

  const handleBlur = event => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const resetFormStates = () => {
    setAddress('');
    setBio('');
    setEmailAddress('');
    setFirstName('');
    setEmployeeFunction('');
    setLastName('');
    setLocality('');
    setPostalCode('');
    setSocialProfileOne('');
    setSocialProfileTwo('');
    setStartingDate('');
    setEmployeeNumber('');
    setCurrentClient('');
  };

  const handleCancel = event => {
    event.preventDefault();
    resetFormStates();
    toggleTeamMemberForm();
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetFormStates();

    createTeamMember({
      address,
      bio,
      currentClient,
      emailAddress,
      employeeNumber,
      employeeFunction,
      firstName,
      id: Math.random(),
      lastName,
      locality,
      postalCode,
      socialProfileOne,
      socialProfileTwo,
      startingDate
    });
    toggleTeamMemberForm();
  };

  return (
    <div
      className={`${styles.teamMemberForm} ${
        !isTeamMemberFormVisible ? styles.teamMemberFormHide : ''
      }`}
    >
      <div>
        <div className={styles.headerTeamMemberForm}>
          <span className={styles.headerTeamMemberFormText}>
            Add new team member
          </span>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className={styles.saveButton}
            onClick={handleSubmit}
            disabled={validity.form !== true}
          >
            Save
          </button>
        </div>
      </div>
      <div className={styles.personalDetailsTab}>Personal details</div>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formColumnOne}>
          <div className={styles.nameInputs}>
            <span className={styles.labelFirstName} htmlFor="firstName">
              First Name
              <Input
                isValid={validity.firstName !== false}
                maxLength="35"
                minLength="2"
                name="firstName"
                onBlur={handleBlur}
                onChange={event => setFirstName(event.target.value)}
                required
                value={firstName}
              />
            </span>
            <span className={styles.labelLastName} htmlFor="lastName">
              Last Name
              <Input
                isValid={validity.lastName !== false}
                maxLength="35"
                minLength="2"
                name="lastName"
                onBlur={handleBlur}
                onChange={event => setLastName(event.target.value)}
                required
                value={lastName}
              />
            </span>
          </div>
          <span className={styles.labelEmailAddress} htmlFor="emailAddress">
            E-mail Address
            <Input
              isValid={validity.emailAddress !== false}
              maxLength="35"
              minLength="2"
              name="emailAddress"
              onBlur={handleBlur}
              onChange={event => setEmailAddress(event.target.value)}
              required
              value={emailAddress}
            />
          </span>
          <span className={styles.labelBio} htmlFor="bio">
            Bio
            <Input
              isHigher
              isValid={validity.bio !== false}
              maxLength="35"
              minLength="2"
              name="bio"
              onBlur={handleBlur}
              onChange={event => setBio(event.target.value)}
              required
              value={bio}
            />
          </span>
        </div>
        <div className={styles.formColumnTwo}>
          <span className={styles.labelAddress} htmlFor="address">
            Address
            <Input
              isValid={validity.address !== false}
              maxLength="35"
              minLength="2"
              name="address"
              onBlur={handleBlur}
              onChange={event => setAddress(event.target.value)}
              required
              value={address}
            />
          </span>
          <div className={styles.localityPostalCodeInputs}>
            <span className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <Input
                isValid={validity.postalCode !== false}
                maxLength="35"
                minLength="2"
                name="postalCode"
                onBlur={handleBlur}
                onChange={event => setPostalCode(event.target.value)}
                required
                value={postalCode}
              />
            </span>
            <span className={styles.labelLocality} htmlFor="locality">
              Locality
              <Input
                isValid={validity.locality !== false}
                maxLength="35"
                minLength="2"
                name="locality"
                onBlur={handleBlur}
                onChange={event => setLocality(event.target.value)}
                required
                value={locality}
              />
            </span>
          </div>
          <span className={styles.labelSocialProfiles} htmlFor="socialProfiles">
            Social Profiles
            <Input
              isValid={validity.socialProfileOne !== false}
              maxLength="35"
              minLength="2"
              name="socialProfileOne"
              onBlur={handleBlur}
              onChange={event => setSocialProfileOne(event.target.value)}
              required
              value={socialProfileOne}
            />
            <Input
              isValid={validity.socialProfileTwo !== false}
              maxLength="35"
              minLength="2"
              name="socialProfileTwo"
              onBlur={handleBlur}
              onChange={event => setSocialProfileTwo(event.target.value)}
              required
              value={socialProfileTwo}
            />
          </span>
        </div>
      </form>
    </div>
  );
}

TeamMemberForm.propTypes = {
  createTeamMember: PropTypes.func.isRequired,
  toggleTeamMemberForm: PropTypes.func.isRequired,
  isTeamMemberFormVisible: PropTypes.bool.isRequired
};

export default TeamMemberForm;
