import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import Navbar from './components/navbar/Navbar';
import PanelsContainer from './components/panelsContainer/PanelsContainer.component';

const App = () => {
    return (
        <Provider store={store}>
            <div className="main">
                <Navbar />
                <PanelsContainer />
            </div>
        </Provider>
    );
};

export default App;
