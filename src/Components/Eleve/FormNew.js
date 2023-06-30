import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import API from "../../Containers/API/APIConnect";

const FormEleve = (props) => {
  return (
    <>
        <Formik
        initialValues={{ prenom: '', nom: '', moyenne:0 }} // Valeurs initiales
        onSubmit={(values, { setSubmitting }) => { // A l'envoi
            setTimeout(() => {
                API.post('/eleves', { // Notre méthode
                    prenom: values.prenom,  // Les valeurs prennent celles des input.
                    nom: values.nom,
                    moyenne: values.moyenne,
                    idProfesseur: 51 // Ici on met l'identifiant d'un professeur aléatoire de la liste
                })
                    .then(function (response) {
                        alert("Eleve crée !");
                        return props.handlerChange; // On lance la fonction qui récupérer les éléments de notre API
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                setSubmitting(false); // On désactive l'envoi le temps que ça s'envoit
            }, 400);
        }}
        validationSchema={Yup.object().shape({
            prenom : Yup.string()
            .min(5,'Votre prénom doit avoir plus de 5 caractères')
            .required("Le prénom est obligatoire !!!"),
            nom : Yup.string()
            .min(5,'Votre nom doit avoir plus de 5 caractères')
            .required("Le nom est obligatoire !!!"),
            moyenne : Yup.number()
            .integer()
            .min(0, "La moyenne ne peut pas être inférieur à 0")
            .max(20 , "La moyenne ne peut pas être supérieur à 20")
            .required("La moyenne est obligatoire !"),
        })}
        >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit} className="col-5">
            <div className="row mb-3">
                <div className="col-6">
                <label htmlFor="prenom" className="form-label">
                    Prénom :
                </label>
                <input type="text" className="form-control" id="prenom" aria-describedby="prenomHelp" name="prenom" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.prenom}/>
                { errors.prenom && 
                    <div className="errorMsg">
                        <span style={{color:"red"}}>{errors.prenom}</span>
                    </div>
                }
                </div>
                <div className="col-6">
                <label htmlFor="nom" className="form-label">
                    Nom :
                </label>
                <input type="text" className="form-control" id="nom" aria-describedby="nomHelp" name="nom" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nom}/>
                { errors.nom && 
                    <div className="errorMsg">
                        <span style={{color:"red"}}>{errors.nom}</span>
                    </div>
                }
                </div>
            </div>

            <div className="mb-3">
            <label htmlFor="moyenne" className="form-label">Moyenne:</label>
            <input type="number" className="form-control" id="moyenne" aria-describedby="moyenneHelp" name="moyenne" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.moyenne}/>
            { errors.moyenne && 
                <div className="errorMsg">
                    <span style={{color:"red"}}>{errors.moyenne}</span>
                </div>
            }
            </div>
            

            <div className="mt-3 float-end">
            <button type="submit" className="btn btn-success fs-5 px-5 mt-2" disabled={isSubmitting}>
                Valider {">"}
            </button>
            </div>
        </form>
       )}
     </Formik>
    </>
  );
};

export default FormEleve;