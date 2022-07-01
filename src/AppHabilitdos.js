import React, { useState } from 'react';
import { useForm } from './hooks/useForm';

import logo from './assets/svg/logo.svg';
import './App.css';
import { Modal } from './Modal';
import { useFetch } from './hooks/useFetch';

const initialState = {
  cedula: '',
};

export const AppHabilitdos = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formError, setFormError] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const { data, error, loading } = useFetch('./data/profesor.json');
  console.log(error);

  // LLenado de Formulario
  const { formValues, handleInput, reset } = useForm(initialState);
  const { cedula } = formValues;

  const obtencionUser = (data, cedula) => {
    if (!cedula) return;
    const itemUser = data.filter((user) => user.NUMCED === parseInt(cedula));
    setUsuario(itemUser);
  };

  // Envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cedula) {
      setFormError(true);
      return;
    }
    setFormError(false);

    // Envio de formulario
    obtencionUser(data, cedula);
    reset();
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="app__container">
      {isOpenModal && <Modal closeModal={closeModal} />}
      <div className="app__content card__shadow">
        <h3 className="text-secondary text-center">Verifica tus DATOS</h3>
        <small className="app__mesage">WebMaick</small>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="number"
              name="cedula"
              placeholder="Ingresa tu numero de CI"
              value={cedula}
              onChange={handleInput}
            />

            <button className="btn btn-primary btn-search">
              Buscar
              <svg
                height="21"
                viewBox="0 0 21 21"
                width="21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8.5" cy="8.5" r="5" />
                  <path d="m17.571 17.5-5.571-5.5" />
                </g>
              </svg>
            </button>

            {formError && <div className="form__error">Ingrese su num CI</div>}
          </div>
        </form>

        <small className="app__mesage">
          Requieres un diseño en especifico <br />
          <a
            href="https://api.whatsapp.com/send?phone=+59168166974&text=Hola!%20Quiero%20realizar%20una%20consulta!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactame haciendo click aqui!!!
          </a>
        </small>

        <div className="user__video">
          <button className="user__boton" onClick={() => setIsOpenModal(true)}>
            <small>Video para Imprimir numero de butaca</small>
            <svg
              height="25"
              viewBox="0 0 21 21"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="crimson"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(2 5)"
              >
                <path d="m2.49368982.53498937 11.99999998-.03787142c1.0543566-.00331643 1.9207298.80983192 2.0003436 1.84444575l.0059666.15555425v6.00288205c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-5.96502059c0-1.10210602.89158929-1.9965128 1.99368982-1.99999004z" />
                <path d="m7.5 7.5 3-2-3-2z" fill="currentColor" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {usuario === null ? (
            ''
          ) : usuario.length > 0 ? (
            <div className="user__container">
              <div className="user__content card__shadow">
                <h3 className="text-center">Usuario HABILITADO</h3>
                <h5>Datos Generales</h5>
                <div className="user__contenido">
                  <div className="d-flex user__detail">
                    <h4>BUTACA:</h4>
                    <span>{usuario[0].BUTACA}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>DEPARTAMENTO:</h4>
                    <span>{usuario[0].DEPARTAMENTO}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>SEDE:</h4>
                    <span>{usuario[0].SEDE}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>RECINTO:</h4>
                    <span>{usuario[0].RECINTO}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>NUM. CEDULA:</h4>
                    <span>{usuario[0].NUMCED}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>PATERNO:</h4>
                    <span>{usuario[0].PATERNO}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>MATERNO:</h4>
                    <span>{usuario[0].MATERNO}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>PRIMER NOMBRE:</h4>
                    <span>{usuario[0].NOMBRE1}</span>
                  </div>

                  <div className="d-flex user__detail">
                    <h4>SEG. NOMBRE:</h4>
                    <span>{usuario[0].NOMBRE2}</span>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => setUsuario(null)}
                  >
                    Nueva Consulta
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="form__error">No se encuentra Habilitado</div>
          )}
        </div>
      )}
    </div>
  );
};

/* 
  "BUTACA": 41036,
  "DEPARTAMENTO": "LA PAZ",
  "SEDE": "LA PAZ",
  "RECINTO": "Coliseo \"HEROES DE OCTUBRE\" - El Alto",
  "NUM.CED.": 1892702,
  "PATERNO": "CRUZ",
  "MATERNO": "BORGES",
  "NOMBRE1": "ZUMILDA",
  "NOMBRE2": "."
*/
