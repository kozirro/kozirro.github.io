"use strict";

console.log(`Hello world!`);

const list = document.querySelector('.projects-list--js');
if (list) {
    fetch('https://api.github.com/users/kozirro/repos?sort=updated&direction=desc')
        .then(resp => resp.json())
        .then(resp => {
            const repos = resp;
            for (const repo of repos) {
                list.innerHTML +=
                    `<li class="project">
                        <div class="project__container">
                            <img class="project__logo" src="assets/img/GitHub-icon.svg" alt/>
                            <h3 class="project__title">${repo.name}</h3>
                            <p class="project_description"> ${repo.description ? repo.description : "brak opisu"} </p>
                        </div>
                        <div class="project__footer">
                          ${
                            repo.homepage ? '<a class="project__link project__link--demo" href="${repo.homepage}" title="demo: ${repo.name}">Demo</a>': ''
                          }
                          <a class="project__link project__link--code" href="${repo.html_url}" target="_blank" rel="nofollow noreferrer" title="github: ${repo.name}">GitHub</a>
                        </div>
                    </li>`;
            }
        })
        .catch(err => {
            console.log('errors');
        })



}