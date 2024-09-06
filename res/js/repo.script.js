$(document).ready(function(){
    const username = 'minh137';

    $.getJSON(`https://api.github.com/users/${username}/repos`, function(data){

        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        const reposToShow = data.slice(0, 10); //상위 10개 표시
        $.each(reposToShow, function(index, repo){
            const repoHtml = `
                        <li class="my-4">
                            <h1>${repo.name}</h1>
                            <p>${repo.description}</p>
                            <a href="${repo.html_url}" target="_blank">링크</a>
                        </li>
            `;
            $("#repo").append(repoHtml);
        });

    }).fail(function(){
        console.error('에러발생!!');
    });
});