import "../Banner/_banner.scss";
import banner from "../../assets/images/bank-tree.webp";

export default function Banner() {
	return (
		<div className="banner">
			<img src={banner} alt="bank-tree" className="banner__img" />
			<section className="banner__content">
				<h2 className="banner__content--title">Promoted Content</h2>
				<p className="banner__content--subtitle">No fees.</p>
				<p className="banner__content--subtitle">No minimum deposit.</p>
				<p className="banner__content--subtitle">High interest rates.</p>
				<p className="banner__content--text">
					Open a savings account with Argent Bank today!
				</p>
			</section>
		</div>
	);
}
