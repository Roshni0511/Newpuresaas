import React from 'react'
import '../assets/css/Navbar.css';


export default function Navbar() {
  return (
    <div>
      <header className="header">
	<h1 className="header__logo"><a href="https://css-weekly.com"><img src="https://assets.codepen.io/47791/cssweekly-logo-full-white.svg" className="header__img" alt="CSS Weekly logo" width="300" height="43" /></a></h1>
	<nav class="header__nav">
		<ul class="header__ul">
			<li class="header__li"><a href="https://css-weekly.com" target="_blank" class="header__a">Newsletter</a></li>
			<li class="header__li"><a href="https://youtube.com/@cssweekly" class="header__a" target="_blank">YouTube</a></li>
			<li class="header__li"><a href="https://twitter.com/cssweekly" target="_blank" class="header__a">Twitter</a></li>
			<li class="header__li"><a href="https://stickers.css-weekly.com" target="_blank" class="header__a">Stickers</a></li>
		</ul>
	</nav>
</header>
    </div>
  )
}
