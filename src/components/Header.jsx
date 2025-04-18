import React from 'react';
import './Header.css';
function Header(){
    return(
    <>
     <header id='header'>
        <div id='card'>
            <div id='img'>
                <img id='imgg' src="https://www.usab.com/imgproxy/zhHZWpTrgXdGp5oUz9lieE2RAuXRO6utvaCJwy_w5UE/rs:fit:3000:0:0:g:ce/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvZGJkOTVjZWUtNDBlOS00MjBlLWEzZjAtMGI2M2Q3MDczMTk3LmpwZw.png" alt="" />
            </div>
                <h1 id='nome'>
                Lebron James 👑
                </h1>
                <h3 id='p'>
                Player by Los Angeles Lakers
                </h3>
                <div id='link'></div>
                    <button id='botao1'> <a id='a1' href="https://www.instagram.com/kingjames/?hl=en" target="_blank">Instagram</a></button>

                    <button id='botao2'> <a  id='a2' href="https://www.linkedin.com/in/lebron-james-85b59931a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">Linkedin</a></button>

                    <button id='botao3'> <a id='a3' href="https://w.app/kfqciw" target="_blank">WhatsAap</a></button>

                
                
                <h2 id='final'> JI've played the NBA for exactly 22 seasons, and I carry the burden of four titles on my back. </h2>
        </div>
     </header>
    </>
    );
};

export default Header;