import "./NotFound.css";

function NotFound({ history }) {
  function returnClickHandler() {
    history.goBack();
  }
  return (
    <div className='not-found'>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </div>
      <button className='not-found__button' onClick={returnClickHandler}>
        Назад
      </button>
    </div>
  );
}

export default NotFound;
