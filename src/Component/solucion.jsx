import React, {useEffect,useState} from 'react';

const Cambios = (props) => {
    const [edad, setedad] = useState(0);
    const [fecha, setfecha] = useState(new Date());

    useEffect(() => {
        const Reloj = setInterval(()=>{
            setedad(edad+1)
            setfecha(new Date())
        },1000);
        return () => {
            clearInterval(Reloj);
        }
    }, [edad]);
    return (
        <div>
            <h1>Hora actual: {fecha.toLocaleTimeString()}</h1>
            <h2>{props.nombre} {props.apellido}</h2>
            <h2>Edad: {edad}</h2>

        </div>
    );
}

export default Cambios;