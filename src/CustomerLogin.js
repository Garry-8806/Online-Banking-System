import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import './css/CustomerLogin.css';
import axios from 'axios';
import CustomerAccount from './CustomersAccount'; // Import CustomerAccount component
import InternetBankingForm from './InternetBankingService';

const CustomerLogin = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [isFirstTimeRegistration, setIsFirstTimeRegistration] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [isLoginLocked, setIsLoginLocked] = useState(false);
    const [lockTimer, setLockTimer] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        let timerId;
        if (isLoginLocked) {
            timerId = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [isLoginLocked]);

    useEffect(() => {
        if (remainingTime <= 0) {
            setIsLoginLocked(false);
            setLoginAttempts(0);
            setLockTimer(0);
        }
    }, [remainingTime]);

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    };

    const handleShowRegistrationForm = () => {
        setShowLoginForm(false);
        setShowRegistrationForm(true);
        setIsFirstTimeRegistration(true);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (isLoginLocked) return;
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await axios.get(`http://localhost:3000/CustomerData?username=${username}&password=${password}`);
            const customer = response.data[0];
            if (customer) {
                console.log('Logged in as:', username);
                setLoginError('');
                setLoginAttempts(0);
                toast.success('You are logged in successfully!', { autoClose: 5000 });
                setLoggedInUser(customer);

                // Check if the user is logging in for the first time
                if (isFirstTimeRegistration) {
                    // Filter out the required fields
                    const { id, fullName, accountNumber, accountType, mobileNumber } = customer;
                    // Create an object with filtered data
                    const newData = { id, fullName, accountNumber, accountType, mobileNumber };

                    // Check if the data already exists in InternetBankingServiceCustomerAccount
                    const existingDataResponse = await axios.get(`http://localhost:3000/InternetBankingServiceCustomerAccount`);
                    const existingData = existingDataResponse.data;

                    // Check if newData already exists in the existing data based on id or accountNumber
                    const isDuplicate = existingData.some(data => data.id === newData.id || data.accountNumber === newData.accountNumber);

                    // If newData is not a duplicate, store it in InternetBankingServiceCustomerAccount
                    if (!isDuplicate) {
                        await axios.post(`http://localhost:3000/InternetBankingServiceCustomerAccount`, newData);
                        console.log('Data stored in InternetBankingServiceCustomerAccount:', newData);
                        setIsFirstTimeRegistration(false); // Mark registration as completed
                    } else {
                        console.log('Data already exists:', newData);
                    }
                }
            } else {
                setLoginError('Invalid username or password');
                setLoginAttempts(loginAttempts + 1);
                if (loginAttempts >= 2) {
                    setIsLoginLocked(true);
                    setLockTimer(300);
                    setRemainingTime(300);
                    toast.error('You reached 3 attempts. System locked. Try again after 5 minutes.');
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Something went wrong');
        }
    };

    return (
        <div className="login-container">
            {!loggedInUser && showLoginForm && !isLoginLocked && (
                <div>
                    <h2>Customer Login</h2>
                    <img src='./images/manager_1524196.png' alt="Your Image"></img>
                    {loginError && <p className="error">{loginError}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className='USERNAME' htmlFor="username">Username:</label>
                            <input style={{width:"500PX"}} type="text" id="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" style={{width:"500PX"}} id="password" required />
                        </div>
                        <button className="loginButton" type="submit">Login</button>
                        <p>Not registered yet? <button onClick={handleShowRegistrationForm}>Register</button></p>
                    </form>
                </div>
            )}
            {isLoginLocked && (
                <div>
                    <p className="error">You reached 3 attempts. System locked. Try again after {Math.ceil(remainingTime / 60)} minutes.</p>
                    <p>Remaining time: {remainingTime} seconds</p>
                </div>
            )}
            {showRegistrationForm && (
                <div>
                    <h2>{isFirstTimeRegistration ? 'Internet Banking Service' : 'Registration'}</h2>
                    <InternetBankingForm onSubmit={handleLogin} /> {/* Changed onSubmit handler to handleLogin */}
                    <p className='p-tag'>{isFirstTimeRegistration ? 'Already have an account?' : 'Already registered?'} <button onClick={handleShowLoginForm}>{isFirstTimeRegistration ? 'Login' : 'Back to Login'}</button></p>
                </div>
            )}

            {loggedInUser && <CustomerAccount loggedInUser={loggedInUser} />}
            <ToastContainer />
        </div>
    );
};

export default CustomerLogin;
