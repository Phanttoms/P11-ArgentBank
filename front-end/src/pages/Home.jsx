// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Feature />
			</main>
			<Footer />
		</>
	);
}
