

const app_desktop_html =   `
		<div id="carousel-app-desktop" class="carousel slide keep-carousel common-div-desktop" data-bs-ride="false" data-bs-interval="false" data-bs-touch="false"><img class="smartphone app-image" src="../images/front-mock-up-ita.png">
			<div class="carousel-inner">
				
				<div class="carousel-item active">
					<div class="module module-2">
						<h1 class="module-title">Avvisi e convalide</h1>
						<div class="module-overflow">
							<img class="alerts_btn" src="../images/alerts_ita.png">
							<p>
								In quest'area vengono visualizzate le notifiche certificate:<br><br>
								</p>
								<ul>
									<li>Autentica dato (utente)</li>
									<li>Digital Profit</li>
									<li>Smart contract</li>
								</ul><br>
							<p>
								Gli accrediti del servizio Digital Profit, concernenti il premio Rendita, saranno di volta in volta autorizzati dall'utente beneficiario.
							</p>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="module module-3">
						<h1 class="module-title">GData</h1>
						<div class="module-overflow">
							<p>
								</p><p class="value">1 GData = 1€</p>
								I GData funzionano in modo semplice, come una Gift card o un buono regalo, ma a differenza dei buoni cartacei, sono crittografati, cioè non sono falsificabili.<br>
								I GData sono ricaricabili tramite il proprio Wallet.<br><br>

								<span class="subtitle">Perché conviene utilizzare i GData?</span><br><br>

								<ul>
									<li>In quanto buoni regalo, non sono soggetti a tassazione</li>
									<li>Invia GData ai propri contatti gratuitamente</li>
									<li>Ricevi GData dai propri contatti gratuitamente</li>
									<li>Acquista nel circuito Genuiny Point (fisico e online) senza commissioni</li>
									<li>Una volta maturato il premio Digital Profit, i GData saranno immediatamente spendibili nel circuito Geniny Point o riconvertibili in Euro (importo minimo riconvertibile: 50 GData)</li>
								</ul>
							<p></p>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="module module-4">
						<h1 class="module-title">Conto</h1>
						<div class="module-overflow">
							<img class="balance_image" src="../images/account_ita.png">
							<p>
								Gli utenti Genuiny hanno a disposizione 3 conti.<br>
								I rispettivi saldi indicano il totale dei diversi tipi di valore detenuti dall'utente.<br><br>
								</p><ul>
									<li><b>Conto GData:</b><br>
									ll conto GData indica la disponibilità immediata dell'utente Genuiny.</li><br>
									<li><b>Conto NFTP:</b><br>
									Il conto NFTP è il conto deposito titoli dell'utente Genuiny.</li><br>
									<li><b>Conto Digital Profit:</b><br>
									Il conto Digital Profit indica tutte le operazioni, in dare e avere, che saranno compensate nel momento della maturazione del prorio Premio Rendita erogato dal servizio Digital Profit.</li>
								</ul>
							<p></p>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="module module-5">
						<h1 class="module-title">Altre funzioni</h1>
						<div class="module-overflow">
							<p>
								All'iterno dell'app di possono trovare altre funzioni secondarie.<br><br>
								</p><ul>
									<li><b>Cerca</b><br>
									Persone e attività.</li><br>
									<li><b>Chat</b><br>
									Manda messaggi ai tuoi contatti.</li><br>
									<li><b>Aggiungi dato</b><br>
									Invita un amico a registrarsi o aggiungi ai tuoi contatti un utente già registrato.</li><br>
									<li><b>Smart Contract</b><br>
									<!-- Button trigger modal -->
									<a class="modal-trigger" href="" data-bs-toggle="modal" data-bs-target="#smart-contract">Cosa sono gli smart contract?</a></li><br>
									<li><b>FAQ</b><br>
								</ul>
							<p></p>
						</div>
					</div>
				</div>
			</div>
			<button class="carousel-control carousel-control-prev change-target" type="button" data-bs-target="#carousel-app-desktop" data-bs-slide="prev">
			<span class="visually-hidden" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control carousel-control-next change-target display-block" type="button" data-bs-target="#carousel-app-desktop" data-bs-slide="next">
			<span class="visually-hidden" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
			</button>
			<div class="bottom-btn">
				<div class="carousel-indicators">
					<button class="active change-target" type="button" data-bs-target="#carousel-app-desktop" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" class="change-target" data-bs-target="#carousel-app-desktop" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" class="change-target" data-bs-target="#carousel-app-desktop" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" class="change-target" data-bs-target="#carousel-app-desktop" data-bs-slide-to="3" aria-label="Slide 4"></button>
					
				</div>
				<div class="next-title desktop_hide">
					<h1 class="module-title-bottom">Avvisi e convalide</h1>
				</div>
				<div class="arrow desktop_hide">
					<img class="arrow-img display-block" src="../images/arrow2.png" alt="next paragraph">
					<img class="subscribe-img" src="../images/page-link.png" alt="next page">
				</div>
				<div class="alternative-next desktop_hide" onclick="alternative_next_click(2)"></div>
				<button class="hamburger bottom-left desktop_hide" onclick="hamburger_click()">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</div> `
