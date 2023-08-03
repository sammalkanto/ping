import pingLogo from '../assets/logo.svg';
import illustration from '../assets/illustration-dashboard.png';
import facebookLogo from '../assets/logo-facebook.svg';
import twitterLogo from '../assets/logo-twitter.svg';
import instagramLogo from '../assets/logo-instagram.svg';
import {useState} from "react";

const Ping = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setError('');
            return;
        }
        setError('Please provide a valid email address')
    }

    return (
        <div className='main'>
            <img className='ping-logo' src={pingLogo}/>
            <h1 className='title'>We are launching <span className='highlight'>soon!</span></h1>
            <div className='description'>Subscribe and get notified</div>
            <form onSubmit={handleSubmit}>
                <input className={error ? 'error' : ''} value={email} onChange={({target}) => {setEmail(target.value)}} placeholder='Your email address...' onClick={() => setError('')} onFocus={() => setError('')}/>
                <div className={'message'}>{error}</div>
                <button className='submit'>Notify Me</button>
            </form>
            <img className='illustration' src={illustration}/>
            <div className='bottom'>
                <div className='socials'>
                    <div className='social-logo'>
                        <img src={facebookLogo}/>
                    </div>
                    <div className='social-logo'>
                        <img src={twitterLogo}/>
                    </div>
                    <div className='social-logo'>
                        <img src={instagramLogo}/>
                    </div>
                </div>
                <div className='copyright'>© Copyright Ping. All rights reserved.</div>
            </div>
        </div>
    )
};

export default Ping;