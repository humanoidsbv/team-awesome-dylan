import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

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
  const [employeeNumber, setEmployeeNumber] = useState('To be confirmed');
  const [employeeFunction, setEmployeeFunction] = useState('To be confirmed');
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
            <label className={styles.labelFirstName} htmlFor="firstName">
              First Name
              <input
                className={`${styles.inputFirstName} ${
                  validity.firstName === false
                    ? styles.inputFirstNameInvalid
                    : ''
                }`}
                maxLength="35"
                minLength="2"
                name="firstName"
                onBlur={handleBlur}
                onChange={({ target }) => setFirstName(target.value)}
                required
                value={firstName}
              />
            </label>
            <label className={styles.labelLastName} htmlFor="lastName">
              Last Name
              <input
                className={`${styles.inputLastName} ${
                  validity.lastName === false ? styles.inputLastNameInvalid : ''
                }`}
                maxLength="35"
                minLength="2"
                name="lastName"
                onBlur={handleBlur}
                onChange={({ target }) => setLastName(target.value)}
                required
                value={lastName}
              />
            </label>
          </div>
          <label className={styles.labelEmailAddress} htmlFor="emailAddress">
            E-mail Address
            <input
              className={`${styles.inputEmailAddress} ${
                validity.emailAddress === false
                  ? styles.inputEmailAddressInvalid
                  : ''
              }`}
              maxLength="35"
              minLength="2"
              name="emailAddress"
              onBlur={handleBlur}
              onChange={({ target }) => setEmailAddress(target.value)}
              required
              value={emailAddress}
            />
          </label>
          <label className={styles.labelBio} htmlFor="bio">
            Bio
            <input
              className={`${styles.inputBio} ${
                validity.bio === false ? styles.inputBioInvalid : ''
              }`}
              maxLength="35"
              minLength="2"
              name="bio"
              onBlur={handleBlur}
              onChange={({ target }) => setBio(target.value)}
              required
              value={bio}
            />
          </label>
        </div>
        <div className={styles.formColumnTwo}>
          <label className={styles.labelAddress} htmlFor="address">
            Address
            <input
              className={`${styles.inputAddress} ${
                validity.address === false ? styles.inputAddressInvalid : ''
              }`}
              maxLength="35"
              minLength="2"
              name="address"
              onBlur={handleBlur}
              onChange={({ target }) => setAddress(target.value)}
              required
              value={address}
            />
          </label>
          <div className={styles.localityPostalCodeInputs}>
            <label className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <input
                className={`${styles.inputPostalCode} ${
                  validity.postalCode === false
                    ? styles.inputPostalCodeInvalid
                    : ''
                }`}
                maxLength="35"
                minLength="2"
                name="postalCode"
                onBlur={handleBlur}
                onChange={({ target }) => setPostalCode(target.value)}
                required
                value={postalCode}
              />
            </label>
            <label className={styles.labelLocality} htmlFor="locality">
              City
              <input
                className={`${styles.inputLocality} ${
                  validity.locality === false ? styles.inputLocalityInvalid : ''
                }`}
                maxLength="35"
                minLength="2"
                name="locality"
                onBlur={handleBlur}
                onChange={({ target }) => setLocality(target.value)}
                required
                value={locality}
              />
            </label>
          </div>
          <label
            className={styles.labelSocialProfiles}
            htmlFor="socialProfiles"
          >
            Social Profiles
            <input
              className={`${styles.inputSocialProfileOne} ${
                validity.socialProfileOne === false
                  ? styles.inputSocialProfileOneInvalid
                  : ''
              }`}
              maxLength="35"
              minLength="2"
              name="socialProfileOne"
              onBlur={handleBlur}
              onChange={({ target }) => setSocialProfileOne(target.value)}
              required
              value={socialProfileOne}
            />
            <input
              className={`${styles.inputSocialProfileTwo} ${
                validity.socialProfileTwo === false
                  ? styles.inputSocialProfileTwoInvalid
                  : ''
              }`}
              maxLength="35"
              minLength="2"
              name="socialProfileTwo"
              onBlur={handleBlur}
              onChange={({ target }) => setSocialProfileTwo(target.value)}
              required
              value={socialProfileTwo}
            />
          </label>
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
