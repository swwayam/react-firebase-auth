import {auth, provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'

function Signin(){


    const login = () => {
      signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
      }).catch((error) => {
        console.log(error.message)
      })
    }

    return(
        <div>
            <button onClick={login}>Signin with google</button>
        </div>
    )

}


export default Signin;