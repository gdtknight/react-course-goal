import React from 'react';

// CSS Module 사용
import styles from './Button.module.css';

// import styled from 'styled-components';

// // back-tick을 통해 button method로 인수 전달 가능.
// // button method는 새로운 Button Component를 반환한다.
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   /* pseudo-selector */
//   /* &: 의 형식으로 사용 */
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;


// styles.button 은 compiile 후에 Button_button__HashValue 와 같은 형태가 된다.
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
