import React from 'react';
import Slideshow from '../components/slideshow'; // Adjust the path as per your file structure
import './home.css'; // Import your stylesheet
import webDevImage from '../assets/images/webDevImage.png'; // Adjust the path and filename as necessary
import crossPlatformImage from '../assets/images/cross-platform.webp'; // Adjust the path and filename as necessary
import cloudComputingImage from '../assets/images/cloudComputingImage.png';

function Home() {
    const slogans = ["WeOptimyze Tech, Tailoring Talent for Tomorrow's Tech.", 
    "Optimizing Your Tech Talent, Amplifying Your Success", 
    "Optimize Your Team, Maximize Your Dreams – WeOptimyze Tech Staffing", 
    "Empowering Innovation, One Expert at a Time - WeOptimyze Tech Staffing",
    "Talent Meets Technology Here",
    "WeOptimyze: Connecting Talent, Transforming Technology",
    "WeOptimyze: Where Tech Talent Meets Perfect Fit"]; // Add as many slogans as you want

    return (
        <div className="App">
            <Slideshow slogans={slogans} />
            <div className='Headline'>
            Crafting Success Together
            </div>
            <div className='service-container'>
                <div className='service-text'>
                    <h3>Web Development Services</h3>
                    <p>Offering comprehensive web development solutions, we specialize in creating responsive, user-friendly websites tailored to your business needs. Whether it's e-commerce platforms, corporate websites, or custom web applications, our expertise ensures a robust online presence for your brand.
                    </p>
                </div>
                <div className='service-image'>
                <img src={webDevImage} alt="web Dev" />
                </div>
            </div>

            <div className='service-container'>
                <div className='service-image'>
                <img src={crossPlatformImage} alt="Cross Platform App Development" />
                </div>
                <div className='service-text'>
                    <h3>Cross-Platform App Development</h3>
                    <p>Our cross-platform app development services bridge the gap between different operating systems. We build applications that run seamlessly on iOS, Android, and other platforms, ensuring a consistent user experience and broader market reach for your mobile apps.
                    </p>
                </div>
                
            </div>

            <div className='service-container'>
                <div className='service-text'>
                    <h3>Cloud Computing Solutions</h3>
                    <p> Embrace the power of the cloud with our cloud computing solutions. From scalable storage options to advanced cloud-based applications, we help businesses optimize their operations, enhance data security, and achieve greater flexibility in their IT infrastructure.
                    </p>
                </div>
                <div className='service-image'>
                <img src={cloudComputingImage} alt="Cloud Computing" />
                </div>
            </div>
            {/* <div className='row'>
                <h3 className='text-column'>Web Development Services</h3>
                <p>
                    Offering comprehensive web development solutions, we specialize in creating responsive, user-friendly websites tailored to your business needs. Whether it's e-commerce platforms, corporate websites, or custom web applications, our expertise ensures a robust online presence for your brand.
                </p>
                <div className='image-column'>IMAGE</div>
            </div>
            <div className='row'>
            <div className='image-column'>IMAGE</div>
                <h3>Cross-Platform App Development</h3>
                <p>
                    Our cross-platform app development services bridge the gap between different operating systems. We build applications that run seamlessly on iOS, Android, and other platforms, ensuring a consistent user experience and broader market reach for your mobile apps.
                </p>                
            </div>
            <div className='row'>
                <h3>Cloud Computing Solutions</h3>
                <p>
                    Embrace the power of the cloud with our cloud computing solutions. From scalable storage options to advanced cloud-based applications, we help businesses optimize their operations, enhance data security, and achieve greater flexibility in their IT infrastructure.
                </p>
                <div className='image-column'>IMAGE</div>
            </div> */}
        </div>
    );
}

export default Home;
