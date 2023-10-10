import '../shared/styles/style.scss';
import {Toaster} from "react-hot-toast";

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';
import {AuthChecker}from'@/features/Auth'

export const App = () => {
    const { theme } = useTheme();
    return (
            <div id='app' className={`app ${theme}`}>
                 <AppRouter />
                <AuthChecker/>
                <Toaster/>
             </div>
    );
};


