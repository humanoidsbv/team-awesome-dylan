import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ClientForm.module.css';
import InputField from '../../shared/components/input-field/InputField';

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
            <InputField
              name="clientName"
              onBlur={handleBlur}
              onChange={event => setClientName(event.target.value)}
              isValid={validity.clientName !== false}
              value={clientName}
            />
          </span>
          <span className={styles.labelBranch} htmlFor="branch">
            Branch
            <InputField
              name="branch"
              onBlur={handleBlur}
              onChange={event => setBranch(event.target.value)}
              isValid={validity.branch !== false}
              value={branch}
            />
          </span>
          <span className={styles.labelAddress} htmlFor="address">
            Address
            <InputField
              name="address"
              onBlur={handleBlur}
              onChange={event => setAddress(event.target.value)}
              isValid={validity.address !== false}
              value={address}
            />
          </span>
        </div>
        <div className={styles.formColumnTwo}>
          <div className={styles.localityPostalCodeInputs}>
            <span className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <InputField
                name="postalCode"
                onBlur={handleBlur}
                onChange={event => setPostalCode(event.target.value)}
                isValid={validity.postalCode !== false}
                value={postalCode}
              />
            </span>
            <span className={styles.labelLocality} htmlFor="locality">
              Locality
              <InputField
                name="locality"
                onBlur={handleBlur}
                onChange={event => setLocality(event.target.value)}
                isValid={validity.locality !== false}
                value={locality}
              />
            </span>
          </div>
          <span className={styles.labelContactPerson} htmlFor="contactPerson">
            Contact person
            <InputField
              name="contactPerson"
              onBlur={handleBlur}
              onChange={event => setContactPerson(event.target.value)}
              isValid={validity.contactPerson !== false}
              value={contactPerson}
            />
          </span>
          <span
            className={styles.labelContactPhoneNumber}
            htmlFor="contactPhoneNumber"
          >
            Contact phone number
            <InputField
              name="contactPhoneNumber"
              onBlur={handleBlur}
              onChange={event => setContactPhoneNumber(event.target.value)}
              isValid={validity.contactPhoneNumber !== false}
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
