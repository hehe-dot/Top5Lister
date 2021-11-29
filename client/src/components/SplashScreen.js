import { Button } from "@mui/material";
import { Link } from 'react-router-dom'

export default function SplashScreen() {
    return (
        <div id="splash-screen">
            <h1>Welcome to The Top 5 Lister! <br /></h1>
            <p style={{color: '#6666ff'}}>Come and create the list of the top items in your heart! 
                Share and compare to find your potential friend!</p>
            <Button class="splash-screen-button"><Link to='/login/'>Login</Link></Button>
            <Button class="splash-screen-button"><Link to='/register/'>Register</Link></Button>
            <Button class="splash-screen-button"><Link to='/'>Continue as Guest</Link></Button>
            <div class="developer">Developed by Jia Yi He</div>
        </div>
    )
}