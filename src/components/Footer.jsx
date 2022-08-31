
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox  } from 'cdbreact';

 const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '100%', background: '#452767', margin:'5px', padding: '50px'}}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src='src/assets/img/logo.png' width="250px" />
              
            </a>
      
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:'#c93683' }}>
             <b>SOBRE NOSOTROS</b> 
            </p>
            <CDBBox display="flex" flex="column" style={{ color:'white', cursor: 'pointer' }}>
              <CDBFooterLink href="/" >Política de Privacidad</CDBFooterLink>
              <CDBFooterLink href="/">Términos y Condiciones</CDBFooterLink>
              <CDBFooterLink href="/">Términos de uso</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:'#c93683' }}>
              <b>¿ERES GURÚ?</b>
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/">Únete hoy a nosotros y conéctate a esta gran red de expertos.</CDBFooterLink>

            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:'#c93683' }}>
             <b>SÍGUENOS</b> 
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Guruxy, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;