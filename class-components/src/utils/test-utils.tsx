// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';

// import { store } from '../store';
// import { ThemeProvider } from '../components';

// const renderWithRouter = (component: React.ReactNode, options: MemoryRouterProps = {}) => {
//   const Wrapper = ({ children }: { children: React.ReactNode }) => (
//     <MemoryRouter {...options}> {children} </MemoryRouter>
//   );

//   return render(component, { wrapper: Wrapper });
// };

// const renderWithProvider = (component: React.ReactNode, options: MemoryRouterProps = {}) => {
//   const Wrapper = ({ children }: { children: React.ReactNode }) => (
//     <Provider store={store}>
//       <ThemeProvider>
//         <MemoryRouter {...options}> {children} </MemoryRouter>
//       </ThemeProvider>
//     </Provider>
//   );

//   return render(component, { wrapper: Wrapper });
// };

// export { renderWithRouter, renderWithProvider };
