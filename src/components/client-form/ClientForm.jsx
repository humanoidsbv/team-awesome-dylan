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
          <label className={styles.labelName} htmlFor="clientName">
            Client
            <InputField
              name="clientName"
              onBlur={handleBlur}
              setInputValue={setClientName}
              isValid={validity.clientName}
              value={clientName}
            />
          </label>
          <label className={styles.labelBranch} htmlFor="branch">
            Branch
            <InputField
              name="branch"
              onBlur={handleBlur}
              setInputValue={setBranch}
              isValid={validity.branch}
              value={branch}
            />
          </label>
          <label className={styles.labelAddress} htmlFor="address">
            Address
            <InputField
              name="address"
              onBlur={handleBlur}
              setInputValue={setAddress}
              isValid={validity.address}
              value={address}
            />
          </label>
        </div>
        <div className={styles.formColumnTwo}>
          <div className={styles.localityPostalCodeInputs}>
            <label className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <InputField
                name="postalCode"
                onBlur={handleBlur}
                setInputValue={setPostalCode}
                isValid={validity.postalCode}
                value={postalCode}
              />
            </label>
            <label className={styles.labelLocality} htmlFor="locality">
              Locality
              <InputField
                name="locality"
                onBlur={handleBlur}
                setInputValue={setLocality}
                isValid={validity.locality}
                value={locality}
              />
            </label>
          </div>
          <label className={styles.labelContactPerson} htmlFor="contactPerson">
            Contact person
            <InputField
              name="contactPerson"
              onBlur={handleBlur}
              setInputValue={setContactPerson}
              isValid={validity.contactPerson}
              value={contactPerson}
            />
          </label>
          <label
            className={styles.labelContactPhoneNumber}
            htmlFor="contactPhoneNumber"
          >
            Contact phone number
            <InputField
              name="contactPhoneNumber"
              onBlur={handleBlur}
              setInputValue={setContactPhoneNumber}
              isValid={validity.contactPhoneNumber}
              value={contactPhoneNumber}
            />
          </label>
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
