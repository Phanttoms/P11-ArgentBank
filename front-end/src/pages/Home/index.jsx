// Style
import "../../components/Feature/_feature.scss";
import chat from "../../assets/images/icon-chat.png";
import money from "../../assets/images/icon-money.png";
import security from "../../assets/images/icon-security.png";

// Components
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<section className="feature">
					<h2 className="feature__title">Features</h2>
					<Feature
						icon={chat}
						iconType="Chat icon"
						title="You are our #1 priority"
						text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
					/>
					<Feature
						icon={money}
						iconType="Money icon"
						title="More savings means higher rates"
						text="The more you save with us, the higher your interest rate will be!"
					/>
					<Feature
						icon={security}
						iconType="Security icon"
						title="Security you can trust"
						text="We use top of the line encryption to make sure your data and money is always safe."
					/>
				</section>
			</main>
			<Footer />
		</>
	);
}
