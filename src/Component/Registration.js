import React, { useState } from 'react';
import '../Styles/Registration.css';
import MultiSelectDropdown from './Multivalueddl';

export default function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [enteredOTP, setEnteredOTP] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [streams, setStreams] = useState([]);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
        otp: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleSendOTP = () => {
        setShowOTP(true);
        setErrors('');
    };

    const handleOTPChange = (event) => {
        setEnteredOTP(event.target.value);
    };
    const handleOTPSubmit = (event) => {
        event.preventDefault();

        const expectedOTP = '1234';
        if (enteredOTP === expectedOTP) {
            setEmailVerified(true);
            setShowOTP(false);
            setErrors('');
        }
        else {
            setErrors('Invalid OTP');
        }
    };


    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform validation
        let isValid = true;
        const newErrors = {
            firstName: '',
            lastName: '',
            gender: '',
            dob: '',
            email: '',
            otp: '',
            contactNumber: '',
            password: '',
            confirmPassword: ''
        };

        if (!firstName) {
            newErrors.firstName = 'First Name is required';
            isValid = false;
        }

        if (!lastName) {
            newErrors.lastName = 'Last Name is required';
            isValid = false;
        }

        if (!gender) {
            newErrors.gender = 'Gender is required';
            isValid = false;
        }

        if (!dob) {
            newErrors.dob = 'Date of Birth is required';
            isValid = false;
        }

        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!contactNumber) {
            newErrors.contactNumber = 'Contact Number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(contactNumber)) {
            newErrors.contactNumber = 'Invalid contact number';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (!/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/.test(password)) {
            newErrors.password = 'Password must be between 8 to 12 characters';
            isValid = false;
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // Submit the form
            console.log('Form submitted successfully');
        } else {
            console.log('Form has errors');
        }
    };

    // Function to handle gender selection
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    // Function to handle stream selection
    const handleStreamChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setStreams(selectedOptions);
    };

    return (
        <div className="container">
            <div className='login-signup'>
                <div className='login'>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h3 className="sign">Sign Up</h3>
                        <p style={{ fontSize: 12, color: 'red' }} >{errors}</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <input type="text" className="un form-control" placeholder="Enter First Name *" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                </div>
                            </div>
                            {/* Other input fields */}
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <input type="text" className="un form-control" placeholder="Enter Last Name *" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Gender *</label>
                                <div className="mb-3">
                                    <label>
                                        <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={handleGenderChange} /> Male
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={handleGenderChange} /> Female
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <input type="radio" name="gender" value="Others" checked={gender === "Others"} onChange={handleGenderChange} /> Others
                                    </label>
                                </div>
                                {errors.gender && <div className="text-danger">{errors.gender}</div>}
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <input type="date" className="un form-control" placeholder="Enter Date of Birth *" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                                    {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                </div>
                            </div>
                        </div>
                        <MultiSelectDropdown/>
                        {/* Other input fields */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <input type="email" className="un form-control" placeholder="Enter Email *" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                    {/* Green tick symbol for verified email */}
                                    {emailVerified && <span className="text-success">&#10004;</span>}
                                    {/* Button to send OTP */}
                                    {!emailVerified && <button type="button" className="btn btn-primary" onClick={handleSendOTP}>Send OTP</button>}
                                </div>
                            </div>
                        </div>
                        {/* OTP field (conditionally rendered) */}
                        {showOTP && (
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <input type="text" className="un form-control" placeholder="Enter OTP" name="otp" onChange={handleOTPChange} />
                                        {/* Error message for invalid OTP */}
                                        {errors && <div className="text-danger">{errors}</div>}
                                    </div>
                                </div>
                            </div>
                        )}


                        <div className='col-md-6'>
                            <div className="mb-3">
                                <input type="text" className="un form-control" placeholder="Enter Contact Number *" name="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                                {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="password" className='pass form-control' placeholder='Enter password' name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-3'>
                                    <input type="password" className='pass form-control' placeholder='Enter confirm password' name="confirmpassword" required  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                </div>
                            </div>


                        </div>
                        <button type='submit' data-testid="ben" className='submit'>
                        <a>Submit</a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

