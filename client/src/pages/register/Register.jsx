import "./style.css";
import Regiter from "../../components/register/regiterComponent";

const registerPage = () => {
  return (
    <div className="register_page">
        <div className="register_inputs">

        <h1>Registrate</h1>
      <Regiter></Regiter>
        </div>
     
      <div className="register_wave">
        <div className="register_wave_svg">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
            <defs>
                <linearGradient id="gradient" x1="27%" y1="5%" x2="73%" y2="95%">
                    <stop offset="5%" stopColor="#fe486a">
                        </stop>
                        <stop offset="95%" stopColor="#91c3e4">
                            </stop></linearGradient>
                            </defs>
                            <path d="M 0,600 L 0,0 C 106.1531100478469,78.00956937799042 212.3062200956938,156.01913875598083 312,196 C 411.6937799043062,235.98086124401917 504.92822966507174,237.933014354067 605,208 C 705.0717703349283,178.066985645933 811.9808612440191,116.24880382775119 901,107 C 990.0191387559809,97.75119617224881 1061.1483253588517,141.07177033492823 1148,132 C 1234.8516746411483,122.92822966507177 1337.4258373205741,61.464114832535884 1440,0 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0">
                                </path>
                                <defs>
                                    <linearGradient id="gradient" x1="27%" y1="5%" x2="73%" y2="95%"><stop offset="5%" stopColor="#fe486a">
                                        </stop><stop offset="95%" stopColor="#91c3e4"></stop></linearGradient></defs><path d="M 0,600 L 0,0 C 78.01913875598089,165.6937799043062 156.03827751196178,331.3875598086124 249,391 C 341.9617224880382,450.6124401913876 449.86602870813397,404.14354066985646 555,365 C 660.133971291866,325.85645933014354 762.4976076555024,294.0382775119617 867,297 C 971.5023923444976,299.9617224880383 1078.1435406698565,337.7033492822967 1174,294 C 1269.8564593301435,250.29665071770333 1354.9282296650717,125.14832535885166 1440,0 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1">

        </path>
        </svg> </div>
    
      </div>
      
    </div>
  );
};
export default registerPage;
