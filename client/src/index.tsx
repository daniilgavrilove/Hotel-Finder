import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import {StoreProvider} from "@/app/providers/StoreProvider";
import {ErrorBoundary} from "@/app/providers/ErrorBoundary";



const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container);

root.render(
    <StoreProvider >
        <ErrorBoundary>

        <ThemeProvider>
            <App />

        </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
);
