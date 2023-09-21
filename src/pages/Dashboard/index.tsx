import { IonPage, IonText } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { CardDetails } from "../../components/CardDetails";
import axios from 'axios';


export let Dashboard:React.FC = () =>{
    const [dadosParaPassar, setDadosParaPassar] = useState(null);
    const [dados, setDados] = useState([]);
    
    const handleComponentClick = (data:any) => {
        setDadosParaPassar(data);
    };

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = axios.get('http://localhost:3000/dados');
                const data = (await response).data;
                setDados(data);
            } catch (error: any) {
                console.log(error);
            }
        } 
        fetchData();
    },[])
    
    return(
    <IonPage>
        {dados && dados.map((objeto:any,index:any)=>(
            <CardDetails key={index} Data={objeto} OnClick={handleComponentClick} />
        ))}
    </IonPage>
    )

}