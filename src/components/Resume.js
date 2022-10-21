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
                1 год в должности инженер-программист в компании ООО “Ригинтел” Занимаюсь поддержкой
                существующего кода одного из проектов компании, а так же разработкой новых
                компонентов. Стек на данном проекте: XML, HTML, CSS, JavaScript(ES5 & ES6), node.js.
                <br></br>
                <br></br>
                Дополнительно занимаюсь разработкой и поддержкой небольших внутренних продуктов со
                стеком: React, node.js, ElectronJS(ElectronForge), SCSS В компании работаем по
                методологии SCRUM
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Resume;
