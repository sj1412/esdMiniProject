import './App.css';
// commponent imports
import LoginComponent from './components/LoginHandle/LoginComponent';
import SalaryHistoryComponent from './components/SalaryComponent/SalaryHistoryComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

function App() {

	//using json.parse as i stored the object in string format in login component
	const loginUser = JSON.parse(window.sessionStorage.getItem('loggedInUser'))

	return (
		<div className="App">
			{
				loginUser===null && <LoginComponent />
			}
			{
				loginUser!==null && 
				<>
					<NavbarComponent/>
					<SalaryHistoryComponent
					{...loginUser}
					/>
				</>
			}
			</div>
	);
}

export default App;
