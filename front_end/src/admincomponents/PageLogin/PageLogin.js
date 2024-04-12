import {useState} from "react";
import axiosConfig from "../../axiosConfig";
import {CONNECTED, setLogin as setUserLogged} from "../../login";



const NOT_EMPTY_ERROR_MESSAGE = "Le champs est requis"

export default function ({setLogin, setShowLoginPage}) {
    const [message, setMessage] = useState("");
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const [inputsStatus, setInputsStatus] = useState({
        username: { valid: false, errorMessage: "" },
        password: { valid: false, errorMessage: "" }
    });
    const shouldDisabled = () => {
        return !(inputsStatus.username.valid && inputsStatus.password.valid)
    }
    const handleUserNameChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setInputsStatus( v => ( { ...v, username: {valid: false, errorMessage: NOT_EMPTY_ERROR_MESSAGE}}));
        }else {
            setInputsStatus( v => ( { ...v, username: {valid: true, errorMessage: ""}}));
        }
        setCredentials(v => ({...v, username: value}));
    }
    const handleUserPasswordChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setInputsStatus( v => ( { ...v,  password: {valid: false, errorMessage: NOT_EMPTY_ERROR_MESSAGE}} ) )
        }else {
            setInputsStatus( v => ( { ...v,  password: {valid: true, errorMessage: ""}} ) )
        }
        setCredentials(v => ({...v, password: value}));
    }

    const handleAuthFormSubmit = (e) => {
        e.preventDefault();
        getToken(credentials);
    }

    const getToken = async (_credentials) => {
        try {

            const response = await axiosConfig.post(
                "/auth/generateToken",
                _credentials,
            );
            setUserLogged(response.data)
            setLogin({status: CONNECTED})

        } catch (error) {
            setMessage("Vérifier vos informations de connexion")
            console.error(
                "Erreur lors de l'authentification:",
                error,
            );
        }
    };


    return <section>
        <p>{message}</p>
        <form onSubmit={(e) => {handleAuthFormSubmit(e)}} >
            <div>
                <label>
                    Nom d'utilisateur
                    <input type={"text"} value={credentials.username} onChange={(e) =>  handleUserNameChange(e) } />
                </label>

                <p>{!inputsStatus.username.valid && inputsStatus.username.errorMessage}</p>
            </div>
            <div>
                <label>
                    Mot de passe
                    <input type={"password"} value={credentials.password} onChange={(e) =>  handleUserPasswordChange(e) } />
                </label>
                <p>{!inputsStatus.password.valid && inputsStatus.password.errorMessage}</p>
            </div>
            <input disabled={shouldDisabled()} type={"submit"} value={"S'authentifier"} />
            <input onClick={() => setShowLoginPage(false)} type={"button"} value={"Annuler"} />
        </form>
    </section>
}