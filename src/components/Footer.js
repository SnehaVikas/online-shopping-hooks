import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
	return (
		<footer id="footer" class="bg-dark text-white d-flex-column text-center">
			<div class="container p-4" >
				<section class="">
					<div class="row">
						<div class="col-lg-4 col-md-12 mb-4 mb-md-0" >
							<div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light" style={{marginLeft :'-5%'}}>


								<img src="/Images/Logo1.png" width="300px" length="300px" />
								<a href="#!">

								</a>
							</div>
						</div>
						<div class="col-md-3 mx-auto shfooter" style={{ marginLeft: '15%' }}>
							<img src="/Images/Qr.jpeg" width="100px" length="100px" />
							<h5 class="my-2 font-weight-bold d-none d-md-block ">Social Media</h5>
							<ul>
								<li>
									<a
										href='https://www.youtube.com/c/jamesqquick'
										className='youtube social'
										style={{ marginLeft: '-60px' }}>
										<FontAwesomeIcon icon={faYoutube} size='lg' />
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com/learnbuildteach/'
										className='facebook social'
										style={{ marginLeft: '10px' }}>
										<FontAwesomeIcon icon={faFacebook} size='lg' />
									</a>
								</li>
								<li>
									{' '}
									<a
										href='https://www.twitter.com/jamesqquick'
										className='twitter social'
										style={{ marginLeft: '30px' }}>
										<FontAwesomeIcon icon={faTwitter} size='lg' />
									</a>
								</li>
								<li>
									{' '}
									<a
										href='https://www.instagram.com/learnbuildteach'
										className='instagram social'
										style={{ marginLeft: '30px' }}>
										<FontAwesomeIcon icon={faInstagram} size='lg' />
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3 mx-auto shfooter "  style={{marginLeft:'45%'}}>
                            <h5 class="my-2 font-weight-bold d-none d-md-block">About us</h5>
                            <p>Revive to become or to</p>
							<p>make something popular again</p>
                       </div>
					   <div class="col-md-3 mx-auto shfooter "  style={{marginLeft:'45%'}}>
                            <h5 class="my-2 font-weight-bold d-none d-md-block">Contact</h5>
                            <p>+91 9078563412</p>
							<p>revive@mail.com</p>
                       </div>

</div>


				</section>
			</div>
			<div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				© 2023 Copyright:
				<a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
					Revive.com
				</a>
			</div>

		</footer >
	)
}
export default Footer;