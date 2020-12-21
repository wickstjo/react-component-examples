import { useContext, useEffect } from 'react';
import { Context } from './context';

export default () => {
   
   // GLOBAL STATE
   const { dispatch } = useContext(Context);

   // LOAD ONCE
   useEffect(() => {

      // HIDE METAMASK GARBAGE
      if (window.ethereum !== undefined) {
         window.ethereum.autoRefreshOnNetworkChange = false;
      }

      // WINDOW SIZE LISTENER
      window.addEventListener('resize', () => {
         dispatch({
            type: 'window',
            payload: {
               height: window.innerHeight,
               width: window.innerWidth
            }
         })
      })

      // MOUSE CLICK EVENT LISTENER
      window.addEventListener('click', event => {
         dispatch({
            type: 'click',
            payload: event
         })
      })

   // eslint-disable-next-line
   }, [])

   return null;
}