import React, { Children, Component } from 'react'
import './asset/HomePage.css'
import { useKeycloak } from "@react-keycloak/web";
import { ButtonPrimary } from '../components/ui_components/Buttons'
import { Drawer } from '../components/ui_components/Drawer'

export function HomePage() {
    const { keycloak } = useKeycloak()

    const login = () => {
        keycloak.login()
    }
    const logout = () => {
        keycloak.logout()
    }
    const register = () => {
        keycloak.register()
    }

    return (

        <div>
            <div id="navbar" >
                <div class="drawer">
                    <Drawer id="drawer">
                        <div className='mt-2 w-100'>
                            <ButtonPrimary
                                icon="fa fa-user-circle-o"
                                style={{ width: "inherit" }}
                                onClick={login}> Log In </ButtonPrimary>
                        </div>
                        <div className='mt-2 w-100'>
                            <ButtonPrimary
                                icon="fa fa-sign-in"
                                style={{ width: "inherit" }}
                                onClick={register}> Register </ButtonPrimary>
                        </div>
                        <div className='mt-2 w-100'>
                            <ButtonPrimary
                                icon="fa fa-sign-out"
                                style={{ width: "inherit" }}
                                onClick={logout}> Log Out</ButtonPrimary>
                        </div>
                    </Drawer>
                </div>
                <li>
                    <a href="#home">Home</a></li>

                <li>
                    <a href="#home">Home</a></li>

                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li><a href="#"><img
                    src="TCArgent_Logo.png"
                    class="logo"
                    alt="Responsive image"
                    title="Amazing TCArgent logo"></img></a></li>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">a
                        <div class="row">
                            <div class="col">1</div>
                            <div class="col">2</div>
                            <div class="col">3</div>
                            <div class="col">4</div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">b</div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">c</div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">d</div>
                </div>
            </div>

            <div>
                <footer>
                    <div class="row">
                        <div class="col-6">
                            <img
                                src="INSA_Logo.png"
                                alt=""
                                title="Amazing INSA logo"></img>
                        </div>
                        <div class="col-6">
                            <img
                                src="TCA_Logo.png"
                                alt=""
                                title="Amazing TCA logo"></img>
                        </div>
                    </div>
                    <p>© 2023 Copyright:&nbsp; <a href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis"> 3TCA TCArgent Teams</a></p>
                </footer>
            </div>

            {/* <img
                src="TCArgent_Logo.png"
                alt=""
                title="Amazing TCArgent logo"
                width="100"
                height="100"></img>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='mt-2 w-100'>
                    <ButtonPrimary
                        icon="fa fa-user-circle-o"
                        style={{ width: "inherit" }}
                        onClick={login}> Log In </ButtonPrimary>
                </div>
                <div className='mt-2 w-100'>
                    <ButtonPrimary
                        icon="fa fa-sign-in"
                        style={{ width: "inherit" }}
                        onClick={register}> Register </ButtonPrimary>
                </div>
                <div className='mt-2 w-100'>
                    <ButtonPrimary
                        icon="fa fa-sign-out"
                        style={{ width: "inherit" }}
                        onClick={logout}> Log Out</ButtonPrimary>
                </div>
            </div>

            <div>

                <tr>
                    <td className='p-2'>

                    </td>
                    <td>
                        <h1>TCArgent</h1>
                    </td>
                </tr>
            </div>

            <div>
                <h2>Bienvenue sur TCArgent</h2>
            </div>
            <div>
                <body>
                    Nous sommes heureux de
                </body>
            </div> */}

            {/* <footer class="py-4 bg-dark flex-shrink-0 bottom-0">
                <div >
                    <img
                        src="INSA_Logo.png"
                        alt=""
                        title="Amazing INSA logo"
                        width="443" //*4,43
                        height="100"></img>
                </div>
                <div class="container text-center">
                    <a href='https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/issues'>Contact US</a>
                    <a href='https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis'>GitHub</a>
                </div>
                <div class="position-absolute end-0 p-3">
                    <img
                        src="TCA_Logo.png"
                        alt=""
                        title="Amazing TCA logo"
                        width="100"
                        height="100"></img>
                </div>
                <div class="container text-center">
                    <p class="text-light">© 2023 Copyright:</p>
                    <a href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis" class="text-muted"> 3TCA TCArgent Teams</a>
                </div>
            </footer> */}
        </div >
    )
}