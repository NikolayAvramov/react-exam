import {AuthContext} from "./contexts/AuthContext.js";

import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import {Login} from "./components/Login/Login.js";
import {Navigation} from "./components/Navigation/Navigation.js";
import {Register} from "./components/Register/Register.js";
import {MyShowroom} from "./components/MyShowroom/MyShowroom.js";
import {Details} from "./components/Details/Details.js";
import {Footer} from "./components/Footer/Footer.js";
import {Home} from "./components/Home/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";

import {Showroom} from "./components/Showroom/Showroom.js";
import {Create} from "./components/Create/Create.js";
import {RouteGuards} from "./components/coman/RouteGuards.js";
import {Edit} from "./components/Edit/Edit.js";
import {Messages} from "./components/Messasges/Messages.js";
import {useLocalStorage} from "./hooks/useLocalStorage.js";
import {ContentProvider} from "./contexts/ContentContext.js";

function App() {
	const [user, setUser] = useLocalStorage("auth", {});

	const authContextValues = {
		user
	};

	return (
		<AuthContext.Provider value={authContextValues}>
			<ContentProvider>
				<Navigation setUser={setUser} />
				<Routes>
					<Route path="/login" element={<Login setUser={setUser} />} />
					<Route path="/register" element={<Register setUser={setUser} />} />
					<Route path="/showroom" element={<Showroom />} />
					<Route element={<RouteGuards />}>
						<Route path="/create" element={<Create />} />
						<Route path="/my-showroom" element={<MyShowroom />} />
						<Route path="/edit/:id" element={<Edit />} />
						<Route path="user/message" element={<Messages />} />
					</Route>
					<Route path="/details/:carId" element={<Details />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</ContentProvider>
			<Footer />
		</AuthContext.Provider>
	);
}

export default App;
