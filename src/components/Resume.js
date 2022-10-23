function Resume() {
  return (
    <>
      <main className="main container">
        <div className="main__my-name bold">Томилин Василий</div>

        <div>
          <ul>
            <li className="main__info-item">
              <div className="main__info-label bold">Специализация:</div>
              <div className="main__info-content">frontend-developer</div>
            </li>
            <li className="main__info-item">
              <div className="main__info-label bold">Контакты:</div>
              <div className="main__info-content content">
                <ul>
                  <li>
                    <a
                      className="main__info-link link"
                      target="blink"
                      href="https://t.me/vv_tomilin">
                      Телеграм
                    </a>
                    <span> (предпочтительный способ связи)</span>
                  </li>
                  <li>
                    <a
                      className="main__info-link link"
                      target="blink"
                      href="mailto:tomilin.work@gmail.com">
                      tomilin.work@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="main__info-link link"
                      target="blink"
                      href="https://github.com/vv-tomilin">
                      GitHub
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </li>
            <li className="main__info-item">
              <div className="main__info-label bold">Резюме на HH.RU:</div>
              <div className="main__info-content content">
                <a
                  className="link"
                  target="blink"
                  href="https://perm.hh.ru/resume/1f516de0ff0b4dea4e0039ed1f7761486d3973">
                  hh.ru
                </a>
              </div>
            </li>
            <li className="main__info-item">
              <div className="main__info-label bold">Опыт работы:</div>
              <div className="main__info-content">
                1 год в должности инженер-программист в компании ООО “Ригинтел”
                <br></br>
                <br></br>
                Занимаюсь поддержкой существующего кода одного из проектов компании, а так же
                разработкой новых компонентов.
                <br></br>
                <br></br>
                Что конкретно делаю: - Исправляю баги которые выявляются в просессе работы ПО, как я
                это делаю - ищу причину бага, пытаясь воспроизвести ее в различных условиях и с
                разными входящими данными, делаю гипотезы на основе информации которую получал при
                исследовании проблеммы, при необходимости изучаю документацию и с помощью этой
                информации исправляю баг, а затем снова тестирую работоспособность модуля в
                различных условиях и с различными входящими данными, чтобы убедиться что все в
                порядке. Работаю с чужим кодом.
                <br></br>
                <br></br>- Разрабатываю новый функционал системы по запросу сотрудников компании
                которые непосредственно работают с системой
                <br></br>
                <br></br>
                Стек на данном проекте: [ XML, HTML, CSS, JavaScript, node.js ]<br></br>
                <br></br>
                <br></br>
                Разработал с нуля и полностью поддерживаю работоспособность внутреннего проекта -
                Дашборд по мониторингу состояния передачи данных.
                <br></br>
                <br></br>
                Стек на данном проекте: [ React, node.js, SCSS ]<br></br>
                <br></br>В компании работаем по Agile (SCRUM).
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Resume;
