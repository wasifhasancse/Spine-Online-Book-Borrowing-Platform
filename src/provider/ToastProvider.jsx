'use client'
import { Toast, toast } from '@heroui/react';
import React from 'react';

const Provider = ({children}) => {
  return <Toast.Provider>{children}</Toast.Provider>
};

export default Provider;
