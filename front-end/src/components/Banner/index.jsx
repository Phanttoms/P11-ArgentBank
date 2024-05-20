import "../Banner/_banner.scss";
import banner from "../../assets/images/bank-tree.webp";
import bannerTablette from "../../assets/images/bank-tree-tablette.webp";
import bannerMobile from "../../assets/images/bank-tree-mobile.webp";

export default function Banner() {
	return (
		<div className="banner">
			<picture>
				<source srcSet={bannerMobile} media="(max-width: 780px)" />
				<source srcSet={bannerTablette} media="(max-width: 1000px)" />
				<img src={banner} alt="bank-tree" className="banner__img" />
			</picture>

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
