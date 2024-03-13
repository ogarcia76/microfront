import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const oneRootInit = document.getElementById('root');
const oneRoot = document.createElement('main');
oneRoot.setAttribute('id', 'oneRoot');
oneRootInit.appendChild(oneRoot); 

const root2 = ReactDOM.createRoot(
  document.getElementById('oneRoot')
);

window.renderOne = () => {
  root2.render(<App />);
};

window.unmountOne = (containerId) => {
  root2.unmount(document.getElementById(containerId));
};

if (!document.getElementById('One-container')) {
  root2.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
