const selectedPartner = document.querySelector('.selected');
const partners = document.querySelectorAll('.partner-logo-list');
const partnersSelector = document.querySelectorAll('.partner-selector');
const initialPartnerSelector = document.getElementById('dell-partner-selector');

partnersSelector.forEach((partnerSelector) => {
  partnerSelector.classList.add('d-none');
})

initialPartnerSelector.classList.remove('d-none');

partners.forEach((partner) => {
  partner.addEventListener('click', () => changePartnerSelector(event))
})

function changePartnerSelector(event) {
  event.preventDefault();

    if (event.target.id === 'more') {
      return
    }

    partnersSelector.forEach((partnerSelector) => {
      partnerSelector.classList.add('d-none');
    });

    partners.forEach((partner) => {
      partner.src = `../images/partners/grey/${partner.id}.svg`;
    })

    const imgElement = event.target.tagName === 'IMG' ? event.target : event.target.querySelector('img');
    const partnerSelectorClick = document.getElementById(`${imgElement.id}-partner-selector`)

    partnerSelectorClick.classList.remove('d-none');

    if (imgElement) {
      const partnerId = imgElement.id;
      changePartner(partnerId);
      if (partnerId == "lenovo"){
        imgElement.src = `../images/partners/color/${partnerId}.png`;
      } else {
        imgElement.src = `../images/partners/color/${partnerId}.svg`;
      }
    }
}

function changePartner(partnerId) {
  if (partnerId == undefined) {
    partnerId = "dell"
  }
  const partnerInfoContainer = document.querySelector('.partner-info-container');
  const imgPartner = partnerInfoContainer.children[0]
  const imgLogoPartner = partnerInfoContainer.children[1].children[0]
  const partnerLink = document.querySelector('.partner-page');
  imgPartner.src = `../images/partners/banners/${partnerId}.png`;
  imgLogoPartner.src = `../images/partners/logos/logo_${partnerId}.png`;
  partnerInfoContainer.children[1].children[1].innerHTML = partnerTexts[partnerId];
  partnerLink.href = `/pages/partner.html?partner=${partnerId}`;
}


const partnerTexts = {
  dell: "a Dell é conhecida por projetar, fabricar, vender e<br> dar suporte a computadores pessoais, servidores,<br> dispositivos de armazenamento de dados,<br> software e periféricos.",
  lenovo: "Produtos projetados para atender tanto consumidores<br> finais quanto empresas, destacando-se pela durabilidade,<br> desempenho e design. são amplamente reconhecidos,<br> atendendo desde profissionais que precisam de alta<br> performance até gamers e usuários em busca de<br> mobilidade e eficiência.",
  cisco: "Especializada em equipamentos e softwares que<br> conectam pessoas e empresas. Seus produtos, como<br> roteadores, switches e sistemas de segurança, são<br> essenciais para a infraestrutura de redes em<br> organizações de todos os portes.",
  fortinet: "Líder em segurança cibernética, especializada em<br> soluções integradas de rede e proteção. Seus<br> produtos, como firewalls, sistemas de prevenção<br> de intrusões e segurança em nuvem.",
  nutanix: "A Nutanix é uma empresa de tecnologia<br> especializada em soluções de infraestrutura<br> hiperconvergente, que simplificam a gestão de data<br> centers e nuvens híbridas.",
  aws: "A AWS (Amazon Web Services) é a principal provedora<br> global de serviços de computação em nuvem. Oferecendo<br> uma vasta gama de soluções, desde armazenamento e<br> bancos de dados até inteligência artificial e análise de<br> dados.",
  microsoft: "A Microsoft é uma das maiores e mais influentes empresas<br> de tecnologia do mundo, conhecida por seu software<br> inovador, como o sistema operacional Windows, o pacote<br> de produtividade Office e a plataforma de nuvem Azure.",
  hpe: "A HPE Aruba Networking é uma divisão da Hewlett Packard<br> Enterprise especializada em redes sem fio, comutação e<br> segurança, a HPE Aruba oferece produtos que suportam a<br> conectividade em ambientes corporativos, desde pequenas<br> empresas até grandes data centers."
}
