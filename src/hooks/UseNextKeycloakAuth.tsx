import { useContext } from 'react';
import { NextKeycloakAuthContext } from '../providers/NextKeycloakAuthContext';

/**
 *
 * @description A hook to use NextKeycloakAuthContext on client side
 */
export const useNextKeycloakAuth = () => useContext(NextKeycloakAuthContext);
