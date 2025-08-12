import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm();

  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [submitError, setSubmitError] = useState(null);
  const password = watch('password');

  useEffect(() => {
    axiosInstance.get('/roles')
      .then(res => {
        setRoles(res.data);
        const defaultRole = res.data.find(role =>
          role.name.toLowerCase() === 'customer' || role.name.toLowerCase() === 'müşteri'
        );
        if (defaultRole) {
          setValue('role_id', defaultRole.id);
          setSelectedRole(defaultRole.name);
        }
      });
  }, [setValue]);

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      };

      if (selectedRole.toLowerCase() === 'store' || selectedRole.toLowerCase() === 'mağaza') {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      await axiosInstance.post('/signup', payload);
      alert('You need to click the link in the email to activate your account!');
      window.history.back();
    } catch (err) {
      setSubmitError(err.response?.data?.message || 'Signup failed');
    }
  };

  const translateRole = (name) => {
    switch (name.toLowerCase()) {
      case 'müşteri': return 'Customer';
      case 'mağaza': return 'Store';
      case 'yönetici': return 'Admin';
      default: return name;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg mt-10 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Name"
        {...register('name', { required: true, minLength: 3 })}
      />
      {errors.name && <p className="text-red-600 text-sm">Name must be at least 3 characters</p>}

      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Email"
        {...register('email', {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        })}
      />
      {errors.email && <p className="text-red-600 text-sm">Email is not valid</p>}

      <input
        type="password"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Password"
        {...register('password', {
          required: true,
          minLength: 8,
          validate: value =>
            /[a-z]/.test(value) &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[^a-zA-Z0-9]/.test(value)
        })}
      />
      {errors.password && (
        <p className="text-red-600 text-sm">
          Password must include uppercase, lowercase, number, and special character
        </p>
      )}

      <input
        type="password"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Confirm Password"
        {...register('confirm', {
          validate: value => value === password || 'Passwords do not match'
        })}
      />
      {errors.confirm && <p className="text-red-600 text-sm">{errors.confirm.message}</p>}

      <select
        className="w-full p-2 border border-gray-300 rounded"
        {...register('role_id')}
        onChange={e => {
          const selected = roles.find(r => r.id === parseInt(e.target.value));
          setSelectedRole(selected?.name);
          setValue('role_id', selected.id);
        }}
      >
        {roles.map(role => (
          <option key={role.id} value={role.id}>{translateRole(role.name)}</option>
        ))}
      </select>

      {(selectedRole?.toLowerCase() === 'store' || selectedRole?.toLowerCase() === 'mağaza') && (
        <>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Store Name"
            {...register('store_name', { required: true, minLength: 3 })}
          />
          {errors.store_name && <p className="text-red-600 text-sm">Store name must be at least 3 characters</p>}

          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Store Phone (e.g. 05XXXXXXXXX)"
            {...register('store_phone', {
              required: true,
              pattern: /^05\d{9}$/
            })}
          />
          {errors.store_phone && <p className="text-red-600 text-sm">Invalid Turkish phone number</p>}

          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Tax ID (TXXXXVXXXXXX)"
            {...register('store_tax_no', {
              required: true,
              pattern: /^T\d{4}V\d{6}$/
            })}
          />
          {errors.store_tax_no && <p className="text-red-600 text-sm">Invalid Tax ID format</p>}

          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Bank Account (IBAN starting with TR)"
            {...register('store_bank_account', {
              required: true,
              pattern: /^TR\d{2}\d{5}\d{16}$/
            })}
          />
          {errors.store_bank_account && <p className="text-red-600 text-sm">Invalid IBAN format</p>}
        </>
      )}

      {submitError && <p className="text-red-600 text-sm">{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default SignUpPage;