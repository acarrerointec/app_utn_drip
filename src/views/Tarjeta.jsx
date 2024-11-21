import { Menu } from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Whatsapp } from "./Whatsapp";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react"

const Tarjeta = () => {


    
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
    return (
        <>
          <Menu/>
          <br/>
   <div className="container mt-5">
        <h1 className="text-primary">Drip Coffee< img src='./taza-de-cafe.png'  alt="Icono" /> </h1>
      {user ? (
        <h4 className="text-center text-secondary">Hola, {user.displayName || "Usuario"} </h4>
      ) : (
        <h2 className="text-center text-secondary">Tarjeta digital de beneficios</h2>
      )}

    </div>


<h4 className="text-secondary">En desarrollo</h4>

<div className="containerMaps">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13132.666774527304!2d-58.4788287!3d-34.6252276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9255b603db7%3A0x733f8f4def991a74!2sDrip%20Coffee!5e0!3m2!1ses!2sar!4v1731927940747!5m2!1ses!2sar"
                width="auto" 
                height="auto" 
                style={{ border: 0 }}  /* Cambiado a un objeto de estilo */
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"  /* Cambiado a camelCase */
            ></iframe>
        </div>
        <Whatsapp/>
        </>
    );
}

export { Tarjeta };
