import React, { useState } from 'react';
import '../Styles/Register.css';
import Select from 'react-select';
import MultiSelectDropdown from './Multivalueddl';

const options = [
    { value: 'Option1', label: 'Option 1' },
    { value: 'Option2', label: 'Option 2' },
    { value: 'Option3', label: 'Option 3' },
  ];

export default function Register() {
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
    const [selectedOptions, setSelectedOptions] = useState([]);


    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
        otp: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
        select: ''
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
            confirmPassword: '',
            select: ''
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

        if (selectedOptions.length === 0) {
            newErrors.select = 'Please select at least one option';
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

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };



    return (
        <div style={{height:"100vh"}} class="register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome to Relevantz </h3>
                    <h4>Learning Management System</h4>
                    <h6>Gain your knowledge with Relevantz</h6>
                    {/* <input type="submit" name="" value="Login" /><br /> */}
                </div>
                <div class="col-md-9 register-right">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">Registration</h3>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="First Name *" value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                                        {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Phone Number *" value={contactNumber} name="phonenumber" onChange={(e) => setContactNumber(e.target.value)} />
                                        {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
                                    </div>
                                    <div class="form-group d-flex">
                                        <input type="email" class="form-control" placeholder="Your Email *" value={email} onChange={(e) => setEmail(e.target.value)} />

                                        {/* Green tick symbol for verified email */}
                                        {emailVerified && <span className="text-success">&#10004;</span>}
                                        {/* Button to send OTP */}
                                        {!emailVerified && <button className='btn btn-primary' onClick={handleSendOTP}>Send Otp</button>}
                                    </div>
                                    {showOTP && (<div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Enter OTP *" value="" />
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>)}
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password *" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
                                        {errors.password && <div className="text-danger">{errors.password}</div>}
                                    </div>

                                    <div class="form-group">
                                        <div class="maxl">
                                            <h6 style={{marginTop:"25px"}}>Gender:</h6>
                                            <div style={{marginLeft:"75px",marginTop:"-43px"}}>
                                            <label class="gender radio inline">
                                                <input type="radio" name="gender" value="male" checked={gender === "Male"} onChange={handleGenderChange} />
                                                <span> Male </span>
                                            </label>
                                            <label class="gender radio inline">
                                                <input type="radio" name="gender" value="female" checked={gender === "Female"} onChange={handleGenderChange} />
                                                <span> Female </span>
                                            </label>
                                            <label class="gender radio inline">
                                                <input type="radio" name="gender" value="female" checked={gender === "Female"} onChange={handleGenderChange} />
                                                <span> Others </span>
                                            </label>
                                            </div>
                                        </div>
                                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Last Name *" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} />
                                        {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                    </div>

                                    <div class="form-group">
                                        <input type="date" class="form-control" placeholder="Date Of Birth *" value={dob} name="dob" onChange={(e) => setDob(e.target.value)} />
                                        {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                    </div>
                                   <div class="form-group">
                                        <Select
                                            isMulti
                                            name="colors"
                                            options={options}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            value={selectedOptions}/>
                                            {errors.select && <div className="text-danger">{errors.select}</div>}
                                        
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Confirm Password *" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                                         {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                    </div>
                                    <br></br>
                                    <input type="submit" class="btnRegister" value="Register" onClick={handleSubmit} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
