import {createRoot} from 'react-dom/client'
import {App} from './src/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('app'))
root.render(<App/>)