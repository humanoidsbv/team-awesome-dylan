import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Input from '../../shared/components/input/Input';
import styles from './ClientForm.module.css';

function ClientForm({ toggleClientForm, isClientFormVisible, createClient }) {
  const [address, setAddress] = useState('');
  const [clientName, setClientName] = useState('');
  const [branch, setBranch] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState('');
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
    setBranch('');
    setClientName('');
    setLocality('');
    setContactPhoneNumber('');
    setContactPerson('');
    setPostalCode('');
  };

  const handleCancel = event => {
    event.preventDefault();
    resetFormStates();
    toggleClientForm();
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetFormStates();

    createClient({
      clientName,
      branch,
      address,
      id: Math.random(),
      locality,
      postalCode,
      contactPerson,
      contactPhoneNumber
    });
  };

  return (
    <div
      className={`${styles.clientForm} ${!isClientFormVisible &&
        styles.clientFormHide}`}
    >
      <div className={styles.headerClientForm}>
        <span className={styles.headerClientFormText}>Add new client</span>
        <button
          className={styles.cancelButton}
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.saveButton}
          disabled={validity.form !== true}
          onClick={handleSubmit}
          type="button"
        >
          Save
        </button>
      </div>
      <div className={styles.personalDetailsTab}>Client details</div>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formColumnOne}>
          <span className={styles.labelName} htmlFor="clientName">
            Client
            <Input
              isValid={validity.clientName !== false}
              maxLength="35"
              minLength="2"
              name="clientName"
              onBlur={handleBlur}
              onChange={event => setClientName(event.target.value)}
              required
              value={clientName}
            />
          </span>
          <span className={styles.labelBranch} htmlFor="branch">
            Branch
            <Input
              isValid={validity.branch !== false}
              maxLength="35"
              minLength="2"
              name="branch"
              onBlur={handleBlur}
              onChange={event => setBranch(event.target.value)}
              required
              value={branch}
            />
          </span>
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
        </div>
        <div className={styles.formColumnTwo}>
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
          <span className={styles.labelContactPerson} htmlFor="contactPerson">
            Contact person
            <Input
              isValid={validity.contactPerson !== false}
              maxLength="35"
              minLength="2"
              name="contactPerson"
              onBlur={handleBlur}
              onChange={event => setContactPerson(event.target.value)}
              required
              value={contactPerson}
            />
          </span>
          <span
            className={styles.labelContactPhoneNumber}
            htmlFor="contactPhoneNumber"
          >
            Contact phone number
            <Input
              isValid={validity.contactPhoneNumber !== false}
              maxLength="35"
              minLength="2"
              name="contactPhoneNumber"
              onBlur={handleBlur}
              onChange={event => setContactPhoneNumber(event.target.value)}
              required
              value={contactPhoneNumber}
            />
          </span>
        </div>
      </form>
    </div>
  );
}

ClientForm.propTypes = {
  createClient: PropTypes.func.isRequired,
  isClientFormVisible: PropTypes.bool.isRequired,
  toggleClientForm: PropTypes.func.isRequired
};

export default ClientForm;
