import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends React.Component {
  state ={
    toggler:false
  }
  onClick =() =>{
    this.setState({
      toggler:!this.state.toggler
    })
  }
  render() {
    return (
      <div className='body'>
        <div className="container-fluid info p-3" id="top-icons">
          <div className="row">
            <div className="col d-flex justify-content-between align-items-baseline flex-wrap">
              <div className="info-icons p-2 ">
                <a href="https://www.instagram.com/andrdrims/?hl=ru">
                  <i className="fab fa-instagram mx-1" />
                </a>
                <a href="https://www.facebook.com/NikoHomeTattooAndrdrims/">
                  <i className="fab fa-facebook mx-1" />
                </a>
                <a href="https://www.vk.com/andrdrim">
                  <i className="fab fa-vk mx-1" />
                </a>
              </div>
              <div className="">
                <h1 className="text-capitalize text-right">andrey shutov</h1>
              </div>
            </div>
          </div>
        </div>
        <header id="header">
          <div className="container">
            <div className="row height-90 align-items-center justify-content-center">
              <div className="col">
                <div className="banner col-sm-12 col-xs-12 hidden-xs text-center">
                  <h1 className="display-3 text-capitalize">
                    <small>andrdrims</small>{" "}
                    <strong className="primary-color">Tattoo</strong>
                  </h1>
                  <a
                    href="#aboutMe"
                    className="btn about-btn main-btn my-4 text-capitalize"
                  >
                    Узнать
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="#aboutMe" className="btn header-link primary-color">
            <i className="fas fa-arrow-down" />
          </a>
        </header>
        <nav className='navbar navbar-expand-lg sticky-top'>
          <a href='#' className='navbar-brand text-uppercase primary-color mt-2'><h2>Andrdrims Tattoo</h2></a>
          <button
          onClick={this.onClick}
          className={this.state.toggler ? "navbar-toggler change": 'navbar-toggler'} 
          type='button' 
          data-toggle='collapse' 
          data-target='#myNavbar'>
            <div className='toggler-btn'>
              <div className='bar bar1'></div>
            <div className='bar bar2'></div>
            <div className='bar bar3'></div>
            </div>
            
          </button>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item mx-2'>
                <a href='#aboutMe' className='nav-link text-capitalize'>Обо мне</a>
              </li>
              <li className='nav-item mx-2'>
                <a href='#about' className='nav-link text-capitalize'>Стили</a>
              </li>
              <li className='nav-item mx-2'>
                <a href='#payment' className='nav-link text-capitalize'>Стоимость</a>
              </li>
              <li className='nav-item mx-2'>
                <a href='#contacts' className='nav-link text-capitalize'>Мои контакты</a>
              </li>
            </ul>
          </div>
        </nav>
        <section id="aboutMe" className='py-5'>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 my-4">
                <h1 className="text-uppercase display-3 newTitle">обо мне</h1>
                <h2 className="newTitle">
                  Привет, если ты на моей странице, это значит что ты решился
                  украсить свое тело. Эта информация избавит тебя от
                  необходимости писать стандартные вопросы, а меня в сотый раз
                  на них отвечать. Я мастер художественной татуировки . Работаю
                  на дому, билдерским оборудованием, стерильным одноразовым
                  расходным материалом. Качественным фирменным пигментом
                  (Dynamic ,World Famous). Коррекция моих работ бесплатна - если
                  ты придерживался моих наставлений по поводу ухода за
                  татуировкой в процессе ее заживления.
                </h2>
                <a
                  href="#contacts"
                  className="btn main-btn my-4 text-capitalize"
                >
                  Связаться
                </a>
              </div>
              <div id="carouselExampleControls" className="carousel slide d-none d-md-block d-lg-none col-sm-12 col-xs-12" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/wdZ2hSz/img-1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/v3w5zbt/img-2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/6YRPDMf/img-3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/B4smmh6/img-4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/mvftPZd/img-5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/dL2qtk7/img-6.png" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/R63NRjf/img-7.png" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/qC7Gy5n/img-8.png" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/ScG27QY/img-9.png" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/4gsg8T5/img-10.png" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/92zT6h1/img-11.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
              <div className="col-md-6 about-pictures my-4 d-none d-lg-block">
                <img
                  src="https://i.ibb.co/wdZ2hSz/img-1.jpg"
                  alt="Tatto-img-1"
                  className="img-1 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/v3w5zbt/img-2.jpg"
                  alt="Tatto-img-2"
                  className="img-2 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/6YRPDMf/img-3.jpg"
                  alt="Tatto-img-3"
                  className="img-3 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/B4smmh6/img-4.jpg"
                  alt="Tatto-img-4"
                  className="img-4 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/mvftPZd/img-5.jpg"
                  alt="Tatto-img-5"
                  className="img-5 img-thumbnail about-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-5">
        
          <h1 className="display-3 text-center newTitle">
            СТИЛИ В КОТОРЫХ Я РАБОТАЮ
          </h1>
          <div className="container my-5">
            <div className="row parent-container">
              <div className="col-10 mx-auto col-sm-12 col-xs-12 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="https://i.ibb.co/y6dVvHy/blackwork.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="blackworkStyle"
                  />
                  <a href="#">
                    <h1 className="text-uppercase text-center item-link px-3">
                      Blackwork
                    </h1>
                  </a>
                </div>
              </div>
              <div className="col-10 mx-auto col-sm-12 col-xs-12 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="https://i.ibb.co/jZdrMGR/dotwork.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="blackworkStyle"
                  />
                  <a href="#">
                    <h1 className="text-uppercase text-center item-link px-3">
                      Dotwork
                    </h1>
                  </a>
                </div>
              </div>
              <div className="col-10 mx-auto col-sm-12 col-xs-12 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="https://i.ibb.co/zZCcrrD/gravura.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="blackworkStyle"
                  />
                  <a href="#">
                    <h1 className="text-uppercase text-center item-link px-3">
                      Gravura
                    </h1>
                  </a>
                </div>
              </div>
              <div className="col-10 mx-auto col-sm-12 col-xs-12 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="https://i.ibb.co/J74g1Nw/old-school.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="blackworkStyle"
                  />
                  <a href="#">
                    <h1 className="text-uppercase text-center item-link px-3">
                      Old School
                    </h1>
                  </a>
                </div>
              </div>
              <div className="col-10 mx-auto col-sm-12 col-xs-12 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="https://i.ibb.co/0sh1B5F/tradishnl.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="blackworkStyle"
                  />
                  <a href="#">
                    <h1 className="text-uppercase text-center item-link px-3">
                      Traditional
                    </h1>
                  </a>
                </div>
              </div>
              <div className="col-10 mx-auto col-sm-12 col-xs-12 col-lg-4 my-3">
                <div className="item-container">
                  <img
                    src="https://i.ibb.co/4VmR1xX/ornamental.jpg"
                    className="img-fluid img-thumbnail item-img"
                    alt="blackworkStyle"
                  />
                  <a href="#">
                    <h1 className="text-uppercase text-center item-link px-3">
                      Ornamental
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="payment">
          <h1 className="text-center oldTitle">СТОИМОСТЬ РАБОТЫ:</h1>
          <h1 className="text-center oldTitle text-uppercase">
            Чтобы определить стоимость работы ты должен:
          </h1>
          <div className="container">
            <div className="row col-md-12 col-sm-12  col-xs-12">
              <div className="col-lg-6">
                <div className="single-item d-flex justify-content-between my-3 py-3">
                  <div className="single-item-text my-3">
                    <h4 className="text-uppercase text-dark">
                      1. Скинуть мне рисунок/эскиз/фото или же описать идею
                      желаемой татуировки.
                    </h4>
                  </div>
                </div>
                <div className="single-item d-flex justify-content-between my-3 py-3">
                  <div className="single-item-text my-3">
                    <h4 className="text-uppercase text-dark">
                      2. Небольшие работы оцениваются индивидуально.
                    </h4>
                  </div>
                </div>
                <div className="single-item d-flex justify-content-between my-3 py-3">
                  <div className="single-item-text my-3">
                    <h4 className="text-uppercase text-dark">
                      3. Если работа крупная, состоящая из несколько сеансов, то
                      возможно разбить цену на несколько сеансов.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-item d-flex justify-content-between my-3 py-3">
                  <div className="single-item-text my-3">
                    <h4 className="text-uppercase text-dark">
                      4. Указать размер в сантиметрах. Ни в коробках, ни в
                      пачках, а именно в САНТИМЕТРАХ.
                    </h4>
                  </div>
                </div>
                <div className="single-item d-flex justify-content-between my-3 py-3">
                  <div className="single-item-text my-3">
                    <h4 className="text-uppercase text-dark">
                      5. Минимальная стоимость 1 татуировки начинается от 400
                      грн.
                    </h4>
                  </div>
                </div>
                <div className="single-item d-flex justify-content-between my-3 py-3">
                  <div className="single-item-text my-3">
                    <h4 className="text-uppercase text-dark">
                      6. Указать желаемое место нанесения (часть тела )
                      предплечье/икра/бедро/плечо и т.д.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='contacts'>
          <div className='container'>
            <div className='row'>
              <h1 className='display-3 newTitle mx-auto text-center'>СВЯЗАТЬСЯ СО МНОЙ</h1>
              <div className='col-4 col-lg-4 mx-auto my-4 d-none d-lg-block'>
                <img
                  src="https://i.ibb.co/ScG27QY/img-9.png"
                  alt="Tatto-img-9"
                  className="img-9 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/4gsg8T5/img-10.png"
                  alt="Tatto-img-10"
                  className="img-10 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/92zT6h1/img-11.png"
                  alt="Tatto-img-11"
                  className="img-11 img-thumbnail about-image"
                />
              </div>
              <div className='col-sm-12 col-xs-12 col-lg-4 mx-auto my-4'>
                <div className='card'>
                  <img src='https://i.ibb.co/YbfJXvb/about-s.png' className='card-img-top' alt='Myself'/>
                  <div className='card-body'>
                    <div className='card-title'>
                      <h1 className='text-center'>Андрей Шутов</h1>
                    </div>
                    <div className='card-footer sc-icons'>
                    <a href="https://www.instagram.com/andrdrims/?hl=ru">
                  <i className="fab fa-instagram  mx-1 mb-3" />
                </a>
<a href="https://www.facebook.com/NikoHomeTattooAndrdrims/">
                  <i className="fab fa-facebook mx-2" />
                </a>
<a href="https://www.vk.com/andrdrim">
                  <i className="fab fa-vk mx-2" />
                </a><br/>
                
                  <i className="fab fa-viber" /><br/>0978803811
                <br/>
                  <i className="fab fa-telegram" /><br/>0978803811
                  </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 col-lg-4 mx-auto my-4 d-none d-lg-block'>
              <img
                  src="https://i.ibb.co/dL2qtk7/img-6.png"
                  alt="Tatto-img-6"
                  className="img-6 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/R63NRjf/img-7.png"
                  alt="Tatto-img-7"
                  className="img-7 img-thumbnail about-image"
                />
                <img
                  src="https://i.ibb.co/qC7Gy5n/img-8.png"
                  alt="Tatto-img-8"
                  className="img-8 img-thumbnail about-image"
                />
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