const mobile_app = document.getElementById("carousel-app")
const mobile_app_outerHTML = mobile_app.outerHTML
var app_parent = document.getElementById("app-parent")

var layout_mobile = true
function home_on_resize(){
	var page_width = window.innerWidth
	if ((page_width >= 1024) && (layout_mobile)){
		layout_mobile = false
		//desktop_reform()
		//add_container()
		//change_functioning_image()
		//remove_event_listener()
		//on_scroll()
		app_parent.innerHTML = app_desktop_html
	}else if ((page_width < 1024) && !(layout_mobile)){
		layout_mobile = true
		var desktop_app = document.getElementById("carousel-app-desktop")
		//document.getElementsByTagName("body")[0].innerHTML = mobile_body
		//replace_event_listener()
		//on_scroll()
		//hamburger_listener()	
		desktop_app.outerHTML = mobile_app_outerHTML
	}
}
home_on_resize()

function desktop_reform(){
	const carousels = document.getElementsByClassName("carousel")
	for (var i = 0; i < carousels.length; i++) {
		var module_overflows = carousels[i].getElementsByClassName("module-overflow")
		var content = []
		for (var i2 = 0; i2 < module_overflows.length; i2++) {
			var momentary_content = []
			var module_title = carousels[i].getElementsByClassName("module-title")[i2]
			if (i2 == 0){
				momentary_content.push('<div class="desktop_title_line"></div>')
			}
			momentary_content.push('<div class="module-' + String(i2 + 1) + '">')
			if (i2 == 0){
				momentary_content.push('<h1 class="first-module-title-desktop">' + module_title.textContent + '</h1>')
			}else{
				momentary_content.push('<h1 class="secondary-module-title-desktop">' + module_title.textContent + '</h1>')
			}
			momentary_content.push(module_overflows[i2].innerHTML)
			
			momentary_content.push('</div>')
			content.push(momentary_content.join(""))
		}
		if (!(carousels[i].classList.contains("keep-carousel"))){
			carousels[i].innerHTML = content.join("")
		}
	}
	
	// remove "carousel" class so that navbar's on_scroll funcitons won't be called 
	carousel = document.getElementsByClassName("slide")
	for (var i3 = 0; i3 < carousel.length; i3++) {
	 	if (!(carousel[i3].classList.contains("keep-carousel"))){
	 		carousel[i3].classList.remove("carousel")
	 	}
	 	carousel[i3].classList.add("common-div-desktop")
	 	carousel[i3].setAttribute("id", carousel[i3].id + "-desktop");
	}
	var change_target = document.getElementsByClassName("change-target")
	var target = "data-bs-target"
	for (var i4 = 0; i4 < change_target.length; i4++) {
		var current_target = 
		change_target[i4].setAttribute(target, change_target[i4].getAttribute(target) + "-desktop")
	}
	carousel = document.getElementsByClassName("carousel")

	const carousel_app_desktop = document.getElementById("carousel-app-desktop")
	const inner_app = carousel_app_desktop.getElementsByClassName("carousel-inner")[0]
	const image_app = inner_app.children[0].getElementsByTagName("img")[0]
	var app_title = inner_app.children[0].getElementsByTagName("h1")[0].textContent
	inner_app.children[0].remove()
	for (var i = 0; i < inner_app.children.length; i++) {
		inner_app.children[i].classList.remove("active")
	}
	image_app.classList.add("app-image")

	// add to the NOW first
	inner_app.children[0].classList.add("active")
	carousel_app_desktop.innerHTML = '<div class="desktop_title_line"></div>' + '<h1 class="first-module-title-desktop">' + app_title + '</h1>' + image_app.outerHTML + carousel_app_desktop.innerHTML
	
	const indicators_buttons = carousel_app_desktop.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("button")
	indicators_buttons[indicators_buttons.length - 1].remove()
}


//function add_container(){
//	document.getElementsByTagName("main")[0].classList.add("container")
//}

//function remove_container(){
//	document.getElementsByTagName("main")[0].classList.remove("container")
//}

function remove_event_listener(){
	for (var i = 0; i < carousel_control.length; i++) {
		carousel_control[i].removeEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < carousel_indicators.length; i++) {
		carousel_indicators[i].removeEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < control_next.length; i++) {
		control_next[i].removeEventListener("click", scroll_fix)
	}
	for (var i = 0; i < indicators.length; i++) {
		indicators[i].removeEventListener("click", scroll_fix)
	}
};

function replace_event_listener(){
	for (var i = 0; i < carousel_control.length; i++) {
		carousel_control[i].addEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < carousel_indicators.length; i++) {
		carousel_indicators[i].addEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < control_next.length; i++) {
		control_next[i].addEventListener("click", scroll_fix)
	}
	for (var i = 0; i < indicators.length; i++) {
		indicators[i].addEventListener("click", scroll_fix)
	}
};

function change_functioning_image(){
	const image = document.getElementById("functioning_image")
	image.setAttribute("src", "../images/functioning.png")
	image.style.maxWidth = "none"
	image.style.border = "none"
	image.style.borderRadius = "0"
}


