import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faLinkedin, faGoodreads, faBehanceSquare} from '@fortawesome/free-brands-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

const roles = ["Copywriter", "Storyteller", "Chai Loyalist", "Cat Lover", "Bookworm", "Dreamer"];

const Home: React.FC = () => {
    const [currentRole, setCurrentRole] = useState<string>(roles[0]);
    const [roleIndex, setRoleIndex] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(false);

    // Initialize default positions for the boxes
    const [imageStyle, setImageStyle] = useState<React.CSSProperties>({ transform: 'translate(0px, 0px)' });
    const [box1Style, setBox1Style] = useState<React.CSSProperties>({ transform: 'translate(0px, 0px)' });
    const [box2Style, setBox2Style] = useState<React.CSSProperties>({ transform: 'translate(0px, 0px)' });
    const [box3Style, setBox3Style] = useState<React.CSSProperties>({ transform: 'translate(0px, 0px)' });
    const [box4Style, setBox4Style] = useState<React.CSSProperties>({ transform: 'translate(0px, 0px)' });

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000); // Change role every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimate(true);
        setCurrentRole(roles[roleIndex]);
        const timeout = setTimeout(() => setAnimate(false), 2800); // Duration of the animation

        return () => clearTimeout(timeout);
    }, [roleIndex]);

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const moveX = (clientX / innerWidth - 0.5) * 40; // Adjust the multiplier for more/less movement
        const moveY = (clientY / innerHeight - 0.5) * 40; // Adjust the multiplier for more/less movement
        setImageStyle({
            transform: `translate(${moveX}px, ${moveY}px)`
        });
        setBox1Style({
            transform: `translate(${moveX / 2}px, ${moveY / 2}px)`
        });
        setBox2Style({
            transform: `translate(${moveX / 3}px, ${moveY / 3}px)`
        });
        setBox3Style({
            transform: `translate(${moveX / 4}px, ${moveY / 4}px)`
        });
        setBox4Style({
            transform: `translate(${moveX / 5}px, ${moveY / 5}px)`
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop; // Get the exact top position of the About section
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
    
        const onScroll = (e: WheelEvent) => {
            // Check if the user is at the top of the page and scrolling down
            if (window.scrollY === 0 && e.deltaY > 0) {
                clearTimeout(scrollTimeout); // Clear any existing timeout
                scrollTimeout = setTimeout(() => {
                    handleScroll(); // Trigger the scroll only after the user stops scrolling
                }, 350); // Adjust the debounce delay as needed
            }
        };
    
        window.addEventListener('wheel', onScroll, { passive: false });
        return () => window.removeEventListener('wheel', onScroll);
    }, []);

    return (
        <section id="home" className={styles.home}>
            
            <div className={styles.box1} style={box1Style}></div>
            <div className={styles.box2} style={box2Style}></div>
            <div className={styles.box3} style={box3Style}></div>
            <div className={styles.box4} style={box4Style}></div>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/maria-noronha-104683204/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/the.literary_omnivore/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href="https://www.goodreads.com/user/show/113591784-maria-noronha" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoodreads} />
                </a>
                <a href="https://www.behance.net/marianoronha1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBehanceSquare} />
                </a>
            </div>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <h1 className={styles.hello}>Hello, I'm</h1>
                    <h1 className={styles.name}>Maria</h1>
                    <h2 className={`${styles.role} ${animate ? styles.animate : ''}`}>{currentRole}</h2>
                    <div className={styles.buttons}>
                        <a href="#about" className={styles.button}>
                            <FontAwesomeIcon icon={faPenNib} className={styles.icon} /> About Me
                        </a>
                    </div>
                </div>
                <div className={styles.image} style={imageStyle}>
                    <img src="/maria_portrait_2.png" alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;