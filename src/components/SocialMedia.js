import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function SocialMedia({ platform, link }) {
    let icon;
    switch (platform) {
        case 'facebook':
            icon = faFacebookF;
            break;
        case 'twitter':
            icon = faTwitter;
            break;
        case 'instagram':
            icon = faInstagram;
            break;
        default:
            icon = null; 
            break;
    }
    return (
        <a href={link}>
            <FontAwesomeIcon icon={icon} size="5x"/>
        </a>
    );
}

export default SocialMedia;
