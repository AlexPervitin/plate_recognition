import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './i18n';
import { ThemeProvider } from './context/themeContext';
import Layout from './features/webcams/components/Layout';
import PlateRecognition from './features/webcams/views/PlateRecognition';
import { TableProvider } from './context/TableContext';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: '/',
    element: <PlateRecognition />,
  },

  {
    path: '*',
    element: <p>NOT FOUND</p>,
  },
]);

root.render(
  <>
    <ThemeProvider>
      <TableProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </TableProvider>
    </ThemeProvider>
  </>,
);
