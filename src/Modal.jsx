import React from 'react';

import './modal.css';

export const Modal = ({ closeModal }) => {
  return (
    <div className="modal__container">
      <div className="modal__close" onClick={closeModal}>
        <svg
          height="21"
          viewBox="0 0 21 21"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="crimson"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(5 5)"
          >
            <path d="m10.5 10.5-10-10z" />
            <path d="m10.5.5-10 10" />
          </g>
        </svg>
      </div>
      <div className="modal__content">
        <iframe
          height="315"
          src="https://www.youtube.com/embed/Zsy5KykLfPA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
