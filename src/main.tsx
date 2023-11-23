import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@stores/index';
import Routers from '@routers/Routers';
import 'aos/dist/aos.css';

// aos 초기화 코드 추가
import AOS from 'aos';
AOS.init();

const queryClient = new QueryClient();

import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId: string = import.meta.env.REACT_APP_CLIENT_ID!;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <RouterProvider router={Routers} />
        </Provider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
