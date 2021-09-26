import "./accounts.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from "react-router-dom";
import Account from "../Account/Account";
import RequestSection from "../RequestSection/RequestSection";

export default function Accounts(data) {
	return (
		<Router>
			<div className="acccounts">
				<NavLink to="/eur" className="account" activeClassName="active">
					<div className="currency-icon euro">
						<span>€</span>
					</div>
					<p>{data["0"].title}</p>
					<span>{`€${data["0"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/gbp" className="account" activeClassName="active">
					<div className="currency-icon gbp">
						<span>£</span>
					</div>
					<p>{data["1"].title}</p>
					<span>{`£${data["1"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/usd" className="account" activeClassName="active">
					<div className="currency-icon usd">
						<span>$</span>
					</div>
					<p>{data["2"].title}</p>
					<span>{`$${data["2"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/krw" className="account" activeClassName="active">
					<div className="currency-icon krw">
						<span>₩</span>
					</div>
					<p>{data["3"].title}</p>
					<span>{`₩${data["3"].balance.toFixed(2)}`}</span>
				</NavLink>
			</div>
			<RequestSection />
			<Switch>
				<Route path="/eur" exact>
					<Account {...data["0"]} />
				</Route>
				<Route path="/gbp">
					<Account {...data["1"]} />
				</Route>
				<Route path="/usd">
					<Account {...data["2"]} />
				</Route>
				<Route path="/krw">
					<Account {...data["3"]} />
				</Route>
				<Redirect to="/eur">
					<Account {...data["0"]} />
				</Redirect>
			</Switch>
		</Router>
	);
}
