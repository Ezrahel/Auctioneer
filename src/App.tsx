import './App.css';
import './styles/landingPage.css'; import './styles/global.css'; import './styles/styleguide.css';
import { StoreIcon, UserIcon } from "lucide-react";
import img1 from "./assets/img/img-1.webp";
import img2 from "./assets/img/img-2.webp";
import img3 from "./assets/img/img-7.webp";
import img4 from "./assets/img/img-4.jpg";

export default function LandingPage() {

  return (
    <>
    <div className="navigation">
      <a
        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
        className="nav-logo"
      >
        <div className="logo" style={{ justifyContent: 'space-between' }}>

          <StoreIcon className="storefront" size={10} strokeWidth={1} color='white' />
          <button className="button" style={{ marginLeft: 0 }}>Marketplace</button>
        </div>


      </a>

      <div className="nav-nav-menu">
        <div className="button-wrapper">
          <button className="button">Marketplace</button>
        </div>
        <div className="button-wrapper">
          <button className="button">Rankings</button>
        </div>
        <div className="button-wrapper">
          <button className="button">Connect a wallet</button>
        </div>
      </div>

      <div className="sign-up">
        <UserIcon className='usericon' style={{ height: 14, fontWeight: 8, color: 'white' }} />
        <button className="button">Sign Up</button>
      </div>
    </div>
      {/* Below the header */}
    <div className="hero-section">
        <div className="hero-section-frame">

          <div className="hero-text-buttons">
            <div className="headline-subhead">
              <p className="discover-digital-art">Discover Digital Art &amp; Collect Nfts</p>
              <p className="NFT-marketplace-UI">
                Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k Nft Artists.
              </p>
            </div>
            <button className="button">
              <img className="rocket-launch" src="img/rocket-launch.svg" alt="Rocket Launch" />
              <span className="text-wrapper">Get Started</span>
            </button>
            <div className="additional-info">
              <div className="info-item">
                <div className="text-wrapper-2">240k+</div>
                <div className="text-wrapper-3">Total Sale</div>
              </div>
              <div className="info-item">
                <div className="text-wrapper-2">100k+</div>
                <div className="text-wrapper-3">Auctions</div>
              </div>
              <div className="info-item">
                <div className="text-wrapper-2">240k+</div>
                <div className="text-wrapper-3">Artists</div>
              </div>
            </div>
          </div>
          <img
            className="highlighted-NFT"
            width="100%"
            height="100%"
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
            alt="Highlighted NFT" />
        </div>
    </div>
     
    <section>
      <div className='outter-trending'>
      <div className='trending-collection'>
      <p>
      Trending Collection<br />
      <span style={{fontSize: '20px', fontWeight:'0px'}}>Checkout Our Weekly Updated Trending Collection.</span>
      </p>
      </div>
      <div className='all-avatar-container'>
      <div className='all-avatar-container-1'>
        <img src={img1} alt='web-3-img'/>
      <div className='outter-avatar-1'>
        <img src={img1} alt='web-3-img'/>
        <img src={img1} alt='web-3-img'/>
        <img src={img1} alt='web-3-img'/>
        <p>Avatar One</p>
      </div>
      </div>
      <div className='all-avatar-container-2'>
      <img src={img2} alt='web-3-img'/>
      <div className='outter-avatar-2'>
      <img src={img2} alt='web-3-img'/>
      <img src={img2} alt='web-3-img'/>
      <img src={img2} alt='web-3-img'/>
        <p>Avatar Two</p>
      </div>
      </div>
      <div className='all-avatar-container-3'>
      <img src={img3} alt='web-3-img'/>
      <div className='outter-avatar-3'>
      <img src={img3} alt='web-3-img'/>
      <img src={img3} alt='web-3-img'/>
      <img src={img3} alt='web-3-img'/>
        <p>Avatar Three</p>
      </div>
      </div>
      </div>
      </div>
    </section>
      </>
  );
}




