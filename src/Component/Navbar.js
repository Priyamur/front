
import logo from '../Images/logo.png';
import '../Styles/Commonnavbar.css';
export default function Navbar() {
    return (
        <div className='row'>
            <nav class="navbar navbar-expand-sm navbar-fixed-top ">
                <div class="container-fluid">
                    <div className='col-2'>
                        <a class="navbar-brand" href="#"><img src={logo} className='w-100' /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className='col-10'>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-house-door navicons"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-book navicons"></i></a>
                            </li>
                            <li class="nav-item d-flex align-items-center">
                                <form className="form-inline">
                                    <div className="input-group">
                                        <input type="search" class="form-control search" size="80" placeholder="Search our products"  required />
                                        <div className="input-group-btn">
                                            <button type="button" class="btn btn-danger">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>

                    </div>


                    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-plus-lg"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-bell"></i></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}