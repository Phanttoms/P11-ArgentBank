// Components
import Header from "../../components/Header";
import Form from "../../components/LoginForm";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main bg-dark">
				<Form />
			</main>
			<Footer />
		</>
	);
}
