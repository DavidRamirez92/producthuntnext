import App from 'next/app';
import '../styles/globals.css';
import firebase,{FirebaseContext} from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

const MyApp = (props) => {
  console.log(firebase);
  const usuario = useAutenticacion();

  const {Component,pageProps} = props;
  return(
    <FirebaseContext.Provider
      value = {{
        firebase,
        usuario
      }}
    >
      <Component{...pageProps}/>
    </FirebaseContext.Provider>
  ) 
}

export default MyApp;
