import { SocialIcon } from 'react-social-icons';
const  Footer= () => {
    return (
        <div id="footer">
            <p>By</p>
            <h3><strong>By Verdiane DADA</strong> </h3>
            <SocialIcon url="https://www.linkedin.com/in/verdianedada" network="linkedin" bgColor="white" style={{ height: 33, width: 33}}/>
            <SocialIcon url="https://github.com/verdianeDada" bgColor="white"  network="github" style={{ height: 33, width: 33 }}/>
            <SocialIcon url="mailto:dada.verdiane@gmail.com"  bgColor="white" network="mailto" style={{ height: 33, width: 33 }}/>
        </div>
    )
}

 export default Footer