import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocSidebarItem(props) {
  // Leer el método HTTP solo si está definido
  const apiMethod = props.item?.customProps?.method || null; // Valor predeterminado: null
  const methodClass = apiMethod ? apiMethod.toLowerCase() : ''; // Clase CSS basada en el método

  return (
    <div className={clsx(styles.sidebarItem)}>
      <OriginalDocSidebarItem {...props} />
      {apiMethod && ( // Mostrar solo si apiMethod está definido
        <span className={clsx(styles.method, styles[methodClass])}>
          {apiMethod}
        </span>
      )}
    </div>
  );
}
