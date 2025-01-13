import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'react-jss';
import { Reset, TryCatch } from './components';
import { Theme } from './theme';

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Reset>
          <TryCatch>
            <App />
          </TryCatch>
        </Reset>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
