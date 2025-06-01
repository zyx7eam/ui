'use client';

import React, { useState } from 'react';
import Input from '@zyxui/input';
import { SearchIcon, EyeIcon, EyeOffIcon, UserIcon, MailIcon, LockIcon } from 'lucide-react';

const InputExample = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Input Component Examples</h1>
          <p className="text-lg text-gray-600">
            Comprehensive examples of the Input component with various configurations
          </p>
        </div>

        {/* Basic Inputs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Basic input" />
            <Input label="With Label" placeholder="Enter text here" />
            <Input
              label="With Helper Text"
              placeholder="Username"
              helperText="Choose a unique username"
            />
            <Input
              required
              label="Required Field"
              placeholder="This field is required"
            />
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input variant="default" label="Default" placeholder="Default variant" />
            <Input variant="filled" label="Filled" placeholder="Filled variant" />
            <Input variant="underlined" label="Underlined" placeholder="Underlined variant" />
            <Input variant="bordered" label="Bordered" placeholder="Bordered variant" />
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sizes</h2>
          <div className="space-y-4">
            <Input size="sm" label="Small" placeholder="Small input" />
            <Input size="md" label="Medium" placeholder="Medium input" />
            <Input size="lg" label="Large" placeholder="Large input" />
          </div>
        </section>

        {/* States */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Default State" placeholder="Normal input" />
            <Input
              state="success"
              label="Success State"
              placeholder="Valid input"
              helperText="Looks good!"
            />
            <Input
              state="warning"
              label="Warning State"
              placeholder="Check this"
              helperText="Please double-check this value"
            />
            <Input
              state="error"
              label="Error State"
              placeholder="Invalid input"
              errorMessage="This field is required"
            />
          </div>
        </section>

        {/* With Icons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">With Icons & Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              startContent={<UserIcon size={16} />}
              label="Username"
              placeholder="Enter username"
            />
            <Input
              startContent={<MailIcon size={16} />}
              label="Email"
              type="email"
              placeholder="Enter email"
            />
            <Input
              startContent={<LockIcon size={16} />}
              endContent={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                </button>
              }
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <Input
              startContent={<SearchIcon size={16} />}
              clearable
              label="Search"
              placeholder="Search..."
              value={searchValue}
              onChange={setSearchValue}
              onClear={() => setSearchValue('')}
            />
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Interactive Examples</h2>
          <div className="space-y-6">
            {/* Email Validation */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-4">Email Validation</h3>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                errorMessage={emailError}
                helperText={!emailError ? "We'll never share your email with anyone else." : undefined}
                startContent={<MailIcon size={16} />}
              />
            </div>

            {/* Form Example */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-4">Sign Up Form</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    required
                    label="First Name"
                    placeholder="John"
                    startContent={<UserIcon size={16} />}
                  />
                  <Input
                    required
                    label="Last Name"
                    placeholder="Doe"
                    startContent={<UserIcon size={16} />}
                  />
                </div>
                <Input
                  required
                  type="email"
                  label="Email Address"
                  placeholder="john.doe@example.com"
                  startContent={<MailIcon size={16} />}
                  helperText="We'll use this for important notifications"
                />
                <Input
                  required
                  type="password"
                  label="Password"
                  placeholder="Create a strong password"
                  startContent={<LockIcon size={16} />}
                  helperText="Must be at least 8 characters"
                />
                <Input
                  required
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  startContent={<LockIcon size={16} />}
                />
              </form>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Disabled State</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input disabled label="Disabled Input" placeholder="Cannot edit this" />
            <Input disabled label="Disabled with Value" value="Read-only value" />
          </div>
        </section>

        {/* Different Input Types */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Input Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" label="Text" placeholder="Text input" />
            <Input type="email" label="Email" placeholder="email@example.com" />
            <Input type="password" label="Password" placeholder="Password" />
            <Input type="number" label="Number" placeholder="123" />
            <Input type="tel" label="Phone" placeholder="+1 (555) 123-4567" />
            <Input type="url" label="URL" placeholder="https://example.com" />
            <Input type="date" label="Date" />
            <Input type="time" label="Time" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default InputExample;
