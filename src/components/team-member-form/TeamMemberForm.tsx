import React, { useState, useRef } from 'react';

import Input from '../../shared/components/input/Input';
import styles from './TeamMemberForm.module.css';
import { ActionInterface } from '../../redux/team-members/types';
import { ValidityState } from '../../shared/types';

interface TeamMemberFormProps {
  createTeamMember: (newTeamMember: {}) => void;
  isTeamMemberFormVisible: boolean;
  toggleTeamMemberForm: () => void;
}

function TeamMemberForm({
  createTeamMember,
  toggleTeamMemberForm,
  isTeamMemberFormVisible
}: TeamMemberFormProps): React.ReactElement {
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
  const [validity, setValidity] = useState<ValidityState>({});

  const formRef = useRef(null);

  const handleBlur = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const resetFormStates = (): void => {
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

  const handleCancel = (): void => {
    event.preventDefault();
    resetFormStates();
    toggleTeamMemberForm();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
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
              <Input
                isValid={validity.firstName !== false}
                maxLength={35}
                minLength={2}
                name="firstName"
                onBlur={handleBlur}
                onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setFirstName(target.value)}
                required
                value={firstName}
              />
            </label>
            <label className={styles.labelLastName} htmlFor="lastName">
              Last Name
              <Input
                isValid={validity.lastName !== false}
                maxLength={35}
                minLength={2}
                name="lastName"
                onBlur={handleBlur}
                onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setLastName(target.value)}
                required
                value={lastName}
              />
            </label>
          </div>
          <label className={styles.labelEmailAddress} htmlFor="emailAddress">
            E-mail Address
            <Input
              isValid={validity.emailAddress !== false}
              maxLength={35}
              minLength={2}
              name="emailAddress"
              onBlur={handleBlur}
              onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setEmailAddress(target.value)}
              required
              value={emailAddress}
            />
          </label>
          <label className={styles.labelBio} htmlFor="bio">
            Bio
            <Input
              isMultiLine
              isValid={validity.bio !== false}
              maxLength={35}
              minLength={2}
              name="bio"
              onBlur={handleBlur}
              onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setBio(target.value)}
              required
              value={bio}
            />
          </label>
        </div>
        <div className={styles.formColumnTwo}>
          <label className={styles.labelAddress} htmlFor="address">
            Address
            <Input
              isValid={validity.address !== false}
              maxLength={35}
              minLength={2}
              name="address"
              onBlur={handleBlur}
              onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setAddress(target.value)}
              required
              value={address}
            />
          </label>
          <div className={styles.localityPostalCodeInputs}>
            <label className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <Input
                isValid={validity.postalCode !== false}
                maxLength={35}
                minLength={2}
                name="postalCode"
                onBlur={handleBlur}
                onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setPostalCode(target.value)}
                required
                value={postalCode}
              />
            </label>
            <label className={styles.labelLocality} htmlFor="locality">
              Locality
              <Input
                isValid={validity.locality !== false}
                maxLength={35}
                minLength={2}
                name="locality"
                onBlur={handleBlur}
                onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setLocality(target.value)}
                required
                value={locality}
              />
            </label>
          </div>
          <label
            className={styles.labelSocialProfiles}
            htmlFor="socialProfileOne"
          >
            Social Profiles
            <Input
              isValid={validity.socialProfileOne !== false}
              maxLength={35}
              minLength={2}
              name="socialProfileOne"
              onBlur={handleBlur}
              onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setSocialProfileOne(target.value)}
              required
              value={socialProfileOne}
            />
            <Input
              isValid={validity.socialProfileTwo !== false}
              maxLength={35}
              minLength={2}
              name="socialProfileTwo"
              onBlur={handleBlur}
              onChange={({target}: React.ChangeEvent<HTMLInputElement>): void => setSocialProfileTwo(target.value)}
              required
              value={socialProfileTwo}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default TeamMemberForm;
