import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocSidebarItem(props) {
  // Read the HTTP method or webhook
  const apiMethod = props.item?.customProps?.method || null; // Default: null
  const methodClass = apiMethod ? apiMethod.toLowerCase() : ''; // Class based on method

  return (
    <div className={clsx(styles.sidebarItem)}>
      <OriginalDocSidebarItem {...props} />
      {apiMethod && ( // Show only if apiMethod is defined
        <span className={clsx(styles.method, styles[methodClass])}>
          {apiMethod === 'WEBHOOK' ? 'Webhook' : apiMethod}
        </span>
      )}
    </div>
  );
}
